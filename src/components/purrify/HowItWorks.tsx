export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sprinkle Weekly",
      description: "Add 1 tablespoon of Purrify to your litter box once per week. Mix gently into existing litter.",
      icon: "🥄"
    },
    {
      number: 2,
      title: "Probiotics Activate",
      description: "Good bacteria colonize the litter and start consuming odor-causing ammonia compounds at the source.",
      icon: "🦠"
    },
    {
      number: 3,
      title: "Enjoy 2x Longer Life",
      description: "Litter stays fresh for 4-6 weeks instead of 2-3. Scoop daily, change monthly instead of bi-weekly.",
      icon: "✨"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map(step => (
        <div key={step.number} className="text-center">
          <div className="text-6xl mb-4">{step.icon}</div>
          <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
            {step.number}
          </div>
          <h3 className="text-xl font-bold mb-3">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
