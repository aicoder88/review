import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeroProps {
  reviewedProductCount: number;
  comparisonPageCount: number;
}

export function Hero({ reviewedProductCount, comparisonPageCount }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-32 md:pb-32 md:pt-48">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-20%] h-[800px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-10%] h-[600px] w-[600px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 inline-flex animate-in items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-primary shadow-lg fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-bold uppercase tracking-wide">
              {reviewedProductCount} Published Reviews • {comparisonPageCount}+ Comparison Matchups
            </span>
          </div>

          <h1 className="mb-8 animate-in font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground fade-in slide-in-from-bottom-4 duration-700 md:text-7xl lg:text-8xl">
            Best <span className="font-bold text-primary">Cat Litter Reviews</span>, Roundups,
            and Comparisons for Real-World Dust, Odor, Clumping, and Cleanup.
          </h1>

          <div className="mx-auto mb-12 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="mb-4 text-xl leading-relaxed text-foreground md:text-2xl">
              <span className="font-bold text-destructive">Most cat litters still fall short</span>{' '}
              on low dust, odor control, or clean clumping.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Browse {reviewedProductCount} current review pages, category roundups for natural
              litter, odor control, low dust, clumping, and budget shopping, plus{' '}
              {comparisonPageCount}+ side-by-side matchups when you are deciding between close
              alternatives.
            </p>
          </div>

          <div className="mb-16 flex animate-in flex-col items-center justify-center gap-4 fade-in slide-in-from-bottom-4 duration-700 sm:flex-row">
            <a
              href="#featured"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-accent to-amber-500 px-10 py-5 font-display text-xl font-bold text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl sm:w-auto"
            >
              <div className="absolute inset-0 translate-y-full rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">See What Actually Works</span>
              <ArrowRight className="relative z-10 h-6 w-6" />
            </a>
            <Link
              href="/methodology"
              prefetch={false}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-primary/20 px-8 py-4 text-lg font-bold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-white sm:w-auto"
            >
              How We Test
            </Link>
          </div>

          <div className="group relative mx-auto max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 blur-xl transition-all duration-500 group-focus-within:opacity-100 group-hover:opacity-100" />
            <form
              action="/search"
              className="relative flex items-center overflow-hidden rounded-full border-2 border-border bg-white transition-all duration-300 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10"
            >
              <Search className="ml-4 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                name="q"
                placeholder={`Search ${reviewedProductCount} brutally honest reviews...`}
                className="border-none bg-transparent py-6 text-base shadow-none focus-visible:ring-0"
              />
              <button
                type="submit"
                className="mr-2 rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary/90"
                aria-label="Search reviews"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                ['Start With Categories', '#intent-hub'],
                ['Top Picks', '#featured'],
                ['Latest Reviews', '#latest'],
                ['Methodology', '#methodology'],
                ['Find by Need', '#categories'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-border bg-white/80 px-4 py-2 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-[2%] top-1/2 hidden -translate-y-1/2 xl:block">
        <div className="relative aspect-[3/4] w-64 rotate-[-6deg] overflow-hidden rounded-3xl border-4 border-white/50 bg-white/10 shadow-2xl backdrop-blur-sm xl:w-72">
          <Image
            src="/images/cat-hero-1.png"
            alt="Beautiful cat sitting next to a clean litter box"
            fill
            sizes="(min-width: 1280px) 18rem, 0px"
            className="object-cover opacity-90"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute right-[2%] top-1/2 hidden -translate-y-1/2 xl:block">
        <div className="relative aspect-[3/4] w-64 rotate-[6deg] overflow-hidden rounded-3xl border-4 border-white/50 bg-white/10 shadow-2xl backdrop-blur-sm xl:w-72">
          <Image
            src="/images/cat-hero-2.png"
            alt="Happy cat in a clean home environment"
            fill
            sizes="(min-width: 1280px) 18rem, 0px"
            className="object-cover opacity-90"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between xl:hidden">
        <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-sm">
          <span className="text-2xl">🐱</span>
          <span className="text-xs font-bold text-primary">{reviewedProductCount} Reviews</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold text-accent">Review Library</span>
        </div>
      </div>
    </section>
  );
}
