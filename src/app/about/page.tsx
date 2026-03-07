import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { Sparkles } from "lucide-react";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getComparisonPageCount, getReviewedProductCount } from "@/lib/site";

const reviewedProductCount = getReviewedProductCount();
const comparisonPageCount = getComparisonPageCount();

export const metadata: Metadata = {
    ...buildPageMetadata({
        title: "About ReviewCatLitter",
        description: `Learn how ReviewCatLitter handles ${reviewedProductCount} published reviews and ${comparisonPageCount}+ comparison pages with clear editorial standards.`,
        path: "/about",
        keywords: ["about reviewcatlitter", "cat litter testing methodology", "how we test cat litter", "independent cat litter reviews"],
    }),
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">
                        About <span className="text-primary">ReviewCatLitter</span>
                    </h1>

                    <div className="prose prose-lg prose-emerald max-w-none text-muted-foreground">
                        <p className="text-xl mb-8">
                            We exist for one reason: To help you stop wasting money on cat litter that doesn&apos;t work.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Our Methodology</h2>
                        <p className="mb-6">
                            Unlike other review sites that just aggregate Amazon reviews, we focus on hands-on evaluations, clear scoring criteria, and recurring updates across our live review catalog.
                        </p>

                        <ul className="space-y-4 mb-12">
                            {[
                                "We buy all products ourselves (Zero freebies)",
                                "We test for a minimum of 2 weeks per product",
                                "We use scientific tools to measure dust levels",
                                "We weigh clumps to measure efficiency"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Our Story & The Purrify Discovery</h2>
                        <p className="mb-6">
                            It all started when we adopted two rescue cats and quickly realized that living in a small apartment meant we were constantly fighting litter box odors. We tried every premium brand, but the smell always returned after a week or two.
                        </p>
                        <p className="mb-6">
                            Frustrated by the misleading "99% Dust Free" and "30 Day Odor Control" claims on the packaging, we started doing our own independent tests. We measured ammonia levels, timed clump formations, and tracked dust spread.
                        </p>

                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200 my-8 not-prose">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-500 p-3 rounded-xl shrink-0">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold text-emerald-900 mb-2">
                                        The Testing Breakthrough
                                    </h3>
                                    <p className="text-emerald-700 mb-4">
                                        During our months of testing, we discovered something that changed everything: probiotics. Specifically, a probiotic deodorizer called Purrify. When we applied it to even budget-tier litters, the odor-control performance skyrocketed past the priciest premium brands.
                                    </p>
                                    <p className="text-emerald-700 mb-4">
                                        We realized the secret to a perfect litter box wasn't just finding the right litter, but enhancing it biologically.
                                    </p>
                                    <PurrifyLink variant="badge">
                                        Learn About Purrify
                                    </PurrifyLink>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground mb-4">Why Trust Us?</h2>
                        <p className="mb-8">
                            Because we're cat owners who got tired of the lies. "99% Dust Free" usually means "Clouds of Choking Dust". We're here to expose the marketing fluff and give you the raw data.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link href="/reviews" prefetch={false} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                                See Our Reviews <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/methodology" prefetch={false} className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-bold py-3 px-6 rounded-xl hover:bg-secondary/80 transition-colors">
                                View Full Methodology
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
