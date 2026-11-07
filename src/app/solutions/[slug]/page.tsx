import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList, IconTile } from "@/components/ui/icon-tile";
import { industries } from "@/content/industries";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = industries.find((industry) => industry.slug === slug);
  return item ? { title: item.name + " Analytics", description: item.description, alternates: { canonical: "/solutions/" + slug } } : { title: "Solution" };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <section className="page-hero page-hero--cream">
        <div className="container-site">
          <IconTile name={industry.icon} />
          <p className="eyebrow">ILLUSTRATIVE INDUSTRY VIEW</p>
          <h1>{industry.name}</h1>
          <p>{industry.description} The exact measures and data model depend on your business context.</p>
          <ButtonLink arrow href={"/contact?industry=" + industry.slug}>Discuss your reporting needs</ButtonLink>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site detail-grid">
          <article className="detail-card"><p className="eyebrow">COMMON QUESTIONS</p><h2>Reporting challenges to explore</h2><ul className="plain-list">{industry.challenges.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="detail-card"><p className="eyebrow">ILLUSTRATIVE KPIS</p><h2>Possible measures</h2><div className="kpi-tags">{industry.kpis.map((item) => <span key={item}>{item}</span>)}</div><p className="synthetic-note">These examples are illustrative; a KPI should fit the goal and the data available.</p></article>
        </div>
      </section>
      <section className="section section-cream"><div className="container-site detail-card"><p className="eyebrow">EXAMPLE DASHBOARD SCOPE</p><h2>A starting point to shape together</h2><CheckList items={industry.bullets} /><p>Any data model, refresh schedule, and delivery format would be agreed during discovery.</p><ButtonLink arrow href="/dashboard-demo">Explore the sample dashboard</ButtonLink></div></section>
    </>
  );
}
