import type { Metadata } from 'next';
import Link from 'next/link';
import { CategoryPage, CategoryData } from '@/components/categories/CategoryPage';
import { getCategoryPageConfig, getCategoryPageMetadata, getCategoryPageStats } from '@/lib/category-pages';

const categoryConfig = getCategoryPageConfig('best-low-dust-cat-litter');
const categoryStats = getCategoryPageStats('best-low-dust-cat-litter');

export const metadata: Metadata = getCategoryPageMetadata('best-low-dust-cat-litter');

const categoryData: CategoryData = {
    path: categoryConfig?.path ?? '/categories/best-low-dust-cat-litter',
    title: categoryConfig?.title ?? 'Best Low-Dust Cat Litter',
    description: categoryConfig?.description ?? "Dust isn't just an annoyance; it's a health hazard for you and your cat. We measured particulate levels in several brands to find the true dust-free options.",
    stats: {
        tested: categoryStats?.tested ?? 0,
        reviewedThrough: categoryStats?.reviewedThrough ?? '',
        reviewedThroughDate: categoryStats?.reviewedThroughDate ?? '',
        priceRange: categoryStats?.priceRange ?? '$0 - $0'
    },
    products: [
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$24.99",
            score: 9.4,
            quickTake: "The undefeated champion. 0.03mg dust levels (94% less than average).",
            pros: ["Zero visible dust", "Rock-solid clumps", "Hypoallergenic"],
            cons: ["Heavy", "No odor masking"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["low-dust", "clay", "unscented"]
        },
        {
            id: "boxiecat-premium",
            name: "Boxiecat Premium",
            image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80",
            price: "$27.99",
            score: 9.2,
            quickTake: "The premium contender. Equally dust-free but with better 'flat top' clumping.",
            pros: ["Zero dust", "Flat top clumps", "Stays cleaner"],
            cons: ["Expensive", "Hard to find"],
            type: "Clay",
            weight: "28lbs",
            reviewUrl: "/reviews/boxiecat-premium",
            priceCheckUrl: "https://amazon.com",
            tags: ["low-dust", "clay", "premium"]
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
            price: "$24.00",
            score: 8.8,
            quickTake: "Best non-clay option. Silica gel has no clay dust spread.",
            pros: ["Zero clay dust", "Health monitoring", "Delivered"],
            cons: ["Silica dust if inhaled", "Expensive"],
            type: "Silica",
            weight: "8lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["low-dust", "silica"]
        }
    ],
    quickPicks: {
        overall: {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$24.99",
            score: 9.4,
            quickTake: "The undefeated champion for dust control.",
            pros: ["Zero visible dust", "Rock-solid clumps", "Hypoallergenic"],
            cons: ["Heavy", "No odor masking"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["low-dust"],
            bestFor: "Asthma & Allergies"
        },
        value: {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80",
            price: "$29.99",
            score: 9.1,
            quickTake: "Best natural low-dust option. Corn produces little dust compared to cheap clay.",
            pros: ["Flushable", "Sustainable", "Safe dust"],
            cons: ["Corn smell", "Expensive"],
            type: "Corn",
            weight: "28lbs",
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural"],
            bestFor: "Natural Preference"
        },
        niche: {
            id: "boxiecat-premium",
            name: "Boxiecat Premium",
            image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80",
            price: "$27.99",
            score: 9.2,
            quickTake: "Premium flat-top clumping.",
            pros: ["Zero dust", "Flat top clumps", "Stays cleaner"],
            cons: ["Expensive", "Hard to find"],
            type: "Clay",
            weight: "28lbs",
            reviewUrl: "/reviews/boxiecat-premium",
            priceCheckUrl: "https://amazon.com",
            tags: ["premium"],
            bestFor: "Premium Experience",
            nicheLabel: "Upgrade Pick"
        }
    },
    comparisonProducts: [
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=200&q=80",
            score: 9.4,
            price: "$24.99",
            type: "Clay",
            dust: 10,
            clumping: 10,
            odor: 8.5,
            tracking: 7,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/dr-elseys-ultra"
        },
        {
            id: "boxiecat-premium",
            name: "Boxiecat Premium",
            image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=200&q=80",
            score: 9.2,
            price: "$27.99",
            type: "Clay",
            dust: 10,
            clumping: 9,
            odor: 8,
            tracking: 8,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/boxiecat-premium"
        },
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer",
            image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=200&q=80",
            score: 8.7,
            price: "$16.99",
            type: "Clay",
            dust: 6,
            clumping: 9,
            odor: 9,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: true },
            reviewUrl: "/reviews/arm-hammer-clump-seal"
        }
    ],
    faq: [
        {
            question: "What usually causes dust problems in a litter box setup?",
            answer: "Most complaints come from pouring a fresh bag, topping off the box, or stirring the litter during scooping. Material type matters, but so does how the litter behaves once it is in regular use."
        },
        {
            question: "Is '99% Dust Free' real?",
            answer: "Treat it as a loose marketing phrase, not a universal standard. One brand's low-dust experience can still look very different from another brand's once you start pouring, scooping, and living with it."
        }
    ]
};

const buyingGuide = (
    <>
        <h2>How to Shop for Low-Dust Cat Litter</h2>
        <p>
            Low-dust cat litter is really about the full cleanup cycle, not just the first pour out of the bag.
            The best options stay controlled when you refill the box, disturb the litter during scooping, and top
            it off through the week.
        </p>
        <p>
            That is why this roundup still cares about clumping and odor control. A low-dust formula loses value fast
            if it turns the box into a harder cleanup job or leaves waste behind.
        </p>

        <h3>Material Tradeoffs Matter</h3>
        <p>
            Clay can deliver the strongest traditional clumps, but low-dust winners tend to come from the better
            refined formulas. Crystal and plant-based litters can also reduce airborne mess, though they introduce
            different tradeoffs around feel, price, or classic scoopability.
        </p>

        <h3>What to Compare Next</h3>
        <p>
            If dust is your top priority, compare this page with our
            <Link href="/categories/best-clumping-cat-litter" prefetch={false}> clumping roundup</Link> to check
            whether the cleaner options still scoop the way you want. If you are deciding between clay and natural
            materials, jump to
            <Link href="/categories/best-natural-cat-litter" prefetch={false}> best natural cat litter</Link> and
            <Link href="/guides/stop-litter-tracking" prefetch={false}> stop litter tracking</Link> for the rest of
            the cleanup picture.
        </p>

        <h3>Best Use Cases for This Category</h3>
        <p>
            This page is most useful for dust-sensitive homes, small rooms where litter clouds are more noticeable,
            and anyone who wants a cleaner refill experience without giving up every other performance metric.
        </p>
    </>
);

export default function BestLowDustPage() {
    return <CategoryPage {...categoryData}>{buyingGuide}</CategoryPage>;
}
