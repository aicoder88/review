const testimonials = [
  {
    name: "Sarah M.",
    cats: 3,
    text: "Purrify literally changed my life. I was spending $80/month on litter. Now it's $35 and NO smell. My guests don't even know I have cats!",
    savings: "$45/month",
    rating: 5
  },
  {
    name: "Mike T.",
    cats: 2,
    text: "I was skeptical about probiotics, but the science is real. Day 3 the smell was GONE. Now I'm a believer and telling all my cat parent friends.",
    savings: "$30/month",
    rating: 5
  },
  {
    name: "Jennifer L.",
    cats: 1,
    text: "Best $19 I've ever spent. My apartment is tiny and the litter box used to be so embarrassing. Now? Zero odor. I actually have people over again.",
    savings: "$25/month",
    rating: 5
  },
  {
    name: "David K.",
    cats: 4,
    text: "With 4 cats, I was changing litter boxes twice a week. Exhausting and expensive. Purrify cut that to once a month. Game changer.",
    savings: "$60/month",
    rating: 5
  },
  {
    name: "Amanda R.",
    cats: 2,
    text: "Works exactly as advertised. I use cheap clay litter with Purrify and it performs better than the $40 premium brands I used to buy.",
    savings: "$35/month",
    rating: 5
  },
  {
    name: "Chris P.",
    cats: 1,
    text: "My cat has digestive issues and the smell was unbearable. Purrify fixed it in 48 hours. I can't believe how well this works.",
    savings: "$20/month",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          2,847 Cat Parents Love Purrify
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real results from real cat owners
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.cats} cat{testimonial.cats > 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              <p className="mb-4 italic text-gray-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="bg-emerald-50 text-emerald-700 font-bold text-center py-2 rounded-lg text-sm">
                Saves {testimonial.savings}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3">
            <span className="text-amber-400 text-xl">★★★★★</span>
            <span className="font-bold">4.8/5</span>
            <span className="text-muted-foreground">from 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
