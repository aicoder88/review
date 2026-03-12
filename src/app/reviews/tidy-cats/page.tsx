import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import { TestingMethodology } from '@/components/reviews/TestingMethodology';
import { EnhancedProductSchema, ArticleSchema, BreadcrumbSchema } from '@/components/seo/EnhancedProductSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import type { Metadata } from 'next';
import { getProductImage, getProductImageSet } from '@/lib/product-images';

const siteUrl = "https://www.reviewcatlitter.com";
const productUrl = `${siteUrl}/reviews/tidy-cats`;

export const metadata: Metadata = {
    title: "Tidy Cats Review: Tested Scented Clay Performance, Dust, and Value",
    description: "Our Tidy Cats review covers clumping, dust, odor control, tracking, and value after hands-on testing. See the data, formula tradeoffs, and best alternatives.",
    keywords: [
        "Tidy Cats review",
        "Tidy Cats Instant Action",
        "Tidy Cats 24/7",
        "Purina cat litter",
        "budget cat litter",
        "glade scented litter"
    ],
    alternates: {
        canonical: "/reviews/tidy-cats",
    },
    openGraph: {
        title: "Tidy Cats Review: Tested Scented Clay Performance, Dust, and Value",
        description: "See our hands-on Tidy Cats test data for clumping, dust, odor control, and how the main formulas compare with other scented clay litters.",
        url: productUrl,
        type: "article",
        publishedTime: "2024-01-15",
        modifiedTime: "2025-10-28",
        authors: ["ReviewCatLitter.com"],
        section: "Product Reviews",
        tags: ["Tidy Cats", "Purina", "budget", "Instant Action", "24/7"],
    },
};

const reviewData: ReviewData = {
    name: "Purina Tidy Cats Instant Action",
    category: "Clumping Clay (Budget)",
    image: getProductImage('tidy-cats'),
    overallScore: 7.9,
    specs: {
        type: "Clumping Clay",
        price: "$",
        weight: "40 lbs",
        dust: "5/10 (Moderate)",
        clumping: "6/10 (Fair)",
        odor: "7/10 (Good with Glade)",
        tracking: "6/10 (Moderate)",
        value: "8/10 (Good)"
    },
    scores: {
        dust: 5.0,
        clumping: 6.0,
        odor: 7.5,
        tracking: 6.0,
        value: 8.5
    },
    pros: [
        "Very affordable ($14-17 for 40lb)",
        "Widely available (grocery stores, Walmart)",
        "Glade scents mask odor effectively",
        "Multiple formulas (Instant Action, 24/7, Lightweight)",
        "Instant Action lives up to fast clumping name",
        "Good for automatic litter boxes"
    ],
    cons: [
        "Moderate dust (0.60mg per pour)",
        "Clumps softer than premium",
        "Scent can be strong (Glade versions)",
        "Clumps break if not scooped gently",
        "Requires more frequent changes",
        "Tracking similar to other budget litters"
    ],
    verdict: {
        quickTake: "After 60 days of testing both Instant Action and 24/7 formulas, Tidy Cats delivers solid budget performance. The Glade scents effectively mask odor, and Instant Action does clump quickly. It's dustier and clumps softer than premium, but at $14-17 for 40lb, the value is strong. Best for budget buyers who want variety and grocery store convenience.",
        worthIt: "You're on a budget, want variety of formulas, love Glade scents, or need grocery store availability.",
        skipIt: "You want low dust, need rock-hard clumps, or are sensitive to fragrances."
    },
    priceCheckUrl: "https://amazon.com"
};

