"use client";

import { useEffect, useState } from "react";

const CLE = "indo-theme";

/* Bouton lune / soleil : force le thème sombre ou clair
 * (par défaut, suit le réglage du téléphone). */
export default function ModeNuit() {
  const [sombre, setSombre] = useState<boolean | null>(null);

  useEffect(() => {
    const lire = () =>
      document.documentElement.dataset.theme === "dark" ||
      (!document.documentElement.dataset.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setSombre(lire());
  }, []);

  const basculer = () => {
    const prochain = !sombre;
    document.documentElement.dataset.theme = prochain ? "dark" : "light";
    try {
      localStorage.setItem(CLE, prochain ? "dark" : "light");
    } catch {}
    setSombre(prochain);
  };

  return (
    <button
      type="button"
      onClick={basculer}
      aria-label={sombre ? "Passer en mode clair" : "Passer en mode nuit"}
      title={sombre ? "Mode clair" : "Mode nuit"}
      className="shrink-0 w-11 h-11 rounded-full text-[18px] flex items-center justify-center hover:bg-[var(--accent-clair)]"
    >
      {sombre === null ? "◐" : sombre ? "☀️" : "🌙"}
    </button>
  );
}
