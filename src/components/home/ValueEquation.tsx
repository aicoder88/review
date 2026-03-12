import { Check } from 'lucide-react';
interface ValueEquationProps {
  reviewedProductCount: number;
  comparisonPageCount: number;
}

export function ValueEquation({
  reviewedProductCount,
  comparisonPageCount,
}: ValueEquationProps) {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        How to Use the <span className="text-gradient-gold italic">Review Catalog</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                        We maintain <span className="font-bold">{reviewedProductCount} live reviews</span> and <span className="font-bold">{comparisonPageCount}+ comparison pages</span>.
                    </p>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        The goal is simple: help you shortlist faster without pretending every home needs the same litter.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-border relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                1
                            </span>
                            What We Publish
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
                                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Product-level notes</strong> on dust, clumping, odor, tracking, and value</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Methodology and editorial pages</strong> that explain how recommendations are maintained</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-foreground text-white rounded-3xl p-8 shadow-xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent font-bold">
                                2
                            </span>
                            How Readers Use It
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80"><strong className="text-white">Use category pages</strong> when you know the problem first, like odor, dust, clumping, or natural materials.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80"><strong className="text-white">Use review pages</strong> when you want the score, tradeoffs, and verdict on one specific product.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80"><strong className="text-white">Use comparison pages</strong> when two shortlists look close and you need to see the tradeoffs directly.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span className="text-lg text-white/80"><strong className="text-white">Use the methodology and editorial standards</strong> when you want to audit how the site reaches its recommendations.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
