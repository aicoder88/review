import Link from 'next/link';
import { ArrowRight, Droplets, Leaf, Scale, ShieldCheck, Sparkles, Wind } from 'lucide-react';

const topics = [
  {
    title: 'Best Cat Litter Picks',
    description:
      'Start with the editorial standouts, then move into full reviews if you want the reasoning behind each winner.',
    href: '#featured',
    cta: 'See top picks',
    icon: Sparkles,
  },
  {
    title: 'Cat Litter Reviews',
    description:
      'Use the review library when you already have a brand in mind and want the score, tradeoffs, and buying context in one place.',
    href: '/reviews',
    cta: 'Browse reviews',
    icon: ShieldCheck,
  },
  {
    title: 'Odor Control',
    description:
      'Compare scented and unscented approaches, then jump into smell-focused roundups and cleanup guides.',
    href: '/categories/best-odor-control-cat-litter',
    cta: 'Explore odor control',
    icon: Droplets,
  },
  {
    title: 'Low Dust',
    description:
      'Find litter options that stay cleaner during pours and scoops without ignoring clumping or day-to-day usability.',
    href: '/categories/best-low-dust-cat-litter',
    cta: 'See low-dust picks',
    icon: Wind,
  },
  {
    title: 'Clumping and Cleanup',
    description:
      'Shortlist formulas that form cleaner clumps, last longer between full changes, and make daily scooping easier.',
    href: '/categories/best-clumping-cat-litter',
    cta: 'See clumping picks',
    icon: Scale,
  },
  {
    title: 'Natural and Plant-Based Litter',
    description:
      'Review the tradeoffs around flushability, texture, odor, and price before switching from clay to a natural formula.',
    href: '/categories/best-natural-cat-litter',
    cta: 'See natural picks',
    icon: Leaf,
  },
];

export function SearchIntentHub() {
  return (
    <section id="intent-hub" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            Topic Guide
          </div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Find the best cat litter by problem, not by packaging copy
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            ReviewCatLitter.com is organized around the main ways people search for litter help:
            best cat litter picks, cat litter reviews, odor control, low dust, clumping
            performance, natural litter, and side-by-side comparisons.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Use the roundups when you want a fast shortlist, the review library when you want
            product-level detail, and the comparison tool when you are deciding between two close
            alternatives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div key={topic.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{topic.title}</h3>
                <p className="mt-4 text-muted-foreground leading-7">{topic.description}</p>
                <Link
                  href={topic.href}
                  prefetch={false}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-primary hover:gap-3 transition-all"
                >
                  {topic.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
