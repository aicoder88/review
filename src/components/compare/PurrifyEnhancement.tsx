import { Sparkles, TrendingUp, DollarSign } from "lucide-react";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";

export function PurrifyEnhancement() {
  return (
    <div className="mt-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-10 border border-emerald-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-emerald-600 p-3 rounded-xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Make Any of These Litters Work Better
            </h3>
            <p className="text-muted-foreground text-lg">
              Extend litter life by 2x and eliminate odor with one simple addition
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="font-bold text-lg text-foreground mb-2">2x Longer Life</h4>
            <p className="text-muted-foreground">
              Extends any litter from 3-4 weeks to 6-8 weeks of freshness
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
            <Sparkles className="w-8 h-8 text-teal-600 mb-3" />
            <h4 className="font-bold text-lg text-foreground mb-2">Better Odor Control</h4>
            <p className="text-muted-foreground">
              Probiotics eliminate smell biologically—no masking with perfumes
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-cyan-100">
            <DollarSign className="w-8 h-8 text-cyan-600 mb-3" />
            <h4 className="font-bold text-lg text-foreground mb-2">Save $20+/Month</h4>
            <p className="text-muted-foreground">
              Use less litter and buy replacements half as often
            </p>
          </div>
        </div>

        <div className="bg-emerald-600 text-white p-6 rounded-2xl text-center">
          <p className="text-emerald-50 mb-4 text-lg">
            Works with <strong>all litters above</strong> — clay, crystal, corn, and natural
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PurrifyLink variant="button">
              Learn More About Purrify
            </PurrifyLink>
            <p className="text-sm text-emerald-100">
              Natural probiotics • Made in Canada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
