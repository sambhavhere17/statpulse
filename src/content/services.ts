import { siteConfig } from "@/config/site";

export const services = siteConfig.packages.map((service) => ({
  ...service,
  problem: "Business teams need reliable delivery without constant follow-up or unclear ownership.",
  whoBenefits: "Businesses that want one accountable point of contact from brief to final files.",
  process: ["Requirement review", "Project planning", "Delivery and feedback", "Final handover"],
}));

export type Service = (typeof services)[number];
