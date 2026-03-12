interface TrustBarProps {
  reviewedProductCount: number;
  comparisonPageCount: number;
  featuredWinnerCount: number;
}

export function TrustBar({
  reviewedProductCount,
  comparisonPageCount,
  featuredWinnerCount,
}: TrustBarProps) {
  const stats = [
    { label: 'Published Reviews', value: reviewedProductCount.toLocaleString('en-US') },
    { label: 'Comparison Matchups', value: comparisonPageCount.toLocaleString('en-US') },
    { label: 'Featured Winners', value: featuredWinnerCount.toLocaleString('en-US') },
    { label: 'Sponsored Reviews', value: 'Zero' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pb-8 border-t border-primary/10 pt-8 relative z-20">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center group cursor-default">
          <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
            {stat.value}
          </div>
          <div className="text-primary/60 text-[10px] md:text-xs font-bold tracking-widest uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
