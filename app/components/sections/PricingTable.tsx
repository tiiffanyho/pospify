import { pricing, type Plan } from "~/content/site";
import { Button } from "~/components/ui/Button";
import { Section, SectionTitle } from "~/components/ui/Section";

export function PricingTable() {
  return (
    <Section id="pricing">
      <SectionTitle>
        {pricing.title[0]}
        <br />
        {pricing.title[1]}
      </SectionTitle>

      <div className="mt-10 grid divide-y divide-border rounded-xl border border-border lg:mt-14 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {pricing.plans.map((plan) => (
          <PlanColumn key={plan.name} plan={plan} />
        ))}
      </div>

      <p className="mt-10 text-sm text-muted lg:mt-14">{pricing.note}</p>
    </Section>
  );
}

function PlanColumn({ plan }: { plan: Plan }) {
  return (
    <div className="flex flex-col gap-4 p-8 leading-normal lg:p-10">
      <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
      <p className="flex items-baseline gap-1.5">
        <span className="text-[44px] leading-[1.2] font-semibold tracking-[-0.03em] text-ink">{plan.price}</span>
        {plan.unit && <span className="text-[15px] text-muted">{plan.unit}</span>}
      </p>
      <p className="text-base text-muted">{plan.description}</p>
      <Button href={plan.cta.href} variant={plan.featured ? "primary" : "secondary"} className="w-full">
        {plan.cta.label}
      </Button>
      <ul className="flex flex-col gap-2.5 pt-3 text-[15px] text-ink">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span aria-hidden="true">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
