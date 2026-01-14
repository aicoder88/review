import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string;
}

interface SmartRecommendationProps {
  products: Product[];
}

export function SmartRecommendation({ products }: SmartRecommendationProps) {
  if (products.length === 0) {
    return null;
  }

  // Analyze products to determine recommendation type
  const averagePrice = products.reduce((sum, p) => {
    const price = parseFloat(p.price.replace(/[$,]/g, ''));
    return sum + price;
  }, 0) / products.length;

  const hasBudgetLitter = products.some(p => parseFloat(p.price.replace(/[$,]/g, '')) < 25);
  const hasPremiumLitter = products.some(p => parseFloat(p.price.replace(/[$,]/g, '')) > 35);

  if (hasBudgetLitter) {
    return (
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8 my-8">
        <h3 className="text-2xl font-bold mb-4">💡 Budget Optimization Tip</h3>
        <p className="text-lg mb-4">
          You&apos;re comparing budget-friendly litters. Smart! Here&apos;s how to get
          premium performance without the premium price:
        </p>
        <div className="bg-white rounded-xl p-6 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">🧮</div>
            <div>
              <div className="font-bold text-xl">Your Budget Strategy</div>
              <div className="text-muted-foreground">Save $360/year</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Budget litter (2 bags/month):</span>
              <span className="font-bold">$30/mo</span>
            </div>
            <div className="flex justify-between">
              <span>+ Purrify (1 bag lasts 4 weeks):</span>
              <span className="font-bold">$19/mo</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="font-bold">$49/mo</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded p-3 flex justify-between items-center">
              <span>vs Premium litter alone:</span>
              <span className="line-through text-red-600 font-bold">$75/mo</span>
            </div>
            <div className="text-emerald-600 font-bold text-center text-lg mt-2">
              Save $26/month = $312/year
            </div>
          </div>
        </div>
        <Link
          href="/guides/purrify-budget-litter-hack"
          className="block w-full text-center bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700"
        >
          Show Me The Budget Hack
        </Link>
      </div>
    );
  }

  if (hasPremiumLitter) {
    return (
      <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 my-8">
        <h3 className="text-2xl font-bold mb-4">✨ Premium Performance Boost</h3>
        <p className="text-lg mb-4">
          You&apos;re looking at premium litters. Make them perform even better and
          last 2x longer with Purrify:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">2x</div>
            <div className="text-sm">Longer Lasting</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">99%</div>
            <div className="text-sm">Odor Reduction</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">$35</div>
            <div className="text-sm">Saved Monthly</div>
          </div>
        </div>
        <Link
          href="/reviews/purrify"
          className="block w-full text-center bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-700"
        >
          Supercharge Your Premium Litter
        </Link>
      </div>
    );
  }

  // Default recommendation
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 my-8">
      <h3 className="text-2xl font-bold mb-4">🎯 The Secret: Make Any of These 2x Better</h3>
      <p className="text-lg mb-4">
        Instead of stressing over which litter is &quot;best,&quot; grab Purrify for $19 and make
        any of these litters perform like premium. Tested with all products above.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl">
          <div className="text-3xl font-bold text-emerald-600 mb-2">2x</div>
          <div className="text-sm">Longer Lasting</div>
        </div>
        <div className="bg-white p-4 rounded-xl">
          <div className="text-3xl font-bold text-emerald-600 mb-2">$30</div>
          <div className="text-sm">Saved Per Month</div>
        </div>
        <div className="bg-white p-4 rounded-xl">
          <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
          <div className="text-sm">Natural Probiotics</div>
        </div>
      </div>
      <Link
        href="/reviews/purrify"
        className="block w-full text-center bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700"
      >
        See How Purrify Works →
      </Link>
    </div>
  );
}
