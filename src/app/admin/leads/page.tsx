import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";
import { LeadsTable, type LeadRow } from "@/components/admin/leads-table";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/admin";

export const metadata: Metadata = { title: "Lead Inbox", robots: { index: false, follow: false } };

export default async function AdminLeadsPage() {
  const { serviceClient } = await requireAdmin();
  if (!serviceClient) {
    return <AdminSetupNotice />;
  }

  const { data, error } = await serviceClient
    .from("leads")
    .select("id, created_at, name, email, service, message, status")
    .order("created_at", { ascending: false })
    .range(0, 499);

  if (error) {
    return (
      <section className="admin-page">
        <div className="container-site admin-error-card">
          <p className="eyebrow">LEAD INBOX</p>
          <h1>Lead storage is not ready.</h1>
          <p>Apply the Supabase migration and confirm the service-role key is configured.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <div className="container-site">
        <header className="admin-page-header">
          <div><p className="eyebrow">PRIVATE ADMIN AREA</p><h1>Lead inbox</h1><p>Only authorised admins can access these enquiries.</p></div>
          <form action={async () => {
            "use server";
            const supabase = await createServerSupabaseClient();
            await supabase?.auth.signOut();
            redirect("/admin/login");
          }}>
            <button className="button button--secondary" type="submit"><LogOut aria-hidden="true" size={16} /> Sign out</button>
          </form>
        </header>
        <LeadsTable initialLeads={(data ?? []) as LeadRow[]} />
      </div>
    </section>
  );
}

function AdminSetupNotice() {
  return (
    <section className="admin-page">
      <div className="container-site admin-error-card">
        <p className="eyebrow">LEAD INBOX</p>
        <h1>Admin storage is not configured.</h1>
        <p>Add the server-only Supabase service-role key and complete the database migration before accessing leads.</p>
      </div>
    </section>
  );
}
