import { footer } from "~/content/site";
import { Container } from "~/components/ui/Container";

export function Footer() {
  return (
    <footer className="pt-16 pb-10 leading-normal lg:pt-20">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <a href="/" className="text-[28px] leading-none font-bold tracking-[-0.04em] text-ink">
            pospify
          </a>
          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-24">
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3 text-[15px]">
                <p className="font-semibold text-ink">{column.title}</p>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-muted hover:text-ink">
                    {link.label}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex gap-3">
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
