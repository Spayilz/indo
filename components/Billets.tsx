"use client";

import { reservations, hebergements, volsAller, volsRetour, volsInterieurs } from "@/lib/plan";
import { plageNuits } from "@/lib/dates";
import { Statut } from "./Details";

export const cleBillet = (i: number) => reservations[i].iso ?? `i${i}`;

/* Onglet « Billets » : billets, hôtels et vols en lignes compactes. */
export default function Billets({
  onOuvrirBillet,
  onOuvrirHotel,
}: {
  onOuvrirBillet: (cle: string) => void;
  onOuvrirHotel: (index: number) => void;
}) {
  return (
    <div className="space-y-7">
      <section>
        <h2 className="serif text-[22px] font-semibold px-1 mb-2">Billets et réservations</h2>
        <div className="groupe">
          {reservations.map((r, i) => (
            <button key={i} type="button" onClick={() => onOuvrirBillet(cleBillet(i))} className="rangee">
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-bold uppercase tracking-wide text-[var(--accent)]">
                  {r.quand}
                </div>
                <div className="font-bold text-[15.5px] leading-snug line-clamp-2">{r.titre}</div>
                <div className="mt-1 flex items-center gap-2 flex-wrap">
                  <Statut s={r.statut} />
                  {r.captures && r.captures.length > 0 && (
                    <span className="text-[12.5px] text-[var(--encre-douce)]">
                      📎 {r.captures.length} doc{r.captures.length > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[22px] text-[var(--encre-douce)] leading-none" aria-hidden>
                ›
              </span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="serif text-[22px] font-semibold px-1 mb-1">Les hôtels, nuit par nuit</h2>
        <p className="px-1 mb-2 text-[13.5px] text-[var(--encre-douce)]">
          À montrer au chauffeur. Un tap : adresse, itinéraire, notes.
        </p>
        <div className="groupe">
          {hebergements.map((h, i) => (
            <button key={i} type="button" onClick={() => onOuvrirHotel(i)} className="rangee">
              <div className="badge-date">
                <div className="text-[11px] font-bold tracking-wide opacity-80">{h.nuits.length > 1 ? "NUITS" : "NUIT"}</div>
                <div className="text-[17px] font-bold leading-tight tabular-nums">{plageNuits(h.nuits)}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[15.5px] leading-snug line-clamp-2">{h.nom}</div>
                <div className="mt-1 flex items-center gap-2 flex-wrap">
                  <span className="text-[13px] text-[var(--encre-douce)]">{h.ville}</span>
                  <Statut s={h.statut} />
                </div>
              </div>
              <span className="text-[22px] text-[var(--encre-douce)] leading-none" aria-hidden>
                ›
              </span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="serif text-[22px] font-semibold px-1 mb-2">Les vols</h2>
        <div className="space-y-3">
          {[
            { titre: "Aller — samedi 26 septembre", segs: volsAller },
            { titre: "Vols intérieurs — tous réservés", segs: volsInterieurs },
            { titre: "Retour — samedi 17 octobre", segs: volsRetour },
          ].map((bloc) => (
            <div key={bloc.titre} className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4">
              <div className="font-bold text-[15.5px] flex items-center gap-2">
                <span>✈️</span> {bloc.titre}
              </div>
              <ul className="mt-3 space-y-3">
                {bloc.segs.map((s, i) => (
                  <li key={i} className="pl-3 border-l-2" style={{ borderColor: "var(--accent-clair)" }}>
                    <div className="font-semibold text-[15px]">{s.trajet}</div>
                    <div className="text-[14px] text-[var(--encre-douce)] tabular-nums">{s.horaire}</div>
                    <div className="text-[13.5px] text-[var(--encre-douce)]">{s.compagnie}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
