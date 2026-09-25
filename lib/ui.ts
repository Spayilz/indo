import { TAUX_IDR } from "./plan";

export const mapsUrl = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const idr = (n: number) => n.toLocaleString("fr-FR").replace(/ /g, " ");
export const euros = (n: number) => Math.round(n / TAUX_IDR).toLocaleString("fr-FR");

/* Emoji par type de journée */
export const typeBadge: Record<string, { emoji: string; label: string }> = {
  vol: { emoji: "✈️", label: "Avion" },
  route: { emoji: "🚗", label: "Route" },
  aventure: { emoji: "🌋", label: "Aventure" },
  repos: { emoji: "🌴", label: "Détente" },
  bateau: { emoji: "⛵", label: "Bateau" },
};

/* Couleur (trait), couleur texte lisible et icône par phase */
export const phaseStyle: Record<string, { couleur: string; texte: string; icone: string }> = {
  "Le départ": { couleur: "var(--depart)", texte: "var(--depart-texte)", icone: "🛫" },
  "Sumatra — les orangs-outans": { couleur: "var(--sumatra)", texte: "var(--sumatra)", icone: "🦧" },
  "Java — temples et volcans": { couleur: "var(--java)", texte: "var(--java)", icone: "🌋" },
  "Bali — le nord, puis Canggu": { couleur: "var(--bali)", texte: "var(--bali-texte)", icone: "🏝️" },
  "Komodo — la croisière": { couleur: "var(--komodo)", texte: "var(--komodo)", icone: "🐉" },
  "Bali — le final à Canggu": { couleur: "var(--bali)", texte: "var(--bali-texte)", icone: "🌅" },
  "Le retour": { couleur: "var(--depart)", texte: "var(--depart-texte)", icone: "🛬" },
};

export const stylePhase = (titre: string) =>
  phaseStyle[titre] ?? { couleur: "var(--accent)", texte: "var(--accent)", icone: "📍" };

export const statutStyle: Record<string, string> = {
  "✅ payé": "bg-[var(--ok-fond)] text-[var(--ok-texte)]",
  "✅ réservé": "bg-[var(--info-fond)] text-[var(--info-texte)]",
  "🤝 collaboration": "bg-[var(--info-fond)] text-[var(--info-texte)]",
  "💵 solde sur place": "bg-[var(--attention-fond)] text-[var(--attention-texte)]",
  "‼️ à faire": "bg-[var(--alerte-fond)] text-[var(--alerte-texte)]",
  "‼️ à réserver": "bg-[var(--alerte-fond)] text-[var(--alerte-texte)]",
};

const JOURS = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

/** "2026-10-03" → { jour: "SAM", num: "3", mois: "oct." } */
export function badgeDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return { jour: JOURS[d.getDay()], num: String(d.getDate()), mois: MOIS[d.getMonth()] };
}
