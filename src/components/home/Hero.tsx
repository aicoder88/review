'use client';

import { useState } from 'react';
import { Search, Star, Award, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Hero() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D261F]">
      {/* Premium Forest Background with Grain */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Ambient Light Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-700" />
      
      {/* Floating Elements with Glassmorphism */}
      <div className="absolute top-32 left-[8%] hidden lg:block animate-fade-in delay-200">
        <div className="relative w-56 h-56 rounded-3xl overflow-hidden glass-dark rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80" alt="Happy cat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-[8%] hidden lg:block animate-fade-in delay-500">
        <div className="relative w-48 h-48 rounded-3xl overflow-hidden glass-dark rotate-[6deg] hover:rotate-0 transition-transform duration-700">
          <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&q=80" alt="Playful cat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute top-[25%] right-[20%] glass-dark px-5 py-3 rounded-full flex items-center gap-3 animate-slide-in-from-bottom delay-700 hidden lg:flex">
        <div className="bg-accent/20 p-2 rounded-full">
          <Star className="w-4 h-4 text-accent fill-accent" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-sm leading-none">500+</span>
          <span className="text-white/60 text-xs">Reviews</span>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Premium Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 animate-fade-in backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-white/80 text-sm font-medium tracking-wide">The #1 Data-Driven Review Platform</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight tracking-tight animate-slide-in-from-bottom">
          <span className="text-white">Find the </span>
          <span className="text-gradient-gold font-bold italic">Perfect</span>
          <br />
          <span className="text-white">Litter for Your </span>
          <span className="text-emerald-400 font-bold">Cat</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-slide-in-from-bottom delay-200">
          We spent <strong className="text-white font-medium">$47,000</strong> testing 547 brands so you don't have to.
          Real lab data. Brutally honest reviews. Zero fluff.
        </p>

        {/* Search Bar - Premium Glass Style */}
        <div 
          className={`relative max-w-2xl mx-auto transition-all duration-500 animate-slide-in-from-bottom delay-300 ${
            searchExpanded ? 'scale-105' : ''
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-500" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 w-6 h-6 group-hover:text-accent transition-colors" />
            <Input
              type="text"
              placeholder="Search 500+ tested products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchExpanded(true)}
              onBlur={() => setSearchExpanded(false)}
              className="w-full h-16 pl-16 pr-36 text-lg bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-full backdrop-blur-xl focus:bg-white/15 focus:ring-1 focus:ring-accent/50 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-amber-400 text-primary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/20">
              Search
            </button>
          </div>
        </div>

        {/* Trust Stats - Simplified & elegant */}
        <div className="flex flex-wrap justify-center gap-12 mt-20 animate-fade-in delay-500">
          <div className="text-center group">
            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-accent transition-colors">$47k+</div>
            <div className="text-white/40 text-sm font-medium tracking-wider uppercase">Spent Testing</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center group">
            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">12,847</div>
            <div className="text-white/40 text-sm font-medium tracking-wider uppercase">Community Members</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center group">
            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-accent transition-colors">0</div>
            <div className="text-white/40 text-sm font-medium tracking-wider uppercase">Sponsored Reviews</div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
