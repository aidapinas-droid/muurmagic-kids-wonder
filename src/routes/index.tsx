import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { ThemeLibrary } from "@/components/ThemeLibrary";
import { ProductTypes } from "@/components/ProductTypes";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyMuurMagic } from "@/components/WhyMuurMagic";
import { PersonalOrder } from "@/components/PersonalOrder";
import { Testimonials } from "@/components/Testimonials";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MuurMagic — Interactieve speelboeken & muurstickers" },
      {
        name: "description",
        content:
          "Print. Knip. Lamineer. Speel. Interactieve speelboeken, muurstickers en feestdecoratie voor kinderkamers, speelkamers en verjaardagen.",
      },
      {
        property: "og:title",
        content: "MuurMagic — Interactieve speelboeken & muurstickers",
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
        <ProductTypes />
        <HowItWorks />
        <WhyMuurMagic />
        <PersonalOrder />
        <Testimonials />
        <Categories />
        <ProductGrid />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
