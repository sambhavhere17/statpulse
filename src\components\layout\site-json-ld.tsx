import { siteConfig } from "@/config/site";

export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl || undefined,
    sameAs: siteConfig.linkedInUrl ? [siteConfig.linkedInUrl] : undefined,
    contactPoint: siteConfig.contactEmail
      ? { "@type": "ContactPoint", email: siteConfig.contactEmail, contactType: "customer service" }
      : undefined,
  };

  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />;
}
