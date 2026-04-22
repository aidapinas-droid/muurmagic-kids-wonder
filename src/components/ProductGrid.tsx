import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";
import balloon from "@/assets/sticker-balloon.jpg";
import castle from "@/assets/sticker-castle.jpg";
import jungle from "@/assets/sticker-jungle.jpg";
import balloons from "@/assets/sticker-balloons.jpg";
import rainbow from "@/assets/sticker-rainbow.jpg";
import space from "@/assets/sticker-space.jpg";

type Product = {
  id: string;
  name: string;
  category: "Wall sticker" | "Party decor";
  price: string;
  image: string;
  tag?: string;
  bg: string;
};

const products: Product[] = [
  { id: "1", name: "Bunny in Hot Air Balloon", category: "Wall sticker", price: "€34", image: balloon, tag: "Bestseller", bg: "bg-rose/30" },
  { id: "2", name: "Magical Fairy Castle", category: "Wall sticker", price: "€42", image: castle, bg: "bg-primary/20" },
  { id: "3", name: "Jungle Friends Trio", category: "Wall sticker", price: "€38", image: jungle, tag: "New", bg: "bg-mint/30" },
  { id: "4", name: "Pastel Balloon Garland", category: "Party decor", price: "€24", image: balloons, bg: "bg-rose/30" },
  { id: "5", name: "Dreamy Pastel Rainbow", category: "Wall sticker", price: "€36", image: rainbow, bg: "bg-mint/30" },
  { id: "6", name: "Sleepy Moon & Stars", category: "Wall sticker", price: "€32", image: space, tag: "Limited", bg: "bg-primary/20" },
];

const filters = ["All", "Wall stickers", "Party decor", "Birthdays", "Playrooms"];

export function ProductGrid() {
  return (
    <section id="shop" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-primary">
              Our collection
            </p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Stickers that spark{" "}
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                imagination
              </span>
            </h2>
          </div>
          <p className="max-w-md font-body text-base text-muted-foreground">
            Hand-illustrated, removable, and printed on whisper-soft matte vinyl.
            Built to last from the first nap to the tenth tea party.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <button
              key={f}
              className={
                "rounded-full border px-4 py-2 font-body text-sm font-semibold transition-colors " +
                (i === 0
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-magic">
      <div className={"relative aspect-square overflow-hidden " + product.bg}>
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 font-body text-xs font-bold text-primary shadow-soft">
            {product.tag}
          </span>
        )}
        <button
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-rose hover:text-rose-foreground"
          aria-label="Save to favourites"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-end justify-between gap-4 p-5">
        <div className="min-w-0">
          <p className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h3 className="mt-1 truncate font-display text-lg font-bold text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 font-display text-xl font-black text-primary">
            {product.price}
          </p>
        </div>
        <Button
          size="icon"
          className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-magic text-primary-foreground shadow-soft hover:opacity-90"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </article>
  );
}
