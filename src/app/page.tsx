import { AboutPreview, CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { StatsBar, WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StickySection } from "@/components/ui/StickySection";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="home-scroll">
      <StickySection index={1} className="bg-brand-hero text-on-dark" id="hero">
        <Hero />
      </StickySection>
      <StickySection index={2} className="bg-brand-stats" id="stats">
        <StatsBar />
      </StickySection>
      <StickySection index={3} className="bg-surface" id="services">
        <ServicesPreview />
      </StickySection>
      <StickySection index={4} className="bg-section-alt" id="why-us">
        <WhyChooseUs />
      </StickySection>
      <StickySection index={5} className="bg-surface-elevated" id="about">
        <AboutPreview />
      </StickySection>
      <StickySection index={6} className="bg-brand-cta" id="contact-cta">
        <CtaBanner />
      </StickySection>
    </div>
  );
}
