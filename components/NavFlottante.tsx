"use client";

import { useEffect, useRef, useState } from "react";

type Lien = { href: string; label: string };

export default function NavFlottante({ liens }: { liens: Lien[] }) {
  const [actif, setActif] = useState<string>(liens[0]?.href.slice(1) ?? "");
  const barreRef = useRef<HTMLDivElement>(null);

  // Surligne la section visible pendant le défilement (scroll-spy)
  useEffect(() => {
    const ids = liens.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const obs = new IntersectionObserver(
      (entries) => {
        const visibles = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visibles[0]) setActif(visibles[0].target.id);
      },
      { rootMargin: "-68px 0px -72% 0px", threshold: 0 },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
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
      <div
        ref={barreRef}
        className="mx-auto max-w-[920px] px-4 md:px-8 py-2.5 flex gap-1.5 overflow-x-auto scrollbar-hide"
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
              className={`shrink-0 px-3.5 py-2 rounded-full text-[14px] font-semibold transition-colors ${
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
    </nav>
  );
}
