import {
  getAllComparisonMatchups,
  getFeaturedWinnerProducts,
  productCatalog,
} from '@/lib/product-catalog';

export const siteUrl = 'https://www.reviewcatlitter.com';
export const siteName = 'ReviewCatLitter.com';
export const siteDescription =
  'Independent, data-driven cat litter reviews and side-by-side comparisons based on hands-on testing and clear editorial standards.';
export const organizationId = `${siteUrl}#organization`;
export const websiteId = `${siteUrl}#website`;
export const logoPath = '/logo.png';
export const reviewTeamPath = '/about/review-team';
export const methodologyPath = '/methodology';

export const indexedCategoryPaths = [
  '/categories/best-budget-cat-litter',
  '/categories/best-clumping-cat-litter',
  '/categories/best-low-dust-cat-litter',
  '/categories/best-natural-cat-litter',
  '/categories/best-odor-control-cat-litter',
];

export const indexedGuidePaths = [
  '/guides',
  '/guides/eliminate-litter-smell',
  '/guides/extend-cat-litter-life',
  '/guides/purrify-budget-litter-hack',
  '/guides/stop-litter-tracking',
];

export const indexedStaticPaths = [
  '/',
  '/about',
  reviewTeamPath,
  '/compare',
  '/faq',
  '/methodology',
  '/purrify-litter-enhancer',
  '/reviews',
  ...indexedGuidePaths,
  ...indexedCategoryPaths,
];

export function toAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getReviewedProductCount() {
  return productCatalog.length;
}

export function getComparisonPageCount() {
  return getAllComparisonMatchups().length;
}

export function getFeaturedWinnerCount() {
  return getFeaturedWinnerProducts().length;
}

export function getLatestReviewedDate() {
  return [...productCatalog]
    .map((product) => product.lastReviewedAt)
    .sort((left, right) => right.localeCompare(left))[0];
}

export function getLatestReviewedDateValue() {
  return new Date(`${getLatestReviewedDate()}T00:00:00Z`);
}

export function formatSiteDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
