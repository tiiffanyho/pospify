import { stats } from "~/content/site";
import { Container } from "~/components/ui/Container";

export function Stats() {
  return (
    <section className="pt-[72px] pb-10 lg:pt-[120px]">
      <Container>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col-reverse gap-2 border-t border-ink pt-6 leading-normal">
      <dt className="text-base text-muted">{label}</dt>
      <dd className="text-[40px] leading-[1.2] font-semibold tracking-[-0.03em] whitespace-nowrap text-ink lg:text-[56px]">
        {value}
      </dd>
    </div>
  );
}
