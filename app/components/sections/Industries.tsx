import { industries } from "~/content/site";
import { Section, SectionTitle } from "~/components/ui/Section";

export function Industries() {
  return (
    <Section id="industries">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle className="max-w-[440px]">{industries.title}</SectionTitle>
        <a href={industries.link.href} className="text-base font-medium text-ink hover:text-muted">
          {industries.link.label}
        </a>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-5 lg:mt-14">
        {industries.cards.map((card) => (
          <PhotoCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
}

function PhotoCard({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: { src: string; alt: string };
}) {
  return (
    <article className="flex flex-col gap-4">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="aspect-[4/5] w-full rounded-xl object-cover lg:aspect-auto lg:h-[520px]"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="text-base text-muted">{body}</p>
      </div>
    </article>
  );
}
