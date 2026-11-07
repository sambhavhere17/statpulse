import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/content/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.problem, alternates: { canonical: "/portfolio/" + slug } } : { title: "Demo Project" };
}

export default async function PortfolioCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="page-hero page-hero--cream">
        <div className="container-site">
          <Link className="back-link" href="/portfolio"><ArrowLeft aria-hidden="true" size={16} /> Portfolio</Link>
          <span className="demo-badge"><span /> Demo Project — Synthetic Data</span>
          <p className="eyebrow">{project.category} · {project.tools.join(" / ")}</p>
          <h1>{project.title}</h1>
          <p>{project.problem}</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site case-study-grid">
          <div className="case-study-chart">
            <div className="case-chart-bars" aria-label="Illustrative synthetic chart" role="img">
              {[40, 62, 52, 73, 58, 85, 68, 95, 71].map((height, index) => <span key={index} style={{ height: height + "%" }} />)}
            </div>
            <p className="synthetic-note">Illustrative visual · Synthetic data</p>
          </div>
          <div className="case-study-copy">
            <SectionHeader eyebrow="APPROACH" title="A repeatable model for useful reporting" />
            <p>{project.approach}</p>
            <h2>Questions this view can help explore</h2>
            <ul className="case-insights">{project.insights.map((insight) => <li key={insight}><Check aria-hidden="true" size={17} />{insight}</li>)}</ul>
            <p className="synthetic-note">This is an illustrative demo, not a client case study. All figures and outcomes are synthetic.</p>
            <ButtonLink arrow href="/contact">Discuss a similar project</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
