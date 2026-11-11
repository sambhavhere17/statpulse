import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a free 30-minute discovery consultation with StatPulse Analytics to discuss your dashboard, reporting, and business intelligence goals.",
  alternates: { canonical: "/book" },
};

type BookPageProps = {
  searchParams: Promise<{ service?: string; topic?: string }>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const query = await searchParams;
  const selectedService = query.service ?? "free-discovery-consultation";

  return (
    <div className="section section-cream book-section">
      <div className="container-site">
        <div className="book-layout">
          {/* Left Column: Context & Agenda */}
          <div className="book-intro">
            <div className="badge-pill">
              <Sparkles size={14} className="text-orange" />
              <span>Free 30-Minute Discovery Session</span>
            </div>
            <h1 className="book-heading">
              Let’s Map Out Your <span>Analytics Strategy.</span>
            </h1>
            <p className="book-subhead">
              No sales pitches or generic slide decks. We review your current data
              ecosystem, identify reporting friction points, and outline a concrete roadmap.
            </p>

            <div className="session-features">
              <div className="session-card">
                <Clock className="session-icon" size={20} />
                <div>
                  <strong>30 Minutes · 1-on-1 Session</strong>
                  <p>Focused discussion directly with an analytics specialist.</p>
                </div>
              </div>
              <div className="session-card">
                <Calendar className="session-icon" size={20} />
                <div>
                  <strong>Flexible Scheduling</strong>
                  <p>Same-day or next-day availability across major timezones.</p>
                </div>
              </div>
              <div className="session-card">
                <ShieldCheck className="session-icon" size={20} />
                <div>
                  <strong>Strict NDA & Confidentiality</strong>
                  <p>Your business numbers and workflows are always secure.</p>
                </div>
              </div>
            </div>

            <div className="agenda-box">
              <h3>What we’ll cover in 30 minutes:</h3>
              <ul className="agenda-list">
                <li>
                  <CheckCircle2 size={16} />
                  <span>Audit of your current data sources (Excel, CRM, ERP, Ad platforms)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Identifying manual reporting hours that can be automated</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Recommended visual KPI architecture (Power BI vs Looker Studio)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Actionable implementation timeline & fixed-scope proposal</span>
                </li>
              </ul>
            </div>

            {siteConfig.bookingUrl && (
              <div className="calendar-fallback-card">
                <p>Prefer to pick a live calendar slot directly?</p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--secondary"
                >
                  Open Calendar Scheduler <ExternalLink size={15} />
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Intake Form */}
          <div className="book-form-card">
            <div className="form-card-header">
              <h2>Request Your Session</h2>
              <p>Fill out the quick details below and we’ll confirm your slot within 24 hours.</p>
            </div>
            <ContactForm defaultService={selectedService} />
          </div>
        </div>
      </div>
    </div>
  );
}
