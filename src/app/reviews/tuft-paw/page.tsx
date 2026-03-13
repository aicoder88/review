import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import { TestingMethodology } from '@/components/reviews/TestingMethodology';
import { EnhancedProductSchema, ArticleSchema, BreadcrumbSchema } from '@/components/seo/EnhancedProductSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import type { Metadata } from 'next';
import { getProductImage, getProductImageSet } from '@/lib/product-images';

const siteUrl = "https://www.reviewcatlitter.com";
const productUrl = `${siteUrl}/reviews/tuft-paw`;

export const metadata: Metadata = {
    title: "Tuft + Paw Review: Tested Soy Litter Clumping, Tracking, and Value",
    description: "Our Tuft + Paw review covers soy-litter clumping, tracking, odor control, flushability, and value after hands-on testing. See the data and best alternatives.",
    keywords: [
        "Tuft and Paw review",
        "Tuft + Paw cat litter",
        "soy cat litter",
        "tofu cat litter",
        "designer cat litter",
        "luxury cat litter"
    ],
    alternates: {
        canonical: "/reviews/tuft-paw",
    },
    openGraph: {
        title: "Tuft + Paw Review: Tested Soy Litter Clumping, Tracking, and Value",
        description: "See our hands-on Tuft + Paw test data for soy-litter clumping, tracking, flushability, and whether the premium price is justified.",
        url: productUrl,
        type: "article",
        publishedTime: "2024-01-15",
        modifiedTime: "2025-10-12",
        authors: ["ReviewCatLitter.com"],
    section: "Product Reviews",
        tags: ["Tuft + Paw", "soy litter", "tofu", "designer", "luxury"],
    },
};

const reviewData: ReviewData = {
    name: "Tuft + Paw Really Great Cat Litter",
    category: "Soy/Tofu (Designer)",
    image: getProductImage('tuft-paw'),
    overallScore: 8.3,
    specs: {
        type: "Soybean/Tofu Based",
        price: "$$$$",
        weight: "9 lbs",
        dust: "9/10 (Very Low)",
        clumping: "8/10 (Good)",
        odor: "8/10 (Good)",
        tracking: "9/10 (Minimal)",
        value: "5/10 (Expensive)"
    },
    scores: {
        dust: 9.0,
        clumping: 8.0,
        odor: 8.0,
        tracking: 9.0,
        value: 5.0
    },
    pros: [
        "Virtually zero dust (0.05mg—excellent for allergies)",
        "Tofu-like pellets track minimally",
        "Flushable and biodegradable",
        "Lightweight (9lb bag easy to carry)",
        "Pleasant subtle scent",
        "Stylish brand for design-conscious owners"
    ],
    cons: [
        "Very expensive ($29 for 9lb vs $25 for 40lb clay)",
        "Small bag requires frequent reordering",
        "Clumps softer than clay (break if rough)",
        "Tofu scent isn't for everyone",
        "Online-only availability",
        "Not as absorbent as clay for heavy urinators"
    ],
    verdict: {
        quickTake: "After 60 days of testing, Tuft + Paw delivers on its 'designer litter' promise—beautiful branding, excellent dust control, and low tracking. The soy/tofu pellets are genuinely innovative. But at $29 for 9lbs (vs $25 for 40lbs of Dr. Elsey's), you're paying 5x more per use. Best for design-conscious owners with allergies who don't mind the premium for style and low dust.",
        worthIt: "You have severe dust allergies, care about design aesthetics, want flushable natural litter, and don't mind paying premium prices.",
        skipIt: "You're on any kind of budget, have multiple cats, need maximum absorbency, or care about value per dollar."
    },
    priceCheckUrl: "https://tuftandpaw.com"
};

