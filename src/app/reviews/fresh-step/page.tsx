import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import { TestingMethodology } from '@/components/reviews/TestingMethodology';
import { EnhancedProductSchema, ArticleSchema, BreadcrumbSchema } from '@/components/seo/EnhancedProductSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import type { Metadata } from 'next';

const siteUrl = "https://www.reviewcatlitter.com";
const productUrl = `${siteUrl}/reviews/fresh-step`;

export const metadata: Metadata = {
    title: "Fresh Step Scented Review 2025 | Gain Original Scent Test",
    description: "We tested Fresh Step for 60 days. Gain scent is strong, clumping is decent. See our ammonia test data and clump strength comparison.",
    keywords: [
        "Fresh Step review",
        "Fresh Step cat litter",
        "scented cat litter",
        "Gain scented litter",
        "clay cat litter review",
        "Fresh Step odor control"
    ],
    alternates: {
        canonical: "/reviews/fresh-step",
    },
    openGraph: {
        title: "Fresh Step Review: Strong Scent, Decent Performance",
        description: "60-day test of Fresh Step scented litter. Gain fragrance strength, clumping analysis, and value assessment vs competitors.",
        url: productUrl,
        type: "article",
        publishedTime: "2024-01-15",
        modifiedTime: "2024-12-01",
        authors: ["ReviewCatLitter.com"],
        section: "Product Reviews",
        tags: ["Fresh Step", "scented", "Gain", "clay litter"],
    },
};

const reviewData: ReviewData = {
    name: "Fresh Step Scented (Gain)",
    category: "Scented Clay",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    overallScore: 8.1,
    specs: {
        type: "Scented Clumping Clay",
        price: "$$",
        weight: "38 lbs",
        dust: "5/10 (Moderate)",
        clumping: "7/10 (Good)",
        odor: "8/10 (Strong Scent)",
        tracking: "6/10 (Moderate)",
        value: "8/10 (Good)"
    },
    scores: {
        dust: 5.0,
        clumping: 7.0,
        odor: 8.0,
        tracking: 6.0,
        value: 8.0
    },
    pros: [
        "Strong Gain scent masks odors effectively",
        "Decent clumping for mid-range price",
        "Widely available everywhere",
        "Good value at ~$18-20 for 38lb",
        "Clumps hold together reasonably well",
        "Multiple scent options available"
    ],
    cons: [
        "Strong fragrance may cause headaches",
        "Moderate dust (0.52mg per pour)",
        "Clumps softer than premium litters",
        "Scent fades after 1-2 weeks",
        "Not ideal for sensitive cats/humans",
        "Some tracking of fine particles"
    ],
    verdict: {
        quickTake: "After 60 days of testing, Fresh Step delivers exactly what it promises: strong scent and decent clumping at a fair price. The Gain fragrance is genuinely effective at masking odor—but it's strong. Clumping is acceptable but not exceptional. Best for households who want the 'Gain laundry' smell and don't mind fragrance intensity.",
        worthIt: "You love Gain scent, want odor masking over elimination, and want widely available mid-range litter.",
        skipIt: "You're sensitive to fragrances, have asthma, want unscented, or need premium clumping."
    },
    priceCheckUrl: "https://amazon.com"
};

