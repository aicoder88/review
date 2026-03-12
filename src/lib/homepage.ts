import {
  formatCatalogDate,
  getFeaturedWinnerProducts,
  getLatestReviewedProducts,
} from '@/lib/product-catalog';
import {
  getComparisonPageCount,
  getFeaturedWinnerCount,
  getLatestReviewedDate,
  getReviewedProductCount,
} from '@/lib/site';

export interface HomeFeaturedWinner {
  id: string;
  name: string;
  category: string;
  image: string;
  overallScore: number;
  costPerDay: string;
  reviewUrl: string;
  featuredSize: 'large' | 'medium';
  featuredGradient: string;
  featuredBadge: string;
  featuredIcon: 'crown' | 'sparkles' | 'award' | 'star';
  featuredSpecs: string[];
  worthIf: string;
  skipIf: string;
}

export interface HomeLatestReview {
  id: string;
  name: string;
  category: string;
  image: string;
  overallScore: number;
  summary: string;
  reviewUrl: string;
  lastReviewedAt: string;
  latestTrending: boolean;
}

export interface HomePageData {
  reviewedProductCount: number;
  comparisonPageCount: number;
  featuredWinnerCount: number;
  latestReviewedDate: string;
  latestReviewedDateLabel: string;
  featuredWinners: HomeFeaturedWinner[];
  latestReviews: HomeLatestReview[];
}

export function getHomePageData(): HomePageData {
  const featuredWinners = getFeaturedWinnerProducts().map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    image: product.image,
    overallScore: product.overallScore,
    costPerDay: product.costPerDay,
    reviewUrl: product.reviewUrl,
    featuredSize: product.featuredCard?.size ?? 'medium',
    featuredGradient: product.featuredCard?.gradient ?? 'from-primary to-emerald-600',
    featuredBadge: product.featuredCard?.badge ?? product.badge ?? 'Featured',
    featuredIcon: product.featuredCard?.icon ?? 'star',
    featuredSpecs: product.featuredCard?.specs ?? [],
    worthIf: product.featuredCard?.worthIf ?? product.verdict.worthIf ?? '',
    skipIf: product.featuredCard?.skipIf ?? product.verdict.skipIf ?? '',
  }));

  const latestReviews = getLatestReviewedProducts().map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    image: product.image,
    overallScore: product.overallScore,
    summary: product.summary,
    reviewUrl: product.reviewUrl,
    lastReviewedAt: product.lastReviewedAt,
    latestTrending: Boolean(product.latestTrending),
  }));

  const latestReviewedDate = getLatestReviewedDate();

  return {
    reviewedProductCount: getReviewedProductCount(),
    comparisonPageCount: getComparisonPageCount(),
    featuredWinnerCount: getFeaturedWinnerCount(),
    latestReviewedDate,
    latestReviewedDateLabel: formatCatalogDate(latestReviewedDate),
    featuredWinners,
    latestReviews,
  };
}
