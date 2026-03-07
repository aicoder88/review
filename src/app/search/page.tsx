import type { Metadata } from "next";
import { SearchPageClient } from "./SearchPageClient";
import { getReviewedProductCount, siteUrl } from "@/lib/site";

const reviewedProductCount = getReviewedProductCount();

export const metadata: Metadata = {
  title: "Search Cat Litter Reviews | ReviewCatLitter",
  description: `Search ${reviewedProductCount} hands-on cat litter reviews by brand, type, or feature.`,
  keywords: ["search cat litter", "find cat litter reviews", "cat litter search", "best cat litter finder"],
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Search Cat Litter Reviews | ReviewCatLitter",
    description: `Search ${reviewedProductCount} hands-on cat litter reviews by brand, type, or feature.`,
    url: `${siteUrl}/search`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-search.jpg`,
        width: 1200,
        height: 630,
        alt: "Search Cat Litter Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Cat Litter Reviews | ReviewCatLitter",
    description: `Search ${reviewedProductCount} hands-on cat litter reviews by brand, type, or feature.`,
    images: [`${siteUrl}/images/og-search.jpg`],
  },
};

export default function SearchPage() {
  return <SearchPageClient />;
}
