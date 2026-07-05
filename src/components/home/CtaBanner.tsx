import Link from "next/link";
import { aboutPreview } from "@/data/home";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function AboutPreview() {
  return (
    <div className="w-full py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimateOnScroll direction="left">
            <div className="relative flex flex-col items-center lg:items-start">
              <div className="absolute -inset-8 rounded-full bg-fly-blue/10 blur-3xl" />
              <Logo height={64} link={false} className="relative" />
              <div className="relative mt-10 grid w-full max-w-sm grid-cols-2 gap-4">
                <div className="rounded-xl border border-brand bg-surface-card p-4 text-center">
                  <p className="text-2xl font-bold text-fly-blue">15+</p>
                  <p className="mt-1 text-xs font-medium text-body">Years</p>
                </div>
                <div className="rounded-xl border border-brand bg-surface-card p-4 text-center">
                  <p className="text-2xl font-bold text-fly-cyan">2,500+</p>
                  <p className="mt-1 text-xs font-medium text-body">Clients</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={150}>
            <div className="heading-accent mb-5" />
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              {aboutPreview.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              {aboutPreview.description}
            </p>
            <Link
              href={aboutPreview.href}
              className="btn-outline-brand mt-8 inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
            >
              Learn About Us
            </Link>
          </AnimateOnScroll>
        </div>
      </Container>
    </div>
  );
}

export function CtaBanner() {
  return (
    <div className="relative w-full overflow-hidden py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.12),transparent_50%)]" />
      <Container className="relative text-center">
        <AnimateOnScroll>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Ready to Upgrade Your Business Communications?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-blue-100">
            Get a free consultation and custom quote tailored to your business
            needs. No obligation.
          </p>
          <Link
            href="/contact"
            className="btn-shine btn-accent mt-10 inline-flex items-center justify-center rounded-xl px-10 py-4 text-sm font-semibold transition-transform hover:scale-[1.02]"
          >
            Contact Us Today
          </Link>
        </AnimateOnScroll>
      </Container>
    </div>
  );
}
