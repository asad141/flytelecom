import { stats, whyChooseUs } from "@/data/home";
import { siteConfig } from "@/data/site";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StatsBar() {
  return (
    <div aria-label="Company statistics" className="w-full py-10">
      <Container>
        <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 100}>
              <div className="text-center">
                <dd className="text-4xl font-bold text-white lg:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm font-medium text-on-dark-muted">
                  {stat.label}
                </dt>
              </div>
            </AnimateOnScroll>
          ))}
        </dl>
      </Container>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div className="w-full py-16">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            title={`Why Choose ${siteConfig.name}?`}
            subtitle="We combine enterprise-grade infrastructure with personal, local support."
          />
        </AnimateOnScroll>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <li key={item.title}>
              <AnimateOnScroll delay={index * 100}>
                <article className="card-hover h-full rounded-2xl border border-brand bg-surface-card p-8 shadow-sm">
                  <div
                    className={`badge-gradient-${index % 4} mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white shadow-lg`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {item.description}
                  </p>
                </article>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
