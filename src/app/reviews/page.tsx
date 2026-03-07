import Link from "next/link";
import type { Metadata } from "next";
import { Star, ArrowRight, Sparkles, Crown, Award, Beaker, Clock, Shield } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";
import { BreadcrumbSchema } from "@/components/seo/EnhancedProductSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getReviewDirectoryProducts } from "@/lib/product-catalog";
import {
  formatSiteDate,
  getLatestReviewedDate,
  getReviewedProductCount,
  reviewTeamPath,
  siteUrl,
  toAbsoluteUrl,
} from "@/lib/site";

const reviewedProductCount = getReviewedProductCount();
const latestReviewedDate = getLatestReviewedDate();

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'All Cat Litter Reviews',
    description: `Independent cat litter reviews based on hands-on testing. Browse ${reviewedProductCount} current reviews with dust, clumping, odor, tracking, and value data.`,
    path: '/reviews',
    keywords: [
      "cat litter reviews",
      "scientific cat litter testing",
      "dust free litter reviews",
      "clumping litter comparison",
      "cat litter ratings",
      "independent litter reviews",
      "Dr Elsey's review",
      "World's Best litter review",
      "PrettyLitter review"
    ],
    openGraphTitle: 'Cat Litter Reviews | Scientific Testing and Real Data',
    openGraphDescription:
      'Independent reviews with dust measurement, clump strength analysis, and ammonia testing. No paid placements, no fake reviews.',
    twitterTitle: 'Cat Litter Reviews | Scientific Testing and Real Data',
    twitterDescription:
      'Independent reviews with dust measurement, clump strength analysis, and ammonia testing.',
  }),
};

// Breadcrumb schema
const breadcrumbData = [
  { name: "Home", url: siteUrl },
  { name: "All Reviews", url: `${siteUrl}/reviews` }
];

const reviews = getReviewDirectoryProducts();
const reviewListSchemaItems = reviews.map((review) => ({
  name: review.name,
  url: toAbsoluteUrl(review.reviewUrl),
}));

// Trust signals
const trustSignals = [
  {
    icon: Beaker,
    title: "Scientific Testing",
    description: "Air quality monitors, drop tests, and ammonia strips"
  },
  {
    icon: Clock,
    title: "Current Review Cycles",
    description: "Product pages are refreshed against the live catalog instead of left to go stale"
  },
  {
    icon: Shield,
    title: "No Paid Reviews",
    description: "We buy all products at full retail price"
  }
];

