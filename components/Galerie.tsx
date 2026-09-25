"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type Capture = { src: string; legende: string; pour?: string };

/* Vignettes des captures d'écran d'un billet ; au toucher, l'image
 * s'ouvre en plein écran, pleine largeur, avec pincement pour zoomer
 * (assez grand pour scanner un QR code). */
export default function Galerie({ captures }: { captures: Capture[] }) {
  const [ouverte, setOuverte] = useState<number | null>(null);

  useEffect(() => {
    if (ouverte === null) return;
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuverte(null);
      if (e.key === "ArrowRight") setOuverte((i) => (i === null ? i : (i + 1) % captures.length));
      if (e.key === "ArrowLeft")
        setOuverte((i) => (i === null ? i : (i - 1 + captures.length) % captures.length));
    };
    window.addEventListener("keydown", surTouche);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", surTouche);
      document.body.style.overflow = "";
    };
  }, [ouverte, captures.length]);

  return (
    <>
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2.5">
        {captures.map((c, i) => (
          <button
            key={c.src}
            type="button"
            onClick={() => setOuverte(i)}
            className="text-left group relative"
            aria-label={`Ouvrir : ${c.legende}`}
          >
            <img
              src={c.src}
              alt={c.legende}
              loading="lazy"
              className="w-full aspect-[9/16] object-cover object-top rounded-xl border border-[var(--ligne)] bg-white group-hover:opacity-90"
            />
            {c.pour && (
              <span className="absolute top-1.5 left-1.5 text-[12px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent)] text-white">
                {c.pour}
              </span>
            )}
            <div className="mt-1 text-[13px] leading-snug text-[var(--encre-douce)]">
              {c.legende}
            </div>
          </button>
        ))}
      </div>

      {/* Rendu dans <body> par un portail : les fiches ont un rendu différé
          (content-visibility) qui confinerait sinon la visionneuse à la fiche. */}
      {ouverte !== null &&
        typeof document !== "undefined" &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
        >
          <div
            className="flex items-center justify-between px-4 text-white text-[14px]"
            style={{ paddingTop: "calc(8px + env(safe-area-inset-top))", paddingBottom: 8 }}
          >
            <span className="font-semibold truncate pr-3">
              {captures[ouverte].pour && (
                <span className="mr-2 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent)]">
                  {captures[ouverte].pour}
                </span>
              )}
              {captures[ouverte].legende}
              {captures.length > 1 && (
                <span className="opacity-70 font-normal">
                  {" "}· {ouverte + 1}/{captures.length}
                </span>
              )}
            </span>
            <button
              type="button"
              className="shrink-0 min-h-[44px] px-4 rounded-full bg-white/15 font-semibold"
              onClick={() => setOuverte(null)}
            >
              Fermer ✕
            </button>
          </div>
          <div
            className="flex-1 overflow-auto px-1"
            style={{ touchAction: "pinch-zoom", WebkitOverflowScrolling: "touch" }}
          >
            <img
              src={captures[ouverte].src}
              alt={captures[ouverte].legende}
              className="mx-auto w-full max-w-[820px] rounded-lg bg-white"
            />
          </div>
          {captures.length > 1 && (
            <div
              className="flex justify-center gap-3 pt-3 text-white text-[14px]"
              style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
            >
              <button
                type="button"
                className="min-h-[44px] px-4 rounded-full bg-white/15 font-semibold"
                onClick={() => setOuverte((ouverte - 1 + captures.length) % captures.length)}
              >
                ‹ Précédente
              </button>
              <button
                type="button"
                className="min-h-[44px] px-4 rounded-full bg-white/15 font-semibold"
                onClick={() => setOuverte((ouverte + 1) % captures.length)}
              >
                Suivante ›
              </button>
            </div>
          )}
        </div>,
        document.body,
        )}
    </>
  );
}
