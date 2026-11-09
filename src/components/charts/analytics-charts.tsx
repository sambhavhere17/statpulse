"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart3, ShoppingCart, Users } from "lucide-react";
import { demoData } from "@/data/demo";

const axisTick = { fill: "#777C84", fontSize: 12 };
const tooltipStyle = {
  background: "#292C32",
  border: "1px solid #4A4F58",
  borderRadius: 8,
  color: "#fff",
  fontSize: 13,
};

export function RevenueChart({
  compact = false,
  data = demoData.revenue,
}: {
  compact?: boolean;
  data?: readonly { month: string; revenue: number; target: number }[];
}) {
  return (
    <div aria-label="Revenue trend from February through August. Hover a point for the monthly value." className={compact ? "chart-box chart-box--compact chart-box--interactive" : "chart-box chart-box--interactive"} role="img">
      <ResponsiveContainer height="100%" minHeight={compact ? 180 : 250} width="100%">
        <LineChart data={[...data]} margin={{ top: 12, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="#EAE4DC" strokeDasharray="4 5" vertical={false} />
          <XAxis axisLine={false} dataKey="month" tick={axisTick} tickLine={false} />
          <YAxis axisLine={false} domain={[0, 8]} tick={axisTick} tickFormatter={(value: number) => "₹" + value + "L"} tickLine={false} width={52} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "#FF9500", strokeDasharray: "4 4" }} formatter={(value) => ["₹" + value + "L", "Revenue"]} labelFormatter={(label) => label + " performance"} />
          <Line activeDot={{ r: 7, fill: "#fff", stroke: "#FF9500", strokeWidth: 3 }} dataKey="revenue" dot={{ r: 3, fill: "#FF9500", strokeWidth: 0 }} name="Revenue" stroke="#FF9500" strokeWidth={3} type="monotone" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryChart({ compact = false }: { compact?: boolean }) {
  return (
    <div aria-label="Sales mix by category. Hover a segment for its percentage." className={compact ? "chart-box chart-box--donut chart-box--compact chart-box--interactive" : "chart-box chart-box--donut chart-box--interactive"} role="img">
      <div className={compact ? "category-chart-layout category-chart-layout--compact" : "category-chart-layout"}>
        <div className="category-chart-visual">
          <ResponsiveContainer height="100%" minHeight={compact ? 172 : 210} width="100%">
            <PieChart>
              <Pie data={[...demoData.categories]} dataKey="value" innerRadius="58%" outerRadius="82%" paddingAngle={3} stroke="none">
                {demoData.categories.map((entry) => <Cell fill={entry.color} key={entry.name} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} formatter={(value) => [String(value) + "%", "Sales"]} />
              {!compact && <Legend align="center" iconType="circle" layout="horizontal" verticalAlign="bottom" wrapperStyle={{ fontSize: 11 }} />}
            </PieChart>
          </ResponsiveContainer>
        </div>
        {compact && (
          <ul className="category-legend" aria-label="Sales category values">
            {demoData.categories.map((entry) => <li key={entry.name}><span style={{ background: entry.color }} /><span>{entry.name}</span><strong>{entry.value}%</strong></li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

export function WeeklyOrdersChart() {
  return (
    <div aria-label="Synthetic weekly order counts" className="chart-box chart-box--compact" role="img">
      <ResponsiveContainer height="100%" minHeight={190} width="100%">
        <BarChart data={[...demoData.weeklyOrders]} margin={{ top: 12, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="#EAE4DC" strokeDasharray="4 5" vertical={false} />
          <XAxis axisLine={false} dataKey="week" tick={axisTick} tickLine={false} />
          <YAxis axisLine={false} domain={[0, 320]} tick={axisTick} tickLine={false} width={35} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="orders" fill="#FF9500" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TargetBars() {
  const rows = [
    { label: "Revenue", actual: 112, value: "112%", tone: "orange", icon: BarChart3 },
    { label: "Orders", actual: 94, value: "94%", tone: "charcoal", icon: ShoppingCart },
    { label: "New customers", actual: 87, value: "87%", tone: "charcoal", icon: Users },
  ];

  return (
    <div className="target-list">
      {rows.map((row) => {
        const Icon = row.icon;
        return (
          <div className="target-row" key={row.label}>
            <div className="target-label"><span className="target-label-name"><Icon aria-hidden="true" size={17} />{row.label}</span><strong>{row.value}</strong></div>
            <div aria-label={row.label + ": " + row.value + " of target"} className="progress-track" role="img">
              <span className={"progress-fill progress-fill--" + row.tone} style={{ width: Math.min(row.actual, 100) + "%" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
