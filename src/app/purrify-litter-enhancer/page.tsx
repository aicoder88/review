import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { HowItWorks } from '@/components/purrify/HowItWorks';
import { BeforeAfter } from '@/components/purrify/BeforeAfter';
import { ROICalculator } from '@/components/purrify/ROICalculator';
import { Testimonials } from '@/components/purrify/Testimonials';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Purrify: Make Any Cat Litter Last 2x Longer | Save $360/Year",
  description: "Probiotic cat litter deodorizer that eliminates odor and extends litter life. Works with all brands. 2,847+ happy customers. Money-back guarantee.",
};

export default function PurrifyLandingPage() {
  return (
    <>
      <Header />

      {/* Hero - Above the Fold */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              ✨ As Seen On ReviewCatLitter.com
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Make Any Cat Litter Last 2x Longer
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-95">
              Stop wasting money on half-used litter boxes
            </p>
            <p className="text-xl mb-8 opacity-90">
              Purrify&apos;s probiotic formula eliminates odor at the bacterial source.
              Works with clay, crystal, and natural litters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://www.purrify.ca"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Purrify for $19 →
              </a>
              <Link
                href="/reviews/purrify"
                className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-colors"
              >
                Read Full Review
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm opacity-90">
              <div>✓ Free shipping over $50</div>
              <div>✓ Made in Canada</div>
              <div>✓ 100% money-back guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-emerald-600 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐⭐⭐⭐⭐</span>
              <span>4.8/5 (2,847 reviews)</span>
            </div>
            <div>✓ Works with all litters</div>
            <div>✓ 100% Natural probiotics</div>
            <div>✓ Vet approved</div>
          </div>
        </div>
      </div>

      {/* Problem/Agitation */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tired of Throwing Away Half-Full Litter Boxes?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Most cat parents change litter every 1-2 weeks because of smell—not
            because it&apos;s actually full. That&apos;s $50-80 wasted every month.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <div className="text-4xl mb-3">💸</div>
              <div className="font-bold mb-2">Expensive Waste</div>
              <div className="text-sm text-muted-foreground">
                Throwing away 40% unused litter just because of ammonia smell
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <div className="text-4xl mb-3">😷</div>
              <div className="font-bold mb-2">Masked, Not Eliminated</div>
              <div className="text-sm text-muted-foreground">
                Scented litters just cover up smell, bacteria keeps growing
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <div className="text-4xl mb-3">⏰</div>
              <div className="font-bold mb-2">Constant Maintenance</div>
              <div className="text-sm text-muted-foreground">
                Changing entire boxes weekly is exhausting and wasteful
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Purrify Eliminates Odor at the Bacterial Source
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Unlike scented litters that just mask odor, Purrify&apos;s probiotics actually consume
            the ammonia-producing bacteria
          </p>
          <HowItWorks />
        </div>
      </section>

      {/* Before/After Visual Proof */}
      <BeforeAfter />

      {/* ROI Calculator (Interactive) */}
      <ROICalculator />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Does Purrify really work with any litter?</h3>
              <p className="text-muted-foreground">
                Yes! We&apos;ve tested Purrify with 50+ litter brands including clay, crystal, natural,
                and pellet types. The probiotics work on bacterial odor regardless of litter material.
                Results consistently show 2x extended litter life across all types tested.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">How long does one bag last?</h3>
              <p className="text-muted-foreground">
                One 16oz bag lasts approximately 4 weeks with one cat, 2-3 weeks with multiple cats.
                Apply 1 tablespoon per week per litter box. Cost: $4.75/week for single cat households,
                which is far less than the $20-40 you save by extending litter life.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Is it safe for my cat?</h3>
              <p className="text-muted-foreground">
                Absolutely. Purrify uses natural probiotics (beneficial bacteria) that are completely
                safe for cats, humans, and the environment. Made in Canada with food-grade ingredients.
                Thousands of cats use it daily with zero reported health issues.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">What if it doesn&apos;t work for me?</h3>
              <p className="text-muted-foreground">
                Purrify offers a 100% money-back guarantee. If you don&apos;t see a noticeable reduction
                in odor and extended litter life within 2 weeks, contact them for a full refund.
                No questions asked. That&apos;s how confident they are in their product.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">How quickly does it work?</h3>
              <p className="text-muted-foreground">
                Most users notice a significant reduction in odor within 24-48 hours of first application.
                Full bacterial colonization takes about a week, after which you&apos;ll see maximum odor
                elimination and litter life extension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Save $300+ Per Year?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join 2,847 cat parents who&apos;ve already made the switch to Purrify
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2x</div>
                <div className="text-sm opacity-90">Longer Litter Life</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-sm opacity-90">Odor Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$360</div>
                <div className="text-sm opacity-90">Average Yearly Savings</div>
              </div>
            </div>
          </div>

          <a
            href="https://www.purrify.ca"
            className="inline-block bg-white text-emerald-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Purrify Now - $19
          </a>

          <p className="mt-6 text-sm opacity-90">
            ✓ Ships within 24 hours • ✓ Free shipping over $50 • ✓ 100% money-back guarantee
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
