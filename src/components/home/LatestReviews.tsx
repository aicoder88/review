'use client';

import { Card } from '@/components/ui/card';
import { Calendar, TrendingUp, ArrowRight, Star } from 'lucide-react';
import {
  formatCatalogDate,
  getLatestReviewedProducts,
} from '@/lib/product-catalog';
import { getLatestReviewedDate } from '@/lib/site';

const reviews = getLatestReviewedProducts();
const latestReviewedDate = getLatestReviewedDate();

function getGradient(score: number) {
  if (score >= 9.3) return 'from-[#D9B373] to-[#B38B4D]';
  if (score >= 9) return 'from-primary to-emerald-600';
  if (score >= 8.7) return 'from-accent to-amber-600';
  return 'from-slate-600 to-slate-800';
}

export function LatestReviews() {
  return (
    <section id="latest" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-6 py-2 mb-6 border border-primary/20">
              <Star className="w-4 h-4" />
              <span className="font-semibold text-sm">Latest Review Cycle</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
              Latest <span className="text-gradient-gold font-serif italic">Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl font-light">
              Newest hands-on reviews in the current catalog, updated through {formatCatalogDate(latestReviewedDate)}
            </p>
          </div>
          <a href="/reviews" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300">
            View All Reviews <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="group bg-card border-0 shadow-sm hover:shadow-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                {/* Score Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300`}>
                  <div className="font-mono text-lg font-bold text-white">
                    {review.overallScore}
                  </div>
                </div>

                {/* Trending Badge */}
                {review.latestTrending && (
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <TrendingUp className="w-3 h-3" />
                    <span className="font-bold text-xs uppercase tracking-wide">Trending</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`bg-gradient-to-r ${getGradient(review.overallScore)} text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full`}>
                    {review.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground font-medium">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatCatalogDate(review.lastReviewedAt)}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                  {review.name}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 font-light">
                  {review.summary}
                </p>

                <a href={review.reviewUrl} className="flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all duration-300">
                  Read Full Review <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/reviews" className="inline-flex bg-foreground text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:bg-primary-foreground hover:text-foreground border-2 border-transparent hover:border-foreground">
            Load More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
