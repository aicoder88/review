'use client';

import type { ReactNode } from 'react';
import { ComparisonProvider } from '@/context/ComparisonContext';
import { ComparisonBar } from './ComparisonBar';

interface ComparisonExperienceProps {
    children?: ReactNode;
}

export function ComparisonExperience({ children }: ComparisonExperienceProps) {
    return (
        <ComparisonProvider>
            {children}
            <ComparisonBar />
        </ComparisonProvider>
    );
}
