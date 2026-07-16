import Link from "next/link";
import { services } from "@/data/services";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  return (
    <div className="w-full py-16">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            title="Our Services"
            subtitle="Whatever channel your customers prefer, FLY Telecom delivers your messages reliably and at scale."
          />
        </AnimateOnScroll>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.slug}>
              <AnimateOnScroll delay={index * 80}>
                <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-brand bg-surface-card shadow-sm">
                  <div
                    className={`card-gradient-${index % 6} relative flex h-36 items-center justify-center`}
                  >
                    <span
                      className="text-5xl drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-semibold text-heading">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-fly-sky transition-all group-hover:gap-2 hover:text-fly-cyan"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>

        <AnimateOnScroll className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-shine btn-primary inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
          >
            View All Services
          </Link>
        </AnimateOnScroll>
      </Container>
    </div>
  );
}
