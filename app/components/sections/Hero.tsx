import { hero } from "~/content/site";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";

export function Hero() {
  return (
    <section className="pt-10 lg:pt-16">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-20">
          <h1 className="flex-1 text-[44px] leading-[1.02] font-semibold tracking-[-0.04em] text-ink lg:text-[76px]">
            {hero.title[0]} <br className="hidden lg:block" />
            {hero.title[1]}
          </h1>
          <div className="flex flex-col gap-6 lg:w-[400px] lg:shrink-0">
            <p className="text-lg leading-[1.5] text-muted">{hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </div>
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          fetchPriority="high"
          className="mt-10 aspect-[4/3] w-full rounded-2xl object-cover md:aspect-auto md:h-[460px] lg:h-[620px]"
        />
      </Container>
    </section>
  );
}
