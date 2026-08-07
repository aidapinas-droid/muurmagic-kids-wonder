import { Repeat, Brain, Hand, Users, Plane } from "lucide-react";

const reasons = [
  { icon: Repeat, title: "Herbruikbaar", text: "Gelamineerd en met velcro: steeds opnieuw te spelen." },
  { icon: Brain, title: "Educatief", text: "Spelenderwijs leren herkennen, benoemen en sorteren." },
  { icon: Hand, title: "Zelfstandig spelen", text: "Kinderen kunnen zelf aan de slag, zonder scherm." },
  { icon: Users, title: "Samen spelen", text: "Ook fijn om samen met ouders of vriendjes te doen." },
  { icon: Plane, title: "Handig onderweg", text: "Licht en compact — perfect voor auto, trein of restaurant." },
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/30 text-mint-foreground">
                <Icon className="h-6 w-6" strokeWidth={2.2} />
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
