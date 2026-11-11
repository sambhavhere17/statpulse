import { ButtonLink } from "@/components/ui/button-link";

export function CtaBand() {
  return (
    <section className="global-cta-band">
      <div className="container-site global-cta-band-inner">
        <div><p>READY WHEN YOU ARE</p><h2>Talk through your next data decision.</h2></div>
        <ButtonLink arrow href="/contact" variant="primary">Book a Free Call</ButtonLink>
      </div>
    </section>
  );
}
