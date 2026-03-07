import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/page-metadata';
import { siteName, toAbsoluteUrl } from '@/lib/site';

export interface GuidePageDefinition {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readTime: string;
  topicTags: string[];
  relatedCategorySlugs: string[];
  image: string;
}

const defaultGuideImage = toAbsoluteUrl('/opengraph-image');

export const guidePageDefinitions: GuidePageDefinition[] = [
  {
    slug: 'extend-cat-litter-life',
    path: '/guides/extend-cat-litter-life',
    title: 'How to Make Cat Litter Last 2x Longer',
    description:
      'Extend your cat litter life from 3-4 weeks to 6-8 weeks with tested methods that reduce odor and daily cost.',
    keywords: [
      'extend cat litter life',
      'make litter last longer',
      'cat litter savings',
      'litter life tips',
      'prolong cat litter',
    ],
    datePublished: '2025-01-15',
    dateModified: '2025-12-18',
    readTime: '10 min read',
    topicTags: ['budget-hack', 'odor-control', 'multi-cat', 'clumping', 'value'],
    relatedCategorySlugs: ['best-budget-cat-litter', 'best-clumping-cat-litter'],
    image: defaultGuideImage,
  },
  {
    slug: 'purrify-budget-litter-hack',
    path: '/guides/purrify-budget-litter-hack',
    title: 'The $15 Budget Litter Hack',
    description:
      'Turn cheap cat litter into premium performance with a lower monthly cost and better odor control.',
    keywords: [
      'budget cat litter hack',
      'cheap cat litter',
      'save money on cat litter',
      'best budget litter guide',
      'cat litter cost savings',
    ],
    datePublished: '2025-02-10',
    dateModified: '2025-12-18',
    readTime: '8 min read',
    topicTags: ['budget-hack', 'value', 'odor-control', 'multi-cat'],
    relatedCategorySlugs: ['best-budget-cat-litter', 'best-odor-control-cat-litter'],
    image: defaultGuideImage,
  },
  {
    slug: 'eliminate-litter-smell',
    path: '/guides/eliminate-litter-smell',
    title: 'Cat Litter Smells Bad Even When Clean? 7 Fixes That Actually Work',
    description:
      'Bacterial buildup causes smell even in clean boxes. Learn the fixes that eliminate odor at the source.',
    keywords: [
      'cat litter smells bad even when clean',
      'how to eliminate cat litter smell',
      'cat litter odor control',
      'stop litter box smell',
      'ammonia smell litter box',
    ],
    datePublished: '2025-03-05',
    dateModified: '2025-12-18',
    readTime: '9 min read',
    topicTags: ['odor-control', 'multi-cat', 'natural', 'value'],
    relatedCategorySlugs: ['best-odor-control-cat-litter', 'best-natural-cat-litter'],
    image: defaultGuideImage,
  },
  {
    slug: 'stop-litter-tracking',
    path: '/guides/stop-litter-tracking',
    title: 'How to Stop Cat Litter Tracking: 12 Proven Methods',
    description:
      'Reduce litter tracking with tested fixes for litter boxes, mats, and low-tracking litter choices.',
    keywords: [
      'stop cat litter tracking',
      'how to reduce litter tracking',
      'best litter for tracking',
      'low tracking cat litter',
      'litter mat guide',
    ],
    datePublished: '2025-04-10',
    dateModified: '2025-12-18',
    readTime: '12 min read',
    topicTags: ['tracking', 'low-dust', 'natural', 'multi-cat'],
    relatedCategorySlugs: ['best-low-dust-cat-litter', 'best-natural-cat-litter'],
    image: defaultGuideImage,
  },
];

const guidePageDefinitionsBySlug = new Map(
  guidePageDefinitions.map((guide) => [guide.slug, guide]),
);

export function getPublishedGuides() {
  return guidePageDefinitions;
}

export function getGuidePageDefinition(slug: string) {
  return guidePageDefinitionsBySlug.get(slug) ?? null;
}

export function buildGuideMetadata(slug: string): Metadata {
  const guide = getGuidePageDefinition(slug);

  if (!guide) {
    return buildPageMetadata({
      title: `Guides | ${siteName}`,
      description: 'Browse ReviewCatLitter guides and how-to articles.',
      path: '/guides',
    });
  }

  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.path,
    keywords: guide.keywords,
    type: 'article',
    publishedTime: guide.datePublished,
    modifiedTime: guide.dateModified,
    section: 'Guides',
    tags: guide.topicTags,
  });
}
