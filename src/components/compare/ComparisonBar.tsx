'use client';

import { useComparison } from '@/context/ComparisonContext';
import { X, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function ComparisonBar() {
    const { products, removeProduct, isOpen, setIsOpen } = useComparison();

    if (products.length === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none p-4">
            <div className="bg-white rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-border overflow-hidden pointer-events-auto w-full max-w-4xl transition-transform duration-300 ease-out animate-slide-in-up">
                <div
                    className="bg-foreground text-white px-6 py-3 flex items-center justify-between cursor-pointer hover:bg-black transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="font-bold flex items-center gap-2">
                        Compare Products
                        <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">{products.length}</span>
                    </span>
                    {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                </div>

                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                        <div className="p-4 md:p-6 flex flex-col md:flex-row items-center gap-6">
                            <div className="flex flex-1 gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="relative flex-shrink-0 w-24 md:w-32 group transition-transform duration-200 hover:-translate-y-0.5"
                                    >
                                        <button
                                            onClick={(e) => { e.stopPropagation(); removeProduct(product.id); }}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                        <div className="border border-border rounded-xl p-2 bg-secondary/20 h-24 flex items-center justify-center">
                                            <img src={product.image} alt={`${product.name} cat litter product`} className="w-full h-full object-contain" />
                                        </div>
                                        <p className="text-xs font-medium text-center mt-2 truncate leading-tight">
                                            {product.name}
                                        </p>
                                    </div>
                                ))}

                                {Array.from({ length: Math.max(0, 4 - products.length) }).map((_, i) => (
                                    <div key={`empty-${i}`} className="flex-shrink-0 w-24 md:w-32 hidden md:flex flex-col items-center opacity-50">
                                        <div className="w-full h-24 border border-dashed border-border rounded-xl flex items-center justify-center text-muted-foreground bg-secondary/10">
                                            <span className="text-xs">Empty</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex-shrink-0 w-full md:w-auto">
                                {products.length >= 2 ? (
                                    <Link
                                        href={`/compare?products=${products.map((product) => product.id).join(',')}`}
                                        className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                                    >
                                        Compare Now
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                ) : (
                                    <button disabled className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-secondary text-muted-foreground font-bold rounded-xl cursor-not-allowed">
                                        Add 1 more
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
