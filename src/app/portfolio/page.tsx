import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import { PortfolioFilter } from "@/components/portfolio/portfolio-filter";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Illustrative dashboard and reporting demos built with synthetic data.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero page-hero--cream">
        <div className="container-site">
          <p className="eyebrow">PORTFOLIO</p>
          <h1>Demonstrating the <span>power of data.</span></h1>
          <p>Representative demo projects using synthetic data. They show possible structures and workflows, not client engagements or results.</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site">
          <SectionHeader eyebrow="DEMO PROJECTS" title="Explore by tool or topic" />
          <PortfolioFilter />
        </div>
      </section>
    </>
  );
}
