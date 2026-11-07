"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const analyticsId = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setConsent(window.localStorage.getItem("statpulse-analytics-consent") as "accepted" | "declined" | null);
  }, []);

  useEffect(() => {
    if (!analyticsId || consent !== "accepted" || !window.gtag) return;
    window.gtag("config", analyticsId, { page_path: pathname });
  }, [consent, pathname]);

  useEffect(() => {
    if (!analyticsId || consent !== "accepted") return;
    const onAnalyticsEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ event?: string }>).detail;
      if (detail?.event && window.gtag) window.gtag("event", detail.event);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-analytics-event]")
        : null;
      const name = target?.dataset.analyticsEvent;
      if (name && window.gtag) window.gtag("event", name);
    };
    document.addEventListener("statpulse:analytics", onAnalyticsEvent);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("statpulse:analytics", onAnalyticsEvent);
      document.removeEventListener("click", onClick);
    };
  }, [consent]);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem("statpulse-analytics-consent", value);
    setConsent(value);
  }

  if (!analyticsId) return null;

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script async src={"https://www.googletagmanager.com/gtag/js?id=" + analyticsId} strategy="afterInteractive" />
          <Script id="statpulse-gtag" strategy="afterInteractive">
            {"window.dataLayer = window.dataLayer || []; window.gtag = function(){window.dataLayer.push(arguments);}; window.gtag('js', new Date());"}
          </Script>
        </>
      )}
      {consent === null && (
        <aside aria-label="Analytics preferences" className="consent-banner">
          <div><strong>Optional analytics</strong><p>Allow analytics to help us understand how the site is used. No analytics loads unless you choose to allow it.</p></div>
          <div className="consent-actions">
            <button className="consent-decline" onClick={() => choose("declined")} type="button">Decline</button>
            <button className="button button--primary" onClick={() => choose("accepted")} type="button">Allow analytics</button>
          </div>
          <button aria-label="Close analytics notice" className="consent-close" onClick={() => choose("declined")} type="button"><X size={16} /></button>
        </aside>
      )}
    </>
  );
}
