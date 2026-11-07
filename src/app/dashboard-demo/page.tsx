import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { DemoDashboard } from "@/components/dashboard/demo-dashboard";

export const metadata: Metadata = {
  title: "Dashboard Demo",
  description: "Explore an interactive sample analytics dashboard with deterministic synthetic data.",
  alternates: { canonical: "/dashboard-demo" },
};

export default function DashboardDemoPage() {
  return (
    <>
      <section className="page-hero page-hero--cream page-hero--compact">
        <div className="container-site">
          <p className="eyebrow">LIVE DASHBOARD DEMO</p>
          <h1>Explore a sample <span>business dashboard.</span></h1>
          <p>Change the view and date range to explore example reporting patterns. All displayed values are deterministic synthetic data.</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site">
          <DemoDashboard />
        </div>
      </section>
      <section className="section section-cream">
        <div className="container-site">
          <SectionHeader align="center" eyebrow="BUILT AROUND YOUR DATA" title="A real report starts with your questions" description="The example dashboard is only a demonstration. A client dashboard is scoped around agreed data, definitions, and decisions." />
        </div>
      </section>
    </>
  );
}
