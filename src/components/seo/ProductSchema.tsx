interface ProductSchemaProps {
  name: string;
  category: string;
  image: string;
  rating: number;
  price: string;
  url: string;
}

export function ProductSchema({ name, category, image, rating, price, url }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "category": category,
    "image": image,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "bestRating": 10,
      "worstRating": 0,
      "ratingCount": 1
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rating,
        "bestRating": 10
      },
      "author": {
        "@type": "Organization",
        "name": "ReviewCatLitter.com"
      }
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "USD",
      "price": price.replace('$', ''),
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
