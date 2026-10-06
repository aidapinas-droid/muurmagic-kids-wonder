import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { VAULT_FORMATS, vaultResources, vaultSources, vaultThemes, type VaultFormat, type VaultWorld } from "@/data/vault";

export const Route = createFileRoute("/studio/creative-vault")({
  head: () => ({
    meta: [
      { title: "Creative Vault — MuurMagic Studio" },
      { name: "description", content: "Persoonlijke resourcebibliotheek: Party en Kids & Creative." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Creative Vault — MuurMagic Studio" },
      { property: "og:description", content: "Persoonlijke resourcebibliotheek: Party en Kids & Creative." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CreativeVault,
});

type Tab = "all" | VaultWorld;
const TABS: { id: Tab; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "party", label: "PARTY" },
  { id: "kids-creative", label: "KIDS & CREATIVE" },
];

function CreativeVault() {
  const [tab, setTab] = useState<Tab>("all");
  const [q, setQ] = useState("");
  const [formats, setFormats] = useState<VaultFormat[]>([]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return vaultResources.filter((r) => {
      if (tab !== "all" && r.world !== tab) return false;
      if (formats.length && !r.formats.some((f) => formats.includes(f))) return false;
      if (!term) return true;
      const theme = vaultThemes.find((t) => t.id === r.themeId);
      const source = vaultSources.find((s) => s.id === r.sourceId);
      const hay = [r.title.nl, r.title.en, r.title.es, ...(r.keywords ?? []), theme?.name.nl, theme?.name.en, theme?.name.es, source?.name]
        .filter(Boolean).join(" ").toLowerCase();
      return hay.includes(term);
    });
  }, [tab, q, formats]);

  const toggle = (f: VaultFormat) =>
    setFormats((cur) => (cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f]));

  return (
    <main className="min-h-screen bg-background px-4 py-6">
      <div className="mx-auto max-w-3xl">
        <Link to="/studio" className="font-nunito text-sm font-bold text-primary">← Studio</Link>
        <h1 className="mt-2 font-baloo text-3xl font-extrabold text-foreground">Creative Vault</h1>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Zoek / Search / Buscar…"
          className="mt-4 w-full rounded-2xl border border-border bg-card px-4 py-3 font-nunito text-foreground outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="mt-4 flex gap-2 overflow-x-auto">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={"shrink-0 rounded-full px-4 py-2 font-nunito text-sm font-bold " +
                (tab === t.id ? "bg-primary text-primary-foreground" : "bg-muted text-foreground")}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {VAULT_FORMATS.map((f) => (
            <button key={f} onClick={() => toggle(f)}
              className={"rounded-full border px-3 py-1 font-nunito text-xs font-semibold " +
                (formats.includes(f) ? "border-primary bg-primary/15 text-foreground" : "border-border text-muted-foreground")}>
              {f}
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-border p-8 text-center font-nunito text-muted-foreground">
            {vaultResources.length === 0 ? "De Vault is nog leeg — dataset wordt binnenkort geladen." : "Geen resultaten."}
          </div>
        ) : (
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {results.map((r) => (
              <li key={r.id} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <h3 className="font-baloo text-lg font-bold text-foreground">{r.title.nl}</h3>
                <p className="font-nunito text-xs text-muted-foreground">
                  {r.formats.join(" · ")}
                  {r.sourceId && ` — ${vaultSources.find((s) => s.id === r.sourceId)?.name ?? ""}`}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 font-nunito text-xs font-bold">
                  {r.canvaUrl && <a href={r.canvaUrl} target="_blank" rel="noreferrer" className="text-primary">Open in Canva</a>}
                  {r.driveUrl && <a href={r.driveUrl} target="_blank" rel="noreferrer" className="text-primary">Open in Drive</a>}
                  {r.originalUrl && <a href={r.originalUrl} target="_blank" rel="noreferrer" className="text-primary">Open Original</a>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
