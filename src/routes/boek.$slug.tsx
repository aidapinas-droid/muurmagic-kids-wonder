import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBook, getTheme, WHATSAPP_URL, VARIANTS } from "@/data/library";
import { ProductLabelList } from "@/components/ProductLabel";
import { ShoppingBag, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/boek/$slug")({
  loader: ({ params }) => {
    const book = getBook(params.slug);
    if (!book) throw notFound();
    return { book, theme: getTheme(book.themeSlug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Boek niet gevonden — MuurMagic — Interactieve speelboeken & printables voor kinderen" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { book } = loaderData;
    const title = `${book.title} | MuurMagic — Interactieve speelboeken & printables voor kinderen`;
    return {
      meta: [
        { title },
        { name: "description", content: book.description },
        { property: "og:title", content: title },
        { property: "og:description", content: book.description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: BookPage,
});

function BookPage() {
  const { book, theme } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-soft py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {book.image ? (
              <img
                src={book.image}
                alt={book.title}
                className="aspect-square w-full rounded-[2rem] border-4 border-card bg-card/70 object-contain shadow-magic"
              />
            ) : (
              <div aria-hidden="true" className="aspect-square rounded-[2rem] border-4 border-card bg-card/70 shadow-magic" />
            )}

            <div>
              {theme && (
                <Link
                  to="/thema/$slug"
                  params={{ slug: theme.slug }}
                  className="font-nunito text-sm font-bold text-primary hover:underline"
                >
                  ← {theme.emoji} {theme.title}
                </Link>
              )}
              <h1 className="mt-3 font-baloo text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                {book.title}
              </h1>
              <div className="mt-4">
                <ProductLabelList labels={book.labels} />
              </div>
              <p className="mt-5 font-nunito text-base leading-relaxed text-muted-foreground">
                {book.description}
              </p>

              <div className="mt-6 rounded-2xl border border-border/60 bg-card p-5">
                <h2 className="font-baloo text-lg font-extrabold text-foreground">
                  Leeftijd
                </h2>
                <p className="mt-1 font-nunito text-sm text-muted-foreground">
                  {book.age}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-full bg-primary px-8 font-nunito text-base font-extrabold text-primary-foreground shadow-magic hover:bg-primary/90"
                >
                  <a href={book.payhipUrl} target="_blank" rel="noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Bestellen via Payhip
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-full border-2 border-foreground/15 bg-card px-8 font-nunito text-base font-bold text-foreground hover:bg-mint/20"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Vraag stellen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-baloo text-3xl font-extrabold text-foreground sm:text-4xl">
              Kies jouw variant
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VARIANTS.map((v) => (
                <article
                  key={v.name}
                  className="flex flex-col rounded-3xl border border-border/60 bg-card p-7 text-center shadow-card"
                >
                  <span className="text-5xl" aria-hidden="true">
                    {v.icon}
                  </span>
                  <h3 className="mt-4 font-baloo text-xl font-extrabold text-foreground">
                    {v.name}
                  </h3>
                  <p className="mt-1 font-nunito text-lg font-bold text-primary">
                    {v.price}
                  </p>
                  <p className="mt-3 flex-1 font-nunito text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 sm:pb-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <InfoCard title="Wat leert je kind?" items={book.learn} />
            <InfoCard title="Wat zit erin?" items={book.contents} />
          </div>
        </section>


        <section className="bg-gradient-soft py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-baloo text-3xl font-extrabold text-foreground sm:text-4xl">
              Zo maak je het speelklaar
            </h2>
            <p className="mt-4 font-nunito text-base text-muted-foreground">
              Print. Knip. Lamineer. Plak de velcro. Spelen — steeds opnieuw.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-3xl border border-border/60 bg-card p-7 shadow-card">
      <h2 className="font-baloo text-2xl font-extrabold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((i, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 font-nunito text-sm text-muted-foreground"
          >
            <span className="text-primary" aria-hidden="true">
              ✦
            </span>
            {i}
          </li>
        ))}
      </ul>
    </article>
  );
}
