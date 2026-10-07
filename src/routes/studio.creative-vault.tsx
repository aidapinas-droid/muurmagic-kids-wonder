import { createFileRoute, Link } from "@tanstack/react-router";
// Original Creative Vault app (built by Grok), embedded unchanged: data (763 records),
// search logic, multilingual terms, categories, hierarchy, links and previews.
import { getVaultHtml } from "@/lib/vault.functions";

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
  loader: () => getVaultHtml(),
  component: CreativeVault,
});

function CreativeVault() {
  const { html: vaultHtml } = Route.useLoaderData();
  return (
    <main className="flex h-dvh flex-col bg-background">
      <div className="px-4 py-2">
        <Link to="/studio" className="font-nunito text-sm font-bold text-primary">← Studio</Link>
      </div>
      <iframe
        title="Creative Vault"
        srcDoc={vaultHtml}
        className="w-full flex-1 border-0"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </main>
  );
}
