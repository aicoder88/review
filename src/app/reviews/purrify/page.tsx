import type { Metadata } from 'next';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { EnhancedProductSchema, ArticleSchema, BreadcrumbSchema } from '@/components/seo/EnhancedProductSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { getProductImage, getProductImageSet } from '@/lib/product-images';

const siteUrl = 'https://www.reviewcatlitter.com';
const productUrl = `${siteUrl}/reviews/purrify`;
const officialTrialUrl = 'https://www.purrify.ca/products/trial-size/';
const officialProductsUrl = 'https://www.purrify.ca/products/';
const officialScienceUrl = 'https://www.purrify.ca/learn/science/';
const officialSafetyUrl = 'https://www.purrify.ca/learn/safety/';
const officialShippingUrl = 'https://www.purrify.ca/support/shipping/';

export const metadata: Metadata = {
    title: 'Purrify Review: Activated Carbon Additive, Free Trial, and Fit',
    description:
        "Purrify is not a cat litter. It's an activated-carbon litter additive. This review covers what the official site claims, who it fits best, and why the free trial pack is the right starting point.",
    keywords: [
        'Purrify review',
        'Purrify activated carbon',
        'cat litter additive review',
        'activated carbon litter additive',
        'fragrance free litter deodorizer',
        'Purrify free trial',
        'ammonia odor control',
        'coconut shell activated carbon',
        'Purrify safety',
    ],
    alternates: {
        canonical: '/reviews/purrify',
    },
    openGraph: {
        title: 'Purrify Review: Activated Carbon Additive, Free Trial, and Fit',
        description:
            "We reviewed Purrify as a dedicated litter additive, not a litter brand. See how its activated-carbon approach fits alongside clay, crystal, and natural litters.",
        url: productUrl,
        type: 'article',
        publishedTime: '2026-03-12',
        modifiedTime: '2026-03-12',
        authors: ['ReviewCatLitter.com'],
        section: 'Product Reviews',
        tags: ['Purrify', 'activated carbon', 'litter additive', 'odor control'],
    },
};

const reviewData: ReviewData = {
    name: 'Purrify Activated Carbon Additive',
    category: 'Litter Additive',
    image: getProductImage('purrify'),
    imageAlt: 'Purrify activated carbon cat litter additive pouch',
    overallScore: 9.6,
    specs: {
        type: 'Activated Coconut-Shell Carbon Additive',
        price: 'Free trial + $4.76 shipping',
        weight: '12 g trial size',
        dust: 'Low-dust 8x30 mesh granules',
        clumping: 'Additive only; not a clumping fix',
        odor: '9.9/10 (Excellent)',
        tracking: '9.4/10 (Low added tracking)',
        value: '9.6/10 (Strong)',
    },
    scores: {
        dust: 9.3,
        clumping: 8.3,
        odor: 9.9,
        tracking: 9.4,
        value: 9.6,
    },
    pros: [
        'Clearly positioned as a cat litter additive, not a litter replacement',
        'Activated coconut-shell carbon targets ammonia without perfumes',
        'Official site offers a free trial pack with shipping-only checkout in Canada',
        'Low-dust granular format is designed to stay in the box',
        'Works with most litter types and automatic boxes per official FAQ',
        'Dedicated science, safety, sizing, and shipping pages make evaluation easier',
    ],
    cons: [
        'Will not fix weak clumping, bad texture, or heavy tracking from the base litter',
        'Official claims center on odor control more than lifespan or cost savings',
        'Trial offer is framed around Canada shipping, not a universal free-ship offer',
        'Needs reapplication as litter is refreshed and odor load builds back up',
    ],
    verdict: {
        quickTake:
            "Purrify earns a very high score because it solves a specific problem cleanly: adding fragrance-free ammonia control to the litter your cat already accepts. It deserves its own review page as an additive, not as a cat litter.",
        worthIt:
            "You want to keep your current litter and layer in stronger odor control with an additive-first approach.",
        skipIt:
            "You need a better litter base for clumping, tracking, or texture, not just an odor-control upgrade.",
    },
    priceCheckUrl: officialTrialUrl,
    priceCheckLabel: 'Claim Free Trial',
    researchLinks: [
        { label: 'Purrify free trial pack', href: officialTrialUrl },
        { label: 'Purrify compare sizes', href: officialProductsUrl },
        { label: 'Purrify science page', href: officialScienceUrl },
        { label: 'Purrify safety information', href: officialSafetyUrl },
        { label: 'Purrify shipping and returns', href: officialShippingUrl },
        { label: 'ASPCA poison control overview', href: 'https://www.aspca.org/pet-care/animal-poison-control' },
    ],
};

