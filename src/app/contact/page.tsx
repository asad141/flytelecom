import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export const metadata = createMetadata({
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Request a free quote for business internet, VoIP, or cloud communications.`,
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = siteConfig;
  const fullAddress = `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`;

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Ready to get started? Fill out the form below or reach us directly. We typically respond within one business hour."
      />

      <section className="bg-surface py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <AnimateOnScroll direction="left">
              <div className="heading-accent mb-5" />
              <h2 className="text-2xl font-bold text-heading">
                Send Us a Message
              </h2>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-on-dark-muted"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="input-dark mt-1.5 block w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-on-dark-muted"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="input-dark mt-1.5 block w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-on-dark-muted"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="input-dark mt-1.5 block w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-on-dark-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="input-dark mt-1.5 block w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-shine btn-primary w-full rounded-xl px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.01]"
                >
                  Send Message
                </button>
              </form>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={150}>
              <Logo height={56} link={false} className="mb-8" />
              <div className="heading-accent mb-5" />
              <h2 className="text-2xl font-bold text-heading">Get in Touch</h2>
              <address className="mt-8 space-y-7 not-italic">
                <div className="card-hover rounded-xl border border-brand bg-surface-card p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-fly-sky">
                    Phone
                  </h3>
                  <a
                    href={`tel:${contact.phone}`}
                    className="mt-2 block text-xl font-semibold text-heading hover:text-fly-sky"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div className="card-hover rounded-xl border border-brand bg-surface-card p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-fly-sky">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 block text-xl font-semibold text-heading hover:text-fly-sky"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="card-hover rounded-xl border border-brand bg-surface-card p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-fly-sky">
                    Office
                  </h3>
                  <p className="mt-2 text-lg text-body">{fullAddress}</p>
                </div>
              </address>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
