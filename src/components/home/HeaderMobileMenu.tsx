'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { navLinks } from '@/components/home/header-shared';

export function HeaderMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="rounded-lg p-2 text-primary transition-colors"
        aria-expanded={mobileMenuOpen}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {mobileMenuOpen ? (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-background/95 p-6 shadow-xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col space-y-4">
            <form action="/search" className="mb-4">
              <div className="relative">
                <input
                  type="search"
                  name="q"
                  placeholder="Search reviews..."
                  className="w-full rounded-xl border border-border bg-background py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>
            </form>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`text-lg font-medium transition-colors ${
                  link.highlight
                    ? 'font-bold text-emerald-600 hover:text-emerald-700'
                    : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <hr className="border-border" />

            <Link
              href="/#newsletter"
              prefetch={false}
              className="w-full rounded-xl bg-primary py-3 text-center font-semibold text-primary-foreground shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
