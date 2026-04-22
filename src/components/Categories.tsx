import { Sticker, Baby, Users, PartyPopper, Sparkles } from "lucide-react";

type Category = {
  id: string;
  title: string;
  price: string;
  description: string;
  badge: string;
  icon: typeof Sticker;
  bg: string;
  iconBg: string;
  badgeBg: string;
};

const categories: Category[] = [
  {
    id: "wall-stickers",
    title: "Wall Stickers",
    price: "From €8",
    description:
      "Beautiful watercolour stickers for any wall. Peel, stick and transform your space in minutes.",
    badge: "Most Popular",
    icon: Sticker,
    bg: "bg-rose/20",
    iconBg: "bg-rose/40 text-rose-foreground",
    badgeBg: "bg-rose text-rose-foreground",
  },
  {
    id: "small-standees",
    title: "Small Standees",
    price: "From €15",
    description:
      "Adorable standing decoration figures. Perfect for birthday tables, photo corners and playrooms.",
    badge: "New",
    icon: Baby,
    bg: "bg-mint/20",
    iconBg: "bg-mint/40 text-mint-foreground",
    badgeBg: "bg-mint text-mint-foreground",
  },
  {
    id: "large-standees",
    title: "Large Standees",
    price: "From €32",
    description:
      "Life-size standing figures for schools, theatre, BSO, events and big birthday parties.",
    badge: "Bestseller",
    icon: Users,
    bg: "bg-primary/15",
    iconBg: "bg-primary/30 text-primary",
    badgeBg: "bg-primary text-primary-foreground",
  },
  {
    id: "party-sets",
    title: "Party Sets",
    price: "From €39",
    description:
      "Complete decoration sets for a magical party setup. Easy, beautiful and ready to impress.",
    badge: "Popular",
    icon: PartyPopper,
    bg: "bg-cream",
    iconBg: "bg-sun/40 text-foreground",
    badgeBg: "bg-sun text-foreground",
  },
  {
    id: "custom-creations",
    title: "Custom Creations",
    price: "From €25",
    description:
      "Personalised themes, names and sizes made just for your event or space.",
    badge: "Made for you",
    icon: Sparkles,
    bg: "bg-accent/25",
    iconBg: "bg-accent/50 text-accent-foreground",
    badgeBg: "bg-accent text-accent-foreground",
  },
];

export function Categories() {
  return (
    <section id="categories" className="relative bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-bold uppercase tracking-widest text-primary">
            Explore by category
          </p>
          <h2 className="mt-2 font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Magic for every{" "}
            <span className="bg-gradient-magic bg-clip-text text-transparent">
              moment
            </span>
          </h2>
          <p className="mt-4 font-nunito text-base text-muted-foreground sm:text-lg">
            From tiny stickers to life-size standees — pick your favourite way
            to bring a room or party to life.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <article
      className={
        "group relative overflow-hidden rounded-3xl border border-border/60 p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-magic " +
        category.bg
      }
    >
      <span
        className={
          "absolute right-5 top-5 rounded-full px-3 py-1 font-nunito text-xs font-bold shadow-soft " +
          category.badgeBg
        }
      >
        {category.badge}
      </span>

      <div
        className={
          "flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 " +
          category.iconBg
        }
      >
        <Icon className="h-7 w-7" strokeWidth={2.2} />
      </div>

      <h3 className="mt-6 font-baloo text-2xl font-extrabold text-foreground">
        {category.title}
      </h3>
      <p className="mt-1 font-baloo text-lg font-bold text-primary">
        {category.price}
      </p>
      <p className="mt-3 font-nunito text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>
    </article>
  );
}
