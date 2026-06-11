"use client";

import dynamic from "next/dynamic";

const CarteClient = dynamic(() => import("./CarteClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-sm text-[var(--encre-douce)]">
      Chargement de la carte…
    </div>
  ),
});

export default function Carte() {
  return <CarteClient />;
}
