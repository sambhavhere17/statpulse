import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

const serviceLinks = siteConfig.packages.map((item) => ({
  label: item.name,
  href: "/services/" + item.slug,
}));
const solutionLinks = [
  { label: "E-commerce & D2C", href: "/solutions/ecommerce" },
  { label: "Small & Medium Businesses", href: "/solutions/small-business" },
  { label: "Marketing Agencies", href: "/solutions/marketing-agencies" },
  { label: "Manufacturing & Operations", href: "/solutions/manufacturing" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const copyrightYears = siteConfig.copyrightStartYear === year
    ? String(year)
    : siteConfig.copyrightStartYear + "–" + year;

  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="dark" />
            <p>
              Clear dashboards, useful reports, and practical systems for growing businesses.
            </p>
          </div>
          <FooterColumn title="Services" items={serviceLinks} />
          <FooterColumn title="Solutions" items={solutionLinks} />
          <FooterColumn
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />
          <FooterColumn title="Resources" items={[{ label: "Portfolio", href: "/portfolio" }, { label: "Live demo", href: "/dashboard-demo" }, { label: "Insights", href: "/insights" }]} />
        </div>
        <div className="footer-contact-row">
          <div><h2>Talk to an expert</h2><p>Bring your question. We’ll help you find the next useful step.</p><ButtonLink arrow href="/contact" variant="primary">Book a Free Call</ButtonLink></div>
          <div className="footer-contact-details">
            <p><Mail aria-hidden="true" size={16} /> [EMAIL]</p>
            <p><Phone aria-hidden="true" size={16} /> [PHONE / WHATSAPP]</p>
          </div>
          <form className="newsletter-placeholder"><label htmlFor="newsletter-email">Get practical data tips</label><div><input disabled id="newsletter-email" placeholder="Newsletter setup needed" type="email" /><button aria-disabled="true" disabled type="button"><Send aria-hidden="true" size={16} /> Subscribe</button></div></form>
        </div>
        <div className="footer-bottom">
          <span>© {copyrightYears} {siteConfig.name}. All rights reserved.</span>
          {siteConfig.linkedInUrl ? (
            <a href={siteConfig.linkedInUrl} rel="noreferrer" target="_blank">
              LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          ) : <span />}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="footer-column">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
