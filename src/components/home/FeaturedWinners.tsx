import Image from 'next/image';
import { Star, Crown, Award, Sparkles, ArrowRight, Check, Zap } from 'lucide-react';
import Link from 'next/link';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import type { HomeFeaturedWinner } from '@/lib/homepage';

const iconMap = {
  crown: Crown,
  sparkles: Sparkles,
  award: Award,
  star: Star,
} as const;

interface FeaturedWinnersProps {
  featuredProducts: HomeFeaturedWinner[];
  reviewedProductCount: number;
}

export function FeaturedWinners({
  featuredProducts,
  reviewedProductCount,
}: FeaturedWinnersProps) {
  return (
    <section id="featured" className="py-24 px-6 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-border text-foreground/80 rounded-full px-4 py-1.5 mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Crown className="w-4 h-4 text-accent" />
            <span className="font-semibold text-sm tracking-wide">Editorial Standouts</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our <span className="text-gradient-gold italic font-serif">{featuredProducts.length} Top Picks</span> Right Now
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {reviewedProductCount} published reviews, narrowed down to the standout products we would buy again.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
            These are the clearest winners in the current review catalog. No marketing fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${product.featuredSize === 'large' ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className="relative h-full flex flex-col">
                <div className={`relative overflow-hidden ${product.featuredSize === 'large' ? 'aspect-[16/9] md:aspect-auto md:h-full md:flex-1' : 'aspect-[4/3]'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes={product.featuredSize === 'large'
                      ? '(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw'
                      : '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw'}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className={`absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-gradient-to-r ${product.featuredGradient} px-3 py-1.5 text-white shadow-lg`}>
                    {(() => {
                      const BadgeIcon = iconMap[product.featuredIcon];
                      return <BadgeIcon className="w-3.5 h-3.5" />;
                    })()}
                    <span className="font-bold text-[10px] md:text-xs tracking-wide uppercase">{product.featuredBadge}</span>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border border-white/50 bg-white/90 shadow-lg backdrop-blur-md">
                      <span className="mb-0.5 text-[10px] font-bold uppercase leading-none text-muted-foreground">Score</span>
                      <span className="text-lg font-bold leading-none text-primary">{product.overallScore}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20">
                  <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-2">{product.category}</div>
                  <h3 className={`font-display font-bold text-foreground mb-4 leading-tight ${product.featuredSize === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {product.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.featuredSpecs.map((spec, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md">
                        <Check className="w-3 h-3 text-primary" /> {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-xs text-muted-foreground mb-1">Cost per day</div>
                    <div className="text-2xl font-bold text-accent">{product.costPerDay}</div>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-foreground/80">{product.worthIf}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span className="text-foreground/80">{product.skipIf}</span>
                    </div>
                  </div>

                  <Link href={product.reviewUrl} prefetch={false} className="mt-auto pt-4 border-t border-border flex items-center justify-between group-hover:text-primary transition-colors">
                    <span className="font-bold text-sm">Read Full Review</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <Link href="/reviews" prefetch={false} className="px-8 py-4 bg-white border-2 border-border hover:border-primary text-foreground font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-lg inline-flex items-center gap-2">
            View All {reviewedProductCount} Reviews <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span>Pro tip: Pair any winner with</span>
            <PurrifyLink variant="inline">Purrify</PurrifyLink>
            <span>activated coconut carbon to double its lifespan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
