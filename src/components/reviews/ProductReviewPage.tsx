import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeftRight, ArrowRight, Check, X, Info, ShoppingCart } from 'lucide-react';
import { ScoreBadge } from './ui/ScoreBadge';
import { ScoreMeter } from './ui/ScoreMeter';
import { ReviewComparisonIsland } from './ui/ReviewComparisonIsland';
import { RecommendedAddOn } from './RecommendedAddOn';
import { OdorEliminationBonus } from './OdorEliminationBonus';
import { FadeUp } from '@/components/ui/motion';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { ReviewTrustPanel } from '@/components/seo/ReviewTrustPanel';
import { RelatedArticles } from '@/components/content/RelatedArticles';
import { getRelatedResourceCardsForProduct } from '@/lib/internal-links';
import {
    formatCatalogDate,
    getCatalogProductByName,
    getComparisonMatchupHref,
    getComparisonMatchupsForProduct,
} from '@/lib/product-catalog';
import { methodologyPath } from '@/lib/site';

export interface ReviewData {
    name: string;
    category: string;
    image: string;
    imageAlt?: string;
    overallScore: number;
    specs: {
        type: string;
        price: string;
        weight: string;
        dust: string;
        clumping: string;
        odor: string;
        tracking: string;
        value: string;
    };
    scores: {
        dust: number;
        clumping: number;
        odor: number;
        tracking: number;
        value: number;
    };
    pros: string[];
    cons: string[];
    verdict: {
        quickTake: string;
        worthIt: string;
        skipIt: string;
    };
    priceCheckUrl: string;
    priceCheckLabel?: string;
    researchLinks?: Array<{
        label: string;
        href: string;
    }>;
}

interface ProductReviewPageProps {
    data: ReviewData;
    children: ReactNode; // For the long-form content
}

