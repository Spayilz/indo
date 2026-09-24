// ─────────────────────────────────────────────────────────────
// Le carnet de voyage — vérifié par les agents et tenu à jour
// au fil des réservations réelles (✅ réservé · ‼️ à réserver)
// ─────────────────────────────────────────────────────────────

export const infos = {
  surtitre: "Indonésie · du 26 septembre au 18 octobre 2026",
  titre: "Notre itinéraire",
  sousTitre:
    "Sumatra, Java, Bali et Komodo en vingt nuits : les orangs-outans, Borobudur et Prambanan, la cascade de Tumpak Sewu, le mont Bromo, le lac turquoise du Kawah Ijen, les dragons et les raies mantas — et sept nuits à Bali, du nord de l'île (Lovina, Munduk) aux cinq nuits de Canggu.",
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
  titre: string;
  ref: string;
  statut: "✅ payé" | "✅ réservé" | "💵 solde sur place" | "‼️ à faire";
  infos: string[];
  contact?: string;
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
    titre: "Vol Medan → Yogyakarta — Lion Air JT963",
    ref: "KNO 17 h 20 → YIA 20 h 10 · Boeing 737-900 · Economy",
    statut: "✅ payé",
    infos: [
      "Passagers : FRANCK MONARDO et AGATHE RONCALLI (billets adultes, noms identiques aux passeports).",
      "Enregistrement fermé 45 min avant le départ : être à Kualanamu vers 15 h 30. Aucun repas à bord.",
      "Arrivée à YIA (Kulon Progo), à 45-50 km du centre : 1 h à 1 h 30 de route jusqu'à Bohemian Jogja Villas.",
    ],
  },
  {
    quand: "Ven. 2 oct. · 8 h 30 - 10 h",
    titre: "Borobudur — montée sur le temple, créneau 8 h 30 - 10 h",
    ref: "Billets Goers V7F40-25E17A094 · V7F40-25E17A196",
    statut: "✅ payé",
    infos: [
      "2 billets « 08:30 - Foreigner Adult » (créneau 8 h 30 - 10 h) au nom de Monardo Franck, QR codes dans le lien t.goersapp.com reçu par WhatsApp (bouton « Cetak Tiket » pour imprimer). Faire des captures d'écran des deux QR codes hors ligne.",
      "Partir de la villa vers 7 h (environ une heure de route, 40 km au nord-ouest) pour être au guichet 20-30 min avant le créneau, passeports en main.",
      "Sandales « upanat » et sarong fournis sur place ; le créneau court de 8 h 30 à 10 h sur la structure du temple, avec guide — se présenter à l'heure, le créneau ne se décale pas.",
    ],
  },
  {
    quand: "Sam. 3 oct. · 10 h 50",
    titre: "Train Yogyakarta → Malang — Malioboro Ekspres (170B)",
    ref: "Booking 3E49U4B · sièges EKS-2 · 6C (Franck) et 6D (Agathe)",
    statut: "✅ payé",
    infos: [
      "Classe Executive AC · départ gare de Tugu Yogyakarta (Jl. Ps. Kembang 21) à 10 h 50 · arrivée gare de Malang (Jl. Trunojoyo 10) vers 17 h 30 · 41,51 € par personne, acheté sur 12go le 24 septembre.",
      "Le e-ticket n'est PAS une carte d'embarquement : l'imprimer à la borne libre-service de la gare (dès 7 jours avant) avec le code 3E49U4B et le passeport. Être en gare 60 min avant le départ.",
      "Bagages : 1 valise de 20 kg max (70×48×30 cm) + bagages à main. On peut apporter à manger et à boire.",
    ],
    contact: "KAI : cs@kai.id · +62 811-1211-1121 · 12go : compte en ligne, booking 3E49U4B",
  },
  {
    quand: "Dim. 11 oct. · 15 h 45",
    titre: "Vol Bali → Labuan Bajo — AirAsia",
    ref: "Réf. PFIPUG · DPS 15 h 45 → LBJ 16 h 55",
    statut: "✅ payé",
    infos: [
      "Vol direct 1 h 10, classe économique, PT Indonesia AirAsia. Enregistrement en ligne AirAsia ouvert 14 jours avant.",
      "Depuis Canggu, compter environ une heure jusqu'à l'aéroport : quitter l'hôtel vers 12 h 45 - 13 h pour être au terminal domestique 2 h avant.",
      "Arrivée à Labuan Bajo à 16 h 55 (heure de Bali = heure de Florès), 15 min de route jusqu'à la Casa de Capulet.",
    ],
  },
  {
    quand: "Lun. 12 oct. · 8 h",
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
  },
  {
    quand: "Mer. 14 oct. · 17 h 25",
    titre: "Vol Labuan Bajo → Bali — AirAsia",
    ref: "Réf. PFIPUG · LBJ 17 h 25 → DPS 18 h 35",
    statut: "✅ payé",
    infos: [
      "Même réservation PFIPUG que l'aller. Vol direct 1 h 10.",
      "Le bateau est de retour au port vers 12 h, l'aéroport de Komodo est à 10 min : le temps d'un déjeuner et d'une douche (demander à la Casa de Capulet ou à Travass où se poser) avant d'aller à l'aéroport vers 15 h 30. Enregistrement fermé 45 min avant, à faire en ligne la veille depuis le bateau si le réseau passe.",
      "Arrivée à Denpasar 18 h 35, puis environ une heure de route vers Canggu : hôtel vers 20 h. La nuit du 14 à Canggu reste à réserver.",
    ],
  },
];

