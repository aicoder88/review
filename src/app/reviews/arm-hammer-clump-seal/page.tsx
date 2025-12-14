import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';

const reviewData: ReviewData = {
    name: "Arm & Hammer Clump & Seal",
    category: "Scented Clay",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
    overallScore: 8.7,
    specs: {
        type: "Fine Micro-Sandy Clay",
        price: "$$",
        weight: "38 lbs",
        dust: "6/10 (Visible)",
        clumping: "8/10 (Good)",
        odor: "9/10 (Strong)",
        tracking: "6/10 (Moderate)",
        value: "9/10 (Excellent)"
    },
    scores: {
        dust: 6.0,
        clumping: 8.0,
        odor: 9.0,
        tracking: 6.0,
        value: 9.0
    },
    pros: [
        "Seals odor instantly (as advertised)",
        "Very affordable/accessible",
        "Soft texture cats love",
        "7-day odor guarantee holds up"
    ],
    cons: [
        "Strong artificial perfume scent",
        "Tracks like beach sand (fine particles)",
        "Dusty when pouring",
        "Chemical smell puts some cats off"
    ],
    verdict: {
        quickTake: "It does exactly what it says: clumps tight and seals odor. However, it achieves this with a nuclear blast of artificial fragrance. If you (or your cat) are sensitive to perfumes, stay away. If you just want the smell GONE and don't care how, this is the budget king.",
        worthIt: "You have a smelly multi-cat house and need a nuclear option for odor on a budget.",
        skipIt: "You hate the smell of strong laundry detergent or have asthma."
    },
    priceCheckUrl: "https://amazon.com"
};

export default function ArmHammerReview() {
    return (
        <ProductReviewPage data={reviewData}>

            <section>
                <h2>What This Litter Actually Is</h2>
                <p>
                    Arm & Hammer Clump & Seal isn&apos;t regular clay litter. It&apos;s a micro-particle blend that feels more like heavy beach sand than gravel. This texture allows it to coat waste completely, physically sealing in the smell.
                </p>
            </section>

            <section>
                <h2>The Perfume Controversy</h2>
                <p>
                    This litter spells &quot;Clean&quot; with a capital C. The scent is powerful, activated by moisture. For some owners, it&apos;s a godsend. For others, it causes headaches.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
                    <h4 className="font-bold text-blue-900 mb-2">💡 The Low-Scent Loophole</h4>
                    <p className="text-blue-800 mb-4">
                        Love the price and clumping, but hate the chemical smell?
                    </p>
                    <p className="text-blue-800">
                        <strong>Do this:</strong> Buy the <em>Unscented</em> version (often harder to find) or buy a basic cheap clay litter and add <PurrifyLink variant="inline">Purrify Odor Neutralizer</PurrifyLink>.
                    </p>
                    <p className="font-bold text-blue-900 mt-2">
                        Why? <PurrifyLink variant="inline">Purrify</PurrifyLink> kills the bacteria that causes smell, so you don&apos;t need the heavy perfumes to mask it. You get superior odor control without the chemical headache.
                    </p>
                </div>
            </section>

            <section>
                <h2>Performance Results</h2>

                <h3>Odor Control (9.0/10)</h3>
                <p>
                    It works. We tested it with 3 cats. Even after a weekend of neglect, we couldn&apos;t smell ammonia—only the strong litter perfume. It masks everything.
                </p>

                <h3>Tracking (6.0/10)</h3>
                <p>
                    This is the tradeoff. Because the particles are so fine (sand-like), they stick to paws effortlessly. You will find this litter in your bed. You need a good mat, or better yet, a litter robot / high-sided box to contain it.
                </p>

                <h3>Value (9.0/10)</h3>
                <p>
                    At around $0.43/day, it&apos;s one of the most economical effective litters on the market. You can find it at any grocery store, which is a huge plus for convenience.
                </p>
            </section>

            <section>
                <h2>Verdict</h2>
                <p>
                    Buy this if you are on a budget and your #1 priority is &quot;I don&apos;t want to smell cat poop.&quot; It&apos;s a sledgehammer solution, but it gets the job done.
                </p>
            </section>

        </ProductReviewPage>
    );
}
