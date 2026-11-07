import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList, IconTile } from "@/components/ui/icon-tile";
import { SectionHeader } from "@/components/ui/section-header";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Analytics Solutions",
  description: "Illustrative KPI and reporting approaches for e-commerce, SMEs, agencies, and operations teams.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero page-hero--cream">
        <div className="container-site">
          <p className="eyebrow">SOLUTIONS</p>
          <h1>Analytics built around <span>your operating questions.</span></h1>
          <p>Explore illustrative reporting challenges and measures for different kinds of teams. The right KPI set depends on your goals and available data.</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site solution-detail-list">
          {industries.map((industry) => (
            <article className="solution-detail-card" id={industry.slug} key={industry.slug}>
              <div className="solution-detail-heading">
                <IconTile name={industry.icon} />
                <div><p className="eyebrow">INDUSTRY EXAMPLE · ILLUSTRATIVE</p><h2>{industry.name}</h2><p>{industry.description}</p></div>
              </div>
              <div className="solution-detail-columns">
                <div><h3>Typical reporting challenges</h3><ul>{industry.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>Illustrative KPIs</h3><div className="kpi-tags">{industry.kpis.map((item) => <span key={item}>{item}</span>)}</div></div>
                <div><h3>Possible dashboard scope</h3><CheckList items={industry.bullets} /></div>
              </div>
              <Link className="card-link" href={"/contact?industry=" + industry.slug}>Discuss this solution <ArrowRight aria-hidden="true" size={16} /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-band"><div className="container-site cta-band-inner"><div><p className="eyebrow eyebrow--dark">START WITH A QUESTION</p><h2>Build around the decision you need to make.</h2><p>We’ll help define the source data, measures, and deliverables before work begins.</p></div><ButtonLink arrow href="/book" variant="dark">Book a Free Consultation</ButtonLink></div></section>
    </>
  );
}
