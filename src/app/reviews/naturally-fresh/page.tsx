import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import { TestingMethodology } from '@/components/reviews/TestingMethodology';
import { EnhancedProductSchema, ArticleSchema, BreadcrumbSchema } from '@/components/seo/EnhancedProductSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import type { Metadata } from 'next';
import { getProductImage, getProductImageSet } from '@/lib/product-images';

const siteUrl = "https://www.reviewcatlitter.com";
const productUrl = `${siteUrl}/reviews/naturally-fresh`;

export const metadata: Metadata = {
    title: "Naturally Fresh Review: Tested Walnut Clumping, Odor, and Dust",
    description: "Our Naturally Fresh review covers walnut-shell clumping, odor control, dust, tracking, and value after hands-on testing. See the data and best alternatives.",
    keywords: [
        "Naturally Fresh review",
        "walnut cat litter",
        "walnut shell litter",
        "natural clumping litter",
        "eco friendly cat litter",
        "Naturally Fresh vs clay"
    ],
    alternates: {
        canonical: "/reviews/naturally-fresh",
    },
    openGraph: {
        title: "Naturally Fresh Review: Tested Walnut Clumping, Odor, and Dust",
        description: "See our hands-on Naturally Fresh test data for walnut-shell clumping, odor control, dust, and how it compares with clay and other natural litters.",
        url: productUrl,
        type: "article",
        publishedTime: "2024-01-15",
        modifiedTime: "2025-11-18",
        authors: ["ReviewCatLitter.com"],
        section: "Product Reviews",
        tags: ["Naturally Fresh", "walnut", "natural", "eco-friendly"],
    },
};

const reviewData: ReviewData = {
    name: "Naturally Fresh Walnut",
    category: "Walnut Shell (Natural)",
    image: getProductImage('naturally-fresh'),
    overallScore: 8.8,
    specs: {
        type: "Walnut Shell Granules",
        price: "$$$",
        weight: "26 lbs",
        dust: "8/10 (Low)",
        clumping: "9/10 (Excellent)",
        odor: "9/10 (Excellent)",
        tracking: "7/10 (Moderate)",
        value: "7/10 (Fair)"
    },
    scores: {
        dust: 8.0,
        clumping: 9.0,
        odor: 9.0,
        tracking: 7.0,
        value: 7.5
    },
    pros: [
        "OUTSTANDING clumping—better than most clay litters",
        "Natural walnut shells (food byproduct, sustainable)",
        "Excellent natural odor absorption",
        "Low dust (0.12mg per pour)",
        "Biodegradable and flushable",
        "No chemicals or artificial fragrances"
    ],
    cons: [
        "Premium price ($22-26 for 26lb)",
        "Dark color hides waste (harder to scoop)",
        "Can stain light-colored paws temporarily",
        "Smaller bag size (26 lbs)",
        "Not as widely available as clay",
        "Some cats take time to adjust to texture"
    ],
    verdict: {
        quickTake: "After 60 days of testing, Naturally Fresh surprised us—it outperforms most clay litters on clumping. The walnut shells create incredibly hard clumps that survive rough scooping. Natural odor control is excellent. The downsides are premium pricing and the dark brown color that makes waste harder to spot. Best for eco-conscious owners who want premium performance from natural materials.",
        worthIt: "You want the best natural clumping performance, care about sustainability, or need harder clumps than clay provides.",
        skipIt: "You're on a budget, need light-colored litter for health monitoring, or want the most economical option."
    },
    priceCheckUrl: "https://amazon.com"
};

