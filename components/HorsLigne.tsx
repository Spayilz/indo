"use client";

import { useEffect, useState } from "react";

type Etat = "inconnu" | "preparation" | "pret" | "hors-ligne" | "erreur";
const CLE_CACHE = "indo-cache-date";

function formatDate(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

/* Enregistre le service worker, déclenche le préchargement du carnet
 * et affiche une pastille : « prêt hors ligne » / « hors ligne ». */
export default function HorsLigne() {
  const [etat, setEtat] = useState<Etat>("inconnu");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    const surHorsLigne = () => {
      setEtat("hors-ligne");
      setVisible(true);
    };
    const surEnLigne = () => {
      setVisible(false);
      setEtat("inconnu");
    };
    window.addEventListener("online", surEnLigne);
    window.addEventListener("offline", surHorsLigne);
    if (!navigator.onLine) surHorsLigne();

    const surMessage = (e: MessageEvent) => {
      if (e.data === "precache-ok") {
        try {
          localStorage.setItem(CLE_CACHE, new Date().toISOString());
        } catch {}
        window.dispatchEvent(new Event("carnet-cache"));
        setEtat("pret");
        setVisible(true);
        setTimeout(() => setVisible(false), 4000);
      } else if (e.data === "precache-ko") {
        setEtat("erreur");
        setVisible(true);
      }
    };
    navigator.serviceWorker.addEventListener("message", surMessage);

    navigator.serviceWorker
      .register("/sw.js")
      .then(async (reg) => {
        await navigator.serviceWorker.ready;
        if (navigator.onLine) {
          (reg.active ?? reg.waiting ?? reg.installing)?.postMessage("precache");
        }
      })
      .catch(() => {});

    return () => {
      navigator.serviceWorker.removeEventListener("message", surMessage);
      window.removeEventListener("offline", surHorsLigne);
      window.removeEventListener("online", surEnLigne);
    };
  }, []);

  if (!visible) return null;

  const libelle: Record<Etat, string> = {
    inconnu: "",
    preparation: "Préparation du mode hors ligne…",
    pret: "✓ Carnet disponible hors ligne",
    "hors-ligne": "📴 Hors ligne — version en cache",
    erreur: "Préchargement incomplet — rouvrir la page avec du réseau",
  };

  return (
    <div
      role="status"
      onClick={() => setVisible(false)}
      className="fixed left-1/2 -translate-x-1/2 z-50 px-4 min-h-[40px] flex items-center rounded-full text-[14px] font-semibold shadow-lg"
      style={{
        bottom: "calc(76px + env(safe-area-inset-bottom))",
        background: etat === "hors-ligne" || etat === "erreur" ? "#3f3a34" : "#1f7a4b",
        color: "white",
      }}
    >
      {libelle[etat]}
    </div>
  );
}

/* Pied de page : version du carnet, date de mise en cache, bouton rafraîchir. */
export function VersionCarnet({ version }: { version: string }) {
  const [cache, setCache] = useState<string | null>(null);
  const [enCours, setEnCours] = useState(false);

  useEffect(() => {
    const lire = () => {
      try {
        setCache(localStorage.getItem(CLE_CACHE));
      } catch {}
    };
    lire();
    window.addEventListener("carnet-cache", lire);
    return () => window.removeEventListener("carnet-cache", lire);
  }, []);

  const rafraichir = async () => {
    setEnCours(true);
    try {
      const reg = await navigator.serviceWorker?.getRegistration();
      if (reg) {
        await reg.update();
        (reg.active ?? reg.waiting)?.postMessage("precache");
        const attente = new Promise<void>((res) => {
          const h = (e: MessageEvent) => {
            if (e.data === "precache-ok" || e.data === "precache-ko") {
              navigator.serviceWorker.removeEventListener("message", h);
              res();
            }
          };
          navigator.serviceWorker.addEventListener("message", h);
          setTimeout(res, 20000);
        });
        await attente;
      }
    } catch {}
    window.location.reload();
  };

  return (
    <div className="mt-3 text-[13px] text-[var(--encre-douce)] flex flex-col items-center gap-2">
      <div>
        Version du carnet : {formatDate(version) ?? version}
        {cache && ` · en cache sur ce téléphone depuis le ${formatDate(cache)}`}
      </div>
      <button
        type="button"
        onClick={rafraichir}
        disabled={enCours}
        className="min-h-[40px] px-4 rounded-full border border-[var(--ligne)] font-semibold text-[var(--accent)] disabled:opacity-50"
      >
        {enCours ? "Mise à jour…" : "↻ Rafraîchir le carnet (avec du réseau)"}
      </button>
    </div>
  );
}
