import type { Metadata } from 'next';
import Link from 'next/link';
import { CategoryPage, CategoryData } from '@/components/categories/CategoryPage';
import { getCategoryPageConfig, getCategoryPageMetadata, getCategoryPageStats } from '@/lib/category-pages';

const categoryConfig = getCategoryPageConfig('best-natural-cat-litter');
const categoryStats = getCategoryPageStats('best-natural-cat-litter');

export const metadata: Metadata = getCategoryPageMetadata('best-natural-cat-litter');

const categoryData: CategoryData = {
    path: categoryConfig?.path ?? '/categories/best-natural-cat-litter',
    title: categoryConfig?.title ?? 'Best Natural Cat Litter',
    description: categoryConfig?.description ?? "Stop bringing clay dust into your home. We tested natural litters to find the ones that actually clump and don't attract bugs.",
    stats: {
        tested: categoryStats?.tested ?? 0,
        reviewedThrough: categoryStats?.reviewedThrough ?? '',
        reviewedThroughDate: categoryStats?.reviewedThroughDate ?? '',
        priceRange: categoryStats?.priceRange ?? '$0 - $0'
    },
    products: [
        {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80",
            price: "$29.99",
            score: 9.1,
            quickTake: "The overall winner. Best clumping for precise scooping.",
            pros: ["Flushable", "Excellent clumping", "Sustainable corn"],
            cons: ["Smells like corn", "Can attract bugs"],
            type: "Corn",
            weight: "28lbs",
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural", "clumping", "flushable"]
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
            price: "$24.00",
            score: 8.8,
            quickTake: "Best for health monitoring, but non-clumping behavior is polarizing.",
            pros: ["Health indicators", "Delivered to door", "Lightweight"],
            cons: ["Expensive", "Does not clump"],
            type: "Silica",
            weight: "6lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["silica", "health", "non-clumping"]
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$24.99",
            score: 9.4,
            quickTake: "Not natural (Clay), but included for comparison as the gold standard.",
            pros: ["Best clumping", "Cheap", "Odor control"],
            cons: ["Heavy", "Not eco-friendly"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["clay", "clumping", "budget"]
        }
    ],
    quickPicks: {
        overall: {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80",
            price: "$29.99",
            score: 9.1,
            quickTake: "The overall winner. Best clumping for precise scooping.",
            pros: ["Flushable", "Excellent clumping", "Sustainable corn"],
            cons: ["Smells like corn", "Can attract bugs"],
            type: "Corn",
            weight: "28lbs",
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural"],
            bestFor: "Eco-conscious owners"
        },
        value: {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=800&q=80",
            price: "$24.99",
            score: 9.4,
            quickTake: "Not natural (Clay), but included for comparison as the gold standard.",
            pros: ["Best clumping", "Cheap", "Odor control"],
            cons: ["Heavy", "Not eco-friendly"],
            type: "Clay",
            weight: "40lbs",
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["clay"],
            bestFor: "Budget performance"
        },
        niche: {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
            price: "$24.00",
            score: 8.8,
            quickTake: "Best for health monitoring.",
            pros: ["Health indicators", "Delivered to door", "Lightweight"],
            cons: ["Expensive", "Does not clump"],
            type: "Silica",
            weight: "8lbs",
            reviewUrl: "/reviews/prettylitter",
            priceCheckUrl: "https://prettylitter.com",
            tags: ["health"],
            bestFor: "Health monitoring",
            nicheLabel: "Best Tech"
        }
    },
    faq: [
        {
            question: "Can I really flush corn litter?",
            answer: "Yes, but be careful. Flush one clump at a time. Do not flush if you have a septic tank unless the brand specifically says 'septic safe' (World's Best is)."
        },
        {
            question: "Does natural litter attract bugs?",
            answer: "It can. It is food, after all. Keep the box clean and scoop daily to avoid flour beetles or ants finding a free meal."
        }
    ],
    comparisonProducts: [
        {
            id: "worlds-best",
            name: "World's Best",
            image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=200&q=80",
            score: 9.1,
            price: "$29.99",
            type: "Corn",
            dust: 8,
            clumping: 9,
            odor: 8.5,
            tracking: 8,
            attributes: { natural: true, flushable: true, scented: false },
            reviewUrl: "/reviews/worlds-best"
        },
        {
            id: "prettylitter",
            name: "PrettyLitter",
            image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=200&q=80",
            score: 8.8,
            price: "$24.00",
            type: "Silica",
            dust: 9,
            clumping: 0,
            odor: 9,
            tracking: 7,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/prettylitter"
        },
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: "https://images.unsplash.com/photo-1603573568853-294c65365511?w=200&q=80",
            score: 9.4,
            price: "$24.99",
            type: "Clay",
            dust: 9,
            clumping: 10,
            odor: 9,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: false },
            reviewUrl: "/reviews/dr-elseys-ultra"
        }
    ]
};

const buyingGuide = (
    <>
        <h2>What “Natural Cat Litter” Actually Means</h2>
        <p>
            Natural cat litter is a material category, not a promise that every product behaves the same.
            Corn, wood, walnut, tofu, grass, and crystal-adjacent formulas all solve different problems, so the
            right pick depends on whether you care most about clumping, lighter bags, flushability, or general cleanup.
        </p>

        <h3>Why Natural Litter Can Feel Better or Worse Than Clay</h3>
        <p>
            Many shoppers come here because they want a plant-based litter with less weight and a different material
            feel than bentonite clay. That can be a real advantage, but some formulas trade away clump hardness or
            require a more forgiving cleanup routine.
        </p>
        <p>
            The clumping performance of
            <Link href="/reviews/worlds-best" prefetch={false}> World&apos;s Best</Link> is what keeps it competitive
            with traditional litter, while pages like
            <Link href="/reviews/prettylitter" prefetch={false}> PrettyLitter</Link> show how a non-clumping
            lightweight option fits a very different use case.
        </p>

        <h3>Flushability and Disposal Still Need Context</h3>
        <p>
            Natural litter shoppers often care about flushability, but that should be treated as a product-specific
            convenience, not a universal rule for the whole category. Always check the brand guidance and your home
            plumbing situation before treating flushability as a deciding factor.
        </p>

        <h3>What to Compare Next</h3>
        <p>
            If you want the most natural-feeling upgrade without losing cleanup performance, compare this page with our
            <Link href="/categories/best-clumping-cat-litter" prefetch={false}> clumping roundup</Link>. If odor or
            general maintenance is your concern, use
            <Link href="/guides/eliminate-litter-smell" prefetch={false}> eliminate litter smell</Link> and
            <Link href="/guides/stop-litter-tracking" prefetch={false}> stop litter tracking</Link> to judge the full
            setup, not just the litter material.
        </p>

        <h3>How This Category Helps</h3>
        <p>
            This roundup works best for shoppers deciding whether natural litter is worth the material tradeoffs.
            It is less useful if you already know you want maximum clump strength above everything else, in which case
            the clay-heavy comparisons may be a better fit.
        </p>
    </>
);

export default function BestNaturalLitterPage() {
    return <CategoryPage {...categoryData}>{buyingGuide}</CategoryPage>;
}
