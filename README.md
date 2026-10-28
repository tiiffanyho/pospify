# Pospify

Marketing site for Pospify: point of sale for local businesses in the GTA.

Built with React Router 8 (framework mode), TypeScript and Tailwind CSS 4, from the Figma file's **"Pospify — Homepage v2"** frame ([Figma](https://www.figma.com/design/pzlAZTixFnTALBlxxicuOU/Untitled?node-id=8-57)). The design is desktop-only (1440px); mobile rules are described below.

## Getting started

Requires Node 22.22 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build
npm start          # serve the production build
```

## Project structure

```
app/
  app.css                 Tailwind import + design tokens (@theme)
  root.tsx                HTML shell, loads Inter from Google Fonts
  routes.ts               Route config
  routes/home.tsx         Homepage — composes the sections in order
  content/site.ts         ALL page copy, prices, FAQ, stats, links
  components/
    ui/                   Button, Container, Section / SectionTitle
    sections/             Nav, Hero, LogoStrip, Industries, ProductShowcase,
                          Features, Testimonial, Stats, PricingTable, Faq,
                          CtaBanner, Footer
public/images/            Photos and the FAQ plus icon (exported from Figma)
```

**Editing copy:** change text in `app/content/site.ts`, not in the components. Placeholders and unfinished links are marked `TODO` there.

## Deployment

Deploy to Vercel (React Router is supported out of the box) or use the included `Dockerfile`:

```bash
docker build -t pospify .
docker run -p 3000:3000 pospify
```
