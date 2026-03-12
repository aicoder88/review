import Link from 'next/link';
import { Facebook, Heart, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  reviews: [
    { label: 'All Reviews', href: '/reviews' },
    { label: 'Best Clumping', href: '/categories/best-clumping-cat-litter' },
    { label: 'Budget Picks', href: '/categories/best-budget-cat-litter' },
    { label: 'Natural & Eco', href: '/categories/best-natural-cat-litter' },
  ],
  resources: [
    { label: 'Testing Methodology', href: '/methodology' },
    { label: 'All Guides', href: '/guides' },
    { label: 'Stop Litter Tracking', href: '/guides/stop-litter-tracking' },
    { label: 'Eliminate Litter Smell', href: '/guides/eliminate-litter-smell' },
    { label: 'Compare Products', href: '/compare' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Purrify Carbon Additive', href: '/purrify-litter-enhancer' },
    { label: 'Contact', href: '/about' },
    { label: 'Black Friday 2025', href: '/black-friday-cat-litter-deals-2025' },
  ],
};

export function FooterContent() {
  return (
    <footer className="relative overflow-hidden bg-foreground">
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
      <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-12 opacity-[0.03]">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="currentColor"
          className="text-secondary"
        >
          <path d="M100 50 L80 30 L70 40 L75 60 L85 70 L100 75 L115 70 L125 60 L130 40 L120 30 L100 50 Z M100 75 Q80 80 70 100 Q65 120 70 140 Q75 155 90 160 L110 160 Q125 155 130 140 Q135 120 130 100 Q120 80 100 75 Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-display text-3xl font-bold text-secondary">
              Review<span className="text-accent">CatLitter</span>
            </h3>
            <p className="mb-8 leading-relaxed text-secondary/60">
              Independent, data-driven cat litter reviews for discerning cat parents since 2025.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'Youtube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-display text-lg font-bold text-secondary">Reviews</h4>
            <ul className="space-y-4">
              {footerLinks.reviews.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="group flex items-center gap-2 text-secondary/60 transition-colors duration-300 hover:text-accent"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-lg font-bold text-secondary">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="group flex items-center gap-2 text-secondary/60 transition-colors duration-300 hover:text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-lg font-bold text-secondary">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="group flex items-center gap-2 text-secondary/60 transition-colors duration-300 hover:text-accent"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-secondary/40">
              © 2025 ReviewCatLitter.com. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-secondary/40">
              Made with <Heart className="h-4 w-4 fill-accent text-accent" /> for cat parents everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
