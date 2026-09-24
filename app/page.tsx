import Carte from "@/components/Carte";
import NavFlottante from "@/components/NavFlottante";
import Galerie from "@/components/Galerie";
import Aujourdhui from "@/components/Aujourdhui";
import AvantDepart from "@/components/AvantDepart";
import Copier from "@/components/Copier";
import { VersionCarnet } from "@/components/HorsLigne";
import {
  infos,
  volsAller,
  volsRetour,
  volsInterieurs,
  reservations,
  hebergements,
  phases,
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
import { formatNuits } from "@/lib/dates";

const mapsUrl = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const idr = (n: number) => n.toLocaleString("fr-FR").replace(/ /g, " ");
const euros = (n: number) => Math.round(n / TAUX_IDR).toLocaleString("fr-FR");

/* Badge par type de journée */
const typeBadge: Record<string, { emoji: string; label: string }> = {
  vol: { emoji: "✈️", label: "Avion" },
  route: { emoji: "🚗", label: "Route" },
  aventure: { emoji: "🌋", label: "Aventure" },
  repos: { emoji: "🌴", label: "Détente" },
  bateau: { emoji: "⛵", label: "Bateau" },
};

/* Couleur (trait) + couleur texte + icône par phase */
const phaseStyle: Record<string, { couleur: string; texte: string; icone: string }> = {
  "Le départ": { couleur: "var(--depart)", texte: "var(--depart-texte)", icone: "🛫" },
  "Sumatra — les orangs-outans": { couleur: "var(--sumatra)", texte: "var(--sumatra)", icone: "🦧" },
  "Java — temples et volcans": { couleur: "var(--java)", texte: "var(--java)", icone: "🌋" },
  "Bali — le nord, puis Canggu": { couleur: "var(--bali)", texte: "var(--bali-texte)", icone: "🏝️" },
  "Komodo — la croisière": { couleur: "var(--komodo)", texte: "var(--komodo)", icone: "🐉" },
  "Bali — le final à Canggu": { couleur: "var(--bali)", texte: "var(--bali-texte)", icone: "🌅" },
  "Le retour": { couleur: "var(--depart)", texte: "var(--depart-texte)", icone: "🛬" },
};

const statutStyle: Record<string, string> = {
  "✅ payé": "bg-[var(--ok-fond)] text-[var(--ok-texte)]",
  "✅ réservé": "bg-[var(--info-fond)] text-[var(--info-texte)]",
  "🤝 collaboration": "bg-[var(--info-fond)] text-[var(--info-texte)]",
  "💵 solde sur place": "bg-[var(--attention-fond)] text-[var(--attention-texte)]",
  "‼️ à faire": "bg-[var(--alerte-fond)] text-[var(--alerte-texte)]",
  "‼️ à réserver": "bg-[var(--alerte-fond)] text-[var(--alerte-texte)]",
};

const navLiens = [
  { href: "#aujourdhui", label: "Aujourd'hui" },
  { href: "#itineraire", label: "Jours" },
  { href: "#billets", label: "Billets" },
  { href: "#croisiere", label: "Croisière" },
  { href: "#pratique", label: "Pratique" },
  { href: "#carte", label: "Carte" },
];

function NumSection({
  id,
  num,
  titre,
  intro,
  children,
}: {
  id: string;
  num: string;
  titre: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-14 md:mt-20 scroll-mt-[72px]">
      <div className="flex items-center gap-3">
        <span className="serif text-[var(--accent)] text-2xl font-semibold">{num}</span>
        <span className="h-px flex-1 bg-[var(--ligne)]" />
      </div>
      <h2 className="serif mt-2 text-[26px] md:text-[38px] font-semibold leading-tight">
        {titre}
      </h2>
      {intro && (
        <p className="mt-2 text-[15.5px] md:text-[17px] text-[var(--encre-douce)] max-w-2xl">
          {intro}
        </p>
      )}
      <div className="mt-5 md:mt-7">{children}</div>
    </section>
  );
}

function Statut({ s }: { s: string }) {
  return (
    <span
      className={`text-[13px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
        statutStyle[s] ?? statutStyle["✅ réservé"]
      }`}
    >
      {s}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <NavFlottante liens={navLiens} />

      <main className="mx-auto max-w-[920px] px-4 md:px-8 pb-24">
        {/* ════════ EN-TÊTE COMPACT + AUJOURD'HUI ════════ */}
        <header id="aujourdhui" className="pt-6 md:pt-10 scroll-mt-[72px]">
          <p className="text-[13.5px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
            Carnet de voyage · {infos.surtitre.split("·")[1]?.trim()}
          </p>
          <h1 className="serif mt-2 text-[34px] md:text-6xl font-semibold leading-[1.05]">
            {infos.titre} en <span className="text-[var(--accent)]">Indonésie</span>
          </h1>
          <p className="mt-2 text-[15.5px] md:text-lg text-[var(--encre-douce)] max-w-2xl">
            {infos.sousTitre}
          </p>

          <div className="mt-5">
            <Aujourdhui />
          </div>

          <AvantDepart />
        </header>

        {/* ════════ JOUR PAR JOUR ════════ */}
        <NumSection
          id="itineraire"
          num="01"
          titre="Jour par jour"
          intro="Les horaires qui comptent d'abord, l'hôtel du soir, l'alerte du jour — et le récit complet en dépliant."
        >
          <div className="space-y-10">
            {phases.map((phase) => {
              const st = phaseStyle[phase.titre] ?? {
                couleur: "var(--accent)",
                texte: "var(--accent)",
                icone: "📍",
              };
              return (
                <div key={phase.titre} id={`phase-${phase.jours[0]?.iso}`}>
                  <div
                    className="flex items-center gap-3 rounded-2xl px-4 py-3"
                    style={{ background: `color-mix(in srgb, ${st.couleur} 12%, var(--carte))` }}
                  >
                    <span className="text-2xl">{st.icone}</span>
                    <div>
                      <div
                        className="serif text-xl md:text-2xl font-semibold leading-tight"
                        style={{ color: st.texte }}
                      >
                        {phase.titre}
                      </div>
                      <div className="text-[14px] font-semibold text-[var(--encre-douce)]">
                        {phase.detail}
                      </div>
                    </div>
                  </div>

                  <div
                    className="relative mt-4 pl-9"
                    style={{ ["--couleur-phase" as string]: st.couleur }}
                  >
                    <div className="timeline-ligne" />
                    <div className="space-y-4">
                      {phase.jours.map((j) => {
                        const b = typeBadge[j.type] ?? typeBadge.route;
                        const hotel = hebergements.find((h) => h.nuits.includes(j.iso));
                        return (
                          <article
                            key={j.iso}
                            id={`j-${j.iso}`}
                            className="relative rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4 md:p-6 ombre-douce scroll-mt-[76px]"
                          >
                            <span className="timeline-noeud" />
                            <div className="flex items-center justify-between gap-3">
                              <div
                                className="font-bold text-[14px] uppercase tracking-wide"
                                style={{ color: st.texte }}
                              >
                                {j.date}
                              </div>
                              <span
                                className="text-[15px]"
                                title={b.label}
                                aria-label={b.label}
                              >
                                {b.emoji}
                              </span>
                            </div>
                            <h3 className="serif mt-1.5 text-[21px] md:text-2xl font-semibold leading-snug">
                              {j.titre}
                            </h3>

                            <ul className="mt-3 space-y-1.5">
                              {j.horaires.map((h, i) => (
                                <li key={i} className="flex gap-3 items-baseline">
                                  <span className="shrink-0 w-[92px] text-right font-bold tabular-nums text-[15.5px] text-[var(--accent)]">
                                    {h.h}
                                  </span>
                                  <span className="text-[15.5px] leading-snug">{h.quoi}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-3 pt-3 border-t border-[var(--ligne)] flex items-start gap-2 text-[15px]">
                              <span>🛏️</span>
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold">Nuit : </span>
                                {j.nuit}
                              </div>
                              {hotel && hotel.statut !== "‼️ à réserver" && (
                                <a
                                  href={mapsUrl(hotel.q)}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="chip shrink-0"
                                  aria-label="Ouvrir l'hôtel dans Google Maps"
                                >
                                  🗺️
                                </a>
                              )}
                            </div>

                            {j.alerte && (
                              <div className="mt-3 rounded-xl bg-[var(--nuit-fond)] border border-[var(--nuit-bord)] px-3.5 py-2.5 text-[14.5px] leading-relaxed">
                                <span className="font-bold">⚠️ </span>
                                {j.alerte}
                              </div>
                            )}

                            {j.lieux && j.lieux.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {j.lieux.map((l) => (
                                  <a
                                    key={l.q}
                                    href={mapsUrl(l.q)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="chip"
                                  >
                                    📍 {l.nom}
                                  </a>
                                ))}
                              </div>
                            )}

                            <details className="recit mt-2">
                              <summary>Le récit du jour</summary>
                              <p className="font-semibold text-[15.5px]">{j.resume}</p>
                              <p className="mt-2 text-[15.5px] leading-[1.7]">{j.details}</p>
                            </details>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </NumSection>

        {/* ════════ BILLETS & RÉSERVATIONS ════════ */}
        <NumSection
          id="billets"
          num="02"
          titre="Billets et réservations"
          intro="Tout ce qu'il faut montrer, taper ou payer sur place. Les captures s'ouvrent en plein écran, sans réseau."
        >
          <div className="grid gap-4">
            {reservations.map((r) => (
              <article
                key={r.titre}
                id={r.iso ? `billet-${r.iso}` : undefined}
                className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4 md:p-6 ombre-douce scroll-mt-[76px]"
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="font-bold text-[14px] uppercase tracking-wide text-[var(--accent)]">
                    {r.quand}
                  </div>
                  <Statut s={r.statut} />
                </div>
                <h3 className="serif mt-1.5 text-[21px] md:text-2xl font-semibold leading-snug">
                  {r.titre}
                </h3>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <div className="rounded-lg bg-[var(--fond-chaud)] border border-[var(--ligne)] px-3 py-1.5 text-[15px] font-semibold tracking-wide select-all">
                    {r.ref}
                  </div>
                  <Copier texte={r.ref} />
                </div>
                <ul className="mt-3 space-y-2">
                  {r.infos.map((ligne, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className="text-[var(--accent)] font-bold shrink-0">•</span>
                      <span>{ligne}</span>
                    </li>
                  ))}
                </ul>
                {r.contact && (
                  <div className="mt-3 pt-3 border-t border-[var(--ligne)] text-[14.5px] leading-relaxed text-[var(--encre-douce)]">
                    <span className="font-semibold text-[var(--encre)]">Contact : </span>
                    {r.contact}
                  </div>
                )}
                {r.liens && r.liens.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.liens.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="chip">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
                {r.captures && r.captures.length > 0 && <Galerie captures={r.captures} />}
              </article>
            ))}
          </div>

          {/* Hébergements */}
          <h3 className="serif mt-10 text-[24px] md:text-[30px] font-semibold">Les hôtels, nuit par nuit</h3>
          <p className="mt-1 text-[15px] text-[var(--encre-douce)]">
            À montrer au chauffeur, à écrire sur la fiche d'immigration. Un tap sur 🗺️ ouvre Google Maps.
          </p>
          <div className="mt-4 grid gap-3">
            {hebergements.map((h) => (
              <div
                key={h.nom + h.nuits[0]}
                className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4 ombre-douce"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[13px] font-bold uppercase tracking-wide text-[var(--accent)]">
                      {formatNuits(h.nuits)} · {h.ville}
                    </div>
                    <div className="font-bold text-[17px] leading-snug mt-0.5">{h.nom}</div>
                    {(h.reservePar || h.note) && (
                      <div className="mt-1 text-[14px] leading-relaxed text-[var(--encre-douce)]">
                        {h.reservePar && <span>Réservé par {h.reservePar}. </span>}
                        {h.note}
                      </div>
                    )}
                  </div>
                  <Statut s={h.statut} />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={mapsUrl(h.q)} target="_blank" rel="noreferrer" className="chip">
                    🗺️ Itinéraire
                  </a>
                  {h.tel && (
                    <a href={`tel:${h.tel}`} className="chip chip-tel">
                      📞 Appeler
                    </a>
                  )}
                  {h.ref && <Copier texte={h.ref} label={`Réf. ${h.ref}`} />}
                </div>
              </div>
            ))}
          </div>

          {/* Vols */}
          <h3 className="serif mt-10 text-[24px] md:text-[30px] font-semibold">Les vols</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {[
              { titre: "Aller — samedi 26 septembre", segs: volsAller },
              { titre: "Retour — samedi 17 octobre", segs: volsRetour },
              { titre: "Vols intérieurs — tous réservés", segs: volsInterieurs, large: true },
            ].map((bloc) => (
              <div
                key={bloc.titre}
                className={`rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-5 ombre-douce ${
                  bloc.large ? "md:col-span-2" : ""
                }`}
              >
                <div className="font-bold text-[16.5px] flex items-center gap-2">
                  <span>✈️</span> {bloc.titre}
                </div>
                <ul className="mt-3 space-y-3">
                  {bloc.segs.map((s, i) => (
                    <li
                      key={i}
                      className="flex flex-col gap-0.5 pl-3 border-l-2"
                      style={{ borderColor: "var(--accent-clair)" }}
                    >
                      <div className="flex items-baseline justify-between gap-3 flex-wrap">
                        <span className="font-semibold">{s.trajet}</span>
                        <span className="text-[14.5px] text-[var(--encre-douce)] tabular-nums">
                          {s.horaire}
                        </span>
                      </div>
                      <div className="text-[14px] text-[var(--encre-douce)]">{s.compagnie}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </NumSection>

        {/* ════════ CROISIÈRE ════════ */}
        <NumSection id="croisiere" num="03" titre="La croisière à Komodo" intro={croisiere.cadre}>
          <div
            className="rounded-2xl p-5 md:p-6 text-white ombre-carte"
            style={{ background: "linear-gradient(135deg, #1f7a8c, #166374)" }}
          >
            <div className="text-[13px] font-bold uppercase tracking-wide opacity-90">
              ⛵ La fiche du bateau
            </div>
            <dl className="mt-3 divide-y divide-white/20 text-[15.5px]">
              {croisiere.fiche.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-x-4 gap-y-0.5 py-2.5"
                >
                  <dt className="font-semibold opacity-80">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex flex-wrap gap-2">
              {croisiere.liens.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="chip"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", borderColor: "transparent" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-5 md:p-6 ombre-douce">
            <div className="font-bold mb-3">🗺️ Le programme des trois jours</div>
            <ul className="space-y-2.5">
              {croisiere.programme.map((p, i) => (
                <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed">
                  <span className="text-[var(--komodo)] font-bold shrink-0">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[var(--fond-chaud)] border border-[var(--ligne)] p-5">
              <div className="font-bold mb-3">🎒 Dans le petit sac</div>
              <ul className="space-y-2.5">
                {croisiere.aPrendre.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="text-[var(--komodo)] font-bold shrink-0">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--nuit-fond)] border border-[var(--nuit-bord)] p-5">
              <div className="font-bold mb-3">📋 À confirmer avec Travass</div>
              <ul className="space-y-2.5">
                {croisiere.aConfirmer.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="text-[var(--attention-texte)] font-bold shrink-0">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NumSection>

        {/* ════════ PRATIQUE ════════ */}
        <NumSection
          id="pratique"
          num="04"
          titre="Pratique"
          intro="Urgences, contacts, espèces à prévoir, heure, quelques mots — ce qu'on cherche vite."
        >
          {/* Urgences */}
          <div className="rounded-2xl bg-[var(--alerte-fond)] border border-[var(--nuit-bord)] p-4 md:p-5">
            <div className="font-bold mb-2 text-[var(--alerte-texte)]">🆘 Urgences en Indonésie</div>
            <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Contacts */}
          <h3 className="serif mt-8 text-[22px] font-semibold">Contacts</h3>
          <div className="mt-3 grid gap-3">
            {contacts.map((c) => (
              <div
                key={c.nom}
                className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4 ombre-douce"
              >
                <div className="font-bold text-[16px]">{c.nom}</div>
                <div className="text-[14.5px] text-[var(--encre-douce)]">{c.role}</div>
                {c.note && <div className="mt-1 text-[13.5px] text-[var(--encre-douce)]">{c.note}</div>}
                {(c.whatsapp || c.tel || c.email) && (
                  <div className="mt-2.5 flex flex-wrap gap-2">
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
                        ✉️ {c.email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Espèces */}
          <h3 className="serif mt-8 text-[22px] font-semibold">Espèces à prévoir</h3>
          <p className="mt-1 text-[14.5px] text-[var(--encre-douce)]">
            1 € ≈ {idr(TAUX_IDR)} IDR. Montants estimés, à arrondir au retrait.
          </p>
          <div className="mt-3 rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] overflow-hidden ombre-douce">
            {especes.map((e, i) => (
              <div key={i} className="p-4 border-b border-[var(--ligne)] last:border-b-0">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-bold text-[15px]">{e.quand}</div>
                  <div className="shrink-0 text-right">
                    <div className="font-bold tabular-nums text-[var(--accent)]">
                      ≈ {idr(e.montant)} IDR
                    </div>
                    <div className="text-[13px] text-[var(--encre-douce)] tabular-nums">≈ {euros(e.montant)} €</div>
                  </div>
                </div>
                <div className="mt-1 text-[14.5px] leading-relaxed">{e.pour}</div>
                {e.note && <div className="mt-1 text-[13.5px] text-[var(--encre-douce)]">{e.note}</div>}
              </div>
            ))}
            <div className="p-4 bg-[var(--fond-chaud)] flex items-baseline justify-between gap-3">
              <div className="font-bold">Total estimé en liquide</div>
              <div className="text-right tabular-nums">
                <div className="font-bold text-[var(--accent)]">
                  ≈ {idr(especes.reduce((a, e) => a + e.montant, 0))} IDR
                </div>
                <div className="text-[13px] text-[var(--encre-douce)]">
                  ≈ {euros(especes.reduce((a, e) => a + e.montant, 0))} €
                </div>
              </div>
            </div>
          </div>

          {/* Fuseaux + mots */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4 md:p-5 ombre-douce">
              <div className="font-bold mb-2">🕒 Heure locale</div>
              <ul className="space-y-2 text-[14.5px]">
                {fuseaux.map((f) => (
                  <li key={f.tz}>
                    <div className="font-semibold">{f.zone}</div>
                    <div className="text-[var(--encre-douce)]">{f.libelle}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-[13.5px] text-[var(--encre-douce)]">
                Les montres avancent d'une heure sur le ferry du 7 octobre. Le téléphone se règle seul.
              </div>
            </div>
            <div className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4 md:p-5 ombre-douce">
              <div className="font-bold mb-2">🗣️ Quelques mots</div>
              <dl className="grid grid-cols-[1fr_1fr] gap-x-3 gap-y-1 text-[14.5px]">
                {mots.map(([id, fr]) => (
                  <div key={id} className="contents">
                    <dt className="font-semibold">{id}</dt>
                    <dd className="text-[var(--encre-douce)]">{fr}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Rituel du soir + à savoir */}
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[var(--fond-chaud)] border border-[var(--ligne)] p-4 md:p-5">
              <div className="font-bold mb-2">🌙 Le rituel du soir</div>
              <ul className="space-y-2">
                {rituelDuSoir.map((r, i) => (
                  <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed">
                    <span className="text-[var(--accent)] font-bold shrink-0">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--carte)] border border-[var(--ligne)] p-4 md:p-5 ombre-douce">
              <div className="font-bold mb-2">ℹ️ Bon à savoir</div>
              <ul className="space-y-2">
                {aSavoir.map((r, i) => (
                  <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed">
                    <span className="text-[var(--accent)] font-bold shrink-0">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NumSection>

        {/* ════════ CARTE ════════ */}
        <NumSection
          id="carte"
          num="05"
          titre="La carte du voyage"
          intro="D'ouest en est. Pour naviguer vraiment, les étapes s'ouvrent dans Google Maps (zones hors ligne à télécharger avant le départ)."
        >
          <div className="h-[300px] md:h-[460px] rounded-2xl overflow-hidden border border-[var(--ligne)] ombre-carte">
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
        </NumSection>

        <footer className="mt-20 pt-8 border-t border-[var(--ligne)] text-center text-[14px] text-[var(--encre-douce)]">
          <div className="serif text-2xl text-[var(--accent)] mb-2">Bon voyage ✺</div>
          Indonésie 2026 · du samedi 26 septembre au dimanche 18 octobre · 20 nuits sur place
          <VersionCarnet version={process.env.NEXT_PUBLIC_VERSION ?? ""} />
        </footer>
      </main>
    </>
  );
}
