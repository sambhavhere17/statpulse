import { siteConfig } from "@/config/site";

export const services = siteConfig.packages.map((service) => ({
  ...service,
  problem: {
    "data-health-check": "Reports can look polished while underlying sources, definitions, or refresh routines remain unclear.",
    "business-dashboard": "Teams need a reliable view of the measures that guide their next decision.",
    "reporting-automation": "Recurring spreadsheets and updates can consume time and introduce avoidable manual errors.",
    "monthly-analytics-partner": "A dashboard needs maintenance and interpretation as business questions evolve.",
  }[service.slug],
  whoBenefits: {
    "data-health-check": "Teams that already have reports or data sources and want a prioritised view of their gaps.",
    "business-dashboard": "Businesses ready to bring a focused set of KPIs and trends into one agreed view.",
    "reporting-automation": "Teams with repeatable reporting steps and stable, accessible sources.",
    "monthly-analytics-partner": "Teams that want scoped, recurring help with KPI reviews and analysis.",
  }[service.slug],
  process: ["Discovery and scope", "Source review", "Build and review", "Walkthrough and handover"],
}));

export type Service = (typeof services)[number];
