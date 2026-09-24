"use client";

import { useEffect, useState } from "react";

type Etat = "inconnu" | "preparation" | "pret" | "hors-ligne" | "erreur";

/* Enregistre le service worker, déclenche le préchargement du carnet
 * et affiche une petite pastille : « prêt hors ligne » / « hors ligne ». */
export default function HorsLigne() {
  const [etat, setEtat] = useState<Etat>("inconnu");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    const majReseau = () => {
      if (!navigator.onLine) {
        setEtat("hors-ligne");
        setVisible(true);
      }
    };
    window.addEventListener("online", () => {
      setVisible(false);
      setEtat("inconnu");
    });
    window.addEventListener("offline", majReseau);
    majReseau();

    const surMessage = (e: MessageEvent) => {
      if (e.data === "precache-ok") {
        setEtat("pret");
        setVisible(true);
        setTimeout(() => setVisible(false), 4000);
      } else if (e.data === "precache-ko") {
        setEtat("erreur");
        setVisible(true);
        setTimeout(() => setVisible(false), 6000);
      }
    };
    navigator.serviceWorker.addEventListener("message", surMessage);

    navigator.serviceWorker
      .register("/sw.js")
      .then(async (reg) => {
        await navigator.serviceWorker.ready;
        if (navigator.onLine) {
          setEtat("preparation");
          (reg.active ?? reg.waiting ?? reg.installing)?.postMessage("precache");
        }
      })
      .catch(() => {});

    return () => {
      navigator.serviceWorker.removeEventListener("message", surMessage);
      window.removeEventListener("offline", majReseau);
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
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full text-[13.5px] font-semibold shadow-lg"
      style={{
        background: etat === "hors-ligne" || etat === "erreur" ? "#3f3a34" : "#1f7a4b",
        color: "white",
      }}
    >
      {libelle[etat]}
    </div>
  );
}
