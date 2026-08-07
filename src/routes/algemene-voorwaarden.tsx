import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden — MuurMagic" },
      {
        name: "description",
        content:
          "De algemene voorwaarden voor bestellingen, levering en retour bij MuurMagic.",
      },
      { property: "og:title", content: "Algemene voorwaarden — MuurMagic" },
      {
        property: "og:description",
        content: "Voorwaarden voor bestellingen, levering en retour bij MuurMagic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="font-baloo text-4xl font-extrabold text-foreground">
          Algemene voorwaarden
        </h1>
        <p className="mt-4 font-nunito text-base leading-relaxed text-muted-foreground">
          Deze tekst is een placeholder. Hier komen binnenkort onze volledige
          algemene voorwaarden te staan.
        </p>
        <div className="mt-8 space-y-6 font-nunito text-sm leading-relaxed text-muted-foreground">
          <Block title="Bestellen en betalen" />
          <Block title="Levering van digitale producten" />
          <Block title="Levering van fysieke producten" />
          <Block title="Retour en herroeping" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Block({ title }: { title: string }) {
  return (
    <section>
      <h2 className="font-baloo text-xl font-extrabold text-foreground">{title}</h2>
      <p className="mt-2">Tekst volgt binnenkort.</p>
    </section>
  );
}
