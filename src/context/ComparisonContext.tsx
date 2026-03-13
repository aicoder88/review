'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Basic product info needed for the bar/context
export interface CompareProduct {
    id: string;
    name: string;
    image: string;
    price: string;
}

interface ComparisonContextType {
    products: CompareProduct[];
    addProduct: (product: CompareProduct) => void;
    removeProduct: (productId: string) => void;
    isInComparison: (productId: string) => boolean;
    clearComparison: () => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);
const COMPARISON_STORAGE_KEY = 'comparison_products';

function persistProducts(products: CompareProduct[]) {
    localStorage.setItem(COMPARISON_STORAGE_KEY, JSON.stringify(products));
}

export function ComparisonProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<CompareProduct[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(COMPARISON_STORAGE_KEY);
        if (saved) {
            try {
                setProducts(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse comparison state', e);
            }
        }
    }, []);

    // Sync to localStorage
    useEffect(() => {
        persistProducts(products);
    }, [products]);

    const addProduct = (product: CompareProduct) => {
        if (products.some(p => p.id === product.id)) return; // No dupes
        if (products.length >= 4) {
            // Typically we'd show a toast here - "Max 4 products"
            alert("You can compare up to 4 products at a time.");
            return;
        }
        setProducts(prev => {
            const nextProducts = [...prev, product];
            persistProducts(nextProducts);
            return nextProducts;
        });
        setIsOpen(true);
    };

    const removeProduct = (productId: string) => {
        setProducts(prev => {
            const nextProducts = prev.filter(p => p.id !== productId);
            persistProducts(nextProducts);
            return nextProducts;
        });
    };

    const isInComparison = (productId: string) => {
        return products.some(p => p.id === productId);
    };

    const clearComparison = () => {
        setProducts(() => {
            persistProducts([]);
            return [];
        });
    };

    return (
        <ComparisonContext.Provider value={{
            products,
            addProduct,
            removeProduct,
            isInComparison,
            clearComparison,
            isOpen,
            setIsOpen
        }}>
            {children}
        </ComparisonContext.Provider>
    );
}

export function useComparison() {
    const context = useContext(ComparisonContext);
    if (context === undefined) {
        throw new Error('useComparison must be used within a ComparisonProvider');
    }
    return context;
}

export function useOptionalComparison() {
    return useContext(ComparisonContext);
}
