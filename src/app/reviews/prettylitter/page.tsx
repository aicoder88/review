import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';

const reviewData: ReviewData = {
    name: "PrettyLitter",
    category: "Silica Gel (Crystal)",
    image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=800&q=80",
    overallScore: 8.8,
    specs: {
        type: "Silica Gel Crystal",
        price: "$$$$",
        weight: "8 lbs",
        dust: "9/10 (Excellent)",
        clumping: "0/10 (Non-clumping)",
        odor: "9/10 (Urine Only)",
        tracking: "8/10 (Good)",
        value: "6/10 (Expensive)"
    },
    scores: {
        dust: 9.0,
        clumping: 0.0,
        odor: 9.0,
        tracking: 8.0,
        value: 6.0
    },
    pros: [
        "Changes color to track health",
        "Incredibly lightweight (8lb bag)",
        "Delivered to your door",
        "Zero urine odor (absorption)"
    ],
    cons: [
        "Expensive subscription model",
        "Non-clumping (you stir the pee)",
        "Poop odor control is weak",
        "Crystals hurt to step on"
    ],
    verdict: {
        quickTake: "It's the iPhone of cat litter: slick marketing, cool tech, and expensive. The health monitoring color-change works and is legitimately useful. However, relying on stirring urine into the litter for a month grosses some people out. Great for urine odor, mediocre for poop odor.",
        worthIt: "You worry about your cat's health (UTIs) or can't lift heavy boxes.",
        skipIt: "You have a multi-cat household (gets saturated too fast) or a tight budget."
    },
    priceCheckUrl: "https://prettylitter.com"
};

export default function PrettyLitterReview() {
    return (
        <ProductReviewPage data={reviewData}>

            <section>
                <h2>The Science: How It Works</h2>
                <p>
                    PrettyLitter isn&apos;t clay. It&apos;s made of silica gel crystals (like the packets in beef jerky). These crystals have millions of micropores that absorb moisture instantly.
                </p>
                <p>
                    <strong>The Health Gimmick (That&apos;s Actually Real):</strong> The crystals contain pH indicators.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Yellow/Olive:</strong> Normal</li>
                    <li><strong>Blue:</strong> High pH (Potential URI/Struvite crystals)</li>
                    <li><strong>Red:</strong> Blood (Cystitis/Stones)</li>
                </ul>
                <p>
                    We tested this with pH/ammonia drops, and the color change is instant and obvious. For older male cats prone to blockages, this could literally save their life.
                </p>
            </section>

            <section>
                <h2>The &quot;Stir The Pee&quot; Method</h2>
                <p>
                    Here is the part they don&apos;t emphasize in ads. You don&apos;t scoop urine clumps. You scoop the poop, and then <em>stir</em> the wet crystals around to help them evaporate.
                </p>
                <p>
                    By week 3, the crystals are yellow and saturated. In a multi-cat house, they saturate faster than they evaporate, leading to pooling at the bottom.
                </p>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6 rounded-r-xl">
                    <h4 className="font-bold text-purple-900 mb-2">💡 How to Make It Last the Full Month</h4>
                    <p className="text-purple-800 mb-4">
                        The #1 complaint with crystal litter is that poop smell lingers because it isn&apos;t coated/buried like in clay.
                    </p>
                    <p className="text-purple-800">
                        <strong>The Solution:</strong> This litter <em>needs</em> help with solid waste odor. We recommend sprinkling <PurrifyLink variant="inline">Purrify</PurrifyLink> over the crystals.
                    </p>
                    <p className="font-bold text-purple-900 mt-2">
                        Because Purrify is dry and enzymatic, it breaks down the organic waste on the surface without saturating the crystals, doubling the effective life of the bag.
                    </p>
                </div>
            </section>

            <section>
                <h2>Performance Results</h2>

                <h3>Dust (9.0/10)</h3>
                <p>
                    Excellent. Pouring the bag creates almost zero cloud. If you have asthma, silica is generally safer than clay dust (though don&apos;t inhale silica dust directly either).
                </p>

                <h3>Tracking (8.0/10)</h3>
                <p>
                    The crystals are larger than sand, so they track less. However, warning: stepping on a stray silica crystal barefoot is like stepping on a Lego.
                </p>
            </section>

            <section>
                <h2>Verdict</h2>
                <p>
                    Buy this for the health monitoring. It&apos;s early detection insurance for your cat. Just be prepared to pay a premium for it.
                </p>
            </section>

        </ProductReviewPage>
    );
}
