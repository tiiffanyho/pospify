import { product } from "~/content/site";
import { Section, SectionTitle } from "~/components/ui/Section";

export function ProductShowcase() {
  return (
    <Section background="sand">
      <div className="flex flex-col gap-5">
        <SectionTitle>
          {product.title[0]}
          <br />
          {product.title[1]}
        </SectionTitle>
        <p className="max-w-[560px] text-lg leading-[1.5] text-muted">{product.body}</p>
      </div>

      <div className="mt-12 flex justify-center lg:mt-16">
        <PosMockup />
      </div>
    </Section>
  );
}

// The tablet screen is built in HTML/CSS so it stays sharp at any size.
function PosMockup() {
  return (
    <div
      className="w-full max-w-[588px] rounded-[28px] leading-normal bg-ink p-[14px] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.12)]"
      role="img"
      aria-label="Pospify checkout screen showing a café menu and an order totalling $16.11"
    >
      <div className="flex h-[380px] overflow-hidden rounded-2xl bg-surface">
        <div className="flex min-w-0 flex-1 flex-col gap-3 p-5">
          <p className="text-sm font-semibold text-ink">Menu</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {product.menu.map((item) => (
              <div key={item.name} className="flex flex-col gap-1 rounded-xl border border-border bg-white p-[14px]">
                <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-[13px] text-muted">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-[150px] shrink-0 flex-col gap-2.5 bg-white p-4 sm:w-[210px] sm:p-5">
          <p className="text-sm font-semibold text-ink">{product.order.number}</p>
          {product.order.lines.map((line) => (
            <div key={line.name} className="flex justify-between gap-2 text-[13px]">
              <span className="truncate text-muted">{line.name}</span>
              <span className="font-medium text-ink">{line.price}</span>
            </div>
          ))}
          <div className="flex-1" />
          <div className="flex justify-between text-[15px] text-ink">
            <span className="font-semibold">Total</span>
            <span className="font-bold">{product.order.total}</span>
          </div>
          <div className="rounded-[10px] bg-ink py-3 text-center text-sm font-semibold whitespace-nowrap text-white">
            Charge {product.order.total}
          </div>
        </div>
      </div>
    </div>
  );
}
