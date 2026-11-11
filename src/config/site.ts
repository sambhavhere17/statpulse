export const siteConfig = {
  name: "StatPulse Analytics",
  shortName: "StatPulse",
  tagline: "Turn Data Into Decisions.",
  description:
    "Transform business data into actionable insights with StatPulse Analytics. Explore Power BI, Looker Studio and Excel dashboards, reporting automation, and KPI analytics.",
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
    { label: "Solutions", href: "/solutions" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Live Demo", href: "/dashboard-demo" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  packages: [
    {
      slug: "data-health-check",
      name: "Data Health Check",
      price: "₹2,999",
      cadence: "one-time",
      description: "A one-time audit of your existing data and reports.",
      deliverables: ["Data source and quality review", "KPI gap analysis", "Prioritised action report", "30-minute findings call"],
    },
    {
      slug: "business-dashboard",
      name: "Business Dashboard",
      price: "₹9,999",
      cadence: "starting at",
      description: "A custom dashboard for your most important metrics.",
      popular: true,
      deliverables: ["Power BI, Excel, or Looker Studio dashboard", "Up to 3 data sources", "KPI and trend visualisations", "Walkthrough session"],
    },
    {
      slug: "reporting-automation",
      name: "Reporting Automation",
      price: "₹14,999",
      cadence: "starting at",
      description: "Recurring reports that build and send themselves.",
      deliverables: ["Automated data refresh", "Scheduled report delivery", "Template standardisation", "Error and anomaly flags"],
    },
    {
      slug: "monthly-analytics-partner",
      name: "Monthly Analytics Partner",
      price: "₹9,999",
      cadence: "per month",
      description: "Ongoing analytics support for your team.",
      deliverables: ["Monthly KPI review pack", "Dashboard maintenance", "Ad-hoc analysis requests", "Priority support"],
    },
  ],
  faq: [
    {
      question: "What does StatPulse Analytics do?",
      answer: "We help teams turn business data into useful dashboards, automated reports, KPI tracking, and practical analysis.",
    },
    {
      question: "Who can benefit from these services?",
      answer: "Startups, small and medium businesses, e-commerce brands, marketing agencies, and operations teams can benefit when they have data they want to understand or report more efficiently.",
    },
    {
      question: "Can you work with Excel, Power BI, or Looker Studio?",
      answer: "Yes. We can build reports with Excel, Power BI, or Looker Studio, including Looker Studio reports based on Google Sheets. The right tool depends on your data and workflow.",
    },
    {
      question: "Can you automate reports we already use?",
      answer: "Often, yes. We first review the sources, templates, and delivery process, then confirm what can be automated within the agreed scope.",
    },
    {
      question: "Which data sources can you connect?",
      answer: "Common sources include spreadsheets and business platforms that provide an export or supported connection. Integrations are confirmed during discovery.",
    },
    {
      question: "How long does a project take?",
      answer: "Timelines depend on source readiness, scope, and integrations. We agree on a realistic schedule after reviewing the requirements.",
    },
    {
      question: "Are the prices fixed?",
      answer: "Prices shown are indicative starting points. Final pricing depends on data sources, scope, complexity, and integrations.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Monthly analytics support is available as a scoped engagement. The included work and response expectations are agreed before work begins.",
    },
    {
      question: "How do you handle confidentiality?",
      answer: "Confidentiality terms and data handling requirements are agreed with each client before access to business data is provided.",
    },
    {
      question: "How do we get started?",
      answer: "Send a short project note through the contact form. We can use a discovery conversation to understand the problem and suggest a practical next step.",
    },
  ],
} as const;

export const pricingFootnote =
  "Prices are indicative. Final pricing depends on data sources, scope, complexity, and integrations.";
