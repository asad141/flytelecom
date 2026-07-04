import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";
import {
  createBreadcrumbJsonLd,
  createMetadata,
  createServiceJsonLd,
} from "@/lib/seo";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const breadcrumbs = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[createServiceJsonLd(service), breadcrumbs]} />

      <section className="bg-brand-hero relative overflow-hidden py-20 text-white lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(139,92,246,0.12),transparent_45%)]" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-fly-sky">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{service.title}</li>
            </ol>
          </nav>
          <div className="flex items-start gap-6">
            <span
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-fly-cyan/30 bg-fly-cyan/10 text-5xl backdrop-blur-sm"
              aria-hidden="true"
            >
              {service.icon}
            </span>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-on-dark-muted lg:text-xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="heading-accent mb-5" />
              <h2 className="text-3xl font-bold text-heading">Overview</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                {service.description}
              </p>
            </div>
            <aside className="card-hover bg-brand-panel h-fit rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-heading">
                Key Features
              </h2>
              <ul className="mt-5 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-0.5 text-fly-cyan" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-shine btn-primary mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
              >
                Get a Quote
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