export function ProductReviewPage({ data, children }: ProductReviewPageProps) {
    const currentCatalogProduct = getCatalogProductByName(data.name);
    const headToHeadMatchups = currentCatalogProduct
        ? getComparisonMatchupsForProduct(currentCatalogProduct.id, 3)
        : [];
    const relatedResources = currentCatalogProduct
        ? getRelatedResourceCardsForProduct(currentCatalogProduct.id)
        : [];
    const featuredResources = relatedResources.slice(0, 4);
    const quickNavItems = [
        { label: 'At a glance', href: '#at-a-glance' },
        { label: 'Pros and cons', href: '#pros-and-cons' },
        { label: 'Full review', href: '#full-review' },
        { label: 'Compare options', href: '#compare-options' },
        { label: 'Research links', href: '#research-links' },
    ];
    const verdictLabel =
        data.overallScore >= 9
            ? {
                text: `${data.name} is one of our recommended picks`,
                className: 'bg-green-50 text-green-700',
                iconClassName: 'bg-green-100',
                icon: '✓',
            }
            : data.overallScore >= 8
                ? {
                    text: `${data.name} is worth considering for the right home`,
                    className: 'bg-amber-50 text-amber-700',
                    iconClassName: 'bg-amber-100',
                    icon: '•',
                }
                : {
                    text: `${data.name} has too many tradeoffs to recommend broadly`,
                    className: 'bg-red-50 text-red-700',
                    iconClassName: 'bg-red-100',
                    icon: '!',
                };
    const priceCheckLabel = data.priceCheckLabel ?? 'Check Best Price';
    const researchLinks = data.researchLinks ?? [
        { label: 'Arm & Hammer Official Site', href: 'https://www.armandhammer.com' },
        { label: "Dr. Elsey's Official Site", href: 'https://www.drelseys.com' },
        { label: "World's Best Cat Litter Official Site", href: 'https://www.worldsbestcatlitter.com' },
        { label: 'PrettyLitter Official Site', href: 'https://www.prettylitter.com' },
        { label: 'AVMA Pet Care Guidance', href: 'https://www.avma.org/resources-tools/pet-owners/petcare' },
        { label: 'Journal of Feline Medicine and Surgery', href: 'https://journals.sagepub.com/home/jfm' },
        { label: 'ASTM Testing Standards', href: 'https://www.astm.org' },
        { label: 'EPA Indoor Air Quality', href: 'https://www.epa.gov/indoor-air-quality-iaq' },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-20">
                {/* Breadcrumb - Simple */}
                <div className="container mx-auto px-6 mb-8 text-sm text-muted-foreground">
                    <Link href="/" prefetch={false} className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/reviews" prefetch={false} className="hover:text-primary">Reviews</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium">{data.name}</span>
                </div>

                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-16">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left: Images & Score */}
                        <div className="lg:col-span-7">
                            <div className="relative bg-secondary/30 rounded-3xl p-8 lg:p-12 border border-border overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                                {/* Score Badge Overlay */}
                                <div className="absolute top-6 right-6 z-10 flex flex-col items-center">
                                    <ScoreBadge score={data.overallScore} size="xl" className="shadow-2xl mb-2" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full">Editor&apos;s Score</span>
                                </div>

                                {/* Main Image */}
                                <div className="relative aspect-[4/3] flex items-center justify-center">
                                    <img
                                        src={data.image}
                                        alt={data.imageAlt ?? `${data.name} cat litter product photo`}
                                        className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Info & Quick Take */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <FadeUp>
                                <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-4">
                                    {data.category}
                                </div>
                                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                    {data.name}
                                </h1>
                                <ReviewTrustPanel reviewedOn={currentCatalogProduct?.lastReviewedAt} />
                                {currentCatalogProduct?.lastReviewedAt && (
                                    <p className="mb-6 text-sm text-muted-foreground">
                                        Verdict based on the latest hands-on review cycle ending {formatCatalogDate(currentCatalogProduct.lastReviewedAt)}.
                                    </p>
                                )}
                            </FadeUp>

                            {/* Quick Verdict Box */}
                            <FadeUp delay={0.1} className="bg-foreground text-white p-6 rounded-2xl shadow-xl mb-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-accent" />
                                    Our Quick Verdict
                                </h3>
                                <div className="text-white/80 leading-relaxed space-y-4">
                                    <p>{data.verdict.quickTake}</p>
                                    <div className="pt-4 border-t border-white/10 text-sm">
                                        <p className="mb-2"><strong className="text-green-400">Worth it if:</strong> {data.verdict.worthIt}</p>
                                        <p><strong className="text-red-400">Skip it if:</strong> {data.verdict.skipIt}</p>
                                    </div>
                                </div>
                            </FadeUp>

                            {/* CTAs */}
                            <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4">
                                <a href={data.priceCheckUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    {priceCheckLabel}
                                </a>
                            </FadeUp>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 mb-12">
                    <div className="grid gap-6 xl:grid-cols-[1.4fr,1fr]">
                        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                Jump Through This Review
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {quickNavItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-full border border-border bg-secondary/20 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <Link
                                    href={methodologyPath}
                                    prefetch={false}
                                    className="rounded-full border border-border bg-secondary/20 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                                >
                                    Methodology
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-border bg-secondary/20 p-6 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                Best Next Steps
                            </div>
                            <div className="space-y-3">
                                {featuredResources.map((resource) => (
                                    <Link
                                        key={resource.url}
                                        href={resource.url}
                                        prefetch={false}
                                        className="block rounded-2xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                                    >
                                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                                            {resource.type}
                                        </div>
                                        <div className="font-display text-xl font-bold mb-1">{resource.title}</div>
                                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                                    </Link>
                                ))}
                                {featuredResources.length === 0 && (
                                    <Link
                                        href={methodologyPath}
                                        prefetch={false}
                                        className="block rounded-2xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                                    >
                                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                                            Methodology
                                        </div>
                                        <div className="font-display text-xl font-bold mb-1">How We Score Reviews</div>
                                        <p className="text-sm text-muted-foreground">
                                            See how dust, clumping, odor, tracking, and value are measured across the review catalog.
                                        </p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Main Article Column */}
                        <div className="lg:col-span-8">

                            {/* Specs Table - At a Glance */}
                            <FadeUp delay={0.3} className="mb-12" id="at-a-glance">
                                <h2 className="font-display text-3xl font-bold mb-6">At A Glance</h2>
                                <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
                                    <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                                        <div className="p-6 space-y-4">
                                            <div className="flex justify-between items-center">
                                                <div className={`${verdictLabel.className} px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2`}>
                                                    <span className={`${verdictLabel.iconClassName} p-1 rounded-full`}>{verdictLabel.icon}</span>
                                                    {verdictLabel.text}
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground text-sm font-medium">Price Tier</span>
                                                <span className="font-bold">{data.specs.price}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground text-sm font-medium">Weight</span>
                                                <span className="font-bold">{data.specs.weight}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground text-sm font-medium">Dust Level</span>
                                                <span className="font-bold text-green-600">{data.specs.dust}</span>
                                            </div>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <ScoreMeter score={data.scores.clumping} label="Clumping" showScore />
                                            <ScoreMeter score={data.scores.odor} label="Odor Control" showScore />
                                            <ScoreMeter score={data.scores.tracking} label="Tracking" showScore />
                                            <ScoreMeter score={data.scores.value} label="Value" showScore />
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>

                            {/* Pros & Cons */}
                            <FadeUp delay={0.4} className="mb-16" id="pros-and-cons">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                                        <h3 className="font-bold text-xl text-green-800 mb-4 flex items-center gap-2">
                                            <Check className="w-6 h-6" /> What We Loved
                                        </h3>
                                        <ul className="space-y-3">
                                            {data.pros.map((pro, i) => (
                                                <li key={i} className="flex items-start gap-2 text-green-900/80 leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                                        <h3 className="font-bold text-xl text-red-800 mb-4 flex items-center gap-2">
                                            <X className="w-6 h-6" /> What Fell Short
                                        </h3>
                                        <ul className="space-y-3">
                                            {data.cons.map((con, i) => (
                                                <li key={i} className="flex items-start gap-2 text-red-900/80 leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeUp>

                            {/* Long Form Content */}
                            <div
                                id="full-review"
                                className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-img:rounded-3xl prose-a:text-primary max-w-none"
                            >
                                {children}
                            </div>

                            <div id="research-links" className="mt-10 bg-secondary/20 border border-border rounded-2xl p-6">
                                <h3 className="font-display text-2xl font-bold mb-3">External Resources</h3>
                                <p className="text-muted-foreground mb-4">
                                    Official brand pages and third-party references used to cross-check claims:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                                    {researchLinks.map((resource) => (
                                        <li key={resource.href}>
                                            <a href={resource.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                {resource.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Odor Elimination Bonus Section */}
                            <OdorEliminationBonus productName={data.name} />

                            {headToHeadMatchups.length > 0 && (
                                <section id="compare-options" className="mt-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                            <ArrowLeftRight className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold">Head-to-Head Matchups</h3>
                                            <p className="text-muted-foreground">
                                                Permanent comparison pages for the closest alternatives.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-3">
                                        {headToHeadMatchups.map((matchup) => {
                                            const [leftProduct, rightProduct] = matchup.products;

                                            return (
                                                <Link
                                                    key={matchup.slug}
                                                    href={getComparisonMatchupHref(matchup.slug)}
                                                    prefetch={false}
                                                    className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                                                >
                                                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                                        Compare
                                                    </div>
                                                    <h4 className="font-display text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                                                        {leftProduct.name} vs {rightProduct.name}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        {matchup.insight.summary}
                                                    </p>
                                                    <div className="text-sm font-semibold text-foreground mb-4">
                                                        Winner: <span className="text-primary">{matchup.insight.winner.name}</span>
                                                    </div>
                                                    <div className="inline-flex items-center text-sm font-semibold text-primary">
                                                        Read comparison
                                                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </section>
                            )}

                            {relatedResources.length > 0 && (
                                <RelatedArticles
                                    articles={relatedResources}
                                    title="Continue Your Research"
                                />
                            )}

                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-8">
                            {/* Score Breakdown Widget (Sticky optional) */}
                            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm sticky top-24">
                                <h3 className="font-display font-bold text-xl mb-6">Detailed Scoring</h3>
                                <div className="space-y-6">
                                    <ScoreMeter score={data.scores.dust} label="Dust Control" className="mb-2" />
                                    <ScoreMeter score={data.scores.clumping} label="Clumping Strength" className="mb-2" />
                                    <ScoreMeter score={data.scores.odor} label="Odor Control" className="mb-2" />
                                    <ScoreMeter score={data.scores.tracking} label="Tracking" className="mb-2" />
                                    <ScoreMeter score={data.scores.value} label="Value For Money" className="mb-2" />
                                </div>
                                <div className="mt-8 pt-6 border-t border-border">
                                    <a href={data.priceCheckUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-primary text-white font-bold text-center rounded-xl shadow-lg shadow-primary/10 hover:bg-primary/90 transition-all">
                                        {priceCheckLabel}
                                    </a>
                                    <p className="text-center text-xs text-muted-foreground mt-3">
                                        We may earn a commission from links.
                                    </p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-border space-y-3">
                                    <Link
                                        href={methodologyPath}
                                        prefetch={false}
                                        className="block rounded-xl bg-secondary/20 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                                    >
                                        See how this review was scored
                                    </Link>
                                    {featuredResources.slice(0, 2).map((resource) => (
                                        <Link
                                            key={resource.url}
                                            href={resource.url}
                                            prefetch={false}
                                            className="block rounded-xl bg-secondary/20 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                                        >
                                            {resource.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>

                    </div>
                </section>

                <RecommendedAddOn productName={data.name} />

                <ReviewComparisonIsland currentProduct={data.name} />

            </main>
            <Footer />
        </div>
    );
}
