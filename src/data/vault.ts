/**
 * Creative Vault data contract (owner-only Studio area).
 * Loaded from vault.json (converted from the original Creative Vault app, 763 items). The UI reads only from here.
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
  kind?: string;
  category?: string;
  blurb?: string;
  use?: string;
  hidden?: boolean;
  children?: string[];
};

export const VAULT_FORMATS: VaultFormat[] = ["Canva", "PDF", "JPG", "PNG", "PowerPoint", "SVG", "Other"];


export const vaultSources: VaultSource[] = [];
export const vaultThemes: VaultTheme[] = [];
export const vaultResources: VaultResource[] = [];