export type Jour = {
  date: string;
  titre: string;
  resume: string;
  details: string;
  nuit: string;
  type: "vol" | "route" | "aventure" | "repos" | "bateau";
};

export const phases: { titre: string; detail: string; jours: Jour[] }[] = [
  {
    titre: "Le départ",
    detail: "26 — 27 septembre",
    jours: [
      {
        date: "Samedi 26 septembre",
        titre: "Envol depuis Luxembourg",
        resume:
          "Décollage de Luxembourg à 18 h 30 pour rejoindre l'Indonésie via Francfort et Singapour.",
        details:
          "Départ de l'aéroport de Luxembourg à 18 h 30 avec Air Dolomiti vers Francfort, escale, puis long vol de nuit vers Singapour (Lufthansa, opéré par Singapore Airlines). Glissez dans le bagage cabine une tenue de rechange et l'essentiel du trek (chaussures de marche, lampe frontale, chaussettes hautes) au cas où une valise prendrait du retard.",
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
        nuit: "JW Marriott Medan · ✅ réservé",
        type: "vol",
      },
    ],
  },
  {
    titre: "Sumatra — les orangs-outans",
    detail: "28 — 30 septembre",
    jours: [
      {
        date: "Lundi 28 septembre",
        titre: "Route vers Bukit Lawang et récupération",
        resume:
          "Prise en charge à 11 h au JW Marriott par Sumatra Orangutan Explore, route vers la jungle, après-midi de repos au lodge.",
        details:
          "Matinée tranquille au JW Marriott (option, si l'envie est là : un saut rapide au manoir Tjong A Fie en centre-ville). À 11 h, prise en charge à l'hôtel par Sumatra Orangutan Explore en voiture privée (800 000 roupies, péage de 33 000 roupies par trajet à régler en espèces au chauffeur). Quatre à cinq heures de route vers Bukit Lawang. À l'arrivée, l'équipe vous accueille pour régler le solde du trek (environ 4 629 000 roupies, en espèces), puis transfert des bagages à moto jusqu'au lodge. Installation au New SOE Lodge (chambre Family Room à l'étage : grand lit, moustiquaire, salle de bain privée eau chaude, climatisation, balcon avec vue jungle). Après-midi de repos pour digérer le voyage : hamac, rivière Bohorok, briefing du trek. Coucher tôt.",
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
        nuit: "New SOE Lodge, Bukit Lawang · ✅ réservé",
        type: "aventure",
      },
    ],
  },
  {
    titre: "Java — temples et volcans",
    detail: "1ᵉʳ — 6 octobre",
    jours: [
      {
        date: "Jeudi 1ᵉʳ octobre",
        titre: "De la jungle de Sumatra à Yogyakarta — vol direct l'après-midi",
        resume:
          "Navette jusqu'à l'aéroport de Medan, puis vol DIRECT Lion Air vers Yogyakarta (17 h 20 → 20 h 10) · ✅ vol réservé.",
        details:
          "Navette Bukit Lawang → aéroport de Kualanamu (Medan) à réserver — compter 3 à 4 heures de route, et viser large : le vol part à 17 h 20 et l'enregistrement ferme 45 minutes avant. Le vol est réservé : Lion Air JT963, Boeing 737-900, décollage de Kualanamu (KNO) à 17 h 20, arrivée à Yogyakarta (YIA) à 20 h 10 — deux heures cinquante, sans escale, aucun repas servi à bord (prévoir de quoi grignoter et de l'eau). Attention à l'aéroport d'arrivée : c'est YIA, le nouvel aéroport international de Kulon Progo, à 45-50 kilomètres du centre — compter 1 heure à 1 h 30 de route de nuit jusqu'à la villa (et non l'ancien aéroport JOG, tout proche du centre). Arrivée à la villa vers 21 h 30 - 22 h : prévenir Bohemian Jogja Villas de l'heure tardive et prévoir le dîner (ou un arrêt en route).",
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
        nuit: "Jiwa Jawa Resort Ijen (Licin, Banyuwangi) · ✅ réservé",
        type: "aventure",
      },
    ],
  },
  {
    titre: "Bali — le nord, puis Canggu",
    detail: "7 — 10 octobre",
    jours: [
      {
        date: "Mercredi 7 octobre",
        titre: "Le lac turquoise de l'Ijen au matin, ferry vers Bali l'après-midi",
        resume:
          "Montée tranquille pour le plus grand lac acide du monde, puis traversée en ferry et route jusqu'à Lovina, sur la côte nord de Bali.",
        details:
          "Choix assumé sur l'Ijen : on saute le feu bleu et sa descente nocturne dans les fumées de soufre — instable en 2026 (fermé par intermittence pour travaux), polarisant, et qui imposerait un réveil à minuit et demie. On garde le vrai joyau : le lac turquoise, le plus grand lac acide du monde (pH 0,13, couleur irréelle), accessible depuis la crête. Après une nuit complète, départ vers 6-7 heures pour le parking de Paltuding (environ une heure de route), puis montée régulière de 3 kilomètres (environ deux heures) dans la fraîcheur du matin, avant la grosse chaleur. Arrivée sur la crête en milieu de matinée : vue plongeante sur le lac fumant et ses mineurs de soufre, panorama sur les volcans alentour. Redescente vers midi, puis cap sur Ketapang pour le ferry. Le ferry public de Ketapang vers Gilimanuk fonctionne vingt-quatre heures sur vingt-quatre, départ toutes les vingt à trente minutes, traversée de trente à quarante-cinq minutes. Important depuis décembre 2025 : le billet s'achète en ligne sur l'application Ferizy AVANT d'approcher du port — un blocage par géolocalisation empêche l'achat à moins de 2,6 kilomètres du port, et il n'y a plus de guichet. À acheter la veille au soir, ou à faire prendre en charge par le chauffeur. À l'arrivée, on avance les montres d'une heure : Bali vit à l'heure de l'Indonésie centrale. Puis route vers Lovina avec un chauffeur privé, deux heures et demie à trois heures le long de la côte nord. Journée longue et bien remplie — l'arrivée se fait en début de soirée, dîner tranquille et au lit.",
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
        nuit: "Hôtel à Canggu · ‼️ à réserver",
        type: "route",
      },
      {
        date: "Samedi 10 octobre",
        titre: "Canggu — journée repos + préparatifs Komodo",
        resume:
          "La seule journée entière sans obligation avant la croisière : plage, boutiques, massage — et le soir, le petit sac pour Komodo.",
        details:
          "Journée à la carte dans le quartier le plus animé de Bali : grasse matinée, plage de Berawa ou Echo Beach, massage, balade dans les concept-stores, coucher de soleil au beach club et dîner au restaurant. Le soir, on prépare un petit sac pour la croisière (maillots, crème solaire, lampe, médicament contre le mal de mer) — l'idéal est de laisser les grosses valises en garde quelque part (à voir avec Jasmine si possible de les déposer à Canggu, sinon en garde à l'hôtel de Labuan Bajo pendant les deux nuits à bord). Retrait d'espèces avant Labuan Bajo (les distributeurs s'y vident le week-end : frais de parc éventuels et pourboires sont souvent en liquide — la croisière, elle, est déjà payée). Pas de réveil matinal : le vol de demain est à 15 h 45.",
        nuit: "Hôtel à Canggu · ‼️ à réserver",
        type: "repos",
      },
    ],
  },
  {
    titre: "Komodo — la croisière",
    detail: "11 — 14 octobre",
    jours: [
      {
        date: "Dimanche 11 octobre",
        titre: "Vol de l'après-midi vers Labuan Bajo — nuit tampon pré-croisière",
        resume:
          "Matinée libre à Canggu, vol AirAsia 15 h 45 → 16 h 55 · ✅ réservé (réf. PFIPUG), soirée sur le front de mer la veille de l'embarquement.",
        details:
          "Grasse matinée et dernier café à Canggu. Départ de l'hôtel vers 12 h 45 - 13 h : compter environ une heure jusqu'à l'aéroport de Denpasar (terminal domestique), pour être sur place deux heures avant. Vol AirAsia direct pour Labuan Bajo, sur l'île de Florès : décollage 15 h 45, atterrissage 16 h 55 (1 h 10, référence PFIPUG, enregistrement en ligne possible dès 14 jours avant). Pas de décalage horaire entre Bali et Florès. Installation à la Casa de Capulet (déjà réservée), à un quart d'heure de l'aéroport, puis coucher de soleil sur la baie et dîner de fruits de mer sur le front de mer. Confirmer par WhatsApp avec Travass Life l'heure et le lieu du rendez-vous du lendemain matin (trip prévu à 8 h) et préparer le petit sac de croisière. Arriver la veille est exigé par les opérateurs — c'est la nuit tampon du plan.",
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
        nuit: "À bord de l'Andalucia, cabine VIP Room · ✅ réservé",
        type: "bateau",
      },
      {
        date: "Mercredi 14 octobre",
        titre: "Croisière — jour 3 : retour au port, puis vol du soir vers Bali",
        resume:
          "Dernière baignade, retour au port de Labuan Bajo vers 12 h, vol AirAsia 17 h 25 → 18 h 35 · ✅ réservé (réf. PFIPUG), nuit à Canggu.",
        details:
          "Dernière matinée en mer (snorkeling, tortues selon le programme), puis retour au port de Labuan Bajo vers 12 h, comme confirmé par Travass Life. Cinq heures devant soi : déjeuner de fruits de mer sur le front de mer, douche et valises (voir avec la Casa de Capulet pour garder les bagages et utiliser une salle de bain, ou un day pass), puis départ pour l'aéroport vers 15 h 30. L'aéroport de Komodo est à dix minutes du port : décollage AirAsia à 17 h 25 (enregistrement fermé 45 minutes avant, le faire en ligne la veille si le réseau passe), atterrissage à Denpasar à 18 h 35, puis environ une heure de route jusqu'à Canggu — hôtel vers 20 h, longue douche et dîner tardif. On ne dort plus à Labuan Bajo ce soir-là : la nuit du 14 se passe à Bali. Si le volcan Lewotobi clouait les avions au sol, le plan B serait de reprendre une chambre sur place et de décaler le vol au lendemain.",
        nuit: "Canggu · ‼️ nuit du 14 à réserver (le Plawa Laguna commence le 15 — demander une nuit de plus)",
        type: "bateau",
      },
    ],
  },
  {
    titre: "Bali — le final à Canggu",
    detail: "14 — 16 octobre",
    jours: [
      {
        date: "Jeudi 15 octobre",
        titre: "Première journée complète du final à Canggu",
        resume:
          "Aucun transport aujourd'hui : plage, piscine et beach club, installation au Plawa Laguna pour les deux dernières nuits.",
        details:
          "Réveil sans réveil, après trois jours en mer. Installation au Plawa Laguna Boutique Hotel & Suites (réservé pour les nuits du 15 et du 16 — si la nuit du 14 est prise ailleurs, changer d'hôtel dans la matinée). Journée détente : plage de Berawa ou Echo Beach, piscine, massage pour dérouiller les jambes, et le soir un beach club au coucher du soleil ou un bon restaurant. Envie d'un dîner de poissons grillés les pieds dans le sable ? La baie de Jimbaran est à ~40 minutes si l'occasion se présente.",
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
        nuit: "Plawa Laguna Boutique Hotel & Suites, Canggu · ✅ réservé (par Agathe)",
        type: "repos",
      },
    ],
  },
  {
    titre: "Le retour",
    detail: "17 — 18 octobre",
    jours: [
      {
        date: "Samedi 17 octobre",
        titre: "Décollage de Bali",
        resume:
          "Départ de Canggu vers 10 h, envol de Denpasar à 13 h 15 vers Singapour puis Munich.",
        details:
          "Départ de l'hôtel vers 10 h direction l'aéroport : depuis Canggu, compter environ une heure de route (un peu plus avec le trafic), soit une arrivée vers 11 h — deux heures et quart avant le décollage, ça passe, mais partir plutôt vers 9 h donne les trois heures d'avance recommandées sur un vol international un samedi. Décollage à 13 h 15 vers Singapour (vol opéré par Singapore Airlines). L'escale à Changi dure 6 h 45 : le temps de dîner et d'aller voir la grande cascade intérieure du Jewel. Puis vol de nuit Lufthansa vers Munich.",
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
        nuit: "À la maison",
        type: "vol",
      },
    ],
  },
];

