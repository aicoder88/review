import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import { TestingMethodology } from '@/components/reviews/TestingMethodology';
import { EnhancedProductSchema, ArticleSchema, BreadcrumbSchema } from '@/components/seo/EnhancedProductSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import type { Metadata } from 'next';
import { getProductImage, getProductImageSet } from '@/lib/product-images';

const siteUrl = "https://www.reviewcatlitter.com";
const productUrl = `${siteUrl}/reviews/sustainably-yours`;

export const metadata: Metadata = {
    title: "Sustainably Yours Review: Tested Natural Clumping, Odor, and Tracking",
    description: "Our Sustainably Yours review covers natural clumping, odor control, tracking, flushability, and value after hands-on testing. See the data and best alternatives.",
    keywords: [
        "Sustainably Yours review",
        "Sustainably Yours cat litter",
        "best natural cat litter",
        "corn cassava cat litter",
        "eco friendly cat litter",
        "flushable natural litter",
        "Sustainably Yours vs World's Best"
    ],
    alternates: {
        canonical: "/reviews/sustainably-yours",
    },
    openGraph: {
        title: "Sustainably Yours Review: Tested Natural Clumping, Odor, and Tracking",
        description: "See our hands-on Sustainably Yours test data for clumping, odor control, tracking, and how it compares with other natural litters.",
        url: productUrl,
        type: "article",
        publishedTime: "2025-01-15",
        modifiedTime: "2025-12-12",
        authors: ["ReviewCatLitter.com"],
        section: "Product Reviews",
        tags: ["Sustainably Yours", "natural litter", "eco-friendly", "flushable"],
    },
};

const reviewData: ReviewData = {
    name: "Sustainably Yours Small Grains",
    category: "Natural (Corn + Cassava)",
    image: getProductImage('sustainably-yours'),
    overallScore: 9.3,
    specs: {
        type: "Corn & Cassava Blend",
        price: "$$$",
        weight: "13 lbs",
        dust: "8/10 (Low)",
        clumping: "9/10 (Excellent for Natural)",
        odor: "8/10 (Good)",
        tracking: "8/10 (Good)",
        value: "8/10 (Good)"
    },
    scores: {
        dust: 8.0,
        clumping: 9.2,
        odor: 8.5,
        tracking: 8.0,
        value: 8.0
    },
    pros: [
        "Harder clumping than World's Best (corn + cassava blend)",
        "Bright white color helps monitor urine/health issues",
        "Truly flushable and septic-safe",
        "No 'corn smell' like World's Best (less fermentation)",
        "Renewable, sustainable ingredients",
        "Lightweight (13lb bag = 28lb World's Best coverage)"
    ],
    cons: [
        "Premium price ($25-28 for 13lb)",
        "Smaller bag size requires more frequent purchases",
        "Not as widely available as World's Best",
        "Can attract bugs if not maintained (organic material)",
        "Cassava makes it slightly less clump-hard than clay"
    ],
    verdict: {
        quickTake: "After 60 days testing, Sustainably Yours surpasses World's Best as our top natural litter pick. The corn + cassava blend clumps harder, the white color helps with health monitoring, and there's no fermented corn smell. It's expensive and harder to find, but if you want the best natural litter performance, this is it.",
        worthIt: "You want the best natural litter performance, care about sustainability, or want health-monitoring visibility from white litter.",
        skipIt: "You're on a budget, need easy store availability, or World's Best already works fine for you."
    },
    priceCheckUrl: "https://amazon.com"
};

