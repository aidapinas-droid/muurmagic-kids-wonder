import { Logo } from "./Logo";
import { Instagram, Facebook, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm font-body text-sm text-muted-foreground">
            Hand-drawn wall stickers and party decorations for the smallest dreamers
            and the biggest imaginations.
          </p>
          <div className="mt-5 flex gap-3">
            <Social icon={Instagram} />
            <Social icon={Facebook} />
            <Social icon={Music2} />
          </div>
        </div>

        <FooterCol
          title="Shop"
          items={["Wall stickers", "Party decor", "Birthday sets", "New arrivals"]}
        />
        <FooterCol
          title="Help"
          items={["How to apply", "Shipping", "Returns", "FAQ"]}
        />
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 font-body text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} MuurMagic. Made with ✨ in Amsterdam.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
