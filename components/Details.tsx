"use client";

import Galerie from "./Galerie";
import Copier from "./Copier";
import { hebergements, type Reservation, type Hebergement } from "@/lib/plan";
import { tousLesJours, formatNuits, type JourEtendu } from "@/lib/dates";
import { mapsUrl, stylePhase, typeBadge, statutStyle } from "@/lib/ui";

export function Statut({ s }: { s: string }) {
  return (
    <span
      className={`text-[13px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
        statutStyle[s] ?? statutStyle["✅ réservé"]
      }`}
    >
      {s}
    </span>
  );
}

/* ── Une journée, en plein écran ─────────────────────────────── */
export function JourDetail({
  jour,
  onAller,
}: {
  jour: JourEtendu;
  onAller: (iso: string) => void;
}) {
  const st = stylePhase(jour.phase.titre);
  const b = typeBadge[jour.type] ?? typeBadge.route;
  const hotel = hebergements.find((h) => h.nuits.includes(jour.iso));
  const prec = tousLesJours[jour.index - 1];
  const suiv = tousLesJours[jour.index + 1];

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="font-bold text-[14px] uppercase tracking-wide" style={{ color: st.texte }}>
          {jour.date}
        </div>
        <span className="text-[13px] text-[var(--encre-douce)]">
          {b.emoji} {st.icone} {jour.phase.titre.split(" — ")[0]}
        </span>
      </div>
      <h2 className="serif mt-1.5 text-[26px] font-semibold leading-tight">{jour.titre}</h2>

      <div className="mt-4 rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4">
        <ul className="space-y-2">
          {jour.horaires.map((h, i) => (
            <li key={i} className="flex gap-3 items-baseline">
              <span className="shrink-0 w-[92px] text-right font-bold tabular-nums text-[16px] text-[var(--accent)]">
                {h.h}
              </span>
              <span className="text-[16px] leading-snug">{h.quoi}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 pt-3 border-t border-[var(--ligne)] flex items-start gap-2 text-[15.5px]">
          <span>🛏️</span>
          <div className="flex-1 min-w-0">
            <span className="font-semibold">Nuit : </span>
            {jour.nuit}
          </div>
          {hotel && hotel.statut !== "‼️ à réserver" && (
            <a
              href={mapsUrl(hotel.q)}
              target="_blank"
              rel="noreferrer"
              className="chip shrink-0"
              aria-label="Ouvrir l'hôtel dans Google Maps"
            >
              🗺️
            </a>
          )}
        </div>
      </div>

      {jour.alerte && (
        <div className="mt-3 rounded-2xl bg-[var(--nuit-fond)] border border-[var(--nuit-bord)] px-4 py-3 text-[15px] leading-relaxed">
          <span className="font-bold">⚠️ </span>
          {jour.alerte}
        </div>
      )}

      {jour.lieux && jour.lieux.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {jour.lieux.map((l) => (
            <a key={l.q} href={mapsUrl(l.q)} target="_blank" rel="noreferrer" className="chip">
              📍 {l.nom}
            </a>
          ))}
        </div>
      )}

      <div className="mt-5">
        <div className="text-[13px] font-bold uppercase tracking-wide text-[var(--encre-douce)]">
          Le récit du jour
        </div>
        <p className="mt-2 font-semibold text-[16px] leading-relaxed">{jour.resume}</p>
        <p className="mt-2 text-[16px] leading-[1.7]">{jour.details}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          disabled={!prec}
          onClick={() => prec && onAller(prec.iso)}
          className="flex-1 min-h-[48px] rounded-2xl border border-[var(--ligne)] bg-[var(--carte)] font-semibold disabled:opacity-40 text-[15px]"
        >
          ‹ {prec ? prec.date.split(" ").slice(1).join(" ") : "—"}
        </button>
        <button
          type="button"
          disabled={!suiv}
          onClick={() => suiv && onAller(suiv.iso)}
          className="flex-1 min-h-[48px] rounded-2xl border border-[var(--ligne)] bg-[var(--carte)] font-semibold disabled:opacity-40 text-[15px]"
        >
          {suiv ? suiv.date.split(" ").slice(1).join(" ") : "—"} ›
        </button>
      </div>
    </div>
  );
}

/* ── Un billet / une réservation, en plein écran ─────────────── */
export function BilletDetail({ r }: { r: Reservation }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="font-bold text-[14px] uppercase tracking-wide text-[var(--accent)]">{r.quand}</div>
        <Statut s={r.statut} />
      </div>
      <h2 className="serif mt-1.5 text-[24px] font-semibold leading-snug">{r.titre}</h2>

      <div className="mt-3 rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4">
        <div className="text-[12.5px] font-bold uppercase tracking-wide text-[var(--encre-douce)]">
          Référence
        </div>
        <div className="mt-1 text-[16px] font-semibold tracking-wide select-all break-words">{r.ref}</div>
        <div className="mt-2">
          <Copier texte={r.ref} />
        </div>
      </div>

      {r.captures && r.captures.length > 0 && (
        <div className="mt-4">
          <div className="text-[13px] font-bold uppercase tracking-wide text-[var(--encre-douce)]">
            Documents — tap pour agrandir
          </div>
          <Galerie captures={r.captures} />
        </div>
      )}

      {r.liens && r.liens.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {r.liens.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="chip">
              {l.label}
            </a>
          ))}
        </div>
      )}

      <ul className="mt-4 space-y-2.5">
        {r.infos.map((ligne, i) => (
          <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed">
            <span className="text-[var(--accent)] font-bold shrink-0">•</span>
            <span>{ligne}</span>
          </li>
        ))}
      </ul>

      {r.contact && (
        <div className="mt-4 pt-3 border-t border-[var(--ligne)] text-[14.5px] leading-relaxed text-[var(--encre-douce)]">
          <span className="font-semibold text-[var(--encre)]">Contact : </span>
          {r.contact}
        </div>
      )}
    </div>
  );
}

/* ── Un hébergement, en plein écran ──────────────────────────── */
export function HotelDetail({ h }: { h: Hebergement }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="font-bold text-[14px] uppercase tracking-wide text-[var(--accent)]">
          {formatNuits(h.nuits)} · {h.ville}
        </div>
        <Statut s={h.statut} />
      </div>
      <h2 className="serif mt-1.5 text-[24px] font-semibold leading-snug">{h.nom}</h2>
      {(h.reservePar || h.note) && (
        <p className="mt-2 text-[15.5px] leading-relaxed">
          {h.reservePar && <span>Réservé par {h.reservePar}. </span>}
          {h.note}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {h.statut !== "‼️ à réserver" && (
          <a href={mapsUrl(h.q)} target="_blank" rel="noreferrer" className="chip chip-accent">
            🗺️ Itinéraire Google Maps
          </a>
        )}
        {h.tel && (
          <a href={`tel:${h.tel}`} className="chip chip-tel">
            📞 Appeler
          </a>
        )}
        {h.ref && <Copier texte={h.ref} label={`Réf. ${h.ref}`} />}
      </div>
      {h.captures && h.captures.length > 0 && <Galerie captures={h.captures} />}
    </div>
  );
}
