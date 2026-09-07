import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <MissionSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </>
  );
}
