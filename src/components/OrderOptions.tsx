import { Button } from "@/components/ui/button";
import { Scissors, BookOpen, Library } from "lucide-react";
import { PAYHIP_URL, WHATSAPP_URL } from "@/data/library";

const cards = [
  {
    icon: Scissors,
    title: "✂️ Zelf maken",
    price: "Vanaf €3,99",
    subtitle:
      "Download direct via Payhip. Print, knip, lamineer en stel zelf het interactieve speelboek samen.",
    features: [
      "📄 Printbare PDF",
      "✂️ Stap-voor-stap handleiding",
      "📋 Materialenlijst",
      "💡 Speeltips",
    ],
    cta: "📥 Download via Payhip",
    href: PAYHIP_URL,
    bg: "bg-mint/25",
    buttonClass:
      "bg-mint text-mint-foreground shadow-mint-glow hover:bg-mint/90",
  },
  {
    icon: BookOpen,
    title: "📕 Kant-en-klaar Mini Boek",
    price: "€7,50",
    subtitle:
      "Geen tijd om zelf te knutselen? Bestel een volledig afgewerkt mini interactief speelboek.",
    features: [
      "✔ Handgemaakt",
      "✔ Gelamineerd",
      "✔ Direct klaar om mee te spelen",
      "🕒 Op bestelling gemaakt — levering binnen 7 dagen",
    ],
    cta: "💜 Persoonlijk bestellen",
    href: WHATSAPP_URL,
    bg: "bg-rose/25",
    buttonClass:
      "bg-rose text-rose-foreground shadow-rose-glow hover:bg-rose/90",
  },
  {
    icon: Library,
    title: "📚 Kant-en-klaar Groot Boek",
    price: "€17,50",
    subtitle: "Een complete interactieve speelervaring.",
    features: [
      "✔ Handgemaakt",
      "✔ Gelamineerd",
      "✔ Alle onderdelen bevestigd",
      "✔ Klaar voor gebruik",
      "🕒 Op bestelling gemaakt — levering binnen 7 dagen",
    ],
    cta: "💜 Persoonlijk bestellen",
    href: WHATSAPP_URL,
    bg: "bg-cream",
    buttonClass:
      "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
  },
];

export function OrderOptions() {
  return (
    <section id="bestellen" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Hoe bestel je?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className={
                  "flex flex-col rounded-3xl border border-border/60 p-8 text-center shadow-card transition-transform duration-300 hover:-translate-y-2 " +
                  c.bg
                }
              >
                <div className="mx-auto grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/70 shadow-soft">
                  <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-baloo text-2xl font-extrabold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 font-nunito text-lg font-bold text-primary">
                  {c.price}
                </p>
                <p className="mt-3 font-nunito text-sm leading-relaxed text-muted-foreground">
                  {c.subtitle}
                </p>

                <ul className="mt-5 flex-1 space-y-2 text-left font-nunito text-sm text-foreground">
                  {c.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="shrink-0">{feature.split(" ")[0]}</span>
                      <span>{feature.slice(feature.indexOf(" ") + 1)}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={
                    "mt-7 h-12 rounded-full px-7 font-nunito text-sm font-extrabold " +
                    c.buttonClass
                  }
                >
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.cta}
                  </a>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

