import { Star } from "./Sparkle";

const reviews = [
  {
    name: "Sanne",
    text: "Onze dochter speelt er elke dag mee. Print, lamineer, klaar — supersimpel.",
  },
  {
    name: "Mark",
    text: "Perfect voor onderweg. Geen scherm nodig en toch een uur rust in de auto.",
  },
  {
    name: "Ilse",
    text: "Mooie illustraties en echt leerzaam. We hebben meteen een tweede thema besteld.",
  },
];

export function Testimonials() {
  return (
    <section id="ervaringen" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Wat ouders zeggen
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl border border-border/60 bg-cream p-7 shadow-card transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} color="oklch(0.86 0.14 85)" />
                ))}
              </div>
              <blockquote className="mt-4 font-nunito text-base leading-relaxed text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 font-baloo text-sm font-bold text-primary">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
