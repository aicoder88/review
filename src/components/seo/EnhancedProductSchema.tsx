/**
 * Enhanced Product Schema Component
 * Implements full Schema.org Product + Review structured data
 * Optimized for rich snippets in Google search results
 */

export interface ReviewSchema {
  author: string;
  datePublished: string;
  reviewBody: string;
  rating: number;
  bestRating?: number;
  worstRating?: number;
}

export interface AggregateRatingSchema {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export interface OfferSchema {
  price: string;
  priceCurrency?: string;
  availability?: string;
  url: string;
  seller?: string;
}

export interface EnhancedProductSchemaProps {
  name: string;
  description: string;
  category: string;
  image: string | string[];
  brand?: string;
  sku?: string;
  gtin?: string;
  mpn?: string;
  review: ReviewSchema;
  aggregateRating?: AggregateRatingSchema;
  offers: OfferSchema | OfferSchema[];
  features?: string[];
  keywords?: string[];
  url: string;
  // Additional cat litter specific properties
  odorControlScore?: number;
  clumpingScore?: number;
  dustScore?: number;
  trackingScore?: number;
  valueScore?: number;
}

export function EnhancedProductSchema({
  name,
  description,
  category,
  image,
  brand = "",
  sku = "",
  gtin = "",
  mpn = "",
  review,
  aggregateRating,
  offers,
  features = [],
  keywords = [],
  url,
  odorControlScore,
  clumpingScore,
  dustScore,
  trackingScore,
  valueScore,
}: EnhancedProductSchemaProps) {
  const siteName = "ReviewCatLitter.com";
  const siteUrl = "https://www.reviewcatlitter.com";

  // Normalize images to array
  const images = Array.isArray(image) ? image : [image];

  // Build additional property values for cat litter specific metrics
  const additionalProperties = [
    ...(odorControlScore !== undefined ? [{
      "@type": "PropertyValue",
      "name": "Odor Control Score",
      "value": odorControlScore.toString(),
      "bestRating": "10",
      "worstRating": "0"
    }] : []),
    ...(clumpingScore !== undefined ? [{
      "@type": "PropertyValue",
      "name": "Clumping Strength Score",
      "value": clumpingScore.toString(),
      "bestRating": "10",
      "worstRating": "0"
    }] : []),
    ...(dustScore !== undefined ? [{
      "@type": "PropertyValue",
      "name": "Dust Control Score",
      "value": dustScore.toString(),
      "bestRating": "10",
      "worstRating": "0"
    }] : []),
    ...(trackingScore !== undefined ? [{
      "@type": "PropertyValue",
      "name": "Tracking Control Score",
      "value": trackingScore.toString(),
      "bestRating": "10",
      "worstRating": "0"
    }] : []),
    ...(valueScore !== undefined ? [{
      "@type": "PropertyValue",
      "name": "Value for Money Score",
      "value": valueScore.toString(),
      "bestRating": "10",
      "worstRating": "0"
    }] : []),
  ];

  // Normalize offers to array
  const offersArray = Array.isArray(offers) ? offers : [offers];
  const offersSchema = offersArray.length === 1 ? {
    "@type": "Offer",
    "price": offersArray[0].price.replace('$', ''),
    "priceCurrency": offersArray[0].priceCurrency || "USD",
    "availability": offersArray[0].availability || "https://schema.org/InStock",
    "url": offersArray[0].url,
    "seller": {
      "@type": "Organization",
      "name": offersArray[0].seller || "Amazon"
    },
    "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  } : {
    "@type": "AggregateOffer",
    "offers": offersArray.map(offer => ({
      "@type": "Offer",
      "price": offer.price.replace('$', ''),
      "priceCurrency": offer.priceCurrency || "USD",
      "availability": offer.availability || "https://schema.org/InStock",
      "url": offer.url,
      "seller": {
        "@type": "Organization",
        "name": offer.seller || "Amazon"
      },
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    })),
    "lowPrice": Math.min(...offersArray.map(o => parseFloat(o.price.replace('$', '')))).toString(),
    "highPrice": Math.max(...offersArray.map(o => parseFloat(o.price.replace('$', '')))).toString(),
    "priceCurrency": "USD"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "category": category,
    "image": images,
    "url": url,
    "brand": brand ? {
      "@type": "Brand",
      "name": brand
    } : undefined,
    "sku": sku || undefined,
    "gtin": gtin || undefined,
    "mpn": mpn || undefined,
    "keywords": keywords.join(", ") || undefined,
    ...(additionalProperties.length > 0 ? {
      "additionalProperty": additionalProperties
    } : {}),
    "aggregateRating": aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 10,
      "worstRating": aggregateRating.worstRating || 0
    } : undefined,
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": review.author,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.png`
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "url": siteUrl
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
      "name": `${name} Review - ${siteName}`,
      "url": url,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": review.bestRating || 10,
        "worstRating": review.worstRating || 0
      }
    },
    "offers": offersSchema,
    "featureList": features.length > 0 ? features : undefined,
    "isRelatedTo": {
      "@type": "Product",
      "name": "Purrify Probiotic Deodorizer",
      "description": "Probiotic litter enhancer that extends litter life and eliminates odor",
      "url": "https://www.purrify.ca?via=reviewcatlitter"
    }
  };

  // Remove undefined values
  const cleanSchema = JSON.parse(JSON.stringify(schema));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
    />
  );
}

/**
 * Article Schema for Review Pages
 * Optimized for Article rich snippets
 */
export interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string | string[];
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  keywords?: string[];
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
  keywords = [],
}: ArticleSchemaProps) {
  const siteName = "ReviewCatLitter.com";
  const siteUrl = "https://www.reviewcatlitter.com";
  const images = Array.isArray(image) ? image : [image];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": images,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": keywords.join(", "),
    "articleSection": "Product Reviews",
    "inLanguage": "en-CA"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Breadcrumb Schema Component
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
