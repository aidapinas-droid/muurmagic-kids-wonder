import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Layers, Printer, Sparkles } from "lucide-react";

export function ProductConcept({ activitySet }: { activitySet: boolean }) {
  const steps = [
    { icon: Sparkles, title: "Kies een vertrouwde wereld", text: "Kies samen een thema dat je kind aanspreekt. Alle producten zijn bedoeld voor kinderen van 4–8 jaar." },
    { icon: Printer, title: "Zelf maken of laten maken", text: "Print en maak de digitale versie zelf, of kies een kant-en-klare Mini of Groot. Jij kiest wat bij jullie past." },
    { icon: Layers, title: "Samen ontdekken", text: activitySet ? "Bekijk samen de activiteiten en volg de instructies van de set. Deze activiteitenset is geen volledig speelboek." : "Bekijk samen de afbeeldingen, benoem wat je ziet en gebruik de speelinstructies om aan de slag te gaan." },
  ];
  return (
    <section className="bg-mint/15 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-baloo text-3xl font-extrabold text-foreground sm:text-4xl">Zo werkt het</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-nunito leading-relaxed text-muted-foreground">{activitySet ? "Een activiteitenset om samen aan de slag te gaan." : "Niet alleen kijken, maar ook doen: samen aan de slag met een interactief speelboek."}</p>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="border-t-2 border-mint pt-6">
              <div className="flex items-center gap-3 text-primary"><Icon className="h-7 w-7" aria-hidden="true" /><span className="font-nunito text-sm font-extrabold">Stap {index + 1}</span></div>
              <h3 className="mt-4 font-baloo text-2xl font-extrabold text-foreground">{title}</h3>
              <p className="mt-3 font-nunito leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProductPreparation({ reusable }: { reusable: boolean }) {
  return (
    <>
      <section className="bg-rose/15 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div><h2 className="font-baloo text-3xl font-extrabold text-foreground">Zo maak je het speelklaar</h2><p className="mt-4 font-nunito leading-relaxed text-muted-foreground">Bij Zelf maken ontvang je een digitaal bestand. Je print, knipt, lamineert en stelt het product zelf samen. Gebruik de montagegids en materialenlijst bij je download.</p>{reusable && <p className="mt-4 font-nunito leading-relaxed text-muted-foreground">Bevestig de losse onderdelen met velcro, zodat je kind ze kan verplaatsen en opnieuw gebruiken.</p>}</div>
          <div className="border-t border-rose pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0"><Clock className="h-8 w-8 text-primary" aria-hidden="true" /><h3 className="mt-3 font-baloo text-2xl font-extrabold text-foreground">Liever kant-en-klaar?</h3><p className="mt-4 font-nunito leading-relaxed text-muted-foreground">Mini en Groot worden op bestelling gemaakt en zijn binnen 7 dagen klaar. Ze zijn volledig afgewerkt: je hoeft niet zelf te printen, knippen of samenstellen.</p><p className="mt-4 font-nunito leading-relaxed text-muted-foreground">De termijn van 7 dagen gaat over het klaarmaken van je bestelling. Vraag bij je persoonlijke bestelling naar de aflevering.</p></div>
        </div>
      </section>
      {reusable && <section className="bg-background py-16 sm:py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><h2 className="font-baloo text-3xl font-extrabold text-foreground">Steeds opnieuw spelen</h2><p className="mt-5 font-nunito leading-relaxed text-muted-foreground">De speelboeken zijn gelamineerd en de losse onderdelen worden met velcro bevestigd. Zo kan je kind onderdelen losmaken, verplaatsen en weer terugplakken.</p><p className="mt-4 font-nunito leading-relaxed text-muted-foreground">Berg na het spelen de losse onderdelen bij het boek op. Maak velcro-onderdelen rustig los en houd het boek en de onderdelen bij elkaar voor de volgende speelsessie.</p></div></section>}
    </>
  );
}

export function ProductFaq({ reusable }: { reusable: boolean }) {
  const questions = [
    { question: "Voor welke leeftijd is dit product?", answer: "Alle MuurMagic boeken en producten zijn bedoeld voor kinderen van 4–8 jaar." },
    { question: "Wat is het verschil tussen Zelf maken en kant-en-klaar?", answer: "Zelf maken is een digitale download van €3,99 die je zelf print, knipt, lamineert en samenstelt. De kant-en-klare Mini van €7,50 en Groot van €17,50 zijn volledig afgewerkt en klaar om mee te spelen." },
    { question: "Wanneer is mijn kant-en-klare bestelling klaar?", answer: "Mini en Groot worden op bestelling gemaakt en zijn binnen 7 dagen klaar. Bespreek de aflevering bij je persoonlijke bestelling." },
    { question: "Hoe bestel en betaal ik?", answer: "Je bestelt en betaalt je digitale download via Payhip. Voor een kant-en-klaar product gebruik je de persoonlijke bestelling via WhatsApp; daar stem je je bestelling en betaling af. De knoppen op deze pagina openen de bestaande bestelkanalen." },
    { question: "Moet ik de digitale versie zelf printen?", answer: "Ja. Bij Zelf maken koop je een digitaal bestand, geen gedrukt boek. Je verzorgt zelf het printen, knippen, lamineren en samenstellen. Liever niet zelf maken? Kies dan Mini of Groot." },
    ...(reusable ? [{ question: "Kan mijn kind het speelboek opnieuw gebruiken?", answer: "Ja. De gelamineerde onderdelen met velcro kunnen worden losgemaakt en opnieuw bevestigd. Maak ze rustig los en berg alle onderdelen bij het boek op na het spelen." }] : []),
  ];
  return (
    <section className="bg-gradient-soft py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-baloo text-3xl font-extrabold text-foreground sm:text-4xl">Veelgestelde vragen</h2>
        <Accordion type="single" collapsible className="mt-8">
          {questions.map(({ question, answer }, index) => <AccordionItem key={question} value={`question-${index}`} className="border-border"><AccordionTrigger className="gap-4 py-6 font-nunito text-base font-extrabold text-foreground">{question}</AccordionTrigger><AccordionContent className="font-nunito text-base leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
        </Accordion>
      </div>
    </section>
  );
}