import { features } from "~/content/site";
import { Section } from "~/components/ui/Section";

export function Features() {
  return (
    <Section id="features">
      <div className="flex flex-col gap-[72px] lg:gap-[120px]">
        {features.map((feature, i) => (
          <FeatureRow key={feature.number} {...feature} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function FeatureRow({
  number,
  title,
  body,
  link,
  image,
  reverse = false,
}: (typeof features)[number] & { reverse?: boolean }) {
  return (
    <article className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-24">
      {/* Image comes first in the DOM so it always sits on top on mobile. */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`aspect-[4/3] w-full min-w-0 rounded-xl object-cover lg:aspect-auto lg:h-[560px] lg:flex-1 ${reverse ? "lg:order-last" : ""}`}
      />
      <div className="flex flex-col gap-5 lg:w-[460px] lg:shrink-0">
        <p className="text-[15px] font-medium text-muted">{number}</p>
        <h3 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.025em] text-ink lg:text-[40px]">
          {title}
        </h3>
        <p className="text-lg leading-[1.55] text-muted">{body}</p>
        <a href={link.href} className="self-start text-base font-semibold text-ink underline underline-offset-4 hover:text-muted">
          {link.label}
        </a>
      </div>
    </article>
  );
}
