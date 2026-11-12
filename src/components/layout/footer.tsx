import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

const serviceLinks = [{ label: "Video Editing", href: "/services" }, { label: "Content Writing", href: "/services" }, { label: "Tech Solutions", href: "/services" }];

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
              Managed delivery for business work that needs to be clear, consistent, and on time.
            </p>
            <ButtonLink arrow href="/book" variant="primary">
              Book a Free Consultation
            </ButtonLink>
          </div>
          <FooterColumn title="Services" items={serviceLinks} />
          <FooterColumn title="More" items={[{ label: "Delivery Partners", href: "/delivery-partners" }, { label: "Privacy Policy", href: "/privacy" }]} />
          <FooterColumn
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
            ]}
          />
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
