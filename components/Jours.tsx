"use client";

import { phases } from "@/lib/plan";
import { badgeDate, stylePhase, typeBadge } from "@/lib/ui";

/* Onglet « Jours » : une ligne par journée, groupées par étape. */
export default function Jours({
  aujourdhui,
  onOuvrir,
}: {
  aujourdhui: string | null;
  onOuvrir: (iso: string) => void;
}) {
  return (
    <div className="space-y-6">
      {phases.map((phase) => {
        const st = stylePhase(phase.titre);
        return (
          <section key={phase.titre}>
            <div className="flex items-center gap-2.5 px-1 mb-2">
              <span className="text-[20px]">{st.icone}</span>
              <div>
                <div className="serif text-[19px] font-semibold leading-tight" style={{ color: st.texte }}>
                  {phase.titre}
                </div>
                <div className="text-[13px] font-semibold text-[var(--encre-douce)]">{phase.detail}</div>
              </div>
            </div>
            <div className="groupe">
              {phase.jours.map((j) => {
                const d = badgeDate(j.iso);
                const b = typeBadge[j.type] ?? typeBadge.route;
                const actuel = j.iso === aujourdhui;
                const premier = j.horaires[0];
                return (
                  <button
                    key={j.iso}
                    type="button"
                    onClick={() => onOuvrir(j.iso)}
                    className={`rangee ${actuel ? "rangee-actuelle" : ""}`}
                    style={{ ["--couleur-phase" as string]: st.couleur }}
                  >
                    <div className="badge-date">
                      <div className="text-[11px] font-bold tracking-wide opacity-80">{d.jour}</div>
                      <div className="text-[22px] font-bold leading-none">{d.num}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[15.5px] leading-snug line-clamp-2">
                        {actuel && <span className="text-[var(--accent)]">Aujourd'hui · </span>}
                        {j.titre}
                      </div>
                      {premier && (
                        <div className="mt-0.5 text-[13.5px] text-[var(--encre-douce)] truncate">
                          <span className="font-semibold tabular-nums">{premier.h}</span> · {premier.quoi}
                        </div>
                      )}
                    </div>
                    <span className="text-[15px]" aria-hidden>
                      {b.emoji}
                    </span>
                    <span className="text-[22px] text-[var(--encre-douce)] leading-none" aria-hidden>
                      ›
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
