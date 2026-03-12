import type { ReactNode } from 'react';
import Link from 'next/link';
import { Search, Sparkles } from 'lucide-react';

export const navLinks = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'Categories', href: '/categories/best-clumping-cat-litter' },
  { label: 'Compare', href: '/compare' },
  { label: 'Guides', href: '/guides' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Purrify', href: '/purrify-litter-enhancer', highlight: true },
  { label: 'About', href: '/about' },
];

export function HeaderFrame({ mobileMenu }: { mobileMenu: ReactNode }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-primary/10 bg-background/85 py-3 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" prefetch={false} className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-display text-2xl font-bold text-primary">
              Review<span className="text-foreground">CatLitter</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  link.highlight
                    ? 'font-bold text-emerald-600 hover:text-emerald-700'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <form action="/search" className="relative hidden md:block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <input
                type="search"
                name="q"
                placeholder="Search reviews..."
                className="h-10 w-64 rounded-full border border-primary/20 bg-background/70 pl-11 pr-4 text-sm outline-none transition-colors focus:border-primary"
              />
            </form>

            <Link
              href="/#newsletter"
              prefetch={false}
              className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg md:inline-flex"
            >
              Subscribe
            </Link>

            <div className="md:hidden">{mobileMenu}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
