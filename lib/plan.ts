// ─────────────────────────────────────────────────────────────
// Le carnet de voyage — vérifié par les agents et tenu à jour
// au fil des réservations réelles (✅ réservé · ‼️ à réserver)
// ─────────────────────────────────────────────────────────────

export const infos = {
  surtitre: "Indonésie · du 26 septembre au 18 octobre 2026",
  titre: "Notre itinéraire",
  sousTitre:
    "Sumatra, Java, Bali et Komodo en vingt nuits — orangs-outans, temples, volcans, dragons et raies mantas.",
  chiffres: [
    {
      valeur: "20",
      label: "nuits sur place",
      detail: "du 27 septembre au 16 octobre inclus",
    },
    {
      valeur: "7",
      label: "nuits à Bali",
      detail: "Lovina, Munduk, puis 5 nuits à Canggu (2 + 3, retour de Komodo le 14 au soir)",
    },
    {
      valeur: "1",
      label: "réveil vraiment tôt",
      detail: "le Bromo à 3 h — Borobudur se fait au créneau de 8 h 30 - 10 h, l'Ijen en douceur",
    },
  ],
};

export const volsAller = [
  {
    trajet: "Luxembourg → Francfort",
    horaire: "samedi 26 · 18 h 30 → 19 h 25",
    compagnie: "Air Dolomiti (vol EN 8755) · 55 min",
  },
  {
    trajet: "Francfort → Singapour",
    horaire: "samedi 26 · 21 h 50 → dimanche 16 h 30",
    compagnie:
      "Lufthansa (vol LH 780, opéré par Singapore Airlines) · vol de nuit ~12 h 40",
  },
  {
    trajet: "Singapour → Medan",
    horaire: "dimanche 27 · 19 h 00 → 19 h 35",
    compagnie: "Singapore Airlines (vol SQ 994) · 1 h 35",
  },
];

export const volsRetour = [
  {
    trajet: "Bali (Denpasar) → Singapour",
    horaire: "samedi 17 · 13 h 15 → 16 h 00",
    compagnie:
      "Singapore Airlines (vol SQ 9768, Boeing 787) · 2 h 45 · sur billet Lufthansa",
  },
  {
    trajet: "Singapour → Munich",
    horaire: "samedi 17 · 22 h 45 → dimanche 5 h 15",
    compagnie:
      "Lufthansa (vol LH 769, Airbus A350) · escale de 6 h 45 à Singapour : le temps de dîner et de voir la cascade du Jewel",
  },
  {
    trajet: "Munich → Luxembourg",
    horaire: "dimanche 18 · 7 h 50 → 8 h 55",
    compagnie: "Lufthansa (vol LH 2316) · 1 h 05",
  },
];

export const volsInterieurs = [
  {
    trajet: "Medan (KNO) → Yogyakarta (YIA)",
    horaire: "jeudi 1ᵉʳ octobre · 17 h 20 → 20 h 10",
    compagnie:
      "Lion Air JT963 · Boeing 737-900 · 2 h 50 direct · aucun repas à bord · ✅ réservé",
  },
  {
    trajet: "Bali (DPS) → Labuan Bajo (LBJ)",
    horaire: "dimanche 11 octobre · 15 h 45 → 16 h 55",
    compagnie:
      "AirAsia (PT Indonesia AirAsia) · 1 h 10 direct · réf. PFIPUG · ✅ réservé",
  },
  {
    trajet: "Labuan Bajo (LBJ) → Bali (DPS)",
    horaire: "mercredi 14 octobre · 17 h 25 → 18 h 35",
    compagnie:
      "AirAsia (PT Indonesia AirAsia) · 1 h 10 direct · réf. PFIPUG · ✅ réservé",
  },
];

// ─── Billets & réservations — tout à portée de main sur place ───

export type Reservation = {
  quand: string;
  iso?: string;
  titre: string;
  ref: string;
  statut: "✅ payé" | "✅ réservé" | "💵 solde sur place" | "‼️ à faire";
  infos: string[];
  contact?: string;
  liens?: { label: string; href: string }[];
  captures?: { src: string; legende: string; pour?: string }[];
};

export const reservations: Reservation[] = [
  {
    quand: "Tout le voyage",
    titre: "Les voyageurs — identités à recopier",
    ref: "Franck Monardo · Agathe Roncalli",
    statut: "✅ réservé",
    infos: [
      "Franck MONARDO · né le 15 mai 1993 · passeport 22IK82830",
      "Agathe RONCALLI · née le 23 juillet 1990 · passeport 21DI57178",
      "Ces numéros sont ceux saisis sur le train (KAI), les vols Lion Air et AirAsia : ce sont les passeports à présenter à l'embarquement. À réutiliser pour le billet Bromo (nominatif) et le permis SiORA de Komodo.",
    ],
  },
  {
    quand: "Lun. 28 sept. · 11 h",
    iso: "2026-09-28",
    titre: "Trek orangs-outans — Sumatra Orangutan Explore",
    ref: "New SOE Lodge (28 et 30/9) + trek 2J/1N (29-30/9)",
    statut: "💵 solde sur place",
    infos: [
      "Prise en charge à 11 h au JW Marriott Medan, voiture privée 800 000 IDR (+ péage 33 000 IDR par trajet, en espèces au chauffeur).",
      "Solde du trek à régler en espèces à l'arrivée au lodge : environ 4 629 000 IDR (acompte déjà versé). Aucun distributeur à Bukit Lawang — retirer à Medan.",
      "Chambre Family Room à l'étage, trek 2 400 000 IDR par personne tout compris (guide, porteur, cuisinier, repas, camping, parc).",
      "Leur demander aussi la navette Bukit Lawang → aéroport de Kualanamu du jeudi 1ᵉʳ octobre (départ vers 11 h 30 au plus tard).",
    ],
  },
  {
    quand: "Jeu. 1ᵉʳ oct. · 17 h 20",
    iso: "2026-10-01",
    titre: "Vol Medan → Yogyakarta — Lion Air JT963",
    ref: "KNO 17 h 20 → YIA 20 h 10 · Boeing 737-900 · Economy",
    statut: "✅ payé",
    infos: [
      "Passagers : FRANCK MONARDO et AGATHE RONCALLI (billets adultes, noms identiques aux passeports).",
      "Enregistrement fermé 45 min avant le départ : être à Kualanamu vers 15 h 30. Aucun repas à bord.",
      "Arrivée à YIA (Kulon Progo), à 45-50 km du centre : 1 h à 1 h 30 de route jusqu'à Bohemian Jogja Villas.",
    ],
    captures: [
      { src: "/billets/lionair-jt963.jpg", legende: "Réservation Lion Air JT963 — passagers" },
    ],
  },
  {
    quand: "Ven. 2 oct. · 8 h 30 - 10 h",
    iso: "2026-10-02",
    titre: "Borobudur — montée sur le temple, créneau 8 h 30 - 10 h",
    ref: "Billets Goers V7F40-25E17A094 · V7F40-25E17A196",
    statut: "✅ payé",
    infos: [
      "2 billets « 08:30 - Foreigner Adult » (créneau 8 h 30 - 10 h) au nom de Monardo Franck, QR codes dans le lien t.goersapp.com reçu par WhatsApp (bouton « Cetak Tiket » pour imprimer). Faire des captures d'écran des deux QR codes hors ligne.",
      "Partir de la villa vers 7 h (environ une heure de route, 40 km au nord-ouest) pour être au guichet 20-30 min avant le créneau, passeports en main.",
      "Sandales « upanat » et sarong fournis sur place ; le créneau court de 8 h 30 à 10 h sur la structure du temple, avec guide — se présenter à l'heure, le créneau ne se décale pas.",
    ],
    liens: [
      { label: "🗺️ Borobudur", href: "https://www.google.com/maps/search/?api=1&query=Candi+Borobudur" },
      { label: "🗺️ Prambanan", href: "https://www.google.com/maps/search/?api=1&query=Candi+Prambanan" },
    ],
    captures: [
      { src: "/billets/borobudur-billet-1.png", legende: "Billet 1/2 — QR V7F40-25E17A094" },
      { src: "/billets/borobudur-billet-2.png", legende: "Billet 2/2 — QR V7F40-25E17A196" },
    ],
  },
  {
    quand: "Sam. 3 oct. · 10 h 50",
    iso: "2026-10-03",
    titre: "Train Yogyakarta → Malang — Malioboro Ekspres (170B)",
    ref: "Booking 3E49U4B · sièges EKS-2 · 6C (Franck) et 6D (Agathe)",
    statut: "✅ payé",
    infos: [
      "Classe Executive AC · départ gare de Tugu Yogyakarta (Jl. Ps. Kembang 21) à 10 h 50 · arrivée gare de Malang (Jl. Trunojoyo 10) vers 17 h 30 · 41,51 € par personne, acheté sur 12go le 24 septembre.",
      "Le e-ticket n'est PAS une carte d'embarquement : l'imprimer à la borne libre-service de la gare (dès 7 jours avant) avec le code 3E49U4B et le passeport. Être en gare 60 min avant le départ.",
      "Bagages : 1 valise de 20 kg max (70×48×30 cm) + bagages à main. On peut apporter à manger et à boire.",
    ],
    contact: "KAI : cs@kai.id · +62 811-1211-1121 · 12go : compte en ligne, booking 3E49U4B",
    liens: [
      { label: "🗺️ Gare de Tugu", href: "https://www.google.com/maps/search/?api=1&query=Stasiun+Tugu+Yogyakarta" },
      { label: "🗺️ Gare de Malang", href: "https://www.google.com/maps/search/?api=1&query=Stasiun+Malang" },
      { label: "💬 WhatsApp KAI", href: "https://wa.me/628111211121" },
    ],
    captures: [
      { src: "/billets/train-franck.jpg", legende: "E-ticket KAI — siège 6C", pour: "Franck" },
      { src: "/billets/train-agathe.jpg", legende: "E-ticket KAI — siège 6D", pour: "Agathe" },
      { src: "/billets/train-voucher-12go.jpg", legende: "Voucher 12go — booking 3E49U4B" },
    ],
  },
  {
    quand: "Dim. 11 oct. · 15 h 45",
    iso: "2026-10-11",
    titre: "Vol Bali → Labuan Bajo — AirAsia",
    ref: "Réf. PFIPUG · DPS 15 h 45 → LBJ 16 h 55",
    statut: "✅ payé",
    infos: [
      "Vol direct 1 h 10, classe économique, PT Indonesia AirAsia. Enregistrement en ligne AirAsia ouvert 14 jours avant. On part avec un petit sac cabine chacun (7 kg max chez AirAsia) : les grosses valises restent chez Jasmine à Bali du 11 au 14.",
      "Depuis Canggu, compter environ une heure jusqu'à l'aéroport : quitter l'hôtel vers 12 h 45 - 13 h pour être au terminal domestique 2 h avant.",
      "Arrivée à Labuan Bajo à 16 h 55 (heure de Bali = heure de Florès), 15 min de route jusqu'à la Casa de Capulet.",
    ],
    liens: [
      { label: "🗺️ Aéroport de Denpasar", href: "https://www.google.com/maps/search/?api=1&query=Ngurah+Rai+International+Airport" },
    ],
    captures: [
      { src: "/billets/airasia-pfipug.jpg", legende: "Réservation AirAsia PFIPUG — aller et retour" },
    ],
  },
  {
    quand: "Lun. 12 oct. · 8 h",
    iso: "2026-10-12",
    titre: "Croisière Komodo 3J/2N — Travass Life · bateau Andalucia · VIP Room",
    ref: "Commande n° 14875 · 18 892 950 IDR (≈ 915 € pour deux) · payée le 6 août 2026 via Xendit",
    statut: "✅ payé",
    infos: [
      "Produit : « 3D2N Komodo Sailing | Comfortable Semi-Deluxe | ANDALUCIA », package VIP ROOM, 2 adultes, trip date 12 octobre 2026 à 8 h.",
      "Retour au port de Labuan Bajo le mercredi 14 vers 12 h (confirmé par Travass) : large marge avant le vol de 17 h 25.",
      "Demander par WhatsApp le lieu exact de rendez-vous le lundi matin (prise en charge à l'hôtel ou au port) et si les frais du parc national et le permis SiORA sont inclus.",
      "Prendre le mail « Order received » (commande 14875) sur le téléphone comme preuve de paiement.",
    ],
    contact:
      "Travass Life · WhatsApp +62 811-3828-2828 (Admin 02, ouvert 8 h - 21 h) · hello@travass.life · IG @travass.life",
    liens: [
      { label: "💬 WhatsApp Travass", href: "https://wa.me/6281138282828?text=" + encodeURIComponent("Hello Travass! Order #14875 (Andalucia, VIP Room, 12 Oct 8am, 2 adults, Franck Monardo). Could you confirm the meeting point and time on Oct 12?") },
      { label: "🗺️ Port de Labuan Bajo", href: "https://www.google.com/maps/search/?api=1&query=Pelabuhan+Labuan+Bajo" },
    ],
    captures: [
      { src: "/billets/travass-commande-14875.jpg", legende: "Commande Travass n° 14875 — preuve de paiement" },
      { src: "/billets/travass-contact.jpg", legende: "Travass Life sur WhatsApp — +62 811-3828-2828" },
    ],
  },
  {
    quand: "Mer. 14 oct. · 17 h 25",
    iso: "2026-10-14",
    titre: "Vol Labuan Bajo → Bali — AirAsia",
    ref: "Réf. PFIPUG · LBJ 17 h 25 → DPS 18 h 35",
    statut: "✅ payé",
    infos: [
      "Même réservation PFIPUG que l'aller. Vol direct 1 h 10.",
      "Le bateau est de retour au port vers 12 h, l'aéroport de Komodo est à 10 min : le temps d'un déjeuner et d'une douche (demander à la Casa de Capulet ou à Travass où se poser) avant d'aller à l'aéroport vers 15 h 30. Bagage cabine seulement : les valises sont restées chez Jasmine à Bali. Enregistrement fermé 45 min avant, à faire en ligne la veille depuis le bateau si le réseau passe.",
      "Arrivée à Denpasar 18 h 35, puis environ une heure de route vers Canggu : hôtel vers 20 h. La nuit du 14 à Canggu reste à réserver.",
    ],
    liens: [
      { label: "🗺️ Aéroport de Komodo", href: "https://www.google.com/maps/search/?api=1&query=Komodo+Airport+Labuan+Bajo" },
    ],
    captures: [
      { src: "/billets/airasia-pfipug.jpg", legende: "Réservation AirAsia PFIPUG — retour 14 oct. 17 h 25" },
    ],
  },
];

