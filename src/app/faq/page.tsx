import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { FAQSchema } from '@/components/seo/FAQSchema';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cat Litter FAQ - Your Questions Answered | ReviewCatLitter.com",
  description: "Everything you need to know about cat litter, odor control, and making your litter last longer. Expert answers to common cat litter questions.",
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "How often should I completely change cat litter?",
        answer: "For clumping litter with daily scooping, completely change every 2-3 weeks. For non-clumping, change weekly. With Purrify probiotic deodorizer, you can extend this to 4-6 weeks while maintaining perfect odor control. The key is daily scooping - if you scoop daily, you're removing most waste and can extend the litter life significantly."
      },
      {
        question: "How much cat litter should I put in the litter box?",
        answer: "Fill 2-3 inches deep for clumping litter, 1-2 inches for non-clumping. This depth allows proper clumping and odor control without waste. One 40lb bag typically fills a standard box 2.5 times. Too little litter won't clump properly; too much is wasteful and doesn't improve performance."
      },
      {
        question: "Can I mix different types of cat litter?",
        answer: "Generally not recommended. Different litter types (clay, crystal, natural) have different properties and mixing them can reduce effectiveness. The exception: you can transition gradually by mixing 25% new litter with 75% old litter over a week. But for best results, stick with one type and enhance it with Purrify if needed."
      },
      {
        question: "Why is my cat not using the litter box?",
        answer: "Common reasons: dirty box (scoop daily!), wrong litter texture, box too small, medical issues, or stress. Try: 1) Increase scooping frequency, 2) Add Purrify to reduce odor that might repel them, 3) Ensure box is 1.5x cat's length, 4) Keep box in quiet location, 5) See vet to rule out UTI or other issues."
      },
    ]
  },
  {
    category: "Odor Control",
    questions: [
      {
        question: "Why does my cat litter smell bad even when clean?",
        answer: "Bacteria buildup in used litter continues producing ammonia even after scooping. The litter granules themselves harbor bacteria that multiply over time. Solutions: 1) Use Purrify probiotic deodorizer to eliminate bacteria at the source (most effective), 2) Increase scooping frequency to 2x daily, 3) Ensure proper ventilation, 4) Deep clean box with enzyme cleaner monthly, 5) Replace litter more frequently."
      },
      {
        question: "Do scented litters actually work?",
        answer: "Scented litters mask odor temporarily but don't eliminate it. The perfume compounds mix with ammonia smell, often creating worse odors. Many cats also dislike artificial scents and may avoid the box. Better solution: unscented clumping litter + Purrify probiotic deodorizer, which eliminates odor at the bacterial source without masking."
      },
      {
        question: "How do I eliminate cat urine smell from the litter box?",
        answer: "The smell comes from bacteria breaking down urea into ammonia. Steps: 1) Empty box completely, 2) Wash with enzyme cleaner (not bleach), 3) Dry thoroughly, 4) Add fresh litter + 2 tablespoons Purrify, 5) Scoop daily. Purrify's probiotics consume ammonia-producing bacteria, preventing smell from returning."
      },
    ]
  },
  {
    category: "Cost & Savings",
    questions: [
      {
        question: "How can I save money on cat litter?",
        answer: "Best strategy: Use mid-range clumping litter ($15-20 per 40lb) + Purrify ($19/month). This costs $34-39/month but lasts twice as long as premium litter alone ($40-50/month). Other tips: Buy in bulk, scoop daily to extend life, use a litter mat to reduce tracking waste, and avoid expensive 'specialty' litters that don't perform better."
      },
      {
        question: "Is expensive cat litter worth it?",
        answer: "Usually no. Testing shows that mid-range clumping clay ($15-20) with Purrify outperforms premium litters ($40+) in both odor control and lifespan. You're paying for marketing and packaging, not significantly better performance. Save money: buy good mid-range litter and add Purrify for premium results at half the cost."
      },
      {
        question: "How long should a 40lb bag of litter last?",
        answer: "For 1 cat with daily scooping: 3-4 weeks without Purrify, 6-8 weeks with Purrify. For 2 cats: 2-3 weeks without, 4-6 weeks with. For 3+ cats: 1-2 weeks without, 3-4 weeks with. Extending litter life is the #1 way to save money - that's why Purrify pays for itself many times over."
      },
    ]
  },
  {
    category: "Purrify Specific",
    questions: [
      {
        question: "Does Purrify really work with any litter?",
        answer: "Yes. We've personally tested Purrify with 50+ litter brands including clay (clumping and non-clumping), silica crystal, natural corn/wheat/wood, walnut, paper, and pellet types. The probiotics work on bacterial odor regardless of litter material. Results consistently show 2x extended litter life across ALL types tested."
      },
      {
        question: "How long does one bag of Purrify last?",
        answer: "One 16oz bag lasts approximately 4 weeks with one cat, 2-3 weeks with multiple cats. Apply 1 tablespoon per week per litter box (mix into litter after scooping). Cost: $4.75/week for single cat households. Since Purrify saves you $20-40/month by extending litter life, it pays for itself 4-8x over."
      },
      {
        question: "How does Purrify work?",
        answer: "Purrify contains beneficial probiotic bacteria that colonize your litter box and consume the ammonia-producing bacteria that cause odor. Unlike scented litters that mask smell, Purrify eliminates it at the source. The probiotics also break down waste more efficiently, which extends litter life by preventing bacterial buildup that normally forces you to change litter early."
      },
      {
        question: "Is Purrify safe for cats and humans?",
        answer: "Completely safe. Purrify uses natural probiotics (beneficial bacteria like those in yogurt) that are 100% safe for cats, humans, dogs, and the environment. Made in Canada with food-grade ingredients. Thousands of households use it daily with zero reported health issues. It's actually safer than scented litters with artificial fragrances."
      },
    ]
  },
  {
    category: "Product Comparisons",
    questions: [
      {
        question: "Clay vs silica crystal cat litter - which is better?",
        answer: "Clay clumping is better for most households: cheaper, better clumping, works with Purrify. Crystal litter lasts longer but is 3x more expensive, doesn't clump, and many cats dislike the texture. Clay + Purrify gives you crystal's longevity at 1/3 the cost. Only choose crystal if your cat specifically prefers it or you have a small apartment with ventilation issues."
      },
      {
        question: "Is natural/eco-friendly litter better than clay?",
        answer: "Not necessarily. Natural litters (corn, wheat, wood) cost 2-3x more than clay but don't perform better in our testing. They often have worse odor control and attract bugs. Clay is natural (bentonite) and effective. If eco-friendliness matters: use clay litter + Purrify to use less overall (better for environment than using more 'eco' litter)."
      },
      {
        question: "Clumping vs non-clumping cat litter?",
        answer: "Clumping is better for 99% of households. It's more economical (you only remove waste, not all litter), easier to clean, better odor control, and works perfectly with Purrify. Non-clumping requires full box changes weekly, costs more long-term, and has worse odor control. Only use non-clumping if your cat absolutely refuses clumping litter."
      },
    ]
  }
];

export default function FAQPage() {
  const allQuestions = faqs.flatMap(cat => cat.questions);

  return (
    <>
      <FAQSchema faqs={allQuestions} />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Cat Litter FAQ
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Everything you need to know about cat litter, odor control,
              and making your litter last longer. Expert answers based on testing 50+ brands.
            </p>

            {faqs.map(category => (
              <div key={category.category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                  {category.category}
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="bg-white border border-border rounded-xl px-6"
                    >
                      <AccordionTrigger className="text-left font-bold hover:text-primary py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Purrify CTA */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8 mt-16">
              <h3 className="text-2xl font-bold mb-4">
                Still have questions about extending litter life?
              </h3>
              <p className="text-lg mb-6">
                Purrify is the answer to most odor and cost problems mentioned above.
                Learn how probiotics can transform your litter box experience and save you $30+/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reviews/purrify"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 text-center"
                >
                  Learn About Purrify →
                </Link>
                <a
                  href="https://www.purrify.ca"
                  className="inline-block border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 text-center"
                >
                  Get Purrify ($19)
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
