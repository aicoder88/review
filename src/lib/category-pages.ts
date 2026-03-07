import type { Metadata } from 'next';
import { getCatalogProductById } from '@/lib/product-catalog';
import { buildPageMetadata } from '@/lib/page-metadata';
import { formatSiteDate, toAbsoluteUrl } from '@/lib/site';

export interface CategoryPageConfig {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  productIds: string[];
  relatedGuideSlugs?: string[];
}

export interface CategoryRoundupCopy {
  intro: string[];
  criteriaTitle: string;
  criteria: Array<{
    title: string;
    description: string;
  }>;
  relatedCategorySlugs: string[];
}

const categoryPageConfigs: CategoryPageConfig[] = [
  {
    slug: 'best-budget-cat-litter',
    path: '/categories/best-budget-cat-litter',
    title: 'Best Budget Cat Litter',
    description:
      'Budget-friendly picks that still handle clumping, odor, and day-to-day cleanup without overspending.',
    keywords: [
      'best budget cat litter',
      'cheap cat litter reviews',
      'affordable clumping litter',
      'best value cat litter',
    ],
    productIds: ['arm-hammer-clump-seal', 'dr-elseys-ultra', 'boxiecat-premium'],
    relatedGuideSlugs: ['purrify-budget-litter-hack', 'extend-cat-litter-life', 'eliminate-litter-smell'],
  },
  {
    slug: 'best-clumping-cat-litter',
    path: '/categories/best-clumping-cat-litter',
    title: 'Best Clumping Cat Litter',
    description:
      'Hands-on picks for hard clumps, easier scooping, and lower dust across the strongest clumping formulas we review.',
    keywords: [
      'best clumping cat litter',
      'clumping cat litter reviews',
      'hard clumping litter',
      'best cat litter for scooping',
    ],
    productIds: ['dr-elseys-ultra', 'arm-hammer-clump-seal', 'worlds-best'],
    relatedGuideSlugs: ['extend-cat-litter-life', 'eliminate-litter-smell', 'stop-litter-tracking'],
  },
  {
    slug: 'best-low-dust-cat-litter',
    path: '/categories/best-low-dust-cat-litter',
    title: 'Best Low-Dust Cat Litter',
    description:
      'Low-dust cat litter picks for cleaner pours, less airborne mess, and easier breathing in everyday use.',
    keywords: [
      'best low dust cat litter',
      'dust free cat litter reviews',
      'low dust litter',
      'best cat litter for allergies',
    ],
    productIds: ['dr-elseys-ultra', 'boxiecat-premium', 'prettylitter'],
    relatedGuideSlugs: ['stop-litter-tracking', 'eliminate-litter-smell', 'extend-cat-litter-life'],
  },
  {
    slug: 'best-natural-cat-litter',
    path: '/categories/best-natural-cat-litter',
    title: 'Best Natural Cat Litter',
    description:
      'Natural and plant-based cat litter picks focused on clumping, cleanup, odor control, and real-world tradeoffs.',
    keywords: [
      'best natural cat litter',
      'eco friendly cat litter reviews',
      'flushable cat litter',
      'best plant based cat litter',
    ],
    productIds: ['worlds-best', 'prettylitter', 'dr-elseys-ultra'],
    relatedGuideSlugs: ['eliminate-litter-smell', 'stop-litter-tracking', 'extend-cat-litter-life'],
  },
  {
    slug: 'best-odor-control-cat-litter',
    path: '/categories/best-odor-control-cat-litter',
    title: 'Best Odor Control Cat Litter',
    description:
      'Odor-control cat litter picks for stronger ammonia management, cleaner boxes, and easier living in small spaces.',
    keywords: [
      'best odor control cat litter',
      'cat litter odor control reviews',
      'best litter for ammonia smell',
      'best cat litter for smell',
    ],
    productIds: ['arm-hammer-clump-seal', 'prettylitter', 'dr-elseys-ultra'],
    relatedGuideSlugs: ['eliminate-litter-smell', 'extend-cat-litter-life', 'purrify-budget-litter-hack'],
  },
];

const categoryPageConfigBySlug = new Map(
  categoryPageConfigs.map((config) => [config.slug, config]),
);

