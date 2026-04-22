import { Button } from "@/components/ui/button";
import { Sparkle, Star } from "./Sparkle";
import { ArrowRight } from "lucide-react";
import heroRoom from "@/assets/hero-room.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      {/* Floating decorative blobs */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 animate-blob bg-mint/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 animate-blob bg-rose/40 blur-3xl"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      {/* Sparkles */}
      <Sparkle
        className="absolute left-[12%] top-24 animate-twinkle text-primary"
        size={28}
      />
      <Star
        className="absolute right-[18%] top-40 animate-twinkle text-accent"
        size={22}
      />
      <Sparkle
        className="absolute bottom-24 left-[8%] animate-twinkle text-mint"
        size={20}
        color="oklch(0.78 0.11 175)"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-primary shadow-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-mint" />
            New collection · Spring drops
          </span>

          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Turn any wall <br className="hidden sm:block" />
            into{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-magic bg-clip-text text-transparent">
                magic
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
            Removable wall stickers and party decorations that turn kids' rooms,
            playrooms and birthday parties into wonderlands. Peel, stick, smile.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-primary px-8 font-body text-base font-bold text-primary-foreground shadow-magic transition-transform hover:scale-105 hover:bg-primary/90"
            >
              <a href="#shop">
                Shop the magic
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-2 border-foreground/15 bg-card px-8 font-body text-base font-bold text-foreground hover:bg-mint/20"
            >
              <a href="#about">Our story</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            <Stat value="2k+" label="Happy rooms" />
            <Divider />
            <Stat value="100%" label="Wall-safe" />
            <Divider />
            <Stat value="48h" label="Free shipping" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-magic opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-card shadow-magic">
            <img
              src={heroRoom}
              alt="A whimsical kids bedroom decorated with a magical forest wall sticker"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating tag */}
          <div className="absolute -bottom-4 -left-4 flex animate-float-soft items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-mint-foreground">
              <Sparkle size={20} />
            </span>
            <div className="text-left">
              <p className="font-display text-sm font-bold leading-tight">
                Easy peel & stick
              </p>
              <p className="font-body text-xs text-muted-foreground">
                No tools, no mess
              </p>
            </div>
          </div>

          <div
            className="absolute -right-3 top-8 flex animate-float-soft items-center gap-2 rounded-full bg-accent px-4 py-2 font-display text-sm font-bold text-accent-foreground shadow-card"
            style={{ animationDelay: "1.5s" }}
          >
            ✨ Free returns
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
