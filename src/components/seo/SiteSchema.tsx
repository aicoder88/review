import {
  logoPath,
  methodologyPath,
  organizationId,
  reviewTeamPath,
  siteDescription,
  siteName,
  siteUrl,
  toAbsoluteUrl,
  websiteId,
} from '@/lib/site';

export function SiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        logo: {
          '@type': 'ImageObject',
          url: toAbsoluteUrl(logoPath),
        },
        publishingPrinciples: toAbsoluteUrl(methodologyPath),
        sameAs: [toAbsoluteUrl(reviewTeamPath)],
        knowsAbout: [
          'cat litter reviews',
          'odor control testing',
          'dust measurement',
          'clumping performance',
          'product comparisons',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
