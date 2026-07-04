"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("mobile-menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const overlay =
    mounted &&
    createPortal(
      <div
        id="mobile-nav"
        className={cn(
          "mobile-menu-overlay fixed inset-0 z-[90] bg-background lg:hidden",
          open ? "mobile-menu-open" : "mobile-menu-closed"
        )}
        aria-hidden={!open}
      >
        <nav
          aria-label="Mobile navigation"
          className={cn(
            "mobile-menu-panel flex h-full flex-col px-6 pt-[calc(var(--header-height)+1.5rem)] sm:px-10",
            open ? "mobile-menu-panel-open" : "mobile-menu-panel-closed"
          )}
        >
          <ul className="space-y-1">
            {mainNav.map((item, index) => (
              <li
                key={item.href}
                className="mobile-nav-item"
                style={{
                  transitionDelay: open ? `${index * 60 + 80}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-4 text-lg font-semibold text-heading transition-colors hover:bg-surface-elevated hover:text-fly-sky"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mobile-nav-item btn-shine btn-primary mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold"
            style={{
              transitionDelay: open
                ? `${mainNav.length * 60 + 120}ms`
                : "0ms",
            }}
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>,
      document.body
    );

  return (
    <>
      <button
        type="button"
        className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-xl border border-brand bg-surface-card text-on-dark-muted transition-colors hover:text-fly-sky lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="flex w-5 flex-col gap-1.5">
          <span
            className={cn(
              "block h-0.5 w-full rounded-full bg-current transition-all duration-300",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-full rounded-full bg-current transition-all duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-full rounded-full bg-current transition-all duration-300",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </span>
      </button>
      {overlay}
    </>
  );
}
