import {
  FileSpreadsheet,
  Layers,
  Database,
  BarChart2,
  Workflow,
  Cpu,
  Boxes,
} from "lucide-react";

const platforms = [
  {
    name: "Power BI",
    type: "Enterprise BI & DAX",
    badge: "Microsoft",
  },
  {
    name: "Looker Studio",
    type: "Web & Google Cloud",
    badge: "Google",
  },
  {
    name: "Microsoft Excel",
    type: "Power Query & Models",
    badge: "Spreadsheets",
  },
  {
    name: "PostgreSQL & SQL",
    type: "Relational Queries",
    badge: "Database",
  },
  {
    name: "Google BigQuery",
    type: "Cloud Data Warehouse",
    badge: "Cloud",
  },
  {
    name: "Snowflake",
    type: "Data Architecture",
    badge: "Warehouse",
  },
  {
    name: "Python & Pandas",
    type: "ETL & Scripting",
    badge: "Automation",
  },
  {
    name: "Supabase & Postgres",
    type: "Real-time Backends",
    badge: "Storage",
  },
];

export function TechStackStrip() {
  return (
    <div className="tech-stack-section">
      <div className="container-site">
        <div className="tech-stack-intro">
          <p className="eyebrow eyebrow--center">COMPATIBILITY & ECOSYSTEM</p>
          <h2 className="tech-stack-heading">
            Engineered For Your <span>Modern Data Stack</span>
          </h2>
          <p className="tech-stack-subhead">
            No proprietary lock-in. We build, optimize, and hand over dashboards in the tools
            your team already uses every day.
          </p>
        </div>

        <div className="tech-stack-grid">
          {platforms.map((platform) => (
            <div className="tech-stack-card" key={platform.name}>
              <div className="tech-stack-top">
                <span className="tech-badge">{platform.badge}</span>
                <span className="tech-status-dot" aria-hidden="true" />
              </div>
              <h3>{platform.name}</h3>
              <p>{platform.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
