import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getTheme, booksByTheme, themes, type Book } from "@/data/library";
import { ProductLabelList } from "@/components/ProductLabel";

export const Route = createFileRoute("/thema/$slug")({
  loader: ({ params }) => {
    const theme = getTheme(params.slug);
    if (!theme) throw notFound();
    return { theme, books: booksByTheme(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Thema niet gevonden — MuurMagic" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { theme } = loaderData;
    const title = `${theme.title} — interactieve speelboeken | MuurMagic`;
    return {
      meta: [
        { title },
        { name: "description", content: theme.description },
        { property: "og:title", content: title },
        { property: "og:description", content: theme.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: ThemePage,
});

function ThemePage() {
  const { theme, books } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className={"py-16 sm:py-20 " + theme.bg}>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-5xl" aria-hidden="true">
              {theme.emoji}
            </span>
            <h1 className="mt-4 font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {theme.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-nunito text-base text-muted-foreground sm:text-lg">
              {theme.description}
            </p>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(books as Book[]).map((b) => (
                <Link
                  key={b.slug}
                  to="/boek/$slug"
                  params={{ slug: b.slug }}
                  className="group rounded-3xl border border-border/60 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-magic"
                >
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-soft font-nunito text-sm font-semibold text-muted-foreground">
                    📸 Foto volgt binnenkort
                  </div>
                  <div className="mt-4">
                    <ProductLabelList labels={b.labels} />
                  </div>
                  <h2 className="mt-3 font-baloo text-xl font-extrabold text-foreground">
                    {b.title}
                  </h2>
                  <p className="mt-2 font-nunito text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                  <span className="mt-4 inline-block font-nunito text-sm font-bold text-primary">
                    Bekijk boek →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-nunito text-sm font-bold uppercase tracking-widest text-primary">
                Andere thema's
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {themes
                  .filter((t) => t.slug !== theme.slug)
                  .map((t) => (
                    <Link
                      key={t.slug}
                      to="/thema/$slug"
                      params={{ slug: t.slug }}
                      className="rounded-full border border-border bg-card px-4 py-2 font-nunito text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
                    >
                      {t.emoji} {t.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