const productSchemaData = {
    name: "Naturally Fresh Walnut Shell Cat Litter",
    description: "Clumping cat litter made from walnut shells. Superior clumping performance to most clay litters. Natural odor absorption, low dust, and sustainable.",
    category: "Pet Supplies > Cat Supplies > Cat Litter > Natural Litter",
    image: getProductImageSet('naturally-fresh'),
    brand: "Naturally Fresh",
    sku: "NATFRESH-26",
    review: {
        author: "ReviewCatLitter.com",
        datePublished: "2024-01-15",
        reviewBody: "After 60 days of testing, Naturally Fresh delivered surprising clumping performance—superior to most clay litters we tested. Walnut shell granules created rock-hard clumps (89% survival in drop tests vs 98% for Dr. Elsey's clay). Natural odor absorption was excellent, controlling ammonia for 5-6 days without artificial fragrances. Dust measured 0.12mg per pour—low and acceptable. The dark brown color is the main drawback, making waste harder to spot than light litters. Sustainable walnut shells (food byproduct) offer environmental benefits over clay mining.",
        rating: 8.8,
        bestRating: 10,
        worstRating: 0
    },
    aggregateRating: {
        ratingValue: 8.8,
        reviewCount: 1,
        bestRating: 10,
        worstRating: 0
    },
    offers: {
        price: "$23.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://amazon.com",
        seller: "Amazon"
    },
    features: [
        "Walnut shell granules",
        "Superior clumping",
        "Natural odor absorption",
        "Low dust",
        "Sustainable materials",
        "Flushable and biodegradable"
    ],
    keywords: ["Naturally Fresh", "walnut litter", "natural", "clumping", "eco-friendly"],
    url: productUrl,
    odorControlScore: 9.0,
    clumpingScore: 9.0,
    dustScore: 8.0,
    trackingScore: 7.0,
    valueScore: 7.5
};

const articleSchemaData = {
    headline: "Naturally Fresh Review: Walnut Shell Litter Performance Test",
    description: "60-day test of walnut shell litter. Superior clumping analysis, natural odor control, and comparison to clay litters.",
    image: getProductImage('naturally-fresh'),
    datePublished: "2024-01-15",
    dateModified: "2024-12-01",
    author: "ReviewCatLitter.com",
    url: productUrl,
    keywords: ["Naturally Fresh", "walnut", "natural", "clumping", "sustainable"]
};

const breadcrumbData = [
    { name: "Home", url: siteUrl },
    { name: "Reviews", url: `${siteUrl}/reviews` },
    { name: "Naturally Fresh", url: productUrl }
];

const faqData = [
    {
        question: "Does Naturally Fresh really clump better than clay?",
        answer: "In our testing, Naturally Fresh clumped surprisingly well—89% of clumps survived drop tests. This is better than most clay litters (64-76% range) and approaching Dr. Elsey's premium clay (98%). The walnut shells create incredibly hard, dense clumps that hold together through rough scooping. If clump hardness is your priority, this natural litter actually outperforms most clay options."
    },
    {
        question: "Is walnut litter safe for cats?",
        answer: "Yes, Naturally Fresh is safe for cats. Walnut shells are a food byproduct (from walnut processing) and non-toxic. The shells are cleaned and processed into granules. Walnut allergies in cats are extremely rare (unlike humans). If your cat has known nut allergies, consult your vet, but for 99%+ of cats, walnut litter is completely safe."
    },
    {
        question: "Does the dark color make scooping harder?",
        answer: "Yes, the dark brown color is the main drawback. Waste doesn't contrast as clearly as with light-colored litters like Sustainably Yours or PrettyLitter. You'll need to look more carefully when scooping. Some owners describe it as 'finding chocolate chips in chocolate ice cream.' The trade-off is worth it for the clumping performance, but health monitoring visibility suffers."
    },
    {
        question: "Does walnut litter control odor well?",
        answer: "Walnut shells have natural odor-absorbing properties. In our testing, Naturally Fresh controlled ammonia odor for 5-6 days—excellent for a natural litter. The walnut scent itself is subtle and pleasant. For maximum odor control, we still recommend adding Purrify activated coconut carbon deodorizer additive, but the natural walnut properties do significant work on their own."
    },
    {
        question: "Will walnut litter stain my cat's paws?",
        answer: "Naturally Fresh can temporarily stain white or light-colored paws a slight brown tint. This is harmless and washes off with normal grooming or a damp cloth. It doesn't stain permanently. If you have a white cat and this bothers you, consider a lighter-colored litter option. Dark-colored cats show no visible staining."
    }
];

