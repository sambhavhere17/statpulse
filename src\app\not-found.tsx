import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container-site">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1>We couldn’t find that page.</h1>
        <p>The address may have changed or the page may not exist.</p>
        <div className="not-found-actions">
          <ButtonLink arrow href="/">Back to Home</ButtonLink>
          <Link href="/contact">Contact StatPulse</Link>
        </div>
      </div>
    </section>
  );
}
