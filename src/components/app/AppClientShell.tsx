'use client';

import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { ComparisonProvider } from '@/context/ComparisonContext';

const ComparisonBar = dynamic(
  () => import('@/components/compare/ComparisonBar').then((mod) => mod.ComparisonBar),
);
const ExitIntentOffer = dynamic(
  () => import('@/components/marketing/ExitIntentOffer').then((mod) => mod.ExitIntentOffer),
  { ssr: false },
);

function isComparisonRoute(pathname: string) {
  return pathname.startsWith('/compare') || pathname.startsWith('/reviews');
}

export function AppClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '';
  const showComparison = isComparisonRoute(pathname);
  const showExitIntent = pathname === '/';

  if (showComparison) {
    return (
      <ComparisonProvider>
        {children}
        <ComparisonBar />
        {showExitIntent ? <ExitIntentOffer /> : null}
      </ComparisonProvider>
    );
  }

  return (
    <>
      {children}
      {showExitIntent ? <ExitIntentOffer /> : null}
    </>
  );
}