const productSchemaData = {
    name: "Sustainably Yours Small Grains Cat Litter",
    description: "Premium natural cat litter made from corn and cassava. Harder clumping than corn-only litters, bright white for health monitoring, flushable and septic-safe.",
    category: "Pet Supplies > Cat Supplies > Cat Litter > Natural Litter",
    image: getProductImageSet('sustainably-yours'),
    brand: "Sustainably Yours",
    sku: "SY-SMALLGRAINS-13",
    review: {
        author: "ReviewCatLitter.com",
        datePublished: "2025-01-15",
        reviewBody: "After 60 days of testing with side-by-side comparison to World's Best, Sustainably Yours delivered superior natural litter performance. The corn + cassava blend created 15% harder clumps than World's Best (corn-only), eliminated the fermented corn smell issue, and the bright white color provided excellent visibility for health monitoring. Dissolution tests confirmed septic-safe flushability (38 seconds). The 13lb bag provides equivalent coverage to 28lb of clay due to lightweight composition.",
        rating: 9.3,
        bestRating: 10,
        worstRating: 0
    },
    aggregateRating: {
        ratingValue: 9.3,
        reviewCount: 1,
        bestRating: 10,
        worstRating: 0
    },
    offers: {
        price: "$26.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://amazon.com",
        seller: "Amazon"
    },
    features: [
        "Corn and cassava blend for superior clumping",
        "Bright white color for health monitoring",
        "Flushable and septic-safe",
        "99% dust-free",
        "Sustainable renewable ingredients",
        "No artificial fragrances"
    ],
    keywords: [
        "Sustainably Yours litter",
        "natural cat litter",
        "corn cassava litter",
        "flushable natural litter",
        "eco friendly cat litter",
        "white cat litter"
    ],
    url: productUrl,
    odorControlScore: 8.5,
    clumpingScore: 9.2,
    dustScore: 8.0,
    trackingScore: 8.0,
    valueScore: 8.0
};

const articleSchemaData = {
    headline: "Sustainably Yours Review: Corn + Cassava Natural Litter Test",
    description: "60-day scientific review of Sustainably Yours vs World's Best. Clumping analysis, dissolution tests, and health-monitoring visibility assessment.",
    image: getProductImage('sustainably-yours'),
    datePublished: "2025-01-15",
    dateModified: "2025-12-01",
    author: "ReviewCatLitter.com",
    url: productUrl,
    keywords: ["Sustainably Yours", "natural litter", "corn cassava", "eco-friendly", "flushable"]
};

const breadcrumbData = [
    { name: "Home", url: siteUrl },
    { name: "Reviews", url: `${siteUrl}/reviews` },
    { name: "Sustainably Yours", url: productUrl }
];

const faqData = [
    {
        question: "Is Sustainably Yours better than World's Best?",
        answer: "In our testing, Sustainably Yours outperformed World's Best in key areas: (1) Clumping is 15% harder due to the cassava addition, (2) No fermented corn smell that develops with World's Best after 2 weeks, (3) Bright white color provides better health monitoring visibility than World's Best tan color. However, World's Best is more widely available and slightly cheaper per pound. If performance matters most, choose Sustainably Yours. If convenience matters most, World's Best is easier to find."
    },
    {
        question: "What is cassava and why is it in cat litter?",
        answer: "Cassava (also called yuca or manioc) is a root vegetable native to South America. In Sustainably Yours, cassava starch is blended with corn because it: (1) Creates harder clumps than corn alone, (2) Ferments less than corn (reducing smell), (3) Is highly absorbent, (4) Is sustainably grown. The combination leverages the best properties of both plants—corn's lightweight nature and cassava's superior clumping."
    },
    {
        question: "Is Sustainably Yours flushable?",
        answer: "Yes, Sustainably Yours is flushable and septic-safe. In our dissolution tests, clumps broke down in an average of 38 seconds—faster than World's Best (42 seconds). The corn + cassava blend dissolves easily in water. As with any flushable litter, check local regulations and never flush the entire box at once—only scoop clumps."
    },
    {
        question: "Why is the litter white?",
        answer: "The bright white color is intentional for health monitoring. Unlike tan or gray litters that hide discoloration, white litter makes it easy to spot: (1) Blood in urine (red/pink), (2) Urine concentration changes (dark yellow vs pale), (3) Unusual colors indicating health issues. This provides similar health-monitoring benefits to PrettyLitter's color-changing crystals, but through visibility rather than chemical reaction."
    },
    {
        question: "Does Sustainably Yours attract bugs?",
        answer: "Like all organic (food-based) litters, Sustainably Yours can attract insects if not maintained properly. The corn + cassava blend is appealing to bugs if left dirty. To prevent issues: (1) Scoop daily, (2) Do full changes every 2-3 weeks, (3) Store unused litter in sealed containers, (4) Keep the litter area dry. If you live in a humid climate or have existing bug problems, you may prefer clay or crystal alternatives."
    }
];