export type Horaire = { h: string; quoi: string };
export type Lieu = { nom: string; q: string };

export type Jour = {
  date: string;
  iso: string;
  titre: string;
  resume: string;
  details: string;
  nuit: string;
  type: "vol" | "route" | "aventure" | "repos" | "bateau";
  /** Les heures qui comptent, dans l'ordre — lues en premier sur place */
  horaires: Horaire[];
  /** Le point de vigilance du jour, s'il y en a un */
  alerte?: string;
  /** Lieux à ouvrir dans Google Maps (q = recherche ou "lat,lng") */
  lieux?: Lieu[];
};

export type Phase = {
  titre: string;
  detail: string;
  fuseau: "Asia/Jakarta" | "Asia/Makassar" | "Europe/Luxembourg";
  jours: Jour[];
};

export const phases: Phase[] = [
  {
    titre: "Le départ",
    fuseau: "Asia/Jakarta",
    detail: "26 — 27 septembre",
    jours: [
      {
        date: "Samedi 26 septembre",
        titre: "Envol depuis Luxembourg",
        resume:
          "Décollage de Luxembourg à 18 h 30 pour rejoindre l'Indonésie via Francfort et Singapour.",
        details:
          "Départ de l'aéroport de Luxembourg à 18 h 30 avec Air Dolomiti vers Francfort, escale, puis long vol de nuit vers Singapour (Lufthansa, opéré par Singapore Airlines). Glissez dans le bagage cabine une tenue de rechange et l'essentiel du trek (chaussures de marche, lampe frontale, chaussettes hautes) au cas où une valise prendrait du retard.",
        iso: "2026-09-26",
        horaires: [
          { h: "16:00", quoi: "Être à l'aéroport de Luxembourg (2 h 30 avant l'international)" },
          { h: "18:30", quoi: "Air Dolomiti EN 8755 → Francfort (19 h 25)" },
          { h: "21:50", quoi: "Lufthansa LH 780 → Singapour, nuit en vol" },
        ],
        alerte:
          "Dans le bagage cabine : tenue de rechange, chaussures de marche, frontale, chaussettes hautes — au cas où une valise prendrait du retard.",
        nuit: "En vol, entre Francfort et Singapour",
        type: "vol",
      },
      {
        date: "Dimanche 27 septembre",
        titre: "Arrivée à Medan",
        resume:
          "Atterrissage à Medan à 19 h 35, taxi et nuit au JW Marriott — au cœur de la ville.",
        details:
          "Correspondance à Singapour puis atterrissage à l'aéroport de Kualanamu (Medan) à 19 h 35. Passage de l'immigration (visa électronique préparé en ligne avant le départ, environ 33 euros par personne), retrait d'espèces au distributeur et achat d'une carte SIM Telkomsel dans le hall — il n'y a aucun distributeur de billets à Bukit Lawang. Taxi vers le centre (environ une heure) et nuit au JW Marriott Medan. Coucher tranquille après une vingtaine d'heures de voyage.",
        iso: "2026-09-27",
        horaires: [
          { h: "16:30", quoi: "Arrivée Singapour Changi (correspondance 2 h 30)" },
          { h: "19:00", quoi: "Singapore Airlines SQ 994 → Medan" },
          { h: "19:35", quoi: "Kualanamu : immigration (e-VoA), DAB (retirer ≈ 6,8 M IDR pour Sumatra), SIM Telkomsel" },
          { h: "~21:00", quoi: "Taxi (1 h) → JW Marriott Medan" },
        ],
        alerte:
          "Aucun distributeur à Bukit Lawang : tout le liquide de Sumatra se retire ce soir à l'aéroport (plusieurs retraits).",
        lieux: [
          { nom: "JW Marriott Hotel Medan", q: "JW Marriott Hotel Medan" },
          { nom: "Aéroport de Kualanamu", q: "Kualanamu International Airport" },
        ],
        nuit: "JW Marriott Medan · ✅ réservé",
        type: "vol",
      },
    ],
  },
  {
    titre: "Sumatra — les orangs-outans",
    fuseau: "Asia/Jakarta",
    detail: "28 — 30 septembre",
    jours: [
      {
        date: "Lundi 28 septembre",
        titre: "Route vers Bukit Lawang et récupération",
        resume:
          "Prise en charge à 11 h au JW Marriott par Sumatra Orangutan Explore, route vers la jungle, après-midi de repos au lodge.",
        details:
          "Matinée tranquille au JW Marriott (option, si l'envie est là : un saut rapide au manoir Tjong A Fie en centre-ville). À 11 h, prise en charge à l'hôtel par Sumatra Orangutan Explore en voiture privée (800 000 roupies, péage de 33 000 roupies par trajet à régler en espèces au chauffeur). Quatre à cinq heures de route vers Bukit Lawang. À l'arrivée, l'équipe vous accueille pour régler le solde du trek (environ 4 629 000 roupies, en espèces), puis transfert des bagages à moto jusqu'au lodge. Installation au New SOE Lodge (chambre Family Room à l'étage : grand lit, moustiquaire, salle de bain privée eau chaude, climatisation, balcon avec vue jungle). Après-midi de repos pour digérer le voyage : hamac, rivière Bohorok, briefing du trek. Coucher tôt.",
        iso: "2026-09-28",
        horaires: [
          { h: "11:00", quoi: "Prise en charge au JW Marriott par Sumatra Orangutan Explore (800 000 IDR + péage 33 000, en espèces)" },
          { h: "~15:30", quoi: "Arrivée Bukit Lawang : solde du trek 4 629 000 IDR en espèces" },
          { h: "Après-midi", quoi: "Installation au New SOE Lodge, repos, briefing du trek" },
        ],
        lieux: [
          { nom: "New SOE Lodge, Bukit Lawang", q: "New SOE Lodge Bukit Lawang" },
        ],
        nuit: "New SOE Lodge, Bukit Lawang (chambre Family Room) · ✅ réservé",
        type: "repos",
      },
      {
        date: "Mardi 29 septembre",
        titre: "Le trek commence : la jungle de Gunung Leuser",
        resume:
          "Départ du trek à 9 h, à la rencontre des orangs-outans sauvages. Première nuit au campement, au bord de la rivière.",
        details:
          "Départ du trek de deux jours et une nuit à 9 h, en petit groupe avec un guide certifié (tout est inclus : guide, porteur, cuisinier, repas, matériel de camping, frais d'entrée du parc — réservé chez Sumatra Orangutan Explore, 2 400 000 roupies par personne). Une courte traversée de plantations d'hévéas, on franchit la porte du parc national classé à l'UNESCO, et souvent moins d'une heure de marche suffit pour les premiers orangs-outans. C'est ce premier jour que se font presque toutes les observations — cinq à neuf orangs-outans en général, plus des semnopithèques, des macaques à longue queue et des calaos. Déjeuner en forêt, arrivée au campement au bord de la rivière en milieu d'après-midi : baignade, dîner préparé par l'équipe.",
        iso: "2026-09-29",
        horaires: [
          { h: "09:00", quoi: "Départ du trek (2 jours / 1 nuit, tout inclus)" },
          { h: "Milieu d'après-midi", quoi: "Arrivée au campement au bord de la rivière, baignade, dîner" },
        ],
        alerte:
          "Chaussettes hautes contre les sangsues, surtout après une averse. Petit sac : eau, crème solaire, anti-moustique, batterie.",
        nuit: "Campement en jungle au bord de la rivière · ✅ inclus dans le trek",
        type: "aventure",
      },
      {
        date: "Mercredi 30 septembre",
        titre: "Deuxième jour de jungle et retour en rafting",
        resume:
          "Matinée de marche, puis descente de la rivière Bohorok en rafting (15 h-17 h) jusqu'au village.",
        details:
          "Réveil au son de la jungle — l'heure qui suit l'aube au campement est le meilleur moment pour la faune. Matinée de marche dans une forêt plus dense, baignade en rivière, puis retour spectaculaire au village par la descente de la rivière Bohorok en rafting (vers 15 h-17 h), la fin emblématique du trek. Retour au New SOE Lodge, douche bien méritée et soirée tranquille au bord de l'eau. Chaussettes hautes contre les sangsues, surtout après une averse. Le soir : préparer les sacs et caler la navette du lendemain vers l'aéroport.",
        iso: "2026-09-30",
        horaires: [
          { h: "Aube", quoi: "Le meilleur moment pour la faune, au campement" },
          { h: "15:00 – 17:00", quoi: "Retour au village en rafting sur la Bohorok" },
          { h: "Soir", quoi: "Sacs, et confirmer la navette de demain (départ 11 h 30 au plus tard)" },
        ],
        nuit: "New SOE Lodge, Bukit Lawang · ✅ réservé",
        type: "aventure",
      },
    ],
  },
  {
    titre: "Java — temples et volcans",
    fuseau: "Asia/Jakarta",
    detail: "1ᵉʳ — 6 octobre",
    jours: [
      {
        date: "Jeudi 1ᵉʳ octobre",
        titre: "De la jungle de Sumatra à Yogyakarta — vol direct l'après-midi",
        resume:
          "Navette jusqu'à l'aéroport de Medan, puis vol DIRECT Lion Air vers Yogyakarta (17 h 20 → 20 h 10) · ✅ vol réservé.",
        details:
          "Navette Bukit Lawang → aéroport de Kualanamu (Medan) à réserver — compter 3 à 4 heures de route, et viser large : le vol part à 17 h 20 et l'enregistrement ferme 45 minutes avant. Le vol est réservé : Lion Air JT963, Boeing 737-900, décollage de Kualanamu (KNO) à 17 h 20, arrivée à Yogyakarta (YIA) à 20 h 10 — deux heures cinquante, sans escale, aucun repas servi à bord (prévoir de quoi grignoter et de l'eau). Attention à l'aéroport d'arrivée : c'est YIA, le nouvel aéroport international de Kulon Progo, à 45-50 kilomètres du centre — compter 1 heure à 1 h 30 de route de nuit jusqu'à la villa (et non l'ancien aéroport JOG, tout proche du centre). Arrivée à la villa vers 21 h 30 - 22 h : prévenir Bohemian Jogja Villas de l'heure tardive et prévoir le dîner (ou un arrêt en route).",
        iso: "2026-10-01",
        horaires: [
          { h: "11:30", quoi: "Navette Bukit Lawang → aéroport de Kualanamu (3 à 4 h de route)" },
          { h: "15:30", quoi: "À l'aéroport · enregistrement fermé à 16 h 35" },
          { h: "17:20", quoi: "Lion Air JT963 → Yogyakarta" },
          { h: "20:10", quoi: "Arrivée YIA (à 45-50 km du centre) · 1 h à 1 h 30 de route" },
          { h: "~21:45", quoi: "Bohemian Jogja Villas — prévenir de l'heure tardive" },
        ],
        alerte:
          "Aucun repas à bord : prendre à manger et de l'eau avant. L'arrivée est à YIA (Kulon Progo), pas à l'ancien aéroport JOG.",
        lieux: [
          { nom: "Aéroport de Kualanamu", q: "Kualanamu International Airport" },
          { nom: "Aéroport YIA", q: "Yogyakarta International Airport" },
          { nom: "Bohemian Jogja Villas", q: "Bohemian Jogja Villas" },
        ],
        nuit: "Bohemian Jogja Villas, Yogyakarta · ✅ réservé",
        type: "vol",
      },
      {
        date: "Vendredi 2 octobre",
        titre: "Borobudur au créneau de 8 h 30 - 10 h, puis Prambanan",
        resume:
          "Montée sur le temple de Borobudur de 8 h 30 à 10 h · ✅ billets réservés (Goers, 2 × Foreigner Adult), puis le temple de Prambanan l'après-midi.",
        details:
          "Borobudur le matin — le plus grand temple bouddhiste du monde. Les billets de montée sur la structure sont réservés pour le créneau de 8 h 30 à 10 h (2 billets « Foreigner Adult » au nom de Monardo Franck, numéros V7F40-25E17A094 et V7F40-25E17A196, QR codes dans le lien t.goersapp.com reçu par WhatsApp — garder une capture d'écran hors ligne). Départ de la villa vers 7 h avec un chauffeur (environ une heure de route), passeports sur soi, au guichet 20-30 minutes avant le créneau : sandales et sarong sont fournis, la montée se fait en groupe accompagné, jusqu'à 10 h sur le monument, puis le parc et le musée à son rythme. L'après-midi, cap sur Prambanan, le grand ensemble de temples hindous aux flèches élancées et aux reliefs du Ramayana (à une heure de route vers l'est de Borobudur, trente minutes du centre de Yogyakarta ; billets à prendre sur place ou en ligne, non réservés pour l'instant). Vendredi est un jour de semaine sans vacances scolaires : affluence faible. Pas de réveil à 3 h — le lever de soleil n'a pas été retenu.",
        iso: "2026-10-02",
        horaires: [
          { h: "07:00", quoi: "Départ de la villa (≈ 1 h de route)" },
          { h: "08:00", quoi: "Guichet Borobudur : passeports + QR codes des 2 billets" },
          { h: "08:30 – 10:00", quoi: "Créneau de montée sur le temple, avec guide" },
          { h: "Après-midi", quoi: "Prambanan (billets sur place), retour villa" },
        ],
        alerte:
          "Luminosité de l'écran au maximum pour scanner les QR codes ; ils sont en captures dans « Billets », lisibles sans réseau.",
        lieux: [
          { nom: "Temple de Borobudur", q: "Candi Borobudur" },
          { nom: "Temple de Prambanan", q: "Candi Prambanan" },
        ],
        nuit: "Bohemian Jogja Villas, Yogyakarta · ✅ réservé",
        type: "aventure",
      },
      {
        date: "Samedi 3 octobre",
        titre: "Traversée de Java en train jusqu'à Malang",
        resume:
          "Malioboro Ekspres de 10 h 50 à 17 h 30, classe Executive, sièges 6C et 6D · ✅ billets réservés (booking 3E49U4B).",
        details:
          "Matinée tranquille, puis départ de la gare de Tugu Yogyakarta (Jl. Ps. Kembang 21, à dix minutes de Malioboro) à 10 h 50 avec le Malioboro Ekspres (train 170B), arrivée à la gare de Malang (Jl. Trunojoyo 10) vers 17 h 30. Billets réservés : classe Executive AC, voiture EKS-2, sièges 6C (Franck) et 6D (Agathe), booking 3E49U4B, 41,51 € par personne. Attention, le e-ticket n'est pas une carte d'embarquement : à la gare, l'imprimer à la borne libre-service avec le code de réservation et les passeports (ceux saisis à l'achat : 22IK82830 et 21DI57178), et être là 60 minutes avant le départ — donc partir de la villa vers 9 h 30. Une valise de 20 kg par personne, on peut apporter de quoi manger. Six heures et demie de paysages, rizières et volcans. Installation au Shalimar Boutique Hotel, beau bâtiment colonial restauré, et dîner dans le quartier.",
        iso: "2026-10-03",
        horaires: [
          { h: "09:30", quoi: "Départ de la villa vers la gare de Tugu" },
          { h: "09:50", quoi: "Borne KAI : code 3E49U4B + passeports → cartes d'embarquement" },
          { h: "10:50", quoi: "Malioboro Ekspres 170B, Executive, sièges 6C et 6D" },
          { h: "~17:30", quoi: "Arrivée gare de Malang → Shalimar Boutique Hotel" },
        ],
        alerte:
          "Le e-ticket n'est pas une carte d'embarquement : elle s'imprime à la borne de la gare, 60 min avant le départ.",
        lieux: [
          { nom: "Gare de Tugu Yogyakarta", q: "Stasiun Tugu Yogyakarta" },
          { nom: "Gare de Malang", q: "Stasiun Malang" },
          { nom: "Shalimar Boutique Hotel", q: "Shalimar Boutique Hotel Malang" },
        ],
        nuit: "Shalimar Boutique Hotel, Malang · ✅ réservé",
        type: "route",
      },
      {
        date: "Dimanche 4 octobre",
        titre: "La cascade de Tumpak Sewu",
        resume:
          "Excursion à la journée avec chauffeur privé : panorama sur la cascade, puis descente au pied du rideau d'eau.",
        details:
          "Départ tôt le matin avec un chauffeur privé (environ deux heures et demie de route vers le sud). D'abord la vue depuis le panorama supérieur sur Tumpak Sewu, un rideau d'eau de 120 mètres en fer à cheval surnommé « les mille cascades », puis descente au pied de la cascade par des escaliers et des échelles de bambou raides et glissants : chaussures à bonne adhérence indispensables, sac étanche pour le téléphone, on accepte d'être trempés. Option : la grotte voisine de Goa Tetes. Retour à Malang en milieu d'après-midi : repos, massage éventuel, dîner tranquille.",
        iso: "2026-10-04",
        horaires: [
          { h: "~06:00", quoi: "Départ avec le chauffeur privé (≈ 2 h 30)" },
          { h: "Matin", quoi: "Panorama, puis descente au pied de la cascade" },
          { h: "Milieu d'après-midi", quoi: "Retour à Malang, repos" },
        ],
        alerte:
          "Escaliers et échelles de bambou raides et glissants : chaussures à bonne adhérence, sac étanche pour le téléphone.",
        lieux: [
          { nom: "Tumpak Sewu", q: "Tumpak Sewu Waterfall" },
        ],
        nuit: "Shalimar Boutique Hotel, Malang · ✅ réservé",
        type: "aventure",
      },
      {
        date: "Lundi 5 octobre",
        titre: "Montée vers le mont Bromo (en autonomie)",
        resume:
          "Matinée libre à Malang, puis transfert l'après-midi vers le village de Cemoro Lawang, au bord de la caldeira.",
        details:
          "Matinée de pause à Malang. En début d'après-midi, transfert vers Cemoro Lawang, le village perché à 2 200 mètres au bord de la caldeira (environ trois heures de route). On fait le Bromo EN AUTONOMIE, sans tour organisé : on loge à Cemoro Lawang, le village le plus proche du point de vue, au Bromo B&B (recommandé par des amis, confort très simple mais idéalement situé, le staff donne plein de bons tuyaux). Important : avoir du liquide sur soi, il n'y a pas de distributeur là-haut. Préparer les vêtements chauds (5 à 10 degrés à l'aube : bonnet, polaire, coupe-vent), dîner tôt, coucher vers 20 h — le réveil sonne à 3 h. Vérifier que le billet électronique du parc est bien sur les téléphones : nominatif (numéros de passeport), obligatoire, acheté à l'avance sur bromotenggersemeru.id, 255 000 roupies par personne.",
        iso: "2026-10-05",
        horaires: [
          { h: "Matin", quoi: "Libre à Malang — retirer des espèces (aucun DAB au Bromo)" },
          { h: "~13:00", quoi: "Transfert vers Cemoro Lawang (≈ 3 h)" },
          { h: "Soir", quoi: "Vêtements chauds sortis, billet du parc sur le téléphone, dîner tôt" },
          { h: "20:00", quoi: "Coucher — réveil à 3 h" },
        ],
        alerte:
          "Pas de distributeur à Cemoro Lawang. Le billet électronique du parc est nominatif et obligatoire (bromotenggersemeru.id).",
        lieux: [
          { nom: "Bromo B&B, Cemoro Lawang", q: "Bromo B&B Cemoro Lawang" },
        ],
        nuit: "Bromo B&B, Cemoro Lawang · ✅ réservé",
        type: "route",
      },
      {
        date: "Mardi 6 octobre",
        titre: "Lever de soleil sur le mont Bromo, puis route vers l'est",
        resume:
          "Marche de nuit jusqu'au point de vue pour l'aube, puis six à sept heures de route vers le Jiwa Jawa Resort Ijen, à la pointe est de Java.",
        details:
          "Réveil à 3 h. Deux options pour le point de vue : partir à pied depuis l'hôtel (environ 1 h 45 de marche — on part tôt pour arriver les premiers et sécuriser son spot), ou prendre une moto-taxi qui dépose au départ officiel (puis ~1 h de marche). Point GPS du belvédère donné par les amis. Lever du soleil sur le Bromo, le Batok et le Semeru émergeant de la mer de nuages. Pour monter aussi sur le cratère : le patron de l'hôtel indique un chemin gratuit, ou une moto-taxi mène au pied du cratère (prévoir l'entrée village + parc, ~12-15 euros par personne, en liquide). Retour à la maison d'hôtes vers 8 h 30, petit déjeuner, puis longue route (taxi à réserver) vers l'est de Java : six à sept heures avec des pauses jusqu'au Jiwa Jawa Resort Ijen, posé à Licin dans les plantations, aux portes du volcan. Dîner et vraie nuit complète : pas de réveil nocturne, l'Ijen se fera en douceur demain matin.",
        iso: "2026-10-06",
        horaires: [
          { h: "03:00", quoi: "Réveil — bonnet, polaire, coupe-vent, frontale" },
          { h: "03:15", quoi: "À pied jusqu'au point de vue (≈ 1 h 45) ou moto-taxi + 1 h" },
          { h: "~05:30", quoi: "Lever du soleil sur Bromo, Batok et Semeru" },
          { h: "08:30", quoi: "Retour au B&B, petit déjeuner" },
          { h: "~10:00", quoi: "Taxi vers le Jiwa Jawa Resort Ijen (6 à 7 h avec pauses)" },
        ],
        alerte:
          "Entrée village + parc en liquide (≈ 12-15 € par personne) si vous montez au cratère. Point GPS du belvédère : à noter ici avant le départ.",
        lieux: [
          { nom: "Penanjakan (point de vue Bromo)", q: "Penanjakan 1 Bromo viewpoint" },
          { nom: "Jiwa Jawa Resort Ijen", q: "Jiwa Jawa Resort Ijen Licin" },
        ],
        nuit: "Jiwa Jawa Resort Ijen (Licin, Banyuwangi) · ✅ réservé",
        type: "aventure",
      },
    ],
  },
  {
    titre: "Bali — le nord, puis Canggu",
    fuseau: "Asia/Makassar",
    detail: "7 — 10 octobre",
    jours: [
      {
        date: "Mercredi 7 octobre",
        titre: "Le lac turquoise de l'Ijen au matin, ferry vers Bali l'après-midi",
        resume:
          "Montée tranquille pour le plus grand lac acide du monde, puis traversée en ferry et route jusqu'à Lovina, sur la côte nord de Bali.",
        details:
          "Choix assumé sur l'Ijen : on saute le feu bleu et sa descente nocturne dans les fumées de soufre — instable en 2026 (fermé par intermittence pour travaux), polarisant, et qui imposerait un réveil à minuit et demie. On garde le vrai joyau : le lac turquoise, le plus grand lac acide du monde (pH 0,13, couleur irréelle), accessible depuis la crête. Après une nuit complète, départ vers 6-7 heures pour le parking de Paltuding (environ une heure de route), puis montée régulière de 3 kilomètres (environ deux heures) dans la fraîcheur du matin, avant la grosse chaleur. Arrivée sur la crête en milieu de matinée : vue plongeante sur le lac fumant et ses mineurs de soufre, panorama sur les volcans alentour. Redescente vers midi, puis cap sur Ketapang pour le ferry. Le ferry public de Ketapang vers Gilimanuk fonctionne vingt-quatre heures sur vingt-quatre, départ toutes les vingt à trente minutes, traversée de trente à quarante-cinq minutes. Important depuis décembre 2025 : le billet s'achète en ligne sur l'application Ferizy AVANT d'approcher du port — un blocage par géolocalisation empêche l'achat à moins de 2,6 kilomètres du port, et il n'y a plus de guichet. À acheter la veille au soir, ou à faire prendre en charge par le chauffeur. À l'arrivée, on avance les montres d'une heure : Bali vit à l'heure de l'Indonésie centrale. Puis route vers Lovina avec un chauffeur privé, deux heures et demie à trois heures le long de la côte nord. Journée longue et bien remplie — l'arrivée se fait en début de soirée, dîner tranquille et au lit.",
        iso: "2026-10-07",
        horaires: [
          { h: "06:30", quoi: "Départ pour le parking de Paltuding (≈ 1 h)" },
          { h: "07:30 – 09:30", quoi: "Montée régulière (3 km) jusqu'à la crête, vue sur le lac" },
          { h: "~12:00", quoi: "Redescente, route vers le port de Ketapang" },
          { h: "Après-midi", quoi: "Ferry Ketapang → Gilimanuk (billet Ferizy acheté la veille) · montres + 1 h" },
          { h: "Début de soirée", quoi: "Route (2 h 30 - 3 h) → Ju'blu Hotel, Lovina" },
        ],
        alerte:
          "La journée la plus chargée du voyage. Deux chauffeurs à caler : un côté Java toute la journée, un qui attend à Gilimanuk. Le billet du ferry s'achète sur l'appli Ferizy AVANT d'être à moins de 2,6 km du port.",
        lieux: [
          { nom: "Parking de Paltuding (Ijen)", q: "Paltuding Ijen" },
          { nom: "Port de Ketapang", q: "Pelabuhan Ketapang Banyuwangi" },
          { nom: "Ju'blu Hotel, Lovina", q: "Ju'blu Hotel Lovina" },
        ],
        nuit: "Ju'blu Hotel, Lovina · ✅ réservé (par Agathe)",
        type: "aventure",
      },
      {
        date: "Jeudi 8 octobre",
        titre: "La cascade de Sekumpul, puis les hauteurs de Munduk",
        resume:
          "Matinée à la cascade de Sekumpul, puis check-in l'après-midi au Munduk Moding Plantation pour la collaboration.",
        details:
          "Matinée à la cascade de Sekumpul, à une quarantaine de minutes à l'est de Lovina : la plus spectaculaire de Bali, deux rideaux d'eau jumeaux de 80 mètres au fond d'une vallée de jungle. Accès par un long escalier (compter 300 à 500 marches à la descente comme à la remontée, sol glissant : chaussures à bonne adhérence, maillot et sac étanche). Y aller tôt pour la lumière et le calme. Ensuite, remontée vers les hauteurs de Munduk (environ une heure de route, plantations de café et de clous de girofle, air frais à 900 mètres) et check-in l'après-midi au Munduk Moding Plantation, dans le cadre de la collaboration. Fin de journée sur place : la fameuse piscine à débordement au-dessus de la vallée, coucher de soleil sur la mer au loin, dîner au resort. Il fait nettement plus frais qu'en bas — prévoir une petite laine.",
        iso: "2026-10-08",
        horaires: [
          { h: "Matin tôt", quoi: "Cascade de Sekumpul (≈ 40 min de route, 300 à 500 marches)" },
          { h: "Après-midi", quoi: "Montée vers Munduk (≈ 1 h), check-in au Munduk Moding Plantation" },
          { h: "Soir", quoi: "Piscine à débordement, coucher de soleil, dîner au resort — petite laine" },
        ],
        alerte:
          "Sol glissant à Sekumpul : chaussures à bonne adhérence, maillot, sac étanche.",
        lieux: [
          { nom: "Cascade de Sekumpul", q: "Sekumpul Waterfall" },
          { nom: "Munduk Moding Plantation", q: "Munduk Moding Plantation" },
        ],
        nuit: "Munduk Moding Plantation · ✅ collaboration",
        type: "aventure",
      },
      {
        date: "Vendredi 9 octobre",
        titre: "Descente de Munduk vers Canggu",
        resume:
          "Matinée tranquille au resort, départ en début d'après-midi, arrivée à Canggu en fin d'après-midi, dîner en ville.",
        details:
          "Matinée libre au Munduk Moding Plantation pour profiter du lieu (piscine, plantation, éventuelle balade jusqu'aux cascades de Munduk juste à côté). Départ en début d'après-midi vers Canggu : compter deux heures et demie à trois heures de route en descendant par les lacs et Bedugul, un peu plus si le trafic du sud est chargé. Arrivée à l'hôtel en fin d'après-midi, installation, puis soirée restaurant à Canggu (table à réserver — le quartier se remplit vite le vendredi soir). Deux nuits posées commencent avant Komodo.",
        iso: "2026-10-09",
        horaires: [
          { h: "Matin", quoi: "Libre au resort (piscine, plantation, cascades de Munduk)" },
          { h: "~13:00", quoi: "Départ vers Canggu (2 h 30 - 3 h par Bedugul)" },
          { h: "Fin d'après-midi", quoi: "Installation à l'hôtel de Canggu" },
          { h: "Soir", quoi: "Restaurant à Canggu (table réservée)" },
        ],
        alerte:
          "L'hôtel de Canggu pour ce soir et demain reste à réserver.",
        nuit: "Hôtel à Canggu · ‼️ à réserver",
        type: "route",
      },
      {
        date: "Samedi 10 octobre",
        titre: "Canggu — journée repos + préparatifs Komodo",
        resume:
          "La seule journée entière sans obligation avant la croisière : plage, boutiques, massage — et le soir, le petit sac pour Komodo.",
        details:
          "Journée à la carte dans le quartier le plus animé de Bali : grasse matinée, plage de Berawa ou Echo Beach, massage, balade dans les concept-stores, coucher de soleil au beach club et dîner au restaurant. Le soir, on prépare le petit sac de Komodo (maillots, crème solaire, lampe, médicament contre le mal de mer, chargeur, passeports, une tenue sèche pour le vol) : les grosses valises restent à Bali chez Jasmine pendant toute l'escapade, du 11 au 14 — on voyage léger, bagage cabine seulement, ce qui simplifie aussi l'enchaînement bateau-avion du 14. Retrait d'espèces avant Labuan Bajo (les distributeurs s'y vident le week-end : frais de parc éventuels et pourboires sont souvent en liquide — la croisière, elle, est déjà payée). Pas de réveil matinal : le vol de demain est à 15 h 45.",
        iso: "2026-10-10",
        horaires: [
          { h: "Journée", quoi: "Libre : plage de Berawa ou Echo Beach, massage, boutiques" },
          { h: "Après-midi", quoi: "Retirer des espèces pour Labuan Bajo (frais de parc éventuels, pourboires)" },
          { h: "Soir", quoi: "Petit sac de Komodo ; grosses valises déposées chez Jasmine" },
        ],
        alerte:
          "Pas de réveil matinal demain : le vol est à 15 h 45.",
        nuit: "Hôtel à Canggu · ‼️ à réserver",
        type: "repos",
      },
    ],
  },
  {
    titre: "Komodo — la croisière",
    fuseau: "Asia/Makassar",
    detail: "11 — 14 octobre",
    jours: [
      {
        date: "Dimanche 11 octobre",
        titre: "Vol de l'après-midi vers Labuan Bajo — nuit tampon pré-croisière",
        resume:
          "Matinée libre à Canggu, vol AirAsia 15 h 45 → 16 h 55 · ✅ réservé (réf. PFIPUG), soirée sur le front de mer la veille de l'embarquement.",
        details:
          "Grasse matinée et dernier café à Canggu. Départ de l'hôtel vers 12 h 45 - 13 h : compter environ une heure jusqu'à l'aéroport de Denpasar (terminal domestique), pour être sur place deux heures avant. Vol AirAsia direct pour Labuan Bajo, sur l'île de Florès : décollage 15 h 45, atterrissage 16 h 55 (1 h 10, référence PFIPUG, enregistrement en ligne possible dès 14 jours avant). Pas de décalage horaire entre Bali et Florès. Installation à la Casa de Capulet (déjà réservée), à un quart d'heure de l'aéroport, puis coucher de soleil sur la baie et dîner de fruits de mer sur le front de mer. Confirmer par WhatsApp avec Travass Life l'heure et le lieu du rendez-vous du lendemain matin (trip prévu à 8 h) et préparer le petit sac de croisière. Arriver la veille est exigé par Travass — c'est la nuit tampon du plan.",
        iso: "2026-10-11",
        horaires: [
          { h: "Matin", quoi: "Libre à Canggu" },
          { h: "12:45", quoi: "Départ pour l'aéroport de Denpasar (≈ 1 h), terminal domestique" },
          { h: "15:45", quoi: "AirAsia → Labuan Bajo (réf. PFIPUG)" },
          { h: "16:55", quoi: "Arrivée, 15 min → Casa de Capulet" },
          { h: "Soir", quoi: "WhatsApp Travass : lieu du rendez-vous de demain 8 h · coucher de soleil sur la baie" },
        ],
        lieux: [
          { nom: "Aéroport de Denpasar", q: "Ngurah Rai International Airport" },
          { nom: "Casa de Capulet, Labuan Bajo", q: "Casa de Capulet Labuan Bajo" },
        ],
        nuit: "Casa de Capulet, Labuan Bajo · ✅ réservé",
        type: "vol",
      },
      {
        date: "Lundi 12 octobre",
        titre: "Croisière Komodo — jour 1 : embarquement sur l'Andalucia",
        resume:
          "Rendez-vous à 8 h avec Travass Life, embarquement sur le phinisi Andalucia en cabine VIP Room · ✅ croisière payée (commande 14875). Première après-midi de navigation.",
        details:
          "Départ à 8 h (trip date de la commande) : Travass Life précisera par WhatsApp (+62 811-3828-2828) si la prise en charge se fait à la Casa de Capulet ou directement au port. Embarquement sur l'Andalucia, phinisi (voilier traditionnel en bois) de la catégorie « Comfortable Semi-Deluxe », en cabine VIP Room privée, climatisée, avec salle de bain. Croisière partagée de trois jours et deux nuits, payée en totalité (18 892 950 IDR pour deux, ≈ 915 €, via Xendit le 6 août). Première après-midi de navigation et de snorkeling (souvent Kelor, Rinca ou Kalong et ses chauves-souris au coucher du soleil), mouillage pour la nuit. Point à vérifier avant de partir : si les frais du parc national (permis nominatif SiORA, grille 2026 à 375 000 IDR par personne et par jour + ranger) ne sont pas inclus, ils se règlent en espèces — d'où le retrait à Bali.",
        iso: "2026-10-12",
        horaires: [
          { h: "08:00", quoi: "Rendez-vous Travass Life, embarquement sur l'Andalucia" },
          { h: "Après-midi", quoi: "Navigation, premier snorkeling, coucher de soleil" },
          { h: "Nuit", quoi: "Au mouillage, cabine VIP Room" },
        ],
        alerte:
          "Passeports, mail de commande n° 14875, espèces si les frais de parc ne sont pas inclus.",
        nuit: "À bord de l'Andalucia, cabine VIP Room · ✅ réservé",
        type: "bateau",
      },
      {
        date: "Mardi 13 octobre",
        titre: "Croisière — jour 2 : Padar, les dragons et les mantas",
        resume:
          "Lever de soleil sur l'île de Padar, Pink Beach, les dragons de Komodo, puis la nage avec les raies mantas.",
        details:
          "La grande journée. Lever de soleil sur l'île de Padar et son panorama sur les trois baies, l'un des plus célèbres d'Indonésie. Puis Pink Beach et son sable rosé, marche sur l'île de Komodo à la rencontre des dragons (accompagnés d'un garde du parc), nage avec les raies mantas à Manta Point, et banc de sable de Taka Makassar. Soirée et nuit à bord au mouillage.",
        iso: "2026-10-13",
        horaires: [
          { h: "Aube", quoi: "Montée sur l'île de Padar, vue sur les trois baies" },
          { h: "Matin", quoi: "Pink Beach, puis les dragons sur l'île de Komodo avec un garde" },
          { h: "Après-midi", quoi: "Raies mantas à Manta Point, banc de sable de Taka Makassar" },
          { h: "Soir", quoi: "Enregistrement en ligne AirAsia (PFIPUG) pour demain si le réseau passe" },
        ],
        alerte:
          "Chaussures fermées pour Padar et les dragons ; rester derrière le garde.",
        nuit: "À bord de l'Andalucia, cabine VIP Room · ✅ réservé",
        type: "bateau",
      },
      {
        date: "Mercredi 14 octobre",
        titre: "Croisière — jour 3 : retour au port, puis vol du soir vers Bali",
        resume:
          "Dernière baignade, retour au port de Labuan Bajo vers 12 h, vol AirAsia 17 h 25 → 18 h 35 · ✅ réservé (réf. PFIPUG), nuit à Canggu.",
        details:
          "Dernière matinée en mer (snorkeling, tortues selon le programme), puis retour au port de Labuan Bajo vers 12 h, comme confirmé par Travass Life. Cinq heures devant soi et rien qu'un petit sac chacun (les valises sont chez Jasmine à Bali) : déjeuner de fruits de mer sur le front de mer, une douche à trouver sur place (demander à la Casa de Capulet ou à Travass), puis départ pour l'aéroport vers 15 h 30. L'aéroport de Komodo est à dix minutes du port : décollage AirAsia à 17 h 25 (enregistrement fermé 45 minutes avant, le faire en ligne la veille si le réseau passe), atterrissage à Denpasar à 18 h 35, puis environ une heure de route jusqu'à Canggu — hôtel vers 20 h, longue douche et dîner tardif. On ne dort plus à Labuan Bajo ce soir-là : la nuit du 14 se passe à Bali. Si le volcan Lewotobi clouait les avions au sol, le plan B serait de reprendre une chambre sur place et de décaler le vol au lendemain.",
        iso: "2026-10-14",
        horaires: [
          { h: "Matin", quoi: "Dernier snorkeling" },
          { h: "~12:00", quoi: "Retour au port de Labuan Bajo — déjeuner, douche" },
          { h: "15:30", quoi: "Départ pour l'aéroport de Komodo (10 min) · enregistrement fermé 16 h 40" },
          { h: "17:25", quoi: "AirAsia → Denpasar (18 h 35)" },
          { h: "~20:00", quoi: "Arrivée à Canggu" },
        ],
        alerte:
          "La nuit de ce soir à Canggu reste à réserver (le Plawa Laguna commence demain).",
        lieux: [
          { nom: "Aéroport de Komodo", q: "Komodo Airport Labuan Bajo" },
        ],
        nuit: "Canggu · ‼️ nuit du 14 à réserver (le Plawa Laguna commence le 15 — demander une nuit de plus)",
        type: "bateau",
      },
    ],
  },
  {
    titre: "Bali — le final à Canggu",
    fuseau: "Asia/Makassar",
    detail: "14 — 16 octobre",
    jours: [
      {
        date: "Jeudi 15 octobre",
        titre: "Première journée complète du final à Canggu",
        resume:
          "Aucun transport aujourd'hui : plage, piscine et beach club, installation au Plawa Laguna pour les deux dernières nuits.",
        details:
          "Réveil sans réveil, après trois jours en mer. Installation au Plawa Laguna Boutique Hotel & Suites (réservé pour les nuits du 15 et du 16 — si la nuit du 14 est prise ailleurs, changer d'hôtel dans la matinée). Journée détente : plage de Berawa ou Echo Beach, piscine, massage pour dérouiller les jambes, et le soir un beach club au coucher du soleil ou un bon restaurant. Envie d'un dîner de poissons grillés les pieds dans le sable ? La baie de Jimbaran est à ~40 minutes si l'occasion se présente.",
        iso: "2026-10-15",
        horaires: [
          { h: "Matin", quoi: "Installation au Plawa Laguna (deux nuits)" },
          { h: "Journée", quoi: "Plage, piscine, massage" },
          { h: "Soir", quoi: "Beach club au coucher du soleil ou dîner de poissons à Jimbaran (≈ 40 min)" },
        ],
        lieux: [
          { nom: "Plawa Laguna Boutique Hotel & Suites", q: "Plawa Laguna Boutique Hotel Canggu" },
        ],
        nuit: "Plawa Laguna Boutique Hotel & Suites, Canggu · ✅ réservé (par Agathe)",
        type: "repos",
      },
      {
        date: "Vendredi 16 octobre",
        titre: "Dernière journée complète à Bali",
        resume:
          "Plage, piscine, dernier massage, derniers achats — et valises tranquilles en fin de journée.",
        details:
          "Dernière journée entière, zéro obligation : plage, piscine, dernier massage en duo, derniers achats dans les boutiques de Canggu. En fin de journée, boucler les valises et caler le transfert vers l'aéroport pour demain matin (compter ~1 h de route depuis Canggu). Demander un petit déjeuner servi tôt. Dernier coucher de soleil sur la côte.",
        iso: "2026-10-16",
        horaires: [
          { h: "Journée", quoi: "Libre : plage, piscine, derniers achats" },
          { h: "Fin de journée", quoi: "Valises ; confirmer le transfert de demain 9 h et un petit déjeuner tôt" },
        ],
        nuit: "Plawa Laguna Boutique Hotel & Suites, Canggu · ✅ réservé (par Agathe)",
        type: "repos",
      },
    ],
  },
  {
    titre: "Le retour",
    fuseau: "Europe/Luxembourg",
    detail: "17 — 18 octobre",
    jours: [
      {
        date: "Samedi 17 octobre",
        titre: "Décollage de Bali",
        resume:
          "Départ de Canggu vers 10 h, envol de Denpasar à 13 h 15 vers Singapour puis Munich.",
        details:
          "Départ de l'hôtel vers 10 h direction l'aéroport : depuis Canggu, compter environ une heure de route (un peu plus avec le trafic), soit une arrivée vers 11 h — deux heures et quart avant le décollage, ça passe, mais partir plutôt vers 9 h donne les trois heures d'avance recommandées sur un vol international un samedi. Décollage à 13 h 15 vers Singapour (vol opéré par Singapore Airlines). L'escale à Changi dure 6 h 45 : le temps de dîner et d'aller voir la grande cascade intérieure du Jewel. Puis vol de nuit Lufthansa vers Munich.",
        iso: "2026-10-17",
        horaires: [
          { h: "09:00", quoi: "Départ de Canggu (≈ 1 h de route)" },
          { h: "10:00", quoi: "Aéroport de Denpasar, 3 h avant l'international" },
          { h: "13:15", quoi: "SQ 9768 → Singapour (16 h 00)" },
          { h: "16:00 – 22:45", quoi: "Escale à Changi : dîner, cascade du Jewel" },
          { h: "22:45", quoi: "LH 769 → Munich, nuit en vol" },
        ],
        lieux: [
          { nom: "Aéroport de Denpasar", q: "Ngurah Rai International Airport" },
        ],
        nuit: "En vol, entre Singapour et Munich",
        type: "vol",
      },
      {
        date: "Dimanche 18 octobre",
        titre: "Retour à Luxembourg",
        resume:
          "Correspondance au petit matin à Munich, atterrissage à Luxembourg à 8 h 55.",
        details:
          "Correspondance au petit matin à Munich (vol LH 2316) puis atterrissage à Luxembourg à 8 h 55 — à la maison pour le petit déjeuner du dimanche, avec la journée entière pour récupérer. Bilan : vingt nuits sur place, les orangs-outans de Sumatra, Borobudur et Prambanan, la cascade de Tumpak Sewu, l'aube sur le mont Bromo, le lac turquoise du Kawah Ijen, la cascade de Sekumpul et les hauteurs de Munduk, les dragons et les raies mantas de Komodo, et cinq nuits à Canggu. Une journée de canapé est officiellement prescrite.",
        iso: "2026-10-18",
        horaires: [
          { h: "05:15", quoi: "Arrivée Munich" },
          { h: "07:50", quoi: "LH 2316 → Luxembourg" },
          { h: "08:55", quoi: "À la maison" },
        ],
        nuit: "À la maison",
        type: "vol",
      },
    ],
  },
];

