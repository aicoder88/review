import type { MetadataRoute } from 'next';
import { getAllComparisonMatchups, productCatalog } from '@/lib/product-catalog';
import {
  getLatestReviewedDateValue,
  indexedStaticPaths,
  siteUrl,
  toAbsoluteUrl,
} from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const latestReviewedAt = getLatestReviewedDateValue();

  const staticEntries: MetadataRoute.Sitemap = indexedStaticPaths.map((path) => ({
    url: toAbsoluteUrl(path),
    lastModified: latestReviewedAt,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/reviews' ? 0.9 : 0.7,
  }));

  const reviewEntries: MetadataRoute.Sitemap = productCatalog.map((product) => ({
    url: toAbsoluteUrl(product.reviewUrl),
    lastModified: new Date(`${product.lastReviewedAt}T00:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const comparisonEntries: MetadataRoute.Sitemap = getAllComparisonMatchups().map((matchup) => ({
    url: `${siteUrl}/compare/${matchup.slug}`,
    lastModified: new Date(`${matchup.updatedAt}T00:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...reviewEntries, ...comparisonEntries];
}
