import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { ThemeLibrary } from "@/components/ThemeLibrary";
import { BookCarousel } from "@/components/BookCarousel";
import { OrderOptions } from "@/components/OrderOptions";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyMuurMagic } from "@/components/WhyMuurMagic";
import { PersonalOrder } from "@/components/PersonalOrder";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MuurMagic — Interactieve speelboeken & printables" },
      {
        name: "description",
        content:
          "Print. Knip. Lamineer. Speel. Interactieve speelboeken, printables, DIY sets en busy bags voor peuters en kleuters.",
      },
      {
        property: "og:title",
        content: "MuurMagic — Interactieve speelboeken & printables",
      },
      {
        property: "og:description",
        content:
          "Interactieve speelboeken om te printen, lamineren en steeds opnieuw te spelen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
        <Welcome />
        <ThemeLibrary />
        <OrderOptions />
        <HowItWorks />
        <WhyMuurMagic />
        <PersonalOrder />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
