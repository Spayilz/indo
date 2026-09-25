"use client";

import { useCallback, useEffect, useState } from "react";
import Aujourdhui from "./Aujourdhui";
import Jours from "./Jours";
import Billets, { cleBillet } from "./Billets";
import Infos from "./Infos";
import Feuille from "./Feuille";
import Galerie, { type Capture } from "./Galerie";
import ModeNuit from "./ModeNuit";
import { JourDetail, BilletDetail, HotelDetail } from "./Details";
import { reservations, hebergements, infos } from "@/lib/plan";
import { tousLesJours, isoLocal, joursEntre, DEBUT } from "@/lib/dates";

type Onglet = "aujourdhui" | "jours" | "billets" | "documents" | "infos";

const ONGLETS: { id: Onglet; label: string; icone: string }[] = [
  { id: "aujourdhui", label: "Aujourd'hui", icone: "☀️" },
  { id: "jours", label: "Jours", icone: "📅" },
  { id: "billets", label: "Billets", icone: "🎫" },
  { id: "documents", label: "Docs", icone: "📎" },
  { id: "infos", label: "Infos", icone: "ℹ️" },
];

type Etat = { onglet: Onglet; feuille: string | null };

function lireHash(): Etat {
  const h = typeof window === "undefined" ? "" : window.location.hash.slice(1);
  if (h.startsWith("jour-")) return { onglet: "jours", feuille: h };
  if (h.startsWith("billet-")) return { onglet: "billets", feuille: h };
  if (h.startsWith("hotel-")) return { onglet: "billets", feuille: h };
  const o = ONGLETS.find((x) => x.id === h);
  return { onglet: o ? o.id : "aujourdhui", feuille: null };
}

/* Toutes les captures du carnet, réunies pour l'onglet « Docs » */
function tousLesDocuments(): Capture[] {
  const vus = new Set<string>();
  const out: Capture[] = [];
  const ajouter = (source: string, captures?: Capture[]) => {
    for (const c of captures ?? []) {
      if (vus.has(c.src)) continue;
      vus.add(c.src);
      out.push({ ...c, legende: `${source} · ${c.legende}` });
    }
  };
  for (const r of reservations) ajouter(r.titre.split(" — ")[0], r.captures);
  for (const h of hebergements) ajouter(h.ville, h.captures);
  return out;
}

