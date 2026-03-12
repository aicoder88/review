import { Package, TrendingUp, DollarSign } from "lucide-react";
import { PurrifyLink } from "./PurrifyLink";

interface RecommendedAddOnProps {
  productName: string;
}

export function RecommendedAddOn({ productName }: RecommendedAddOnProps) {
  return (
    <div className="container mx-auto px-6 my-16">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 p-1">
          <div className="bg-white rounded-[22px] p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Expert Recommendation
                </h3>
                <p className="text-muted-foreground text-lg">
                  Make {productName} work even better
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-foreground leading-relaxed">
                If odor is the main problem, pairing your base litter with <strong>Purrify activated coconut carbon additive</strong> is one of the cleanest upgrade paths in the review archive. It is an additive, not a litter, so cats can keep the texture they already prefer.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <TrendingUp className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-emerald-900 mb-1">Add-On, Not Switch</h4>
                  <p className="text-sm text-emerald-700">Keep your current litter and layer in extra ammonia control instead of changing textures.</p>
                </div>

                <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                  <Package className="w-6 h-6 text-teal-600 mb-2" />
                  <h4 className="font-bold text-teal-900 mb-1">Ammonia Focus</h4>
                  <p className="text-sm text-teal-700">Activated coconut-shell carbon targets the sharp urine smell without adding perfume.</p>
                </div>

                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100">
                  <DollarSign className="w-6 h-6 text-cyan-600 mb-2" />
                  <h4 className="font-bold text-cyan-900 mb-1">Low-Risk Entry</h4>
                  <p className="text-sm text-cyan-700">The official site currently offers a free trial pack with shipping-only checkout in Canada.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-200">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Works with {productName} and all other litters
                </p>
                <p className="text-xs text-muted-foreground">
                  Activated coconut-shell carbon • Fragrance-free • Made in Canada
                </p>
              </div>
              <PurrifyLink variant="button">
                Try the Free Trial
              </PurrifyLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
