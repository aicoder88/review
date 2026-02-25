'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string;
  lastedWeeks?: string;
}

interface CostCalculatorProps {
  products: Product[];
}

export function CostCalculator({ products }: CostCalculatorProps) {
  const [numCats, setNumCats] = useState(1);
  const [scoopFrequency, setScoopFrequency] = useState('daily');

  const calculateMonthlyCost = (product: Product) => {
    const basePrice = parseFloat(product.price.replace(/[$,]/g, ''));
    const lifeWeeks = product.lastedWeeks ? parseInt(product.lastedWeeks) : 3;
    const weeksPerMonth = 4.33;
    const multiplier = scoopFrequency === 'twice-daily' ? 1.2 : scoopFrequency === 'every-other' ? 0.8 : 1;
    return (basePrice * weeksPerMonth / lifeWeeks * numCats * multiplier).toFixed(2);
  };

  const calculateWithPurrify = (monthlyCost: string) => {
    const cost = parseFloat(monthlyCost);
    // Litter lasts 2x longer, plus $19/month for Purrify (4-week supply)
    return (cost / 2 + (19 / 4.33)).toFixed(2);
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-8 mb-8">
      <h3 className="text-2xl font-bold mb-6">💰 Real Cost Calculator</h3>

      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-bold mb-2">Number of Cats</label>
          <select
            value={numCats}
            onChange={e => setNumCats(parseInt(e.target.value))}
            className="w-full border border-border rounded-lg p-3 bg-white"
          >
            {[1, 2, 3, 4, 5].map(n => (
              <option key={n} value={n}>{n} cat{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-bold mb-2">Scooping Frequency</label>
          <select
            value={scoopFrequency}
            onChange={e => setScoopFrequency(e.target.value)}
            className="w-full border border-border rounded-lg p-3 bg-white"
          >
            <option value="daily">Daily</option>
            <option value="twice-daily">Twice Daily</option>
            <option value="every-other">Every Other Day</option>
          </select>
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2">Product</th>
              <th className="text-right py-3 px-2">Monthly Cost</th>
              <th className="text-right py-3 px-2 text-emerald-600">With Purrify</th>
              <th className="text-right py-3 px-2 text-emerald-600">You Save</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              const monthlyCost = calculateMonthlyCost(product);
              const withPurrify = calculateWithPurrify(monthlyCost);
              const savings = (parseFloat(monthlyCost) - parseFloat(withPurrify)).toFixed(2);

              return (
                <tr key={product.id} className="border-b border-border">
                  <td className="py-3 px-2 font-bold">{product.name}</td>
                  <td className="text-right py-3 px-2">${monthlyCost}</td>
                  <td className="text-right py-3 px-2 text-emerald-600 font-bold">
                    ${withPurrify}
                  </td>
                  <td className="text-right py-3 px-2 text-emerald-600 font-bold">
                    ${savings}/mo
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Purrify CTA */}
      <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-lg mb-1">Save up to $45/month with Purrify</div>
            <div className="text-sm text-muted-foreground">
              Works with all litters above. 100% money-back guarantee.
            </div>
          </div>
          <Link
            href="/reviews/purrify"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
