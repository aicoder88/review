'use client';

import { ComparisonExperience } from '@/components/compare/ComparisonExperience';
import { ComparisonWidget } from './ComparisonWidget';

interface ReviewComparisonIslandProps {
    currentProduct: string;
}

export function ReviewComparisonIsland({ currentProduct }: ReviewComparisonIslandProps) {
    return (
        <ComparisonExperience>
            <ComparisonWidget currentProduct={currentProduct} />
        </ComparisonExperience>
    );
}
