import { createFileRoute, Link } from "@tanstack/react-router";
import { requireAdmin } from "@/lib/vault.functions";

export const Route = createFileRoute("/studio/")({
  head: () => ({
    meta: [
      { title: "Studio — MuurMagic Creative Center" },
      { name: "description", content: "Interne Creative Center omgeving voor de eigenaar van MuurMagic." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Studio — MuurMagic Creative Center" },
      { property: "og:description", content: "Interne Creative Center omgeving voor de eigenaar van MuurMagic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: () => requireAdmin(),
  component: StudioHome,
});

function StudioHome() {
  return (
    <main className="min-h-screen bg-gradient-soft px-4 py-10">
      <div className="mx-auto max-w-md">
        <p className="font-nunito text-xs font-bold uppercase tracking-widest text-muted-foreground">Creative Center</p>
        <h1 className="mt-1 font-baloo text-4xl font-extrabold text-foreground">Studio</h1>
        <Link
          to="/studio/creative-vault"
          className="mt-8 block rounded-3xl border border-border/60 bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-magic"
        >
          <span className="text-3xl" aria-hidden="true">🗝️</span>
          <h2 className="mt-3 font-baloo text-2xl font-extrabold text-foreground">Creative Vault</h2>
          <p className="mt-1 font-nunito text-sm text-muted-foreground">Persoonlijke bibliotheek — Party & Kids & Creative.</p>
        </Link>
        <Link to="/" className="mt-8 inline-block font-nunito text-sm font-bold text-primary">← Terug naar winkel</Link>
      </div>
    </main>
  );
}
