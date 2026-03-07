import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Beaker, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";
import { WebPageSchemas } from "@/components/seo/PageSchemas";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getLatestReviewedDate, methodologyPath, organizationId, getReviewedProductCount, siteName, siteUrl } from "@/lib/site";

const reviewedProductCount = getReviewedProductCount();

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Our Testing Methodology",
    description: `Learn how we score dust, clumping, odor, tracking, and value across ${reviewedProductCount} published cat litter reviews.`,
    path: "/methodology",
    keywords: ["cat litter testing methodology", "how we review cat litter", "litter review process", "cat litter scoring rubric", "independent cat litter reviews"],
  }),
};

export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-background">
            <WebPageSchemas
                title="Our Testing Methodology"
                description={`Learn how we score dust, clumping, odor, tracking, and value across ${reviewedProductCount} published cat litter reviews.`}
                path={methodologyPath}
                pageType="AboutPage"
                dateModified={getLatestReviewedDate()}
                breadcrumbs={[
                    { name: "Home", url: siteUrl },
                    { name: "Methodology", url: `${siteUrl}${methodologyPath}` },
                ]}
                mainEntity={{
                    "@type": "Organization",
                    "@id": organizationId,
                    name: siteName,
                    url: siteUrl,
                }}
            />
            <Header />
            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
                        Our <span className="text-primary">Testing Methodology</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        How we evaluate the published review catalog to find the products that actually work.
                    </p>

                    <div className="prose prose-lg prose-emerald max-w-none text-muted-foreground">
                        
                        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                            <Beaker className="w-6 h-6 text-primary" />
                            Review Framework
                        </h2>
                        <p className="mb-6">
                            ReviewCatLitter keeps the catalog comparable by using the same scoring framework across
                            published product pages. Each review and roundup is built around the same core questions:
                            how a litter handles dust, clumping, odor control, tracking, and day-to-day value.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                                <Clock className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold text-foreground mb-2">{reviewedProductCount} Reviews</h3>
                                <p className="text-sm text-muted-foreground">Current product pages scored on the same framework</p>
                            </div>
                            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                                <DollarSign className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold text-foreground mb-2">5 Core Metrics</h3>
                                <p className="text-sm text-muted-foreground">Dust, clumping, odor, tracking, and value on every review</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground mb-4">What We Test</h2>
                        <ul className="space-y-4 mb-12">
                            {[
                                "Dust control during pours, top-offs, and scooping",
                                "Clumping performance and cleanup consistency",
                                "Odor control in everyday litter-box use",
                                "Tracking and general mess around the box",
                                "Value relative to price, lifespan, and maintenance burden"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Our Standards</h2>
                        <ul className="space-y-4 mb-12">
                            {[
                                "Every published review uses the same five scoring categories",
                                "Category roundups link winners back to the relevant review pages",
                                "Comparison pages are built from the live product catalog, not generic brand copy",
                                "Editorial pages explain how affiliates and updates are handled",
                                "Recommendations can change when new review or comparison context changes the verdict"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Why Trust Us?</h2>
                        <p className="mb-8">
                            Because the site shows its work. Review pages publish scores and verdicts, category pages
                            explain why a product wins for a specific use case, and the editorial standards page
                            documents how updates and affiliate relationships are handled.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-12">
                            <Link href="/reviews" prefetch={false} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                                See Our Reviews <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/compare" prefetch={false} className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-bold py-3 px-6 rounded-xl hover:bg-secondary/80 transition-colors">
                                Compare Products
                            </Link>
                            <Link href="/about/review-team" prefetch={false} className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-bold py-3 px-6 rounded-xl hover:bg-secondary/80 transition-colors">
                                Editorial Standards
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
