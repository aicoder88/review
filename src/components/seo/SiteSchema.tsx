import {
  editorialTeamName,
  homePageId,
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
  const homeUrl = toAbsoluteUrl('/');
  const reviewTeamUrl = toAbsoluteUrl(reviewTeamPath);
  const methodologyUrl = toAbsoluteUrl(methodologyPath);
  const logoUrl = toAbsoluteUrl(logoPath);

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
          url: logoUrl,
        },
        publishingPrinciples: methodologyUrl,
        subjectOf: [
          {
            '@type': 'AboutPage',
            '@id': reviewTeamUrl,
            url: reviewTeamUrl,
            name: editorialTeamName,
          },
          {
            '@type': 'WebPage',
            '@id': methodologyUrl,
            url: methodologyUrl,
            name: 'Our Testing Methodology',
          },
        ],
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
      {
        '@type': 'WebPage',
        '@id': homePageId,
        url: homeUrl,
        name: 'Cat Litter Reviews and Comparisons',
        description: siteDescription,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': organizationId,
        },
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'en-US',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: logoUrl,
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
