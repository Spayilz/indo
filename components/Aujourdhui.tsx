"use client";

import { useEffect, useState } from "react";
import {
  tousLesJours,
  isoLocal,
  heure,
  joursEntre,
  libelleFuseau,
  DEBUT,
  FIN,
} from "@/lib/dates";
import { hebergements, reservations } from "@/lib/plan";

const mapsUrl = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

/* La carte « Aujourd'hui » : calculée sur la date du téléphone,
 * avec flèches pour regarder la veille et le lendemain. */
export default function Aujourdhui() {
  const [maintenant, setMaintenant] = useState<Date | null>(null);
  const [decalage, setDecalage] = useState(0);

  useEffect(() => {
    setMaintenant(new Date());
    const t = setInterval(() => setMaintenant(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const isoJour = maintenant ? isoLocal(maintenant) : null;

  // Ouvre le récit du jour courant dans la liste et le surligne
  useEffect(() => {
    if (!isoJour) return;
    const art = document.getElementById(`j-${isoJour}`);
    if (!art) return;
    art.classList.add("jour-actuel");
    art.querySelector("details")?.setAttribute("open", "");
  }, [isoJour]);

  if (!maintenant || !isoJour) {
    return (
      <div className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-5 min-h-[160px]" />
    );
  }

  const avant = joursEntre(isoJour, DEBUT);
  const apres = joursEntre(FIN, isoJour);
  let base = tousLesJours.findIndex((j) => j.iso === isoJour);
  if (base < 0) base = avant > 0 ? 0 : tousLesJours.length - 1;
  const idx = Math.min(Math.max(base + decalage, 0), tousLesJours.length - 1);
  const j = tousLesJours[idx];
  const rel = joursEntre(isoJour, j.iso);
  const libelle =
    rel === 0
      ? "Aujourd'hui"
      : rel === 1
        ? "Demain"
        : rel === -1
          ? "Hier"
          : rel > 1
            ? `Dans ${rel} jours`
            : `Il y a ${-rel} jours`;

  const hotel = hebergements.find((h) => h.nuits.includes(j.iso));
  const billets = reservations.filter((r) => r.iso === j.iso);
  const tz = j.phase.fuseau;
  const enVoyage = avant <= 0 && apres <= 0;

  return (
    <div className="rounded-2xl bg-[var(--carte)] border-2 border-[var(--accent)] p-5 md:p-6 ombre-carte">
      {/* Bandeau : où on en est */}
      {avant > 0 && (
        <div className="mb-3 rounded-xl bg-[var(--accent-clair)] text-[var(--accent)] px-3.5 py-2 text-[14.5px] font-bold">
          ✈️ J-{avant} avant le départ · voici le programme du {avant === 1 ? "lendemain" : "premier jour"}
        </div>
      )}
      {apres > 0 && (
        <div className="mb-3 rounded-xl bg-[var(--accent-clair)] text-[var(--accent)] px-3.5 py-2 text-[14.5px] font-bold">
          🏠 Le voyage est terminé — bon retour !
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          aria-label="Jour précédent"
          disabled={idx === 0}
          onClick={() => setDecalage((d) => d - 1)}
          className="w-11 h-11 rounded-full border border-[var(--ligne)] text-xl font-bold disabled:opacity-30"
        >
          ‹
        </button>
        <div className="text-center min-w-0">
          <div className="text-[13px] font-bold uppercase tracking-wide text-[var(--accent)]">
            {libelle}
          </div>
          <div className="font-bold text-[17px] leading-tight">{j.date}</div>
          <div className="text-[13px] text-[var(--encre-douce)] truncate">{j.phase.titre}</div>
        </div>
        <button
          type="button"
          aria-label="Jour suivant"
          disabled={idx === tousLesJours.length - 1}
          onClick={() => setDecalage((d) => d + 1)}
          className="w-11 h-11 rounded-full border border-[var(--ligne)] text-xl font-bold disabled:opacity-30"
        >
          ›
        </button>
      </div>

      {enVoyage && rel === 0 && (
        <div className="mt-3 text-center text-[14px] text-[var(--encre-douce)]">
          Il est <span className="font-bold text-[var(--encre)] tabular-nums">{heure(maintenant, tz)}</span> ici
          {libelleFuseau(tz) && ` (${libelleFuseau(tz)})`} ·{" "}
          <span className="tabular-nums">{heure(maintenant, "Europe/Luxembourg")}</span> au Luxembourg
        </div>
      )}

      <h2 className="serif mt-4 text-[24px] md:text-[28px] font-semibold leading-tight text-center">
        {j.titre}
      </h2>

      {/* Horaires */}
      <ul className="mt-4 space-y-2">
        {j.horaires.map((h, i) => (
          <li key={i} className="flex gap-3 items-baseline">
            <span className="shrink-0 w-[92px] text-right font-bold tabular-nums text-[16px] text-[var(--accent)]">
              {h.h}
            </span>
            <span className="text-[16px] leading-snug">{h.quoi}</span>
          </li>
        ))}
      </ul>

      {/* Nuit */}
      <div className="mt-4 pt-3 border-t border-[var(--ligne)] flex items-start gap-2 text-[15.5px]">
        <span>🛏️</span>
        <div className="min-w-0 flex-1">
          <span className="font-semibold">Nuit : </span>
          {j.nuit}
        </div>
      </div>

      {/* Alerte */}
      {j.alerte && (
        <div className="mt-3 rounded-xl bg-[var(--nuit-fond)] border border-[var(--nuit-bord)] px-3.5 py-2.5 text-[14.5px] leading-relaxed">
          <span className="font-bold">⚠️ </span>
          {j.alerte}
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        {hotel && (
          <a
            href={mapsUrl(hotel.q)}
            target="_blank"
            rel="noreferrer"
            className="chip"
          >
            🗺️ Hôtel dans Maps
          </a>
        )}
        {billets.map((b) => (
          <a key={b.titre} href={`#billet-${b.iso}`} className="chip chip-accent">
            🎫 {b.titre.split(" — ")[0]}
          </a>
        ))}
        {j.lieux?.map((l) => (
          <a key={l.q} href={mapsUrl(l.q)} target="_blank" rel="noreferrer" className="chip">
            📍 {l.nom}
          </a>
        ))}
        <a href={`#j-${j.iso}`} className="chip">
          📖 Le récit du jour
        </a>
      </div>
    </div>
  );
}