export const croisiere = {
  cadre:
    "Réservée et payée : trois jours et deux nuits à bord de l'Andalucia, un phinisi (voilier traditionnel en bois) de Travass Life, en cabine VIP Room privée, climatisée, avec salle de bain. Départ de Labuan Bajo le lundi 12 octobre à 8 h, retour au port le mercredi 14 vers 12 h, puis vol pour Bali à 17 h 25.",
  fiche: [
    ["Opérateur", "Travass Life — WhatsApp +62 811-3828-2828 (Admin 02, 8 h - 21 h)"],
    ["Bateau", "Andalucia · catégorie « Comfortable Semi-Deluxe » · croisière partagée"],
    ["Cabine", "VIP Room — privée, climatisée, salle de bain"],
    ["Départ", "Lundi 12 octobre · 8 h · lieu de rendez-vous à confirmer (hôtel ou port)"],
    ["Retour", "Mercredi 14 octobre · vers 12 h au port de Labuan Bajo"],
    ["Commande", "n° 14875 · 18 892 950 IDR (≈ 915 € pour deux) · payée le 6 août via Xendit"],
    ["Bagages", "Un petit sac cabine chacun — les valises sont chez Jasmine à Bali"],
  ],
  programme: [
    "Jour 1 — lundi 12 : embarquement le matin, navigation, premier snorkeling (souvent Kelor ou Rinca), coucher de soleil avec les chauves-souris de l'île de Kalong, nuit au mouillage.",
    "Jour 2 — mardi 13 : lever de soleil sur l'île de Padar (la vue sur les trois baies), Pink Beach, marche avec les dragons sur l'île de Komodo accompagnés d'un garde, nage avec les raies mantas à Manta Point, banc de sable de Taka Makassar, nuit à bord.",
    "Jour 3 — mercredi 14 : dernier snorkeling le matin (tortues selon le programme), retour au port vers 12 h.",
  ],
  aPrendre: [
    "Passeports (permis du parc nominatif), le mail de commande n° 14875 sur le téléphone, espèces pour les frais de parc s'ils ne sont pas inclus et pour les pourboires de l'équipage.",
    "Maillots, crème solaire résistante à l'eau, casquette, lunettes, lampe frontale, médicament contre le mal de mer, chargeur et batterie externe, une tenue sèche pour le vol du 14.",
    "Masque et tuba personnels si vous y tenez (le bateau en prête), chaussures fermées pour la marche avec les dragons et la montée de Padar, serviette légère.",
  ],
  liens: [
    { label: "💬 WhatsApp Travass", href: "https://wa.me/6281138282828" },
    { label: "🗺️ Port de Labuan Bajo", href: "https://www.google.com/maps/search/?api=1&query=Pelabuhan+Labuan+Bajo" },
    { label: "🗺️ Aéroport de Komodo", href: "https://www.google.com/maps/search/?api=1&query=Komodo+Airport+Labuan+Bajo" },
  ],
  aConfirmer: [
    "Le lieu et l'heure exacts du rendez-vous du lundi 12 à 8 h.",
    "Si les frais du parc national et le permis SiORA sont inclus dans la commande — sinon, le montant à prévoir en espèces (grille 2026 : 375 000 IDR par personne et par jour, plus le garde).",
    "Que les dragons se voient bien sur l'île de Komodo, et que le retour du 14 vers 12 h tient : le vol décolle à 17 h 25.",
    "Règle de sécurité : pas de navigation de nuit dans le parc (interdite depuis janvier 2026), gilets et radeau à bord. Signaler tout problème de cabine dès l'embarquement.",
  ],
};

