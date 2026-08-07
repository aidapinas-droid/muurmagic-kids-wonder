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
      { title: "Muurstickers archief — MuurMagic" },
      {
        name: "description",
        content:
          "Archiefpagina met de eerdere MuurMagic muurstickers, standees en feestdecoratie. Niet zichtbaar in de navigatie.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Muurstickers archief — MuurMagic" },
      {
        property: "og:description",
        content: "Bewaarde collectie muurstickers, standees en feestsets van MuurMagic.",
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
