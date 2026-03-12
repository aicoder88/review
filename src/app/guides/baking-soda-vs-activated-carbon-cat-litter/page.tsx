import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Scale, ShieldCheck, Wind } from 'lucide-react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { InternalLinkBox } from '@/components/content/InternalLinkBox';
import { ArticlePageSchemas } from '@/components/seo/PageSchemas';
import { EditorialTrustBox } from '@/components/seo/EditorialTrustBox';
import { buildGuideMetadata, getGuidePageDefinition } from '@/lib/guide-pages';
import { formatSiteDate, siteUrl } from '@/lib/site';

const guide = getGuidePageDefinition('baking-soda-vs-activated-carbon-cat-litter');

export const metadata: Metadata = buildGuideMetadata('baking-soda-vs-activated-carbon-cat-litter');

const faqData = [
  {
    question: 'Is baking soda or activated carbon better for cat litter odor control?',
    answer:
      'Activated carbon is usually the better fit when you want fragrance-free ammonia control, while baking soda is the cheaper and more available budget option.',
  },
  {
    question: 'Does baking soda make cat litter dustier?',
    answer:
      'It can. A light amount is usually manageable, but overusing baking soda can add fine powder and make a litter box feel dustier during pours and scooping.',
  },
  {
    question: 'Can activated carbon fix a bad litter by itself?',
    answer:
      'No. It can improve odor control, but it will not fix weak clumping, a dirty litter box, or a formula that tracks badly outside the box.',
  },
];

const comparisonRows = [
  {
    label: 'Main job',
    bakingSoda: 'Cheap odor neutralization layer',
    activatedCarbon: 'Fragrance-free adsorption of sharp urine odor',
  },
  {
    label: 'Best fit',
    bakingSoda: 'Budget clay setups and store-bought odor boost',
    activatedCarbon: 'Homes that want less perfume and stronger ammonia focus',
  },
  {
    label: 'Cost profile',
    bakingSoda: 'Lowest-cost entry point',
    activatedCarbon: 'Usually costs more, but can feel cleaner to live with',
  },
  {
    label: 'Dust risk',
    bakingSoda: 'Can add powder if overused',
    activatedCarbon: 'Usually lower if the granules are dense and coarse',
  },
  {
    label: 'What it does not fix',
    bakingSoda: 'Weak clumps, dirty boxes, heavy tracking',
    activatedCarbon: 'Weak clumps, dirty boxes, heavy tracking',
  },
];

export default function BakingSodaVsActivatedCarbonGuide() {
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
          { name: 'Baking Soda vs Activated Carbon', url: `${siteUrl}${guide.path}` },
        ]}
        faqs={faqData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-20">
          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-6">
                <Scale className="w-4 h-4" />
                Odor-Control Comparison
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Baking Soda vs Activated Carbon for Cat Litter Odor Control
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                If your main problem is smell, these two approaches solve different versions of it.
                Baking soda is the cheaper budget move. Activated carbon is usually the cleaner
                fragrance-free move.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>{guide.readTime}</span>
                <span>•</span>
                <span>Updated {formatSiteDate(guide.dateModified)}</span>
              </div>
              <div className="mt-8 text-left">
                <EditorialTrustBox
                  updatedOn={guide.dateModified}
                  summary="This comparison guide is maintained by the ReviewCatLitter editorial team and draws on the site's odor-control reviews, category pages, and comparison framework."
                />
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold mb-4">Quick answer</h2>
              <p className="text-lg text-muted-foreground">
                Choose <strong>baking soda</strong> if you want the cheapest odor-control upgrade and
                can live with a more basic result. Choose <strong>activated carbon</strong> if you want
                stronger ammonia-focused odor control without turning the room into a perfume cloud.
              </p>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-border bg-white shadow-sm">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/20">
                    <th className="p-4 text-left font-display text-xl">What matters</th>
                    <th className="p-4 text-left font-display text-xl">Baking soda</th>
                    <th className="p-4 text-left font-display text-xl">Activated carbon</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <th className="p-4 text-left align-top font-semibold">{row.label}</th>
                      <td className="p-4 text-muted-foreground align-top">{row.bakingSoda}</td>
                      <td className="p-4 text-muted-foreground align-top">{row.activatedCarbon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  When Baking Soda Wins
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">The better budget move</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Baking soda makes the most sense when price and availability matter more than
                    refinement. It shows up often in clay formulas aimed at budget-conscious shoppers
                    who want better smell control without buying a premium litter.
                  </p>
                  <p>
                    It is best treated as a modest odor-control layer, not a miracle fix. If the base
                    litter clumps badly, stays wet, or already tracks all over the room, baking soda
                    will not rescue the whole setup.
                  </p>
                  <p>
                    The biggest drawback is that overdoing it can make the box feel dustier. That is
                    part of the tradeoff with a fine powder ingredient.
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  <Wind className="w-4 h-4" />
                  When Activated Carbon Wins
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">The cleaner smell-control move</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Activated carbon is the better fit when you care most about sharp urine smell and
                    want a fragrance-free result. This matters in small apartments, closed laundry
                    rooms, and homes where heavily scented litter feels worse than the odor itself.
                  </p>
                  <p>
                    It also tends to be the better choice when you want to improve odor control while
                    keeping your cat on the same base litter texture. In practice, that can be a more
                    realistic upgrade path than switching litters entirely.
                  </p>
                  <p>
                    The tradeoff is cost. Activated carbon usually earns its keep on comfort and odor
                    quality, not because it is the absolute cheapest option.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-display text-3xl font-bold mb-4">What neither option fixes</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-secondary/20 p-5">
                  <div className="font-semibold mb-2">Weak clumping</div>
                  <p className="text-sm text-muted-foreground">
                    If clumps break apart, dirty litter stays behind and the box smells faster no matter
                    which odor-control ingredient you choose.
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/20 p-5">
                  <div className="font-semibold mb-2">A dirty litter box</div>
                  <p className="text-sm text-muted-foreground">
                    No odor-control method replaces regular scooping and periodic full-box cleaning.
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/20 p-5">
                  <div className="font-semibold mb-2">Tracking outside the box</div>
                  <p className="text-sm text-muted-foreground">
                    Tracking is driven more by litter texture, box design, and mat setup than by the
                    odor-control ingredient itself.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto rounded-3xl border border-border bg-secondary/20 p-8">
              <h2 className="font-display text-3xl font-bold mb-4">How to decide in 30 seconds</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Choose <strong>baking soda</strong> if you want the lowest-cost odor-control option,
                  buy mostly clay litter, and do not mind a more basic result.
                </p>
                <p>
                  Choose <strong>activated carbon</strong> if you want odor control that feels less
                  perfumed, more ammonia-focused, and easier to live with in a small indoor space.
                </p>
                <p>
                  If you are still narrowing the field, move next to the odor-control roundup or the
                  side-by-side compare hub instead of picking by ingredient alone.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/categories/best-odor-control-cat-litter"
                  prefetch={false}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-white"
                >
                  Open odor-control picks
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/compare"
                  prefetch={false}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-foreground"
                >
                  Compare litters side by side
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <InternalLinkBox
                title="Related comparisons"
                links={[
                  { text: 'Best Odor Control Cat Litter', url: '/categories/best-odor-control-cat-litter', context: 'category' },
                  { text: 'How to Eliminate Litter Smell', url: '/guides/eliminate-litter-smell', context: 'guide' },
                  { text: 'Arm & Hammer HardBall review', url: '/reviews/hardball', context: 'review' },
                  { text: 'Compare cat litters side by side', url: '/compare', context: 'guide' },
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
