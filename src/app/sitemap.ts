import type { MetadataRoute } from 'next';
import { getCategoryPageStats } from '@/lib/category-pages';
import { getPublishedGuides } from '@/lib/guide-pages';
import { getAllComparisonMatchups, productCatalog } from '@/lib/product-catalog';
import {
  getLatestReviewedDateValue,
  indexedCategoryPaths,
  methodologyPath,
  reviewTeamPath,
  siteUrl,
  toAbsoluteUrl,
} from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const latestReviewedAt = getLatestReviewedDateValue();
  const staticPageConfigs = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1, lastModified: latestReviewedAt },
    { path: '/reviews', changeFrequency: 'weekly' as const, priority: 0.9, lastModified: latestReviewedAt },
    { path: '/compare', changeFrequency: 'weekly' as const, priority: 0.9, lastModified: latestReviewedAt },
    { path: '/guides', changeFrequency: 'weekly' as const, priority: 0.85, lastModified: latestReviewedAt },
    { path: methodologyPath, changeFrequency: 'monthly' as const, priority: 0.8, lastModified: latestReviewedAt },
    { path: '/faq', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: latestReviewedAt },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7, lastModified: latestReviewedAt },
    { path: reviewTeamPath, changeFrequency: 'monthly' as const, priority: 0.7, lastModified: latestReviewedAt },
    {
      path: '/purrify-litter-enhancer',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: latestReviewedAt,
    },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPageConfigs.map((entry) => ({
    url: toAbsoluteUrl(entry.path),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const guideEntries: MetadataRoute.Sitemap = getPublishedGuides().map((guide) => ({
    url: toAbsoluteUrl(guide.path),
    lastModified: new Date(`${guide.dateModified}T00:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = indexedCategoryPaths.map((path) => {
    const slug = path.split('/').filter(Boolean).pop() ?? '';
    const stats = getCategoryPageStats(slug);

    return {
      url: toAbsoluteUrl(path),
      lastModified: stats?.reviewedThroughDate
        ? new Date(`${stats.reviewedThroughDate}T00:00:00Z`)
        : latestReviewedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

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

  return [...staticEntries, ...guideEntries, ...categoryEntries, ...reviewEntries, ...comparisonEntries];
}
