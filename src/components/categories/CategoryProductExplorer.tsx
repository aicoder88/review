'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpDown, Check, SlidersHorizontal } from 'lucide-react';
import { FilterSidebar } from './ui/FilterSidebar';
import { FadeUp, StaggerChildren } from '@/components/ui/motion';
import { ScoreBadge } from '@/components/reviews/ui/ScoreBadge';
import type { ProductGridItem } from './CategoryPage';

interface CategoryProductExplorerProps {
    products: ProductGridItem[];
}

const filterConfig = [
    {
        id: 'price',
        label: 'Price',
        options: [
            { id: 'budget', label: 'Under $15' },
            { id: 'mid', label: '$15 - $25' },
            { id: 'premium', label: 'Over $25' },
        ],
    },
    {
        id: 'type',
        label: 'Material',
        options: [
            { id: 'clay', label: 'Clay' },
            { id: 'natural', label: 'Natural/Plant' },
            { id: 'crystal', label: 'Silica Gel' },
        ],
    },
    {
        id: 'feature',
        label: 'Features',
        options: [
            { id: 'unscented', label: 'Unscented' },
            { id: 'scented', label: 'Scented' },
            { id: 'lightweight', label: 'Lightweight' },
            { id: 'flushable', label: 'Flushable' },
        ],
    },
];

function parsePrice(price: string) {
    return Number.parseFloat(price.replace(/[^0-9.]/g, ''));
}

export function CategoryProductExplorer({ products }: CategoryProductExplorerProps) {
    const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
    const [sortBy, setSortBy] = useState('rating');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFilterChange = (groupId: string, optionId: string) => {
        setActiveFilters((prev) => {
            const group = prev[groupId] || [];

            return group.includes(optionId)
                ? { ...prev, [groupId]: group.filter((id) => id !== optionId) }
                : { ...prev, [groupId]: [...group, optionId] };
        });
    };

    const filteredProducts = products
        .filter((product) => {
            if (
                Object.keys(activeFilters).length === 0 ||
                Object.values(activeFilters).every((entries) => entries.length === 0)
            ) {
                return true;
            }

            for (const [groupId, selectedOptions] of Object.entries(activeFilters)) {
                if (selectedOptions.length === 0) {
                    continue;
                }

                if (groupId === 'price') {
                    const price = parsePrice(product.price);
                    const matchesPrice = selectedOptions.some((option) => {
                        if (option === 'budget') return price < 15;
                        if (option === 'mid') return price >= 15 && price <= 25;
                        if (option === 'premium') return price > 25;
                        return false;
                    });

                    if (!matchesPrice) {
                        return false;
                    }
                }

                if (groupId === 'type') {
                    const productType = product.type.toLowerCase();
                    const matchesType = selectedOptions.some((option) => {
                        if (option === 'clay') return productType.includes('clay');
                        if (option === 'natural') {
                            return (
                                productType.includes('natural') ||
                                productType.includes('corn') ||
                                productType.includes('wheat') ||
                                productType.includes('plant')
                            );
                        }
                        if (option === 'crystal') {
                            return productType.includes('crystal') || productType.includes('silica');
                        }
                        return false;
                    });

                    if (!matchesType) {
                        return false;
                    }
                }

                if (groupId === 'feature') {
                    const matchesFeature = selectedOptions.some((option) =>
                        product.tags.some((tag) => tag.toLowerCase().includes(option.toLowerCase())),
                    );

                    if (!matchesFeature) {
                        return false;
                    }
                }
            }

            return true;
        })
        .sort((a, b) => {
            if (sortBy === 'rating') return b.score - a.score;
            if (sortBy === 'price_low') return parsePrice(a.price) - parsePrice(b.price);
            if (sortBy === 'price_high') return parsePrice(b.price) - parsePrice(a.price);
            return 0;
        });

    const activeFilterCount = Object.values(activeFilters).flat().length;

    return (
        <section className="container mx-auto px-6 mb-24" id="all-reviews">
            <div className="grid lg:grid-cols-12 gap-8">
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24">
                        <div className="flex items-center gap-2 font-bold text-lg mb-6">
                            <SlidersHorizontal className="w-5 h-5" /> Filters
                        </div>
                        <FilterSidebar
                            filters={filterConfig}
                            activeFilters={activeFilters}
                            onFilterChange={handleFilterChange}
                        />
                    </div>
                </aside>

                <div className="lg:hidden col-span-12 mb-4">
                    <button
                        onClick={() => setIsFilterOpen((current) => !current)}
                        className="w-full flex items-center justify-center gap-2 py-3 border border-border rounded-xl font-bold"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
                    </button>
                    {isFilterOpen ? (
                        <div className="mt-4 p-4 border border-border rounded-xl bg-secondary/10">
                            <FilterSidebar
                                filters={filterConfig}
                                activeFilters={activeFilters}
                                onFilterChange={handleFilterChange}
                            />
                        </div>
                    ) : null}
                </div>

                <div className="lg:col-span-9 space-y-8">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-muted-foreground font-medium">
                            {filteredProducts.length} Products Found
                        </span>
                        <div className="flex items-center gap-2">
                            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                            <select
                                className="bg-transparent font-bold text-foreground border-none focus:ring-0 cursor-pointer"
                                value={sortBy}
                                onChange={(event) => setSortBy(event.target.value)}
                            >
                                <option value="rating">Highest Rated</option>
                                <option value="price_low">Lowest Price</option>
                                <option value="price_high">Highest Price</option>
                            </select>
                        </div>
                    </div>

                    <StaggerChildren className="space-y-6">
                        {filteredProducts.map((product) => (
                            <FadeUp
                                key={product.id}
                                className="bg-white border border-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-full md:w-56 flex-shrink-0 flex flex-col items-center">
                                    <div className="w-full aspect-square mb-4 relative">
                                        <img src={product.image} alt={`${product.name} cat litter product photo`} className="w-full h-full object-contain" />
                                        <div className="absolute top-0 right-0 md:hidden">
                                            <ScoreBadge score={product.score} size="sm" />
                                        </div>
                                    </div>
                                    <div className="hidden md:flex flex-col items-center gap-2">
                                        <ScoreBadge score={product.score} size="lg" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Score</span>
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                                        <div>
                                            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{product.type}</div>
                                            <Link href={product.reviewUrl} prefetch={false} className="font-display text-2xl font-bold text-foreground hover:text-primary hover:underline">
                                                {product.name}
                                            </Link>
                                        </div>
                                        <div className="text-lg font-bold text-foreground">{product.price}</div>
                                    </div>

                                    <div className="bg-secondary/30 rounded-xl p-4 mb-6">
                                        <p className="font-medium text-foreground">{product.quickTake}</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                        <div className="space-y-1">
                                            {product.pros.slice(0, 2).map((pro, index) => (
                                                <div key={index} className="flex items-start gap-2 text-sm text-green-700">
                                                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                    <span>{pro}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-1">
                                            {product.cons.slice(0, 2).map((con, index) => (
                                                <div key={index} className="flex items-start gap-2 text-sm text-red-700">
                                                    <span className="font-bold text-xs mt-0.5 px-1 bg-red-100 rounded">✗</span>
                                                    <span>{con}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <Link href={product.reviewUrl} prefetch={false} className="px-6 py-2.5 bg-foreground text-white font-bold rounded-lg hover:bg-black transition-colors">
                                            Read Review
                                        </Link>
                                        <a href={product.priceCheckUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-border font-bold rounded-lg hover:bg-secondary transition-colors">
                                            Check Price
                                        </a>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </StaggerChildren>
                </div>
            </div>
        </section>
    );
}
