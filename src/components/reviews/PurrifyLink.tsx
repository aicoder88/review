import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PurrifyLinkProps {
  variant?: "inline" | "button" | "badge";
  className?: string;
  children?: React.ReactNode;
}

export function PurrifyLink({
  variant = "inline",
  className,
  children = "Shop Purrify"
}: PurrifyLinkProps) {
  const baseClasses = "font-bold transition-all duration-200";

  const variantClasses = {
    inline: "text-emerald-600 hover:text-emerald-700 underline decoration-2 underline-offset-4 inline-flex items-center gap-1 group",
    button: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-md hover:shadow-lg transform hover:scale-105",
    badge: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300"
  };

  return (
    <a
      href="https://purrify.ca"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
      <ArrowRight className={cn(
        "transition-transform",
        variant === "inline" && "w-4 h-4 group-hover:translate-x-1",
        variant === "button" && "w-5 h-5",
        variant === "badge" && "w-4 h-4"
      )} />
    </a>
  );
}
