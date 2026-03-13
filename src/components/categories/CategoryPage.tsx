import { ReactNode } from 'react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { QuickPickCard } from './ui/QuickPickCard';
import { CategoryProductExplorer } from './CategoryProductExplorer';
import { CategoryComparisonTable, ProductSpec } from './ui/CategoryComparisonTable';
import { FadeUp } from '@/components/ui/motion';
import Link from 'next/link';
import { CollectionPageSchemas } from '@/components/seo/PageSchemas';
import { EditorialTrustBox } from '@/components/seo/EditorialTrustBox';
import { RelatedArticles } from '@/components/content/RelatedArticles';
import { siteUrl, toAbsoluteUrl } from '@/lib/site';
import { getRelatedCategoryCardsForCategory, getRelatedGuideCardsForCategory } from '@/lib/internal-links';
import { getCategoryRoundupCopy } from '@/lib/category-pages';

export interface ProductGridItem {
    id: string;
    name: string;
    image: string;
    score: number;
    price: string;
    type: string;
    weight: string;
    quickTake: string;
    pros: string[];
    cons: string[];
    reviewUrl: string;
    priceCheckUrl: string;
    tags: string[]; // For filtering
}

export interface CategoryData {
    path: string;
    title: string;
    description: string;
    stats: {
        tested: number;
        reviewedThrough: string;
        reviewedThroughDate?: string;
        priceRange: string;
    };
    quickPicks: {
        overall: ProductGridItem & { bestFor: string };
        value: ProductGridItem & { bestFor: string };
        niche: ProductGridItem & { bestFor: string; nicheLabel?: string };
    };
    products: ProductGridItem[]; // Full list
    comparisonProducts: ProductSpec[]; // Comparison data
    faq: { question: string; answer: string }[];
}

interface CategoryPageProps extends CategoryData {
    children: ReactNode; // Buying guide
}

