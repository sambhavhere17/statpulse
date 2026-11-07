import { z } from "zod";

const optionalUrl = z.string().url().or(z.literal("")).optional();
const serverEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: optionalUrl,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  UPSTASH_REDIS_REST_URL: optionalUrl,
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  IP_HASH_SALT: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional().or(z.literal("")),
  LEAD_NOTIFY_EMAIL: z.string().email().optional().or(z.literal("")),
});

export function getServerEnv() {
  return serverEnvSchema.safeParse(process.env);
}

export function getSupabasePublicConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const parsed = z.object({ url: z.string().url(), key: z.string().min(1) }).safeParse({ url, key });
  return parsed.success ? parsed.data : null;
}
