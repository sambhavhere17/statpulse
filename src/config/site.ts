export const siteConfig = {
  name: "StatPulse",
  shortName: "StatPulse",
  tagline: "Managed delivery, end to end.",
  description: "StatPulse delivers managed video editing services for businesses, with one point of contact from brief to final delivery.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  linkedInUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  analyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  copyrightStartYear: 2026,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  packages: [
    { slug: "video-editing", name: "Video Editing", price: "Custom quote", cadence: "starting per video", description: "Short-form and long-form edits shaped around your brand.", deliverables: ["Clear project scope", "Brand-aligned delivery", "Revision support"] },
  ],
  faq: [
    {
      question: "Who is responsible for my project?",
      answer: "StatPulse. You work with one project manager from start to delivery, and we are accountable for the final output.",
    },
    {
      question: "Who owns the final files?",
      answer: "You do, once the project is paid and delivered.",
    },
    {
      question: "How do you price?",
      answer: "We provide an affordable, transparent quote once we understand the format, scope, and timeline.",
    },
    {
      question: "What if I do not like the output?",
      answer: "Share your feedback with your project manager. We work through the agreed revision process and keep the brief clear.",
    },
    {
      question: "How fast is delivery?",
      answer: "Timelines depend on the brief and volume. We agree on delivery dates before work begins.",
    },
    {
      question: "What happens after delivery?",
      answer: "We remain available for agreed post-delivery support and next steps.",
    },
  ],
} as const;

export const pricingFootnote =
  "Prices are indicative. Final pricing depends on data sources, scope, complexity, and integrations.";
