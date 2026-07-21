import { AboutPreview, MidCtaBanner } from "@/components/home/CtaBanner";
import { GlobalMessaging } from "@/components/home/GlobalMessaging";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { StatsBar, WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div>
      <section className="bg-brand-hero py-8 text-on-dark sm:py-12" id="hero">
        <Hero />
      </section>
      <section className="bg-brand-stats py-4 sm:py-6" id="stats">
        <StatsBar />
      </section>
      <section className="bg-surface py-4 sm:py-8" id="global-messaging">
        <GlobalMessaging />
      </section>
      <section className="bg-surface py-8 sm:py-12" id="services">
        <ServicesPreview />
      </section>
      <section className="bg-section-alt py-8 sm:py-12" id="why-us">
        <WhyChooseUs />
      </section>
      {/* <section className="bg-surface-elevated py-8 sm:py-12" id="about">
        <AboutPreview />
      </section> */}
      <section className="bg-brand-cta py-8 sm:py-12" id="mid-cta">
        <MidCtaBanner />
      </section>

    </div>
  );
}
