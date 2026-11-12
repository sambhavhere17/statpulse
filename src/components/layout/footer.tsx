import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
              We transform business data into actionable intelligence through smart dashboards,
              AI-powered automation, and strategic analytics — helping businesses optimize costs,
              improve efficiency, and accelerate growth.
            </p>
            <ButtonLink arrow href="/book" variant="primary">
              Start with a free discovery consultation
            </ButtonLink>
          </div>
          <FooterColumn title="Services" items={serviceLinks} />
          <FooterColumn title="Solutions" items={solutionLinks} />
          <FooterColumn
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
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
