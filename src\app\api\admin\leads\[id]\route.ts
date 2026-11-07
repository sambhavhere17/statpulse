import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";

const statusSchema = z.object({
  status: z.enum(["new", "contacted", "qualified", "closed"]),
}).strict();

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const sessionClient = await createServerSupabaseClient();
  if (!sessionClient) return NextResponse.json({ ok: false, error: "Admin storage is not configured." }, { status: 503 });
  const { data: claims, error: authError } = await sessionClient.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (authError || typeof userId !== "string") {
    return NextResponse.json({ ok: false, error: "Sign in to update a lead." }, { status: 401 });
  }

  const serviceClient = createServiceRoleClient();
  if (!serviceClient) return NextResponse.json({ ok: false, error: "Admin storage is not configured." }, { status: 503 });
  const { data: admin } = await serviceClient.from("admins").select("user_id").eq("user_id", userId).maybeSingle();
  if (!admin) return NextResponse.json({ ok: false, error: "Administrator access is required." }, { status: 403 });

  const { id } = await context.params;
  const idResult = z.string().uuid().safeParse(id);
  if (!idResult.success) return NextResponse.json({ ok: false, error: "Invalid lead id." }, { status: 400 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }
  const parsed = statusSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Choose a valid lead status." }, { status: 400 });

  const { error } = await serviceClient.from("leads").update({ status: parsed.data.status }).eq("id", idResult.data);
  if (error) return NextResponse.json({ ok: false, error: "Could not update the lead status." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
