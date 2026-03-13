interface ScoreGaugeProps {
    score: number; // 0-10
    label: string;
    description?: string;
}

export function ScoreGauge({ score, label, description }: ScoreGaugeProps) {
    // Color logic based on score
    const getColor = (s: number) => {
        if (s >= 9) return "bg-emerald-500";
        if (s >= 7) return "bg-accent"; // Gold/Yellow
        return "bg-rose-500";
    };

    const widthPercentage = (score / 10) * 100;

    return (
        <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
                <h4 className="font-display font-bold text-foreground text-lg uppercase tracking-wide">
                    {label}
                </h4>
                <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-bold ${getColor(score).replace('bg-', 'text-')}`}>
                        {score}
                    </span>
                    <span className="text-muted-foreground font-bold text-sm">/10</span>
                </div>
            </div>

            {/* Progress Bar Container */}
            <div className="h-4 bg-secondary rounded-full overflow-hidden relative">
                <div
                    className={`h-full ${getColor(score)} rounded-full relative z-10 animate-score-gauge`}
                    style={{ width: `${widthPercentage}%` }}
                />
                {/* Striped Background Pattern (Optional texture) */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            </div>

            {description && (
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
