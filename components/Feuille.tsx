"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

/* Fiche plein écran (portail dans <body>) avec bouton Retour.
 * Le bouton « précédent » du téléphone la ferme aussi (géré par le routeur). */
export default function Feuille({
  titre,
  onFermer,
  children,
}: {
  titre: string;
  onFermer: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("feuille-ouverte");
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFermer();
    };
    window.addEventListener("keydown", surTouche);
    return () => {
      document.body.classList.remove("feuille-ouverte");
      window.removeEventListener("keydown", surTouche);
    };
  }, [onFermer]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[90] bg-[var(--fond)] overflow-y-auto overscroll-contain"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="barre-haut">
        <div className="mx-auto max-w-[920px] flex items-center gap-1 pr-3">
          <button
            type="button"
            onClick={onFermer}
            className="shrink-0 min-h-[52px] pl-3 pr-4 flex items-center gap-1 text-[16px] font-semibold text-[var(--accent)]"
          >
            <span className="text-[22px] leading-none">‹</span> Retour
          </button>
          <div className="flex-1 min-w-0 text-[15px] font-bold truncate">{titre}</div>
        </div>
      </div>
      <div
        className="mx-auto max-w-[920px] px-4 pt-4"
        style={{ paddingBottom: "calc(32px + env(safe-area-inset-bottom))" }}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