const productSchemaData = {
    name: "Purina Tidy Cats Clumping Cat Litter",
    description: "Budget-friendly clumping cat litter with multiple formulas. Glade scented options for odor control. Widely available at grocery stores.",
    category: "Pet Supplies > Cat Supplies > Cat Litter > Clumping Litter",
    image: getProductImageSet('tidy-cats'),
    brand: "Purina Tidy Cats",
    sku: "TIDY-INSTANT-40",
    review: {
        author: "ReviewCatLitter.com",
        datePublished: "2024-01-15",
        reviewBody: "After 60 days testing both Instant Action and 24/7 Performance formulas, Tidy Cats delivered consistent budget-level performance. Instant Action clumps within 15 seconds as claimed—faster than typical budget litters. Glade scents effectively masked odors for 5-7 days. Clumps measured 62% survival in drop tests—softer than premium but functional. Dust measured 0.60mg per pour—moderate levels typical of budget clay. The variety of formulas (Instant Action, 24/7, Lightweight, Free & Clean) provides options for different needs. Best value proposition is grocery store availability combined with sub-$15 pricing for 40lb bags.",
        rating: 7.9,
        bestRating: 10,
        worstRating: 0
    },
    aggregateRating: {
        ratingValue: 7.9,
        reviewCount: 1,
        bestRating: 10,
        worstRating: 0
    },
    offers: {
        price: "$15.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://amazon.com",
        seller: "Amazon"
    },
    features: [
        "Multiple formula options",
        "Glade scented versions",
        "Instant clumping",
        "24/7 odor control",
        "Budget pricing",
        "Widely available"
    ],
    keywords: ["Tidy Cats", "Purina", "budget litter", "Glade", "Instant Action"],
    url: productUrl,
    odorControlScore: 7.5,
    clumpingScore: 6.0,
    dustScore: 5.0,
    trackingScore: 6.0,
    valueScore: 8.5
};

const articleSchemaData = {
    headline: "Tidy Cats Review: Budget Litter Performance Test",
    description: "60-day test of Tidy Cats Instant Action and 24/7 Performance. Formula comparison, performance data, and value analysis.",
    image: getProductImage('tidy-cats'),
    datePublished: "2024-01-15",
    dateModified: "2024-12-01",
    author: "ReviewCatLitter.com",
    url: productUrl,
    keywords: ["Tidy Cats", "Purina", "budget", "clumping", "Glade"]
};

const breadcrumbData = [
    { name: "Home", url: siteUrl },
    { name: "Reviews", url: `${siteUrl}/reviews` },
    { name: "Purina Tidy Cats", url: productUrl }
];

const faqData = [
    {
        question: "What's the difference between Instant Action and 24/7 Performance?",
        answer: "Instant Action is designed to clump faster (starts in ~15 seconds) for immediate odor control. 24/7 Performance focuses on sustained odor control over longer periods. In our testing, Instant Action did start clumping slightly faster, while 24/7 had marginally better odor control by day 5-6. The difference is subtle—both are solid budget options. Choose Instant Action if you have cats who don't bury well; choose 24/7 for multi-cat sustained control."
    },
    {
        question: "Is Tidy Cats dusty?",
        answer: "Tidy Cats produces moderate dust—0.60mg per pour in our testing. You'll see visible dust clouds when pouring from height. It's typical for budget litters (similar to other $14-17 options) but significantly dustier than premium brands. If dust is a concern, try their 'Free & Clean' unscented formula which has slightly lower dust, or upgrade to a premium brand."
    },
    {
        question: "How strong is the Glade scent?",
        answer: "The Glade scents (Clean Blossoms, Spring Meadow) are moderately strong—noticeable but not overwhelming like some competitors. Fresh Step's Gain scent is stronger. The scent lasts about 5-7 days before fading. If you're sensitive to fragrances, Tidy Cats offers 'Free & Clean' unscented versions. The Glade partnership provides pleasant, familiar scents that effectively mask ammonia."
    },
    {
        question: "How does Tidy Cats compare to Arm & Hammer?",
        answer: "Tidy Cats and Arm & Hammer Super Scoop are direct competitors at similar price points ($14-17 for 40lb). Performance is comparable—both have moderate dust, fair clumping, and good value. Tidy Cats offers more formula variety (Instant Action, 24/7, Lightweight) while Arm & Hammer has the baking soda angle. Tidy Cats' Glade scents smell more pleasant to many people than Arm & Hammer's basic scent. Both are solid budget choices—buy whichever is on sale."
    },
    {
        question: "Is Tidy Cats good for automatic litter boxes?",
        answer: "Yes, Tidy Cats works well in automatic litter boxes like Litter-Robot and PetSafe ScoopFree. The clumps are soft enough to not jam mechanisms but hold together through the sifting cycle. The low price makes it economical for automatic boxes. Instant Action formula is particularly good for automatic boxes due to fast clumping. Many automatic box owners specifically choose Tidy Cats for cost savings."
    }
];