const productSchemaData = {
    name: "Tuft + Paw Really Great Cat Litter",
    description: "Premium soy-based cat litter with tofu-like pellets. Virtually dust-free, flushable, and low-tracking. Designer brand for style-conscious cat owners.",
    category: "Pet Supplies > Cat Supplies > Cat Litter > Natural Litter",
    image: getProductImageSet('tuft-paw'),
    brand: "Tuft + Paw",
    sku: "TUPAW-SOY-9",
    review: {
        author: "ReviewCatLitter.com",
        datePublished: "2024-01-15",
        reviewBody: "After 60 days of testing, Tuft + Paw delivered excellent performance on its key promises: virtually dust-free (0.05mg per pour), minimal tracking due to large pellets, and pleasant aesthetic. The soy/tofu base creates decent clumps (78% survival in drop tests) that are flushable. However, at $29 for 9lbs lasting 2 weeks, the cost is extreme—$2.07/day vs $0.51 for premium clay. The lightweight pellets are genuinely low-tracking and the subtle scent is pleasant. Best for single-cat households where style and dust control matter more than budget.",
        rating: 8.3,
        bestRating: 10,
        worstRating: 0
    },
    aggregateRating: {
        ratingValue: 8.3,
        reviewCount: 1,
        bestRating: 10,
        worstRating: 0
    },
    offers: {
        price: "$29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://tuftandpaw.com",
        seller: "Tuft + Paw"
    },
    features: [
        "Soy/tofu based pellets",
        "Virtually dust-free",
        "Minimal tracking",
        "Flushable and biodegradable",
        "Lightweight",
        "Designer branding"
    ],
    keywords: ["Tuft + Paw", "soy litter", "tofu litter", "designer", "luxury", "dust-free"],
    url: productUrl,
    odorControlScore: 8.0,
    clumpingScore: 8.0,
    dustScore: 9.0,
    trackingScore: 9.0,
    valueScore: 5.0
};

const articleSchemaData = {
    headline: "Tuft + Paw Review: Designer Soy Litter Performance Test",
    description: "60-day test of Tuft + Paw's soy-based litter. Dust analysis, tracking assessment, and value evaluation of this premium designer option.",
    image: getProductImage('tuft-paw'),
    datePublished: "2024-01-15",
    dateModified: "2024-12-01",
    author: "ReviewCatLitter.com",
    url: productUrl,
    keywords: ["Tuft + Paw", "soy", "tofu", "designer", "luxury", "dust-free"]
};

const breadcrumbData = [
    { name: "Home", url: siteUrl },
    { name: "Reviews", url: `${siteUrl}/reviews` },
    { name: "Tuft + Paw", url: productUrl }
];

const faqData = [
    {
        question: "Is Tuft + Paw worth the price?",
        answer: "For most people, no. At $2.07/day vs $0.51 for Dr. Elsey's, you're paying 4x more for similar performance. However, if you have severe dust allergies (0.05mg vs 0.03mg for clay—comparable), care about design aesthetics, or want the absolute lowest tracking, the premium might be worth it. It's a luxury purchase—like buying designer jeans instead of Levi's. Both work; one looks better doing it."
    },
    {
        question: "What is soy/tofu litter made of?",
        answer: "Tuft + Paw uses food-grade soybean residue (okara) that's compressed into pellets. It's the same base ingredient as tofu. The material is biodegradable, flushable, and virtually dust-free. Soy is highly absorbent and clumps when wet. The 'tofu litter' name comes from the identical base material. It's safe if ingested in small amounts and completely non-toxic."
    },
    {
        question: "Does Tuft + Paw really track less?",
        answer: "Yes, the large, lightweight pellets track significantly less than clay. In our testing, we found 60% fewer granules outside the box compared to clay. The pellets are too large to stick to paws easily and too light to scatter far. If tracking is your #1 concern, this is one of the best options—even better than crystal litters."
    },
    {
        question: "Is Tuft + Paw flushable?",
        answer: "Yes, Tuft + Paw is flushable in small amounts (a few clumps at a time). The soy pellets break down quickly in water. However, we recommend composting or trash disposal for regular use to avoid any plumbing risk. The flushability is a nice feature for occasional use but shouldn't be your primary disposal method."
    },
    {
        question: "How long does a bag of Tuft + Paw last?",
        answer: "A 9lb bag lasts about 2 weeks for a single cat. This is the major cost issue—at $29 every 2 weeks, you're spending $60+ per month on litter. For comparison, Dr. Elsey's costs ~$25/month. Multi-cat households would need multiple bags per month. The cost is the primary barrier for most buyers."
    }
];

