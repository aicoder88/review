import { Header } from '@/components/home/Header';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { SearchIntentHub } from '@/components/home/SearchIntentHub';
import { FeaturedWinners } from '@/components/home/FeaturedWinners';
import { BudgetHackBanner } from '@/components/home/BudgetHackBanner';
import { Methodology } from '@/components/home/Methodology';
import { ValueEquation } from '@/components/home/ValueEquation';
import { LatestReviews } from '@/components/home/LatestReviews';
import { CategoryNavigation } from '@/components/home/CategoryNavigation';
import { Newsletter } from '@/components/home/Newsletter';
import { Footer } from '@/components/home/Footer';
import { WebPageSchemas } from '@/components/seo/PageSchemas';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/page-metadata';
import { getComparisonPageCount, getReviewedProductCount, siteUrl } from '@/lib/site';

const reviewedProductCount = getReviewedProductCount();
const comparisonPageCount = getComparisonPageCount();

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Best Cat Litter Reviews and Comparisons',
    description: `Best cat litter reviews, category roundups, and ${comparisonPageCount}+ side-by-side comparisons covering odor control, low dust, clumping, natural litter, and budget picks across ${reviewedProductCount} published review pages.`,
    path: '/',
    keywords: [
      'cat litter reviews',
      'best cat litter',
      'cat litter comparison',
      'top rated cat litter',
      'odor control cat litter',
      'clumping cat litter reviews',
      'low dust cat litter',
      'natural cat litter reviews',
    ],
  }),
};

export default function Page() {
  const breadcrumbItems = [{ name: 'Home', url: siteUrl }];

  return (
    <div className="min-h-screen">
      <WebPageSchemas
        title="Best Cat Litter Reviews and Comparisons"
        description={`Best cat litter reviews, category roundups, and ${comparisonPageCount}+ side-by-side comparisons covering odor control, low dust, clumping, natural litter, and budget picks across ${reviewedProductCount} published review pages.`}
        path="/"
        breadcrumbs={breadcrumbItems}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <SearchIntentHub />
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
