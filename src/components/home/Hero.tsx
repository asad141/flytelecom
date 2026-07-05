import Link from "next/link";
import { heroContent } from "@/data/home";
import { HeroVisual } from "@/components/home/HeroVisual";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(6,182,212,0.15),transparent_45%)]" />
      <div className="animate-glow-pulse absolute -right-20 -top-20 h-80 w-80 rounded-full bg-fly-blue/25 blur-3xl" />
      <div className="animate-glow-pulse absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-fly-cyan/20 blur-3xl" />

      <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <AnimateOnScroll direction="up">
          <p className="mb-4 inline-block rounded-full border border-fly-sky/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-fly-sky">
            Trusted by 2,500+ businesses
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {heroContent.headline.replace(heroContent.headlineHighlight, "")}
            <span className="bg-gradient-to-r from-fly-sky via-white to-fly-cyan bg-clip-text text-transparent">
              {heroContent.headlineHighlight}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted sm:text-xl">
            {heroContent.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={heroContent.ctaPrimary.href}
              className="btn-shine btn-accent inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
            >
              {heroContent.ctaPrimary.label}
            </Link>
            <Link
              href={heroContent.ctaSecondary.href}
              className="btn-outline-light inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
            >
              {heroContent.ctaSecondary.label}
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delay={150}>
          <HeroVisual />
        </AnimateOnScroll>
      </Container>
    </div>
  );
}
