import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  href?: string;
  className?: string;
};

export function Logo({ variant = "dark", href = "/", className = "" }: LogoProps) {
  return (
    <Link
      aria-label="StatPulse home"
      className={"brand-lockup brand-lockup--" + variant + " " + className}
      href={href}
    >
      <svg
        aria-hidden="true"
        className="brand-mark"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9500" />
            <stop offset="100%" stopColor="#FFAA33" />
          </linearGradient>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E323A" />
            <stop offset="100%" stopColor="#1E2024" />
          </linearGradient>
          <filter id="pulseGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect
          x="0.75"
          y="0.75"
          width="34.5"
          height="34.5"
          rx="9"
          fill="url(#bgGrad)"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.2"
        />
        {/* Analytics pulse bars */}
        <rect x="7.5" y="19.5" width="4.5" height="9" rx="1.8" fill="url(#brandGrad)" opacity="0.85" />
        <rect x="14.5" y="13.5" width="4.5" height="15" rx="1.8" fill="url(#brandGrad)" />
        <rect
          x="21.5"
          y="7.5"
          width="4.5"
          height="21"
          rx="1.8"
          fill="url(#brandGrad)"
          filter="url(#pulseGlow)"
        />
        <circle cx="23.75" cy="5" r="1.5" fill="#FFE0B2" />
      </svg>
      <span className="brand-words">
        <span className="brand-name">
          StatPulse 360<span className="brand-dot">.</span>
        </span>
        <span className="brand-subtitle">DELIVERY</span>
      </span>
    </Link>
  );
}
