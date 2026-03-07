import Link from 'next/link';
import type { Metadata } from 'next';
import { BadgeCheck, FlaskConical, Scale, ShieldCheck } from 'lucide-react';
import { Footer } from '@/components/home/Footer';
import { Header } from '@/components/home/Header';
import { methodologyPath, reviewTeamPath, siteName, siteUrl, toAbsoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: `Editorial Team | ${siteName}`,
  description:
    'Meet the ReviewCatLitter editorial team and the standards behind our cat litter reviews, comparisons, and testing process.',
  alternates: {
    canonical: reviewTeamPath,
  },
  openGraph: {
    title: `Editorial Team | ${siteName}`,
    description:
      'How ReviewCatLitter reviews products, handles affiliate links, and keeps testing standards consistent.',
    url: toAbsoluteUrl(reviewTeamPath),
    type: 'profile',
  },
};

const principles = [
  'Every featured product is purchased or sourced without favorable placement guarantees.',
  'The team compares odor, dust, clumping, tracking, and day-to-day cost before scoring.',
  'Affiliate relationships never change test scores, category winners, or exclusion decisions.',
  'Pages are revised when hands-on retesting or new comparison data changes the verdict.',
];

export default function ReviewTeamPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${siteUrl}${reviewTeamPath}`,
    name: 'ReviewCatLitter Editorial Team',
    mainEntity: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      publishingPrinciples: `${siteUrl}${methodologyPath}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-10">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Editorial Standards
            </div>
            <h1 className="font-display text-5xl font-bold text-foreground md:text-6xl">
              ReviewCatLitter Editorial Team
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
              We publish cat litter reviews and comparisons only after hands-on testing, side-by-side
              scoring, and an editorial pass that checks the claims against the methodology.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <BadgeCheck className="mb-3 h-6 w-6 text-primary" />
              <h2 className="mb-2 font-display text-2xl font-bold">Who signs the reviews</h2>
              <p className="text-muted-foreground">
                Reviews are published under the ReviewCatLitter editorial team so product scoring,
                test criteria, and updates stay consistent across the site.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <FlaskConical className="mb-3 h-6 w-6 text-primary" />
              <h2 className="mb-2 font-display text-2xl font-bold">What we verify</h2>
              <p className="text-muted-foreground">
                We look at dust, clumping, odor control, tracking, value, and practical tradeoffs
                like bag weight, scent load, and multi-cat usability.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <Scale className="mb-3 h-6 w-6 text-primary" />
              <h2 className="mb-2 font-display text-2xl font-bold">How we handle affiliates</h2>
              <p className="text-muted-foreground">
                Some links earn a commission. That does not change inclusion, ranking, language, or
                the decision to recommend against a product.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <ShieldCheck className="mb-3 h-6 w-6 text-primary" />
              <h2 className="mb-2 font-display text-2xl font-bold">When pages are updated</h2>
              <p className="text-muted-foreground">
                We revise pages when retesting changes the result, when new comparison data matters,
                or when a product changes enough to affect the verdict.
              </p>
            </div>
          </div>

          <section className="mt-10 rounded-2xl border border-border bg-secondary/20 p-8">
            <h2 className="mb-4 font-display text-3xl font-bold">Core principles</h2>
            <ul className="space-y-3 text-muted-foreground">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href={methodologyPath}
                prefetch={false}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary/90"
              >
                Read the methodology
              </Link>
              <Link
                href="/reviews"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-foreground transition-colors hover:bg-secondary"
              >
                Browse reviews
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