const categoryRoundupCopyBySlug: Record<string, CategoryRoundupCopy> = {
  'best-budget-cat-litter': {
    intro: [
      'This roundup is for shoppers who want the best budget cat litter without turning every refill into a compromise on clumping, odor control, or cleanup time.',
      'We focus on low total cost, not just the cheapest bag on the shelf. A budget litter only stays on this page if it keeps waste scoopable, controls everyday smell well enough for normal use, and does not force constant full-box resets.',
    ],
    criteriaTitle: 'What matters most in a budget litter roundup',
    criteria: [
      {
        title: 'Useful cost, not just shelf price',
        description:
          'A cheaper bag loses value quickly if it burns through fast, breaks apart during scooping, or forces more frequent full changes.',
      },
      {
        title: 'Clumps that save litter',
        description:
          'Budget winners still need solid clumps. Cleaner scooping leaves less dirty litter behind and protects long-term value.',
      },
      {
        title: 'Odor control you can live with',
        description:
          'Some low-cost formulas lean on fragrance, while others rely more on clumping and routine maintenance. We call out that tradeoff clearly.',
      },
    ],
    relatedCategorySlugs: [
      'best-clumping-cat-litter',
      'best-odor-control-cat-litter',
      'best-low-dust-cat-litter',
    ],
  },
  'best-clumping-cat-litter': {
    intro: [
      'This page targets the strongest clumping cat litter picks for owners who want cleaner scoops, fewer wet crumbs left behind, and less wasted litter over time.',
      'Hard clumps matter because weak clumps leave dirty granules in the box, which hurts odor control and shortens litter life. The best clumping picks still need acceptable dust, tracking, and day-to-day usability to rank well here.',
    ],
    criteriaTitle: 'What we prioritize for clumping performance',
    criteria: [
      {
        title: 'Clump integrity',
        description:
          'The winning litters form clumps that lift cleanly without breaking apart halfway to the trash.',
      },
      {
        title: 'Cleanup speed',
        description:
          'Fast, clean scooping matters for real-world use, especially in multi-cat boxes where weak clumps compound quickly.',
      },
      {
        title: 'Dust and odor tradeoffs',
        description:
          'A litter does not win this page on clumping alone if the pour is dusty or odor performance falls off too fast.',
      },
    ],
    relatedCategorySlugs: [
      'best-low-dust-cat-litter',
      'best-odor-control-cat-litter',
      'best-natural-cat-litter',
    ],
  },
  'best-low-dust-cat-litter': {
    intro: [
      'This roundup focuses on low-dust cat litter for homes where pouring, scooping, and topping off the box should create as little airborne mess as possible.',
      'Low dust is not the same as perfect overall performance. We still weigh clumping, odor control, tracking, and litter feel because some low-dust formulas trade away scoopability or daily convenience.',
    ],
    criteriaTitle: 'What separates a strong low-dust pick',
    criteria: [
      {
        title: 'Cleaner pours and scoops',
        description:
          'The best options stay controlled when you refill the box and when you disturb the litter during daily cleaning.',
      },
      {
        title: 'Consistent box performance',
        description:
          'A low-dust litter still needs to manage odor and cleanup well enough for normal use, not just look good during a single pour.',
      },
      {
        title: 'Material tradeoffs',
        description:
          'Clay, crystal, pellet, and plant-based litters all handle dust differently, so we call out what you gain and what you give up.',
      },
    ],
    relatedCategorySlugs: [
      'best-clumping-cat-litter',
      'best-natural-cat-litter',
      'best-odor-control-cat-litter',
    ],
  },
  'best-natural-cat-litter': {
    intro: [
      'This roundup covers natural cat litter options for shoppers who want plant-based or biodegradable materials without giving up too much day-to-day performance.',
      'Natural litter is a broad category, so the page weighs tradeoffs carefully: clumping strength, odor control, tracking, weight, and whether a formula fits routine scooping or a more specialized setup.',
    ],
    criteriaTitle: 'How we narrow natural litter picks',
    criteria: [
      {
        title: 'Material and disposal fit',
        description:
          'Natural litter shoppers often care about flushability, biodegradability, or lighter bags, but those benefits vary a lot by material.',
      },
      {
        title: 'Real clumping and odor tradeoffs',
        description:
          'Some natural litters are excellent daily drivers, while others need more patience around softer clumps or more frequent refreshes.',
      },
      {
        title: 'Cat acceptance and cleanup feel',
        description:
          'Texture, scent profile, and tracking matter because a natural formula still has to work in a real litter box, not just on paper.',
      },
    ],
    relatedCategorySlugs: [
      'best-clumping-cat-litter',
      'best-low-dust-cat-litter',
      'best-budget-cat-litter',
    ],
  },
  'best-odor-control-cat-litter': {
    intro: [
      'This roundup is built for shoppers who care most about odor control, whether that means a small apartment, a multi-cat room, or simply a box that starts smelling bad too quickly.',
      'Good odor control comes from a mix of absorption, clumping, litter material, and scent strategy. We separate formulas that genuinely stay cleaner from ones that mainly cover smell with fragrance.',
    ],
    criteriaTitle: 'What matters most for odor control',
    criteria: [
      {
        title: 'Waste isolation',
        description:
          'Tighter clumps and better absorption help remove urine and stool faster, which is often more important than fragrance alone.',
      },
      {
        title: 'Scent strategy',
        description:
          'Some litters lean on heavy fragrance, while others work better for people who want unscented odor control and fewer perfume notes in the room.',
      },
      {
        title: 'Box reset frequency',
        description:
          'The best odor-control picks buy you more usable time between full changes without making daily scooping harder.',
      },
    ],
    relatedCategorySlugs: [
      'best-clumping-cat-litter',
      'best-low-dust-cat-litter',
      'best-budget-cat-litter',
    ],
  },
};

