import type { Metadata } from "next";
import Link from "next/link";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about StatPulse Analytics, our founder Sambhav Jain, and our mission to provide high-impact, affordable business intelligence for startups and growing companies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="statpulse-about-page">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (StatPulse Dark Charcoal with Orange Heartbeat Pulse)     */}
      {/* ========================================================================= */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-container about-hero-content">
          <span className="about-hero-tag">ABOUT STATPULSE</span>
          <h1 id="about-hero-title" className="about-hero-heading">
            Every business has a <span>heartbeat.</span> Most just can&apos;t hear it.
          </h1>
          <p className="about-hero-subtext">
            StatPulse turns raw data into clear direction, so startups and growing
            companies can cut costs, move faster and decide with confidence, at a
            price that makes sense.
          </p>
        </div>

        {/* Orange pulse-line (heartbeat) SVG across the bottom of the hero */}
        <div className="pulse-line-wrapper" aria-hidden="true">
          <svg
            className="pulse-line-svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 L420,50 L450,50 L470,18 L488,82 L508,8 L526,92 L542,50 L565,50 L1200,50"
              stroke="#FF9500"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUNDER STORY (StatPulse Cream Background, Two Columns with Photo)     */}
      {/* ========================================================================= */}
      <section className="about-founder-section" aria-labelledby="founder-story-title">
        <div className="about-container about-founder-grid">
          {/* Left: Founder Profile Card */}
          <article className="founder-card" aria-label="Founder Profile">
            <div className="founder-photo-wrapper">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                alt="Sambhav Jain — Founder of StatPulse"
                className="founder-photo"
                loading="lazy"
              />
              <span className="founder-verified-badge" title="Verified Founder">
                <span className="badge-pulse-dot" /> Verified
              </span>
            </div>
            <div className="founder-meta">
              <h3 className="founder-name">Sambhav Jain</h3>
              <p className="founder-role">Founder, StatPulse</p>
            </div>
            <hr className="founder-divider" />
            <ul className="founder-facts-list">
              <li>
                <svg
                  className="fact-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>B.Tech, Delhi Technological University (DTU)</span>
              </li>
              <li>
                <svg
                  className="fact-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span>96 percentile in JEE Mains 2023</span>
              </li>
              <li>
                <svg
                  className="fact-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span>Freelancing in data analytics since 2024 (100+ projects delivered)</span>
              </li>
              <li>
                <svg
                  className="fact-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>StatPulse is his first brand, run with a professional team</span>
              </li>
            </ul>
          </article>

          {/* Right: Narrative Story + Enterprise Collaboration Visual */}
          <div className="founder-story-copy">
            <span className="section-label">OUR STORY</span>
            <h2 id="founder-story-title" className="section-title">
              Good analytics shouldn&apos;t be a luxury.
            </h2>
            <div className="story-paragraphs">
              <p>
                At DTU, he saw businesses sitting on mountains of data but deciding
                in the dark, while big companies had analytics teams and startups had
                spreadsheets and gut feeling.
              </p>
              <p>
                He didn&apos;t think that was fair. After working as a freelancer in
                this space since 2024 and delivering over 100+ projects, he built
                StatPulse with a professional team who believe data should work for
                everyone.
              </p>
              <p>
                Today StatPulse has helped 20+ startups and companies turn raw
                numbers into real direction.
              </p>
            </div>

            {/* Enterprise Collaboration Banner (EXL-inspired visual) */}
            <div className="story-image-card">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                alt="StatPulse team reviewing analytics metrics with clients"
                className="story-image"
                loading="lazy"
              />
              <div className="story-image-overlay">
                <div className="floating-metric-pill">
                  <span className="metric-pill-num">100+</span>
                  <span className="metric-pill-lbl">Projects Delivered</span>
                </div>
                <div className="floating-metric-pill">
                  <span className="metric-pill-num">20+</span>
                  <span className="metric-pill-lbl">Startups Scaled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. NUMBERS STRIP (StatPulse Dark Charcoal Cards, Orange Numerals)         */}
      {/* ========================================================================= */}
      <section className="about-numbers-section" aria-label="Key Numbers">
        <div className="about-container numbers-grid">
          <article className="number-card">
            <strong className="number-stat">20+</strong>
            <p className="number-caption">startups and companies served</p>
          </article>
          <article className="number-card">
            <strong className="number-stat">Low</strong>
            <p className="number-caption">cost analytics, built for real budgets</p>
          </article>
          <article className="number-card">
            <strong className="number-stat">Pro</strong>
            <p className="number-caption">team behind every solution</p>
          </article>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT WE DO (4 Image Cards with StatPulse Orange Accent)                */}
      {/* ========================================================================= */}
      <section className="about-what-we-do-section" aria-labelledby="what-we-do-title">
        <div className="about-container">
          <div className="section-header-centered">
            <span className="section-label">WHAT WE DO</span>
            <h2 id="what-we-do-title" className="section-title">
              High-impact analytics, built for practical growth.
            </h2>
          </div>

          <div className="what-we-do-grid">
            {/* Card 1 */}
            <article className="service-feature-card">
              <div className="card-image-box">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                  alt="Cost analysis and financial efficiency dashboards"
                  className="card-feature-img"
                  loading="lazy"
                />
                <span className="card-badge-pill">Cost Optimization</span>
              </div>
              <div className="card-body-content">
                <h3 className="service-title">Cut costs</h3>
                <p className="service-text">
                  Find the waste and inefficiency hiding in your data.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="service-feature-card">
              <div className="card-image-box">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
                  alt="Team productivity and agile sprint analytics"
                  className="card-feature-img"
                  loading="lazy"
                />
                <span className="card-badge-pill">Workflow Intelligence</span>
              </div>
              <div className="card-body-content">
                <h3 className="service-title">Boost productivity</h3>
                <p className="service-text">
                  Clear insights and smarter workflows for your team.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="service-feature-card">
              <div className="card-image-box">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="Confident decision making through BI data visualizations"
                  className="card-feature-img"
                  loading="lazy"
                />
                <span className="card-badge-pill">Decision Models</span>
              </div>
              <div className="card-body-content">
                <h3 className="service-title">Decide with confidence</h3>
                <p className="service-text">
                  Back every important call with numbers, not guesses.
                </p>
              </div>
            </article>

            {/* Card 4 */}
            <article className="service-feature-card">
              <div className="card-image-box">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                  alt="Collaborative consulting for growing businesses"
                  className="card-feature-img"
                  loading="lazy"
                />
                <span className="card-badge-pill">Budget Friendly</span>
              </div>
              <div className="card-body-content">
                <h3 className="service-title">Stay affordable</h3>
                <p className="service-text">
                  Great analytics at a very low cost, for companies of every size.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHAT WE BELIEVE (StatPulse Cream Card Panel with Warm Border)          */}
      {/* ========================================================================= */}
      <section className="about-belief-section" aria-label="Our Beliefs">
        <div className="about-container">
          <div className="belief-panel">
            <span className="section-label">WHAT WE BELIEVE</span>
            <blockquote className="belief-quote">
              &ldquo;Data is only powerful when someone can act on it.&rdquo;
            </blockquote>
            <p className="belief-support">
              We don&apos;t just hand over dashboards and reports. We build solutions
              that fit your business, speak your language and deliver results you
              can measure.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TEAM (Professional Consultant Profiles with Photography)               */}
      {/* ========================================================================= */}
      <section className="about-team-section" aria-labelledby="team-heading">
        <div className="about-container">
          <div className="section-header-centered">
            <span className="section-label">OUR PEOPLE</span>
            <h2 id="team-heading" className="section-title">
              The professional team behind StatPulse
            </h2>
          </div>

          <div className="team-grid">
            {/* Team Member 1 */}
            <article className="team-card">
              <div className="team-photo-box">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Senior Data Architect"
                  className="team-member-img"
                  loading="lazy"
                />
              </div>
              <h3 className="team-name">Senior Data Architect</h3>
              <p className="team-role">Data Pipelines & Architecture</p>
            </article>

            {/* Team Member 2 */}
            <article className="team-card">
              <div className="team-photo-box">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                  alt="Power BI & DAX Specialist"
                  className="team-member-img"
                  loading="lazy"
                />
              </div>
              <h3 className="team-name">BI Solutions Lead</h3>
              <p className="team-role">Power BI & Looker Studio</p>
            </article>

            {/* Team Member 3 */}
            <article className="team-card">
              <div className="team-photo-box">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
                  alt="ETL & Python Automation Engineer"
                  className="team-member-img"
                  loading="lazy"
                />
              </div>
              <h3 className="team-name">Automation Engineer</h3>
              <p className="team-role">ETL & Scripted Workflows</p>
            </article>

            {/* Team Member 4 */}
            <article className="team-card">
              <div className="team-photo-box">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                  alt="Client Growth & Analytics Consultant"
                  className="team-member-img"
                  loading="lazy"
                />
              </div>
              <h3 className="team-name">Analytics Consultant</h3>
              <p className="team-role">Client Strategy & Handover</p>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLOSING CTA (StatPulse Dark Charcoal Section, Centered)                */}
      {/* ========================================================================= */}
      <section className="about-cta-section" aria-labelledby="about-cta-title">
        <div className="about-container about-cta-inner">
          <h2 id="about-cta-title" className="about-cta-heading">
            Feel the pulse of your business.
          </h2>
          <p className="about-cta-text">
            Tell us what you&apos;re trying to improve and we&apos;ll show you what your
            data already knows.
          </p>
          <Link href="/contact" className="orange-pill-button">
            Talk to StatPulse
          </Link>
        </div>
      </section>
    </main>
  );
}
