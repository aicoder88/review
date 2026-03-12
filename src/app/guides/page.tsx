import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Sparkles, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { PurrifyLink } from "@/components/reviews/PurrifyLink";
import { buildPageMetadata } from "@/lib/page-metadata";
import { CollectionPageSchemas } from "@/components/seo/PageSchemas";
import { EditorialTrustBox } from "@/components/seo/EditorialTrustBox";
import { getPublishedGuides } from "@/lib/guide-pages";
import { formatSiteDate, siteUrl, toAbsoluteUrl } from "@/lib/site";

const publishedGuides = getPublishedGuides();
const latestGuideUpdate = [...publishedGuides]
  .map((guide) => guide.dateModified)
  .sort((left, right) => right.localeCompare(left))[0];
const featuredGuideSlugs = ["extend-cat-litter-life", "purrify-budget-litter-hack"];
const featuredGuides = featuredGuideSlugs
  .map((slug) => publishedGuides.find((guide) => guide.slug === slug))
  .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
const remainingGuides = publishedGuides.filter((guide) => !featuredGuideSlugs.includes(guide.slug));

const nextStepLinks = [
  {
    title: "Best Odor Control Cat Litter",
    description: "Start with the roundup most closely tied to ammonia and smell performance.",
    href: "/categories/best-odor-control-cat-litter",
  },
  {
    title: "Best Budget Cat Litter",
    description: "Pair the money-saving guides with the strongest value-focused review picks.",
    href: "/categories/best-budget-cat-litter",
  },
  {
    title: "Best Low-Dust Cat Litter",
    description: "Use the low-dust roundup if respiratory comfort and clean pours matter most.",
    href: "/categories/best-low-dust-cat-litter",
  },
  {
    title: "Compare Cat Litters",
    description: "Move from education into side-by-side decisions with permanent comparison pages.",
    href: "/compare",
  },
  {
    title: "Browse All Reviews",
    description: "See the underlying product pages that the guides reference throughout the site.",
    href: "/reviews",
  },
  {
    title: "Read the Methodology",
    description: "Understand how the scores and tradeoffs are measured before choosing a winner.",
    href: "/methodology",
  },
];

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Cat Litter Guides: Odor, Tracking, Savings, and Maintenance",
    description: `Browse ${publishedGuides.length} cat litter guides on odor control, tracking, litter life, and savings strategies tied to live review data. Updated through ${formatSiteDate(latestGuideUpdate)}.`,
    path: "/guides",
    keywords: [
      "cat litter guide",
      "cat litter odor control guide",
      "how to stop litter tracking",
      "how to make cat litter last longer",
      "save money on cat litter",
      "litter box maintenance guide",
    ],
    openGraphTitle: "Cat Litter Guides | Odor, Tracking, Savings, and Maintenance",
    openGraphDescription: `Browse ${publishedGuides.length} practical guides built from the same review and comparison data used across the site.`,
    twitterTitle: "Cat Litter Guides | Odor, Tracking, Savings, and Maintenance",
    twitterDescription: `Browse ${publishedGuides.length} practical guides built from the same review and comparison data used across the site.`,
  }),
};

export default function GuidesPage() {
    return (
        <>
            <CollectionPageSchemas
                name="ReviewCatLitter guides hub"
                path="/guides"
                breadcrumbs={[
                    { name: "Home", url: siteUrl },
                    { name: "Guides", url: `${siteUrl}/guides` },
                ]}
                items={publishedGuides.map((guide) => ({
                    name: guide.title,
                    url: toAbsoluteUrl(guide.path),
                }))}
            />

            <div className="min-h-screen bg-background">
                <Header />
                <main className="pt-24 pb-20">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                            Expert Guides
                        </span>
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            Cat Care <span className="text-primary">Knowledge Base</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Deep dives into everything from litter box behavior to money-saving hacks.
                        </p>
                        <div className="mt-8 max-w-3xl mx-auto text-left">
                            <EditorialTrustBox
                                updatedOn={latestGuideUpdate}
                                summary={`Every guide is maintained by the ReviewCatLitter editorial team and cross-links back to the live review catalog, comparison pages, and published methodology.`}
                            />
                        </div>
                    </div>

                    {/* Featured Guides */}
                    <div className="mb-16">
                        <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-accent" />
                            Most Popular Guides
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredGuides.map((guide) => (
                                <Link 
                                    key={guide.slug}
                                    href={guide.path}
                                    prefetch={false}
                                    className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 p-8 rounded-3xl hover:shadow-xl transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            {guide.slug === "extend-cat-litter-life" ? (
                                                <Clock className="w-7 h-7 text-white" />
                                            ) : (
                                                <DollarSign className="w-7 h-7 text-white" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{guide.readTime}</span>
                                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">{guide.title}</h3>
                                            <p className="text-emerald-700 mb-4">{guide.description}</p>
                                            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-3 transition-all">
                                                Read Guide <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* All Guides */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {remainingGuides.map((guide) => (
                            <Link
                                key={guide.slug}
                                href={guide.path}
                                prefetch={false}
                                className="bg-card border border-border p-8 rounded-3xl transition-all group hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{guide.readTime}</span>
                                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{guide.title}</h3>
                                <p className="text-muted-foreground mb-6">{guide.description}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                                    Read guide <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="mb-16">
                        <h2 className="font-display text-2xl font-bold mb-6">Where To Go Next</h2>
                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {nextStepLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    prefetch={false}
                                    className="rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-sm"
                                >
                                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                        Next Step
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground mb-4">{item.description}</p>
                                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                        Open page <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-border rounded-3xl p-8 mb-16">
                        <h2 className="font-display text-2xl font-bold mb-4">Methodology & Source Library</h2>
                        <p className="text-muted-foreground mb-4">
                            We use these external references for testing design, veterinary context, and brand verification:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                            <li><a href="https://www.astm.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ASTM testing standards</a></li>
                            <li><a href="https://www.iso.org/standards.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ISO standards database</a></li>
                            <li><a href="https://www.avma.org/resources-tools/pet-owners/petcare" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AVMA pet care references</a></li>
                            <li><a href="https://journals.sagepub.com/home/jfm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Journal of Feline Medicine and Surgery</a></li>
                            <li><a href="https://www.armandhammer.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Arm &amp; Hammer official site</a></li>
                            <li><a href="https://www.drelseys.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dr. Elsey&apos;s official site</a></li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Guide hub updated through {formatSiteDate(latestGuideUpdate)}.
                        </p>
                    </div>

                    {/* Purrify CTA */}
                    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-10 border-2 border-amber-200 text-center">
                        <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                        <h2 className="font-display text-3xl font-bold text-amber-900 mb-4">
                            The Secret Weapon Behind Our Top Guides
                        </h2>
                        <p className="text-lg text-amber-700 max-w-2xl mx-auto mb-6">
                            Most of our money-saving hacks involve one simple product: Purrify activated coconut carbon deodorizer additive.
                            It&apos;s the single best investment you can make for your litter box.
                        </p>
                        <PurrifyLink variant="button">
                            Learn About Purrify
                        </PurrifyLink>
                    </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
