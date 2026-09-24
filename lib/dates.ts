import { phases, type Jour, type Phase } from "./plan";

export type JourEtendu = Jour & { phase: Phase; index: number };

export const tousLesJours: JourEtendu[] = phases
  .flatMap((p) => p.jours.map((j) => ({ ...j, phase: p, index: 0 })))
  .map((j, i) => ({ ...j, index: i }));

export const DEBUT = "2026-09-26";
export const FIN = "2026-10-18";

/** Date "YYYY-MM-DD" dans un fuseau donné (ou celui de l'appareil). */
export function isoLocal(d: Date = new Date(), tz?: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

/** "14 h 32" dans un fuseau donné. */
export function heure(d: Date, tz: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(d)
    .replace(":", " h ");
}

/** Nombre de jours de a vers b (positif si b est après a). */
export function joursEntre(a: string, b: string): number {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86400000);
}

export function libelleFuseau(tz: string): string {
  if (tz === "Asia/Jakarta") return "WIB";
  if (tz === "Asia/Makassar") return "WITA";
  return "";
}

const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

/** ["2026-10-03","2026-10-04"] → "3 et 4 oct." */
export function formatNuits(nuits: string[]): string {
  const jours = nuits.map((n) => {
    const [, m, d] = n.split("-").map(Number);
    return { d, m };
  });
  const mois = MOIS[jours[0].m - 1];
  if (jours.length === 1) return `${jours[0].d} ${mois}`;
  return `${jours.map((j) => j.d).join(" et ")} ${mois}`;
}
