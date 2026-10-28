import { logos } from "~/content/site";
import { Container } from "~/components/ui/Container";

export function LogoStrip() {
  return (
    <section className="pt-14 pb-6">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-[15px] text-muted">{logos.label}</p>
        <ul className="flex flex-wrap gap-x-10 gap-y-4 lg:contents">
          {logos.clients.map((client) => (
            <li key={client} className="text-xl font-semibold tracking-[-0.02em] whitespace-nowrap text-ink">
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
