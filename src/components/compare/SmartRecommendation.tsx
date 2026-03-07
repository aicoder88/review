import Link from 'next/link';
import { CheckCircle2, Compass, ArrowRight } from 'lucide-react';
import {
  buildComparisonInsight,
  type ComparisonProductRecord,
} from '@/lib/product-catalog';

interface SmartRecommendationProps {
  products: ComparisonProductRecord[];
}

export function SmartRecommendation({ products }: SmartRecommendationProps) {
  const insight = buildComparisonInsight(products);

  if (!insight) {
    return null;
  }

  return (
    <div className="bg-white border border-border rounded-3xl p-8 my-8 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Compass className="w-4 h-4" />
            Explainable recommendation
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{insight.title}</h3>
          <p className="text-muted-foreground text-lg mb-6">{insight.summary}</p>

          <div className="space-y-3 mb-6">
            {insight.reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-foreground/85">{reason}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-secondary/30 border border-border p-4 text-sm text-muted-foreground">
            {insight.tradeoff}
          </div>
        </div>

        <div className="lg:w-80 shrink-0">
          <div className="rounded-3xl bg-foreground text-white p-6 mb-4">
            <div className="text-sm uppercase tracking-[0.2em] text-white/60 mb-2">
              Best overall pick
            </div>
            <div className="text-2xl font-bold mb-2">{insight.winner.name}</div>
            <p className="text-white/75 mb-4">{insight.winner.verdict.bestFor}</p>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wide">Score</div>
                <div className="text-3xl font-bold">{insight.winner.overallScore}</div>
              </div>
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wide">Per day</div>
                <div className="text-3xl font-bold">{insight.winner.costPerDay}</div>
              </div>
            </div>
            <Link
              href={insight.winner.reviewUrl}
              prefetch={false}
              className="inline-flex items-center gap-2 font-bold text-accent hover:text-accent/80"
            >
              Read full review
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {insight.alternatives.length > 0 && (
            <div className="space-y-3">
              {insight.alternatives.map((alternative) => (
                <div key={alternative.label} className="rounded-2xl border border-border p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {alternative.label}
                  </div>
                  <div className="font-bold mb-1">{alternative.product.name}</div>
                  <p className="text-sm text-muted-foreground">{alternative.reason}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