export const croisiere = {
  cadre:
    "✅ Réservée et payée. Croisière partagée de trois jours et deux nuits au départ de Labuan Bajo, du lundi 12 octobre (rendez-vous 8 h) au mercredi 14 octobre, à bord de l'Andalucia, un phinisi (voilier traditionnel en bois) de la catégorie « Comfortable Semi-Deluxe » vendu par Travass Life, en cabine VIP Room privée, climatisée, avec salle de bain. Au programme les quatre incontournables : l'île de Padar, la Pink Beach, les dragons sur l'île de Komodo et la nage avec les raies mantas à Manta Point. Le comparatif des six opérateurs ci-dessous est l'archive du dossier vérifié du 12 juillet 2026 (1 € ≈ 20 635 IDR).",
  recommande:
    "Réservé le 6 août 2026 sur le site de Travass Life : commande n° 14875, produit « 3D2N Komodo Sailing | Comfortable Semi-Deluxe | Solo Traveler Friendly | ANDALUCIA », package VIP ROOM, 2 adultes, trip date 12 octobre 2026 à 8 h, total 18 892 950 IDR (≈ 915 € pour deux, ≈ 458 € par personne) payé en ligne via Xendit — garder le mail « Order received » comme preuve. Contact : WhatsApp +62 811-3828-2828 (Admin 02, 8 h - 21 h). Reste à faire confirmer par écrit avant le départ : le lieu de rendez-vous du 12 à 8 h, si les frais du parc national et le permis SiORA sont inclus (transmettre les deux passeports) et des photos récentes de la VIP Room. Retour au port le 14 vers 12 h (confirmé) — le vol pour Bali décolle à 17 h 25, la marge est confortable.",
  operateurs: [
    {
      rang: 1,
      nom: "IndonesiaJuara",
      surete: "Le plus prouvé — 841 avis",
      contacte: true,
      prix: "Ahsana ≈ 271–420 €/pers.",
      ceQueCest:
        "Grande agence-opérateur du groupe Juara Holding (10+ ans), qui possède sa propre flotte de neuf phinisi — viser l'Ahsana (30 m, jacuzzi).",
      avis: "4,9 / 5 sur 841 avis TripAdvisor + Travelers' Choice 2026 — de très loin le plus gros volume de preuves du lot.",
      sentiment:
        "Massivement positif (« on s'est sentis en sécurité »). Peu de bouche-à-oreille spontané sur les forums, mais un mur d'avis solide.",
      bemol:
        "Plus cher, et acompte 50 % par virement bancaire (pas de protection plateforme). Éviter les cabines de pont inférieur (avis récents : exiguës, odeurs) — demander l'Ahsana en pont principal ou supérieur.",
      contact:
        "WhatsApp +62 811-994-1919 · sales@indonesiajuara.asia — demander l'Ahsana Deluxe vue mer ou Balcony, nom du bateau sur le reçu.",
      photos: [
        { src: "/croisiere/ahsana-superior-1.jpg", legende: "Ahsana · Superior — queen, hublot · 310 USD ≈ 271 €/pers." },
        { src: "/croisiere/ahsana-deluxe-1.jpg", legende: "Ahsana · Deluxe vue mer · 400 USD ≈ 350 €/pers." },
        { src: "/croisiere/ahsana-balcony-1.jpg", legende: "Ahsana · Deluxe Balcony — balcon privé · 480 USD ≈ 420 €/pers." },
        { src: "/croisiere/ahsana-signature-1.jpg", legende: "Ahsana · Signature — balcon + baignoire · 510 USD ≈ 447 €/pers." },
        { src: "/croisiere/oceanpro-double-1.jpg", legende: "Ocean Pro II · Double Ocean View · 440 USD ≈ 385 €/pers." },
        { src: "/croisiere/yumana-superior.jpg", legende: "Yumana · Superior · 330 USD ≈ 289 €/pers." },
      ],
    },
    {
      rang: 2,
      nom: "Long Lasting Trip",
      surete: "Chouchou des voyageurs — lundi confirmé",
      contacte: true,
      prix: "Cabine privée ≈ 285 €/pers.",
      ceQueCest:
        "Opérateur direct de Labuan Bajo depuis 2014. Pour le lundi, c'est le bateau RB2 (les 3 autres partent d'autres jours) — cabine privée clim + sdb.",
      avis: "Fiche TripAdvisor dédiée, majoritairement 5 étoiles (« best boat trip », « amazing experience »).",
      sentiment:
        "L'alternative n°1 sur Reddit, choisie précisément pour ses départs du lundi (moins de foule) et moins d'avis 1 étoile que Travass.",
      bemol:
        "Un avis négatif (Padar sauté pour météo, annoncé après l'embarquement). Bien demander le bateau RB2 par écrit — les 3 autres bateaux ne partent pas le lundi.",
      contact:
        "WhatsApp +62 811 382 0219 · IG @longlastingtrip · info@longlastingtrip.com — page RB2 : longlastingtrip.com/tour-packages/open-trip/rb2-boat-3d2n",
      photos: [] as { src: string; legende: string }[],
    },
    {
      rang: 3,
      nom: "Travass Life (Andalucia · VIP Room)",
      surete: "✅ C'est ici qu'on a réservé — 458 €/pers., payé",
      contacte: true,
      reserve: true,
      prix: "VIP Room ≈ 458 €/pers. (payé)",
      ceQueCest:
        "Opérateur direct réputé de Labuan Bajo, grosse présence sociale (Instagram 41K). Bateau Papiton Duwa (2019), cabines 100 % privatives.",
      avis: "TripAdvisor 5 étoiles, mais un peu plus d'avis 1 étoile que Long Lasting Trip.",
      sentiment:
        "LE nom le plus cité sur Reddit pour cette croisière exacte (« j'ai fait beaucoup de recherches, Travass est arrivé en tête »).",
      bemol:
        "Un cas d'annulation de dernière minute signalé par le passé : faire reconfirmer par écrit, quelques jours avant, le bateau (Andalucia), la cabine (VIP Room) et le rendez-vous du 12 à 8 h. Retour au port le 14 vers 12 h confirmé — plan B (nuit à Labuan Bajo + vol modifié) seulement en cas de volcan ou de grosse houle.",
      contact: "WhatsApp +62 811-3828-2828 (Admin 02, ouvert 8 h - 21 h) · aussi +62 811-3818-808 · IG @travass.life · hello@travass.life.",
      photos: [] as { src: string; legende: string }[],
    },
    {
      rang: 4,
      nom: "Vinca Voyages",
      surete: "Vérifiable — peu d'avis",
      contacte: true,
      prix: "≈ 337–436 €/pers.",
      ceQueCest:
        "Opérateur direct, marque propre (phinisi de 2020, 31 m), Instagram 24K + TikTok. Cabines Western/Japanese avec baignoire.",
      avis: "TripAdvisor 4,9 / 5 mais ~15 avis seulement + Travelers' Choice.",
      sentiment:
        "Quasi rien sur les forums — ni éloge ni alerte. Un avis 3/5 d'octobre 2024 (« bateau différent des photos »).",
      bemol:
        "Plus cher, site officiel en refonte (résa via revendeurs, prix variables), annulation punitive. Bonne cible collab par ailleurs (besoin de visuels frais).",
      contact: "WhatsApp +62 813-3848-2228 · IG @vincavoyages · hello@vincavoyages.com.",
      photos: [
        { src: "/croisiere/vinca-balinese-1.jpg", legende: "Balinese — pont inférieur, hublots · 6 950 000–7 500 000 IDR ≈ 337–363 €/pers." },
        { src: "/croisiere/vinca-western-1.jpg", legende: "Western — avec baignoire · 8 500 000–9 000 000 IDR ≈ 412–436 €/pers." },
        { src: "/croisiere/vinca-japanese-1.jpg", legende: "Japanese — même prix que la Western" },
        { src: "/croisiere/vinca-western-sdb.jpg", legende: "Western — la salle de bain avec baignoire" },
      ],
    },
    {
      rang: 5,
      nom: "Lanakila",
      surete: "Parfait mais tout jeune — ~10 avis",
      contacte: true,
      prix: "Deluxe vue mer ≈ 267 €/pers.",
      ceQueCest:
        "Jeune marque mono-bateau (phinisi de 2024, 8 cabines), gérée par une agence. Le meilleur rapport prix/date du lot.",
      avis: "5,0 / 5 sur TripAdvisor, mais seulement ~10 avis (tous d'avril-juin 2026, zéro négatif).",
      sentiment:
        "Rien sur les forums — il n'apparaît que comme bateau du catalogue EasyKomodo, pas en bouche-à-oreille spontané.",
      bemol:
        "Base d'avis minuscule et Instagram dormant. Vérifiable, mais le moins « éprouvé » — reste le meilleur prix qui colle au 12 octobre.",
      contact:
        "WhatsApp +62 813-6749-5700 · hello@lanakilacruise.com — viser Deluxe ou Master.",
      photos: [
        { src: "/croisiere/lanakila-superior-1.jpg", legende: "Superior — pont inférieur, hublot · 4 750 000 IDR ≈ 230 €/pers." },
        { src: "/croisiere/lanakila-superior-sdb.jpg", legende: "Superior — la salle de bain privée" },
        { src: "/croisiere/lanakila-deluxe-1.jpg", legende: "Deluxe vue mer — pont principal · 5 500 000 IDR ≈ 267 €/pers." },
        { src: "/croisiere/lanakila-deluxe-vue.jpg", legende: "Deluxe — la fenêtre vue mer" },
        { src: "/croisiere/lanakila-master-1.jpg", legende: "Master — pont supérieur · 6 500 000 IDR ≈ 315 €/pers." },
        { src: "/croisiere/lanakila-master-balcon.jpg", legende: "Master — le balcon privé" },
      ],
    },
    {
      rang: 6,
      nom: "EasyKomodo",
      surete: "Revendeur légitime — repère de prix",
      contacte: true,
      prix: "selon le bateau choisi",
      ceQueCest:
        "Ce n'est pas un bateau, c'est un revendeur multi-bateaux (basé à Bali/Labuan Bajo depuis 2022) : il liste ~25 phinisi, dont Lanakila et Vinca.",
      avis: "Légitime (aucune arnaque connue, Scamadviser « safe »), mais seulement 8 avis sur sa propre fiche TripAdvisor.",
      sentiment:
        "Sur Reddit, cité uniquement comme « repère de prix », jamais comme un opérateur qu'on a testé.",
      bemol:
        "Le vrai risque, c'est QUELLE coque il te vend — beaucoup sont anonymes, sans avis. Exiger le nom exact du bateau + photos par écrit. À utiliser surtout pour comparer les prix.",
      contact:
        "WhatsApp +62 877-6592-4641 — demander le nom du bateau et l'itinéraire complet avant de payer.",
      photos: [] as { src: string; legende: string }[],
    },
  ],
  aRetenir: [
    "Maintenant que c'est payé : demander à Travass Life, par écrit, la confirmation « Andalucia · VIP Room · lundi 12 octobre 8 h », le lieu exact du rendez-vous (retour au port le 14 vers 12 h, déjà confirmé), et si les frais de parc + permis SiORA sont compris dans les 18 892 950 IDR — sinon, combien en espèces.",
    "Verrouiller le départ du lundi 12 octobre PAR ÉCRIT avant tout paiement : confirmé aux calendriers en ligne chez Lanakila (revendeurs), IndonesiaJuara (page officielle) et Sailnesia (GetYourGuide) — mais seule une confirmation écrite avec le nom du bateau fait foi.",
    "Exiger le nom exact du bateau, le numéro de la cabine privée et des photos datées de cette cabine précise (climatisée + salle de bain). Le nom du bateau doit figurer sur le reçu — c'est la preuve clé en cas de litige.",
    "Bien préciser « cabine privée fermée, base 2 personnes », et non un simple lit dans une cabine partagée : c'est le piège classique des tarifs bas en open trip.",
    "Demander le prix net tout compris : les opérateurs annoncent ~650 000-700 000 IDR (~32-34 €) de frais de parc par personne, mais la grille officielle 2026 est de 375 000 IDR par personne ET PAR JOUR (+ ranger) — le total réel peut monter à 60-70 € par personne. À faire chiffrer par écrit, et vérifier qu'aucun supplément carburant ne sera annoncé à bord.",
    "Acompte de 30 à 50 % maximum, jamais 100 % d'avance, et toujours sur un compte au nom de la société. De préférence par carte ou lien de paiement officiel pour garder un recours — seule la voie GetYourGuide (Sailnesia) offre l'annulation gratuite.",
    "Permis nominatif SiORA obligatoire depuis le 1er avril 2026 (plus de billets sur place), quota 1 000 visiteurs par jour sur le parc et Padar limité à 60 par jour : transmettre les passeports à l'opérateur dès la réservation.",
    "Prise en charge le lundi matin : 8 h-10 h 30 chez Lanakila, 11 h chez IndonesiaJuara — caler le réveil en conséquence. Confirmer l'heure de retour le jour 3 (10 h 30 à 13 h selon l'opérateur), et que les dragons soient bien vus sur l'île de Komodo et non sur Rinca.",
    "La navigation de nuit est interdite dans le parc depuis janvier 2026 (conséquence du naufrage du KM Putri Sakinah) : un opérateur qui promet de naviguer de nuit pour « être premiers à Padar » enfreint la règle — signal d'alarme.",
  ],
  aEviter: [
    "Captain Komodo / Alcira : opérateur fiable (4,9/5, 918 avis) mais AUCUN départ le 12 octobre (créneaux 11-13 et 14-16) et pas de salle de bain privée (2 sdb partagées pour 12 passagers) — hors critères.",
    "Point d'attention sur le bateau réservé : une plainte de juin 2024 visait un « Andalusia 2 » vendu par divetrips (cafards, remboursement dérisoire). Notre Andalucia est vendu par Travass Life en catégorie Semi-Deluxe — demander des photos récentes de la VIP Room et le nom exact de la coque, et signaler tout problème d'hygiène dès l'embarquement.",
    "Zada Liveaboard (Zada Ulla/Nara/Mega) : passagers réaffectés sur un autre bateau la veille du départ, cafards, literie moisie — 4,4/5 seulement.",
    "Komodo Boat Charter / « Evan » (opère aussi sous KLM Tunggadewi) : remboursements promis jamais versés, départs retardés volontairement.",
    "Molas Lino Trip : arnaque à l'acompte documentée — cesse de répondre au moment du second paiement.",
    "Komodo Sailing Tour / « Adrian » et « Berto boat tour » : vendent une image très éloignée de la réalité.",
    "Le bateau Gandiva : plainte lourde de juin 2026 (sols de salle de bain pourris, cafards, clim défaillante) — et il ne part que le vendredi.",
    "Tout prix nettement sous le marché (une cabine privée crédible coûte ~230 à 450 € par personne) avec paiement à 100 % d'avance par virement : appât classique avant disparition.",
    "Les phinisi « standard » vendus en marque blanche sans nom d'armateur : c'était le profil du KM Putri Sakinah, naufragé de nuit le 26 décembre 2025 (4 morts, capitaine inculpé). Vérifier gilets, radeau et certificat de sécurité, ne jamais naviguer par grosse houle.",
  ],
};