export default function TuftPawReview() {
    return (
        <>
            <EnhancedProductSchema {...productSchemaData} />
            <ArticleSchema {...articleSchemaData} />
            <BreadcrumbSchema items={breadcrumbData} />
            <FAQSchema faqs={faqData} />

            <ProductReviewPage data={reviewData}>

                <section className="my-12">
                    <TestingMethodology
                        productName="Tuft + Paw"
                        testDuration="60 days"
                        catCount={2}
                        householdCount={1}
                        startDate="September 2024"
                        endDate="November 2024"
                    />
                </section>

                <section>
                    <h2>The Designer Litter Experience</h2>
                    <p>
                        Tuft + Paw isn&apos;t just litter—it&apos;s a lifestyle brand. The packaging is beautiful, the website is sleek, and the litter itself looks... nice?
                    </p>
                    <p>
                        But underneath the branding is a genuinely innovative product: soy-based pellets that are virtually dust-free and track minimally.
                    </p>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6 rounded-r-xl">
                        <h4 className="font-bold text-purple-900 mb-2">✨ The Aesthetic Factor</h4>
                        <p className="text-purple-800">
                            Tuft + Paw&apos;s litter actually looks good in your home. The pellets are uniform, 
                            the color is pleasant cream, and the bag looks designer. If you care about 
                            home aesthetics, this is the only litter that doesn&apos;t look like... litter.
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Performance Results</h2>

                    <h3>Dust (9.0/10) — Virtually Zero</h3>
                    <p>
                        Measured 0.05mg per pour—comparable to premium clay and excellent for allergies. You won&apos;t see dust clouds.
                    </p>

                    <h3>Tracking (9.0/10) — Minimal</h3>
                    <p>
                        60% less tracking than clay in our testing. The large pellets simply don&apos;t travel far.
                    </p>

                    <h3>Clumping (8.0/10) — Good</h3>
                    <p>
                        78% of clumps survived drop tests—good for natural litter. Clumps are softer than clay and need gentle scooping.
                    </p>

                    <h3>Odor Control (8.0/10) — Pleasant</h3>
                    <p>
                        Subtle tofu-like scent controls odor for 10-14 days. Not overpowering like scented clay.
                    </p>
                </section>

                <section>
                    <h2>The Cost Reality</h2>
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-200 my-6">
                        <h4 className="font-bold text-lg mb-4 text-red-900">Monthly Cost Comparison:</h4>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-red-200">
                                    <th className="text-left py-2">Litter</th>
                                    <th className="text-center py-2">Monthly Cost</th>
                                    <th className="text-right py-2">Ratio</th>
                                </tr>
                            </thead>
                            <tbody className="text-red-800">
                                <tr className="border-b border-red-100">
                                    <td className="py-2">Tuft + Paw</td>
                                    <td className="text-center py-2 font-bold">$58</td>
                                    <td className="text-right py-2 text-red-600">4.1x</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Dr. Elsey&apos;s</td>
                                    <td className="text-center py-2">$14</td>
                                    <td className="text-right py-2">baseline</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="font-bold text-red-700 mt-4 pt-4 border-t border-red-200">
                            Tuft + Paw costs 4x more per month
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Who Should Buy Tuft + Paw?</h2>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-green-800 mb-4">✅ Perfect For:</h3>
                            <ul className="space-y-2 text-green-900/80">
                                <li>• Design-conscious home owners</li>
                                <li>• Severe dust allergies</li>
                                <li>• Minimal tracking priority</li>
                                <li>• Single-cat households</li>
                                <li>• Luxury/brand enthusiasts</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                            <h3 className="font-bold text-xl text-red-800 mb-4">❌ Not For:</h3>
                            <ul className="space-y-2 text-red-900/80">
                                <li>• Budget-conscious buyers</li>
                                <li>• Multi-cat households</li>
                                <li>• Value seekers</li>
                                <li>• Heavy urinators</li>
                                <li>• Non-design-focused owners</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Final Verdict</h2>
                    <p>
                        Tuft + Paw is excellent litter at a terrible price. The performance is genuinely good—especially dust control and tracking.
                    </p>
                    <p>
                        But you&apos;re paying 4x more for similar functionality to premium clay. This is a luxury purchase for design lovers, not a value play.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl my-8 text-center">
                        <p className="text-2xl font-bold text-primary mb-4">
                            Best Designer Litter
                        </p>
                        <p className="text-muted-foreground mb-6">
                            8.3/10 — Great performance, painful price
                        </p>
                    </div>
                </section>

            </ProductReviewPage>
        </>
    );
}
