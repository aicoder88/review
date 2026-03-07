import { Metadata } from "next";
import { ComparePageClient } from "./ComparePageClient";
import { getComparisonPageCount, siteUrl } from "@/lib/site";

const comparisonPageCount = getComparisonPageCount();

export const metadata: Metadata = {
  title: "Compare Cat Litters Side-by-Side | ReviewCatLitter",
  description: `Compare cat litters head-to-head with real test data. Browse ${comparisonPageCount}+ permanent comparison pages plus the interactive comparison tool.`,
  keywords: ["compare cat litter", "cat litter comparison", "best cat litter comparison", "litter side by side"],
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Compare Cat Litters Side-by-Side | ReviewCatLitter",
    description: `Compare cat litters head-to-head with real test data across ${comparisonPageCount}+ permanent matchup pages.`,
    url: `${siteUrl}/compare`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-compare.jpg`,
        width: 1200,
        height: 630,
        alt: "Compare Cat Litters Side-by-Side Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Cat Litters Side-by-Side | ReviewCatLitter",
    description: `Compare cat litters head-to-head with real test data across ${comparisonPageCount}+ permanent matchup pages.`,
    images: [`${siteUrl}/images/og-compare.jpg`],
  },
};

export default function ComparePage() {
  return <ComparePageClient />;
}
