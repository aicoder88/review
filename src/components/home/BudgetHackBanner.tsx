import { DollarSign, TrendingUp, Sparkles } from "lucide-react";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";

export function BudgetHackBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden" id="budget-hack">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <Sparkles className="w-4 h-4" />
              EDITOR&apos;S SECRET
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-4 leading-tight">
            The <span className="text-gradient-gold italic">$15 Budget Hack</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-foreground mb-2 max-w-3xl mx-auto">
            One practical way to get more from a budget litter setup.
          </p>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            This section is not a blanket recommendation for every home. It is a shortcut for readers
            whose main problem is odor and box life, not premium clumping or ultra-low dust.
          </p>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100">
            <div className="grid md:grid-cols-2">

              {/* Left: The Problem */}
              <div className="p-8 md:p-10 bg-red-50 border-r border-red-100">
                <h3 className="font-display text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  ❌ The Old Way
                </h3>
                <div className="space-y-4 text-red-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💸</span>
                    <div>
                      <p className="font-bold">Premium litter can cost more up front</p>
                      <p className="text-sm">Especially if you are buying for odor control first</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤢</span>
                    <div>
                      <p className="font-bold">Budget clay often fades fast</p>
                      <p className="text-sm">Weak clumps and lingering waste shorten usable box life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <p className="font-bold">Frequent partial resets</p>
                      <p className="text-sm">You spend less per bag but can end up cleaning more often</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: The Solution */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-emerald-50 to-teal-50">
                <h3 className="font-display text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  ✅ The Hack
                </h3>
                <div className="space-y-4 text-emerald-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="font-bold">Budget litter + <PurrifyLink variant="inline">Purrify</PurrifyLink></p>
                      <p className="text-sm">Can be a more practical setup when odor is the main problem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <div>
                      <p className="font-bold">Targets odor between full changes</p>
                      <p className="text-sm">Useful if you want an unscented or lower-cost litter to stay fresher</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-bold">Works best as a supplement</p>
                      <p className="text-sm">It can improve a weaker setup, but it does not replace choosing the right litter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: The Math */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-white">
              <div className="max-w-3xl mx-auto">
                <h4 className="font-display text-2xl font-bold mb-6 text-center">Where This Approach Makes Sense</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <DollarSign className="w-8 h-8 mx-auto mb-2 opacity-90" />
                    <p className="text-3xl font-bold mb-1">Budget</p>
                    <p className="text-emerald-100 text-sm">You want to keep bag cost under control</p>
                  </div>
                  <div>
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-90" />
                    <p className="text-3xl font-bold mb-1">Odor</p>
                    <p className="text-emerald-100 text-sm">Smell is your biggest frustration</p>
                  </div>
                  <div>
                    <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-90" />
                    <p className="text-3xl font-bold mb-1">Guide</p>
                    <p className="text-emerald-100 text-sm">You still want to read the full tradeoffs before buying</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-white text-center border-t border-gray-200">
              <p className="text-muted-foreground mb-6 text-lg">
                Read the full walkthrough before deciding whether this fits your box, budget, and cleanup routine.
              </p>
              <PurrifyLink variant="button">
                See How It Works
              </PurrifyLink>
              <p className="text-xs text-muted-foreground mt-4">
                Pair with the budget-litter guide and the Purrify review for the full context
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
