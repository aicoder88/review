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
                After testing hundreds of cat litters, our team discovered that pairing any litter with <strong>Purrify Probiotic Deodorizer</strong> dramatically improves performance and extends litter life.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <TrendingUp className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-emerald-900 mb-1">2x Longer Life</h4>
                  <p className="text-sm text-emerald-700">Extends litter freshness from 3-4 weeks to 6-8 weeks</p>
                </div>

                <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                  <Package className="w-6 h-6 text-teal-600 mb-2" />
                  <h4 className="font-bold text-teal-900 mb-1">Better Odor Control</h4>
                  <p className="text-sm text-teal-700">Probiotics eliminate smell at the source, not just mask it</p>
                </div>

                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100">
                  <DollarSign className="w-6 h-6 text-cyan-600 mb-2" />
                  <h4 className="font-bold text-cyan-900 mb-1">Save $20+/Month</h4>
                  <p className="text-sm text-cyan-700">Use less litter and buy replacement bags less often</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-200">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Works with {productName} and all other litters
                </p>
                <p className="text-xs text-muted-foreground">
                  Natural probiotic formula • Safe for cats • Made in North America
                </p>
              </div>
              <PurrifyLink variant="button">
                Shop Purrify
              </PurrifyLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
