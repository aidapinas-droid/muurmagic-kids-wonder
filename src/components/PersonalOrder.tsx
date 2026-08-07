import { WHATSAPP_URL } from "@/data/library";

const ways = [
  {
    emoji: "💬",
    title: "WhatsApp",
    text: "Stuur een bericht en we regelen je bestelling samen.",
    href: WHATSAPP_URL,
    cta: "Stuur een bericht",
  },
  {
    emoji: "💳",
    title: "Tikkie",
    text: "Betaal eenvoudig met een Tikkie-betaalverzoek.",
    href: null,
    cta: null,
  },
  {
    emoji: "🏠",
    title: "Contant bij afhalen",
    text: "Kom je langs? Dan kan contant betalen ook.",
    href: null,
    cta: null,
  },
];

export function PersonalOrder() {
  return (
    <section id="persoonlijk-bestellen" className="bg-gradient-soft py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Liever persoonlijk bestellen?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ways.map((w) => (
            <article
              key={w.title}
              className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="text-4xl" aria-hidden="true">
                {w.emoji}
              </span>
              <h3 className="mt-4 font-baloo text-xl font-extrabold text-foreground">
                {w.title}
              </h3>
              <p className="mt-2 font-nunito text-sm leading-relaxed text-muted-foreground">
                {w.text}
              </p>
              {w.href && (
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block font-nunito text-sm font-bold text-primary hover:underline"
                >
                  {w.cta} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
