import { FileDown, Scissors, PackageCheck } from "lucide-react";

const types = [
  {
    icon: FileDown,
    title: "Digitaal (PDF)",
    text: "Direct downloaden en zelf printen. Meteen aan de slag, waar je ook bent.",
    color: "bg-mint/30 text-mint-foreground",
  },
  {
    icon: Scissors,
    title: "DIY-set",
    text: "Geprinte vellen om zelf te knippen, lamineren en samen te stellen.",
    color: "bg-rose/40 text-rose-foreground",
  },
  {
    icon: PackageCheck,
    title: "Kant-en-klaar",
    text: "Volledig geprint, gelamineerd en gemonteerd. Uitpakken en spelen.",
    color: "bg-primary/20 text-primary",
  },
];

export function ProductTypes() {
  return (
    <section id="soorten" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Drie soorten producten
          </h2>
          <p className="mt-4 font-nunito text-base text-muted-foreground sm:text-lg">
            Kies wat het beste bij jou past — zelf maken of kant-en-klaar
            ontvangen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map(({ icon: Icon, title, text, color }) => (
            <article
              key={title}
              className="rounded-3xl border border-border/60 bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-magic"
            >
              <span
                className={
                  "flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft " +
                  color
                }
              >
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </span>
              <h3 className="mt-6 font-baloo text-2xl font-extrabold text-foreground">
                {title}
              </h3>
              <p className="mt-3 font-nunito text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
