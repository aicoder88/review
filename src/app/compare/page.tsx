import { Metadata } from "next";
import { ComparePageClient } from "./ComparePageClient";
import { CollectionPageSchemas } from "@/components/seo/PageSchemas";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getAllComparisonMatchups, getComparisonMatchupHref } from "@/lib/product-catalog";
import { getComparisonPageCount, siteUrl } from "@/lib/site";

const comparisonPageCount = getComparisonPageCount();
const comparisonSchemaItems = getAllComparisonMatchups().map((matchup) => ({
  name: `${matchup.products[0].name} vs ${matchup.products[1].name}`,
  url: `${siteUrl}${getComparisonMatchupHref(matchup.slug)}`,
}));

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Compare Cat Litters Side by Side: Odor Control, Tracking, Cost, and Dust',
    description: `Compare cat litters head to head with real test data across odor control, tracking outside the litter box, daily cost, dust, and clumping. Browse ${comparisonPageCount}+ permanent comparison pages plus guides for odor-control methods and litter cost tradeoffs.`,
    path: '/compare',
    keywords: [
      'compare cat litter',
      'cat litter comparison',
      'best cat litter comparison',
      'litter side by side',
      'cat litter cost comparison',
      'low tracking cat litter comparison',
      'odor control cat litter comparison',
      'cat litter odor control methods',
    ],
    openGraphTitle: 'Compare Cat Litters Side by Side | Odor Control, Tracking, Cost, and Dust',
    openGraphDescription: `Browse ${comparisonPageCount}+ permanent cat litter comparison pages plus guides for odor-control methods, tracking, and real-world cost tradeoffs.`,
    twitterTitle: 'Compare Cat Litters Side by Side | Odor Control, Tracking, Cost, and Dust',
    twitterDescription: `Browse ${comparisonPageCount}+ permanent cat litter comparison pages plus guides for odor-control methods, tracking, and real-world cost tradeoffs.`,
  }),
};

export default function ComparePage() {
  const breadcrumbItems = [
    { name: 'Home', url: siteUrl },
    { name: 'Compare', url: `${siteUrl}/compare` },
  ];

  return (
    <>
      <CollectionPageSchemas
        name="ReviewCatLitter compare hub"
        path="/compare"
        breadcrumbs={breadcrumbItems}
        items={comparisonSchemaItems}
      />
      <ComparePageClient />
    </>
  );
}
