import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  if (!baseUrl) return [];

  const routes = [
    "",
    "/services",
    "/solutions",
    "/portfolio",
    "/dashboard-demo",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/insights",
    "/insights/choosing-useful-kpis",
    "/insights/reports-people-use",
    "/insights/start-workflow-automation",
    ...services.map((item) => "/services/" + item.slug),
    ...industries.map((item) => "/solutions/" + item.slug),
    ...projects.map((item) => "/portfolio/" + item.slug),
  ];

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
