import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="bg-brand-hero relative overflow-hidden py-20 text-on-dark lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(139,92,246,0.12),transparent_45%)]" />
      <Container className="relative">
        {children}
        <div className="heading-accent mb-5" />
        <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-dark-muted lg:text-xl">
          {description}
        </p>
      </Container>
    </section>
  );
}
