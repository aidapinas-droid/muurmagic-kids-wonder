export type ProductLabel =
  | "nieuw"
  | "populair"
  | "bestseller"
  | "binnenkort"
  | "beperkt";

export const labelMeta: Record<ProductLabel, { emoji: string; text: string; className: string }> = {
  nieuw: { emoji: "🆕", text: "Nieuw", className: "bg-mint text-mint-foreground" },
  populair: { emoji: "🔥", text: "Populair", className: "bg-rose text-rose-foreground" },
  bestseller: { emoji: "⭐", text: "Bestseller", className: "bg-sun text-foreground" },
  binnenkort: { emoji: "⏳", text: "Binnenkort", className: "bg-muted text-foreground" },
  beperkt: { emoji: "🎯", text: "Beperkt", className: "bg-primary text-primary-foreground" },
};

export type Theme = {
  slug: string;
  emoji: string;
  title: string;
  description: string;
  bg: string;
};

export const themes: Theme[] = [
  {
    slug: "populaire-themas",
    emoji: "🌈",
    title: "Populaire thema's",
    description: "De favorieten van kinderen en ouders, gebundeld op één plek.",
    bg: "bg-gradient-soft",
  },
  {
    slug: "prinsessen-en-magie",
    emoji: "👸",
    title: "Prinsessen & Magie",
    description: "Kastelen, toverstaven en sprookjesachtige avonturen.",
    bg: "bg-primary/15",
  },
  {
    slug: "poppen-en-rollenspel",
    emoji: "🎀",
    title: "Poppen & Rollenspel",
    description: "Aankleden, verzorgen en samen verhalen bedenken.",
    bg: "bg-rose/25",
  },
  {
    slug: "games",
    emoji: "🎮",
    title: "Games",
    description: "Speelse spelwerelden voor kleine ontdekkers.",
    bg: "bg-mint/25",
  },
  {
    slug: "dieren",
    emoji: "🐾",
    title: "Dieren & Vriendjes",
    description:
      "Bekende vriendjes uit favoriete series, klaar voor interactief speelplezier.",
    bg: "bg-cream",
  },

  {
    slug: "voertuigen",
    emoji: "🚗",
    title: "Voertuigen",
    description: "Auto's, treinen en alles wat rijdt, vaart of vliegt.",
    bg: "bg-accent/25",
  },
  {
    slug: "muziek",
    emoji: "🎵",
    title: "Muziek",
    description: "Ritme, instrumenten en klanken om spelenderwijs te ontdekken.",
    bg: "bg-mint/20",
  },
];

export type Book = {
  slug: string;
  title: string;
  themeSlug: string;
  labels: ProductLabel[];
  /** Korte omschrijving — placeholder tot definitieve tekst beschikbaar is. */
  description: string;
  age: string;
  learn: string[];
  contents: string[];
  payhipUrl: string;
};

export const PAYHIP_URL = "https://payhip.com/muurmagic";
export const WHATSAPP_URL = "https://wa.me/31000000000";

/**
 * Placeholder-boeken: één per thema zodat het herbruikbare producttemplate
 * werkt voor 100+ boeken zonder layout-aanpassingen.
 */
export const books: Book[] = themes.map((t, i) => ({
  slug: `${t.slug}-speelboek`,
  title: `${t.title} — interactief speelboek`,
  themeSlug: t.slug,
  labels: i === 0 ? ["populair"] : i === 1 ? ["nieuw"] : ["binnenkort"],
  description:
    "Productomschrijving volgt binnenkort. Dit interactieve speelboek wordt geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  age: "Leeftijdsaanbeveling volgt — richtlijn: 2 tot 6 jaar.",
  learn: [
    "Beschrijving volgt",
    "Beschrijving volgt",
    "Beschrijving volgt",
  ],
  contents: [
    "Printbare PDF",
    "Montagegids",
    "Materialenlijst",
    "Spelinstructies",
  ],
  payhipUrl: PAYHIP_URL,
}));

export function getBook(slug: string) {
  return books.find((b) => b.slug === slug);
}

export function getTheme(slug: string) {
  return themes.find((t) => t.slug === slug);
}

export function booksByTheme(slug: string) {
  return books.filter((b) => b.themeSlug === slug);
}
