'use client';

import Link from 'next/link';
import { Beaker, ClipboardCheck, LineChart, Scale, ArrowRight, ShieldCheck } from 'lucide-react';
import { FadeUp, StaggerChildren, FadeIn } from '@/components/ui/motion';
import { formatSiteDate, getLatestReviewedDate, getReviewedProductCount } from '@/lib/site';

const reviewedProductCount = getReviewedProductCount();
const latestReviewedDate = getLatestReviewedDate();

const methodologyPoints = [
  {
    icon: Scale,
    title: 'Consistent scoring',
    description: 'Every published review uses the same five core lenses: dust, clumping, odor, tracking, and value.',
    color: 'bg-accent/20 text-accent',
  },
  {
    icon: Beaker,
    title: 'Product-level notes',
    description: 'We document the practical tradeoffs that change buying decisions, including texture, scent load, weight, and cleanup feel.',
    color: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    icon: ClipboardCheck,
    title: 'Roundups tied back to reviews',
    description: 'Category winners are not picked in isolation. They are connected back to review pages, comparisons, and guide content.',
    color: 'bg-accent/20 text-accent',
  },
  {
    icon: LineChart,
    title: 'Editorial maintenance',
    description: 'We update roundup pages when newer review data or better comparison coverage changes the recommendation.',
    color: 'bg-emerald-500/20 text-emerald-300',
  },
];

export function Methodology() {
  return (
    <section id="methodology" className="py-24 px-6 bg-foreground relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image & Stats */}
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/images/methodology-lab.png"
                alt="Scientist testing cat litter"
                className="w-full h-full object-cover"
              />

              {/* Overlay Stat Card */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-end gap-4">
                  <div>
                    <span className="block text-4xl font-bold text-accent">{reviewedProductCount}</span>
                    <span className="text-sm text-white/80">Published Reviews</span>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div>
                    <span className="block text-4xl font-bold text-accent">{formatSiteDate(latestReviewedDate)}</span>
                    <span className="text-sm text-white/80">Latest Review</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground z-20 hidden md:block">
              <img
                src="/images/methodology-microscope.png"
                alt="Microscope analysis"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Trust Badge */}
            <div className="absolute top-8 -left-4 bg-accent text-foreground px-6 py-3 rounded-full shadow-xl z-20 flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-bold">Editorial Standards</span>
            </div>
          </div>
          {/* Right: Content */}
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-8">
                <Beaker className="w-4 h-4 text-accent" />
                <span className="text-white/80 font-medium text-sm tracking-wide">How We Evaluate Reviews</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                How We Keep the Catalog <span className="text-gradient-gold italic">Comparable</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                ReviewCatLitter exists to make cat litter shopping easier to audit. Instead of repeating
                packaging claims, we keep review pages on a shared scoring framework, explain the tradeoffs
                in plain language, and connect winners back to the review and comparison pages they came from.
              </p>
            </FadeUp>

            {/* Methodology Points */}
            <StaggerChildren className="space-y-8">
              {methodologyPoints.map((point, index) => (
                <FadeUp key={index} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-16 h-16 ${point.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-sm">
                      {point.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>

            <FadeUp delay={0.4}>
              <Link
                href="/methodology"
                prefetch={false}
                className="group mt-12 inline-flex items-center gap-2 text-accent font-bold text-lg hover:text-white transition-colors"
              >
                Read Full Methodology <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
