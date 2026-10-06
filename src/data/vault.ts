/**
 * Creative Vault data contract (owner-only Studio area).
 * EMPTY on purpose — replace `vaultResources` / `vaultThemes` / `vaultSources`
 * with the exact existing Creative Vault dataset. The UI reads only from here.
 */
export type VaultWorld = "party" | "kids-creative";
export type VaultFormat = "Canva" | "PDF" | "JPG" | "PNG" | "PowerPoint" | "SVG" | "Other";

export type VaultSource = { id: string; name: string; url?: string };
export type VaultTheme = { id: string; world: VaultWorld; name: { nl: string; en?: string; es?: string }; parentId?: string };

export type VaultResource = {
  id: string;
  world: VaultWorld;
  themeId?: string;
  sourceId?: string;
  title: { nl: string; en?: string; es?: string };
  keywords?: string[];
  formats: VaultFormat[];
  canvaUrl?: string;
  driveUrl?: string;
  originalUrl?: string;
  thumbnail?: string;
};

export const VAULT_FORMATS: VaultFormat[] = ["Canva", "PDF", "JPG", "PNG", "PowerPoint", "SVG", "Other"];
export const vaultSources: VaultSource[] = [];
export const vaultThemes: VaultTheme[] = [];
export const vaultResources: VaultResource[] = [];
