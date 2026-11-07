import "server-only";

import type { LeadInput } from "@/lib/validation/lead";
import { hashIp } from "@/lib/security";

export { hashIp } from "@/lib/security";

const rateLimitScript = [
  "local current = redis.call('INCR', KEYS[1])",
  "if current == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end",
  "return current",
].join("\n");

export async function checkLeadRateLimit(ipHash: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { ok: false as const, reason: "Rate limiting is not configured." };

  const response = await fetch(url.replace(/\/$/, ""), {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["EVAL", rateLimitScript, "1", "statpulse:lead:" + ipHash, "3600"]),
    cache: "no-store",
  });

  if (!response.ok) return { ok: false as const, reason: "Rate limiting is temporarily unavailable." };
  const result = (await response.json()) as { result?: number; error?: string };
  if (result.error || typeof result.result !== "number") {
    return { ok: false as const, reason: "Rate limiting is temporarily unavailable." };
  }
  if (result.result > 5) return { ok: false as const, limited: true as const };
  return { ok: true as const };
}

export function toLeadRecord(input: LeadInput, ipHash: string, userAgent: string | null) {
  return {
    name: input.name,
    email: input.email.toLowerCase(),
    service: input.service,
    message: input.message,
    source_page: input.sourcePage,
    ip_hash: ipHash,
    user_agent: userAgent,
  };
}
