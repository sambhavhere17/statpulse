import { NextResponse, type NextRequest } from "next/server";
import { getServerEnv } from "@/lib/env";
import { checkLeadRateLimit, hashIp, toLeadRecord } from "@/lib/rate-limit";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { leadSchema } from "@/lib/validation/lead";

async function verifyTurnstile(token: string, secret: string, ip: string) {
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

async function sendLeadNotification(record: { name: string; email: string; service: string; message: string }) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !to || !from) return;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        subject: "New StatPulse Analytics enquiry",
        text: [
          "Name: " + record.name,
          "Email: " + record.email,
          "Service: " + record.service,
          "",
          record.message,
        ].join("\n"),
      }),
      cache: "no-store",
    });
    if (!response.ok) console.warn("Lead notification email could not be sent.");
  } catch {
    console.warn("Lead notification email could not be sent.");
  }
}

export async function POST(request: NextRequest) {
  const env = getServerEnv();
  if (!env.success) {
    return NextResponse.json({ ok: false, error: "Server configuration is invalid." }, { status: 503 });
  }
  const serviceClient = createServiceRoleClient();
  if (!serviceClient) {
    return NextResponse.json(
      { ok: false, error: "The contact form is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Please send a valid form submission." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please review the form fields and try again.", fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const input = parsed.data;
  if (input.website) {
    return NextResponse.json({ ok: false, error: "Unable to accept this submission." }, { status: 400 });
  }
  if (Date.now() - input.startedAt < 2500) {
    return NextResponse.json({ ok: false, error: "Please take a moment to review your message before sending." }, { status: 400 });
  }

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? request.headers.get("x-real-ip")
    ?? "unknown";
  const ipSalt = process.env.IP_HASH_SALT;
  if (!ipSalt || ipSalt.length < 16) {
    return NextResponse.json({ ok: false, error: "The contact form is not configured yet." }, { status: 503 });
  }
  const ipHash = hashIp(clientIp, ipSalt);

  const rateLimit = await checkLeadRateLimit(ipHash);
  if (!rateLimit.ok) {
    if ("limited" in rateLimit && rateLimit.limited) {
      return NextResponse.json({ ok: false, error: "Please try again later." }, { status: 429 });
    }
    return NextResponse.json({ ok: false, error: rateLimit.reason }, { status: 503 });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!input.turnstileToken || !(await verifyTurnstile(input.turnstileToken, turnstileSecret, clientIp))) {
      return NextResponse.json({ ok: false, error: "Please complete the verification and try again." }, { status: 400 });
    }
  }

  const record = toLeadRecord(input, ipHash, request.headers.get("user-agent"));
  const { error } = await serviceClient.from("leads").insert(record);
  if (error) {
    console.error("Lead could not be saved:", error.code);
    return NextResponse.json({ ok: false, error: "We couldn’t save your enquiry. Please try again later." }, { status: 500 });
  }

  await sendLeadNotification(input);
  return NextResponse.json({ ok: true }, { status: 201 });
}
