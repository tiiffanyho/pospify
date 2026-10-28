import { useState } from "react";
import { nav } from "~/content/site";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-[18px]">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-bold tracking-[-0.04em] text-ink">
            pospify
          </a>
          <nav className="hidden items-center gap-12 md:flex" aria-label="Main">
            {nav.links.map((link) => (
              <a key={link.label} href={link.href} className="text-[15px] font-medium text-ink hover:text-muted">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a href={nav.login.href} className="text-[15px] font-medium text-ink hover:text-muted">
            {nav.login.label}
          </a>
          <Button href={nav.cta.href}>{nav.cta.label}</Button>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <Container className="pb-6 md:hidden">
          <nav id="mobile-menu" className="flex flex-col border-t border-border" aria-label="Mobile">
            {[...nav.links, nav.login].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button href={nav.cta.href} className="mt-6 w-full">
            {nav.cta.label}
          </Button>
        </Container>
      )}
    </header>
  );
}
