import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeftRight, ArrowRight, BadgeDollarSign, ShieldCheck, Trophy } from 'lucide-react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { ComparisonPageSchemas } from '@/components/seo/PageSchemas';
import { EditorialTrustBox } from '@/components/seo/EditorialTrustBox';
import { buildPageMetadata } from '@/lib/page-metadata';
import {
  type ComparisonProductRecord,
  formatCatalogDate,
  getAllComparisonMatchups,
  getComparisonMatchupBySlug,
  getComparisonMatchupHref,
} from '@/lib/product-catalog';
import { siteUrl } from '@/lib/site';

function buildMetadata(matchupSlug: string): Metadata {
  const matchup = getComparisonMatchupBySlug(matchupSlug);

  if (!matchup) {
    return {
      title: 'Cat Litter Comparison | ReviewCatLitter',
    };
  }

  const [leftProduct, rightProduct] = matchup.products;
  const title = `${leftProduct.name} vs ${rightProduct.name} | Head-to-Head Cat Litter Comparison`;
  const description = `${leftProduct.name} vs ${rightProduct.name}: side-by-side dust, clumping, odor control, tracking, and daily cost. ${matchup.insight.winner.name} wins this matchup for ${matchup.insight.winner.verdict.bestFor.toLowerCase()}.`;
  const canonicalPath = getComparisonMatchupHref(matchup.slug);

  return buildPageMetadata({
    title,
    description,
    path: canonicalPath,
    keywords: [
      `${leftProduct.name} vs ${rightProduct.name}`,
      'cat litter comparison',
      `${leftProduct.brand} comparison`,
      `${rightProduct.brand} comparison`,
    ],
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return buildMetadata(params.slug);
}

export function generateStaticParams() {
  return getAllComparisonMatchups().map((matchup) => ({
    slug: matchup.slug,
  }));
}

function buildComparisonFaqs(
  leftProduct: ComparisonProductRecord,
  rightProduct: ComparisonProductRecord,
  winnerName: string,
  cheapestName: string,
  bestDustName: string,
) {
  return [
    {
      question: `Which is better: ${leftProduct.name} or ${rightProduct.name}?`,
      answer: `${winnerName} comes out ahead in this matchup based on the balance of dust, clumping, odor control, tracking, and day-to-day cost.`,
    },
    {
      question: `Which is cheaper per day: ${leftProduct.name} or ${rightProduct.name}?`,
      answer: `${cheapestName} has the lower daily cost in this head-to-head comparison.`,
    },
    {
      question: `Which has better dust control: ${leftProduct.name} or ${rightProduct.name}?`,
      answer: `${bestDustName} posts the stronger dust-control result in this comparison page.`,
    },
  ];
}

export default function ComparisonMatchupPage({
  params,
}: {
  params: { slug: string };
}) {
  const matchup = getComparisonMatchupBySlug(params.slug);

  if (!matchup) {
    notFound();
  }

  const [leftProduct, rightProduct] = matchup.products;
  const cheapestProduct =
    Number.parseFloat(leftProduct.costPerDay.replace(/[^0-9.]/g, '')) <=
    Number.parseFloat(rightProduct.costPerDay.replace(/[^0-9.]/g, ''))
      ? leftProduct
      : rightProduct;
  const bestDustProduct =
    leftProduct.scores.dust >= rightProduct.scores.dust ? leftProduct : rightProduct;

  const breadcrumbData = [
    { name: 'Home', url: siteUrl },
    { name: 'Compare', url: `${siteUrl}/compare` },
    {
      name: `${leftProduct.name} vs ${rightProduct.name}`,
      url: `${siteUrl}${getComparisonMatchupHref(matchup.slug)}`,
    },
  ];

  const metricCards = [
    {
      label: 'Overall winner',
      value: matchup.insight.winner.name,
      detail: matchup.insight.summary,
      icon: Trophy,
    },
    {
      label: 'Lowest daily cost',
      value: `${cheapestProduct.name} at ${cheapestProduct.costPerDay}/day`,
      detail: 'Budget is often the deciding factor in this tier.',
      icon: BadgeDollarSign,
    },
    {
      label: 'Best dust control',
      value: `${bestDustProduct.name} at ${bestDustProduct.scores.dustMeasurement}`,
      detail: 'Dust performance matters disproportionately in daily use.',
      icon: ShieldCheck,
    },
  ];
  const faqData = buildComparisonFaqs(
    leftProduct,
    rightProduct,
    matchup.insight.winner.name,
    cheapestProduct.name,
    bestDustProduct.name,
  );
  const comparisonDescription = `Compare dust, clumping, odor control, tracking, and daily cost side by side. ${matchup.insight.winner.name} is the better fit here for ${matchup.insight.winner.verdict.bestFor.toLowerCase()}.`;

  return (
    <>
      <ComparisonPageSchemas
        title={`${leftProduct.name} vs ${rightProduct.name}`}
        description={comparisonDescription}
        path={getComparisonMatchupHref(matchup.slug)}
        dateModified={matchup.updatedAt}
        breadcrumbs={breadcrumbData}
        products={matchup.products.map((product) => ({
          name: product.name,
          category: product.category,
          reviewUrl: product.reviewUrl,
          overallScore: product.overallScore,
          price: product.price,
        }))}
        faqs={faqData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-20">
          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">
                <ArrowLeftRight className="w-4 h-4" />
                Head-to-head comparison
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">
                {leftProduct.name} <span className="text-primary">vs</span> {rightProduct.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {comparisonDescription}
              </p>
              <div className="mt-8 text-left">
                <EditorialTrustBox
                  updatedOn={matchup.updatedAt}
                  summary="This comparison page is maintained by the ReviewCatLitter editorial team and grounded in the same scoring framework used across the published review catalog."
                />
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
              {[leftProduct, rightProduct].map((product) => (
                <article
                  key={product.id}
                  className="rounded-3xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <img
                      src={product.image}
                      alt={`${product.name} cat litter product`}
                      className="h-28 w-28 rounded-2xl bg-secondary object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                        {product.category}
                      </div>
                      <h2 className="font-display text-3xl font-bold mb-2">{product.name}</h2>
                      <p className="text-muted-foreground mb-4">{product.summary}</p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl bg-secondary/30 p-3">
                          <div className="text-muted-foreground">Overall score</div>
                          <div className="font-bold text-lg">{product.overallScore}/10</div>
                        </div>
                        <div className="rounded-2xl bg-secondary/30 p-3">
                          <div className="text-muted-foreground">Cost per day</div>
                          <div className="font-bold text-lg">{product.costPerDay}</div>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        Reviewed {formatCatalogDate(product.lastReviewedAt)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-3">
              {metricCards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <card.icon className="w-5 h-5 text-primary mb-3" />
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {card.label}
                  </div>
                  <div className="font-display text-2xl font-bold mb-2">{card.value}</div>
                  <p className="text-sm text-muted-foreground">{card.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-primary" />
                <h2 className="font-display text-3xl font-bold">{matchup.insight.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">{matchup.insight.tradeoff}</p>
              <div className="grid gap-4 md:grid-cols-3">
                {matchup.insight.reasons.map((reason) => (
                  <div key={reason} className="rounded-2xl bg-secondary/20 p-4 text-sm text-foreground">
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 mb-12">
            <div className="max-w-6xl mx-auto">
              <ComparisonTable products={matchup.products} allowRemoval={false} />
            </div>
          </section>

          <section className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto rounded-3xl bg-secondary/20 border border-border p-8">
              <h2 className="font-display text-3xl font-bold mb-4">Read the full reviews</h2>
              <p className="text-muted-foreground mb-6">
                Use this page to choose a winner quickly, then open the full product reviews if
                you want the long-form test notes.
              </p>
              <div className="flex flex-col gap-4 md:flex-row">
                {[leftProduct, rightProduct].map((product) => (
                  <Link
                    key={product.id}
                    href={product.reviewUrl}
                    prefetch={false}
                    className="flex-1 rounded-2xl bg-white px-5 py-4 font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      Full review
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{product.name}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 mt-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-center">Quick Answers</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {faqData.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
