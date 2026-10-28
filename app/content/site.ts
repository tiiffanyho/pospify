// All homepage copy lives here. Swap placeholders ($XX, [#], Client One…) in this file only.

export type LinkItem = { label: string; href: string };

export const nav = {
  links: [
    { label: "Features", href: "#features" },
    { label: "Industries", href: "#industries" },
    { label: "Pricing", href: "#pricing" },
    { label: "Support", href: "#faq" },
  ] satisfies LinkItem[],
  login: { label: "Log in", href: "#" }, // TODO: real login URL
  cta: { label: "Book a demo", href: "#demo" },
};

export const hero = {
  title: ["The point of sale for", "your neighbourhood shop"],
  body: "Checkout, inventory and reports in one system — installed by us, with a real person to call when you need help.",
  primary: { label: "Book a free demo", href: "#demo" },
  secondary: { label: "See pricing", href: "#pricing" },
  image: {
    src: "/images/hero.jpg",
    alt: "Shop owner ringing up an order at the counter",
  },
};

export const logos = {
  label: "Running at shops across the GTA",
  clients: ["Client One", "Client Two", "Client Three", "Client Four", "Client Five"],
};

export const industries = {
  title: "Built for the counter you already run",
  link: { label: "Cafés, shops and restaurants →", href: "#features" },
  cards: [
    {
      title: "Cafés & bakeries",
      body: "Quick item buttons, modifiers and tips.",
      image: { src: "/images/cafes-bakeries.jpg", alt: "Barista pouring latte art" },
    },
    {
      title: "Retail",
      body: "Barcode scanning and live stock counts.",
      image: { src: "/images/retail.jpg", alt: "Clothing boutique with racks and shelves" },
    },
    {
      title: "Restaurants",
      body: "Table orders and split bills.",
      image: { src: "/images/restaurants.jpg", alt: "Restaurant dining room set for service" },
    },
  ],
};

export const product = {
  title: ["Everything at the counter.", "Nothing you don't need."],
  body: "Ring up sales, take TD card payments, track stock and see the day's numbers — on any tablet.",
  menu: [
    { name: "Latte", price: "$5.25" },
    { name: "Croissant", price: "$3.75" },
    { name: "Cold brew", price: "$4.95" },
    { name: "Bagel", price: "$3.50" },
    { name: "Matcha", price: "$5.50" },
    { name: "Muffin", price: "$3.25" },
  ],
  order: {
    number: "Order #1042",
    lines: [
      { name: "2× Latte", price: "$10.50" },
      { name: "Croissant", price: "$3.75" },
    ],
    total: "$16.11",
  },
};

export const features = [
  {
    number: "01",
    title: "Checkout that keeps the line moving",
    body: "Big buttons, saved favourites and tap, chip or swipe through your TD terminal. New staff are ringing up sales on their first shift.",
    link: { label: "Learn more →", href: "#demo" }, // TODO: feature page
    image: { src: "/images/feature-checkout.jpg", alt: "Customer tapping a card on a payment terminal" },
  },
  {
    number: "02",
    title: "Know what's on the shelf",
    body: "Every sale updates stock in real time, so you reorder before you run out — not after.",
    link: { label: "Learn more →", href: "#demo" }, // TODO: feature page
    image: { src: "/images/feature-inventory.jpg", alt: "Stocked shelves with price labels" },
  },
  {
    number: "03",
    title: "Numbers you'll actually read",
    body: "Today's sales, best sellers and busiest hours, ready when you close up. Export for your accountant in one click.",
    link: { label: "Learn more →", href: "#demo" }, // TODO: feature page
    image: { src: "/images/feature-reports.jpg", alt: "Owner with a coffee reviewing sales on a laptop" },
  },
];

export const testimonial = {
  quote:
    "They set everything up, trained my staff, and I finally understand my sales. When something breaks, I call and a person picks up.",
  name: "Owner Name",
  business: "Client Café, Markham ON",
  image: { src: "/images/testimonial.jpg", alt: "Café owner smiling in their shop" },
};

export const stats = [
  { value: "5", label: "businesses live" },
  { value: "[#]", label: "transactions processed" },
  { value: "< 1 day", label: "average setup" },
  { value: "1 call", label: "to reach real support" },
];

export type Plan = {
  name: string;
  price: string;
  unit?: string;
  description: string;
  cta: LinkItem;
  featured?: boolean;
  includes: string[];
};

export const pricing = {
  title: ["Simple pricing.", "No long-term contract."],
  plans: [
    {
      name: "Starter",
      price: "$XX",
      unit: "CAD / month",
      description: "For one counter getting started.",
      cta: { label: "Get started", href: "#demo" },
      includes: ["1 register", "Inventory and reports", "TD card payments", "Email support"],
    },
    {
      name: "Growth",
      price: "$XX",
      unit: "CAD / month",
      description: "For busy shops with a team.",
      cta: { label: "Get started", href: "#demo" },
      featured: true,
      includes: ["Up to 3 registers", "Staff accounts", "On-site setup and training", "Phone support"],
    },
    {
      name: "Multi-location",
      price: "Let's talk",
      description: "For owners with more than one store.",
      cta: { label: "Contact us", href: "#demo" },
      includes: ["Unlimited registers", "Shared inventory", "A dedicated contact", "Priority support"],
    },
  ] satisfies Plan[],
  note: "Card processing billed separately through TD Merchant Solutions. Prices are placeholders.",
};

// TODO: answers are drafts — not in the Figma file. Confirm before launch.
export const faq = {
  title: "Questions",
  body: "Can't find what you need? Call us — we'll answer.",
  items: [
    {
      q: "What hardware do I need?",
      a: "Pospify runs on any modern tablet. Card payments go through a TD terminal, and we can supply a receipt printer, cash drawer and barcode scanner if you need them.",
    },
    {
      q: "How long does setup take?",
      a: "Most shops are up and running in under a day. We load your menu or products, connect your TD terminal and train your team on site.",
    },
    {
      q: "Is there a long-term contract?",
      a: "No. You pay month to month and can cancel any time.",
    },
    {
      q: "Which payments can I accept?",
      a: "Tap, chip and swipe for debit and credit cards through TD Merchant Solutions, plus cash.",
    },
    {
      q: "What if my internet goes down?",
      a: "You can keep ringing up sales offline. Everything syncs automatically once you're back online.",
    },
    {
      q: "How do I reach support?",
      a: "Call us. A real person on our team picks up — no ticket queue.",
    },
  ],
};

export const finalCta = {
  title: "See it running a shop like yours.",
  body: "Book a free 20-minute demo. No pressure, no contract.",
  cta: { label: "Book a free demo", href: "#demo" }, // TODO: /demo form page
  image: { src: "/images/final-cta.jpg", alt: "" },
};

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Hardware", href: "#" }, // TODO
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Cafés", href: "#industries" },
        { label: "Retail", href: "#industries" },
        { label: "Restaurants", href: "#industries" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" }, // TODO
        { label: "Support", href: "#faq" },
        { label: "Contact", href: "#demo" },
      ],
    },
  ],
  copyright: "© 2026 Pospify · Markham, Ontario",
  legal: [
    { label: "Privacy", href: "#" }, // TODO
    { label: "Terms", href: "#" }, // TODO
  ],
};
