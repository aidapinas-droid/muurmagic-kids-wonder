import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = { label: string; href: string; to?: string };

const links: NavLink[] = [
  { label: "Shop", href: "#shop" },
  { label: "Spelletjes", href: "/printable-interactieve-spelletjes", to: "/printable-interactieve-spelletjes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.href}
                to={l.to}
                className="font-body text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden rounded-full bg-primary font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 sm:inline-flex"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Cart (0)
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-body font-semibold text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2 rounded-full bg-primary text-primary-foreground">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
