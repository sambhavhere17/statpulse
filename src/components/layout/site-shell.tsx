import { Footer } from "@/components/layout/footer";
import { CtaBand } from "@/components/layout/cta-band";
import { Navbar } from "@/components/layout/navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">{children}</main>
      <CtaBand />
      <Footer />
    </>
  );
}
