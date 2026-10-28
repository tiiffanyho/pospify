import { finalCta } from "~/content/site";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";

export function CtaBanner() {
  return (
    <section id="demo" className="relative flex min-h-[480px] scroll-mt-20 items-center overflow-hidden lg:h-[560px]">
      <img
        src={finalCta.image.src}
        alt={finalCta.image.alt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <Container className="relative flex flex-col items-start gap-7 py-[72px] text-white">
        <h2 className="text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] lg:text-[56px]">
          {finalCta.title}
        </h2>
        <p className="text-lg opacity-85">{finalCta.body}</p>
        <Button href={finalCta.cta.href} variant="inverted">
          {finalCta.cta.label}
        </Button>
      </Container>
    </section>
  );
}
