import { Sparkle } from "./Sparkle";
import { Heart, Leaf, Wand2 } from "lucide-react";

const values = [
  {
    icon: Wand2,
    title: "Hand-drawn magic",
    text: "Every design starts as a watercolour sketch by our small studio in the Netherlands.",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Leaf,
    title: "Wall-friendly",
    text: "Eco-vinyl that peels off cleanly when it's time for the next adventure.",
    color: "bg-mint/30 text-mint-foreground",
  },
  {
    icon: Heart,
    title: "Made with love",
    text: "Tested by our own little ones — and their very honest reviews.",
    color: "bg-rose/40 text-rose-foreground",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-magic py-20 text-primary-foreground sm:py-28">
      <Sparkle
        className="absolute left-[8%] top-12 animate-twinkle text-primary-foreground/60"
        size={26}
      />
      <Sparkle
        className="absolute right-[10%] bottom-16 animate-twinkle text-primary-foreground/40"
        size={32}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="font-body text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
            About MuurMagic
          </p>
          <h2 className="mt-2 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Big dreams deserve big walls.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-primary-foreground/90">
            We started MuurMagic in a tiny attic studio when our own children
            asked for a forest on their bedroom wall. One sketch became a
            sticker, then a collection — and now we ship a little bit of
            wonder to families all over Europe.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-primary-foreground/80">
            From birthday backdrops to playroom murals, every piece is designed
            to be peeled, stuck, restuck, and loved for years.
          </p>
        </div>

        <div className="grid gap-4">
          {values.map(({ icon: Icon, title, text, color }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-3xl border border-primary-foreground/10 bg-background/10 p-6 backdrop-blur-md transition-colors hover:bg-background/15"
            >
              <span className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl " + color}>
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-1 font-body text-sm text-primary-foreground/85">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
