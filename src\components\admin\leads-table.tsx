"use client";

import { useMemo, useState } from "react";
import { Download, Search, X } from "lucide-react";

export type LeadRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "closed";
};

const pageSize = 10;
const statuses: LeadRow["status"][] = ["new", "contacted", "qualified", "closed"];

function csvCell(value: string) {
  const safeValue = /^[=+\-@]/.test(value) ? "'" + value : value;
  return '"' + safeValue.replaceAll('"', '""') + '"';
}

export function LeadsTable({ initialLeads }: { initialLeads: LeadRow[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<LeadRow | null>(null);
  const [notice, setNotice] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const statusMatches = status === "all" || lead.status === status;
      const queryMatches = !search || [lead.name, lead.email, lead.service, lead.message].some((value) => value.toLowerCase().includes(search));
      return statusMatches && queryMatches;
    });
  }, [leads, query, status]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageLeads = filtered.slice((page - 1) * pageSize, page * pageSize);

  async function updateStatus(id: string, nextStatus: LeadRow["status"]) {
    setNotice("");
    setBusyId(id);
    try {
      const response = await fetch("/api/admin/leads/" + encodeURIComponent(id), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "Status update failed.");
      setLeads((current) => current.map((lead) => lead.id === id ? { ...lead, status: nextStatus } : lead));
      setSelected((current) => current?.id === id ? { ...current, status: nextStatus } : current);
      setNotice("Lead status updated.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Status update failed.");
    } finally {
      setBusyId(null);
    }
  }

  function exportCsv() {
    const rows = [
      ["Created", "Name", "Email", "Service", "Status", "Message"],
      ...filtered.map((lead) => [lead.created_at, lead.name, lead.email, lead.service, lead.status, lead.message]),
    ];
    const csv = rows.map((row) => row.map(csvCell).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "statpulse-leads.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="leads-admin">
      <div className="leads-toolbar">
        <label className="search-field"><Search aria-hidden="true" size={17} /><span className="sr-only">Search leads</span><input onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search name, email, or message" value={query} /></label>
        <label className="status-filter"><span className="sr-only">Filter by status</span><select onChange={(event) => { setStatus(event.target.value); setPage(1); }} value={status}><option value="all">All statuses</option>{statuses.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        <button className="button button--secondary export-button" onClick={exportCsv} type="button"><Download aria-hidden="true" size={16} /> Export CSV</button>
      </div>
      {notice && <p aria-live="polite" className="admin-notice">{notice}</p>}
      <div className="table-scroll">
        <table className="leads-table">
          <thead><tr><th scope="col">Submitted</th><th scope="col">Name</th><th scope="col">Service</th><th scope="col">Status</th><th scope="col">Message</th></tr></thead>
          <tbody>
            {pageLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                <td><button className="lead-name-button" onClick={() => setSelected(lead)} type="button"><strong>{lead.name}</strong><span>{lead.email}</span></button></td>
                <td>{lead.service}</td>
                <td><select aria-label={"Status for " + lead.name} disabled={busyId === lead.id} onChange={(event) => updateStatus(lead.id, event.target.value as LeadRow["status"])} value={lead.status}>{statuses.map((item) => <option key={item} value={item}>{item}</option>)}</select></td>
                <td className="lead-message-cell"><button onClick={() => setSelected(lead)} type="button">{lead.message}</button></td>
              </tr>
            ))}
            {pageLeads.length === 0 && <tr><td className="empty-leads" colSpan={5}>No leads match these filters.</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="table-pagination">
        <span>{filtered.length} lead{filtered.length === 1 ? "" : "s"} · page {page} of {pageCount}</span>
        <div><button className="button button--secondary" disabled={page <= 1} onClick={() => setPage((value) => value - 1)} type="button">Previous</button><button className="button button--secondary" disabled={page >= pageCount} onClick={() => setPage((value) => value + 1)} type="button">Next</button></div>
      </div>
      {selected && (
        <div className="lead-drawer-backdrop" onClick={() => setSelected(null)}>
          <section aria-labelledby="lead-drawer-title" aria-modal="true" className="lead-drawer" onClick={(event) => event.stopPropagation()} role="dialog">
            <div className="drawer-heading"><div><p className="eyebrow">LEAD DETAIL</p><h2 id="lead-drawer-title">{selected.name}</h2></div><button aria-label="Close lead details" className="icon-close" onClick={() => setSelected(null)} type="button"><X size={20} /></button></div>
            <dl><dt>Email</dt><dd><a href={"mailto:" + selected.email}>{selected.email}</a></dd><dt>Service</dt><dd>{selected.service}</dd><dt>Submitted</dt><dd>{new Date(selected.created_at).toLocaleString()}</dd><dt>Status</dt><dd>{selected.status}</dd><dt>Message</dt><dd className="drawer-message">{selected.message}</dd></dl>
            <label className="drawer-status">Update status<select disabled={busyId === selected.id} onChange={(event) => updateStatus(selected.id, event.target.value as LeadRow["status"])} value={selected.status}>{statuses.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
          </section>
        </div>
      )}
    </div>
  );
}
