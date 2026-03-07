import { FAQSchema } from '@/components/seo/FAQSchema';
import { ArticleSchema, BreadcrumbItem, BreadcrumbSchema } from '@/components/seo/EnhancedProductSchema';
import { ItemListSchema } from '@/components/seo/ItemListSchema';
import { organizationId, siteName, toAbsoluteUrl, websiteId } from '@/lib/site';

interface SchemaListItem {
  name: string;
  url: string;
}

interface SchemaFaq {
  question: string;
  answer: string;
}

interface ArticlePageSchemasProps {
  headline: string;
  description: string;
  path: string;
  image: string | string[];
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
  articleSection?: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: SchemaFaq[];
}

interface CollectionPageSchemasProps {
  name: string;
  path: string;
  breadcrumbs: BreadcrumbItem[];
  items: SchemaListItem[];
  faqs?: SchemaFaq[];
}

interface WebPageSchemasProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  pageType?: 'WebPage' | 'AboutPage' | 'ProfilePage';
  dateModified?: string;
  mainEntity?: Record<string, unknown>;
}

interface ComparisonSchemaProduct {
  name: string;
  category: string;
  reviewUrl: string;
  overallScore: number;
  price: string;
}

interface ComparisonPageSchemasProps {
  title: string;
  description: string;
  path: string;
  dateModified: string;
  breadcrumbs: BreadcrumbItem[];
  products: ComparisonSchemaProduct[];
  faqs?: SchemaFaq[];
}

export function ArticlePageSchemas({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
  author = siteName,
  keywords = [],
  articleSection = 'Guides',
  breadcrumbs,
  faqs = [],
}: ArticlePageSchemasProps) {
  return (
    <>
      <ArticleSchema
        headline={headline}
        description={description}
        image={image}
        datePublished={datePublished}
        dateModified={dateModified}
        author={author}
        url={toAbsoluteUrl(path)}
        keywords={keywords}
        articleSection={articleSection}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      {faqs.length > 0 ? <FAQSchema faqs={faqs} /> : null}
    </>
  );
}

export function CollectionPageSchemas({
  name,
  path,
  breadcrumbs,
  items,
  faqs = [],
}: CollectionPageSchemasProps) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ItemListSchema name={name} url={toAbsoluteUrl(path)} items={items} />
      {faqs.length > 0 ? <FAQSchema faqs={faqs} /> : null}
    </>
  );
}

export function WebPageSchemas({
  title,
  description,
  path,
  breadcrumbs = [],
  pageType = 'WebPage',
  dateModified,
  mainEntity,
}: WebPageSchemasProps) {
  const absoluteUrl = toAbsoluteUrl(path);
  const schema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: title,
    description,
    url: absoluteUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': organizationId,
    },
    publisher: {
      '@id': organizationId,
    },
    dateModified,
    ...(mainEntity ? { mainEntity } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {breadcrumbs.length > 0 ? <BreadcrumbSchema items={breadcrumbs} /> : null}
    </>
  );
}

export function ComparisonPageSchemas({
  title,
  description,
  path,
  dateModified,
  breadcrumbs,
  products,
  faqs = [],
}: ComparisonPageSchemasProps) {
  const absoluteUrl = toAbsoluteUrl(path);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl,
    dateModified,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': websiteId,
    },
    publisher: {
      '@id': organizationId,
    },
    about: products.map((product) => ({
      '@type': 'Product',
      name: product.name,
      category: product.category,
      url: toAbsoluteUrl(product.reviewUrl),
      offers: {
        '@type': 'Offer',
        price: product.price.replace(/[^0-9.]/g, ''),
        priceCurrency: 'USD',
        url: toAbsoluteUrl(product.reviewUrl),
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.overallScore,
        bestRating: 10,
        worstRating: 0,
        reviewCount: 1,
      },
    })),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: toAbsoluteUrl(product.reviewUrl),
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      {faqs.length > 0 ? <FAQSchema faqs={faqs} /> : null}
    </>
  );
}