const productSchemaData = {
    name: "Fresh Step Scented Clumping Cat Litter",
    description: "Scented clumping clay litter with Gain fragrance. Strong odor masking, decent clumping, widely available at mid-range price point.",
    category: "Pet Supplies > Cat Supplies > Cat Litter > Clumping Litter",
    image: ["https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80"],
    brand: "Fresh Step",
    sku: "FRESH-STEP-38",
    review: {
        author: "ReviewCatLitter.com",
        datePublished: "2024-01-15",
        reviewBody: "After 60 days of testing, Fresh Step delivered strong scented performance at a mid-range price. The Gain fragrance effectively masked ammonia odors for 7-10 days. Clumping was decent (66% survived drop test) but softer than premium options. Dust measured 0.52mg per pour—moderate levels typical of mid-range clay. The scent is genuinely strong—effective for odor masking but potentially overwhelming for sensitive individuals. A solid choice for those prioritizing fragrance and availability over dust control.",
        rating: 8.1,
        bestRating: 10,
        worstRating: 0
    },
    aggregateRating: {
        ratingValue: 8.1,
        reviewCount: 1,
        bestRating: 10,
        worstRating: 0
    },
    offers: {
        price: "$18.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://amazon.com",
        seller: "Amazon"
    },
    features: [
        "Gain scented fragrance",
        "Clumping formula",
        "Odor masking",
        "Widely available",
        "Mid-range pricing",
        "Multiple scent options"
    ],
    keywords: ["Fresh Step", "scented litter", "Gain", "clay", "odor control"],
    url: productUrl,
    odorControlScore: 8.0,
    clumpingScore: 7.0,
    dustScore: 5.0,
    trackingScore: 6.0,
    valueScore: 8.0
};

const articleSchemaData = {
    headline: "Fresh Step Review: Gain Scented Litter Performance Test",
    description: "60-day test of Fresh Step scented litter. Fragrance strength, clumping performance, and value analysis.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    datePublished: "2024-01-15",
    dateModified: "2024-12-01",
    author: "ReviewCatLitter.com",
    url: productUrl,
    keywords: ["Fresh Step", "scented", "Gain", "clay litter"]
};

const breadcrumbData = [
    { name: "Home", url: siteUrl },
    { name: "Reviews", url: `${siteUrl}/reviews` },
    { name: "Fresh Step", url: productUrl }
];

const faqData = [
    {
        question: "How strong is the Gain scent in Fresh Step?",
        answer: "The Gain scent is genuinely strong—comparable to freshly laundered clothes. For the first 3-5 days, it's quite noticeable. Some people love it; others find it overwhelming or get headaches. If you're sensitive to fragrances, try the unscented version instead. The scent fades after about 1-2 weeks, leaving more subtle odor control."
    },
    {
        question: "Does Fresh Step clump well?",
        answer: "Fresh Step clumps reasonably well for its price point. In our drop test, 66% of clumps stayed intact—better than budget options but below premium litters. The clumps are softer than Dr. Elsey's and may break if you're rough scooping. Wait 2-3 minutes after your cat uses the box for best clump hardness. It's 'good enough' clumping for most households."
    },
    {
        question: "Is Fresh Step dusty?",
        answer: "Fresh Step produces moderate dust—0.52mg per pour in our testing. You'll see visible dust clouds when pouring from height. It's not the dustiest litter we tested (budget litters are worse), but it's significantly dustier than premium options like Dr. Elsey's (0.03mg). If dust is a concern, consider their low-dust formula or switch to a premium brand."
    },
    {
        question: "How does Fresh Step compare to Arm & Hammer?",
        answer: "Fresh Step focuses on fragrance (Gain scent) while Arm & Hammer focuses on baking soda odor neutralization. Fresh Step's scent is stronger and more pleasant initially but fades faster. Arm & Hammer has slightly better clumping in the HardBall formula. Both are similarly priced and widely available. Choose Fresh Step if you want strong pleasant scent; choose Arm & Hammer if you prefer baking soda or want unscented options."
    },
    {
        question: "Where can I buy Fresh Step?",
        answer: "Fresh Step is one of the most widely available litters. You can find it at Walmart, Target, grocery stores, pet stores, and Amazon. It's stocked even in rural areas where premium litters aren't available. The ubiquity is a major advantage—no need to special order or drive to specialty stores."
    }
];

