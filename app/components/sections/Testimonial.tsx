import { testimonial } from "~/content/site";

export function Testimonial() {
  return (
    <section className="flex flex-col bg-ink text-white lg:flex-row lg:items-center">
      <img
        src={testimonial.image.src}
        alt={testimonial.image.alt}
        loading="lazy"
        className="aspect-square w-full object-cover lg:aspect-auto lg:h-[640px] lg:w-[44.44%]"
      />
      <figure className="flex flex-col gap-8 px-5 py-[72px] md:px-10 lg:flex-1 lg:px-20 lg:py-0">
        <blockquote className="text-2xl leading-[1.35] font-medium tracking-[-0.02em] lg:text-[34px]">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="flex flex-col gap-1 leading-normal">
          <span className="text-base font-semibold">{testimonial.name}</span>
          <span className="text-[15px] opacity-60">{testimonial.business}</span>
        </figcaption>
      </figure>
    </section>
  );
}
