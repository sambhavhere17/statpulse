import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList, IconTile } from "@/components/ui/icon-tile";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/content/services";
import { pricingFootnote } from "@/config/site";

export const metadata: Metadata = {
  title: "Analytics Services",
  description: "Explore dashboard development, data health checks, reporting automation, and ongoing analytics support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--cream">
        <div className="container-site">
          <p className="eyebrow">SERVICES</p>
          <h1>Practical analytics for <span>better decisions.</span></h1>
          <p>From understanding your data to building a repeatable reporting workflow, choose a focused service to match your next step.</p>
          <ButtonLink arrow href="/book">Book a Free Consultation</ButtonLink>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site">
          <SectionHeader align="center" eyebrow="WAYS TO WORK TOGETHER" title="Start with the problem you need to solve" />
          <div className="service-grid">
            {services.map((service) => (
              <article className={("popular" in service && service.popular) ? "service-card service-card--featured" : "service-card"} key={service.slug}>
                <IconTile name="BarChart3" />
                <span className="service-price-label">{service.cadence} · {service.price}</span>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <CheckList items={service.deliverables} />
                <Link className="card-link" href={"/services/" + service.slug}>Explore service <ArrowRight aria-hidden="true" size={16} /></Link>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">{pricingFootnote}</p>
        </div>
      </section>
      <section className="section section-cream">
        <div className="container-site service-differences">
          <SectionHeader eyebrow="HOW THE SERVICES DIFFER" title="A clear scope for each kind of work" />
          <div className="difference-list">
            <p><strong>Dashboard development</strong> creates a shared visual view of agreed KPIs and trends.</p>
            <p><strong>Data analysis</strong> explores a focused question and explains patterns the available data can support.</p>
            <p><strong>Reporting automation</strong> standardises repeatable data preparation and report delivery where sources permit.</p>
            <p><strong>Ongoing support</strong> provides recurring, agreed maintenance and analysis as questions change.</p>
          </div>
        </div>
      </section>
    </>
  );
}
