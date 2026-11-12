import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { AnalyticsConsent } from "@/components/layout/analytics-consent";
import { SiteJsonLd } from "@/components/layout/site-json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
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
    default: "StatPulse 360 | StatPulse.Delivery, managed project delivery for businesses",
    template: "%s | StatPulse 360",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "StatPulse 360 | StatPulse.Delivery, managed project delivery for businesses",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "StatPulse 360 | StatPulse.Delivery, managed project delivery for businesses",
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
      <body className={manrope.variable + " " + inter.variable}>
        <SiteShell>{children}</SiteShell>
        <AnalyticsConsent />
        <SiteJsonLd />
      </body>
    </html>
  );
}
