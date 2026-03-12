import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Calculator, Coins, Wallet } from 'lucide-react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { InternalLinkBox } from '@/components/content/InternalLinkBox';
import { ArticlePageSchemas } from '@/components/seo/PageSchemas';
import { EditorialTrustBox } from '@/components/seo/EditorialTrustBox';
import { buildGuideMetadata, getGuidePageDefinition } from '@/lib/guide-pages';
import { productCatalog } from '@/lib/product-catalog';
import { formatSiteDate, siteUrl } from '@/lib/site';

const guide = getGuidePageDefinition('real-cat-litter-cost-comparison');

export const metadata: Metadata = buildGuideMetadata('real-cat-litter-cost-comparison');

const featuredProducts = [
  'arm-hammer-super-scoop',
  'dr-elseys-ultra',
  'worlds-best',
  'tuft-paw',
]
  .map((id) => productCatalog.find((product) => product.id === id))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));

const faqData = [
  {
    question: 'What is the best way to compare cat litter cost?',
    answer:
      'Use cost per day or monthly cost, not bag price alone. Cheap litter can become expensive if it smells out quickly or needs frequent full changes.',
  },
  {
    question: 'Is premium cat litter always a worse value?',
    answer:
      'No. Premium litter can be the better value when it clumps cleanly, lasts longer, and reduces how often you replace the whole box.',
  },
  {
    question: 'Is natural litter always more expensive?',
    answer:
      'Natural litter is often more expensive up front, but the real value depends on how well it controls odor, tracks, and lasts in your specific setup.',
  },
];

function parseMoney(value: string) {
  const parsed = Number.parseFloat(value.replace(/[^0-9.]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function RealCatLitterCostComparisonGuide() {
  if (!guide) {
    return null;
  }

  return (
    <>
      <ArticlePageSchemas
        headline={guide.title}
        description={guide.description}
        path={guide.path}
        image={guide.image}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        keywords={guide.keywords}
        articleSection="Guides"
        breadcrumbs={[
          { name: 'Home', url: siteUrl },
          { name: 'Guides', url: `${siteUrl}/guides` },
          { name: 'Real Cat Litter Cost Comparison', url: `${siteUrl}${guide.path}` },
        ]}
        faqs={faqData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-20">
          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-6">
                <Calculator className="w-4 h-4" />
                Cost Comparison Guide
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Real Cat Litter Cost Comparison: Cheap vs Premium vs Natural
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bag price is only the opening number. The real cost shows up in cost per day, how long
                the litter stays usable, and how often smell forces a full-box reset.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>{guide.readTime}</span>
                <span>•</span>
                <span>Updated {formatSiteDate(guide.dateModified)}</span>
              </div>
              <div className="mt-8 text-left">
                <EditorialTrustBox
                  updatedOn={guide.dateModified}
                  summary="This guide is maintained by the ReviewCatLitter editorial team and uses the same catalog pricing, cost-per-day, and review data that power the comparison pages."
                />
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold mb-4">Quick answer</h2>
              <p className="text-lg text-muted-foreground">
                The cheapest bag is not always the cheapest litter. A better cost comparison uses
                <strong> cost per day</strong>, <strong>estimated monthly spend</strong>, and the cleanup
                tradeoffs that determine whether you keep or replace the box early.
              </p>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-6xl mx-auto overflow-x-auto rounded-3xl border border-border bg-white shadow-sm">
              <table className="w-full min-w-[920px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/20">
                    <th className="p-4 text-left font-display text-xl">Product</th>
                    <th className="p-4 text-left font-display text-xl">Type</th>
                    <th className="p-4 text-left font-display text-xl">Bag price</th>
                    <th className="p-4 text-left font-display text-xl">Cost/day</th>
                    <th className="p-4 text-left font-display text-xl">Est. monthly</th>
                    <th className="p-4 text-left font-display text-xl">Est. yearly</th>
                    <th className="p-4 text-left font-display text-xl">What you are paying for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {featuredProducts.map((product) => {
                    const monthlyCost = parseMoney(product.costPerDay) * 30;
                    const yearlyCost = monthlyCost * 12;

                    return (
                      <tr key={product.id}>
                        <td className="p-4 align-top">
                          <Link href={product.reviewUrl} prefetch={false} className="font-semibold hover:text-primary">
                            {product.name}
                          </Link>
                        </td>
                        <td className="p-4 align-top text-muted-foreground">{product.type}</td>
                        <td className="p-4 align-top font-medium">{product.price}</td>
                        <td className="p-4 align-top font-medium">{product.costPerDay}</td>
                        <td className="p-4 align-top font-medium">{formatCurrency(monthlyCost)}</td>
                        <td className="p-4 align-top font-medium">{formatCurrency(yearlyCost)}</td>
                        <td className="p-4 align-top text-muted-foreground">{product.verdict.bestFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
              <article className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  <Wallet className="w-4 h-4" />
                  Cheap
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">Lowest sticker price</h2>
                <p className="text-muted-foreground">
                  Cheap litter wins if you only care about checkout price. It loses quickly if odor,
                  dust, or weak clumps make you replace the whole box earlier than planned.
                </p>
              </article>

              <article className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  <Coins className="w-4 h-4" />
                  Premium
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">Better day-to-day value</h2>
                <p className="text-muted-foreground">
                  Premium litter earns its price when it stays cleaner, clumps harder, and buys back
                  time and odor comfort. That is why some premium clay formulas beat mid-tier products
                  on real value even with a higher bag price.
                </p>
              </article>

              <article className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  <Calculator className="w-4 h-4" />
                  Natural
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">Paying for tradeoffs</h2>
                <p className="text-muted-foreground">
                  Natural litter often costs more per bag and per day, but some shoppers are paying for
                  flushability, weight, plant-based materials, or less tracking rather than raw savings.
                </p>
              </article>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-display text-3xl font-bold mb-4">Why bag price lies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A low bag price can still turn into expensive litter if the clumps break apart, the
                  box smells early, or the formula tracks enough that you stop wanting it in the house.
                </p>
                <p>
                  A higher-priced litter can be the better value when it gives you cleaner scoops,
                  longer usable life, and fewer emergency full changes. That is why cost per day is a
                  more honest comparison than shelf price.
                </p>
                <p>
                  The right question is not &quot;Which bag is cheapest?&quot; It is &quot;Which option gives me the
                  lowest monthly spend for the cleanup experience I can tolerate?&quot;
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto rounded-3xl border border-border bg-secondary/20 p-8">
              <h2 className="font-display text-3xl font-bold mb-4">Use the guide, then run the live calculator</h2>
              <p className="text-muted-foreground mb-6">
                This page gives you the indexable cost framework. The compare tool lets you change the
                assumptions for your own home, including cat count and scooping frequency.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/compare"
                  prefetch={false}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-white"
                >
                  Open the compare tool
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/categories/best-budget-cat-litter"
                  prefetch={false}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-foreground"
                >
                  Open budget picks
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <InternalLinkBox
                title="Related value pages"
                links={[
                  { text: 'Compare cat litters side by side', url: '/compare', context: 'guide' },
                  { text: 'Best Budget Cat Litter', url: '/categories/best-budget-cat-litter', context: 'category' },
                  { text: 'How to make litter last longer', url: '/guides/extend-cat-litter-life', context: 'guide' },
                  { text: "Dr. Elsey's Ultra review", url: '/reviews/dr-elseys-ultra', context: 'review' },
                ]}
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
