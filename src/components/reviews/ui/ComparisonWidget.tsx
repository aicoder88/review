'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeftRight, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useComparison } from '@/context/ComparisonContext';
import {
    getCatalogProductByName,
    getComparisonMatchupHref,
    getComparisonMatchupForProducts,
    getCompetitorsForProduct,
    toCompareBarProduct,
} from '@/lib/product-catalog';

interface ComparisonWidgetProps {
    currentProduct: string;
}

export function ComparisonWidget({ currentProduct }: ComparisonWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const router = useRouter();
    const { addProduct } = useComparison();
    const currentCatalogProduct = getCatalogProductByName(currentProduct);

    if (!currentCatalogProduct) {
        return null;
    }

    const competitors = getCompetitorsForProduct(currentCatalogProduct.id);

    const toggleSelection = (productId: string) => {
        if (selected.includes(productId)) {
            setSelected(selected.filter((selectedId) => selectedId !== productId));
        } else {
            if (selected.length < 2) {
                setSelected([...selected, productId]);
            }
        }
    };

    const handleCompare = () => {
        const compareIds = [currentCatalogProduct.id, ...selected];
        const staticMatchup =
            selected.length === 1
                ? getComparisonMatchupForProducts(currentCatalogProduct.id, selected[0])
                : null;

        addProduct(toCompareBarProduct(currentCatalogProduct));

        competitors
            .filter((product) => selected.includes(product.id))
            .forEach((product) => addProduct(toCompareBarProduct(product)));

        router.push(
            staticMatchup
                ? getComparisonMatchupHref(staticMatchup.slug)
                : `/compare?products=${compareIds.join(',')}`,
        );
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 bg-foreground text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-black transition-all duration-300 border border-white/20 animate-scale-in",
                    isOpen && "hidden"
                )}
            >
                <ArrowLeftRight className="w-6 h-6" />
                <span className="font-bold hidden md:inline">Compare</span>
            </button>

            <div
                className={cn(
                    "fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-96 z-50 bg-white md:rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border border-border overflow-hidden transition-all duration-300 ease-out",
                    isOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "translate-y-full md:translate-y-12 opacity-0 pointer-events-none"
                )}
            >
                <div className="bg-foreground p-4 flex items-center justify-between text-white">
                    <h3 className="font-bold flex items-center gap-2">
                        <ArrowLeftRight className="w-5 h-5 text-accent" />
                        Compare with {currentProduct}
                    </h3>
                    <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 max-h-[60vh] overflow-y-auto">
                    <p className="text-sm text-muted-foreground mb-4">Select up to 2 products to compare:</p>
                    <div className="space-y-2">
                        {competitors.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => toggleSelection(product.id)}
                                className={cn(
                                    "flex items-center gap-3 p-3 rounded-xl border border-border cursor-pointer transition-all hover:bg-secondary/50",
                                    selected.includes(product.id) && "border-primary bg-primary/5 ring-1 ring-primary"
                                )}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center transition-colors",
                                    selected.includes(product.id) && "bg-primary border-primary"
                                )}>
                                    {selected.includes(product.id) ? <span className="text-white text-xs">✓</span> : null}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium">{product.name}</div>
                                    <div className="text-xs text-muted-foreground">{product.verdict.bestFor}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-4 border-t border-border bg-secondary/30">
                    <button
                        onClick={handleCompare}
                        disabled={selected.length === 0}
                        className="w-full py-3 bg-accent text-accent-foreground font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
                    >
                        Compare {selected.length > 0 ? `(${selected.length})` : ''} Products
                    </button>
                </div>
            </div>
        </>
    );
}
