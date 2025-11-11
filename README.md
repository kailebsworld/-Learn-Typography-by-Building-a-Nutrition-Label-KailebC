# 621 ARCHIVAL — Editorial Ecommerce Starter

A Next.js 14 starter for building an editorial ecommerce experience inspired by 621 ARCHIVAL. The stack pairs an App Router application with Tailwind CSS, shadcn/ui, Sanity CMS, and Stripe Checkout so you can deploy to Vercel quickly.

## Features

- Minimal editorial system with Inter + Space Grotesk typography, light/dark themes, and generous whitespace.
- Archive and shop surfaces driven by Sanity schemas for products, drops, and projects.
- Stripe Checkout integration with API route and webhook stub.
- Cart drawer + page with localStorage persistence.
- Framer Motion powered reveals and ticker animation respecting `prefers-reduced-motion`.
- Sitemap, robots, metadata, and accessible patterns out of the box.

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

3. **Configure Sanity**

   ```bash
   npx sanity@latest init
   ```

   Use your existing project if you have one, then set the environment variables in `.env.local`.

4. **Stripe setup**

   - Add your Stripe test keys to `.env.local`.
   - Optionally run `stripe listen` to forward webhook events during development.

5. **Deploy**

   Deploy with [Vercel](https://vercel.com/). Add the required environment variables in the project dashboard.

## Environment variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=xxxx
STRIPE_SECRET_KEY=sk_test_xxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxx
```

## Testing checklist

- [ ] Lighthouse ≥ 90 for Performance, Best Practices, and SEO.
- [ ] Full keyboard navigation through header, filters, product page, and cart interactions.
- [ ] Mobile viewport: header collapses, cart drawer operates, responsive imagery verified.

## Project structure

```
/app
  /(site)
    layout.tsx
    page.tsx
    archive/
    shop/
    product/
    cart/
    checkout/
    about/
    contact/
    policies/
  /api
    /checkout
    /stripe/webhook
/components
/lib
/styles
/sanity
/seed
```

## Sanity studio

Sanity v3 studio is configured under `/studio` with schemas for site settings, products, collections, drops, pages, and projects. Extend as needed and connect your dataset before deploying.

## Stripe checkout

`POST /api/checkout` creates Stripe Checkout Sessions based on request SKUs and redirects back to `/checkout`. `POST /api/stripe/webhook` verifies events for future order persistence.

## Notes

- Sample products, drops, and archive projects live in `/seed/seed.ts`. Replace with CMS data when connected.
- Update the placeholder imagery under `public/images` to match your brand assets.

