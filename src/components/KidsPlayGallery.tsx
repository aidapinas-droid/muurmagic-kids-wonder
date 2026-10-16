import { Eye, Hand, MousePointerClick, RotateCcw, ImageIcon, Video } from "lucide-react";

/*
 * ADMIN — "Wat vinden kinderen ervan?"
 * Vervang foto's/video hier door `src` in te vullen (bijv. een import van een .asset.json → `.url`).
 * BELANGRIJK: toon echte foto's van kinderen pas nadat schriftelijke toestemming
 * van ouders/verzorgers voor publicatie is bevestigd. Geen herkenbare gezichten
 * zonder toestemming. Afgebeelde personages zijn licentie-eigendom van derden;
 * presenteer deze niet als officiële merkproducten.
 */
type Slot = { id: string; alt: string; src?: string };

export const PLAY_PHOTOS: Slot[] = [
  { id: "foto-01", alt: "Kinderhanden met losse gelamineerde figuurtjes" },
  { id: "foto-02", alt: "Opengeslagen ringbandspeelboek" },
  { id: "foto-03", alt: "Kind plaatst een figuurtje op de pagina" },
  { id: "foto-04", alt: "Close-up van gelamineerde speelstukjes" },
  { id: "foto-05", alt: "Speelboek met verplaatste figuurtjes" },
  { id: "foto-06", alt: "Kinderhanden die opnieuw beginnen met spelen" },
];

export const PLAY_VIDEO: { id: string; src?: string; poster?: string } = {
  id: "speelvideo",
};

const steps = [
  { icon: Eye, title: "Kijken", text: "Je kind bekijkt de pagina en de losse figuurtjes." },
  { icon: MousePointerClick, title: "Kiezen", text: "Het kiest welk figuurtje of stukje bij de pagina past." },
  { icon: Hand, title: "Plaatsen", text: "Met kleine handjes wordt het stukje op de pagina gezet." },
  { icon: RotateCcw, title: "Opnieuw spelen", text: "Haal de stukjes los en begin gewoon opnieuw." },
];

export function KidsPlayGallery() {
  return (
    <section id="kinderen" className="bg-gradient-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Wat vinden kinderen ervan?
          </h2>
          <p className="mt-3 font-nunito text-lg font-bold text-primary">
            Kleine handjes, groot speelplezier
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
              <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-baloo text-xl font-extrabold text-foreground">{title}</h3>
              <p className="mt-1 font-nunito text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {PLAY_PHOTOS.map((p) =>
            p.src ? (
              <img
                key={p.id}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-square w-full rounded-3xl border-4 border-card object-cover shadow-card"
              />
            ) : (
              <div
                key={p.id}
                data-slot={p.id}
                className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-primary/30 bg-card/70 text-muted-foreground"
              >
                <ImageIcon className="h-8 w-8" aria-hidden="true" />
                <span className="font-nunito text-xs font-bold">{p.id}</span>
              </div>
            ),
          )}
        </div>

        <div className="mt-6">
          {PLAY_VIDEO.src ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={PLAY_VIDEO.poster}
              src={PLAY_VIDEO.src}
              className="aspect-video w-full rounded-3xl border-4 border-card bg-card shadow-magic"
            />
          ) : (
            <div
              data-slot={PLAY_VIDEO.id}
              className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-primary/30 bg-card/70 text-muted-foreground"
            >
              <Video className="h-10 w-10" aria-hidden="true" />
              <span className="font-nunito text-sm font-bold">{PLAY_VIDEO.id}</span>
            </div>
          )}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center font-nunito text-xs text-muted-foreground">
          Foto's van kinderen tonen we alleen met toestemming van ouders. Afgebeelde personages zijn eigendom van hun rechthebbenden; MuurMagic-speelboeken zijn geen officiële merkproducten.
        </p>
      </div>
    </section>
  );
}
