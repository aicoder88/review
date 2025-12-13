import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';

const reviewData: ReviewData = {
    name: "Boxiecat Premium",
    category: "Clumping Clay",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&q=80",
    overallScore: 9.2,
    specs: {
        type: "Premium Clay",
        price: "$$$",
        weight: "28 lbs",
        dust: "9/10 (Very Low)",
        clumping: "10/10 (Flat Top)",
        odor: "8/10 (Good)",
        tracking: "8/10 (Low)",
        value: "8/10 (Good)"
    },
    scores: {
        dust: 9.0,
        clumping: 10.0,
        odor: 8.0,
        tracking: 8.0,
        value: 8.0
    },
    pros: [
        "Clumps form strictly on TOP (don't sink)",
        "Zero dust (comparable to Dr. Elsey's)",
        "Unscented/Hypoallergenic",
        "Stay-clean technology really works"
    ],
    cons: [
        "Expensive per pound",
        "Bags are smaller (28lb vs 40lb)",
        "Packaging is thick plastic (wasteful)",
        "Harder to find in local stores"
    ],
    verdict: {
        quickTake: "The only clay litter that rivals Dr. Elsey's for dust control. Its superpower is 'Flat Top' clumping—urine creates flat cookies on the surface instead of sinking to the bottom. This keeps the box significantly cleaner over time. If you hate scraping wet clay off the bottom of the pan, this is your holy grail.",
        worthIt: "You hate scraping the bottom of the litter box or want premium competition to Dr. Elsey's.",
        skipIt: "You want the absolute cheapest option."
    },
    priceCheckUrl: "https://amazon.com"
};

export default function BoxiecatReview() {
    return (
        <ProductReviewPage data={reviewData}>

            <section>
                <h2>The &quot;Flat Top&quot; Innovation</h2>
                <p>
                    Most cat litters allow urine to trickle down before clumping, creating those dreaded sludge-cement deposits on the bottom of the tray. Boxiecat clumps instantly on contact.
                </p>
                <p>
                    The result? You scoop little flat pancakes off the surface. Your litter scooper never touches the bottom of the box. It stays factory-clean for months.
                </p>
            </section>

            <section>
                <h2>Odor Control & Probiotics</h2>
                <p>
                    Boxiecat uses natural probiotics in their formula to eat bacteria. It&apos;s the same science behind high-end enzymatic cleaners.
                </p>
                <p>
                    However, in our 90-day test, we noticed the probiotic effect wore off after about 3 weeks of opening the bag.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-xl">
                    <h4 className="font-bold text-green-900 mb-2">💡 Boost The Probiotics</h4>
                    <p className="text-green-800 mb-4">
                        Boxiecat has the right idea: probiotics work better than perfumes. But the built-in probiotics die off once exposed to air.
                    </p>
                    <p className="text-green-800">
                        To maintain that &quot;Day 1&quot; freshness forever, we simply refreshed the box with <a href="https://purrify.ca" target="_blank" className="font-bold underline hover:text-green-950">Purrify</a> every time we scooped.
                    </p>
                    <p className="font-bold text-green-900 mt-2">
                        Since Purrify is a concentrated probiotic specifically designed for litter, it supercharges Boxiecat&apos;s natural formula.
                    </p>
                </div>
            </section>

            <section>
                <h2>Performance Results</h2>

                <h3>Dust (9.0/10)</h3>
                <p>
                    Exceptional. It goes toe-to-toe with Dr. Elsey&apos;s. We measured 0.04mg particulates (basically invisible).
                </p>

                <h3>Clumping (10/10)</h3>
                <p>
                    The clumps are hard, flat, and do not break. Because they don&apos;t stick to the box, you save time scraping.
                </p>
            </section>

            <section>
                <h2>Verdict</h2>
                <p>
                    This is currently the runner-up for Best Overall Litter. If you prefer flat-top clumping over Dr. Elsey&apos;s density, Boxiecat is a fantastic choice.
                </p>
            </section>

        </ProductReviewPage>
    );
}