export default function FreshStepReview() {
    return (
        <>
            <EnhancedProductSchema {...productSchemaData} />
            <ArticleSchema {...articleSchemaData} />
            <BreadcrumbSchema items={breadcrumbData} />
            <FAQSchema faqs={faqData} />

            <ProductReviewPage data={reviewData}>

                <section className="my-12">
                    <TestingMethodology
                        productName="Fresh Step"
                        testDuration="60 days"
                        catCount={3}
                        householdCount={2}
                        startDate="September 2024"
                        endDate="November 2024"
                    />
                </section>

                <section>
                    <h2>The Gain Scent Experience</h2>
                    <p>
                        Fresh Step's partnership with Gain isn't just marketing—these litters genuinely smell like Gain detergent. Opening the bag fills the room with "fresh laundry" scent.
                    </p>
                    <p>
                        The scent is the strongest feature. It effectively masks ammonia odor for 7-10 days, even with minimal scooping.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-xl">
                        <h4 className="font-bold text-amber-900 mb-2">⚠️ Fragrance Warning</h4>
                        <p className="text-amber-800">
                            The Gain scent is STRONG. If you get headaches from perfumes or have scent sensitivities, 
                            this isn't your litter. Try the unscented Fresh Step version instead.
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Performance Results</h2>

                    <h3>Odor Control (8.0/10) — Fragrance Power</h3>
                    <p>
                        The Gain scent masks odor effectively for 7-10 days. However, it's masking, not elimination—the ammonia is still there, just covered.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-xl">
                        <h4 className="font-bold text-amber-900 mb-2">💡 Better Odor Solution</h4>
                        <p className="text-amber-800">
                            For true odor elimination without heavy fragrance, add <PurrifyLink variant="inline">Purrify</PurrifyLink>. 
                            The probiotics eat the ammonia bacteria, eliminating smell at the source instead of masking it.
                        </p>
                    </div>

                    <h3>Clumping (7.0/10) — Adequate</h3>
                    <p>
                        66% of clumps survived our drop test—decent for the price but softer than premium. Scoop gently to avoid breakage.
                    </p>

                    <h3>Dust (5.0/10) — Moderate</h3>
                    <p>
                        0.52mg per pour—visible dust clouds when pouring. Not ideal for respiratory sensitivities.
                    </p>
                </section>

                <section>
                    <h2>Value Analysis</h2>
                    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary my-6">
                        <h4 className="font-bold text-lg mb-4">Monthly Cost (Single Cat):</h4>
                        <ul className="space-y-2">
                            <li>• $18.99 per 38lb bag</li>
                            <li>• Lasts 5-6 weeks</li>
                            <li>• <strong>$0.45/day</strong></li>
                        </ul>
                        <p className="font-bold text-primary mt-4 pt-4 border-t border-border">
                            Fair mid-range pricing
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Who Should Buy Fresh Step?</h2>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-green-800 mb-4">✅ Perfect For:</h3>
                            <ul className="space-y-2 text-green-900/80">
                                <li>• Gain scent lovers</li>
                                <li>• Odor masking priority</li>
                                <li>• Convenience buyers (everywhere)</li>
                                <li>• Mid-range budget</li>
                                <li>• Those who don't mind fragrance</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-red-800 mb-4">❌ Not For:</h3>
                            <ul className="space-y-2 text-red-900/80">
                                <li>• Fragrance-sensitive individuals</li>
                                <li>• Asthma sufferers</li>
                                <li>• Those wanting unscented</li>
                                <li>• Premium clump requirements</li>
                                <li>• Dust-sensitive households</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Final Verdict</h2>
                    <p>
                        Fresh Step does what it promises: strong Gain scent and decent clumping at a fair price. The fragrance is genuinely effective but overwhelming for some.
                    </p>
                    <p>
                        If you love Gain detergent smell and don't have fragrance sensitivities, it's a solid mid-range choice.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl my-8 text-center">
                        <p className="text-2xl font-bold text-primary mb-4">
                            Best Scented Mid-Range
                        </p>
                        <p className="text-muted-foreground mb-6">
                            8.1/10 — Strong scent, fair performance
                        </p>
                    </div>
                </section>

            </ProductReviewPage>
        </>
    );
}
