import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell StatPulse about the work you need delivered and request a discovery conversation.",
  alternates: { canonical: "/contact" },
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
          <h1>Let’s talk about your project.</h1>
          <p className="contact-intro">Share what you need. We’ll reply with the right next step and a clear plan.</p>
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
