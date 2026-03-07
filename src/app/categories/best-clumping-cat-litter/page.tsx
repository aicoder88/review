import type { Metadata } from "next";
import { BestClumpingClient } from "./BestClumpingClient";
import { getCategoryPageMetadata } from "@/lib/category-pages";

export const metadata: Metadata = getCategoryPageMetadata('best-clumping-cat-litter');

export default function BestClumpingPage() {
    return <BestClumpingClient />;
}