// ─── Hébergements ────────────────────────────────────────────

export type Hebergement = {
  nom: string;
  ville: string;
  nuits: string[];
  statut: "✅ réservé" | "🤝 collaboration" | "‼️ à réserver";
  reservePar?: string;
  q: string;
  ref?: string;
  tel?: string;
  note?: string;
};

export const hebergements: Hebergement[] = [
  { nom: "JW Marriott Hotel Medan", ville: "Medan", nuits: ["2026-09-27"], statut: "✅ réservé", q: "JW Marriott Hotel Medan", note: "Taxi ≈ 1 h depuis Kualanamu. Prise en charge SOE le lendemain à 11 h dans le hall." },
  { nom: "New SOE Lodge", ville: "Bukit Lawang", nuits: ["2026-09-28", "2026-09-30"], statut: "✅ réservé", reservePar: "Sumatra Orangutan Explore", q: "New SOE Lodge Bukit Lawang", note: "Family Room à l'étage · acompte versé, solde du trek 4 629 000 IDR en espèces à l'arrivée." },
  { nom: "Bohemian Jogja Villas", ville: "Yogyakarta", nuits: ["2026-10-01", "2026-10-02"], statut: "✅ réservé", q: "Bohemian Jogja Villas Yogyakarta", note: "Arrivée tardive le 1er (≈ 21 h 45) : prévenir." },
  { nom: "Shalimar Boutique Hotel", ville: "Malang", nuits: ["2026-10-03", "2026-10-04"], statut: "✅ réservé", q: "Shalimar Boutique Hotel Malang", note: "Bâtiment colonial restauré, à 10 min de la gare." },
  { nom: "Bromo B&B", ville: "Cemoro Lawang", nuits: ["2026-10-05"], statut: "✅ réservé", q: "Bromo B&B Cemoro Lawang", note: "Confort simple, idéalement placé. Espèces uniquement, pas de DAB." },
  { nom: "Jiwa Jawa Resort Ijen", ville: "Licin, Banyuwangi", nuits: ["2026-10-06"], statut: "✅ réservé", q: "Jiwa Jawa Resort Ijen", note: "Dans les plantations, aux portes du volcan. Acheter le ferry Ferizy le soir même." },
  { nom: "Ju'blu Hotel", ville: "Lovina", nuits: ["2026-10-07"], statut: "✅ réservé", reservePar: "Agathe", q: "Ju'blu Hotel Lovina" },
  { nom: "Munduk Moding Plantation", ville: "Munduk", nuits: ["2026-10-08"], statut: "🤝 collaboration", q: "Munduk Moding Plantation", note: "Check-in l'après-midi, dans le cadre de la collaboration." },
  { nom: "Hôtel à Canggu (Berawa ou Echo Beach)", ville: "Canggu", nuits: ["2026-10-09", "2026-10-10"], statut: "‼️ à réserver", q: "Canggu Bali" },
  { nom: "Casa de Capulet", ville: "Labuan Bajo", nuits: ["2026-10-11"], statut: "✅ réservé", q: "Casa de Capulet Labuan Bajo", note: "À 15 min de l'aéroport. La nuit du 14 est abandonnée (vérifier l'annulation) ; leur demander une douche l'après-midi du 14." },
  { nom: "Hôtel à Canggu — nuit du retour de Komodo", ville: "Canggu", nuits: ["2026-10-14"], statut: "‼️ à réserver", q: "Plawa Laguna Boutique Hotel Canggu", note: "Demander d'abord au Plawa Laguna d'ajouter une nuit avant celles du 15 et du 16." },
  { nom: "Plawa Laguna Boutique Hotel & Suites", ville: "Canggu", nuits: ["2026-10-15", "2026-10-16"], statut: "✅ réservé", reservePar: "Agathe", q: "Plawa Laguna Boutique Hotel Canggu", note: "Transfert vers l'aéroport le 17 à 9 h, petit déjeuner tôt à demander." },
];

