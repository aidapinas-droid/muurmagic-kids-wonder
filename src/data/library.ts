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

import themaPopulaire from "@/assets/thema-populaire.webp.asset.json";
import themaPrinsessen from "@/assets/thema-prinsessen.webp.asset.json";
import themaPoppen from "@/assets/thema-poppen.webp.asset.json";
import themaGames from "@/assets/thema-games.png.asset.json";
import themaVoertuigen from "@/assets/thema-voertuigen.webp.asset.json";
import themaMuziek from "@/assets/thema-muziek.webp.asset.json";

export type Theme = {
  slug: string;
  emoji: string;
  title: string;
  description: string;
  bg: string;
  image?: string;
};

export const themes: Theme[] = [
  {
    slug: "populaire-themas",
    emoji: "🌈",
    title: "Populaire thema's",
    description: "De favorieten van kinderen en ouders, gebundeld op één plek.",
    bg: "bg-gradient-soft",
    image: themaPopulaire.url,
  },
  {
    slug: "prinsessen-en-magie",
    emoji: "👑",
    title: "Prinsessen & Magie",
    description: "Kastelen, toverstaven en sprookjesachtige avonturen.",
    bg: "bg-primary/15",
    image: themaPrinsessen.url,
  },
  {
    slug: "poppen-en-rollenspel",
    emoji: "🎀",
    title: "Poppen & Rollenspel",
    description: "Aankleden, verzorgen en samen verhalen bedenken.",
    bg: "bg-rose/25",
    image: themaPoppen.url,
  },
  {
    slug: "games",
    emoji: "🎮",
    title: "Games",
    description: "Speelse spelwerelden voor kleine ontdekkers.",
    bg: "bg-mint/25",
    image: themaGames.url,
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
    title: "Voertuigen & Avontuur",
    description: "Auto's, treinen en alles wat rijdt, vaart of vliegt.",
    bg: "bg-accent/25",
    image: themaVoertuigen.url,
  },
  {
    slug: "muziek",
    emoji: "🎵",
    title: "Muziek & Trends",
    description: "Ritme, instrumenten en klanken om spelenderwijs te ontdekken.",
    bg: "bg-mint/20",
    image: themaMuziek.url,
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

/** De drie vaste verkoopvarianten die bij elk product horen. */
export type Variant = {
  icon: string;
  name: string;
  price: string;
  description: string;
};

export const VARIANTS: Variant[] = [
  {
    icon: "✂️",
    name: "Zelf maken",
    price: "€3,99",
    description:
      "Digitaal bestand. Zelf printen, knippen, lamineren en samenstellen.",
  },
  {
    icon: "📕",
    name: "Kant-en-klaar Mini Boek",
    price: "€7,50",
    description:
      "Volledig gemaakt. Direct klaar om te spelen. Op bestelling — binnen 7 dagen.",
  },
  {
    icon: "📚",
    name: "Kant-en-klaar Groot Boek",
    price: "€17,50",
    description:
      "Groot volledig afgewerkt interactief speelboek. Op bestelling — binnen 7 dagen.",
  },
];

const DEFAULTS = {
  age: "Richtlijn: 2 tot 6 jaar.",
  learn: [
    "Herkennen en benoemen",
    "Fijne motoriek door plakken en matchen",
    "Taal en fantasie tijdens het spelen",
  ],
  contents: [
    "Printbare PDF",
    "Montagegids",
    "Materialenlijst",
    "Spelinstructies",
  ],
  payhipUrl: PAYHIP_URL,
};

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const makeBooks = (
  names: string[],
  themeSlug: string,
  description: string,
): Book[] =>
  names.map((name) => ({
    slug: slugify(name),
    title: `${name} — interactief speelboek`,
    themeSlug,
    labels: [],
    description,
    ...DEFAULTS,
  }));

/** Alleen bestaande producten. Nieuwe producten worden aangeleverd. */
export const books: Book[] = [
  ...makeBooks(
    [
      "Bluey",
      "Paw Patrol",
      "Peppa Pig",
      "Stitch",
      "Zootopia",
      "De Avonturen van het Kleine Varkentje & Vriendjes",
    ],
    "dieren",
    "Interactief speelboek met bekende vriendjes. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  ...makeBooks(
    [
      "Anna & Elsa Mini",
      "Elsa & Anna",
      "Prinsessen",
      "Rapunzel",
      "Vaiana / Moana",
      "Wednesday",
      "Wednesday & Enid",
      "Harry Potter",
      "Eenhoorn",
    ],
    "prinsessen-en-magie",
    "Interactief speelboek vol kastelen, toverstaven en sprookjesachtige avonturen. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  ...makeBooks(
    [
      "Roblox",
      "Mini Roblox",
      "Minecraft",
      "Toca Boca Mini",
      "Toca Boca Voetbalwereld",
      "Zomer Toca Boca",
      "Avatar Wereld",
      "Super Mario Bros",
      "Sprunkis",
    ],
    "games",
    "Interactief speelboek uit een speelse spelwereld. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  ...makeBooks(
    [
      "Barbie Mode",
      "Fashionista",
      "LOL Surprise",
      "Gabby's Poppenhuis",
      "Papieren Poppenhuis",
      "Meisjeshuis",
      "Hello Kitty Café",
      "Hello Kitty",
      "Vriendinnen Kuromi, My Melody & Hello Kitty",
    ],
    "poppen-en-rollenspel",
    "Interactief speelboek voor poppen, mode en rollenspel. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  ...makeBooks(
    [
      "Bluey",
      "Roblox",
      "Minecraft",
      "Paw Patrol",
      "Stitch",
      "Hello Kitty",
      "Barbie",
      "Toca Boca",
      "Peppa Pig",
    ],
    "populaire-themas",
    "Een van de favoriete interactieve speelboeken van MuurMagic. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  ...makeBooks(
    ["Raceauto's"],
    "voertuigen",
    "Interactief speelboek vol snelle raceauto's en avontuur. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  ...makeBooks(
    [
      "BTS",
      "K-Pop",
      "Mini K-Pop",
      "K-Pop LEGO",
      "K-Pop Pasen",
      "Huntrix",
      "Brainrot",
      "Labubu",
    ],
    "muziek",
    "Interactief speelboek vol muziek, trends en kleurrijke figuren. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
];



export function getBook(slug: string) {
  return books.find((b) => b.slug === slug);
}

export function getTheme(slug: string) {
  return themes.find((t) => t.slug === slug);
}

export function booksByTheme(slug: string) {
  return books.filter((b) => b.themeSlug === slug);
}
