import type { Metadata } from "next";
import { HomePage } from "@/components/marketing/home-page";

export const metadata: Metadata = {
  title: "StatPulse Analytics | Business Intelligence & Data Analytics",
  description:
    "Transform business data into actionable insights with StatPulse Analytics. Explore Power BI, Looker Studio and Excel dashboards, reporting automation, and KPI analytics.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
