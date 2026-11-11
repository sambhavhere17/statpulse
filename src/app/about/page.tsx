import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about StatPulse Analytics' approach to practical dashboards and business reporting.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--cream">
        <div className="container-site">
          <p className="eyebrow">ABOUT STATPULSE</p>
          <h1>Clarity from data, <span>built around the work.</span></h1>
          <p>StatPulse Analytics helps growing businesses turn raw business data into dashboards, automated reports, and decisions teams can act on.</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container-site about-grid">
          <article className="about-card"><p className="eyebrow">OUR MISSION</p><h2>Make business information easier to use.</h2><p>We focus on understandable measures, a clear reporting process, and practical next steps that reflect the data available.</p></article>
          <article className="about-card"><p className="eyebrow">OUR VISION</p><h2>Better decisions start with better questions.</h2><p>Analytics should help teams see their work more clearly and understand the limits of the information in front of them.</p></article>
        </div>
      </section>
      <section className="section section-cream founder-section">
        <div className="container-site founder-profile">
          <figure className="founder-photo"><Image alt="StatPulse founder" height={720} priority src="/images/statpulse-founder.jpg" width={720} /></figure>
          <div className="founder-copy"><p className="eyebrow">FOUNDER</p><h2>Practical analytics, built around the way your business works.</h2><p>StatPulse brings business consulting, KPI design, reporting systems, and workflow automation together to help teams make clearer decisions and improve performance.</p></div>
        </div>
      </section>
      <section className="section section-cream">
        <div className="container-site">
          <SectionHeader align="center" eyebrow="HOW WE WORK" title="A straightforward, collaborative process" />
          <div className="values-grid">
            <article><h3>Start with context</h3><p>Clarify the decision, audience, and data before selecting a chart or tool.</p></article>
            <article><h3>Make scope explicit</h3><p>Agree on deliverables, assumptions, source access, and review steps up front.</p></article>
            <article><h3>Explain the limits</h3><p>Separate what the data shows from assumptions and questions it cannot answer.</p></article>
          </div>
          <div className="center-action"><ButtonLink arrow href="/contact">Start a conversation</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