export const checklist = [
  {
    quand: "✅ Déjà réservé",
    quoi: "Vols internationaux (Air Dolomiti + Lufthansa/Singapore Airlines) · Vol Medan → Yogyakarta : Lion Air JT963 du 1er octobre, 17 h 20 (KNO) → 20 h 10 (YIA) · Vols Bali ↔ Labuan Bajo : AirAsia réf. PFIPUG, aller le 11/10 à 15 h 45, retour le 14/10 à 17 h 25 · Train Yogyakarta → Malang du 3/10 : Malioboro Ekspres 10 h 50, Executive, sièges 6C-6D, booking 3E49U4B · Borobudur le 2/10 : montée sur le temple au créneau de 8 h 30 - 10 h, 2 billets Goers V7F40-25E17A094 et V7F40-25E17A196 · Croisière Komodo 12-14/10 : Travass Life, bateau Andalucia, VIP Room, commande 14875 payée (18 892 950 IDR) · JW Marriott Medan (27/9) · Trek + lodge Sumatra Orangutan Explore : New SOE Lodge (28 et 30/9) + trek 2J/1N (29-30/9), acompte versé, solde de 4 629 000 IDR à régler en espèces à l'arrivée · Bohemian Jogja Villas (1er et 2/10) · Shalimar Boutique Hotel, Malang (3 et 4/10) · Bromo B&B, Cemoro Lawang (5/10) · Jiwa Jawa Resort Ijen (6/10) · Ju'blu Hotel, Lovina (7/10, par Agathe) · Munduk Moding Plantation (8/10, collaboration) · Casa de Capulet, Labuan Bajo (11/10 uniquement — la nuit du 14 est abandonnée) · Plawa Laguna Boutique Hotel & Suites, Canggu (15 et 16/10, par Agathe).",
  },
  {
    quand: "Le plus urgent",
    quoi: "Le retour de Komodo est le 14 octobre au soir (vol AirAsia 17 h 25) : 1) réserver la nuit du mercredi 14 à Canggu — d'abord demander au Plawa Laguna d'ajouter une nuit avant celles du 15 et du 16 ; 2) vérifier que la nuit du 14 à la Casa de Capulet est bien annulée (on n'y dort plus) ; 3) leur demander quand même de garder les bagages et de prêter une douche l'après-midi du 14 (le bateau rentre vers 12 h, vol à 17 h 25).",
  },
  {
    quand: "Le plus urgent",
    quoi: "Réserver l'hôtel de Canggu pour les nuits du vendredi 9 et du samedi 10 octobre (Berawa ou Echo Beach). Avec la nuit du 14, c'est le seul hébergement encore ouvert.",
  },
  {
    quand: "Cette semaine",
    quoi: "Travass Life (WhatsApp +62 811-3828-2828) : envoyer les deux passeports pour le permis SiORA, faire confirmer par écrit « Andalucia · VIP Room · 12/10 à 8 h », le lieu de rendez-vous (retour au port le 14 vers 12 h, confirmé) et si les frais de parc sont inclus. Si un filet GetYourGuide (Sailnesia) avait été bloqué, l'annuler — c'est gratuit jusqu'à 24 h avant.",
  },
  {
    quand: "Cette semaine",
    quoi: "Réserver la navette Bukit Lawang → aéroport de Kualanamu (Medan) pour le jeudi 1er octobre auprès de Sumatra Orangutan Explore : 3 à 4 heures de route, départ vers 11 h 30 pour être à l'aéroport vers 15 h 30 (le vol JT963 part à 17 h 20). Prévoir aussi le transport YIA → villa à l'arrivée (1 h à 1 h 30 de nuit) : demander à Bohemian Jogja Villas.",
  },
  {
    quand: "Avant le départ",
    quoi: "Acheter le billet électronique nominatif du mont Bromo pour le 6 octobre sur bromotenggersemeru.id (255 000 IDR par personne, numéros de passeport 22IK82830 et 21DI57178), et les billets de Prambanan pour l'après-midi du 2 octobre (en ligne ou sur place). Faire les demandes de visa électronique (e-VoA) si ce n'est pas encore fait.",
  },
  {
    quand: "Avant le départ",
    quoi: "Caler les chauffeurs privés : Yogyakarta → Borobudur (départ 7 h) → Prambanan → villa le 2/10, villa → gare de Tugu le 3/10 à 9 h 30, Tumpak Sewu le 4/10, transfert vers Cemoro Lawang le 5/10, taxi Bromo → Jiwa Jawa Ijen le 6/10, la grosse journée du 7/10 (hôtel → Paltuding → port de Ketapang, puis Gilimanuk → Lovina côté Bali), Lovina → Sekumpul → Munduk le 8/10, Munduk → Canggu le 9/10, Canggu → aéroport le 11/10 à 12 h 45 et aéroport → Canggu le 14/10 vers 18 h 45.",
  },
  {
    quand: "Avant l'arrivée à Canggu",
    quoi: "Réserver la table du vendredi soir 9 octobre à Canggu (le quartier se remplit vite), et voir avec Jasmine s'il est possible d'y laisser les grosses valises pendant la croisière.",
  },
  {
    quand: "La semaine du départ",
    quoi: "Consulter Magma Indonesia pour l'état des volcans (Bromo, Kawah Ijen, Lewotobi), acheter les billets du ferry sur l'application Ferizy le mardi 6 au soir (impossible à moins de 2,6 km du port le jour même), et enregistrer les captures d'écran hors ligne de tous les billets : QR Borobudur, e-ticket KAI 3E49U4B, cartes d'embarquement AirAsia PFIPUG, mail Travass n° 14875.",
  },
  {
    quand: "Sur place",
    quoi: "Le 3/10 : imprimer les cartes d'embarquement du train à la borne de la gare de Tugu avec le code 3E49U4B (dès 7 jours avant). Le 11/10 et le 13/10 : enregistrement en ligne AirAsia (PFIPUG). Espèces à prévoir : solde du trek à Bukit Lawang (4 629 000 IDR), Bromo (pas de distributeur), frais de parc de Komodo si non inclus.",
  },
];

