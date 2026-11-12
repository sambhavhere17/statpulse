import type { Metadata } from "next";
import { HomePage } from "@/components/marketing/home-page";

export const metadata: Metadata = {
  title: "Managed Video Editing Services for Businesses",
  description: "StatPulse delivers managed video editing for businesses, from requirement to final files.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
