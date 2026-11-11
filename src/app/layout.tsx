import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { AnalyticsConsent } from "@/components/layout/analytics-consent";
import { SiteJsonLd } from "@/components/layout/site-json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: {
    default: "StatPulse Analytics | Business Intelligence & Data Analytics",
    template: "%s | StatPulse Analytics",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "StatPulse Analytics | Business Intelligence & Data Analytics",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "StatPulse Analytics | Business Intelligence & Data Analytics",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#292C32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={jakarta.variable + " " + inter.variable}>
        <SiteShell>{children}</SiteShell>
        <AnalyticsConsent />
        <SiteJsonLd />
      </body>
    </html>
  );
}
