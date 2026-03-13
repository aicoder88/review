'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ComparisonTable, DetailedProduct } from '@/components/compare/ComparisonTable';
import { PurrifyEnhancement } from '@/components/compare/PurrifyEnhancement';
import { CostCalculator } from '@/components/compare/CostCalculator';
import { SmartRecommendation } from '@/components/compare/SmartRecommendation';
import { useComparison } from '@/context/ComparisonContext';
import { FadeUp } from '@/components/ui/motion';
import { getComparisonProductsByIds } from '@/lib/product-catalog';

export function ComparePageComparisonSection() {
    const searchParams = useSearchParams();
    const { products: contextProducts } = useComparison();
    const [displayProducts, setDisplayProducts] = useState<DetailedProduct[]>([]);

    useEffect(() => {
        const urlIds = searchParams.get('products')?.split(',');
        const contextIds = contextProducts.map((product) => product.id);
        const targetIds = urlIds && urlIds.length > 0 ? urlIds : contextIds;

        setDisplayProducts(getComparisonProductsByIds(targetIds));
    }, [searchParams, contextProducts]);

    const adaptedProducts = displayProducts.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        lastedWeeks: product.longevity?.single?.replace(/\D/g, '') || '4',
    }));

    return (
        <section className="container mx-auto px-6 mb-24">
            <FadeUp>
                <ComparisonTable products={displayProducts} />
            </FadeUp>
            {displayProducts.length > 0 ? (
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
            ) : null}
        </section>
    );
}
