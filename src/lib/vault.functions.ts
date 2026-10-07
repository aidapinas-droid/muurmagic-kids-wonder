import { createServerFn } from "@tanstack/react-start";
import { redirect } from "@tanstack/react-router";
import { checkUnlocked } from "@/lib/gate.functions";

// Admin-only: the vault content is only sent after the password session is verified.
export const getVaultHtml = createServerFn({ method: "GET" }).handler(async () => {
  const { unlocked } = await checkUnlocked();
  if (!unlocked) throw redirect({ to: "/toegang", search: { sleutel: undefined } });
  const mod = await import("@/data/creative-vault.html?raw");
  return { html: mod.default as string };
});

export const requireAdmin = createServerFn({ method: "GET" }).handler(async () => {
  const { unlocked } = await checkUnlocked();
  if (!unlocked) throw redirect({ to: "/toegang", search: { sleutel: undefined } });
  return { ok: true };
});
