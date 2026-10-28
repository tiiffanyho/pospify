import type { Route } from "./+types/home";
import { Nav } from "~/components/sections/Nav";
import { Hero } from "~/components/sections/Hero";
import { LogoStrip } from "~/components/sections/LogoStrip";
import { Industries } from "~/components/sections/Industries";
import { ProductShowcase } from "~/components/sections/ProductShowcase";
import { Features } from "~/components/sections/Features";
import { Testimonial } from "~/components/sections/Testimonial";
import { Stats } from "~/components/sections/Stats";
import { PricingTable } from "~/components/sections/PricingTable";
import { Faq } from "~/components/sections/Faq";
import { CtaBanner } from "~/components/sections/CtaBanner";
import { Footer } from "~/components/sections/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pospify — Point of sale for your neighbourhood shop" },
    {
      name: "description",
      content:
        "Checkout, inventory and reports in one system — installed by us, with a real person to call when you need help.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Industries />
        <ProductShowcase />
        <Features />
        <Testimonial />
        <Stats />
        <PricingTable />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
