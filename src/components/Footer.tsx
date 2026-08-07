import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Facebook, MessageCircle, ShoppingBag } from "lucide-react";
import { PAYHIP_URL, WHATSAPP_URL, themes } from "@/data/library";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/muurmagic" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/muurmagic" },
  { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL },
  { icon: ShoppingBag, label: "Payhip", href: PAYHIP_URL },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm font-nunito text-sm text-muted-foreground">
            Interactieve speelboeken, printables, DIY sets en busy bags voor de
            kleinste dromers en de grootste fantasie.
          </p>
          <p className="mt-3 font-baloo text-sm font-bold text-primary">
            Print. Knip. Lamineer. Speel. Steeds opnieuw.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-baloo text-sm font-extrabold uppercase tracking-wider text-foreground">
            Thema's
          </h4>
          <ul className="mt-4 space-y-2">
            {themes.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <Link
                  to="/thema/$slug"
                  params={{ slug: t.slug }}
                  className="font-nunito text-sm text-muted-foreground hover:text-primary"
                >
                  {t.emoji} {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-baloo text-sm font-extrabold uppercase tracking-wider text-foreground">
            Info
          </h4>
          <ul className="mt-4 space-y-2 font-nunito text-sm text-muted-foreground">
            <li>
              <a href="/#hoe-werkt-het" className="hover:text-primary">
                Hoe werkt het
              </a>
            </li>
            <li>
              <a href="/#persoonlijk-bestellen" className="hover:text-primary">
                Persoonlijk bestellen
              </a>
            </li>
            <li>
              <Link to="/privacybeleid" className="hover:text-primary">
                Privacybeleid
              </Link>
            </li>
            <li>
              <Link to="/algemene-voorwaarden" className="hover:text-primary">
                Algemene voorwaarden
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 font-nunito text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} MuurMagic. Met ✨ gemaakt in Nederland.</p>
          <p>Privacy · Voorwaarden · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
