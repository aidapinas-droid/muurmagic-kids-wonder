import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MuurMagic — Turn any wall into magic" },
      {
        name: "description",
        content:
          "Hand-drawn removable wall stickers and party decorations for kids' rooms, playrooms and birthday parties. Peel, stick, smile.",
      },
      { property: "og:title", content: "MuurMagic — Turn any wall into magic" },
      {
        property: "og:description",
        content:
          "Hand-drawn removable wall stickers and party decorations for kids' rooms and birthdays.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
