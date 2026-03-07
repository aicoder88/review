import { Header } from '@/components/home/Header';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { FeaturedWinners } from '@/components/home/FeaturedWinners';
import { BudgetHackBanner } from '@/components/home/BudgetHackBanner';
import { Methodology } from '@/components/home/Methodology';
import { ValueEquation } from '@/components/home/ValueEquation';
import { LatestReviews } from '@/components/home/LatestReviews';
import { CategoryNavigation } from '@/components/home/CategoryNavigation';
import { Newsletter } from '@/components/home/Newsletter';
import { Footer } from '@/components/home/Footer';
import type { Metadata } from 'next';
import { getComparisonPageCount, getReviewedProductCount, siteUrl } from '@/lib/site';

const reviewedProductCount = getReviewedProductCount();
const comparisonPageCount = getComparisonPageCount();

export const metadata: Metadata = {
  title: "Cat Litter Reviews 2025 | Best Rated & Tested | ReviewCatLitter.com",
  description: `Expert cat litter reviews and ${comparisonPageCount}+ side-by-side comparisons built from ${reviewedProductCount} live hands-on review pages.`,
  keywords: ["cat litter reviews", "best cat litter 2025", "cat litter comparison", "top rated cat litter", "odor control cat litter", "clumping cat litter reviews"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cat Litter Reviews 2025 | Best Rated & Tested | ReviewCatLitter.com",
    description: `Expert cat litter reviews and ${comparisonPageCount}+ side-by-side comparisons built from ${reviewedProductCount} live hands-on review pages.`,
    url: siteUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "ReviewCatLitter.com - Expert Cat Litter Reviews and Testing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Litter Reviews 2025 | Best Rated & Tested",
    description: `Expert cat litter reviews and ${comparisonPageCount}+ side-by-side comparisons built from ${reviewedProductCount} live hands-on review pages.`,
    images: [`${siteUrl}/images/og-home.jpg`],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedWinners />
        <BudgetHackBanner />
        <Methodology />
        <ValueEquation />
        <LatestReviews />
        <CategoryNavigation />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
