'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export function ExitIntentOffer() {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasShown = sessionStorage.getItem('exitIntentShown');
    if (hasShown) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed && !shown) {
        setShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed, shown]);

  if (!shown || dismissed) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto relative animate-slide-in-from-bottom">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-4">
          ⏰ Wait! Before You Go...
        </h2>
        <p className="text-lg mb-6">
          Want to save $30/month on cat litter? Purrify makes ANY litter
          last 2x longer. No matter which brand you choose.
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">✓</div>
            <div>
              <div className="font-bold">Works with all litters</div>
              <div className="text-sm text-muted-foreground">Clay, crystal, natural - tested all of them</div>
            </div>
          </div>
        </div>

        <Link
          href="/reviews/purrify"
          prefetch={false}
          onClick={() => setDismissed(true)}
          className="block w-full text-center bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700"
        >
          Show Me How Purrify Works
        </Link>

        <div className="text-center mt-4">
          <button
            onClick={() => setDismissed(true)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            No thanks, I like wasting money on litter
          </button>
        </div>
      </div>
    </div>
  );
}
