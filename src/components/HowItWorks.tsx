const steps = [
  { emoji: "🖨️", title: "Printen", text: "Print het speelboek thuis of bij een printshop." },
  { emoji: "✂️", title: "Knippen", text: "Knip de onderdelen netjes uit langs de lijnen." },
  { emoji: "📄", title: "Lamineren", text: "Lamineer alles zodat het jarenlang meegaat." },
  { emoji: "🧷", title: "Velcro plakken", text: "Plak de klittenband op de plaatjes en pagina's." },
  { emoji: "🎉", title: "Spelen", text: "Klaar! Spelen, verplaatsen en steeds opnieuw beginnen." },
];

export function HowItWorks() {
  return (
    <section id="hoe-werkt-het" className="bg-gradient-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Hoe werkt het?
          </h2>
          <p className="mt-4 font-nunito text-base text-muted-foreground sm:text-lg">
            In vijf simpele stappen van printbaar bestand naar echt speelgoed.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-3xl border border-border/60 bg-card p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-nunito text-xs font-bold text-primary-foreground shadow-soft">
                Stap {i + 1}
              </span>
              <span className="mt-3 block text-4xl" aria-hidden="true">
                {s.emoji}
              </span>
              <h3 className="mt-3 font-baloo text-xl font-extrabold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 font-nunito text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
