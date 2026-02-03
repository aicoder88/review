import { Metadata } from "next";
import { ComparePageClient } from "./ComparePageClient";

const siteUrl = "https://www.reviewcatlitter.com";

export const metadata: Metadata = {
  title: "Compare Cat Litters Side-by-Side | 500+ Brands | ReviewCatLitter",
  description: "Compare cat litters head-to-head with real test data. See dust levels, clumping strength, odor control & cost per day. Find the best litter for your needs.",
  keywords: ["compare cat litter", "cat litter comparison", "best cat litter comparison", "litter side by side"],
  alternates: {
    canonical: "/compare",
    languages: {
      "en-CA": "/compare",
      "fr-CA": "/compare",
      "en": "/compare",
    },
  },
  openGraph: {
    title: "Compare Cat Litters Side-by-Side | 500+ Brands",
    description: "Compare cat litters head-to-head with real test data. See dust levels, clumping strength, odor control & cost per day.",
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
    title: "Compare Cat Litters Side-by-Side | 500+ Brands",
    description: "Compare cat litters head-to-head with real test data. Find the best litter for your needs.",
    images: [`${siteUrl}/images/og-compare.jpg`],
  },
};

export default function ComparePage() {
  return <ComparePageClient />;
}