// ─── Pratique : contacts, urgences, espèces, fuseaux, mots ───

export type Contact = {
  nom: string;
  role: string;
  whatsapp?: string;
  tel?: string;
  email?: string;
  note?: string;
};

export const contacts: Contact[] = [
  { nom: "Travass Life (Admin 02)", role: "Croisière Komodo — Andalucia, commande 14875", whatsapp: "6281138282828", email: "hello@travass.life", note: "Ouvert 8 h - 21 h. Autre numéro : +62 811-3818-808." },
  { nom: "Sumatra Orangutan Explore", role: "Trek, lodge, voiture Medan ↔ Bukit Lawang, navette aéroport du 1er", note: "Numéro WhatsApp à compléter depuis la confirmation de réservation." },
  { nom: "KAI — service client", role: "Train Yogyakarta → Malang, booking 3E49U4B", whatsapp: "628111211121", tel: "+628111211121", email: "cs@kai.id" },
  { nom: "Jasmine", role: "Garde les valises à Bali du 11 au 14", note: "Numéro et adresse à compléter." },
  { nom: "Bohemian Jogja Villas", role: "Prévenir de l'arrivée tardive le 1er octobre", note: "Numéro à compléter depuis la réservation." },
];

export const urgences = [
  { nom: "Urgences (numéro unique)", tel: "112" },
  { nom: "Police", tel: "110" },
  { nom: "Ambulance", tel: "118" },
  { nom: "Secours en mer (Basarnas)", tel: "115" },
  { nom: "Ambassade de France à Jakarta", tel: "+622123557600", note: "Jl. M.H. Thamrin 20 — permanence consulaire pour les urgences graves." },
];

