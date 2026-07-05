import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-[100] border-b border-brand bg-surface shadow-sm max-lg:bg-surface lg:bg-surface/95 lg:backdrop-blur-lg">
      <div className="h-1 bg-gradient-to-r from-fly-navy via-fly-blue to-fly-cyan" />
      <Container className="flex items-center justify-between gap-4 py-3 sm:py-4 lg:py-5">
        <div className="shrink-0 origin-left scale-90 sm:scale-100">
          <Logo height={48} />
        </div>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-body transition-all duration-200 hover:bg-fly-light hover:text-fly-blue-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-shine btn-primary hidden rounded-xl px-5 py-2.5 text-sm font-semibold lg:inline-block"
          >
            Get a Quote
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
