"use client";

import Carte from "./Carte";
import { VersionCarnet } from "./HorsLigne";
import {
  croisiere,
  contacts,
  urgences,
  especes,
  TAUX_IDR,
  fuseaux,
  mots,
  rituelDuSoir,
  aSavoir,
  etapesCarte,
} from "@/lib/plan";
import { mapsUrl, idr, euros } from "@/lib/ui";

function Accordeon({
  titre,
  icone,
  ouvert,
  children,
}: {
  titre: string;
  icone: string;
  ouvert?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details className="accordeon groupe bg-[var(--carte)]" open={ouvert}>
      <summary>
        <span className="text-[20px]" aria-hidden>
          {icone}
        </span>
        <span className="text-[16px]">{titre}</span>
      </summary>
      <div className="px-4 pb-4 pt-1 border-t border-[var(--ligne)]">{children}</div>
    </details>
  );
}

const Puce = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-[15px] leading-relaxed">
    <span className="text-[var(--accent)] font-bold shrink-0">•</span>
    <span>{children}</span>
  </li>
);

/* Onglet « Infos » : urgences, contacts, espèces, croisière, heure, mots, carte. */
export default function Infos({ version }: { version: string }) {
  const totalEspeces = especes.reduce((a, e) => a + e.montant, 0);
  return (
    <div className="space-y-3">
      <Accordeon titre="Urgences et contacts" icone="🆘" ouvert>
        <div className="mt-2 flex flex-wrap gap-2">
          {urgences.map((u) => (
            <a
              key={u.tel}
              href={`tel:${u.tel}`}
              className="chip chip-tel"
              style={{ whiteSpace: "normal", maxWidth: "100%" }}
              title={u.note}
            >
              📞 {u.nom} · {u.tel.replace(/^\+62(\d{2})(\d{4})(\d{4})$/, "+62 $1 $2 $3")}
            </a>
          ))}
        </div>
        {urgences
          .filter((u) => u.note)
          .map((u) => (
            <div key={u.tel} className="mt-2 text-[13.5px] text-[var(--encre-douce)]">
              {u.nom} : {u.note}
            </div>
          ))}
        <div className="mt-4 space-y-3">
          {contacts.map((c) => (
            <div key={c.nom} className="pt-3 border-t border-[var(--ligne)]">
              <div className="font-bold text-[15.5px]">{c.nom}</div>
              <div className="text-[14px] text-[var(--encre-douce)]">{c.role}</div>
              {c.note && <div className="mt-0.5 text-[13.5px] text-[var(--encre-douce)]">{c.note}</div>}
              {(c.whatsapp || c.tel || c.email) && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.whatsapp && (
                    <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer" className="chip chip-tel">
                      💬 WhatsApp
                    </a>
                  )}
                  {c.tel && (
                    <a href={`tel:${c.tel}`} className="chip">
                      📞 Appeler
                    </a>
                  )}
                  {c.email && (
                    <a href={`mailto:${c.email}`} className="chip">
                      ✉️ Mail
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Accordeon>

      <Accordeon titre="Espèces à prévoir" icone="💵">
        <p className="mt-1 text-[13.5px] text-[var(--encre-douce)]">
          1 € ≈ {idr(TAUX_IDR)} IDR. Montants estimés, à arrondir au retrait.
        </p>
        <div className="mt-2 divide-y divide-[var(--ligne)]">
          {especes.map((e, i) => (
            <div key={i} className="py-3">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-bold text-[15px]">{e.quand}</div>
                <div className="shrink-0 text-right">
                  <div className="font-bold tabular-nums text-[var(--accent)] whitespace-nowrap">
                    ≈ {idr(e.montant)} IDR
                  </div>
                  <div className="text-[13px] text-[var(--encre-douce)] tabular-nums">≈ {euros(e.montant)} €</div>
                </div>
              </div>
              <div className="mt-1 text-[14.5px] leading-relaxed">{e.pour}</div>
              {e.note && <div className="mt-1 text-[13.5px] text-[var(--encre-douce)]">{e.note}</div>}
            </div>
          ))}
          <div className="py-3 flex items-baseline justify-between gap-3">
            <div className="font-bold">Total en liquide</div>
            <div className="text-right tabular-nums shrink-0">
              <div className="font-bold text-[var(--accent)] whitespace-nowrap">≈ {idr(totalEspeces)} IDR</div>
              <div className="text-[13px] text-[var(--encre-douce)]">≈ {euros(totalEspeces)} €</div>
            </div>
          </div>
        </div>
      </Accordeon>

      <Accordeon titre="La croisière à Komodo" icone="⛵">
        <p className="mt-1 text-[14.5px] leading-relaxed text-[var(--encre-douce)]">{croisiere.cadre}</p>
        <dl className="mt-3 divide-y divide-[var(--ligne)] text-[15px]">
          {croisiere.fiche.map(([k, v]) => (
            <div key={k} className="py-2">
              <dt className="text-[12.5px] font-bold uppercase tracking-wide text-[var(--encre-douce)]">{k}</dt>
              <dd className="mt-0.5">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-3 flex flex-wrap gap-2">
          {croisiere.liens.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="chip">
              {l.label}
            </a>
          ))}
        </div>
        <div className="mt-4 font-bold">Le programme</div>
        <ul className="mt-2 space-y-2">
          {croisiere.programme.map((p, i) => (
            <Puce key={i}>{p}</Puce>
          ))}
        </ul>
        <div className="mt-4 font-bold">🎒 Dans le petit sac</div>
        <ul className="mt-2 space-y-2">
          {croisiere.aPrendre.map((p, i) => (
            <Puce key={i}>{p}</Puce>
          ))}
        </ul>
        <div className="mt-4 font-bold">📋 À confirmer avec Travass</div>
        <ul className="mt-2 space-y-2">
          {croisiere.aConfirmer.map((p, i) => (
            <Puce key={i}>{p}</Puce>
          ))}
        </ul>
      </Accordeon>

      <Accordeon titre="Heure locale et quelques mots" icone="🕒">
        <ul className="mt-2 space-y-2 text-[14.5px]">
          {fuseaux.map((f) => (
            <li key={f.tz}>
              <div className="font-semibold">{f.zone}</div>
              <div className="text-[var(--encre-douce)]">{f.libelle}</div>
            </li>
          ))}
        </ul>
        <div className="mt-2 text-[13.5px] text-[var(--encre-douce)]">
          Les montres avancent d'une heure sur le ferry du 7 octobre. Le téléphone se règle seul.
        </div>
        <dl className="mt-4 grid grid-cols-[1fr_1fr] gap-x-3 gap-y-1.5 text-[14.5px] pt-3 border-t border-[var(--ligne)]">
          {mots.map(([id, fr]) => (
            <div key={id} className="contents">
              <dt className="font-semibold">{id}</dt>
              <dd className="text-[var(--encre-douce)]">{fr}</dd>
            </div>
          ))}
        </dl>
      </Accordeon>

      <Accordeon titre="Rituel du soir et bon à savoir" icone="🌙">
        <ul className="mt-2 space-y-2">
          {rituelDuSoir.map((r, i) => (
            <Puce key={i}>{r}</Puce>
          ))}
        </ul>
        <ul className="mt-3 pt-3 border-t border-[var(--ligne)] space-y-2">
          {aSavoir.map((r, i) => (
            <Puce key={i}>{r}</Puce>
          ))}
        </ul>
      </Accordeon>

      <Accordeon titre="La carte du voyage" icone="🗺️">
        <div className="mt-2 h-[300px] md:h-[440px] rounded-2xl overflow-hidden border border-[var(--ligne)]">
          <Carte />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {etapesCarte.map((e) => (
            <a
              key={e.id}
              href={mapsUrl(`${e.coords[0]},${e.coords[1]}`)}
              target="_blank"
              rel="noreferrer"
              className="chip"
            >
              📍 {e.nom}
            </a>
          ))}
        </div>
        <p className="mt-3 text-[13.5px] text-[var(--encre-douce)]">
          Pour naviguer vraiment : Google Maps, avec les zones hors ligne téléchargées avant le départ.
        </p>
      </Accordeon>

      <footer className="pt-6 pb-2 text-center text-[14px] text-[var(--encre-douce)]">
        <div className="serif text-2xl text-[var(--accent)] mb-1">Bon voyage ✺</div>
        Indonésie 2026 · du 26 septembre au 18 octobre
        <VersionCarnet version={version} />
      </footer>
    </div>
  );
}
