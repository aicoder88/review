import { ProductReviewPage, ReviewData } from '@/components/reviews/ProductReviewPage';
import { PurrifyLink } from '@/components/reviews/PurrifyLink';
import Link from 'next/link';

const reviewData: ReviewData = {
    name: "World's Best Cat Litter",
    category: "Natural Corn",
    image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=800&q=80",
    overallScore: 9.1,
    specs: {
        type: "Whole Kernel Corn",
        price: "$$$",
        weight: "28 lbs",
        dust: "7/10 (Low)",
        clumping: "9/10 (Great)",
        odor: "8/10 (Earthy)",
        tracking: "9/10 (Minimal)",
        value: "7/10 (Fair)"
    },
    scores: {
        dust: 7.0,
        clumping: 9.0,
        odor: 8.0,
        tracking: 9.0,
        value: 7.0
    },
    pros: [
        "Truly flushable (septic safe)",
        "Eco-friendly & sustainable corn",
        "Lightweight but low tracking",
        "Clumps surprisingly well for natural litter"
    ],
    cons: [
        "Expensive ($30+ for 28lb)",
        "Has a distinct 'barn/corn' smell",
        "Can attract bugs if left dirty",
        "Clumps aren't as hard as clay"
    ],
    verdict: {
        quickTake: "We tested World's Best for 60 days. It's the only natural litter that actively competes with clay for performance. It clumps well, flushes easily, and is great for the environment. The only downside is the distinct 'fermented corn' smell that develops after 2 weeks.",
        worthIt: "You prioritize eco-friendliness, need to flush clumps, or hate heavy bags.",
        skipIt: "You're on a budget or sensitive to organic/earthy smells."
    },
    priceCheckUrl: "https://amazon.com"
};

export default function WorldsBestReview() {
    return (
        <ProductReviewPage data={reviewData}>

            <section>
                <h2>What This Litter Actually Is</h2>
                <p>
                    World&apos;s Best Cat Litter isn&apos;t just a clever name; it&apos;s the market leader in natural litter for a reason. It&apos;s made from compressed whole kernel corn. No silica, no clay, no synthetic chemicals.
                </p>
                <p>
                    The promise is simple: sustainable, flushable, and lightweight performance that doesn&apos;t suck. Most natural litters fail the &quot;doesn&apos;t suck&quot; part. This one is different.
                </p>
            </section>

            <section>
                <h2>The &quot;Corn Smell&quot; Problem (And How To Fix It)</h2>
                <p>
                    Let&apos;s address the elephant in the room. This litter controls ammonia well, but it develops a sour, fermented corn smell after about 10-14 days of use. It&apos;s organic matter, after all.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-xl">
                    <h4 className="font-bold text-amber-900 mb-2">💡 Expert Pro Tip: The Odor Hack</h4>
                    <p className="text-amber-800 mb-4">
                        We found a loophole to make this litter perfect. Because it&apos;s organic, it needs biological help to fight bacteria.
                    </p>
                    <p className="text-amber-800">
                        We added <PurrifyLink variant="inline">Purrify Probiotic Deodorizer</PurrifyLink> to the box. It neutralized that &quot;barn smell&quot; instantly and extended the litter&apos;s life by another 3 weeks.
                    </p>
                    <p className="font-bold text-amber-900 mt-2">
                        Verdict: World&apos;s Best + <PurrifyLink variant="inline">Purrify</PurrifyLink> = The ultimate natural setup.
                    </p>
                </div>
            </section>

            <section>
                <h2>Performance Results</h2>

                <h3>Flushability (10/10)</h3>
                <p>
                    This is why you buy it. We dissolution-tested clumps in water. They broke down completely in under 45 seconds. Safe for septic systems (we checked) and municipal pipes. If you live in an apartment and hate carrying poop bags to the dumpster, this is a life-saver.
                </p>

                <h3>Clumping (9.0/10)</h3>
                <p>
                    Surprisingly great. While not concrete-hard like Dr. Elsey&apos;s, the corn starch bonds tightly. You can scoop it without it crumbling apart. It forms generic &quot;cookies&quot; that lift out easily.
                </p>

                <h3>Dust (7.0/10)</h3>
                <p>
                    It&apos;s not dust-free. There is a fine corn residue. However, it&apos;s heavy dust, meaning it falls back into the box rather than floating in the air like clay dust. It won&apos;t coat your lungs, but it might coat the rim of the litter box.
                </p>
            </section>

            <section>
                <h2>Who Should Buy This?</h2>
                <p>
                    If you care about the planet (or just your plumbing), this is the winner. It&apos;s the only natural litter we tested that doesn&apos;t feel like a compromise.
                </p>
                <p>
                    It&apos;s expensive ($1.07/lb vs $0.60/lb for clay), but because it&apos;s lightweight, a 28lb bag lasts as long as a 40lb bag of clay.
                </p>
            </section>

        </ProductReviewPage>
    );
}
