import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkle, Star } from "@/components/Sparkle";
import {
  Printer,
  Scissors,
  Gift,
  Palette,
  Hand,
  Brain,
  Star as StarIcon,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/printable-interactieve-spelletjes")({
  head: () => ({
    meta: [
      {
        title:
          "Printable & Interactieve Spelletjes — MuurMagic",
      },
      {
        name: "description",
        content:
          "Herbruikbare spelletjes en printbare activiteiten voor thuis, onderweg en in de klas. Warm, speels en kindvriendelijk ontworpen door MuurMagic.",
      },
      {
        property: "og:title",
        content:
          "Printable & Interactieve Spelletjes — MuurMagic",
      },
      {
        property: "og:description",
        content:
          "Leren door spel — printbare PDF's, DIY sets en kant-en-klare Pak & Plak spelletjes.",
      },
    ],
  }),
  component: PrintablePage,
});

type ProductType = {
  id: string;
  emoji: string;
  icon: typeof Printer;
  title: string;
  description: string;
  cta: string;
  bg: string;
  iconBg: string;
};

const productTypes: ProductType[] = [
  {
    id: "digital",
    emoji: "🖨️",
    icon: Printer,
    title: "Digitale Producten",
    description:
      "Download, print en speel! PDF bestanden met MuurMagic branding. Direct in huis.",
    cta: "Download nu",
    bg: "bg-rose/25",
    iconBg: "bg-rose/50 text-rose-foreground",
  },
  {
    id: "diy",
    emoji: "✂️",
    icon: Scissors,
    title: "DIY Sets",
    description:
      "Zelf knippen en in elkaar zetten. Inclusief instructies. Leuk als ouder-kind activiteit.",
    cta: "Ontdek set",
    bg: "bg-mint/25",
    iconBg: "bg-mint/50 text-mint-foreground",
  },
  {
    id: "ready",
    emoji: "🎁",
    icon: Gift,
    title: "Kant & Klare Sets",
    description: "Klaar om mee te spelen. Geen voorbereiding nodig.",
    cta: "Start met leren",
    bg: "bg-primary/15",
    iconBg: "bg-primary/30 text-primary",
  },
];

const colorVariants = [
  { emoji: "🔵", name: "Blauw", color: "#6BB5E8" },
  { emoji: "🔴", name: "Rood", color: "#E86B6B" },
  { emoji: "🟡", name: "Geel", color: "#F2C46D" },
  { emoji: "🟢", name: "Groen", color: "#6DCBB8" },
  { emoji: "🟠", name: "Oranje", color: "#F2A06D" },
  { emoji: "🌸", name: "Roze", color: "#E8A0B0" },
];

const benefits = [
  { emoji: "🎨", icon: Palette, label: "Kleuren herkennen" },
  { emoji: "✋", icon: Hand, label: "Fijne motoriek" },
  { emoji: "🧠", icon: Brain, label: "Concentratie" },
  { emoji: "⭐", icon: StarIcon, label: "Zelfstandig spelen" },
];

const steps = [
  { emoji: "👆", title: "Pak een figuurtje" },
  { emoji: "🌈", title: "Herken de kleur" },
  { emoji: "✅", title: "Plak op de juiste plek" },
];

function PrintablePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* INTRO */}
        <section className="relative overflow-hidden bg-gradient-soft py-20 sm:py-28">
          {/* Decorative sparkles */}
          <Sparkle
            className="absolute left-[8%] top-16 animate-drift-sparkle text-gold"
            size={28}
            color="#F2C46D"
          />
          <Star
            className="absolute right-[10%] top-24 animate-twinkle text-primary"
            size={22}
            color="#9B6BB5"
          />
          <Sparkle
            className="absolute right-[18%] bottom-12 animate-float-soft text-mint"
            size={20}
            color="#6DCBB8"
          />
          <Star
            className="absolute left-[14%] bottom-20 animate-twinkle text-rose"
            size={18}
            color="#E8A0B0"
          />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Link
              to="/"
              className="font-nunito text-sm font-bold uppercase tracking-widest text-primary hover:underline"
            >
              ← Interactieve spelletjes
            </Link>
            <h1 className="mt-4 font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Leren door spel —{" "}
              <span className="bg-gradient-magic bg-clip-text text-transparent">
                voor thuis, onderweg en in de klas
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-nunito text-lg text-muted-foreground sm:text-xl">
              Herbruikbare spelletjes en printbare activiteiten die kinderen
              helpen groeien. Warm, speels en kindvriendelijk ontworpen.
            </p>
          </div>
        </section>

        {/* PRODUCT TYPES */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {productTypes.map((p) => {
                const Icon = p.icon;
                return (
                  <article
                    key={p.id}
                    className={
                      "group relative overflow-hidden rounded-3xl border border-border/60 p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-magic " +
                      p.bg
                    }
                  >
                    <div
                      className={
                        "flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 " +
                        p.iconBg
                      }
                    >
                      <span aria-hidden>{p.emoji}</span>
                    </div>
                    <h3 className="mt-6 font-baloo text-2xl font-extrabold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-nunito text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <Button className="mt-6 cta-mint-glow rounded-full bg-mint font-nunito font-bold text-mint-foreground hover:bg-mint">
                      <Icon className="h-4 w-4" />
                      {p.cta}
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HIGHLIGHT PRODUCT */}
        <section className="relative overflow-hidden bg-gradient-soft py-20">
          <Sparkles
            className="absolute right-12 top-12 h-8 w-8 animate-twinkle text-gold"
            aria-hidden
          />
          <Sparkles
            className="absolute left-10 bottom-16 h-6 w-6 animate-twinkle text-primary"
            aria-hidden
          />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <article className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-8 shadow-magic sm:p-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-magic p-8">
                  <div className="absolute inset-6 flex items-center justify-center rounded-2xl bg-cream/90 text-center">
                    <div>
                      <div className="text-7xl">🌈</div>
                      <p className="mt-3 font-baloo text-2xl font-extrabold text-primary">
                        Pak & Plak
                      </p>
                      <p className="font-nunito text-sm text-muted-foreground">
                        KleurTas
                      </p>
                    </div>
                  </div>
                  <Star
                    className="absolute right-4 top-4 animate-twinkle"
                    size={28}
                    color="#F2C46D"
                  />
                  <Sparkle
                    className="absolute left-6 bottom-6 animate-float-soft"
                    size={24}
                    color="#E8A0B0"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-rose px-3 py-1 font-nunito text-xs font-bold text-rose-foreground shadow-soft">
                      Bestseller
                    </span>
                    <span className="rounded-full bg-mint px-3 py-1 font-nunito text-xs font-bold text-mint-foreground shadow-soft">
                      Leeftijd 3+
                    </span>
                    <span className="rounded-full bg-primary px-3 py-1 font-nunito text-xs font-bold text-primary-foreground shadow-soft">
                      Herbruikbaar
                    </span>
                  </div>
                  <h2 className="mt-4 font-baloo text-3xl font-extrabold text-foreground sm:text-4xl">
                    Speel & Ontdek Kleuren – Pak & Plak KleurTas
                  </h2>
                  <p className="mt-4 font-nunito text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Een gelamineerd mini boekje met losse velcro figuurtjes.
                    Kinderen pakken een figuurtje, herkennen de kleur en plakken
                    het op de juiste plek. Herbruikbaar met whiteboard stift.
                    Leeftijd 3+. Ideaal voor onderweg!
                  </p>

                  <div className="mt-6">
                    <p className="font-nunito text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Kies een kleur
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {colorVariants.map((c) => (
                        <button
                          key={c.name}
                          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-nunito text-sm font-bold text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-magic"
                        >
                          <span aria-hidden>{c.emoji}</span>
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button className="mt-8 cta-mint-glow rounded-full bg-mint px-8 py-6 font-baloo text-lg font-bold text-mint-foreground hover:bg-mint">
                    In winkelmand
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* EDUCATIONAL VALUE */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-baloo text-3xl font-extrabold text-foreground sm:text-4xl">
                Waarom interactief spelen?
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {benefits.map((b) => (
                <div
                  key={b.label}
                  className="group rounded-3xl border border-border/60 bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-magic"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-soft text-3xl transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <span aria-hidden>{b.emoji}</span>
                  </div>
                  <p className="mt-4 font-baloo text-lg font-bold text-foreground">
                    {b.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAK & PLAK STEPS */}
        <section className="bg-gradient-soft py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-baloo text-3xl font-extrabold text-foreground sm:text-4xl">
                Hoe werkt het{" "}
                <span className="bg-gradient-magic bg-clip-text text-transparent">
                  Pak & Plak
                </span>{" "}
                systeem?
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="relative rounded-3xl border border-border/60 bg-card p-8 text-center shadow-card"
                >
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 font-baloo text-sm font-extrabold text-primary-foreground shadow-soft">
                    Stap {i + 1}
                  </span>
                  <div className="mt-2 text-6xl">{s.emoji}</div>
                  <p className="mt-4 font-baloo text-xl font-extrabold text-foreground">
                    {s.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div
              className="relative overflow-hidden rounded-[2rem] p-10 text-center shadow-magic sm:p-14"
              style={{ backgroundColor: "#6DCBB8" }}
            >
              <Star
                className="absolute left-8 top-8 animate-twinkle"
                size={26}
                color="#F2C46D"
              />
              <Sparkle
                className="absolute right-10 top-10 animate-float-soft"
                size={22}
                color="#FFFFFF"
              />
              <Sparkle
                className="absolute left-12 bottom-8 animate-twinkle"
                size={18}
                color="#FFFFFF"
              />
              <Star
                className="absolute right-8 bottom-10 animate-twinkle"
                size={20}
                color="#E8A0B0"
              />
              <h2 className="font-baloo text-3xl font-extrabold text-white sm:text-4xl">
                Wil je een custom spelletje voor jouw klas of BSO?
              </h2>
              <Button className="mt-8 rounded-full bg-white px-8 py-6 font-baloo text-lg font-bold text-primary shadow-soft hover:bg-cream">
                Vraag het ons
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
