"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { CategoryChart, RevenueChart, TargetBars, WeeklyOrdersChart } from "@/components/charts/analytics-charts";
import { demoData } from "@/data/demo";

const viewData = {
  sales: {
    label: "Sales Overview",
    kpis: [
      ["Revenue", "₹5.6L", "+12.4%"],
      ["Profit Margin", "38%", "+2.1%"],
      ["Orders", "1,240", "+8.6%"],
      ["Customers", "892", "+5.3%"],
    ],
  },
  marketing: {
    label: "Marketing Performance",
    kpis: [
      ["Attributed Revenue", "₹3.8L", "+9.2%"],
      ["Lead Conversion", "4.8%", "+0.7%"],
      ["Campaigns", "18", "+2.0%"],
      ["Cost per Lead", "₹420", "−3.1%"],
    ],
  },
  operations: {
    label: "Operations KPIs",
    kpis: [
      ["Output", "1,180", "+6.8%"],
      ["On-time Delivery", "93%", "+1.4%"],
      ["Open Orders", "164", "−4.2%"],
      ["Inventory Turns", "5.2", "+0.3%"],
    ],
  },
} as const;

type ViewKey = keyof typeof viewData;

export function DemoDashboard() {
  const [view, setView] = useState<ViewKey>("sales");
  const [months, setMonths] = useState(6);
  const data = useMemo(() => demoData.yearRevenue.slice(-months), [months]);
  const active = viewData[view];

  return (
    <div className="demo-dashboard">
      <div className="dashboard-toolbar">
        <div>
          <span className="demo-badge"><span /> Sample Dashboard — Synthetic Data</span>
          <p>Illustrative metrics only. No real business performance is represented.</p>
        </div>
        <label className="range-select">
          <CalendarDays aria-hidden="true" size={16} />
          <span className="sr-only">Date range</span>
          <select onChange={(event) => setMonths(Number(event.target.value))} value={months}>
            <option value={3}>Last 3 months</option>
            <option value={6}>Last 6 months</option>
            <option value={12}>Last 12 months</option>
          </select>
        </label>
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
            <small><ArrowUpRight aria-hidden="true" size={13} />{change} <span>illustrative</span></small>
          </article>
        ))}
      </section>
      <div className="dashboard-chart-grid">
        <article className="dashboard-panel dashboard-panel--wide">
          <div className="dashboard-panel-heading"><div><p className="eyebrow">SYNTHETIC TREND</p><h2>{view === "sales" ? "Revenue trend" : view === "marketing" ? "Attributed revenue" : "Operational output"}</h2></div><span>₹ / unit index</span></div>
          <RevenueChart data={data} />
        </article>
        <article className="dashboard-panel">
          <div className="dashboard-panel-heading"><div><p className="eyebrow">SYNTHETIC MIX</p><h2>{view === "marketing" ? "Channel mix" : "Sales by category"}</h2></div></div>
          <CategoryChart />
        </article>
        <article className="dashboard-panel">
          <div className="dashboard-panel-heading"><div><p className="eyebrow">SYNTHETIC VOLUME</p><h2>Monthly orders</h2></div></div>
          <WeeklyOrdersChart />
        </article>
        <article className="dashboard-panel dashboard-panel--wide">
          <div className="dashboard-panel-heading"><div><p className="eyebrow">ILLUSTRATIVE PLAN</p><h2>Target vs actual</h2></div></div>
          <TargetBars />
        </article>
      </div>
    </div>
  );
}
