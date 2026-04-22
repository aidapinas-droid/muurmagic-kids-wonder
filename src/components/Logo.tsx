import { Link } from "@tanstack/react-router";
import { Sparkle } from "./Sparkle";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-magic text-primary-foreground shadow-soft transition-transform group-hover:rotate-[-8deg]">
        <Sparkle size={22} color="currentColor" />
      </span>
      <span className="font-display text-2xl font-black tracking-tight text-foreground">
        Muur<span className="text-primary">Magic</span>
      </span>
    </Link>
  );
}
