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

const siteUrl = "https://www.reviewcatlitter.com";

export const metadata: Metadata = {
  title: "Cat Litter Reviews 2025 | Best Rated & Tested | ReviewCatLitter.com",
  description: "Expert cat litter reviews based on $47K+ in lab testing. Compare 500+ brands on odor control, clumping, dust & value. Find the best cat litter for your cat.",
  keywords: ["cat litter reviews", "best cat litter 2025", "cat litter comparison", "top rated cat litter", "odor control cat litter", "clumping cat litter reviews"],
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
      "fr-CA": "/",
      "en": "/",
    },
  },
  openGraph: {
    title: "Cat Litter Reviews 2025 | Best Rated & Tested | ReviewCatLitter.com",
    description: "Expert cat litter reviews based on $47K+ in lab testing. Compare 500+ brands on odor control, clumping, dust & value.",
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
    description: "Expert cat litter reviews based on $47K+ in lab testing. Compare 500+ brands.",
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
