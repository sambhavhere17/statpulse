import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/icon-tile";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/content/services";
import { pricingFootnote } from "@/config/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service
    ? { title: service.name, description: service.description, alternates: { canonical: "/services/" + slug } }
    : { title: "Service" };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="page-hero page-hero--cream">
        <div className="container-site">
          <p className="eyebrow">SERVICE DETAILS</p>
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <div className="detail-price"><strong>{service.price}</strong><span>{service.cadence}</span></div>
          <ButtonLink arrow href={"/contact?service=" + service.slug}>Discuss this service</ButtonLink>
          <p className="pricing-footnote">{pricingFootnote}</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site detail-grid">
          <article className="detail-card">
            <SectionHeader eyebrow="THE CHALLENGE" title="What this service helps clarify" />
            <p>{service.problem}</p>
            <h2>Who may benefit</h2>
            <p>{service.whoBenefits}</p>
          </article>
          <article className="detail-card">
            <SectionHeader eyebrow="DELIVERABLES" title="What the scope can include" />
            <CheckList items={service.deliverables} />
          </article>
        </div>
      </section>
      <section className="section section-cream">
        <div className="container-site">
          <SectionHeader align="center" eyebrow="ENGAGEMENT PROCESS" title="Agree on the work before it starts" />
          <ol className="engagement-list">
            {service.process.map((step, index) => (
              <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>
            ))}
          </ol>
          <div className="center-action"><ButtonLink arrow href="/book">Book a Free Consultation</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
