import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacybeleid")({
  head: () => ({
    meta: [
      { title: "Privacybeleid — MuurMagic — Interactieve speelboeken & printables voor kinderen" },
      {
        name: "description",
        content:
          "Print. Knip. Lamineer. Speel. Interactieve speelboeken, printables en DIY sets voor kinderen van 2 tot 8 jaar. Perfect voor thuis, school, BSO en feestjes.",
      },
      { property: "og:title", content: "Privacybeleid — MuurMagic — Interactieve speelboeken & printables voor kinderen" },
      {
        property: "og:description",
        content: "Print. Knip. Lamineer. Speel. Interactieve speelboeken, printables en DIY sets voor kinderen van 2 tot 8 jaar. Perfect voor thuis, school, BSO en feestjes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="font-baloo text-4xl font-extrabold text-foreground">
          Privacybeleid
        </h1>
        <p className="mt-4 font-nunito text-base leading-relaxed text-muted-foreground">
          Het volledige privacybeleid is niet beschikbaar.
        </p>
        <div className="mt-8 space-y-6 font-nunito text-sm leading-relaxed text-muted-foreground">
          <Block title="Welke gegevens verzamelen we?" />
          <Block title="Waarvoor gebruiken we je gegevens?" />
          <Block title="Hoe lang bewaren we gegevens?" />
          <Block title="Jouw rechten" />
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
      <p className="mt-2">Deze informatie is niet beschikbaar.</p>
    </section>
  );
}
