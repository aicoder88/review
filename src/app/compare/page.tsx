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
    title: 'Compare Cat Litters Side by Side: Dust, Odor, Cost, and Clumping',
    description: `Compare cat litters head to head with real test data across dust, clumping, odor control, tracking, and daily cost. Browse ${comparisonPageCount}+ permanent comparison pages plus the interactive comparison tool.`,
    path: '/compare',
    keywords: [
      'compare cat litter',
      'cat litter comparison',
      'best cat litter comparison',
      'litter side by side',
      'cat litter cost comparison',
      'dust free cat litter comparison',
      'odor control cat litter comparison',
    ],
    openGraphTitle: 'Compare Cat Litters Side by Side | Dust, Odor, Cost, and Clumping',
    openGraphDescription: `Browse ${comparisonPageCount}+ permanent cat litter comparison pages and compare the closest alternatives side by side.`,
    twitterTitle: 'Compare Cat Litters Side by Side | Dust, Odor, Cost, and Clumping',
    twitterDescription: `Browse ${comparisonPageCount}+ permanent cat litter comparison pages and compare the closest alternatives side by side.`,
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
