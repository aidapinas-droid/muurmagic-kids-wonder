import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import logo from "@/assets/muurmagic-logo.png";
import { unlockSite } from "@/lib/gate.functions";

export const Route = createFileRoute("/toegang")({
  validateSearch: (search: Record<string, unknown>) => ({
    sleutel: typeof search["sleutel"] === "string" ? (search["sleutel"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Toegang — MuurMagic — Interactieve speelboeken & printables voor kinderen" },
      { name: "description", content: "Print. Knip. Lamineer. Speel. Interactieve speelboeken, printables en DIY sets voor kinderen van 4 tot 8 jaar. Perfect voor thuis, school, BSO en feestjes." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Toegang — MuurMagic — Interactieve speelboeken & printables voor kinderen" },
      { property: "og:description", content: "Print. Knip. Lamineer. Speel. Interactieve speelboeken, printables en DIY sets voor kinderen van 4 tot 8 jaar. Perfect voor thuis, school, BSO en feestjes." },
    ],
  }),
  component: ToegangPage,
});

function ToegangPage() {
  const router = useRouter();
  const { sleutel } = Route.useSearch();
  const unlock = useServerFn(unlockSite);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submitPassword(password: string) {
    setLoading(true);
    setError(false);
    const res = await unlock({ data: { password } });
    setLoading(false);
    if (res.ok) {
      await router.invalidate();
      await router.navigate({ to: "/studio/creative-vault" });
    } else {
      setError(true);
    }
  }

  // Admin-bypass: /toegang?sleutel=<wachtwoord> ontgrendelt direct (1 jaar geldig)
  useEffect(() => {
    if (sleutel) void submitPassword(sleutel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sleutel]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    await submitPassword(password);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-secondary/30 via-background to-accent/20 px-4 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-border/60 bg-card/80 p-8 text-center shadow-xl backdrop-blur">
        <img
          src={logo}
          alt="MuurMagic logo"
          className="mx-auto h-28 w-auto object-contain drop-shadow-[0_8px_24px_hsl(var(--primary)/0.35)]"
        />
        <h1 className="mt-6 font-display text-2xl font-bold text-foreground">Welkom bij MuurMagic</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Deze website is tijdelijk afgeschermd. Voer het wachtwoord in om verder te gaan.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Wachtwoord"
            aria-label="Wachtwoord"
            className="w-full rounded-full border border-border bg-background px-5 py-3 text-center text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
          {error && <p className="text-sm text-destructive">Onjuist wachtwoord. Probeer het opnieuw.</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-md transition hover:brightness-105 disabled:opacity-60"
          >
            {loading ? "Even geduld..." : "Toegang"}
          </button>
        </form>
      </div>
    </main>
  );
}
