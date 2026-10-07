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
import themaDieren from "@/assets/dieren-vriendjes-mockup.png.asset.json";
import coverHuntrix from "@/assets/huntrix-2-placeholder.png.asset.json";
import coverCapybara from "@/assets/capybara-house-placeholder.png.asset.json";
import coverEerste from "@/assets/mijn-eerste-interactieve-boek-placeholder.png.asset.json";
import coverBluey from "@/assets/bluey-placeholder.jpg.asset.json";
import coverPaw from "@/assets/paw-patrol-placeholder.jpg.asset.json";
import coverPeppa from "@/assets/peppa-pig-placeholder.jpg.asset.json";
import coverStitch from "@/assets/stitch-placeholder.png.asset.json";
import coverZootopia from "@/assets/zootopia-placeholder.png.asset.json";
import coverLalafanfan from "@/assets/lalafanfan-eend-placeholder.jpg.asset.json";
import coverBlueyHuis from "@/assets/bluey-huis-activiteiten-placeholder.png.asset.json";
import coverPm0 from "@/assets/anna-elsa-mini-placeholder.png.asset.json";
import coverPm1 from "@/assets/eenhoorn-placeholder.jpg.asset.json";
import coverPm2 from "@/assets/elsa-anna-placeholder.jpg.asset.json";
import coverPm3 from "@/assets/harry-potter-placeholder.jpg.asset.json";
import coverPm4 from "@/assets/prinsessen-placeholder.png.asset.json";
import coverPm5 from "@/assets/rapunzel-placeholder.jpg.asset.json";
import coverPm6 from "@/assets/vaiana-moana-placeholder.jpg.asset.json";
import coverPm7 from "@/assets/wednesday-enid-placeholder.jpg.asset.json";
import coverPm8 from "@/assets/wednesday-placeholder.jpg.asset.json";
import coverG0 from "@/assets/games-avatar-wereld-placeholder.png.asset.json";
import coverG1 from "@/assets/games-minecraft-placeholder.jpg.asset.json";
import coverG2 from "@/assets/games-mini-roblox-placeholder.jpg.asset.json";
import coverG3 from "@/assets/games-roblox-placeholder.jpg.asset.json";
import coverG4 from "@/assets/games-sprunkis-placeholder.jpg.asset.json";
import coverG5 from "@/assets/games-super-mario-bros-placeholder.jpg.asset.json";
import coverG6 from "@/assets/games-toca-boca-mini-placeholder.png.asset.json";
import coverG7 from "@/assets/games-toca-boca-voetbalwereld-placeholder.png.asset.json";
import coverG8 from "@/assets/games-zomer-toca-boca-placeholder.png.asset.json";

