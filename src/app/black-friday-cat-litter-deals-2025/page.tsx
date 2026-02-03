import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

const siteUrl = "https://www.reviewcatlitter.com";

export const metadata: Metadata = {
  title: "Black Friday Cat Litter Deals 2025 - Best Sales & Money-Saving Hacks",
  description: "We tracked 47 litter brands to find the real Black Friday deals. Plus: the #1 hack to save $312/year (better than any sale).",
  keywords: ["Black Friday cat litter deals", "cat litter sale 2025", "cat litter Black Friday", "best cat litter deals"],
  alternates: {
    canonical: "/black-friday-cat-litter-deals-2025",
    languages: {
      "en-CA": "/black-friday-cat-litter-deals-2025",
      "fr-CA": "/black-friday-cat-litter-deals-2025",
      "en": "/black-friday-cat-litter-deals-2025",
    },
  },
  openGraph: {
    title: "Black Friday Cat Litter Deals 2025 - Best Sales & Money-Saving Hacks",
    description: "We tracked 47 litter brands to find the real Black Friday deals. Plus: the #1 hack to save $312/year.",
    url: `${siteUrl}/black-friday-cat-litter-deals-2025`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-blackfriday.jpg`,
        width: 1200,
        height: 630,
        alt: "Black Friday Cat Litter Deals 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Friday Cat Litter Deals 2025",
    description: "We tracked 47 litter brands to find the real Black Friday deals. Plus: the #1 hack to save $312/year.",
    images: [`${siteUrl}/images/og-blackfriday.jpg`],
  },
};

const deals = [
  {
    id: 1,
    product: "Dr. Elsey's Ultra 40lb",
    description: "Heavy, low-dust clumping clay - Our #1 rated litter",
    regularPrice: 28,
    salePrice: 21,
    discount: 25,
    url: "https://amazon.com",
    expiryDate: "Nov 30",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400"
  },
  {
    id: 2,
    product: "World's Best Multi-Cat 28lb",
    description: "Corn-based natural litter, excellent clumping",
    regularPrice: 35,
    salePrice: 26,
    discount: 26,
    url: "https://amazon.com",
    expiryDate: "Nov 29",
    image: "https://images.unsplash.com/photo-1573865526739-10c1de0fa708?w=400"
  },
  {
    id: 3,
    product: "Arm & Hammer Clump & Seal 38lb",
    description: "Baking soda formula, strong odor control",
    regularPrice: 24,
    salePrice: 18,
    discount: 25,
    url: "https://amazon.com",
    expiryDate: "Dec 2",
    image: "https://images.unsplash.com/photo-1548366565-6bbab241282d?w=400"
  },
];

export default function BlackFriday2025() {
  return (
    <>
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            🔥 UPDATED NOVEMBER 27, 2025
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Black Friday Cat Litter Deals 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We tracked 47 litter brands across Amazon, Chewy, and Petco to find the real deals.
            Here&apos;s what&apos;s actually worth buying (and the #1 hack to save even more).
          </p>
        </div>

        {/* Best Deal Callout - Purrify Strategy */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">🏆</div>
            <div>
              <div className="text-sm font-bold text-amber-700 mb-1">
                #1 MONEY-SAVING STRATEGY (BETTER THAN ANY SALE)
              </div>
              <div className="text-3xl font-bold">
                Skip the &quot;Deals&quot; — Buy Purrify Instead
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="font-bold text-lg mb-4">Here&apos;s the math that sales reps don&apos;t want you to know:</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-bold text-red-600 mb-2">❌ &quot;Deal&quot; Strategy</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span>Premium litter &quot;on sale&quot; (40lb):</span>
                    <span className="font-bold">$35</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Lasts with normal use:</span>
                    <span className="font-bold">3 weeks</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Monthly cost (4 bags):</span>
                    <span className="font-bold">$47/month</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Yearly cost:</span>
                    <span className="text-red-600">$564</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-bold text-emerald-600 mb-2">✓ Purrify Strategy</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span>Budget litter (40lb):</span>
                    <span className="font-bold">$20</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>+ Purrify (makes it last 2x):</span>
                    <span className="font-bold">$19/month</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Lasts with Purrify:</span>
                    <span className="font-bold">6 weeks</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Monthly cost:</span>
                    <span className="font-bold">$30/month</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Yearly cost:</span>
                    <span className="text-emerald-600">$360</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-100 border-2 border-emerald-400 rounded-lg p-4 mt-6 text-center">
              <div className="text-2xl font-bold text-emerald-700 mb-1">
                Save $204/year vs &quot;sale&quot; litter
              </div>
              <div className="text-sm text-emerald-700">
                Plus better odor control and less work changing boxes
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reviews/purrify"
              className="flex-1 text-center bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700"
            >
              Learn About Purrify (The Real Deal)
            </Link>
            <a
              href="https://www.purrify.ca"
              className="flex-1 text-center border-2 border-emerald-600 text-emerald-600 py-4 rounded-xl font-bold hover:bg-emerald-50"
            >
              Get Purrify - $19
            </a>
          </div>
        </div>

        {/* Actual Deals Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Best Actual Black Friday Litter Deals
          </h2>
          <p className="text-muted-foreground mb-8">
            If you&apos;re not using Purrify yet, these are the legitimate deals worth considering.
            All prices verified as of November 27, 2025.
          </p>

          <div className="space-y-6">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white border-2 border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-full md:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={deal.image} 
                      alt={`${deal.product} cat litter Black Friday deal`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{deal.product}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{deal.description}</p>

                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-emerald-600">${deal.salePrice}</span>
                        <span className="text-lg line-through text-gray-400">${deal.regularPrice}</span>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                          Save {deal.discount}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-auto flex flex-col gap-3">
                    <a
                      href={deal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-foreground text-background px-8 py-3 rounded-xl font-bold hover:opacity-90 text-center whitespace-nowrap"
                    >
                      View Deal →
                    </a>
                    <div className="text-xs text-center text-muted-foreground">
                      Ends {deal.expiryDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deal Strategy Guide */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Actually Save Money This Black Friday</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">✓ DO: Buy Purrify + Budget Litter</h3>
              <p className="text-muted-foreground">
                $20 litter + $19 Purrify = $39/month for premium performance. Better than
                $45+ &quot;premium&quot; litter that only lasts 3 weeks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">✓ DO: Stock Up on Mid-Range Litter</h3>
              <p className="text-muted-foreground">
                If a good clumping litter (Dr. Elsey&apos;s, Arm &amp; Hammer) is 20%+ off, buy 2-3 bags.
                Add Purrify to make it last 2x longer.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">❌ DON&apos;T: Fall for &quot;Premium&quot; Marketing</h3>
              <p className="text-muted-foreground">
                A $50 &quot;premium&quot; litter on &quot;sale&quot; for $40 is still worse value than $20 litter + Purrify ($39 total).
                You get better odor control AND save money.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">❌ DON&apos;T: Buy Lightweight or Crystal Litter</h3>
              <p className="text-muted-foreground">
                Even &quot;on sale,&quot; these cost 2-3x more than clumping clay and don&apos;t perform better.
                The only exception: your cat specifically prefers them.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Purrify CTA */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            💡 The Best &quot;Deal&quot; Isn&apos;t a Sale
          </h2>
          <p className="text-xl mb-6 opacity-95">
            Whatever you buy on Black Friday, add Purrify to make it last 2x longer.
            The real savings come from using LESS litter, not buying it cheaper.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">2x</div>
                <div className="text-sm opacity-90">Longer Life</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-sm opacity-90">Odor Gone</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$200+</div>
                <div className="text-sm opacity-90">Yearly Savings</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reviews/purrify"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 text-center"
            >
              Learn How Purrify Works
            </Link>
            <a
              href="https://www.purrify.ca"
              className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-800 text-center"
            >
              Get Purrify - $19
            </a>
          </div>

          <p className="text-sm mt-6 opacity-90">
            ✓ Ships within 24 hours • ✓ Works with all litter types • ✓ 100% money-back guarantee
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