export default function App({ version }: { version: string }) {
  const [etat, setEtat] = useState<Etat>({ onglet: "aujourdhui", feuille: null });
  const [isoJour, setIsoJour] = useState<string | null>(null);
  const [documents] = useState(tousLesDocuments);

  useEffect(() => {
    const maj = () => setEtat(lireHash());
    maj();
    setIsoJour(isoLocal());
    window.addEventListener("hashchange", maj);
    return () => window.removeEventListener("hashchange", maj);
  }, []);

  const naviguer = useCallback((hash: string, mode: "push" | "replace" = "replace") => {
    if (mode === "push") history.pushState(null, "", "#" + hash);
    else history.replaceState(null, "", "#" + hash);
    setEtat(lireHash());
  }, []);

  const allerOnglet = (o: Onglet) => {
    naviguer(o);
    window.scrollTo({ top: 0 });
  };
  const ouvrirJour = useCallback((iso: string) => naviguer("jour-" + iso, "push"), [naviguer]);
  const changerJour = useCallback((iso: string) => naviguer("jour-" + iso, "replace"), [naviguer]);
  const ouvrirBillet = useCallback((cle: string) => naviguer("billet-" + cle, "push"), [naviguer]);
  const ouvrirHotel = useCallback((i: number) => naviguer("hotel-" + i, "push"), [naviguer]);
  const fermer = useCallback(() => naviguer(etat.onglet), [naviguer, etat.onglet]);

  const titreOnglet = ONGLETS.find((o) => o.id === etat.onglet)?.label ?? "";
  const jAvant = isoJour ? joursEntre(isoJour, DEBUT) : null;

  // Fiche ouverte ?
  let feuille: React.ReactNode = null;
  if (etat.feuille?.startsWith("jour-")) {
    const j = tousLesJours.find((x) => x.iso === etat.feuille!.slice(5));
    if (j)
      feuille = (
        <Feuille titre={j.date} onFermer={fermer}>
          <JourDetail jour={j} onAller={changerJour} />
        </Feuille>
      );
  } else if (etat.feuille?.startsWith("billet-")) {
    const cle = etat.feuille.slice(7);
    const i = reservations.findIndex((_, k) => cleBillet(k) === cle);
    if (i >= 0)
      feuille = (
        <Feuille titre={reservations[i].titre} onFermer={fermer}>
          <BilletDetail r={reservations[i]} />
        </Feuille>
      );
  } else if (etat.feuille?.startsWith("hotel-")) {
    const h = hebergements[Number(etat.feuille.slice(6))];
    if (h)
      feuille = (
        <Feuille titre={h.nom} onFermer={fermer}>
          <HotelDetail h={h} />
        </Feuille>
      );
  }

  return (
    <>
      {/* Barre du haut */}
      <div className="barre-haut">
        <div className="mx-auto max-w-[920px] flex items-center justify-between pl-4 pr-2 min-h-[52px]">
          <div className="min-w-0">
            <div className="font-bold text-[17px] leading-tight truncate">{titreOnglet}</div>
            <div className="text-[12px] text-[var(--encre-douce)] leading-tight truncate">
              Indonésie 2026
              {jAvant !== null && jAvant > 0 && ` · J-${jAvant}`}
            </div>
          </div>
          <ModeNuit />
        </div>
      </div>

      <main
        className="mx-auto max-w-[920px] px-4 pt-3"
        style={{ paddingBottom: "calc(88px + env(safe-area-inset-bottom))" }}
      >
        <section hidden={etat.onglet !== "aujourdhui"}>
          <p className="serif text-[24px] font-semibold leading-tight mb-3">
            {infos.titre} en <span className="text-[var(--accent)]">Indonésie</span>
          </p>
          <Aujourdhui onOuvrirJour={ouvrirJour} onOuvrirBillet={ouvrirBillet} />
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <button type="button" onClick={() => allerOnglet("billets")} className="tuile">
              🎫 <span>Billets et hôtels</span>
            </button>
            <button type="button" onClick={() => allerOnglet("documents")} className="tuile">
              📎 <span>Tous les documents</span>
            </button>
            <button type="button" onClick={() => allerOnglet("infos")} className="tuile">
              🆘 <span>Urgences et contacts</span>
            </button>
            <button type="button" onClick={() => allerOnglet("jours")} className="tuile">
              📅 <span>Tout le voyage</span>
            </button>
          </div>
        </section>

        <section hidden={etat.onglet !== "jours"}>
          <Jours aujourdhui={isoJour} onOuvrir={ouvrirJour} />
        </section>

        <section hidden={etat.onglet !== "billets"}>
          <Billets onOuvrirBillet={ouvrirBillet} onOuvrirHotel={ouvrirHotel} />
        </section>

        <section hidden={etat.onglet !== "documents"}>
          <p className="text-[14.5px] text-[var(--encre-douce)] mb-1 px-1">
            {documents.length} documents — visas, cartes d'arrivée, billets, réservations. Un tap ouvre le
            document en plein écran, lisible sans réseau.
          </p>
          <div className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-3">
            <Galerie captures={documents} />
          </div>
        </section>

        <section hidden={etat.onglet !== "infos"}>
          <Infos version={version} />
        </section>
      </main>

      {/* Barre d'onglets */}
      <nav className="barre-onglets" aria-label="Sections">
        <div className="mx-auto max-w-[920px] grid grid-cols-5">
          {ONGLETS.map((o) => {
            const on = etat.onglet === o.id;
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => allerOnglet(o.id)}
                aria-current={on ? "page" : undefined}
                className={`onglet ${on ? "onglet-actif" : ""}`}
              >
                <span className="text-[22px] leading-none" aria-hidden>
                  {o.icone}
                </span>
                <span className="text-[11px] font-bold leading-none">{o.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {feuille}
    </>
  );
}
