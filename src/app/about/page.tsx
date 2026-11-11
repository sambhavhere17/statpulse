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
      {/* 2. FOUNDER STORY (StatPulse Cream Background, Two Columns)                */}
      {/* ========================================================================= */}
      <section className="about-founder-section" aria-labelledby="founder-story-title">
        <div className="about-container about-founder-grid">
          {/* Left: Founder Profile Card */}
          <article className="founder-card" aria-label="Founder Profile">
            <div className="founder-avatar-box">
              <span className="founder-initials">SJ</span>
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

          {/* Right: Narrative Story */}
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
      {/* 4. WHAT WE DO (4 White Cards with StatPulse Orange Accent)                */}
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
              <div className="service-icon-box">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="service-title">Cut costs</h3>
              <p className="service-text">
                Find the waste and inefficiency hiding in your data.
              </p>
            </article>

            {/* Card 2 */}
            <article className="service-feature-card">
              <div className="service-icon-box">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="service-title">Boost productivity</h3>
              <p className="service-text">
                Clear insights and smarter workflows for your team.
              </p>
            </article>

            {/* Card 3 */}
            <article className="service-feature-card">
              <div className="service-icon-box">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="service-title">Decide with confidence</h3>
              <p className="service-text">
                Back every important call with numbers, not guesses.
              </p>
            </article>

            {/* Card 4 */}
            <article className="service-feature-card">
              <div className="service-icon-box">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="service-title">Stay affordable</h3>
              <p className="service-text">
                Great analytics at a very low cost, for companies of every size.
              </p>
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
      {/* 6. TEAM (4 Clean Placeholder Cards)                                      */}
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
              <div className="team-image-box">
                <svg
                  className="team-placeholder-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="team-name">[TEAM MEMBER NAME]</h3>
              <p className="team-role">[ROLE]</p>
            </article>

            {/* Team Member 2 */}
            <article className="team-card">
              <div className="team-image-box">
                <svg
                  className="team-placeholder-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="team-name">[TEAM MEMBER NAME]</h3>
              <p className="team-role">[ROLE]</p>
            </article>

            {/* Team Member 3 */}
            <article className="team-card">
              <div className="team-image-box">
                <svg
                  className="team-placeholder-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="team-name">[TEAM MEMBER NAME]</h3>
              <p className="team-role">[ROLE]</p>
            </article>

            {/* Team Member 4 */}
            <article className="team-card">
              <div className="team-image-box">
                <svg
                  className="team-placeholder-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CF7100"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="team-name">[TEAM MEMBER NAME]</h3>
              <p className="team-role">[ROLE]</p>
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
