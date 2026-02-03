import type { Metadata } from "next";
import { SearchPageClient } from "./SearchPageClient";

const siteUrl = "https://www.reviewcatlitter.com";

export const metadata: Metadata = {
  title: "Search Cat Litter Reviews | 500+ Products | ReviewCatLitter",
  description: "Search our database of 500+ cat litter reviews. Find reviews by brand, type, or feature. Compare clay, crystal, natural and clumping litters.",
  keywords: ["search cat litter", "find cat litter reviews", "cat litter search", "best cat litter finder"],
  alternates: {
    canonical: "/search",
    languages: {
      "en-CA": "/search",
      "fr-CA": "/search",
      "en": "/search",
    },
  },
  openGraph: {
    title: "Search Cat Litter Reviews | 500+ Products",
    description: "Search our database of 500+ cat litter reviews. Find reviews by brand, type, or feature.",
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
    title: "Search Cat Litter Reviews | 500+ Products",
    description: "Search our database of 500+ cat litter reviews. Find reviews by brand, type, or feature.",
    images: [`${siteUrl}/images/og-search.jpg`],
  },
};

export default function SearchPage() {
  return <SearchPageClient />;
}
