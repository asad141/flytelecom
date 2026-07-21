import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { contact, social } = siteConfig;
  const fullAddress = `${contact.address.street}, ${contact.address.city}${contact.address.state ? `, ${contact.address.state}` : ""} ${contact.address.zip}, ${contact.address.country}`;

  return (
    <footer className="bg-brand-footer text-on-dark-muted">
      <div className="h-1 bg-gradient-to-r from-fly-cyan via-fly-blue to-fly-navy" />
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo height={36} link={false} variant="footer" />
          <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fly-sky">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="footer-link text-sm transition-colors hover:text-fly-cyan"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fly-sky">
            Contact
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>
              <a
                href={`tel:${contact.phone}`}
                className="transition-colors hover:text-fly-cyan"
              >
                {contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-fly-cyan"
              >
                {contact.email}
              </a>
            </p>
            <p className="text-on-dark-muted">{fullAddress}</p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-fly-sky">
            Follow Us
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fly-cyan"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fly-cyan"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
