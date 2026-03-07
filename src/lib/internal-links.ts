import {
  getCategoryPageConfig,
  getCategoryPagesForProduct,
  getCategoryRoundupCopy,
} from '@/lib/category-pages';
import { getGuidePageDefinition, getPublishedGuides } from '@/lib/guide-pages';
import { getCatalogProductById } from '@/lib/product-catalog';

export interface RelatedContentCard {
  title: string;
  url: string;
  description: string;
  type: 'review' | 'guide' | 'category';
}

function capitalizeTag(tag: string) {
  return tag.replace(/-/g, ' ').replace(/\b\w/g, (value) => value.toUpperCase());
}

export function getRelatedGuideCardsForCategory(slug: string): RelatedContentCard[] {
  const category = getCategoryPageConfig(slug);

  if (!category?.relatedGuideSlugs) {
    return [];
  }

  return category.relatedGuideSlugs
    .map((guideSlug) => getGuidePageDefinition(guideSlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide))
    .map((guide) => ({
      title: guide.title,
      url: guide.path,
      description: guide.description,
      type: 'guide' as const,
    }));
}

export function getRelatedCategoryCardsForCategory(slug: string): RelatedContentCard[] {
  const roundupCopy = getCategoryRoundupCopy(slug);

  if (!roundupCopy?.relatedCategorySlugs.length) {
    return [];
  }

  return roundupCopy.relatedCategorySlugs
    .map((relatedSlug) => getCategoryPageConfig(relatedSlug))
    .filter((category): category is NonNullable<typeof category> => Boolean(category))
    .map((category) => ({
      title: category.title,
      url: category.path,
      description: category.description,
      type: 'category' as const,
    }));
}

export function getRelatedResourceCardsForProduct(productId: string): RelatedContentCard[] {
  const product = getCatalogProductById(productId);

  if (!product) {
    return [];
  }

  const categoryCards = getCategoryPagesForProduct(productId).map((category) => ({
    title: category.title,
    url: category.path,
    description: `See where ${product.name} lands in our ${category.title.toLowerCase()} roundup.`,
    type: 'category' as const,
  }));

  const guideCards = getPublishedGuides()
    .map((guide) => ({
      guide,
      matches: guide.topicTags.filter((tag) => product.tags.includes(tag)).length,
    }))
    .filter((entry) => entry.matches > 0)
    .sort((left, right) => right.matches - left.matches)
    .slice(0, 3)
    .map(({ guide }) => ({
      title: guide.title,
      url: guide.path,
      description:
        guide.description ||
        `${capitalizeTag(guide.topicTags[0] ?? 'Cat Litter')} guidance connected to ${product.name}.`,
      type: 'guide' as const,
    }));

  return [...categoryCards, ...guideCards].slice(0, 6);
}
