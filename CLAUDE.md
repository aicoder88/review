# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 14 application for ReviewCatLitter.com - a data-driven cat litter review website. Uses App Router with React Server Components, Tailwind CSS, and shadcn/ui.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Route Structure

- `/` - Homepage with section components
- `/reviews` - Reviews listing
- `/reviews/[slug]` - Individual product reviews (uses `ProductReviewPage` component)
- `/categories/[slug]` - Category pages (uses `CategoryPage` component)
- `/compare` - Product comparison tool
- `/about`, `/guides`, `/methodology`, `/search` - Static pages

### Key Patterns

**Product Reviews**: Individual review pages in `src/app/reviews/[product-name]/page.tsx` pass review data to the reusable `ProductReviewPage` component in `src/components/reviews/`.

**Category Pages**: Category pages use the `CategoryPage` component (`src/components/categories/CategoryPage.tsx`) with filter sidebar, comparison table, and quick picks.

**Comparison System**: Global state via `ComparisonContext` (`src/context/ComparisonContext.tsx`) with localStorage persistence. The `ComparisonBar` shows in the root layout. Max 4 products can be compared.

### Component Organization

- `src/components/home/` - Landing page sections (Header, Hero, Footer, etc.)
- `src/components/reviews/` - Review page components and UI elements
- `src/components/categories/` - Category page components
- `src/components/compare/` - Comparison tool components
- `src/components/ui/` - shadcn/ui primitives (modify with care, managed by CLI)

### Data Layer

- `src/lib/types/review.ts` - TypeScript interfaces for `ProductReview`, `ReviewScore`, `ReviewVerdict`
- `src/lib/data/` - Static review data files
- Review data includes: scores (dust/clumping/odor/tracking/value), specs, pros/cons, verdict

### Styling

- **Design tokens**: Forest green (`hsl(166 65% 24%)`) as primary, warm cream background (`hsl(40 20% 97%)`)
- **Typography**: Fraunces (headings), Outfit (body), JetBrains Mono (code)
- **CSS Variables**: HSL theme colors in `globals.css`
- **Utility**: `cn()` from `@/lib/utils` for merging Tailwind classes

### Adding New Content

**New review page**: Create `src/app/reviews/[product-slug]/page.tsx`, define `ReviewData` object, and render `<ProductReviewPage data={...}>` with content as children.

**New category page**: Create `src/app/categories/[category-slug]/page.tsx` using the `CategoryPage` component pattern.

**New shadcn component**: `npx shadcn@latest add [component]`

### Path Aliases

- `@/*` → `./src/*`
