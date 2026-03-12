'use client';

import Link from 'next/link';
import { CategoryPage } from '@/components/categories/CategoryPage';
import { getCategoryPageConfig, getCategoryPageStats } from '@/lib/category-pages';
import { getProductImage } from '@/lib/product-images';

const categoryConfig = getCategoryPageConfig('best-clumping-cat-litter');
const categoryStats = getCategoryPageStats('best-clumping-cat-litter');

export function BestClumpingClient() {
    const products = [
        {
            id: "dr-elseys-ultra",
            name: "Dr. Elsey's Ultra",
            image: getProductImage('dr-elseys-ultra'),
            score: 9.4,
            price: "$24.99",
            weight: "40lbs",
            type: "Clay",
            quickTake: "The best dust-free clumping we tested. You'll pay 30% more and lift a heavy bag, but you get rock-solid clumps and zero visible dust.",
            pros: ["Zero visible dust (0.03mg tested)", "Rock-solid clumps", "Lasts 30% longer"],
            cons: ["Heavy (40lb bags)", "Not natural/biodegradable"],
            reviewUrl: "/reviews/dr-elseys-ultra",
            priceCheckUrl: "https://amazon.com",
            tags: ["clay", "unscented", "premium", "low-dust"]
        },
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer Clump & Seal",
            image: getProductImage('arm-hammer-clump-seal'),
            score: 8.7,
            price: "$16.99",
            weight: "38lbs",
            type: "Clay",
            quickTake: "The best value clumping litter. Clumps well and seals odor instantly, but has a strong perfume scent some cats hate.",
            pros: ["Excellent odor sealing", "Great value", "Zero dust coating"],
            cons: ["Strong perfume scent", "Tracks easily"],
            reviewUrl: "/reviews/arm-hammer-clump-seal",
            priceCheckUrl: "https://amazon.com",
            tags: ["clay", "scented", "budget", "odor-control"]
        },
        {
            id: "worlds-best",
            name: "World's Best Cat Litter",
            image: getProductImage('worlds-best'),
            score: 9.1,
            price: "$29.99",
            weight: "28lbs",
            type: "Corn",
            quickTake: "The best natural clumping litter. It's flushable, lightweight, and eco-friendly. Clumps are softer than clay but good enough.",
            pros: ["Flushable & Septic Safe", "Lightweight", "Sustainable corn"],
            cons: ["Expensive", "Musky corn smell"],
            reviewUrl: "/reviews/worlds-best",
            priceCheckUrl: "https://amazon.com",
            tags: ["natural", "flushable", "lightweight", "premium"]
        }
    ];

    const comparison = [
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
        },
        {
            id: "worlds-best",
            name: "World's Best",
            image: getProductImage('worlds-best'),
            score: 9.1,
            price: "$29.99",
            type: "Corn",
            dust: 7,
            clumping: 9,
            odor: 8,
            tracking: 9,
            attributes: { natural: true, flushable: true, scented: false },
            reviewUrl: "/reviews/worlds-best"
        },
        {
            id: "arm-hammer-clump-seal",
            name: "Arm & Hammer",
            image: getProductImage('arm-hammer-clump-seal'),
            score: 8.7,
            price: "$16.99",
            type: "Clay",
            dust: 6,
            clumping: 8,
            odor: 9,
            tracking: 6,
            attributes: { natural: false, flushable: false, scented: true },
            reviewUrl: "/reviews/arm-hammer-clump-seal"
        }
    ];

    const quickPicks = {
        overall: { ...products[0], bestFor: "Most cat owners who hate dust" },
        value: { ...products[1], bestFor: "Budget buyers with smelly cats" },
        niche: { ...products[2], bestFor: "Eco-conscious & flushable needs", nicheLabel: "Best Natural" }
    };

    const faq = [
        {
            question: "What is the best clumping cat litter?",
            answer: "Dr. Elsey's Ultra leads this roundup because it combines hard, clean clumps with unusually low dust. It is not the cheapest option, but it is the most complete clumping package in the current review set."
        },
        {
            question: "Is expensive clumping litter worth it?",
            answer: "Sometimes. Paying more makes sense when the better litter leaves less waste behind, keeps the box cleaner, or cuts down on mess enough to change the daily experience. It is less important if you only care about the lowest bag price."
        },
        {
            question: "How often should you change clumping litter?",
            answer: "The schedule depends on the formula, the number of cats, and how consistent scooping is. Stronger clumping litters usually buy you more usable time because they leave less dirty residue behind after each scoop."
        }
    ];

    return (
        <CategoryPage
            path={categoryConfig?.path ?? '/categories/best-clumping-cat-litter'}
            title={categoryConfig?.title ?? 'Best Clumping Cat Litter'}
            description={categoryConfig?.description ?? "Hands-on picks for hard clumps, easier scooping, and lower dust across the strongest clumping formulas we review."}
            stats={{
                tested: categoryStats?.tested ?? 0,
                reviewedThrough: categoryStats?.reviewedThrough ?? '',
                reviewedThroughDate: categoryStats?.reviewedThroughDate ?? '',
                priceRange: categoryStats?.priceRange ?? '$0 - $0',
            }}
            products={products}
            comparisonProducts={comparison}
            quickPicks={quickPicks}
            faq={faq}
        >
            <h2>What Makes a Good Clumping Cat Litter?</h2>
            <p>
                Good clumping litter has one job first: remove waste cleanly. If the clump breaks apart on the way out,
                the box gets dirty faster, odor builds earlier, and you end up throwing away more fresh litter.
            </p>
            <p>
                The strongest options in this roundup also keep the rest of the maintenance routine manageable, which
                is why dust, tracking, and odor still matter on a clumping page.
            </p>

            <h3>Clump Strength</h3>
            <p>
                Tight clumps save time and preserve cleaner litter in the box. That is the biggest reason clay still
                dominates this category, even though some natural formulas now come close enough for shoppers who want
                a lighter or more flush-friendly setup.
            </p>

            <h3>Dust Levels</h3>
            <p>
                A litter can clump hard and still be frustrating if every refill creates a visible cloud. That is why
                the top performer here also overlaps with our
                <Link href="/categories/best-low-dust-cat-litter" prefetch={false}> low-dust roundup</Link>.
            </p>

            <h3>Odor Control</h3>
            <p>
                Clumping and odor control work together. Better scooping removes more waste, which usually matters more
                than simply adding more fragrance to the box.
            </p>

            <h2>Clay vs. Natural Clumping Litter</h2>
            <p>
                <strong>Clay:</strong> Usually clumps harder and faster, which keeps scooping simple. <br />
                <strong>Natural:</strong> Often feels lighter and may be easier to dispose of, but the clumps can be softer
                and the overall price can be higher.
            </p>
            <p>
                If you want the absolute best scoop performance, start with
                <Link href="/reviews/dr-elseys-ultra" prefetch={false}> Dr. Elsey&apos;s Ultra</Link>. If you want a
                natural option that still feels competitive in daily use, compare it against
                <Link href="/reviews/worlds-best" prefetch={false}> World&apos;s Best</Link> and then use
                <Link href="/compare" prefetch={false}> the comparison tool</Link> to narrow the tradeoffs.
            </p>

        </CategoryPage>
    );
}
