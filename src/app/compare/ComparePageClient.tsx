'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { ComparisonTable, DetailedProduct } from '@/components/compare/ComparisonTable';
import { PurrifyEnhancement } from '@/components/compare/PurrifyEnhancement';
import { CostCalculator } from '@/components/compare/CostCalculator';
import { SmartRecommendation } from '@/components/compare/SmartRecommendation';
import { EditorialTrustBox } from '@/components/seo/EditorialTrustBox';
import { useComparison } from '@/context/ComparisonContext';
import { FadeUp } from '@/components/ui/motion';
import {
    getAllComparisonMatchups,
    getComparisonMatchupHref,
    getComparisonProductsByIds,
} from '@/lib/product-catalog';

const featuredMatchups = getAllComparisonMatchups().slice(0, 6);
const allMatchups = getAllComparisonMatchups();
const decisionPaths = [
    {
        title: 'Best Clumping Cat Litter',
        href: '/categories/best-clumping-cat-litter',
        description: 'Start from the strongest scoopability and clump-integrity winners.',
    },
    {
        title: 'Best Low-Dust Cat Litter',
        href: '/categories/best-low-dust-cat-litter',
        description: 'Narrow the field around cleaner pours and lower airborne mess.',
    },
    {
        title: 'Best Odor Control Cat Litter',
        href: '/categories/best-odor-control-cat-litter',
        description: 'Use the roundup built around ammonia management and smell control.',
    },
    {
        title: 'Cat Litter Guides',
        href: '/guides',
        description: 'Learn the tradeoffs behind odor, tracking, and savings before comparing products.',
    },
    {
        title: 'All Reviews',
        href: '/reviews',
        description: 'Open the underlying hands-on review pages behind the comparison data.',
    },
    {
        title: 'Testing Methodology',
        href: '/methodology',
        description: 'See how each score is measured across dust, clumping, odor, tracking, and value.',
    },
];

function ComparisonLoader() {
    const searchParams = useSearchParams();
    const { products: contextProducts } = useComparison();
    const [displayProducts, setDisplayProducts] = useState<DetailedProduct[]>([]);

    useEffect(() => {
        // Preference 1: URL query param (sharing)
        const urlIds = searchParams.get('products')?.split(',');

        // Preference 2: Context state
        const contextIds = contextProducts.map(p => p.id);

        // Merge (prefer URL if present, else Context)
        const targetIds = (urlIds && urlIds.length > 0) ? urlIds : contextIds;

        const resolved = getComparisonProductsByIds(targetIds);

        setDisplayProducts(resolved);
    }, [searchParams, contextProducts]);

    // Adapt products for CostCalculator and SmartRecommendation
    const adaptedProducts = displayProducts.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        lastedWeeks: p.longevity?.single?.replace(/\D/g, '') || '4'
    }));

    return (
        <section className="container mx-auto px-6 mb-24">
            <FadeUp>
                <ComparisonTable products={displayProducts} />
            </FadeUp>
            {displayProducts.length > 0 && (
                <>
                    <FadeUp delay={0.2}>
                        <CostCalculator products={adaptedProducts} />
                    </FadeUp>
                    <FadeUp delay={0.3}>
                        <SmartRecommendation products={displayProducts} />
                    </FadeUp>
                    <FadeUp delay={0.4}>
                        <PurrifyEnhancement />
                    </FadeUp>
                </>
            )}
        </section>
    );
}

export function ComparePageClient() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container mx-auto px-6 mb-12 text-center">
                    <h1 className="font-display text-4xl font-bold mb-4">Compare Cat Litters</h1>
                    <p className="text-xl text-muted-foreground">See the real data side-by-side. No fluff.</p>
                    <div className="mt-8 max-w-3xl mx-auto text-left">
                        <EditorialTrustBox
                            summary="The comparison hub is maintained by the ReviewCatLitter editorial team and pulls from the same review scores, matchup logic, and testing methodology used across the site."
                        />
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-12">
                    <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-white p-8 shadow-sm">
                        <h2 className="font-display text-2xl font-bold mb-3">Popular head-to-head matchups</h2>
                        <p className="text-muted-foreground mb-6">
                            Permanent comparison pages built from our closest product alternatives.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {featuredMatchups.map((matchup) => (
                                <Link
                                    key={matchup.slug}
                                    href={getComparisonMatchupHref(matchup.slug)}
                                    prefetch={false}
                                    className="rounded-2xl border border-border bg-secondary/20 p-5 transition-all hover:-translate-y-1 hover:shadow-sm"
                                >
                                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                                        Comparison
                                    </div>
                                    <h3 className="font-display text-xl font-bold mb-2">
                                        {matchup.products[0].name} vs {matchup.products[1].name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {matchup.insight.summary}
                                    </p>
                                    <div className="text-sm font-semibold text-foreground">
                                        Winner: {matchup.insight.winner.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-12">
                    <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-white p-8 shadow-sm">
                        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                            <div>
                                <h2 className="font-display text-2xl font-bold mb-2">Browse every permanent comparison page</h2>
                                <p className="text-muted-foreground">
                                    Direct links to every indexed head-to-head matchup in the catalog.
                                </p>
                            </div>
                            <div className="text-sm font-semibold text-muted-foreground">
                                {allMatchups.length} matchup pages
                            </div>
                        </div>
                        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                            {allMatchups.map((matchup) => (
                                <Link
                                    key={matchup.slug}
                                    href={getComparisonMatchupHref(matchup.slug)}
                                    prefetch={false}
                                    className="rounded-2xl border border-border bg-secondary/10 p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                                >
                                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                                        Matchup page
                                    </div>
                                    <h3 className="font-display text-xl font-bold mb-2">
                                        {matchup.products[0].name} vs {matchup.products[1].name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {matchup.insight.summary}
                                    </p>
                                    <div className="text-sm font-semibold text-foreground">
                                        Updated {new Date(`${matchup.updatedAt}T00:00:00Z`).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                            timeZone: 'UTC',
                                        })}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-display text-2xl font-bold mb-3">Need a Better Starting Point?</h2>
                        <p className="text-muted-foreground mb-6">
                            If you are not down to two products yet, start with the roundup or guide that matches the problem you are solving.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {decisionPaths.map((path) => (
                                <Link
                                    key={path.href}
                                    href={path.href}
                                    prefetch={false}
                                    className="rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-sm"
                                >
                                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                        Decision Path
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-2">{path.title}</h3>
                                    <p className="text-muted-foreground mb-4">{path.description}</p>
                                    <div className="text-sm font-semibold text-primary">Open path</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <Suspense fallback={<div className="text-center py-12">Loading comparison...</div>}>
                    <ComparisonLoader />
                </Suspense>

            </main>
            <Footer />
        </div>
    );
}
