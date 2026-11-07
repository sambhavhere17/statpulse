import "server-only";

import { redirect } from "next/navigation";
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server";

export async function requireAdmin() {
  const sessionClient = await createServerSupabaseClient();
  if (!sessionClient) redirect("/admin/login?setup=required");

  const { data, error } = await sessionClient.auth.getClaims();
  const userId = data?.claims?.sub;
  if (error || typeof userId !== "string") redirect("/admin/login");

  const serviceClient = createServiceRoleClient();
  if (!serviceClient) return { userId, serviceClient: null };

  const { data: admin, error: adminError } = await serviceClient
    .from("admins")
    .select("user_id")
    .eq("user_id", userId)
    .maybeSingle();

  if (adminError || !admin) redirect("/admin/login?unauthorized=1");
  return { userId, serviceClient };
}
