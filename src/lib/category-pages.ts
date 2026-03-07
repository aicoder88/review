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
  },
];

const categoryPageConfigBySlug = new Map(
  categoryPageConfigs.map((config) => [config.slug, config]),
);

function getNumericPrice(price: string) {
  return Number.parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
}

export function getCategoryPageConfig(slug: string) {
  return categoryPageConfigBySlug.get(slug) ?? null;
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
