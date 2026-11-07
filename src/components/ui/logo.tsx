import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  href?: string;
  className?: string;
};

export function Logo({ variant = "dark", href = "/", className = "" }: LogoProps) {
  return (
    <Link
      aria-label="StatPulse Analytics home"
      className={"brand-lockup brand-lockup--" + variant + " " + className}
      href={href}
    >
      <svg aria-hidden="true" className="brand-mark" viewBox="0 0 36 36">
        <rect x="0.5" y="0.5" width="35" height="35" rx="8" fill="#30343B" stroke="#454A52" />
        <rect x="8" y="19" width="4" height="9" rx="1" fill="#FF9500" />
        <rect x="16" y="14" width="4" height="14" rx="1" fill="#FF9500" />
        <rect x="24" y="8" width="4" height="20" rx="1" fill="#FF9500" />
      </svg>
      <span className="brand-words">
        <span className="brand-name">StatPulse</span>
        <span className="brand-subtitle">ANALYTICS</span>
      </span>
    </Link>
  );
}