export type Espece = { quand: string; pour: string; montant: number; note?: string };

export const TAUX_IDR = 20635; // 1 € ≈ 20 635 IDR (juillet 2026)

export const especes: Espece[] = [
  { quand: "27/9 soir · DAB de Kualanamu", pour: "Voiture Medan → Bukit Lawang (800 000) + péages (66 000) + solde du trek (4 629 000) + navette retour (≈ 800 000) + pourboires guide et porteur (≈ 500 000)", montant: 6800000, note: "Plusieurs retraits d'affilée (plafond souvent 1,25 à 3 M par retrait). Aucun DAB à Bukit Lawang." },
  { quand: "5/10 matin · Malang", pour: "Bromo : entrée village + cratère (≈ 250 000 × 2), moto-taxis, repas au B&B, taxi vers l'Ijen si payé en espèces", montant: 1500000, note: "Aucun DAB à Cemoro Lawang." },
  { quand: "6/10 · Jiwa Jawa", pour: "Entrée du Kawah Ijen (≈ 100 000 × 2), parking, chauffeur de la journée du 7", montant: 800000 },
  { quand: "10/10 · Canggu", pour: "Komodo : frais du parc si non inclus (375 000 × 2 pers. × 2-3 jours + garde ≈ 2 M), pourboires équipage (≈ 500 000), repas à Labuan Bajo", montant: 3000000, note: "Les DAB de Labuan Bajo se vident le week-end." },
];