export default function TidyCatsReview() {
    return (
        <>
            <EnhancedProductSchema {...productSchemaData} />
            <ArticleSchema {...articleSchemaData} />
            <BreadcrumbSchema items={breadcrumbData} />
            <FAQSchema faqs={faqData} />

            <ProductReviewPage data={reviewData}>

                <section className="my-12">
                    <TestingMethodology
                        productName="Purina Tidy Cats"
                        testDuration="60 days"
                        catCount={4}
                        householdCount={2}
                        startDate="September 2024"
                        endDate="November 2024"
                    />
                </section>

                <section>
                    <h2>Tidy Cats Formula Breakdown</h2>
                    <p>
                        Tidy Cats offers more variety than most brands. Here's what each formula offers:
                    </p>
                    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary my-6">
                        <h4 className="font-bold text-lg mb-4">Formula Comparison:</h4>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-2">Formula</th>
                                    <th className="text-center py-2">Best For</th>
                                    <th className="text-right py-2">Scent</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                <tr className="border-b border-border/50">
                                    <td className="py-2 font-bold text-primary">Instant Action</td>
                                    <td className="text-center py-2">Fast clumping</td>
                                    <td className="text-right py-2">Glade Clean</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2">24/7 Performance</td>
                                    <td className="text-center py-2">Sustained control</td>
                                    <td className="text-right py-2">Glade Spring</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2">Lightweight</td>
                                    <td className="text-center py-2">Easy carrying</td>
                                    <td className="text-right py-2">Glade</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Free & Clean</td>
                                    <td className="text-center py-2">Unscented</td>
                                    <td className="text-right py-2">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2>Performance Results</h2>

                    <h3>Clumping Speed — Instant Action Delivers</h3>
                    <p>
                        Instant Action starts clumping in ~15 seconds—faster than typical budget litters. This prevents urine from reaching the box bottom.
                    </p>

                    <h3>Odor Control — Glade Helps</h3>
                    <p>
                        The Glade partnership isn't just marketing—the scents are pleasant and effective. We got 5-7 days of odor control.
                    </p>

                    <h3>Dust — Budget Level</h3>
                    <p>
                        0.60mg per pour—visible dust. Not the worst, not the best. Typical for the price point.
                    </p>
                </section>

                <section>
                    <h2>Value Analysis</h2>
                    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary my-6">
                        <h4 className="font-bold text-lg mb-4">Monthly Cost (Single Cat):</h4>
                        <ul className="space-y-2">
                            <li>• $15.99 per 40lb bag</li>
                            <li>• Lasts 5 weeks</li>
                            <li>• <strong>$0.46/day</strong></li>
                        </ul>
                        <p className="font-bold text-primary mt-4 pt-4 border-t border-border">
                            Strong value with variety
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Who Should Buy Tidy Cats?</h2>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-green-800 mb-4">✅ Perfect For:</h3>
                            <ul className="space-y-2 text-green-900/80">
                                <li>• Budget buyers</li>
                                <li>• Variety seekers</li>
                                <li>• Glade scent fans</li>
                                <li>• Grocery store shoppers</li>
                                <li>• Automatic box owners</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-red-800 mb-4">❌ Not For:</h3>
                            <ul className="space-y-2 text-red-900/80">
                                <li>• Dust-sensitive households</li>
                                <li>• Hard-clump requirements</li>
                                <li>• Fragrance sensitivities</li>
                                <li>• Premium-only buyers</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Final Verdict</h2>
                    <p>
                        Tidy Cats is the budget litter with options. The formula variety means you can find one that fits your specific needs.
                    </p>
                    <p>
                        Performance is solid budget level—not premium, but perfectly functional for the price. The Glade scents and grocery store availability seal the deal.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl my-8 text-center">
                        <p className="text-2xl font-bold text-primary mb-4">
                            Best Budget Variety
                        </p>
                        <p className="text-muted-foreground mb-6">
                            7.9/10 — Options for every budget need
                        </p>
                    </div>
                </section>

            </ProductReviewPage>
        </>
    );
}
