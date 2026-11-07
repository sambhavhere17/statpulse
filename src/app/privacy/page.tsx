import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy template for StatPulse Analytics. Review and complete before launch.",
};

export default function PrivacyPage() {
  return (
    <section className="section section-cream">
      <div className="container-site legal-content">
        <p className="eyebrow">PRIVACY</p>
        <h1>Privacy Policy</h1>
        <p className="review-banner">Template — review with appropriate counsel and complete before launch.</p>
        <p>This template describes the intended handling of information submitted through the StatPulse Analytics website. It is not a final legal notice.</p>
        <h2>Information you submit</h2>
        <p>The contact form may collect your name, email address, selected service, and project message. Technical request information may be processed to prevent abuse and operate the service.</p>
        <h2>Why information is used</h2>
        <p>Submitted details are intended to be used to respond to an enquiry, assess a potential project, and maintain the security of the contact service. Optional analytics should run only after consent.</p>
        <h2>Retention and access</h2>
        <p>Retention periods, authorised access, and deletion procedures must be set by the site operator before launch. Lead records must not be publicly accessible.</p>
        <h2>Contact</h2>
        <p>Configure a contact email in the site settings before publishing a final privacy notice. No email or phone number has been invented for this template.</p>
      </div>
    </section>
  );
}
