import Link from "next/link";

type LogoProps = { variant?: "dark" | "light"; href?: string; className?: string };

export function Logo({ variant = "dark", href = "/", className = "" }: LogoProps) {
  return <Link aria-label="StatPulse 360 home" className={"brand-lockup brand-lockup--" + variant + " " + className} href={href}>
    <img alt="StatPulse 360" className="brand-logo-image" src="/images/statpulse-360-logo.png" />
    <span className="brand-subtitle">DELIVERY</span>
  </Link>;
}