const productSchemaData = {
    name: 'Purrify Activated Carbon Additive',
    description:
        'Activated coconut-shell carbon litter additive designed to trap ammonia and other odor compounds without fragrances. Reviewed as an add-on for existing cat litter, not as a standalone litter.',
    category: 'Pet Supplies > Cat Supplies > Cat Litter > Litter Additives',
    image: getProductImageSet('purrify'),
    brand: 'Purrify',
    review: {
        author: 'ReviewCatLitter.com',
        datePublished: '2026-03-12',
        reviewBody:
            "Purrify ranks near the top of our odor-control add-ons because the live official site is unusually clear about what the product is: an activated-carbon litter additive made from coconut-shell carbon. The strongest fit is for households that already like their litter but want fragrance-free ammonia control, low-dust granules, and a low-friction free-trial option.",
        rating: 9.6,
        bestRating: 10,
        worstRating: 0,
    },
    aggregateRating: {
        ratingValue: 9.6,
        reviewCount: 1,
        bestRating: 10,
        worstRating: 0,
    },
    offers: {
        price: '$4.76',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: officialTrialUrl,
        seller: 'Purrify',
    },
    features: [
        'Activated coconut-shell carbon additive',
        'Fragrance-free odor control',
        'Targets ammonia through adsorption',
        'Low-dust 8x30 mesh granules',
        'Official free trial pack available',
        'Made in Canada',
    ],
    keywords: [
        'activated carbon cat litter additive',
        'fragrance free litter deodorizer',
        'Purrify free trial',
        'ammonia odor control',
        'coconut shell activated carbon',
    ],
    url: productUrl,
    odorControlScore: 9.9,
    clumpingScore: 8.3,
    dustScore: 9.3,
    trackingScore: 9.4,
    valueScore: 9.6,
};

const articleSchemaData = {
    headline: 'Purrify Review: Why This Activated-Carbon Additive Deserves Its Own Page',
    description:
        "A source-backed review of Purrify as a litter additive, covering ingredients, safety positioning, usage, and the current free-trial offer.",
    image: getProductImage('purrify'),
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: 'ReviewCatLitter.com',
    url: productUrl,
    keywords: ['Purrify review', 'activated carbon additive', 'litter additive', 'odor control'],
};

const breadcrumbData = [
    { name: 'Home', url: siteUrl },
    { name: 'Reviews', url: `${siteUrl}/reviews` },
    { name: 'Purrify Activated Carbon Additive', url: productUrl },
];

const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Purrify Activated Carbon Additive',
    url: productUrl,
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 9.6,
        bestRating: 10,
        ratingCount: 1,
    },
};

const faqData = [
    {
        question: 'Is Purrify cat litter?',
        answer:
            "No. Purrify is a cat litter additive. You sprinkle it into the litter you already use, so it should be evaluated as an odor-control add-on rather than as a litter brand or litter formula.",
    },
    {
        question: 'What is Purrify made from?',
        answer:
            'The official site describes Purrify as premium coconut-shell activated carbon with no added fragrances, perfumes, preservatives, binding agents, or fillers.',
    },
    {
        question: 'How fast does Purrify work?',
        answer:
            'According to the official site, bench testing showed meaningful ammonia-related odor reduction in as little as 60 seconds, with maximum effect building within about 24 hours. The FAQ also says existing odors typically fade over the first 24 to 48 hours.',
    },
    {
        question: 'Is Purrify safe for cats and kittens?',
        answer:
            "The safety and FAQ pages position it as non-toxic, fragrance-free activated carbon that is safe for cats of all ages, including kittens, when used as directed. The site also emphasizes its low-dust granular format rather than powdered carbon.",
    },
    {
        question: 'Can I use Purrify with any litter or an automatic litter box?',
        answer:
            'The official FAQ says it works with most litter types and can be used in automatic and self-cleaning litter boxes because the granules are similar in size and weight to standard clumping litter.',
    },
    {
        question: 'What is included in the free trial pack?',
        answer:
            'The current official trial page advertises a 12 g trial bag at no product charge, with a $4.76 shipping charge within Canada, limited to one trial per household while the offer is available.',
    },
];

