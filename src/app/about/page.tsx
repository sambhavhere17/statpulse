import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about StatPulse Analytics, our founder Sambhav Jain, and our mission to provide high-impact data analytics for startups and growing companies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="statpulse-about-page">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Background #0C1A19 with Mint Pulse Line)           */}
      {/* ========================================================================= */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-container about-hero-content">
          <span className="about-hero-tag">ABOUT STATPULSE</span>
          <h1 id="about-hero-title" className="about-hero-heading">
            Every business has a heartbeat. Most just can&apos;t hear it.
          </h1>
          <p className="about-hero-subtext">
            StatPulse turns raw data into clear direction, so startups and growing
            companies can cut costs, move faster and decide with confidence, at a
            price that makes sense.
          </p>
        </div>

        {/* Mint pulse-line (heartbeat) SVG across the bottom of the hero */}
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
              stroke="#3DDBC4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUNDER STORY (Light Background #F5F8F7, Two Columns)                  */}
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
      {/* 3. NUMBERS STRIP (Three Dark Cards, Big Mint Numerals #3DDBC4)            */}
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
      {/* 4. WHAT WE DO (4 White Cards in a Grid, Inline Stroke SVGs)               */}
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
      {/* 5. WHAT WE BELIEVE (Large Soft-Teal #E3EEEC Rounded Panel)                */}
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
      {/* 6. TEAM (4 Placeholder Cards)                                             */}
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
                  stroke="#0B6F64"
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
      {/* 7. CLOSING CTA (Dark Background #0C1A19, Centered)                        */}
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
          <Link href="/contact" className="mint-pill-button">
            Talk to StatPulse
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COMPREHENSIVE PRODUCTION CSS (Self-Contained for Easy Editing)            */}
      {/* ========================================================================= */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap");

        .statpulse-about-page {
          --color-dark: #0c1a19;
          --color-mint: #3ddbc4;
          --color-light: #f5f8f7;
          --color-card-border: #d5e0de;
          --color-teal-label: #0b6f64;
          --color-soft-teal: #e3eeec;
          --color-text-dark: #0c1a19;
          --color-text-muted: #4a5c59;

          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          color: var(--color-text-dark);
          background-color: var(--color-light);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .about-container {
          width: 100%;
          max-width: 1160px;
          margin-inline: auto;
          padding-inline: 1.5rem;
        }

        /* 1. Hero Section */
        .about-hero {
          background-color: var(--color-dark);
          color: #ffffff;
          padding-top: clamp(4.5rem, 8vw, 7.5rem);
          padding-bottom: 2rem;
          position: relative;
          text-align: center;
        }

        .about-hero-content {
          max-width: 860px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          animation: fadeUp 0.6s ease-out;
        }

        .about-hero-tag {
          font-family: "Space Grotesk", sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-mint);
          background: rgba(61, 219, 196, 0.1);
          border: 1px solid rgba(61, 219, 196, 0.28);
          padding: 0.35rem 0.95rem;
          border-radius: 9999px;
        }

        .about-hero-heading {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
        }

        .about-hero-subtext {
          font-size: clamp(1.05rem, 2vw, 1.22rem);
          color: #b2c5c2;
          max-width: 760px;
          line-height: 1.65;
          margin: 0;
        }

        .pulse-line-wrapper {
          width: 100%;
          margin-top: 3.5rem;
          overflow: hidden;
          line-height: 0;
        }

        .pulse-line-svg {
          width: 100%;
          height: 70px;
          display: block;
          filter: drop-shadow(0 0 6px rgba(61, 219, 196, 0.45));
        }

        /* 2. Founder Story Section */
        .about-founder-section {
          padding-block: clamp(4rem, 7vw, 6.5rem);
          background-color: var(--color-light);
        }

        .about-founder-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: clamp(2.5rem, 5vw, 4.5rem);
          align-items: start;
        }

        .founder-card {
          background: #ffffff;
          border: 1px solid var(--color-card-border);
          border-radius: 24px;
          padding: 2.25rem;
          box-shadow: 0 4px 20px rgba(12, 26, 25, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .founder-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(12, 26, 25, 0.08);
        }

        .founder-avatar-box {
          width: 96px;
          height: 96px;
          border-radius: 20px;
          background: linear-gradient(135deg, #0c1a19 0%, #16302e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          border: 2px solid var(--color-mint);
          box-shadow: 0 6px 16px rgba(61, 219, 196, 0.25);
        }

        .founder-initials {
          font-family: "Space Grotesk", sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-mint);
          letter-spacing: -0.02em;
        }

        .founder-meta {
          margin-bottom: 1.25rem;
        }

        .founder-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-dark);
          margin: 0 0 0.25rem 0;
        }

        .founder-role {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-teal-label);
          margin: 0;
        }

        .founder-divider {
          border: none;
          height: 1px;
          background: var(--color-card-border);
          margin-block: 1.25rem;
        }

        .founder-facts-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
        }

        .founder-facts-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--color-text-dark);
          line-height: 1.5;
        }

        .fact-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .founder-story-copy {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .section-label {
          font-family: "Space Grotesk", sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-teal-label);
          display: block;
        }

        .section-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(1.9rem, 3.5vw, 2.75rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
          color: var(--color-dark);
          margin: 0;
        }

        .story-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        .story-paragraphs p {
          margin: 0;
        }

        /* 3. Numbers Strip */
        .about-numbers-section {
          background-color: var(--color-dark);
          padding-block: clamp(3.5rem, 5vw, 5rem);
        }

        .numbers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .number-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(61, 219, 196, 0.2);
          border-radius: 22px;
          padding: 2.25rem 1.75rem;
          text-align: center;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .number-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-mint);
        }

        .number-stat {
          display: block;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--color-mint);
          margin-bottom: 0.6rem;
        }

        .number-caption {
          font-size: 0.98rem;
          font-weight: 500;
          color: #c0d4d1;
          margin: 0;
          line-height: 1.45;
        }

        /* 4. What We Do */
        .about-what-we-do-section {
          padding-block: clamp(4.5rem, 7vw, 6.5rem);
          background-color: #ffffff;
        }

        .section-header-centered {
          text-align: center;
          max-width: 680px;
          margin-inline: auto;
          margin-bottom: 3.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
        }

        .what-we-do-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .service-feature-card {
          background: #ffffff;
          border: 1px solid var(--color-card-border);
          border-radius: 20px;
          padding: 2rem 1.75rem;
          box-shadow: 0 4px 16px rgba(12, 26, 25, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .service-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(12, 26, 25, 0.08);
          border-color: var(--color-mint);
        }

        .service-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(11, 111, 100, 0.09);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.35rem;
        }

        .service-icon-box svg {
          width: 24px;
          height: 24px;
        }

        .service-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-dark);
          margin: 0 0 0.5rem 0;
        }

        .service-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
        }

        /* 5. What We Believe */
        .about-belief-section {
          padding-block: clamp(3rem, 5vw, 5rem);
          background-color: var(--color-light);
        }

        .belief-panel {
          background-color: var(--color-soft-teal);
          border: 1px solid #c9dedb;
          border-radius: 28px;
          padding: clamp(2.5rem, 5vw, 4.25rem);
          text-align: center;
          max-width: 980px;
          margin-inline: auto;
          box-shadow: 0 8px 30px rgba(11, 111, 100, 0.06);
        }

        .belief-quote {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(1.6rem, 3.2vw, 2.35rem);
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.3;
          letter-spacing: -0.02em;
          margin: 1rem 0 1.25rem 0;
        }

        .belief-support {
          font-size: clamp(1.02rem, 1.8vw, 1.15rem);
          color: #27403c;
          max-width: 720px;
          margin-inline: auto;
          line-height: 1.7;
          margin-bottom: 0;
        }

        /* 6. Team Section */
        .about-team-section {
          padding-block: clamp(4.5rem, 7vw, 6.5rem);
          background-color: #ffffff;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .team-card {
          background: var(--color-light);
          border: 1px solid var(--color-card-border);
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(12, 26, 25, 0.06);
        }

        .team-image-box {
          width: 84px;
          height: 84px;
          border-radius: 18px;
          background: #e4ebe9;
          margin-inline: auto;
          margin-bottom: 1.15rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed var(--color-teal-label);
        }

        .team-placeholder-icon {
          width: 36px;
          height: 36px;
          opacity: 0.7;
        }

        .team-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-dark);
          margin: 0 0 0.35rem 0;
        }

        .team-role {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--color-teal-label);
          margin: 0;
        }

        /* 7. Closing CTA */
        .about-cta-section {
          background-color: var(--color-dark);
          color: #ffffff;
          padding-block: clamp(4.5rem, 8vw, 7rem);
          text-align: center;
        }

        .about-cta-inner {
          max-width: 720px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .about-cta-heading {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin: 0;
        }

        .about-cta-text {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          color: #b2c5c2;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }

        .mint-pill-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0.75rem 2.25rem;
          background-color: var(--color-mint);
          color: var(--color-dark);
          font-family: "Space Grotesk", sans-serif;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 9999px;
          box-shadow: 0 4px 18px rgba(61, 219, 196, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            background-color 0.2s ease;
        }

        .mint-pill-button:hover {
          background-color: #55e6d1;
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(61, 219, 196, 0.5);
        }

        .mint-pill-button:active {
          transform: translateY(0);
        }

        /* Responsive Breakpoints */
        @media (max-width: 860px) {
          .about-founder-grid {
            grid-template-columns: 1fr;
          }

          .founder-card {
            max-width: 480px;
            margin-inline: auto;
            width: 100%;
          }

          .numbers-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
