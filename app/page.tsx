import Carte from "@/components/Carte";
import {
  infos,
  volsAller,
  volsRetour,
  phases,
  croisiere,
  baliBase,
  checklist,
  vigilance,
  budget,
} from "@/lib/plan";

/* Badge par type de journée */
const typeBadge: Record<string, { emoji: string; label: string; fond: string; texte: string }> = {
  vol: { emoji: "✈️", label: "Avion", fond: "#eef4ff", texte: "#2552c4" },
  route: { emoji: "🚗", label: "Route", fond: "#f5f1ea", texte: "#6a6155" },
  aventure: { emoji: "🌋", label: "Aventure", fond: "#eef7f0", texte: "#1f7a4b" },
  repos: { emoji: "🌴", label: "Détente", fond: "#fdf2e3", texte: "#b5751e" },
  bateau: { emoji: "⛵", label: "Bateau", fond: "#e9f6f8", texte: "#147284" },
};

/* Couleur + icône par phase (region) */
const phaseStyle: Record<string, { couleur: string; icone: string }> = {
  "Le départ": { couleur: "var(--depart)", icone: "🛫" },
  "Sumatra — les orangs-outans": { couleur: "var(--sumatra)", icone: "🦧" },
  "Java — temples et volcans": { couleur: "var(--java)", icone: "🌋" },
  "Bali — trois nuits à Canggu": { couleur: "var(--bali)", icone: "🏝️" },
  "Komodo — la croisière": { couleur: "var(--komodo)", icone: "🐉" },
  "Bali — le final à Canggu": { couleur: "var(--bali)", icone: "🌅" },
  "Le retour": { couleur: "var(--depart)", icone: "🛬" },
};

