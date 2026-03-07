import { Metadata } from "next";
import { ComparePageClient } from "./ComparePageClient";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
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
    title: 'Compare Cat Litters Side-by-Side',
    description: `Compare cat litters head-to-head with real test data. Browse ${comparisonPageCount}+ permanent comparison pages plus the interactive comparison tool.`,
    path: '/compare',
    keywords: ['compare cat litter', 'cat litter comparison', 'best cat litter comparison', 'litter side by side'],
  }),
};

export default function ComparePage() {
  return (
    <>
      <ItemListSchema
        name="ReviewCatLitter compare hub"
        url={`${siteUrl}/compare`}
        items={comparisonSchemaItems}
      />
      <ComparePageClient />
    </>
  );
}
