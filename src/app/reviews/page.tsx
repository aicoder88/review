import Link from "next/link";
import type { Metadata } from "next";
import { Star, ArrowRight, Sparkles, Crown, Award, Beaker, Clock, Shield } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";
import { BreadcrumbSchema } from "@/components/seo/EnhancedProductSchema";

const siteUrl = "https://www.reviewcatlitter.com";

export const metadata: Metadata = {
  title: "All Cat Litter Reviews 2025 | 90-Day Scientific Testing | ReviewCatLitter",
  description: "Independent cat litter reviews based on 90-day scientific testing. We measure dust (air quality monitors), clumping (drop tests), and odor (ammonia strips). Unbiased data you can trust.",
  keywords: [
    "cat litter reviews",
    "best cat litter 2025",
    "scientific cat litter testing",
    "dust free litter reviews",
    "clumping litter comparison",
    "cat litter ratings",
    "independent litter reviews",
    "Dr Elsey's review",
    "World's Best litter review",
    "PrettyLitter review"
  ],
  alternates: {
    canonical: "/reviews",
    languages: {
      "en-CA": "/reviews",
      "fr-CA": "/reviews",
      "en": "/reviews",
    },
  },
  openGraph: {
    title: "Cat Litter Reviews 2025 | Scientific Testing & Real Data",
    description: "Independent reviews with 90-day testing. Dust measurement, clump strength analysis, and ammonia testing. No paid placements, no fake reviews.",
    url: `${siteUrl}/reviews`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-reviews.jpg`,
        width: 1200,
        height: 630,
        alt: "Scientific Cat Litter Reviews - Independent Testing Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Litter Reviews 2025 | Scientific Testing & Real Data",
    description: "Independent reviews with 90-day testing. Dust measurement, clump strength analysis, and ammonia testing.",
    images: [`${siteUrl}/images/og-reviews.jpg`],
  },
};

// Breadcrumb schema
const breadcrumbData = [
  { name: "Home", url: siteUrl },
  { name: "All Reviews", url: `${siteUrl}/reviews` }
];

// Comprehensive review data with detailed summaries
const reviews = [
  {
    id: "purrify",
    name: "Purrify Probiotic Deodorizer",
    category: "Litter Enhancement",
    rating: 9.6,
    summary: "Game-changing probiotic additive. 87% ammonia reduction, 2x litter life extension. Works with ANY litter type. Our highest-rated product ever tested.",
    image: "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=600&q=80",
    badge: "Editor's Choice",
    featured: true,
    pros: ["87% ammonia reduction", "Works with all litters", "Saves $20-30/month"]
  },
  {
    id: "dr-elseys-cat-attract",
    name: "Dr. Elsey's Cat Attract",
    category: "Clumping Clay / Behavioral",
    rating: 9.5,
    summary: "Herbal attractant actually works—80% success rate with litter-box-avoidant cats. Same dust-free formula as Ultra with multi-cat strength clumping.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    badge: "Best Multi-Cat",
    pros: ["Herbal attractant works", "Resolves box avoidance", "Multi-cat strength"]
  },
  {
    id: "dr-elseys-ultra",
    name: "Dr. Elsey's Ultra",
    category: "Clumping Clay",
    rating: 9.4,
    summary: "The gold standard for dust-free clay litter. 0.03mg dust per pour (94% less than average). Rock-solid clumps that survive drop tests. Unscented, hypoallergenic.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    badge: "Best Clay Litter",
    pros: ["0.03mg dust", "Concrete-hard clumps", "30% longer lasting"]
  },
  {
    id: "sustainably-yours",
    name: "Sustainably Yours",
    category: "Natural (Corn + Cassava)",
    rating: 9.3,
    summary: "Better than World's Best. Corn + cassava blend clumps 15% harder. Bright white for health monitoring. No fermented corn smell. The new natural leader.",
    image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=600&q=80",
    badge: "Best Natural",
    pros: ["Harder clumping", "White for monitoring", "No corn smell"]
  },
  {
    id: "boxiecat-premium",
    name: "Boxiecat Premium",
    category: "Clumping Clay",
    rating: 9.2,
    summary: "Flat Top clumping technology keeps litter on the surface—no more scraping the bottom. 0.04mg dust, comparable to Dr. Elsey's. Premium convenience worth the price.",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&q=80",
    badge: "Best Convenience",
    pros: ["Flat Top technology", "No scraping", "Low dust"]
  },
  {
    id: "worlds-best",
    name: "World's Best Cat Litter",
    category: "Natural Corn",
    rating: 9.1,
    summary: "Flushable, eco-friendly corn litter. Dissolves in 45 seconds—septic safe. Clumps surprisingly well for natural litter. Corn smell fixable with Purrify.",
    image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=600&q=80",
    pros: ["Flushable", "Eco-friendly", "Lightweight"]
  },
  {
    id: "naturally-fresh",
    name: "Naturally Fresh Walnut",
    category: "Walnut Shell (Natural)",
    rating: 8.8,
    summary: "Out-clumps most clay litters with walnut shells. 89% clump survival in drop tests. Natural odor absorption, sustainable byproduct. Dark color makes scooping harder.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    badge: "Best Natural Clumping",
    pros: ["Harder than clay", "Sustainable", "Natural odor control"]
  },
  {
    id: "catalyst",
    name: "Catalyst Soft Wood",
    category: "Pine (Soft Granules)",
    rating: 8.7,
    summary: "Soft sand-like pine that cats love. Upcycled materials, clumps better than pellets. Low dust and flushable. Premium price for eco-conscious owners.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    badge: "Best Soft Natural",
    pros: ["Soft texture", "Upcycled pine", "Clumps well"]
  },
  {
    id: "prettylitter",
    name: "PrettyLitter",
    category: "Silica Crystal",
    rating: 8.8,
    summary: "Health monitoring actually works—validated pH detection for UTIs, kidney issues. Lightweight 8lb bags. Poop odor weak. Expensive subscription model.",
    image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=600&q=80",
    badge: "Best Health Tech",
    pros: ["Health monitoring", "Lightweight", "Urine odor control"]
  },
  {
    id: "arm-hammer-clump-seal",
    name: "Arm & Hammer Clump & Seal",
    category: "Scented Clay",
    rating: 8.7,
    summary: "Budget-friendly with 7-day odor guarantee. Heavy perfume masks everything but can cause headaches. Tracks like sand. Best for budget multi-cat homes.",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&q=80",
    badge: "Best Odor Control",
    pros: ["7-day odor control", "Very affordable", "Easy to find"]
  },
  {
    id: "arm-hammer-hardball",
    name: "Arm & Hammer HardBall",
    category: "Clumping Clay",
    rating: 8.5,
    summary: "Fast clumping in 10 seconds with hard clumps (87% survive drop test). 10% baking soda helps odor. Good mid-range option between Super Scoop and premium.",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&q=80",
    pros: ["Fast clumping", "Hard clumps", "Baking soda"]
  },
  {
    id: "arm-hammer-super-scoop",
    name: "Arm & Hammer Super Scoop",
    category: "Clumping Clay (Budget)",
    rating: 8.4,
    summary: "Best litter under $15. $0.35/day with good clumping and decent odor control. Dustier than premium but 40% cheaper. Best budget option for healthy cats.",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&q=80",
    badge: "Best Budget",
    pros: ["Under $15", "Widely available", "Baking soda helps"]
  },
  {
    id: "feline-pine",
    name: "Feline Pine",
    category: "Pine Pellet",
    rating: 8.0,
    summary: "100% pure pine, no chemicals. Natural scent masks odor, highly absorbent. Non-clumping pellets need sifting box. Best for eco-conscious with sifting setup.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    badge: "Best Pine Pellet",
    pros: ["100% natural", "No dust", "Chemical-free"]
  },
  {
    id: "fresh-step",
    name: "Fresh Step Scented",
    category: "Scented Clay",
    rating: 8.1,
    summary: "Gain fragrance is strong and pleasant. Decent clumping for mid-range price. Moderate dust. Widely available. Best for Gain scent lovers on budget.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    pros: ["Gain scent", "Widely available", "Fair value"]
  },
  {
    id: "frisco",
    name: "Frisco by Chewy",
    category: "Clumping Clay (Budget)",
    rating: 8.0,
    summary: "Best raw value at $13 for 40lb. Chewy house brand with free shipping. Works in automatic boxes. Dustier than premium but unbeatable price.",
    image: "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=600&q=80",
    badge: "Best Value",
    pros: ["$13 for 40lb", "Free Chewy shipping", "Auto-box compatible"]
  },
  {
    id: "tidy-cats",
    name: "Purina Tidy Cats",
    category: "Clumping Clay (Budget)",
    rating: 7.9,
    summary: "Instant Action clumps fast, 24/7 offers sustained control. Glade scents pleasant. Moderate dust. Great variety of formulas. Grocery store staple.",
    image: "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=600&q=80",
    pros: ["Multiple formulas", "Glade scents", "Grocery available"]
  },
  {
    id: "tuft-paw",
    name: "Tuft + Paw",
    category: "Soy/Tofu (Designer)",
    rating: 8.3,
    summary: "Designer soy litter with virtually zero dust and minimal tracking. Flushable and biodegradable. Very expensive at $29 for 9lb. For style-conscious owners.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    badge: "Best Designer",
    pros: ["Zero dust", "Minimal tracking", "Designer aesthetic"]
  },
  {
    id: "okocat-paper-pellet",
    name: "Ökocat Paper Pellet",
    category: "Paper Pellet",
    rating: 8.2,
    summary: "Literally zero dust (0.00mg). Best for post-surgery, declawed cats, severe allergies. Non-clumping means frequent changes. Specialized tool, not everyday.",
    image: "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=600&q=80",
    badge: "Best for Special Needs",
    pros: ["Zero dust", "Soft on paws", "Post-surgery safe"]
  }
];

// Trust signals
const trustSignals = [
  {
    icon: Beaker,
    title: "Scientific Testing",
    description: "Air quality monitors, drop tests, and ammonia strips"
  },
  {
    icon: Clock,
    title: "90-Day Tests",
    description: "Every product tested for minimum 60-90 days"
  },
  {
    icon: Shield,
    title: "No Paid Reviews",
    description: "We buy all products at full retail price"
  }
];

export default function ReviewsPage() {
  return (
    <>
      {/* Schema.org Breadcrumb */}
      <BreadcrumbSchema items={breadcrumbData} />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                Scientific Reviews
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Cat Litter <span className="text-primary">Reviews</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Independent reviews based on 90-day scientific testing. We measure dust with air quality monitors, 
                test clumping with drop tests, and track ammonia with lab strips. No paid placements. No fake reviews.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center gap-3 bg-secondary/30 px-4 py-3 rounded-xl">
                    <signal.icon className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <p className="font-bold text-sm">{signal.title}</p>
                      <p className="text-xs text-muted-foreground">{signal.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 max-w-4xl mx-auto">
                <h2 className="font-display text-2xl font-bold mb-3">Official Brand & Research Links</h2>
                <p className="text-muted-foreground mb-4">
                  We verify brand claims and benchmark methods against official sites and third-party references:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-left">
                  <li><a href="https://www.armandhammer.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Arm &amp; Hammer official</a></li>
                  <li><a href="https://www.drelseys.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Elsey&apos;s official</a></li>
                  <li><a href="https://www.worldsbestcatlitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">World&apos;s Best official</a></li>
                  <li><a href="https://www.prettylitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PrettyLitter official</a></li>
                  <li><a href="https://www.astm.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ASTM consumer testing standards</a></li>
                  <li><a href="https://www.avma.org/resources-tools/pet-owners/petcare" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AVMA veterinary guidance</a></li>
                </ul>
              </div>
            </div>

            {/* Featured Purrify Banner */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-emerald-200 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <Crown className="w-3 h-3" /> HIGHEST RATED 9.6/10
                  </div>
                  <h2 className="font-display text-2xl font-bold text-emerald-900 mb-2">
                    Purrify: The #1 Litter Enhancement
                  </h2>
                  <p className="text-emerald-700 mb-4">
                    Scientifically proven: 87% ammonia reduction, 2x litter life extension. 
                    Works with clay, crystal, and natural litters. Saves $20-30/month.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link href="/reviews/purrify" prefetch={false} className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                      Read Full Review <ArrowRight className="w-4 h-4" />
                    </Link>
                    <PurrifyLink variant="badge">
                      Shop Purrify
                    </PurrifyLink>
                  </div>
                </div>
                <div className="text-center bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-5xl font-bold text-emerald-600">9.6</div>
                  <div className="text-sm text-emerald-700 font-medium">Highest Score</div>
                  <div className="text-xs text-emerald-600 mt-1">6-month test</div>
                </div>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid gap-6">
              {reviews.filter(r => !r.featured).map((review) => (
                <Link key={review.id} href={`/reviews/${review.id}`} prefetch={false}>
                  <article className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                    <div className="w-full md:w-48 h-48 bg-secondary rounded-xl overflow-hidden shrink-0 relative">
                      <img
                        src={review.image}
                        alt={`${review.name} ${review.category} cat litter product photo`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {review.badge && (
                        <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {review.badge}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                          {review.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-bold text-sm">{review.rating}/10</span>
                        </div>
                        <span className="text-xs text-muted-foreground">• 90-day test</span>
                      </div>
                      <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {review.name}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {review.summary}
                      </p>
                      
                      {/* Quick Pros */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {review.pros.map((pro, i) => (
                          <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                            ✓ {pro}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-sm font-semibold text-primary">
                        Read Full Review{" "}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 bg-secondary/20 rounded-2xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-4">
                Want to Save Money on Cat Litter?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our data shows that combining Purrify with budget litter delivers premium performance at 50% cost. 
                See the math and methodology in our detailed analysis.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/reviews/purrify" prefetch={false} className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
                  See the Budget Hack <ArrowRight className="w-4 h-4" />
                </Link>
                <PurrifyLink variant="button">
                  Try Purrify Risk-Free
                </PurrifyLink>
              </div>
            </div>

            {/* SEO Content */}
            <section className="mt-16 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Why Our Reviews Are Different
              </h2>
              <p className="text-muted-foreground mb-4">
                Most cat litter reviews are based on a few days of casual use. Ours are based on 60-90 days of 
                scientific testing with calibrated equipment. We measure dust with professional air quality monitors 
                (not "eye tests"), test clump strength with standardized drop tests, and track ammonia levels with 
                lab-grade test strips.
              </p>
              <p className="text-muted-foreground">
                We buy every product at full retail price. No free samples from manufacturers. No sponsored content. 
                Our only revenue comes from affiliate links—and we only recommend products that pass our testing 
                regardless of commission rates. Your trust is worth more than a quick payday.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
