import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { StickerHero } from "@/components/archive/StickerHero";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/muurstickers-archief")({
  head: () => ({
    meta: [
      { title: "Muurstickers archief — MuurMagic — Interactieve speelboeken & printables voor kinderen" },
      {
        name: "description",
        content:
          "Print. Knip. Lamineer. Speel. Interactieve speelboeken, printables en DIY sets voor kinderen van 4 tot 8 jaar. Perfect voor thuis, school, BSO en feestjes.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Muurstickers archief — MuurMagic — Interactieve speelboeken & printables voor kinderen" },
      {
        property: "og:description",
        content: "Print. Knip. Lamineer. Speel. Interactieve speelboeken, printables en DIY sets voor kinderen van 4 tot 8 jaar. Perfect voor thuis, school, BSO en feestjes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-muted/60 px-4 py-3 text-center font-nunito text-sm font-semibold text-muted-foreground">
          🗄️ Archief — deze collectie staat tijdelijk geparkeerd en is niet
          zichtbaar in het menu.
        </div>
        <StickerHero />
        <Categories />
        <ProductGrid />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
