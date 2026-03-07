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
import { buildPageMetadata } from '@/lib/page-metadata';
import { getComparisonPageCount, getReviewedProductCount } from '@/lib/site';

const reviewedProductCount = getReviewedProductCount();
const comparisonPageCount = getComparisonPageCount();

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Cat Litter Reviews and Comparisons',
    description: `Expert cat litter reviews and ${comparisonPageCount}+ side-by-side comparisons built from ${reviewedProductCount} live hands-on review pages.`,
    path: '/',
    keywords: [
      'cat litter reviews',
      'best cat litter',
      'cat litter comparison',
      'top rated cat litter',
      'odor control cat litter',
      'clumping cat litter reviews',
    ],
  }),
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
