import type { Metadata } from "next";
import { CalendarCheck, ClipboardList, FileCheck2, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell StatPulse Analytics about your reporting or dashboard project and request a discovery conversation.",
};

type ContactPageProps = {
  searchParams: Promise<{ service?: string; industry?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const query = await searchParams;
  const defaultService = query.service ?? "";

  return (
    <section className="section section-cream contact-section">
      <div className="container-site contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h1>Book a Free Consultation</h1>
          <p className="contact-intro">Tell us about your business challenges. We’ll help you explore a practical analytics solution — starting with a free, no-obligation discovery call.</p>
          <ol className="contact-steps">
            <li><span><ClipboardList aria-hidden="true" size={19} /></span><div><strong>1. You send the form</strong><p>Share your question and the service you’re considering.</p></div></li>
            <li><span><CalendarCheck aria-hidden="true" size={19} /></span><div><strong>2. We book a discovery call</strong><p>We learn about your goals, sources, and current process.</p></div></li>
            <li><span><FileCheck2 aria-hidden="true" size={19} /></span><div><strong>3. You get a clear proposal</strong><p>Scope, deliverables, assumptions, and pricing are agreed before work.</p></div></li>
          </ol>
          <div className="response-note">
            <strong>What to expect</strong>
            <p>We aim to respond within one business day. Direct contact details will appear here once configured; for now, this form is the fastest way to reach us.</p>
          </div>
          <div className="contact-details">
            {siteConfig.contactEmail ? <a href={"mailto:" + siteConfig.contactEmail}><Mail size={16} />{siteConfig.contactEmail}</a> : null}
            {siteConfig.contactPhone ? <a href={"tel:" + siteConfig.contactPhone}><Phone size={16} />{siteConfig.contactPhone}</a> : null}
          </div>
        </div>
        <ContactForm defaultService={defaultService} />
      </div>
    </section>
  );
}