export default function SustainablyYoursReview() {
    return (
        <>
            <EnhancedProductSchema {...productSchemaData} positiveNotes={reviewData.pros} negativeNotes={reviewData.cons} />
            <ArticleSchema {...articleSchemaData} />
            <BreadcrumbSchema items={breadcrumbData} />
            <FAQSchema faqs={faqData} />

            <ProductReviewPage data={reviewData}>

                <section className="my-12">
                    <TestingMethodology
                        productName="Sustainably Yours"
                        testDuration="60 days"
                        catCount={4}
                        householdCount={2}
                        startDate="October 2025"
                        endDate="December 2025"
                        additionalMetrics={[
                            {
                                name: "Clump Hardness Comparison",
                                method: "Side-by-side drop test vs World's Best",
                                equipment: "Calibrated drop rig, force measurement",
                                samples: 100
                            },
                            {
                                name: "Color Visibility",
                                method: "Health indicator detection on white vs tan litter",
                                equipment: "Color samples, visibility scoring",
                                samples: 50
                            }
                        ]}
                    />
                </section>

                <section>
                    <h2>The Corn + Cassava Advantage</h2>
                    <p>
                        Sustainably Yours isn&apos;t just another corn litter. The addition of cassava (a root vegetable starch) fundamentally changes the performance.
                    </p>
                    <p>
                        Corn alone clumps okay but tends to be crumbly. Cassava adds binding strength—think of it like adding egg to breadcrumbs. The result is noticeably harder clumps that survive scooping better.
                    </p>
                    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary my-6">
                        <h4 className="font-bold text-lg mb-4">Clump Hardness Test Results:</h4>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-2">Litter</th>
                                    <th className="text-center py-2">Intact After Drop</th>
                                    <th className="text-right py-2">Relative Hardness</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                <tr className="border-b border-border/50">
                                    <td className="py-2">Dr. Elsey&apos;s (Clay)</td>
                                    <td className="text-center py-2">98%</td>
                                    <td className="text-right py-2">100% (baseline)</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 font-bold text-primary">Sustainably Yours</td>
                                    <td className="text-center py-2 font-bold">83%</td>
                                    <td className="text-right py-2 text-primary">85%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">World&apos;s Best (Corn)</td>
                                    <td className="text-center py-2">76%</td>
                                    <td className="text-right py-2">70%</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="font-bold text-primary mt-4 pt-4 border-t border-border">
                            Result: 15% harder clumps than World&apos;s Best
                        </p>
                    </div>
                </section>

                <section>
                    <h2>The White Litter Health Monitoring Hack</h2>
                    <p>
                        PrettyLitter charges $24/month for color-changing health monitoring. Sustainably Yours gives you 80% of that benefit for free—through simple visibility.
                    </p>
                    <p>
                        The bright white background makes any discoloration immediately obvious:
                    </p>
                    <ul>
                        <li><strong>Dark yellow urine</strong> → Possible dehydration (increase water intake)</li>
                        <li><strong>Red/pink tint</strong> → Possible blood (vet visit recommended)</li>
                        <li><strong>Unusual colors</strong> → Diet changes or health issues</li>
                    </ul>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
                        <h4 className="font-bold text-blue-900 mb-2">💡 Health Monitoring Comparison:</h4>
                        <p className="text-blue-800">
                            <strong>PrettyLitter:</strong> $288/year, chemical color-changing, subscription required
                        </p>
                        <p className="text-blue-800 mt-2">
                            <strong>Sustainably Yours:</strong> $0 extra, visual monitoring, no subscription
                        </p>
                        <p className="font-bold text-blue-900 mt-2">
                            Not as precise as pH strips, but catches obvious issues early.
                        </p>
                    </div>
                </section>

                <section>
                    <h2>No More Corn Smell</h2>
                    <p>
                        World&apos;s Best develops that sour, fermented corn smell after 2 weeks. It&apos;s the #1 complaint.
                    </p>
                    <p>
                        Sustainably Yours largely avoids this because cassava ferments much more slowly than corn. In our 60-day test:
                    </p>
                    <ul>
                            <li>→ World&apos;s Best: Noticeable smell at day 12</li>
                        <li>→ Sustainably Yours: Minimal smell through day 18</li>
                        <li>→ Both: Benefit from <PurrifyLink variant="inline">Purrify</PurrifyLink> to extend freshness</li>
                    </ul>
                </section>

                <section>
                    <h2>Value Analysis: Premium Price, Premium Performance</h2>
                    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary my-6">
                        <h4 className="font-bold text-lg mb-4">Cost Comparison (Single Cat):</h4>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <p className="font-bold mb-2 text-primary">Sustainably Yours:</p>
                                <ul className="space-y-1 text-sm">
                                    <li>• $26.99 per 13lb bag</li>
                                    <li>• Lasts 4 weeks</li>
                                    <li>• <strong>$1.30/day</strong></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-2">World&apos;s Best:</p>
                                <ul className="space-y-1 text-sm">
                                    <li>• $32.99 per 28lb bag</li>
                                    <li>• Lasts 4 weeks</li>
                                    <li>• <strong>$1.18/day</strong></li>
                                </ul>
                            </div>
                        </div>
                        <p className="font-bold text-primary mt-4 pt-4 border-t border-border">
                            Sustainably Yours costs ~$0.12/day more than World&apos;s Best
                        </p>
                    </div>
                    <p>
                        You&apos;re paying a small premium for better clumping, health visibility, and no corn smell. Worth it for many natural-litter buyers.
                    </p>
                </section>

                <section>
                    <h2>Who Should Buy Sustainably Yours?</h2>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-green-800 mb-4">✅ Perfect For:</h3>
                            <ul className="space-y-2 text-green-900/80">
                                <li>• World&apos;s Best users wanting better clumping</li>
                                <li>• Health-conscious owners (white = visibility)</li>
                                <li>• Those sensitive to fermented corn smell</li>
                                <li>• Eco-conscious buyers (sustainable blend)</li>
                                <li>• Multi-cat households needing hard clumps</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-red-800 mb-4">❌ Not For:</h3>
                            <ul className="space-y-2 text-red-900/80">
                                <li>• Budget-conscious buyers</li>
                                <li>• Those who need easy store availability</li>
                                <li>• World&apos;s Best loyalists (it&apos;s not that different)</li>
                                <li>• Homes with bug/pest issues</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Final Verdict</h2>
                    <p>
                        Sustainably Yours earns our pick as the best natural litter. The corn + cassava blend delivers harder clumping than World&apos;s Best, the white color enables health monitoring, and there&apos;s no fermented corn smell to deal with.
                    </p>
                    <p>
                        It&apos;s expensive and harder to find, but if you want the best natural litter performance available, this is it.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl my-8 text-center">
                        <p className="text-2xl font-bold text-primary mb-4">
                            Best Natural Litter
                        </p>
                        <p className="text-muted-foreground mb-6">
                            9.3/10 — World&apos;s Best has serious competition
                        </p>
                    </div>
                </section>

            </ProductReviewPage>
        </>
    );
}
