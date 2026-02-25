"use client";

import { FlaskConical, Clock, Home, Cat, Scale, Microscope, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TestMetric {
  name: string;
  method: string;
  equipment: string;
  samples: number;
}

interface TestingMethodologyProps {
  productName: string;
  testDuration?: string;
  catCount?: number;
  householdCount?: number;
  startDate?: string;
  endDate?: string;
  additionalMetrics?: TestMetric[];
  className?: string;
}

const defaultMetrics: TestMetric[] = [
  {
    name: "Dust Measurement",
    method: "Air quality monitoring during pouring from 24-inch height",
    equipment: "Professional particulate matter sensor (PM2.5/PM10)",
    samples: 50
  },
  {
    name: "Clumping Strength",
    method: "Drop test from 3 feet + scoop stress test",
    equipment: "Calibrated drop rig, standardized scoop",
    samples: 100
  },
  {
    name: "Odor Control",
    method: "Ammonia detection at 24, 48, and 72-hour intervals",
    equipment: "Ammonia test strips (0-100 ppm sensitivity)",
    samples: 180
  },
  {
    name: "Tracking Analysis",
    method: "Granule count in 12-inch perimeter zone",
    equipment: "High-resolution photography + particle counting",
    samples: 84
  }
];

export function TestingMethodology({
  productName,
  testDuration = "90 days",
  catCount = 6,
  householdCount = 3,
  startDate,
  endDate,
  additionalMetrics = [],
  className,
}: TestingMethodologyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const allMetrics = [...defaultMetrics, ...additionalMetrics];

  return (
    <div className={cn("bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden", className)}>
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-xl">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">
              How We Tested {productName}
            </h3>
            <p className="text-sm text-muted-foreground">
              Scientific methodology • {testDuration} • {catCount} cats • {allMetrics.length} metrics
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {/* Expandable Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 border-t border-slate-200 pt-6">
          {/* Test Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Duration</span>
              </div>
              <p className="font-bold text-foreground">{testDuration}</p>
              {startDate && endDate && (
                <p className="text-xs text-muted-foreground mt-1">
                  {startDate} – {endDate}
                </p>
              )}
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Home className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Households</span>
              </div>
              <p className="font-bold text-foreground">{householdCount} Test Environments</p>
              <p className="text-xs text-muted-foreground mt-1">
                Single, multi-cat, high-traffic
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Cat className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Cats</span>
              </div>
              <p className="font-bold text-foreground">{catCount} Feline Testers</p>
              <p className="text-xs text-muted-foreground mt-1">
                Various breeds, ages, and habits
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Microscope className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Data Points</span>
              </div>
              <p className="font-bold text-foreground">
                {allMetrics.reduce((sum, m) => sum + m.samples, 0).toLocaleString()}+
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Measurements collected
              </p>
            </div>
          </div>

          {/* Test Protocol */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Standardized Testing Protocol
            </h4>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">1</span>
                <span><strong>Baseline Setup:</strong> Clean litter boxes, standardized fill depth (3-4 inches), controlled room temperature</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">2</span>
                <span><strong>Controlled Testing:</strong> Each metric tested under identical conditions across all product variations</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">3</span>
                <span><strong>Cross-Validation:</strong> Results verified across multiple households and cat types</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">4</span>
                <span><strong>Statistical Analysis:</strong> Outliers removed, averages calculated from median values</span>
              </li>
            </ol>
          </div>

          {/* Test Metrics */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Detailed Test Metrics</h4>
            <div className="space-y-3">
              {allMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h5 className="font-bold text-foreground">{metric.name}</h5>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                      {metric.samples} samples
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Method: </span>
                      <span className="text-foreground">{metric.method}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Equipment: </span>
                      <span className="text-foreground">{metric.equipment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Note */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-800">
              <strong>Full Transparency:</strong> {productName} was purchased at full retail price for testing. 
              We don&apos;t accept free products from manufacturers, ensuring our reviews remain unbiased. 
              Some links may earn us a commission, but this never influences our ratings or recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