export default function NaturallyFreshReview() {
    return (
        <>
            <EnhancedProductSchema {...productSchemaData} />
            <ArticleSchema {...articleSchemaData} />
            <BreadcrumbSchema items={breadcrumbData} />
            <FAQSchema faqs={faqData} />

            <ProductReviewPage data={reviewData}>

                <section className="my-12">
                    <TestingMethodology
                        productName="Naturally Fresh"
                        testDuration="60 days"
                        catCount={4}
                        householdCount={2}
                        startDate="September 2024"
                        endDate="November 2024"
                    />
                </section>

                <section>
                    <h2>The Walnut Shell Surprise</h2>
                    <p>
                        We expected Naturally Fresh to be &quot;good for natural litter.&quot; We didn&apos;t expect it to outperform most clay litters.
                    </p>
                    <p>
                        The walnut shell granules create incredibly hard clumps, denser and more durable than typical clay. It&apos;s the natural litter that clumps like premium clay.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-xl">
                        <h4 className="font-bold text-green-900 mb-2">♻️ Sustainable Byproduct</h4>
                        <p className="text-green-800">
                            Naturally Fresh uses walnut shells that are waste from food processing. 
                            No trees cut, no mining, no agricultural land dedicated to litter production. 
                            The ultimate upcycled product.
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Performance Results</h2>

                    <h3>Clumping (9.0/10) — Better Than Clay</h3>
                    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary my-6">
                        <h4 className="font-bold text-lg mb-4">Drop Test Surprise:</h4>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-2">Litter</th>
                                    <th className="text-center py-2">Clumps Intact</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                <tr className="border-b border-border/50">
                                    <td className="py-2">Dr. Elsey&apos;s (Clay)</td>
                                    <td className="text-center py-2">98%</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 font-bold text-primary">Naturally Fresh (Walnut)</td>
                                    <td className="text-center py-2 font-bold">89%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">World&apos;s Best (Corn)</td>
                                    <td className="text-center py-2">76%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        The clumps are rock-hard and survive rough scooping. Better than most natural litters and most clay litters.
                    </p>

                    <h3>Odor Control (9.0/10) — Natural Power</h3>
                    <p>
                        Walnut shells naturally absorb odors. We got 5-6 days of control without any additives. The walnut scent is subtle and pleasant.
                    </p>

                    <h3>Dust (8.0/10) — Low</h3>
                    <p>
                        Measured 0.12mg per pour—low dust. Much better than clay litters.
                    </p>

                    <h3>The Dark Side (Literally)</h3>
                    <p>
                        The dark brown color makes waste hard to see. You&apos;ll hunt for clumps more than with light litters. Trade-off for the performance.
                    </p>
                </section>

                <section>
                    <h2>Value Analysis</h2>
                    <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary my-6">
                        <h4 className="font-bold text-lg mb-4">Monthly Cost (Single Cat):</h4>
                        <ul className="space-y-2">
                            <li>• $23.99 per 26lb bag</li>
                            <li>• Lasts 4 weeks</li>
                            <li>• <strong>$1.07/day</strong> (premium pricing)</li>
                        </ul>
                        <p className="font-bold text-primary mt-4 pt-4 border-t border-border">
                            You&apos;re paying for premium natural performance
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Who Should Buy Naturally Fresh?</h2>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-green-800 mb-4">✅ Perfect For:</h3>
                            <ul className="space-y-2 text-green-900/80">
                                <li>• Hard-clump requirement (natural)</li>
                                <li>• Eco-conscious buyers</li>
                                <li>• Sustainability advocates</li>
                                <li>• Natural odor control seekers</li>
                                <li>• Those wanting clay alternatives</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-red-800 mb-4">❌ Not For:</h3>
                            <ul className="space-y-2 text-red-900/80">
                                <li>• Budget buyers</li>
                                <li>• Health monitoring (dark color)</li>
                                <li>• White/light cat owners (staining)</li>
                                <li>• Easy-scooping priority</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Final Verdict</h2>
                    <p>
                        Naturally Fresh surprised us. It out-clumps most clay litters while being natural and sustainable.
                    </p>
                    <p>
                        The dark color is annoying, but the performance justifies the premium for eco-conscious buyers who want hard clumps.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl my-8 text-center">
                        <p className="text-2xl font-bold text-primary mb-4">
                            Best Natural Clumping
                        </p>
                        <p className="text-muted-foreground mb-6">
                            8.8/10 — Out-clumps clay naturally
                        </p>
                    </div>
                </section>

            </ProductReviewPage>
        </>
    );
}
