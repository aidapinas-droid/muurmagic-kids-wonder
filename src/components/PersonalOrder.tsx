import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL } from "@/data/library";

export function PersonalOrder() {
  return (
    <section id="persoonlijk-bestellen" className="bg-gradient-soft py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-card sm:p-12">
          <h2 className="font-baloo text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Persoonlijk bestellen
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-nunito text-base leading-relaxed text-muted-foreground sm:text-lg">
            Wil je een boek op maat, met een eigen naam of een speciaal thema?
            Stuur ons een bericht — we denken graag met je mee.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="cta-mint-glow h-14 rounded-full px-8 font-nunito text-base font-extrabold text-mint-foreground"
              style={{ backgroundColor: "oklch(0.78 0.11 175)" }}
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Stuur een WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-2 border-foreground/15 bg-card px-8 font-nunito text-base font-bold text-foreground hover:bg-mint/20"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Naar het contactformulier
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
