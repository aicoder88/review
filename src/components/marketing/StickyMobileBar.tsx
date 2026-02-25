'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface StickyMobileBarProps {
  productName?: string;
}

export function StickyMobileBar({ productName }: StickyMobileBarProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('stickyBarDismissed');
    if (isDismissed) {
      setDismissed(true);
      return;
    }

    // Show after 30 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('stickyBarDismissed', 'true');
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-emerald-600 text-white p-4 shadow-lg md:hidden z-40 animate-slide-in-from-bottom">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm truncate">
            {productName ? `Make ${productName} 2x better` : 'Make any litter 2x better'}
          </div>
          <div className="text-xs opacity-90">Purrify probiotic deodorizer</div>
        </div>
        <Link
          href="/reviews/purrify"
          prefetch={false}
          className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap"
        >
          Learn More
        </Link>
        <button
          onClick={handleDismiss}
          className="text-white/80 hover:text-white flex-shrink-0"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