export function CategoryPage({
    path,
    title,
    description,
    stats,
    quickPicks,
    products,
    comparisonProducts,
    faq,
    children
}: CategoryPageProps) {
    const slug = path.split('/').filter(Boolean).pop() ?? '';
    const relatedGuides = getRelatedGuideCardsForCategory(slug);
    const relatedCategories = getRelatedCategoryCardsForCategory(slug);
    const roundupCopy = getCategoryRoundupCopy(slug);
    const breadcrumbItems = [
        { name: 'Home', url: siteUrl },
        { name: title, url: toAbsoluteUrl(path) },
    ];

    const jumpLinks = [
        { label: 'Overview', href: '#overview' },
        { label: 'Winners', href: '#winners' },
        { label: 'All Picks', href: '#all-reviews' },
        { label: 'Compare', href: '#compare-table' },
        { label: 'Buying Guide', href: '#buying-guide' },
        { label: 'FAQ', href: '#faq' },
    ];

    if (relatedGuides.length > 0) {
        jumpLinks.push({ label: 'Guides', href: '#guides' });
    }

    return (
        <>
            <CollectionPageSchemas
                name={`${title} category roundup`}
                path={path}
                breadcrumbs={breadcrumbItems}
                items={products.map((product) => ({
                    name: product.name,
                    url: toAbsoluteUrl(product.reviewUrl),
                }))}
                faqs={faq}
            />

            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-24 pb-20">

                {/* Category Hero */}
                <section className="container mx-auto px-6 mb-16 text-center max-w-4xl">
                    <FadeUp>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">{title}</h1>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
                            {description}
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.2} className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest text-primary/80">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {stats.tested} Reviewed Picks
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Reviewed Through {stats.reviewedThrough}
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {stats.priceRange} Price Range
                        </span>
                    </FadeUp>
                    <FadeUp delay={0.3} className="mt-8">
                        <EditorialTrustBox
                            updatedOn={stats.reviewedThroughDate}
                            summary={`This roundup is maintained by the ReviewCatLitter editorial team and ties every winner back to hands-on review data, methodology notes, and current comparison coverage.`}
                            className="mx-auto max-w-3xl text-left"
                        />
                    </FadeUp>
                </section>

                <section className="container mx-auto px-6 mb-16 max-w-5xl" id="overview">
                    <div className="rounded-3xl border border-border bg-white/90 p-6 md:p-8 shadow-sm">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                            <div className="max-w-3xl">
                                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                                    How to use this roundup
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    {roundupCopy?.intro?.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                            <nav aria-label={`${title} jump links`} className="lg:w-72">
                                <div className="rounded-2xl bg-secondary/30 p-4">
                                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                                        Jump to
                                    </div>
                                    <div className="flex flex-wrap gap-2 lg:flex-col">
                                        {jumpLinks.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {roundupCopy?.criteria?.length ? (
                            <div className="mt-8">
                                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                                    {roundupCopy.criteriaTitle}
                                </h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    {roundupCopy.criteria.map((item) => (
                                        <div key={item.title} className="rounded-2xl border border-border bg-secondary/20 p-5">
                                            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                                            <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/reviews"
                                prefetch={false}
                                className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary"
                            >
                                Browse all reviews
                            </Link>
                            <Link
                                href="/compare"
                                prefetch={false}
                                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                                Open comparison tool
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Quick Picks */}
                <section className="container mx-auto px-6 mb-24" id="winners">
                    <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-accent">★</span>
                        The Winners (Skip the Research)
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <FadeUp delay={0.3}>
                            <QuickPickCard
                                type="overall"
                                productName={quickPicks.overall.name}
                                image={quickPicks.overall.image}
                                score={quickPicks.overall.score}
                                bestFor={quickPicks.overall.bestFor}
                                reviewUrl={quickPicks.overall.reviewUrl}
                                priceCheckUrl={quickPicks.overall.priceCheckUrl}
                            />
                        </FadeUp>
                        <FadeUp delay={0.4}>
                            <QuickPickCard
                                type="value"
                                productName={quickPicks.value.name}
                                image={quickPicks.value.image}
                                score={quickPicks.value.score}
                                bestFor={quickPicks.value.bestFor}
                                reviewUrl={quickPicks.value.reviewUrl}
                                priceCheckUrl={quickPicks.value.priceCheckUrl}
                            />
                        </FadeUp>
                        <FadeUp delay={0.5}>
                            <QuickPickCard
                                type="niche"
                                productName={quickPicks.niche.name}
                                image={quickPicks.niche.image}
                                score={quickPicks.niche.score}
                                bestFor={quickPicks.niche.bestFor}
                                reviewUrl={quickPicks.niche.reviewUrl}
                                priceCheckUrl={quickPicks.niche.priceCheckUrl}
                            />
                        </FadeUp>
                    </div>
                </section>

                <CategoryProductExplorer products={products} />

                {/* Comparison Table */}
                <section className="container mx-auto px-6 mb-24" id="compare-table">
                    <h2 className="font-display text-3xl font-bold mb-8 text-center">Compare All Products</h2>
                    <CategoryComparisonTable products={comparisonProducts} />
                </section>

                {/* Buying Guide */}
                <section className="container mx-auto px-6 mb-24" id="buying-guide">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary">
                        {children}
                    </div>
                </section>

                {/* FAQ */}
                <section className="container mx-auto px-6 mb-24 max-w-3xl" id="faq">
                    <h2 className="font-display text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faq.map((item, i) => (
                            <div key={i} className="bg-white border border-border rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-foreground">{item.question}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {relatedCategories.length > 0 && (
                    <section className="container mx-auto px-6 mb-24 max-w-6xl">
                        <RelatedArticles
                            articles={relatedCategories}
                            title="Explore Related Roundups"
                        />
                    </section>
                )}

                {relatedGuides.length > 0 && (
                    <section className="container mx-auto px-6 mb-24 max-w-6xl" id="guides">
                        <RelatedArticles
                            articles={relatedGuides}
                            title="Guides That Go Deeper"
                        />
                    </section>
                )}

                </main>
                <Footer />
            </div>
        </>
    );
}
