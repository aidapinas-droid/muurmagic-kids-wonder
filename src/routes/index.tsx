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
      { title: "MuurMagic | Interactieve speelboeken & printables voor kids" },
      {
        name: "description",
        content:
          "Ontdek interactieve speelboeken, printables, DIY sets en busy bags voor peuters en kleuters. Print, knip, lamineer en speel verder.",
      },
      {
        property: "og:title",
        content: "MuurMagic | Interactieve speelboeken & printables voor kids",
      },
      {
        property: "og:description",
        content:
          "Ontdek interactieve speelboeken, printables, DIY sets en busy bags voor peuters en kleuters. Print, knip, lamineer en speel verder.",
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
        <BookCarousel />
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
