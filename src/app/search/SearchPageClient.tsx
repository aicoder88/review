'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { HeaderClient } from '@/components/home/HeaderClient';
import { FooterClient } from '@/components/home/FooterClient';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import { searchCatalog } from '@/lib/product-catalog';

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = searchCatalog(query);

    return (
        <div className="min-h-screen bg-background">
            <HeaderClient />
            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <h1 className="font-display text-4xl font-bold mb-2">
                        Search Results for <span className="text-primary">&quot;{query}&quot;</span>
                    </h1>
                    <p className="text-muted-foreground mb-8">{results.length} products found</p>

                    {results.length === 0 ? (
                        <div className="text-center py-20 bg-secondary/30 rounded-3xl">
                            <h2 className="text-2xl font-bold mb-4">No results found</h2>
                            <p className="text-muted-foreground mb-8">Try searching for &quot;clay&quot;, &quot;natural&quot;, &quot;dust&quot;, or &quot;odor&quot;.</p>
                            <Link href="/" prefetch={false} className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                                Return Home
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-6 mb-12">
                                {results.map(product => (
                                    <Link key={product.id} href={product.reviewUrl} prefetch={false}>
                                        <div className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                                            <div className="w-full md:w-48 h-48 bg-secondary rounded-xl overflow-hidden shrink-0">
                                                <img src={product.image} alt={`${product.name} - ${product.category} cat litter product`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">{product.category}</span>
                                                    <div className="flex items-center gap-1 text-amber-500">
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <span className="font-bold text-sm">{product.overallScore}</span>
                                                    </div>
                                                </div>
                                                <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h2>
                                                <p className="text-muted-foreground mb-4">{product.summary}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {product.tags.slice(0, 4).map(tag => (
                                                        <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center text-sm font-semibold text-primary">
                                                    Read Review <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Purrify Suggestion */}
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-500 p-3 rounded-xl shrink-0">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-xl font-bold text-emerald-900 mb-2">
                                            Pro Tip: Boost Any Litter&apos;s Performance
                                        </h3>
                                        <p className="text-emerald-700 mb-4">
                                            No matter which litter you choose, adding Purrify activated coconut carbon deodorizer additive can extend its life by 2x and improve odor control at the source.
                                        </p>
                                        <PurrifyLink variant="button">
                                            Learn About Purrify
                                        </PurrifyLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <FooterClient />
        </div>
    );
}

export function SearchPageClient() {
    return (
        <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
            <SearchContent />
        </Suspense>
    );
}