export const vigilance = [
  "Le vol retour de Labuan Bajo est le 14 octobre à 17 h 25, le jour même du débarquement : le bateau rentre vers 12 h (confirmé par Travass), l'aéroport est à 10 min du port — marge confortable, mais pas de sieste qui traîne : être à l'aéroport vers 15 h 45. La nuit du 14 à Labuan Bajo est abandonnée. Plan B si le volcan Lewotobi perturbe les vols : reprendre une chambre sur place et décaler le vol au 15.",
  "La nuit du 14 octobre à Bali n'est pas encore réservée (le Plawa Laguna commence le 15) — et celles du 9 et du 10 à Canggu non plus. Ce sont les trois seules nuits ouvertes du voyage.",
  "Croisière Komodo payée en totalité (Travass Life, Andalucia, VIP Room, commande 14875) : faire reconfirmer par écrit le bateau, la cabine et le rendez-vous du 12 à 8 h quelques jours avant, transmettre les passeports pour le permis SiORA (Padar limité à 60 personnes par jour), et savoir si les frais de parc sont inclus — sinon prévoir des espèces.",
  "Train du 3 octobre : le e-ticket 12go/KAI n'est PAS une carte d'embarquement. À imprimer à la borne de la gare de Tugu avec le code 3E49U4B et les passeports, 60 minutes avant le départ de 10 h 50 — quitter la villa vers 9 h 30.",
  "Borobudur le 2 octobre : le créneau de montée est fixe (8 h 30 - 10 h) et les billets nominatifs — partir de la villa vers 7 h, passeports sur soi, QR codes en capture d'écran (le lien t.goersapp.com a besoin de réseau).",
  "Le ferry Java-Bali est passé au mercredi 7 octobre, l'après-midi même de l'Ijen : billets uniquement sur l'application Ferizy, à acheter le mardi soir — un blocage par géolocalisation empêche l'achat à moins de 2,6 kilomètres du port, et il n'y a plus de guichet.",
  "Le 7 octobre est la journée la plus chargée du voyage : lever vers 5 h 30, montée de l'Ijen, redescente vers midi, route jusqu'à Ketapang, ferry, +1 heure de décalage horaire, puis 2 h 30 à 3 h de route jusqu'à Lovina — arrivée en début de soirée. Un seul chauffeur pour toute la journée côté Java, et un autre qui attend à Gilimanuk : à caler à l'avance.",
  "Vol du jeudi 1er octobre (✅ réservé, Lion Air JT963, 17 h 20 → 20 h 10) : le vrai point de vigilance est la navette Bukit Lawang → Kualanamu, 3 à 4 heures de route sans marge d'erreur — partir vers 11 h 30, l'enregistrement ferme 45 minutes avant le départ. Aucun repas à bord. Et l'arrivée se fait à YIA, à 45-50 km de Yogyakarta : 1 h à 1 h 30 de route de nuit, donc villa vers 21 h 30 - 22 h.",
  "Canggu est à environ une heure de l'aéroport : départ 12 h 45 - 13 h le dimanche 11 pour le vol AirAsia de 15 h 45, et départ le samedi 17 vers 9 h - 10 h pour l'international de 13 h 15.",
  "Mont Bromo en autonomie : avoir du liquide (pas de distributeur à Cemoro Lawang), partir tôt pour le point de vue, et prévoir l'entrée du parc (~12-15 € par personne) si vous montez au cratère. Le billet électronique nominatif n'est pas encore acheté.",
  "Le Kawah Ijen se fait en version « lac depuis la crête » (pas de feu bleu) : plus fiable et bien plus reposant. Vérifier les conditions d'accès la semaine du départ.",
  "Début octobre marque la transition vers la saison des pluies : averses possibles en fin d'après-midi sur Java et Bali.",
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
