import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { AdminLoginForm } from "@/components/admin/login-form";

export const metadata: Metadata = { title: "Admin Login", robots: { index: false, follow: false } };

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ setup?: string; unauthorized?: string }>;
}) {
  const query = await searchParams;
  return (
    <section className="admin-login-page">
      <div className="container-site admin-login-layout">
        <div className="admin-login-aside"><Logo /><p>Private access for StatPulse Analytics administrators.</p><Link href="/">← Return to the public site</Link></div>
        <Suspense fallback={<p className="admin-setup-message">Loading sign-in…</p>}>
          <div>
            {query.setup === "required" && <p className="admin-setup-message">Supabase is not configured. Add the required environment variables before signing in.</p>}
            {query.unauthorized === "1" && <p className="admin-setup-message">This account is not listed as an administrator.</p>}
            <AdminLoginForm />
          </div>
        </Suspense>
      </div>
    </section>
  );
}
