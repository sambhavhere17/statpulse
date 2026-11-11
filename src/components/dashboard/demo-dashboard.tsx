"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, Download, Sparkles, Activity } from "lucide-react";
import { CategoryChart, RevenueChart, TargetBars, WeeklyOrdersChart } from "@/components/charts/analytics-charts";
import { demoData } from "@/data/demo";

const viewData = {
  sales: {
    label: "Sales Overview",
    headline: "Revenue Trend",
    submix: "Sales by Category",
    kpis: [
      ["Revenue", "₹5.6L", "+12.4%"],
      ["Profit Margin", "38%", "+2.1%"],
      ["Orders", "1,240", "+8.6%"],
      ["Customers", "892", "+5.3%"],
    ],
  },
  marketing: {
    label: "Marketing Performance",
    headline: "Attributed Revenue",
    submix: "Channel Attribution",
    kpis: [
      ["Attributed Revenue", "₹3.8L", "+9.2%"],
      ["Lead Conversion", "4.8%", "+0.7%"],
      ["Active Campaigns", "18", "+2.0%"],
      ["Cost per Lead", "₹420", "−3.1%"],
    ],
  },
  operations: {
    label: "Operations KPIs",
    headline: "Operational Output",
    submix: "Fulfillment Units",
    kpis: [
      ["Output Volume", "1,180", "+6.8%"],
      ["On-time Delivery", "93%", "+1.4%"],
      ["Open Exceptions", "164", "−4.2%"],
      ["Inventory Turns", "5.2", "+0.3%"],
    ],
  },
  retention: {
    label: "Customer Retention & LTV",
    headline: "Net Retention Curve",
    submix: "Renewal Tiers",
    kpis: [
      ["Net Retention Rate", "108%", "+3.2%"],
      ["Monthly Churn Rate", "1.4%", "−0.4%"],
      ["Average LTV", "₹42,500", "+11.8%"],
      ["CAC Payback", "4.1 mos", "−0.6 mos"],
    ],
  },
} as const;

type ViewKey = keyof typeof viewData;

export function DemoDashboard() {
  const [view, setView] = useState<ViewKey>("sales");
  const [months, setMonths] = useState(6);
  const data = useMemo(() => demoData.yearRevenue.slice(-months), [months]);
  const active = viewData[view];

  const handleExportCsv = () => {
    const headers = "Month,Revenue_INR,Target_INR,Orders,Active_Clients\n";
    const rows = data
      .map(
        (row, idx) =>
          `${row.month},${row.revenue},${Math.round(row.revenue * 0.95)},${120 + idx * 15},${45 + idx * 4}`
      )
      .join("\n");
    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(headers + rows);
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", `statpulse-${view}-analytics-synthetic.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="demo-dashboard">
      <div className="dashboard-toolbar">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="demo-badge">
              <span className="pulse-indicator" /> Sample Dashboard — Synthetic Data
            </span>
            <span className="live-status-pill">
              <Activity size={12} className="text-emerald-500 animate-pulse" />
              <span>Live Engine Simulation</span>
            </span>
          </div>
          <p>Illustrative metrics only. No real business performance is represented.</p>
        </div>

        <div className="dashboard-toolbar-actions">
          <label className="range-select">
            <CalendarDays aria-hidden="true" size={16} />
            <span className="sr-only">Date range</span>
            <select
              onChange={(event) => setMonths(Number(event.target.value))}
              value={months}
              aria-label="Filter timeline"
            >
              <option value={3}>Last 3 months</option>
              <option value={6}>Last 6 months</option>
              <option value={12}>Last 12 months</option>
            </select>
          </label>

          <button
            onClick={handleExportCsv}
            type="button"
            className="csv-export-button"
            title="Download synthetic data sample as CSV"
          >
            <Download size={14} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div aria-label="Sample dashboard views" className="dashboard-tabs" role="tablist">
        {(Object.keys(viewData) as ViewKey[]).map((key) => (
          <button
            aria-selected={view === key}
            className={view === key ? "dashboard-tab is-active" : "dashboard-tab"}
            key={key}
            onClick={() => setView(key)}
            role="tab"
            type="button"
          >
            {viewData[key].label}
          </button>
        ))}
      </div>

      <section aria-label={active.label} className="dashboard-kpis" role="tabpanel">
        {active.kpis.map(([label, value, change]) => (
          <article className="dashboard-kpi" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>
              <ArrowUpRight aria-hidden="true" size={13} />
              {change} <span>synthetic</span>
            </small>
          </article>
        ))}
      </section>

      <div className="dashboard-chart-grid">
        <article className="dashboard-panel dashboard-panel--wide">
          <div className="dashboard-panel-heading">
            <div>
              <p className="eyebrow">SYNTHETIC TREND</p>
              <h2>{active.headline}</h2>
            </div>
            <span>₹ / unit index</span>
          </div>
          <RevenueChart data={data} />
        </article>
        <article className="dashboard-panel">
          <div className="dashboard-panel-heading">
            <div>
              <p className="eyebrow">SYNTHETIC MIX</p>
              <h2>{active.submix}</h2>
            </div>
          </div>
          <CategoryChart />
        </article>
        <article className="dashboard-panel">
          <div className="dashboard-panel-heading">
            <div>
              <p className="eyebrow">SYNTHETIC VOLUME</p>
              <h2>Monthly Orders & Throughput</h2>
            </div>
          </div>
          <WeeklyOrdersChart />
        </article>
        <article className="dashboard-panel dashboard-panel--wide">
          <div className="dashboard-panel-heading">
            <div>
              <p className="eyebrow">ILLUSTRATIVE PLAN</p>
              <h2>Target vs Actual Delivery</h2>
            </div>
          </div>
          <TargetBars />
        </article>
      </div>
    </div>
  );
}
