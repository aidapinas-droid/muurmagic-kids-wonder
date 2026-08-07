import { Button } from "@/components/ui/button";
import { Sparkle } from "@/components/Sparkle";
import { ArrowRight } from "lucide-react";
import heroRoom from "@/assets/hero-room.jpg";

/** Gearchiveerde muursticker-hero. Bewaard voor later gebruik. */
export function StickerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-primary shadow-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-mint" />
            Nieuwe thema's · Elke maand erbij
          </span>

          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Tover jouw muur <br className="hidden sm:block" />
            in{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-magic bg-clip-text text-transparent">
                magie
              </span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-lg font-body text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Verwijderbare muurstickers, feestdecoratie en interactieve speelboeken die
            kinderkamers, speelkamers en verjaardagen veranderen in een wonderwereld.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-primary px-8 font-body text-base font-bold text-primary-foreground shadow-magic transition-transform hover:scale-105 hover:bg-primary/90"
            >
              <a href="#shop">
                Bekijk de shop
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-2 border-foreground/15 bg-card px-8 font-body text-base font-bold text-foreground hover:bg-mint/20"
            >
              <a href="#about">Ons verhaal</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            <Stat value="2k+" label="Blije kamers" />
            <Divider />
            <Stat value="100%" label="Muurvriendelijk" />
            <Divider />
            <Stat value="48h" label="Gratis verzending" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-magic opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-card shadow-magic">
            <img
              src={heroRoom}
              alt="Een vrolijke kinderkamer met een magische bosmuursticker"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 flex animate-float-soft items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-mint-foreground">
              <Sparkle size={20} />
            </span>
            <div className="text-left">
              <p className="font-display text-sm font-bold leading-tight">
                Simpel plakken
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Geen gereedschap nodig
              </p>
            </div>
          </div>

          <div
            className="absolute -right-3 top-8 flex animate-float-soft items-center gap-2 rounded-full bg-accent px-4 py-2 font-display text-sm font-bold text-accent-foreground shadow-card"
            style={{ animationDelay: "1.5s" }}
          >
            ✨ Gratis retour
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-left">
      <div className="font-display text-2xl font-black text-foreground">{value}</div>
      <div className="font-body text-xs font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-8 w-px bg-border" />;
}