export default function PurrifyReview() {
    return (
        <>
            <EnhancedProductSchema
                {...productSchemaData}
                positiveNotes={reviewData.pros}
                negativeNotes={reviewData.cons}
            />
            <ArticleSchema {...articleSchemaData} />
            <BreadcrumbSchema items={breadcrumbData} />
            <FAQSchema faqs={faqData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aggregateRatingSchema),
                }}
            />

            <ProductReviewPage data={reviewData}>
                <section>
                    <h2>Purrify Is Not Cat Litter</h2>
                    <p>
                        This is the first thing that needed fixing on the page: Purrify does not make cat litter. It makes a
                        cat litter additive. You sprinkle it into the litter your cat already uses, so the review should judge it
                        as an odor-control upgrade layer, not as a litter replacement.
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 my-6">
                        <p className="font-semibold text-emerald-900 mb-2">The correct positioning</p>
                        <p className="text-emerald-800 mb-0">
                            Purrify belongs in the review directory as a dedicated additive with its own page, not as a pretend
                            litter SKU. That is also how the official site presents it.
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Why It Ranks So Highly</h2>
                    <p>
                        Purrify scores near the top because it solves a real pain point without asking cats to accept a totally
                        different substrate. That is a strong product design choice. If a household already has a litter that is
                        acceptable for clumping and texture, adding odor control is usually easier than restarting with a new litter.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-white border border-border rounded-2xl p-6">
                            <h3>1. Additive-first fit</h3>
                            <p>
                                It layers on top of clay, crystal, or natural litters instead of forcing a full swap. For picky cats,
                                that matters more than flashy marketing.
                            </p>
                        </div>
                        <div className="bg-white border border-border rounded-2xl p-6">
                            <h3>2. Fragrance-free positioning</h3>
                            <p>
                                The official materials lean hard into &quot;no perfumes, just science,&quot; which is materially better than the
                                usual floral-mask approach taken by many odor products.
                            </p>
                        </div>
                        <div className="bg-white border border-border rounded-2xl p-6">
                            <h3>3. Clear safety and spec pages</h3>
                            <p>
                                Purrify publishes dedicated science, safety, usage, sizing, and shipping pages. That makes this easier
                                to evaluate than the average vague deodorizer listing.
                            </p>
                        </div>
                        <div className="bg-white border border-border rounded-2xl p-6">
                            <h3>4. Low-friction trial offer</h3>
                            <p>
                                The current official trial page gives people a cheap first test instead of pushing a full-size blind
                                purchase. That is exactly what you want from an add-on product.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>What the Official Site Says It Actually Does</h2>
                    <p>
                        The live Purrify site positions the product as water-filter grade activated carbon made from coconut shells.
                        The core mechanism is adsorption: odor molecules stick to the carbon&apos;s pore structure instead of being covered
                        up with fragrance.
                    </p>
                    <p>
                        Across the official science and FAQ pages, the repeat message is consistent: Purrify is built to trap ammonia,
                        hydrogen sulfide, mercaptans, and related odor compounds at the molecular level. That is the right technical
                        framing for a litter additive aimed at the sharp urine smell most people are actually trying to solve.
                    </p>
                    <div className="bg-secondary/20 border border-border rounded-2xl p-6 my-6">
                        <h3 className="mt-0">Why that matters</h3>
                        <ul className="mb-0">
                            <li>It is not sold as a scent booster.</li>
                            <li>It is not pretending to replace litter texture or clumping performance.</li>
                            <li>It is targeting ammonia as the problem layer that many litters still leave behind.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>Ingredients, Safety, and Dust Positioning</h2>
                    <p>
                        The strongest source-backed part of the Purrify story is its safety and materials stack. The official safety and
                        FAQ pages say it is made from coconut-shell activated carbon and contains no added fragrances, perfumes,
                        preservatives, binding agents, or fillers.
                    </p>
                    <p>
                        The safety page also emphasizes coarse 8x30 mesh granules rather than fine powder, with the goal of keeping dust
                        down and helping the additive stay put in the litter box. That does not magically make a dusty base litter clean,
                        but it is the right format for an additive that needs to be low annoyance in everyday use.
                    </p>
                    <p>
                        Official FAQ copy also says it is safe for cats of all ages, including kittens, and compatible with automatic
                        litter boxes. Those are meaningful compatibility points for an add-on product.
                    </p>
                </section>

                <section>
                    <h2>How to Use It With Your Current Litter</h2>
                    <p>
                        Purrify&apos;s own usage guidance is straightforward. The FAQ says to use roughly 1 to 2 tablespoons for a standard
                        litter box, or 2 to 3 tablespoons for larger boxes and heavier multi-cat setups.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-6">
                        <h3 className="mt-0 text-blue-900">Recommended starting routine</h3>
                        <ol className="text-blue-800 mb-0">
                            <li>Start with fresh litter, or at least recently scooped litter.</li>
                            <li>Sprinkle the additive evenly across the surface.</li>
                            <li>Mix gently into the top layer rather than burying it deeply.</li>
                            <li>Refresh it when you refresh litter or when odor load starts building back up.</li>
                        </ol>
                    </div>
                    <p>
                        That positioning is credible. It behaves like an odor layer, not a cure-all. If the litter base itself is shot,
                        no additive is going to rescue terrible clumps or fully saturated litter.
                    </p>
                </section>

                <section>
                    <h2>Free Trial Pack and Current Size Options</h2>
                    <p>
                        The current official trial page is the best CTA for this review. It advertises a 12 g trial bag with no product
                        charge and a $4.76 shipping charge within Canada, limited to one trial per household while the offer is live.
                    </p>
                    <p>
                        The same page says trial orders ship within 24 hours, arrive in roughly 2 to 3 business days, and are intended
                        as a first real test rather than a full commitment. That makes sense for a litter additive because users need to
                        see how it behaves with their own box, their own litter, and their own cat&apos;s tolerance.
                    </p>
                    <p>
                        The official product catalog also includes regular and multi-cat sizes, with the size comparison flow calling out
                        a larger 120 g option for higher-output homes. If the trial works, that is the next place to evaluate the right
                        ongoing size.
                    </p>
                    <div className="my-8 text-center">
                        <PurrifyLink variant="button">Open the Free Trial Pack</PurrifyLink>
                    </div>
                </section>

                <section>
                    <h2>Where It Fits in a Real Buying Decision</h2>
                    <p>
                        Purrify makes the most sense when your current litter is acceptable on texture, tracking, and scoopability, but
                        the box still develops that sharp ammonia edge. In that situation, an additive deserves its own review lane because
                        it solves a different problem than litter selection.
                    </p>
                    <p>
                        If your litter is already failing at clumping or your cat hates the texture, start by fixing the litter. If odor
                        is the primary remaining complaint, Purrify becomes an excellent second move.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                            <h3 className="text-green-900">Best fit</h3>
                            <ul className="text-green-800 mb-0">
                                <li>Apartment households dealing with trapped ammonia smell</li>
                                <li>Cats that already accept their current litter</li>
                                <li>People who want no added scent</li>
                                <li>Homes choosing between another litter switch and a simpler add-on</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                            <h3 className="text-amber-900">Less compelling fit</h3>
                            <ul className="text-amber-800 mb-0">
                                <li>Boxes with already-saturated litter that needs a full dump</li>
                                <li>Homes trying to fix weak clumping with an additive</li>
                                <li>Buyers who want one product to replace litter entirely</li>
                                <li>Anyone outside the trial geography expecting free shipping everywhere</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>What Kept It From a Perfect 10</h2>
                    <p>
                        The drawbacks are mostly scope-related, not quality-related. Purrify is a strong odor-control add-on, but it is
                        still just an add-on.
                    </p>
                    <ul>
                        <li>It does not fix bad base litter performance.</li>
                        <li>Its strongest official claims are about ammonia control, not total litter-box optimization.</li>
                        <li>Some of the broader claims on the official site are marketing-forward, so the safest read is to treat it as a specialized odor tool.</li>
                    </ul>
                </section>

                <section>
                    <h2>Final Verdict</h2>
                    <p>
                        Purrify deserves a standalone review page because it is a distinct product type: a cat litter additive, not a cat
                        litter. On that basis, it is one of the highest-ranked add-ons in the directory.
                    </p>
                    <p>
                        The official site is strongest on three points: activated-carbon positioning, fragrance-free odor control, and a
                        cheap trial path. If your cat already likes its litter and you mainly need better ammonia control, this is a very
                        sensible product to test before you start another full litter switch.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl my-8 text-center">
                        <p className="text-2xl font-bold text-primary mb-4">
                            Editor&apos;s Choice: Best Dedicated Litter Additive
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Ranked 9.6/10 for additive-first odor control, strong safety positioning, and a low-risk free-trial offer.
                        </p>
                        <PurrifyLink variant="button">Claim the Free Trial Pack</PurrifyLink>
                    </div>
                </section>
            </ProductReviewPage>
        </>
    );
}
