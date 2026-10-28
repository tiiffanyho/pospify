import { Container } from "./Container";

const backgrounds = {
  white: "bg-white",
  sand: "bg-sand",
};

export function Section({
  id,
  background = "white",
  className = "",
  children,
}: {
  id?: string;
  background?: keyof typeof backgrounds;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-[72px] lg:py-[120px] ${backgrounds[background]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[34px] leading-[1.08] font-semibold tracking-[-0.03em] text-ink lg:text-5xl lg:leading-[1.08] ${className}`}
    >
      {children}
    </h2>
  );
}
