import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Telecom Services",
  description: `Explore ${siteConfig.name} services — business internet, VoIP, cloud PBX, SD-WAN, managed IT, and unified communications.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="From high-speed internet to unified communications, we provide end-to-end telecom solutions tailored to your business."
      />

      <section className="bg-surface py-24">
        <Container>
          <ul className="grid gap-8 sm:grid-cols-2">
            {services.map((service, index) => (
              <li key={service.slug}>
                <AnimateOnScroll delay={index * 80}>
                  <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-brand bg-surface-card">
                    <div
                      className={`card-gradient-${index % 6} relative flex h-40 items-center justify-center`}
                    >
                      <span
                        className="text-6xl transition-transform duration-500 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        {service.icon}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      <h2 className="text-2xl font-semibold text-heading">
                        {service.title}
                      </h2>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-body">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-body"
                          >
                            <span
                              className="mt-0.5 text-fly-cyan"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-fly-sky transition-all group-hover:gap-2 hover:text-fly-cyan"
                      >
                        View details <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </article>
                </AnimateOnScroll>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