function getNumericPrice(price: string) {
  return Number.parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
}

export function getCategoryPageConfig(slug: string) {
  return categoryPageConfigBySlug.get(slug) ?? null;
}

export function getCategoryRoundupCopy(slug: string) {
  return categoryRoundupCopyBySlug[slug] ?? null;
}

export function getCategoryPageStats(slug: string) {
  const config = getCategoryPageConfig(slug);

  if (!config) {
    return null;
  }

  const products = config.productIds
    .map((productId) => getCatalogProductById(productId))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  if (products.length === 0) {
    return {
      tested: 0,
      priceRange: '$0 - $0',
      reviewedThrough: '',
      reviewedThroughDate: '',
    };
  }

  const prices = products.map((product) => getNumericPrice(product.price)).sort((left, right) => left - right);
  const latestReviewedAt = [...products]
    .map((product) => product.lastReviewedAt)
    .sort((left, right) => right.localeCompare(left))[0];

  return {
    tested: products.length,
    priceRange: `$${prices[0].toFixed(0)} - $${prices[prices.length - 1].toFixed(0)}`,
    reviewedThrough: formatSiteDate(latestReviewedAt),
    reviewedThroughDate: latestReviewedAt,
  };
}

export function getCategoryPageMetadata(slug: string): Metadata {
  const config = getCategoryPageConfig(slug);
  const stats = getCategoryPageStats(slug);

  if (!config || !stats) {
    return buildPageMetadata({
      title: 'Category Reviews',
      description: 'Browse category-based cat litter review roundups.',
      path: '/reviews',
    });
  }

  return buildPageMetadata({
    title: `${config.title} Reviews`,
    description: `${config.description} Compare ${stats.tested} reviewed picks across ${stats.priceRange} pricing, updated through ${stats.reviewedThrough}.`,
    path: config.path,
    keywords: config.keywords,
  });
}

export function getCategoryPageSchemaItems(slug: string) {
  const config = getCategoryPageConfig(slug);

  if (!config) {
    return [];
  }

  return config.productIds
    .map((productId) => getCatalogProductById(productId))
    .filter((product): product is NonNullable<typeof product> => Boolean(product))
    .map((product) => ({
      name: product.name,
      url: toAbsoluteUrl(product.reviewUrl),
    }));
}

export function getCategoryPagesForProduct(productId: string) {
  return categoryPageConfigs.filter((config) => config.productIds.includes(productId));
}
