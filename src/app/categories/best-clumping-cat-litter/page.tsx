import type { Metadata } from "next";
import { BestClumpingClient } from "./BestClumpingClient";

const siteUrl = "https://www.reviewcatlitter.com";

export const metadata: Metadata = {
  title: "Best Clumping Cat Litter 2025 | Top 10 Tested & Reviewed",
  description: "We tested 87 clumping cat litters. See which ones actually clump properly without turning into dust. Expert reviews with dust, odor & clumping test data.",
  keywords: ["best clumping cat litter", "clumping cat litter reviews", "best clumping litter 2025", "cat litter that clumps well"],
  alternates: {
    canonical: "/categories/best-clumping-cat-litter",
    languages: {
      "en-CA": "/categories/best-clumping-cat-litter",
      "fr-CA": "/categories/best-clumping-cat-litter",
      "en": "/categories/best-clumping-cat-litter",
    },
  },
  openGraph: {
    title: "Best Clumping Cat Litter 2025 | Top 10 Tested & Reviewed",
    description: "We tested 87 clumping cat litters. See which ones actually clump properly without turning into dust.",
    url: `${siteUrl}/categories/best-clumping-cat-litter`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-clumping.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Clumping Cat Litter Reviews and Testing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Clumping Cat Litter 2025 | Top 10 Tested & Reviewed",
    description: "We tested 87 clumping cat litters. See which ones actually clump properly.",
    images: [`${siteUrl}/images/og-clumping.jpg`],
  },
};

export default function BestClumpingPage() {
    return <BestClumpingClient />;
}
