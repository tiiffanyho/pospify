import { faq } from "~/content/site";
import { Section } from "~/components/ui/Section";

export function Faq() {
  return (
    <Section id="faq" background="sand">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 lg:w-[400px] lg:shrink-0">
          <h2 className="text-[34px] font-semibold tracking-[-0.03em] text-ink lg:text-5xl">{faq.title}</h2>
          <p className="text-base leading-[1.5] text-muted">{faq.body}</p>
        </div>
        <div className="flex-1">
          {faq.items.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// Native <details> opens and closes without JavaScript.
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg leading-normal font-medium text-ink">
        {question}
        <img
          src="/images/icon-plus.svg"
          alt=""
          width={20}
          height={20}
          className="shrink-0 transition-transform group-open:rotate-45"
        />
      </summary>
      <p className="-mt-2 pb-6 text-base leading-[1.6] text-muted lg:pr-10">{answer}</p>
    </details>
  );
}
