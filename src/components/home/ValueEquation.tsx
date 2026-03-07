'use client';

import { FadeUp, FadeIn, StaggerChildren } from '@/components/ui/motion';
import { Check } from 'lucide-react';
import { getComparisonPageCount, getReviewedProductCount } from '@/lib/site';

const reviewedProductCount = getReviewedProductCount();
const comparisonPageCount = getComparisonPageCount();

export function ValueEquation() {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <FadeUp>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            The <span className="text-gradient-gold italic">Value Equation</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                            We maintain <span className="font-bold">{reviewedProductCount} live reviews</span> and <span className="font-bold">{comparisonPageCount}+ comparison pages</span>.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            You get the truth for free. That&apos;s the deal.
                        </p>
                    </FadeUp>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Costs (Us) */}
                    <FadeIn delay={0.2} className="bg-white rounded-3xl p-8 shadow-xl border border-border relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                We
                            </span>
                            What We Spent:
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <span className="text-lg text-muted-foreground"><strong className="text-foreground">{reviewedProductCount} published reviews</strong> with full scores, pros/cons, and verdicts</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <span className="text-lg text-muted-foreground"><strong className="text-foreground">{comparisonPageCount}+ matchup pages</strong> built from the closest catalog alternatives</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Real product-level notes</strong> on dust, clumping, odor, tracking, and value</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Zero</strong> sponsored reviews or affiliate pressure</span>
                            </li>
                        </ul>
                    </FadeIn>

                    {/* Savings (You) */}
                    <FadeIn delay={0.4} className="bg-foreground text-white rounded-3xl p-8 shadow-xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent font-bold">
                                You
                            </span>
                            What You Save:
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80"><strong className="text-white">$340+/year</strong> saved by choosing the right litter</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80"><strong className="text-white">20+ hours</strong> of confused Amazon research</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80">No more wasting money on <strong className="text-white">litters that don&apos;t work</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80">Instant access to <strong className="text-white">real data</strong>, not marketing hype</span>
                            </li>
                        </ul>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
