import { aboutContent } from "@/data/about";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our mission, values, and the team behind your trusted telecom partner since 2010.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutContent.title} description={aboutContent.intro} />

      <section className="bg-surface py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimateOnScroll direction="left">
              <div className="heading-accent mb-5" />
              <h2 className="text-3xl font-bold text-heading">Our Mission</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                {aboutContent.mission}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={150}>
              <div className="flex items-center justify-center lg:justify-end">
                <Logo height={72} link={false} />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <section className="bg-section-alt py-24">
        <Container>
          <AnimateOnScroll>
            <div className="heading-accent mb-5" />
            <h2 className="text-3xl font-bold text-heading">Our Values</h2>
          </AnimateOnScroll>
          <ul className="mt-12 grid gap-7 sm:grid-cols-2">
            {aboutContent.values.map((value, index) => (
              <li key={value.title}>
                <AnimateOnScroll delay={index * 80}>
                  <article className="card-hover h-full rounded-2xl border border-brand bg-surface-card p-8">
                    <h3 className="text-xl font-semibold text-heading">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {value.description}
                    </p>
                  </article>
                </AnimateOnScroll>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface-elevated py-24">
        <Container>
          <AnimateOnScroll>
            <div className="heading-accent mb-5" />
            <h2 className="text-3xl font-bold text-heading">Leadership Team</h2>
          </AnimateOnScroll>
          <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.team.map((member, index) => (
              <li key={member.name}>
                <AnimateOnScroll delay={index * 80}>
                  <article className="card-hover rounded-2xl border border-brand bg-surface-card p-8 text-center">
                    <div
                      className={`badge-gradient-${index % 4} mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-heading">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-body">{member.role}</p>
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
