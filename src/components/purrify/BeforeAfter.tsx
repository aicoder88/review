export function BeforeAfter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          The Proof Is In The Litter Box
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          We tested the same litter for 2 weeks with and without Purrify
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl overflow-hidden">
              <div className="bg-red-100 px-6 py-3 border-b-2 border-red-200">
                <h4 className="font-bold text-red-900">❌ Without Purrify (Day 7)</h4>
              </div>
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400">
                [Before Image: Litter box with visible deterioration]
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-red-600">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">❌</span>
                    <span>Strong ammonia smell detectable from 10 feet away</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">❌</span>
                    <span>Litter clumps breaking down and sticking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">❌</span>
                    <span>Need to change entire box within days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl overflow-hidden">
              <div className="bg-emerald-100 px-6 py-3 border-b-2 border-emerald-200">
                <h4 className="font-bold text-emerald-900">✓ With Purrify (Day 14)</h4>
              </div>
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400">
                [After Image: Fresh-looking litter box]
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-emerald-600">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">✓</span>
                    <span>No detectable odor even up close</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">✓</span>
                    <span>Clumps remain solid and easy to scoop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">✓</span>
                    <span>Good for another 2 weeks minimum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-lg font-medium text-amber-900">
            <strong>Testing Methodology:</strong> Same litter brand (Dr. Elsey&apos;s Ultra), same cat, same box size,
            daily scooping. Only difference: 1 tablespoon of Purrify added weekly to test box.
          </p>
        </div>
      </div>
    </section>
  );
}
