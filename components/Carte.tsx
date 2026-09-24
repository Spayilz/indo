"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const CarteClient = dynamic(() => import("./CarteClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-sm text-[var(--encre-douce)]">
      Chargement de la carte…
    </div>
  ),
});

/* La carte (et sa bibliothèque) ne se chargent que lorsqu'on s'en approche :
 * la page s'ouvre plus vite sur une connexion lente. */
export default function Carte() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {visible ? (
        <CarteClient />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sm text-[var(--encre-douce)]">
          Carte
        </div>
      )}
    </div>
  );
}
