import { Button } from "@/components/ui/button";
import { PAYHIP_URL, WHATSAPP_URL } from "@/data/library";

const options = [
  {
    emoji: "📥",
    title: "Zelf printen",
    price: "Vanaf €3,99",
    text: "Download via Payhip. Direct in huis.",
    cta: "Download nu",
    href: PAYHIP_URL,
    bg: "bg-mint/25",
  },
  {
    emoji: "🎁",
    title: "Kant & Klaar",
    price: "Vanaf €7,50",
    text: "Op bestelling gemaakt. Levering binnen 7 dagen.",
    cta: "Persoonlijk bestellen",
    href: WHATSAPP_URL,
    bg: "bg-rose/25",
  },
];

export function OrderOptions() {
  return (
    <section id="bestellen" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Hoe bestel je?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {options.map((o) => (
            <article
              key={o.title}
              className={
                "rounded-3xl border border-border/60 p-8 text-center shadow-card transition-transform duration-300 hover:-translate-y-2 " +
                o.bg
              }
            >
              <span className="text-5xl" aria-hidden="true">
                {o.emoji}
              </span>
              <h3 className="mt-4 font-baloo text-2xl font-extrabold text-foreground">
                {o.title}
              </h3>
              <p className="mt-1 font-nunito text-base font-bold text-primary">{o.price}</p>
              <p className="mt-3 font-nunito text-sm leading-relaxed text-muted-foreground">
                {o.text}
              </p>
              <Button
                asChild
                className="mt-6 h-12 rounded-full bg-primary px-7 font-nunito text-sm font-extrabold text-primary-foreground shadow-soft hover:bg-primary/90"
              >
                <a href={o.href} target="_blank" rel="noreferrer">
                  {o.cta}
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
