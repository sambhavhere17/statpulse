import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

type ButtonLinkProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "orange-outline";
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href = "/contact",
  children,
  variant = "primary",
  arrow = false,
  className = "",
  external = false,
}: ButtonLinkProps) {
  const resolvedHref = href === "/book" ? siteConfig.bookingUrl || "/contact" : href;
  const isExternal = external || resolvedHref.startsWith("http");
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden="true" size={16} />}
    </>
  );
  const classes = "button button--" + variant + " " + className;

  if (isExternal) {
    return <a className={classes} href={resolvedHref} rel="noreferrer" target="_blank">{content}</a>;
  }
  return <Link className={classes} href={resolvedHref}>{content}</Link>;
}
