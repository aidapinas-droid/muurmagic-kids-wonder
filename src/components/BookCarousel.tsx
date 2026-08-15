import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cat1 from "@/assets/catalogus-1.webp.asset.json";
import cat2 from "@/assets/catalogus-2.webp.asset.json";
import cat3 from "@/assets/catalogus-3.webp.asset.json";
import cat4 from "@/assets/catalogus-4.webp.asset.json";
import cat5 from "@/assets/catalogus-5.webp.asset.json";
import cat6 from "@/assets/catalogus-6.webp.asset.json";
import cat7 from "@/assets/catalogus-7.webp.asset.json";
import cat8 from "@/assets/catalogus-8.webp.asset.json";
import cat9 from "@/assets/catalogus-9.webp.asset.json";
import cat10 from "@/assets/catalogus-10.webp.asset.json";

type CatalogCard = {
  id: string;
  image: string;
  name: string;
  themeSlug: string;
};

const cards: CatalogCard[] = [
  {
    id: "c1",
    image: cat7.url,
    name: "Wednesday Toca Boca · Labubu · Kitty Dulce Hogar · K-Pop Demon Hunters",
    themeSlug: "muziek",
  },
  {
    id: "c2",
    image: cat3.url,
    name: "Gabby's Dollhouse · Wednesday & Enid Halloween · Roblox Brookhaven · Ballerina Cappuccino",
    themeSlug: "games",
  },
  {
    id: "c3",
    image: cat9.url,
    name: "Lalafanfan Eend · Paw Patrol · Lilo & Stitch · Toca Boca Voetbal",
    themeSlug: "dieren",
  },
  {
    id: "c4",
    image: cat6.url,
    name: "Harry Potter Magic World · Saja Boys Demon · K-Pop · K-Pop Pasen",
    themeSlug: "muziek",
  },
  {
    id: "c5",
    image: cat1.url,
    name: "Zomer Toca Boca · Fashionista · LOL · Sprunkis",
    themeSlug: "poppen-en-rollenspel",
  },
  {
    id: "c6",
    image: cat2.url,
    name: "Pokémon · Minecraft · Toca Boca kamer · Gabby's Dollhouse · Avatar World",
    themeSlug: "games",
  },
  {
    id: "c7",
    image: cat8.url,
    name: "Puppies · Avatar World Hopping · Moana · Wednesday & Enid Halloween",
    themeSlug: "populaire-themas",
  },
  {
    id: "c8",
    image: cat10.url,
    name: "Zootopia · Zomer verhalen · Unicorn House · Toca Boca Summer House",
    themeSlug: "populaire-themas",
  },
  {
    id: "c9",
    image: cat5.url,
    name: "Italian Brainrot · LOL roze · Capybara House · Be Pink",
    themeSlug: "muziek",
  },
  {
    id: "c10",
    image: cat4.url,
    name: "Bluey · Super Mario · Super Chicas · Elsa & Anna",
    themeSlug: "populaire-themas",
  },
];

export function BookCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="boeken-carousel" className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            📚 Ontdek onze interactieve boeken
          </h2>
          <p className="mt-3 font-nunito text-base text-muted-foreground sm:text-lg">
            Scroll door ons volledige aanbod — kies jouw favoriet!
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Vorige boeken"
            className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-card/90 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-muted sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Volgende boeken"
            className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-card/90 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-muted sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]"
          >
            {cards.map((c) => (
              <Link
                key={c.id}
                to="/thema/$slug"
                params={{ slug: c.themeSlug }}
                className="group w-[72%] shrink-0 snap-start rounded-3xl border border-border/60 bg-card p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-magic sm:w-[45%] lg:w-[30%]"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full rounded-2xl object-contain"
                />
                <p className="mt-3 px-1 pb-1 font-nunito text-sm font-semibold leading-snug text-foreground">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#themas"
            className="inline-flex items-center justify-center rounded-full bg-gradient-magic px-7 py-3 font-nunito text-base font-bold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Bekijk alle boeken →
          </a>
        </div>
      </div>
    </section>
  );
}
