"use client";

import { useEffect, useState } from "react";
import { avantDepart } from "@/lib/plan";
import { isoLocal, DEBUT } from "@/lib/dates";

const CLE = "indo-avant-depart";

/* Liste cochable des choses à faire avant le départ.
 * Disparaît d'elle-même à partir du jour du départ. */
export default function AvantDepart() {
  const [faits, setFaits] = useState<Record<number, boolean>>({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isoLocal() < DEBUT);
    try {
      const v = localStorage.getItem(CLE);
      if (v) setFaits(JSON.parse(v));
    } catch {}
  }, []);

  if (!visible) return null;

  const basculer = (i: number) => {
    const n = { ...faits, [i]: !faits[i] };
    setFaits(n);
    try {
      localStorage.setItem(CLE, JSON.stringify(n));
    } catch {}
  };
  const restants = avantDepart.filter((_, i) => !faits[i]).length;

  return (
    <section id="avant-depart" className="mt-8 scroll-mt-[68px]">
      <div className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-5 md:p-6 ombre-douce">
        <div className="flex items-center justify-between gap-3">
          <h2 className="serif text-[22px] font-semibold">Avant de partir</h2>
          <span className="text-[13px] font-bold px-2.5 py-1 rounded-full bg-[var(--attention-fond)] text-[var(--attention-texte)]">
            {restants === 0 ? "Tout est fait ✓" : `${restants} à faire`}
          </span>
        </div>
        <ul className="mt-3 divide-y divide-[var(--ligne)]">
          {avantDepart.map((t, i) => (
            <li key={i}>
              <label className="flex gap-3 items-start py-2.5 cursor-pointer min-h-[44px]">
                <input
                  type="checkbox"
                  checked={!!faits[i]}
                  onChange={() => basculer(i)}
                  className="mt-1 w-5 h-5 shrink-0 accent-[var(--accent)]"
                />
                <span
                  className={`text-[15px] leading-relaxed ${
                    faits[i] ? "line-through text-[var(--encre-douce)]" : ""
                  }`}
                >
                  {t}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
