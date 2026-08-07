const reasons = [
  { emoji: "♻️", title: "Herbruikbaar", text: "Gelamineerd en met velcro: steeds opnieuw te spelen." },
  { emoji: "🧠", title: "Educatief", text: "Spelenderwijs leren herkennen, benoemen en sorteren." },
  { emoji: "🎨", title: "Creatief", text: "Ruimte voor fantasie, kleuren en zelf verhalen bedenken." },
  { emoji: "💜", title: "Met liefde gemaakt", text: "Elk speelboek wordt met zorg ontworpen en gemaakt." },
];

export function WhyMuurMagic() {
  return (
    <section id="waarom" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Waarom MuurMagic?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ emoji, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="text-4xl" aria-hidden="true">
                {emoji}
              </span>
              <h3 className="mt-4 font-baloo text-lg font-extrabold text-foreground">
                {title}
              </h3>
              <p className="mt-2 font-nunito text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
