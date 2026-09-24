"use client";

import { useEffect, useRef, useState } from "react";
import ModeNuit from "./ModeNuit";

type Lien = { href: string; label: string };

export default function NavFlottante({ liens }: { liens: Lien[] }) {
  const [actif, setActif] = useState<string>(liens[0]?.href.slice(1) ?? "");
  const barreRef = useRef<HTMLDivElement>(null);

  // Scroll-spy : la dernière section dont le haut est passé sous la barre
  useEffect(() => {
    const ids = liens.map((l) => l.href.slice(1));
    let demande = 0;
    const calc = () => {
      demande = 0;
      let courant = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 90) courant = id;
      }
      setActif(courant);
    };
    const surScroll = () => {
      if (!demande) demande = requestAnimationFrame(calc);
    };
    window.addEventListener("scroll", surScroll, { passive: true });
    calc();
    return () => {
      window.removeEventListener("scroll", surScroll);
      if (demande) cancelAnimationFrame(demande);
    };
  }, [liens]);

  // Garde la pastille active visible dans la barre scrollable (mobile)
  useEffect(() => {
    const barre = barreRef.current;
    if (!barre) return;
    const lien = barre.querySelector<HTMLElement>(`a[data-id="${actif}"]`);
    if (!lien) return;
    const debord =
      lien.offsetLeft - barre.scrollLeft - barre.clientWidth / 2 + lien.clientWidth / 2;
    barre.scrollBy({ left: debord, behavior: "smooth" });
  }, [actif]);

  return (
    <nav className="nav-flottante">
      <div className="mx-auto max-w-[920px] pl-3 md:pl-8 pr-2 flex items-center gap-1">
        <div
          ref={barreRef}
          className="flex-1 py-1.5 flex gap-1 overflow-x-auto scrollbar-hide nav-masque"
        >
          {liens.map((l) => {
            const id = l.href.slice(1);
            const on = actif === id;
            return (
              <a
                key={l.href}
                href={l.href}
                data-id={id}
                aria-current={on ? "location" : undefined}
                className={`shrink-0 min-h-[44px] px-3.5 rounded-full text-[14px] font-semibold flex items-center transition-colors ${
                  on
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--encre-douce)] hover:bg-[var(--accent-clair)] hover:text-[var(--accent)]"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
        <ModeNuit />
      </div>
    </nav>
  );
}
