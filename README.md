# Pospify

Marketing site for Pospify — point of sale for local businesses in the GTA.

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

## Design tokens

Defined in `app/app.css` from the Figma variables. Use them as Tailwind classes (`bg-sand`, `text-muted`, `border-border`, …) — don't hard-code hex values.

| Token     | Value     | Used for                                          |
| --------- | --------- | ------------------------------------------------- |
| `ink`     | `#0B1020` | Headlines, primary buttons, testimonial panel     |
| `muted`   | `#5B6475` | Body copy                                         |
| `border`  | `#E5E7EF` | Rules, pricing grid, FAQ dividers                 |
| `surface` | `#F6F7FB` | POS mockup menu panel                             |
| `sand`    | `#F4F2EE` | Product and FAQ section backgrounds               |
| `white`   | `#FFFFFF` | Page background                                   |

- **Type:** Inter. Hero 76px, section headings 48px, feature titles 40px, quote 34px, body 18px. Headlines are semibold with −0.03em to −0.04em tracking.
- **Spacing:** 1280px content width, 80px side gutter, 120px section padding.
- **Radius:** 8px buttons, 12px cards/photos, 16px hero photo.
- **Buttons:** `primary` (ink), `secondary` (outlined), `inverted` (white, for dark backgrounds).

## Responsive rules

| Breakpoint     | Behaviour                                                                     |
| -------------- | ----------------------------------------------------------------------------- |
| `< 768px`      | Nav collapses to a menu button; 20px gutter; 72px section padding            |
| `< 1024px`     | Two-column sections stack (hero, feature rows, testimonial, pricing, FAQ); feature rows always show the image first; hero headline drops to 44px |
| `≥ 1024px`     | Desktop layout matching Figma                                                 |

## Deployment

Deploy to Vercel (React Router is supported out of the box) or use the included `Dockerfile`:

```bash
docker build -t pospify .
docker run -p 3000:3000 pospify
```

## Status

**Done:** homepage (all v2 sections), tokens, responsive layout.

**To do:**
- `/pricing` page
- `/demo` page with a form (route `action`, e.g. emailing via Resend) and a thank-you state — "Book a demo" buttons currently scroll to the final CTA
- Metadata: link-preview image and favicon
- Responsive check at 768 and 1024px
- Lighthouse pass (target 90+)

**Before launch:**
- Replace stock photos with real client shops — the hero and "01 Checkout" photos show Square hardware
- Fill in real prices, the transaction count, client names and the testimonial
- Confirm the FAQ answers (drafted, not from Figma) and claims like "< 1 day setup" and the TD Merchant Solutions wording
- Point the `#` links (Log in, Hardware, About, Privacy, Terms) at real pages
