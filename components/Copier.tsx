"use client";

import { useState } from "react";

/* Bouton « Copier » pour une référence (code de réservation, numéro). */
export default function Copier({ texte, label = "Copier" }: { texte: string; label?: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(texte);
          setOk(true);
          setTimeout(() => setOk(false), 1500);
        } catch {}
      }}
      className="inline-flex items-center gap-1 min-h-[36px] px-3 rounded-lg border border-[var(--ligne)] bg-[var(--carte)] text-[13.5px] font-semibold text-[var(--accent)]"
    >
      {ok ? "Copié ✓" : `⧉ ${label}`}
    </button>
  );
}
