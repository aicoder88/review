
import type { Metadata } from 'next';
import Link from 'next/link';
import { CategoryPage, CategoryData } from '@/components/categories/CategoryPage';
import { getCategoryPageConfig, getCategoryPageMetadata, getCategoryPageStats } from '@/lib/category-pages';
import { getProductImage } from '@/lib/product-images';

const categoryConfig = getCategoryPageConfig('best-budget-cat-litter');
const categoryStats = getCategoryPageStats('best-budget-cat-litter');

export const metadata: Metadata = getCategoryPageMetadata('best-budget-cat-litter');

const categoryData: CategoryData = {
    path: categoryConfig?.path ?? '/categories/best-budget-cat-litter',
    title: categoryConfig?.title ?? 'Best Budget Cat Litter',
    description: categoryConfig?.description ?? "You don't need to spend $40 a month to avoid smelling cat poop. We found the best cheap litters that actually work.",
    stats: {
        tested: categoryStats?.tested ?? 0,
        reviewedThrough: categoryStats?.reviewedThrough ?? '',
        reviewedThroughDate: categoryStats?.reviewedThroughDate ?? '',
        priceRange: categoryStats?.priceRange ?? '$0 - $0'
    },
    products: [
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: getProductImage('arm-hammer-clump-seal'),
            price: "$16.99",
            score: 8.7,
            quickTake: "The best value for odor sealing.",
            pros: ["Seals odor instantly", "Cheap", "Hard clumps"],
            cons: ["Strong perfume", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["budget", "clay", "scented"]
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: getProductImage('dr-elseys-ultra'),
            price: "$24.99",
            score: 9.4,
            quickTake: "The gold standard. Slightly more expensive than grocery brands, but lasts longer.",
            pros: ["Best clumping", "No Smell", "Hypoallergenic"],
            cons: ["Heavy bags", "Tracking"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["premium", "clay", "unscented"]
        },
        {
            id: "boxiecat-premium",
            name: "Boxiecat Premium",
            image: getProductImage('boxiecat-premium'),
            price: "$27.99",
            score: 9.2,
            quickTake: "Premium option provided for comparison. Better dust control.",
            pros: ["Flat top clumps", "Zero dust", "Clean"],
            cons: ["Twice the price", "Hard to find"],
            type: "Clay",
            weight: "28lbs",
            reviewUrl: "/reviews/boxiecat-premium",
            priceCheckUrl: "https://amazon.com",
            tags: ["premium", "clay", "unscented"]
        }
    ],
    quickPicks: {
        overall: {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: getProductImage('arm-hammer-clump-seal'),
            price: "$16.99",
            score: 8.7,
            quickTake: "The best value for odor sealing.",
            pros: ["Seals odor instantly", "Cheap", "Hard clumps"],
            cons: ["Strong perfume", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["budget"],
            bestFor: "Maximum Odor Blocking"
        },
        value: {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: getProductImage('dr-elseys-ultra'),
            price: "$24.99",
            score: 9.4,
            quickTake: "The gold standard.",
            pros: ["Best clumping", "No Smell", "Hypoallergenic"],
            cons: ["Heavy bags", "Tracking"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["premium"],
            bestFor: "Dust-Free Homes"
        },
        niche: {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: getProductImage('worlds-best'),
            price: "$29.99",
            score: 9.1,
            quickTake: "The best natural clumping litter.",
            pros: ["Flushable & Septic Safe", "Lightweight", "Sustainable corn"],
            cons: ["Expensive", "Musky corn smell"],
            type: "Corn",
            weight: "28lbs",
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural"],
            bestFor: "Flushability",
            nicheLabel: "Best Natural"
        }
    },
    faq: [
        {
            question: "What makes a budget litter actually worth buying?",
            answer: "Value comes from more than the shelf price. A budget litter becomes expensive fast if clumps fall apart, odor builds up early, or you have to dump the whole box too often."
        },
        {
            question: "How often should I change cheap litter?",
            answer: "It depends on the formula and your scooping routine, but budget litters usually need closer attention because weaker clumps and higher residue can shorten the useful life of the box."
        }
    ],
    comparisonProducts: [
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer",
            image: getProductImage('arm-hammer-clump-seal'),
            score: 8.7,
            price: "$16.99",
            type: "Clay",
            dust: 8,
            clumping: 9,
            odor: 9,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: true },
            reviewUrl: "/reviews/arm-hammer-clump-seal"
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: getProductImage('dr-elseys-ultra'),
            score: 9.4,
            price: "$24.99",
            type: "Clay",
            dust: 9,
            clumping: 10,
            odor: 9,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/dr-elseys-ultra"
        },
        {
            id: "boxiecat-premium",
            name: "Boxiecat Premium",
            image: getProductImage('boxiecat-premium'),
            score: 9.2,
            price: "$27.99",
            type: "Clay",
            dust: 10,
            clumping: 9,
            odor: 8.5,
            tracking: 8,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/boxiecat-premium"
        }
    ]
};

const buyingGuide = (
    <>
        <h2>How to Judge Budget Cat Litter Without Getting Burned</h2>
        <p>
            The best budget cat litter is not automatically the cheapest bag. Real value comes from how
            long the litter stays usable, how much clean litter you lose while scooping, and whether the
            box stays manageable between full changes.
        </p>
        <p>
            That is why this page includes both low-cost winners and a stronger benchmark like
            <Link href="/reviews/dr-elseys-ultra" prefetch={false}> Dr. Elsey&apos;s Ultra</Link>. Some shoppers are
            better off paying a little more for cleaner clumps and a longer usable run.
        </p>

        <h3>What Usually Breaks a Budget Pick</h3>
        <p>
            Weak clumps are the biggest problem. When the scoop leaves wet crumbs behind, the litter gets dirty
            faster, the box starts smelling sooner, and the cheap bag stops looking cheap.
        </p>
        <p>
            The second issue is fragrance. Some low-cost litters mask odor well enough, but the tradeoff can be a
            stronger perfume profile. That is why it helps to compare this page with our
            <Link href="/categories/best-odor-control-cat-litter" prefetch={false}> odor-control roundup</Link> and
            our <Link href="/reviews/arm-hammer-clump-seal" prefetch={false}> Arm &amp; Hammer Clump &amp; Seal review</Link>.
        </p>

        <h3>When Spending More Still Makes Sense</h3>
        <p>
            If you scoop often, dislike fragrance, or want cleaner pours, paying a step up for a stronger litter can
            be the better deal. That is especially true when you are deciding between a lower upfront price and a
            formula that lasts longer before the whole box needs a reset.
        </p>

        <h3>Internal Links Worth Using on This Topic</h3>
        <p>
            Readers comparing value should usually visit three places next:
            <Link href="/categories/best-clumping-cat-litter" prefetch={false}> best clumping cat litter</Link> for
            scoop performance,
            <Link href="/guides/extend-cat-litter-life" prefetch={false}> extend cat litter life</Link> for maintenance
            habits, and <Link href="/compare" prefetch={false}> the comparison tool</Link> when two budget picks look close.
        </p>
    </>
);

export default function BestBudgetLitterPage() {
    return <CategoryPage {...categoryData}>{buyingGuide}</CategoryPage>;
}
