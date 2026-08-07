import { Button } from "@/components/ui/button";
import { Sparkle, Star } from "./Sparkle";
import muurmagicLogo from "@/assets/muurmagic-logo.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      {/* Floating decorative blobs */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 animate-blob bg-mint/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 animate-blob bg-rose/40 blur-3xl"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      {/* Sparkles */}
      <Sparkle className="absolute left-[12%] top-24 animate-twinkle text-primary" size={28} />
      <Star className="absolute right-[18%] top-40 animate-twinkle text-accent" size={22} />
      <Sparkle
        className="absolute bottom-24 left-[8%] animate-twinkle text-mint"
        size={20}
        color="oklch(0.78 0.11 175)"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="relative mx-auto flex flex-col items-center text-center">
          {/* Floating gold sparkles around the logo */}
          <GoldSparkle className="absolute left-[6%] top-4 animate-twinkle" size={14} />
          <GoldSparkle
            className="absolute right-[8%] top-10 animate-twinkle"
            size={18}
            style={{ animationDelay: "0.6s" }}
          />
          <GoldSparkle
            className="absolute left-[18%] top-40 animate-twinkle"
            size={12}
            style={{ animationDelay: "1.1s" }}
          />
          <GoldSparkle
            className="absolute right-[14%] top-52 animate-twinkle"
            size={16}
            style={{ animationDelay: "1.6s" }}
          />
          <GoldSparkle
            className="absolute left-[4%] top-72 animate-twinkle"
            size={10}
            style={{ animationDelay: "2.1s" }}
          />
          <GoldSparkle
            className="absolute right-[4%] top-80 animate-twinkle"
            size={14}
            style={{ animationDelay: "0.3s" }}
          />

          <div className="relative animate-float-hero">
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl animate-glow-purple"
              style={{
                background:
                  "radial-gradient(closest-side, oklch(0.58 0.13 315 / 0.55), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <img
              src={muurmagicLogo}
              alt="MuurMagic — interactieve speelboeken en printables"
              width={640}
              height={640}
              className="relative h-auto w-[280px] drop-shadow-xl sm:w-[380px] lg:w-[460px]"
            />
          </div>

          <h1 className="mt-8 font-baloo text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Maak van spelen een avontuur
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-nunito text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            Interactieve speelboeken en printables voor peuters en kleuters.
          </p>

          <Button
            asChild
            size="lg"
            className="cta-mint-glow mt-8 h-14 rounded-full px-8 font-nunito text-base font-extrabold text-mint-foreground hover:scale-[1.03]"
            style={{ backgroundColor: "oklch(0.78 0.11 175)" }}
          >
            <a href="#themas">📚 Bekijk de speelboeken</a>
          </Button>

          <p className="mt-5 font-nunito text-sm font-bold tracking-wide text-primary sm:text-base">
            📱 Minder schermtijd. 🌈 Meer MuurMagic.
          </p>
        </div>
      </div>
    </section>
  );
}

function GoldSparkle({
  className = "",
  size = 14,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z"
        fill="#F2C46D"
      />
    </svg>
  );
}
