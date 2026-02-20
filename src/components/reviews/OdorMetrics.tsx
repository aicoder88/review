"use client";

import { Wind, Clock, Droplets, AlertTriangle, CheckCircle2, TrendingDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface OdorTestResult {
  timePoint: string;
  ammoniaLevel: number; // ppm
  smellRating: number; // 1-10 scale, 10 = no smell
  notes?: string;
}

interface OdorMetricsProps {
  productName: string;
  overallScore: number;
  testDuration: string;
  initialAmmonia: number;
  results: OdorTestResult[];
  comparisonLitter?: string;
  comparisonScore?: number;
  keyFindings: string[];
  pros: string[];
  cons: string[];
  purrifyEnhancement?: {
    enabled: boolean;
    improvementPercent: number;
    extendedLifeDays: number;
  };
  className?: string;
}

function getAmmoniaLevelColor(level: number): string {
  if (level <= 5) return "text-green-600 bg-green-50 border-green-200";
  if (level <= 15) return "text-yellow-600 bg-yellow-50 border-yellow-200";
  if (level <= 25) return "text-orange-600 bg-orange-50 border-orange-200";
  return "text-red-600 bg-red-50 border-red-200";
}

function getAmmoniaLevelLabel(level: number): string {
  if (level <= 5) return "Excellent";
  if (level <= 15) return "Good";
  if (level <= 25) return "Fair";
  return "Poor";
}

export function OdorMetrics({
  productName,
  overallScore,
  testDuration,
  initialAmmonia,
  results,
  comparisonLitter,
  comparisonScore,
  keyFindings,
  pros,
  cons,
  purrifyEnhancement,
  className,
}: OdorMetricsProps) {
  const finalResult = results[results.length - 1];
  const ammoniaReduction = ((initialAmmonia - finalResult.ammoniaLevel) / initialAmmonia) * 100;

  return (
    <div className={cn("space-y-8", className)}>
      {/* Header with Overall Score */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500 p-3 rounded-xl">
            <Wind className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-emerald-900">
              Odor Control Analysis
            </h3>
            <p className="text-emerald-700">
              {testDuration} ammonia monitoring test results
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600">{overallScore.toFixed(1)}</div>
            <div className="text-xs text-emerald-700 font-medium uppercase tracking-wider">/10 Score</div>
          </div>
          {comparisonScore && (
            <div className="text-center pl-4 border-l border-emerald-300">
              <div className="text-2xl font-bold text-emerald-400">{comparisonScore.toFixed(1)}</div>
              <div className="text-xs text-emerald-600">vs Avg</div>
            </div>
          )}
        </div>
      </div>

      {/* Ammonia Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          Ammonia Level Over Time
        </h4>

        <div className="space-y-4">
          {/* Initial Level */}
          <div className="flex items-center gap-4">
            <div className="w-20 text-sm font-medium text-muted-foreground">Fresh</div>
            <div className="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-500"
                style={{ width: `${Math.min((initialAmmonia / 50) * 100, 100)}%` }}
              />
            </div>
            <div className={cn("px-3 py-1 rounded-full text-sm font-bold border", getAmmoniaLevelColor(initialAmmonia))}>
              {initialAmmonia} ppm
            </div>
          </div>

          {/* Test Results */}
          {results.map((result, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-20 text-sm font-medium text-muted-foreground">{result.timePoint}</div>
              <div className="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden relative">
                <div
                  className={cn(
                    "h-full transition-all duration-500",
                    result.ammoniaLevel <= 10 ? "bg-green-500" :
                      result.ammoniaLevel <= 20 ? "bg-yellow-500" :
                        result.ammoniaLevel <= 30 ? "bg-orange-500" : "bg-red-500"
                  )}
                  style={{ width: `${Math.min((result.ammoniaLevel / 50) * 100, 100)}%` }}
                />
                {result.smellRating >= 8 && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div className={cn("px-3 py-1 rounded-full text-sm font-bold border", getAmmoniaLevelColor(result.ammoniaLevel))}>
                {result.ammoniaLevel} ppm
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-muted-foreground">Excellent (0-5 ppm)</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-muted-foreground">Good (6-15 ppm)</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-muted-foreground">Fair (16-25 ppm)</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-muted-foreground">Poor (26+ ppm)</span>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 text-primary mb-2">
            <TrendingDown className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Reduction</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{ammoniaReduction.toFixed(0)}%</p>
          <p className="text-xs text-muted-foreground mt-1">
            Ammonia reduction vs fresh
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Odor Free</span>
          </div>
          <p className="text-2xl font-bold text-foreground">
            {results.filter(r => r.ammoniaLevel <= 15).length * (results[1] ? parseInt(results[1].timePoint) : 7)} days
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Before noticeable smell
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Droplets className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Final Level</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{finalResult.ammoniaLevel} ppm</p>
          <p className="text-xs text-muted-foreground mt-1">
            {getAmmoniaLevelLabel(finalResult.ammoniaLevel)} at test end
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Wind className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Smell Rating</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{finalResult.smellRating}/10</p>
          <p className="text-xs text-muted-foreground mt-1">
            Human perception score
          </p>
        </div>
      </div>

      {/* Purrify Enhancement Box */}
      {purrifyEnhancement?.enabled && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-2 rounded-xl shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-amber-900 mb-2">
                Boost {productName} with Purrify
              </h4>
              <p className="text-amber-800 text-sm mb-4">
                Our tests showed that adding Purrify probiotic deodorizer to {productName}
                improved odor control by <strong>{purrifyEnhancement.improvementPercent}%</strong> and extended
                usable litter life by <strong>{purrifyEnhancement.extendedLifeDays} days</strong>.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-white/70 px-4 py-2 rounded-lg border border-amber-200">
                  <span className="text-amber-700">+{purrifyEnhancement.improvementPercent}% </span>
                  <span className="text-amber-600">odor elimination</span>
                </div>
                <div className="bg-white/70 px-4 py-2 rounded-lg border border-amber-200">
                  <span className="text-amber-700">+{purrifyEnhancement.extendedLifeDays} days </span>
                  <span className="text-amber-600">litter life</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Findings */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h4 className="font-bold text-foreground mb-4">Key Findings</h4>
        <ul className="space-y-3">
          {keyFindings.map((finding, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
          <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Odor Control Strengths
          </h4>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-2 text-green-800">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
          <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Odor Control Weaknesses
          </h4>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-2 text-red-800">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