export const fuseaux = [
  { zone: "Sumatra et Java (26/9 → 7/10 matin)", tz: "Asia/Jakarta", libelle: "WIB · UTC+7 · Luxembourg + 5 h" },
  { zone: "Bali, Florès et Komodo (7/10 après-midi → 17/10)", tz: "Asia/Makassar", libelle: "WITA · UTC+8 · Luxembourg + 6 h" },
];

export const mots = [
  ["Terima kasih", "merci"], ["Selamat pagi / siang / malam", "bonjour (matin / journée / soir)"],
  ["Berapa ?", "combien ?"], ["Tidak pedas", "pas épicé"], ["Air", "eau"], ["Kamar mandi", "salle de bain / toilettes"],
  ["Tolong", "s'il vous plaît / à l'aide"], ["Kiri / kanan / lurus", "gauche / droite / tout droit"],
  ["Berhenti di sini", "arrêtez-vous ici"], ["Sudah", "c'est bon / déjà fait"], ["Tidak apa-apa", "pas de problème"],
  ["Enak !", "délicieux !"],
];

export const rituelDuSoir = [
  "Charger téléphones et batterie externe, frontale prête si réveil tôt.",
  "Regarder les horaires de demain dans « Aujourd'hui », et les espèces à prévoir.",
  "Enregistrement en ligne la veille d'un vol (AirAsia : PFIPUG).",
  "Sur le wifi de l'hôtel : rouvrir le carnet une fois pour rafraîchir la version hors ligne, sur les deux téléphones.",
  "Captures d'écran des billets du lendemain, luminosité de l'écran à fond pour les QR codes.",
];

