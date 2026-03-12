import type { Metadata } from 'next';
import Link from 'next/link';
import { CategoryPage, CategoryData } from '@/components/categories/CategoryPage';
import { getCategoryPageConfig, getCategoryPageMetadata, getCategoryPageStats } from '@/lib/category-pages';
import { getProductImage } from '@/lib/product-images';

const categoryConfig = getCategoryPageConfig('best-odor-control-cat-litter');
const categoryStats = getCategoryPageStats('best-odor-control-cat-litter');

export const metadata: Metadata = getCategoryPageMetadata('best-odor-control-cat-litter');

const categoryData: CategoryData = {
    path: categoryConfig?.path ?? '/categories/best-odor-control-cat-litter',
    title: categoryConfig?.title ?? 'Best Odor Control Cat Litter',
    description: categoryConfig?.description ?? "If your house smells like a litter box, you're buying the wrong litter. We tested odor-control picks to find the ones that actually trap, seal, and destroy odors.",
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
            quickTake: "The nuclear option. Seals odor instantly with micro-sealing granules and powerful scent.",
            pros: ["Seals odor instantly", "7-day guarantee works", "Cheap"],
            cons: ["Strong perfume smell", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["odor-control", "clay", "scented"]
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: getProductImage('prettylitter'),
            price: "$24.00",
            score: 8.8,
            quickTake: "Best for urine odor. The silica crystals absorb moisture instantly, trapping the smell inside.",
            pros: ["Zero urine smell", "Lightweight", "Health monitoring"],
            cons: ["Expensive", "Poop smell can linger"],
            type: "Silica",
            weight: "8lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["odor-control", "silica", "unscented"]
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: getProductImage('dr-elseys-ultra'),
            price: "$24.99",
            score: 9.4,
            quickTake: "Best unscented option. Controls odor by locking waste in rock-solid clumps.",
            pros: ["No fake perfume", "Great clumping", "Dust free"],
            cons: ["Heavy", "No active deodorizer"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["odor-control", "clay", "unscented"]
        }
    ],
    quickPicks: {
        overall: {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: getProductImage('arm-hammer-clump-seal'),
            price: "$16.99",
            score: 8.7,
            quickTake: "The nuclear option for smell.",
            pros: ["Seals odor instantly", "7-day guarantee works", "Cheap"],
            cons: ["Strong perfume smell", "Fine dust"],
            type: "Clay",
            weight: "38lbs",
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["odor-control"],
            bestFor: "Max Scent Power"
        },
        value: {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: getProductImage('dr-elseys-ultra'),
            price: "$24.99",
            score: 9.4,
            quickTake: "Best unscented option.",
            pros: ["No fake perfume", "Great clumping", "Dust free"],
            cons: ["Heavy", "No active deodorizer"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["unscented"],
            bestFor: "Sensitive Noses"
        },
        niche: {
            id: "prettylitter",
            name: "PrettyLitter",
            image: getProductImage('prettylitter'),
            price: "$24.00",
            score: 8.8,
            quickTake: "Best for urine odor.",
            pros: ["Zero urine smell", "Lightweight", "Health monitoring"],
            cons: ["Expensive", "Poop smell can linger"],
            type: "Silica",
            weight: "8lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["silica"],
            bestFor: "Urine Odor",
            nicheLabel: "Best Absorbent"
        }
    },
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
            odor: 10,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: true },
            reviewUrl: "/reviews/arm-hammer-clump-seal"
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: getProductImage('prettylitter'),
            score: 8.8,
            price: "$24.00",
            type: "Silica",
            dust: 9,
            clumping: 0,
            odor: 9,
            tracking: 8,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/prettylitter"
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
            odor: 8.5,
            tracking: 7,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/dr-elseys-ultra"
        }
    ],
    faq: [
        {
            question: "Why does my litter box still smell after scooping?",
            answer: "Small waste crumbs and damp litter left behind after scooping are the usual culprit. Better clumping and better absorption matter because they remove more of the odor source in the first place."
        },
        {
            question: "Is better to cover odor or remove it?",
            answer: "Removing the source is usually better. Some homes prefer scented litter, but the best odor-control setup still depends on clean scoops, good absorption, and a formula that matches your tolerance for fragrance."
        }
    ]
};

const buyingGuide = (
    <>
        <h2>How Odor Control Actually Works in Cat Litter</h2>
        <p>
            Odor control is rarely just one ingredient. The best performers isolate waste quickly, absorb moisture
            well, and make daily scooping easier so less dirty litter stays in the box.
        </p>
        <p>
            That is why this category mixes scented clay, unscented clay, and crystal options. Different homes solve
            smell differently, and the right answer depends on whether you want maximum fragrance, a cleaner
            unscented profile, or stronger urine absorption.
        </p>

        <h3>Scented vs. Unscented Is a Real Tradeoff</h3>
        <p>
            Some cat owners want the strongest possible masking effect, while others would rather avoid perfume and
            rely on clumping plus absorption. That is the main difference between
            <Link href="/reviews/arm-hammer-clump-seal" prefetch={false}> Arm &amp; Hammer Clump &amp; Seal</Link> and
            <Link href="/reviews/dr-elseys-ultra" prefetch={false}> Dr. Elsey&apos;s Ultra</Link>.
        </p>

        <h3>Why Clumping Still Matters on an Odor Page</h3>
        <p>
            Stronger clumps mean less residue left behind after you scoop. That is why readers focused on odor should
            usually compare this page with
            <Link href="/categories/best-clumping-cat-litter" prefetch={false}> best clumping cat litter</Link> and
            <Link href="/compare" prefetch={false}> the comparison tool</Link>, not just chase the strongest fragrance.
        </p>

        <h3>Where to Go Next If Smell Is Your Main Problem</h3>
        <p>
            Use
            <Link href="/guides/eliminate-litter-smell" prefetch={false}> eliminate litter smell</Link> if you want
            box-care habits and setup changes, and use
            <Link href="/categories/best-budget-cat-litter" prefetch={false}> best budget cat litter</Link> if you
            want to balance odor control against long-term cost.
        </p>
    </>
);

export default function BestOdorControlPage() {
    return <CategoryPage {...categoryData}>{buyingGuide}</CategoryPage>;
}
