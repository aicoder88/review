'use client';

import { useState } from 'react';
import Link from 'next/link';

export function ROICalculator() {
  const [currentSpend, setCurrentSpend] = useState(50);
  const [numCats, setNumCats] = useState(1);

  const savings = currentSpend * 0.5; // 50% savings with Purrify
  const yearlyBefore = currentSpend * 12;
  const costWithPurrify = (currentSpend * 0.5) + 19;
  const yearlyAfter = costWithPurrify * 12;
  const yearlySavings = yearlyBefore - yearlyAfter;

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Calculate Your Savings
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          See how much you&apos;ll save by making your litter last 2x longer
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {/* Input Sliders */}
          <div className="mb-8">
            <label className="block font-bold mb-3 text-lg">
              Current Monthly Litter Spending: ${currentSpend}
            </label>
            <input
              type="range"
              min="20"
              max="150"
              value={currentSpend}
              onChange={e => setCurrentSpend(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>$20</span>
              <span>$150</span>
            </div>
          </div>

          <div className="mb-8">
            <label className="block font-bold mb-3 text-lg">
              Number of Cats: {numCats}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={numCats}
              onChange={e => setNumCats(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1 cat</span>
              <span>5 cats</span>
            </div>
          </div>

          {/* Results */}
          <div className="border-t-2 border-dashed border-gray-300 pt-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Current Yearly Cost
                </div>
                <div className="text-5xl font-bold text-red-600">
                  ${yearlyBefore.toFixed(0)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  With Purrify (Yearly)
                </div>
                <div className="text-5xl font-bold text-emerald-600">
                  ${yearlyAfter.toFixed(0)}
                </div>
              </div>
            </div>

            <div className="bg-emerald-100 border-2 border-emerald-400 rounded-xl p-6 text-center">
              <div className="text-sm font-bold text-emerald-700 mb-2">
                YOUR YEARLY SAVINGS
              </div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">
                ${yearlySavings.toFixed(0)}
              </div>
              <div className="text-emerald-700">
                That&apos;s {(yearlySavings / 19).toFixed(0)} jars of Purrify... FREE!
              </div>
            </div>
          </div>

          <a
            href="https://www.purrify.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 mt-8 transition-colors"
          >
            Get Purrify for $19 →
          </a>

          <p className="text-center text-sm text-muted-foreground mt-4">
            ✓ Free shipping over $50 • ✓ Money-back guarantee • ✓ Made in Canada
          </p>
        </div>
      </div>
    </section>
  );
}
