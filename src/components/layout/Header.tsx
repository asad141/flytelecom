import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand bg-surface/95 backdrop-blur-lg">
      <div className="h-1 bg-gradient-to-r from-fly-navy via-fly-blue to-fly-cyan" />
      <Container className="flex items-center justify-between py-4 lg:py-5">
        <Logo height={48} />

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-on-dark-muted transition-all duration-200 hover:bg-fly-light/50 hover:text-fly-sky"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="btn-shine btn-primary hidden rounded-xl px-5 py-2.5 text-sm font-semibold sm:inline-block"
        >
          Get a Quote
        </Link>
      </Container>
    </header>
  );
}