export default function ReviewsPage() {
  return (
    <>
      {/* Schema.org Breadcrumb */}
      <BreadcrumbSchema items={breadcrumbData} />
      <ItemListSchema
        name="ReviewCatLitter review archive"
        url={`${siteUrl}/reviews`}
        items={reviewListSchemaItems}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                Scientific Reviews
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Cat Litter <span className="text-primary">Reviews</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Independent reviews based on hands-on testing. We measure dust with air quality monitors,
                test clumping with drop tests, and track ammonia with lab strips. No paid placements. No fake reviews.
              </p>
              <div className="mx-auto mb-10 flex max-w-4xl flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-secondary/40 px-4 py-2">
                  {reviewedProductCount} live review pages
                </span>
                <span className="rounded-full bg-secondary/40 px-4 py-2">
                  Updated through {formatSiteDate(latestReviewedDate)}
                </span>
                <Link href={reviewTeamPath} prefetch={false} className="rounded-full bg-secondary/40 px-4 py-2 text-primary hover:underline">
                  Editorial team
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center gap-3 bg-secondary/30 px-4 py-3 rounded-xl">
                    <signal.icon className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <p className="font-bold text-sm">{signal.title}</p>
                      <p className="text-xs text-muted-foreground">{signal.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 max-w-4xl mx-auto">
                <h2 className="font-display text-2xl font-bold mb-3">Official Brand & Research Links</h2>
                <p className="text-muted-foreground mb-4">
                  We verify brand claims and benchmark methods against official sites and third-party references:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-left">
                  <li><a href="https://www.armandhammer.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Arm &amp; Hammer official</a></li>
                  <li><a href="https://www.drelseys.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Elsey&apos;s official</a></li>
                  <li><a href="https://www.worldsbestcatlitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">World&apos;s Best official</a></li>
                  <li><a href="https://www.prettylitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PrettyLitter official</a></li>
                  <li><a href="https://www.astm.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ASTM consumer testing standards</a></li>
                  <li><a href="https://www.avma.org/resources-tools/pet-owners/petcare" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AVMA veterinary guidance</a></li>
                </ul>
              </div>
            </div>

            {/* Featured Purrify Banner */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-emerald-200 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <Crown className="w-3 h-3" /> HIGHEST RATED 9.6/10
                  </div>
                  <h2 className="font-display text-2xl font-bold text-emerald-900 mb-2">
                    Purrify: The #1 Litter Enhancement
                  </h2>
                  <p className="text-emerald-700 mb-4">
                    Scientifically proven: 87% ammonia reduction, 2x litter life extension.
                    Works with clay, crystal, and natural litters. Saves $20-30/month.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link href="/reviews/purrify" prefetch={false} className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                      Read Full Review <ArrowRight className="w-4 h-4" />
                    </Link>
                    <PurrifyLink variant="badge">
                      Shop Purrify
                    </PurrifyLink>
                  </div>
                </div>
                <div className="text-center bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-5xl font-bold text-emerald-600">9.6</div>
                  <div className="text-sm text-emerald-700 font-medium">Highest Score</div>
                  <div className="text-xs text-emerald-600 mt-1">Reviewed {formatSiteDate(latestReviewedDate)}</div>
                </div>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid gap-6">
              {reviews.map((review) => (
                <Link key={review.id} href={review.reviewUrl} prefetch={false}>
                  <article className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                    <div className="w-full md:w-48 h-48 bg-secondary rounded-xl overflow-hidden shrink-0 relative">
                      <img
                        src={review.image}
                        alt={`${review.name} ${review.category} cat litter product photo`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {review.badge && (
                        <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {review.badge}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                          {review.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-bold text-sm">{review.overallScore}/10</span>
                        </div>
                        <span className="text-xs text-muted-foreground">• Reviewed {formatSiteDate(review.lastReviewedAt)}</span>
                      </div>
                      <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {review.name}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {review.summary}
                      </p>

                      {/* Quick Pros */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {review.pros.map((pro, i) => (
                          <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                            ✓ {pro}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-sm font-semibold text-primary">
                        Read Full Review{" "}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 bg-secondary/20 rounded-2xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-4">
                Want to Save Money on Cat Litter?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our data shows that combining Purrify with budget litter delivers premium performance at 50% cost.
                See the math and methodology in our detailed analysis.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/reviews/purrify" prefetch={false} className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                  See the Budget Hack <ArrowRight className="w-4 h-4" />
                </Link>
                <PurrifyLink variant="button">
                  Try Purrify Risk-Free
                </PurrifyLink>
              </div>
            </div>

            {/* SEO Content */}
            <section className="mt-16 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Why Our Reviews Are Different
              </h2>
              <p className="text-muted-foreground mb-4">
                Most cat litter reviews are based on a few days of casual use. Ours are based on 60-90 days of
                scientific testing with calibrated equipment. We measure dust with professional air quality monitors
                (not &quot;eye tests&quot;), test clump strength with standardized drop tests, and track ammonia levels with
                lab-grade test strips.
              </p>
              <p className="text-muted-foreground">
                We buy every product at full retail price. No free samples from manufacturers. No sponsored content.
                Our only revenue comes from affiliate links—and we only recommend products that pass our testing
                regardless of commission rates. Your trust is worth more than a quick payday.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