export const aSavoir = [
  "Début octobre marque la transition vers la saison des pluies : averses possibles en fin d'après-midi sur Java et Bali.",
  "État des volcans (Bromo, Kawah Ijen, Lewotobi près de Florès) : magma.esdm.go.id. En cas de perturbation des vols de Labuan Bajo, reprendre une chambre sur place et décaler le vol.",
  "Le Kawah Ijen se fait en version « lac depuis la crête », sans le feu bleu : vérifier les conditions d'accès la semaine du départ.",
  "Temples : épaules et genoux couverts (sarong fourni à Borobudur). Eau du robinet non potable. Pourboires : guide de trek 100 000 à 200 000 IDR par jour, chauffeur à la journée 50 000 à 100 000, équipage du bateau ≈ 100 000 par personne et par jour.",
];

// ─── Avant de partir (disparaît de la page après le 26/9) ─────

export const avantDepart = [
  "Réserver l'hôtel de Canggu pour les nuits du 9 et du 10 octobre.",
  "Réserver la nuit du 14 octobre à Canggu (demander une nuit de plus au Plawa Laguna).",
  "Vérifier l'annulation de la nuit du 14 à la Casa de Capulet.",
  "Travass Life : envoyer les deux passeports (permis SiORA), faire confirmer « Andalucia · VIP Room · 12/10 à 8 h », le lieu de rendez-vous, et si les frais de parc sont inclus.",
  "Sumatra Orangutan Explore : réserver la navette Bukit Lawang → Kualanamu du 1er octobre (départ 11 h 30).",
  "Acheter le billet nominatif du mont Bromo (bromotenggersemeru.id, 255 000 IDR par personne, passeports 22IK82830 et 21DI57178).",
  "Visa électronique (e-VoA) pour les deux : numéros et captures dans le téléphone.",
  "Caler les chauffeurs : Borobudur 2/10 (départ 7 h), gare 3/10 (9 h 30), Tumpak Sewu 4/10, Cemoro Lawang 5/10, Bromo → Ijen 6/10, la journée du 7/10 (Java puis Bali), Sekumpul → Munduk 8/10, Munduk → Canggu 9/10.",
  "Table du vendredi 9 au soir à Canggu ; dépôt des valises chez Jasmine avant le 11.",
  "Ajouter au carnet : contacts WhatsApp SOE, Jasmine, villas ; GPS du belvédère Bromo ; PNR Lufthansa et captures des cartes d'embarquement.",
  "Google Maps : télécharger les zones hors ligne (Medan–Bukit Lawang, Yogyakarta, Malang–Bromo, Banyuwangi, nord Bali, Canggu, Labuan Bajo).",
  "Installer le carnet sur les deux téléphones (Safari → Partager → Sur l'écran d'accueil) et l'ouvrir une fois en ligne.",
  "Semaine du départ : Magma Indonesia pour les volcans, appli Ferizy installée (billet ferry à acheter le 6 au soir).",
];

// ─── Carte ───────────────────────────────────────────────────

export type EtapeCarte = {
  id: string;
  nom: string;
  coords: [number, number];
  couleur?: string;
};

export const etapesCarte: EtapeCarte[] = [
  { id: "medan", nom: "Medan", coords: [3.5952, 98.6722] },
  { id: "bukit-lawang", nom: "Bukit Lawang", coords: [3.5547, 98.1107], couleur: "#15803d" },
  { id: "yogyakarta", nom: "Yogyakarta", coords: [-7.7956, 110.3695] },
  { id: "borobudur", nom: "Borobudur", coords: [-7.6079, 110.2038], couleur: "#15803d" },
  { id: "malang", nom: "Malang", coords: [-7.9839, 112.6214] },
  { id: "tumpak", nom: "Tumpak Sewu", coords: [-8.2289, 112.9151], couleur: "#15803d" },
  { id: "bromo", nom: "Mont Bromo", coords: [-7.9176, 112.954], couleur: "#15803d" },
  { id: "ijen", nom: "Kawah Ijen", coords: [-8.0581, 114.2421], couleur: "#15803d" },
  { id: "nord-bali", nom: "Lovina · Munduk", coords: [-8.2, 115.05], couleur: "#15803d" },
  { id: "canggu", nom: "Canggu (Bali)", coords: [-8.6478, 115.1385], couleur: "#b45309" },
  { id: "labuan-bajo", nom: "Labuan Bajo", coords: [-8.4885, 119.877] },
  { id: "komodo", nom: "Parc de Komodo", coords: [-8.6536, 119.5734], couleur: "#0e7490" },
];

export const trajetsCarte: { de: string; vers: string; mode: "avion" | "route" | "train" | "bateau" }[] = [
  { de: "medan", vers: "bukit-lawang", mode: "route" },
  { de: "medan", vers: "yogyakarta", mode: "avion" },
  { de: "yogyakarta", vers: "borobudur", mode: "route" },
  { de: "yogyakarta", vers: "malang", mode: "train" },
  { de: "malang", vers: "tumpak", mode: "route" },
  { de: "malang", vers: "bromo", mode: "route" },
  { de: "bromo", vers: "ijen", mode: "route" },
  { de: "ijen", vers: "nord-bali", mode: "bateau" },
  { de: "nord-bali", vers: "canggu", mode: "route" },
  { de: "canggu", vers: "labuan-bajo", mode: "avion" },
  { de: "labuan-bajo", vers: "komodo", mode: "bateau" },
  { de: "labuan-bajo", vers: "canggu", mode: "avion" },
];