const navLiens = [
  { href: "#itineraire", label: "Jour par jour" },
  { href: "#vols", label: "Vols" },
  { href: "#croisiere", label: "Croisière" },
  { href: "#bali", label: "Bali" },
  { href: "#carte", label: "Carte" },
  { href: "#reservations", label: "À réserver" },
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
    <section id={id} className="mt-24 scroll-mt-20">
      <div className="flex items-center gap-3">
        <span className="serif text-[var(--accent)] text-2xl font-semibold">
          {num}
        </span>
        <span className="h-px flex-1 bg-[var(--ligne)]" />
      </div>
      <h2 className="serif mt-3 text-3xl md:text-[40px] font-semibold leading-tight">
        {titre}
      </h2>
      {intro && (
        <p className="mt-3 text-[17px] text-[var(--encre-douce)] max-w-2xl">
          {intro}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      {/* ════════ EN-TÊTE ATMOSPHÉRIQUE ════════ */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(160deg, #fbeede 0%, #f6ead7 40%, #faf5ec 100%)",
          }}
        />
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(194,104,58,0.18), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-[920px] px-5 md:px-8 pt-14 md:pt-20 pb-14">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            Carnet de voyage · {infos.surtitre.split("·")[1]?.trim()}
          </p>
          <h1 className="serif mt-4 text-5xl md:text-7xl font-semibold leading-[1.02]">
            {infos.titre} en{" "}
            <span className="text-[var(--accent)]">Indonésie</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--encre-douce)] max-w-2xl leading-relaxed">
            {infos.sousTitre}
          </p>

          {/* Ruban d'itinéraire */}
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] font-semibold">
            {[
              ["🦧 Sumatra", "var(--sumatra)"],
              ["🌋 Java", "var(--java)"],
              ["🏝️ Bali", "var(--bali)"],
              ["🐉 Komodo", "var(--komodo)"],
              ["🌅 Bali", "var(--bali)"],
            ].map(([label, couleur], i, arr) => (
              <span key={i} className="flex items-center gap-2">
                <span
                  className="px-3 py-1.5 rounded-full bg-white/70 border"
                  style={{ borderColor: couleur as string, color: couleur as string }}
                >
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[var(--encre-douce)]">→</span>
                )}
              </span>
            ))}
          </div>

          {/* Chiffres clés */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {infos.chiffres.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl bg-white/80 border border-[var(--ligne)] p-5 ombre-douce"
              >
                <div className="serif text-3xl md:text-[38px] font-semibold text-[var(--accent)]">
                  {c.valeur}
                </div>
                <div className="mt-1 font-bold text-[15px]">{c.label}</div>
                <div className="mt-1 text-[13.5px] leading-snug text-[var(--encre-douce)]">
                  {c.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ════════ NAVIGATION FLOTTANTE ════════ */}
      <nav className="nav-flottante">
        <div className="mx-auto max-w-[920px] px-5 md:px-8 py-3 flex gap-1.5 overflow-x-auto">
          {navLiens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-[14px] font-semibold text-[var(--encre-douce)] hover:bg-[var(--accent-clair)] hover:text-[var(--accent)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-[920px] px-5 md:px-8 pb-32">
        {/* ════════ JOUR PAR JOUR (la pièce maîtresse) ════════ */}
        <NumSection
          id="itineraire"
          num="01"
          titre="L'itinéraire, jour par jour"
          intro="Le voyage déroulé comme un fil : chaque région a sa couleur, chaque journée sa carte. Rien d'abrégé, tout est expliqué."
        >
          <div className="space-y-12">
            {phases.map((phase) => {
              const st = phaseStyle[phase.titre] ?? {
                couleur: "var(--accent)",
                icone: "📍",
              };
              return (
                <div key={phase.titre}>
                  {/* En-tête de phase */}
                  <div
                    className="flex items-center gap-3 rounded-2xl px-4 py-3"
                    style={{ background: `color-mix(in srgb, ${st.couleur} 9%, white)` }}
                  >
                    <span className="text-2xl">{st.icone}</span>
                    <div>
                      <div
                        className="serif text-xl md:text-2xl font-semibold leading-tight"
                        style={{ color: st.couleur }}
                      >
                        {phase.titre}
                      </div>
                      <div className="text-[14px] font-semibold text-[var(--encre-douce)]">
                        {phase.detail}
                      </div>
                    </div>
                  </div>

                  {/* Timeline des jours */}
                  <div
                    className="relative mt-4 pl-10"
                    style={{ ["--couleur-phase" as string]: st.couleur }}
                  >
                    <div className="timeline-ligne" />
                    <div className="space-y-4">
                      {phase.jours.map((j) => {
                        const b = typeBadge[j.type] ?? typeBadge.route;
                        return (
                          <article
                            key={j.date}
                            className="relative rounded-2xl bg-white border border-[var(--ligne)] p-5 md:p-6 ombre-douce"
                          >
                            <span className="timeline-noeud" />
                            <div className="flex items-center justify-between gap-3 flex-wrap">
                              <div
                                className="font-bold text-[14px] uppercase tracking-wide"
                                style={{ color: st.couleur }}
                              >
                                {j.date}
                              </div>
                              <span
                                className="text-[13px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
                                style={{ background: b.fond, color: b.texte }}
                              >
                                <span>{b.emoji}</span>
                                {b.label}
                              </span>
                            </div>
                            <h3 className="serif mt-2 text-[22px] md:text-2xl font-semibold leading-snug">
                              {j.titre}
                            </h3>
                            <p className="mt-1.5 font-semibold text-[16.5px]">
                              {j.resume}
                            </p>
                            <p className="mt-3 text-[16px] leading-[1.75] text-[var(--encre-douce)]">
                              {j.details}
                            </p>
                            <div className="mt-4 pt-3 border-t border-[var(--ligne)] text-[15px] flex gap-2">
                              <span>🛏️</span>
                              <span>
                                <span className="font-semibold">Nuit : </span>
                                {j.nuit}
                              </span>
                            </div>
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

        {/* ════════ VOLS ════════ */}
        <NumSection
          id="vols"
          num="02"
          titre="Les vols internationaux"
          intro="Un seul billet par trajet, sur des compagnies partenaires : les bagages suivent automatiquement et les correspondances sont protégées. Environ 919 € par personne."
        >
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Aller — samedi 26 septembre", segs: volsAller },
              { titre: "Retour — samedi 17 octobre", segs: volsRetour },
            ].map((bloc) => (
              <div
                key={bloc.titre}
                className="rounded-2xl bg-white border border-[var(--ligne)] p-6 ombre-douce"
              >
                <div className="font-bold text-lg flex items-center gap-2">
                  <span>✈️</span> {bloc.titre}
                </div>
                <ul className="mt-4 space-y-3">
                  {bloc.segs.map((s, i) => (
                    <li
                      key={i}
                      className="flex flex-col gap-0.5 pl-3 border-l-2"
                      style={{ borderColor: "var(--accent-clair)" }}
                    >
                      <div className="flex items-baseline justify-between gap-3 flex-wrap">
                        <span className="font-semibold">{s.trajet}</span>
                        <span className="text-[15px] text-[var(--encre-douce)]">
                          {s.horaire}
                        </span>
                      </div>
                      <div className="text-[14.5px] text-[var(--encre-douce)]">
                        {s.compagnie}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </NumSection>

        {/* ════════ CROISIÈRE ════════ */}
        <NumSection
          id="croisiere"
          num="03"
          titre="La croisière à Komodo"
          intro={croisiere.cadre}
        >
          {/* Recommandation */}
          <div
            className="rounded-2xl p-5 md:p-6 text-white ombre-carte"
            style={{ background: "linear-gradient(135deg, #1f7a8c, #166374)" }}
          >
            <div className="text-[13px] font-bold uppercase tracking-wide opacity-90">
              ⭐ Le verdict des deux équipes
            </div>
            <p className="mt-2 text-[16.5px] leading-relaxed">
              {croisiere.recommande}
            </p>
          </div>

          {/* Podium — une fiche détaillée par bateau */}
          <div className="mt-5 grid gap-4">
            {croisiere.operateurs.map((o) => {
              const gagnant = o.rang === 1;
              return (
                <div
                  key={o.rang}
                  className={`rounded-2xl bg-white p-5 md:p-6 ombre-douce border ${
                    gagnant
                      ? "border-2 border-[#1f7a8c]"
                      : "border-[var(--ligne)]"
                  }`}
                >
                  {/* En-tête fiche */}
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      <span
                        className="serif w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-[17px] shrink-0"
                        style={{
                          background: gagnant ? "#1f7a8c" : "#b0a896",
                        }}
                      >
                        {o.rang}
                      </span>
                      <div>
                        <div className="font-bold text-[18px] leading-tight">
                          {o.nom}
                        </div>
                        {gagnant && (
                          <div className="text-[13px] font-bold text-[#1f7a8c]">
                            Notre recommandation
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="text-[15px] font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: "#e9f6f8", color: "#147284" }}
                    >
                      {o.prix}
                    </div>
                  </div>

                  {/* Tableau de la fiche */}
                  <dl className="mt-4 divide-y divide-[var(--ligne)] text-[15.5px]">
                    {[
                      ["Bateau", o.bateau],
                      ["Départ lundi", o.departLundi],
                      ["Avis", o.avis],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-x-4 gap-y-0.5 py-2.5"
                      >
                        <dt className="font-semibold text-[var(--encre-douce)]">
                          {k}
                        </dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>

                  {/* Photos des cabines (photos officielles des opérateurs, vérifiées le 12/07/2026) */}
                  {o.photos.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {o.photos.map((p) => (
                        <figure key={p.src} className="m-0">
                          <img
                            src={p.src}
                            alt={p.legende}
                            loading="lazy"
                            className="w-full aspect-[3/2] object-cover rounded-xl border border-[var(--ligne)]"
                          />
                          <figcaption className="mt-1.5 text-[13px] leading-snug text-[var(--encre-douce)]">
                            {p.legende}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}

                  {/* Le + et le − */}
                  <div className="mt-3 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#f0faf3] border border-[#cfe9d6] p-3.5">
                      <div className="text-[12.5px] font-bold uppercase tracking-wide text-[#1f7a4b] mb-1">
                        ＋ Le point fort
                      </div>
                      <p className="text-[14.5px] leading-relaxed">{o.pour}</p>
                    </div>
                    <div className="rounded-xl bg-[#fdf4f1] border border-[#f1d6cc] p-3.5">
                      <div className="text-[12.5px] font-bold uppercase tracking-wide text-[#b5471f] mb-1">
                        － La réserve
                      </div>
                      <p className="text-[14.5px] leading-relaxed">{o.contre}</p>
                    </div>
                  </div>

                  {/* Comment réserver */}
                  <div className="mt-3 text-[14.5px] leading-relaxed text-[var(--encre-douce)]">
                    <span className="font-semibold text-[var(--encre)]">
                      Réserver :{" "}
                    </span>
                    {o.reserver}
                  </div>
                </div>
              );
            })}
          </div>

          {/* À retenir */}
          <div className="mt-5 rounded-2xl bg-[var(--fond-chaud)] border border-[var(--ligne)] p-5 md:p-6">
            <div className="font-bold mb-3">🔒 Réserver en sécurité — les règles d'or</div>
            <ul className="space-y-2.5">
              {croisiere.aRetenir.map((p, i) => (
                <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed">
                  <span className="text-[var(--komodo)] font-bold shrink-0">
                    •
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* À éviter */}
          <div className="mt-4 rounded-2xl bg-[#fdf3f0] border border-[#f1d6cc] p-5 md:p-6">
            <div className="font-bold mb-3 text-[#b5471f]">
              🚫 À fuir absolument
            </div>
            <ul className="space-y-2.5">
              {croisiere.aEviter.map((p, i) => (
                <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed">
                  <span className="text-[#b5471f] font-bold shrink-0">✕</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Le message à envoyer */}
          <div className="mt-4 rounded-2xl bg-white border border-[var(--ligne)] p-5 md:p-6 ombre-douce">
            <div className="font-bold mb-1.5">
              📋 Le message à envoyer (copier-coller)
            </div>
            <p className="text-[14.5px] leading-relaxed text-[var(--encre-douce)]">
              {croisiere.messageNote}
            </p>
            <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-[var(--fond-chaud)] border border-dashed border-[var(--ligne)] p-4 text-[13.5px] leading-relaxed font-mono">
              {croisiere.messageType}
            </pre>
          </div>
        </NumSection>

        {/* ════════ BALI ════════ */}
        <NumSection
          id="bali"
          num="04"
          titre="Où dormir à Bali"
          intro="Cinq nuits de plage : trois pour souffler avant Komodo, deux pour finir en douceur."
        >
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { ...baliBase.avant, tag: "Avant la croisière", emoji: "🏝️" },
              { ...baliBase.apres, tag: "Après la croisière", emoji: "🌅" },
            ].map((b, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[var(--ligne)] p-6 ombre-douce"
              >
                <div className="text-[13px] font-bold uppercase tracking-wide text-[var(--bali)]">
                  {b.emoji} {b.tag}
                </div>
                <div className="serif mt-2 text-2xl font-semibold">{b.zone}</div>
                <p className="mt-2 text-[15.5px] leading-relaxed text-[var(--encre-douce)]">
                  {b.pourquoi}
                </p>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {b.hotels.map((h, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="text-[var(--bali)] mt-0.5">★</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </NumSection>

        {/* ════════ CARTE ════════ */}
        <NumSection
          id="carte"
          num="05"
          titre="La carte du voyage"
          intro="D'ouest en est : Sumatra, Java, Bali, puis les îles de Komodo — et retour à Bali pour finir."
        >
          <div className="h-[460px] rounded-2xl overflow-hidden border border-[var(--ligne)] ombre-carte">
            <Carte />
          </div>
        </NumSection>

        {/* ════════ CHECKLIST ════════ */}
        <NumSection
          id="reservations"
          num="06"
          titre="Quoi réserver, et quand"
          intro="Dans l'ordre. La toute première ligne est la plus urgente : c'est elle qui bloque le reste."
        >
          <ol className="space-y-3">
            {checklist.map((c, i) => (
              <li
                key={i}
                className="rounded-2xl bg-white border border-[var(--ligne)] p-4 md:p-5 flex gap-4 ombre-douce"
              >
                <div className="serif shrink-0 w-9 h-9 rounded-full bg-[var(--accent)] text-white font-semibold flex items-center justify-center text-[16px]">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-[14px] uppercase tracking-wide text-[var(--accent)]">
                    {c.quand}
                  </div>
                  <div className="mt-1 text-[16px] leading-relaxed">{c.quoi}</div>
                </div>
              </li>
            ))}
          </ol>
        </NumSection>

        {/* ════════ BUDGET + VIGILANCE ════════ */}
        <NumSection
          id="budget"
          num="07"
          titre="Budget et points de vigilance"
        >
          <div
            className="rounded-2xl p-6 md:p-8 ombre-carte text-white"
            style={{
              background: "linear-gradient(135deg, #c2683a, #a8512a)",
            }}
          >
            <div className="text-[13px] font-bold uppercase tracking-wide opacity-90">
              Budget total estimé pour 2 personnes, vols compris
            </div>
            <div className="mt-3 flex items-baseline gap-4 flex-wrap">
              <span className="serif text-5xl font-semibold">
                {budget.moyen.toLocaleString("fr-FR")} €
              </span>
              <span className="opacity-90">en moyenne</span>
            </div>
            <div className="mt-1 text-[15px] opacity-90">
              fourchette : {budget.bas.toLocaleString("fr-FR")} € en voyageant
              simplement, jusqu'à {budget.haut.toLocaleString("fr-FR")} € en
              confort partout.
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {vigilance.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#fdf6ee] border border-[#f0dcc4] p-4 md:p-5 text-[15.5px] leading-relaxed flex gap-3"
              >
                <span className="shrink-0">⚠️</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </NumSection>

        <footer className="mt-24 pt-8 border-t border-[var(--ligne)] text-center text-[14px] text-[var(--encre-douce)]">
          <div className="serif text-2xl text-[var(--accent)] mb-2">Bon voyage ✺</div>
          Indonésie 2026 · du samedi 26 septembre au dimanche 18 octobre · 20
          nuits sur place
        </footer>
      </main>
    </>
  );
}