import coverPr0 from "@/assets/poppen-barbie-mode-placeholder.jpg.asset.json";
import coverPr1 from "@/assets/poppen-fashionista-placeholder.jpg.asset.json";
import coverPr2 from "@/assets/poppen-lol-surprise-placeholder.jpg.asset.json";
import coverPr3 from "@/assets/poppen-gabbys-poppenhuis-placeholder.jpg.asset.json";
import coverPr4 from "@/assets/poppen-papieren-poppenhuis-placeholder.jpg.asset.json";
import coverPr5 from "@/assets/poppen-meisjeshuis-placeholder.png.asset.json";
import coverPr6 from "@/assets/poppen-hello-kitty-cafe-placeholder.jpg.asset.json";
import coverPr7 from "@/assets/poppen-hello-kitty-placeholder.jpg.asset.json";
import coverPr8 from "@/assets/poppen-vriendinnen-kuromi-my-melody-hello-kitty-placeholder.jpg.asset.json";
import coverM0 from "@/assets/muziek-bts-placeholder.png.asset.json";
import coverM1 from "@/assets/muziek-kpop-placeholder.jpg.asset.json";
import coverM2 from "@/assets/muziek-mini-kpop-placeholder.jpg.asset.json";
import coverM3 from "@/assets/muziek-kpop-lego-placeholder.jpg.asset.json";
import coverM4 from "@/assets/muziek-kpop-pasen-placeholder.png.asset.json";
import coverM5 from "@/assets/muziek-huntrix-placeholder.png.asset.json";
import coverM6 from "@/assets/muziek-brainrot-placeholder.jpg.asset.json";
import coverM7 from "@/assets/muziek-labubu-placeholder.jpg.asset.json";

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
    image: themaDieren.url,
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
  image?: string;
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
  ...makeBooks(
    ["Capybara House"],
    "dieren",
    "Interactief speelboek met bekende vriendjes. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  ...makeBooks(
    ["Mijn Eerste Interactieve Boek"],
    "populaire-themas",
    "Een van de favoriete interactieve speelboeken van MuurMagic. Geprint, gelamineerd en met velcro bevestigd, zodat kinderen er steeds opnieuw mee kunnen spelen.",
  ),
  {
    ...DEFAULTS,
    slug: "lalafanfan-eend",
    title: "Lalafanfan Eend",
    themeSlug: "dieren",
    labels: [],
    description: "Lalafanfan Eend uit het bestaande assortiment (PATO LALAFANFAN).",
    age: "Leeftijdsadvies nog niet beschikbaar.",
    learn: [],
    contents: [],
  },
  {
    ...DEFAULTS,
    slug: "bluey-huis-activiteiten",
    title: "Bluey Huis-activiteiten",
    themeSlug: "dieren",
    labels: [],
    description: "Een activiteitenset van 4 pagina's rond het huis van Bluey (Fichas casita de Bluey). Geen volledig speelboek.",
    age: "Leeftijdsadvies nog niet beschikbaar.",
    learn: [],
    contents: ["Activiteitenset van 4 pagina's"],
  },
];

/** Tijdelijke covers per product-slug. */
const bookImages: Record<string, string> = {
  huntrix: coverM5.url,
  bts: coverM0.url,
  "k-pop": coverM1.url,
  "mini-k-pop": coverM2.url,
  "k-pop-lego": coverM3.url,
  "k-pop-pasen": coverM4.url,
  brainrot: coverM6.url,
  labubu: coverM7.url,
  "capybara-house": coverCapybara.url,
  "mijn-eerste-interactieve-boek": coverEerste.url,
  bluey: coverBluey.url,
  "paw-patrol": coverPaw.url,
  "peppa-pig": coverPeppa.url,
  stitch: coverStitch.url,
  zootopia: coverZootopia.url,
  "lalafanfan-eend": coverLalafanfan.url,
  "bluey-huis-activiteiten": coverBlueyHuis.url,
  "anna-elsa-mini": coverPm0.url,
  "eenhoorn": coverPm1.url,
  "elsa-anna": coverPm2.url,
  "harry-potter": coverPm3.url,
  "prinsessen": coverPm4.url,
  "rapunzel": coverPm5.url,
  "vaiana-moana": coverPm6.url,
  "wednesday-enid": coverPm7.url,
  "wednesday": coverPm8.url,
  "avatar-wereld": coverG0.url,
  minecraft: coverG1.url,
  "mini-roblox": coverG2.url,
  roblox: coverG3.url,
  sprunkis: coverG4.url,
  "super-mario-bros": coverG5.url,
  "toca-boca-mini": coverG6.url,
  "toca-boca-voetbalwereld": coverG7.url,
  "zomer-toca-boca": coverG8.url,
  "barbie-mode": coverPr0.url,
  "fashionista": coverPr1.url,
  "lol-surprise": coverPr2.url,
  "gabby-s-poppenhuis": coverPr3.url,
  "papieren-poppenhuis": coverPr4.url,
  "meisjeshuis": coverPr5.url,
  "hello-kitty-cafe": coverPr6.url,
  "hello-kitty": coverPr7.url,
  "vriendinnen-kuromi-my-melody-hello-kitty": coverPr8.url,
};
for (const b of books) {
  if (bookImages[b.slug]) b.image = bookImages[b.slug];
}

export function getBook(slug: string) {
  return books.find((b) => b.slug === slug);
}

export function getTheme(slug: string) {
  return themes.find((t) => t.slug === slug);
}

export function booksByTheme(slug: string) {
  return books.filter((b) => b.themeSlug === slug);
}
