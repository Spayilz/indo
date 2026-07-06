// ─────────────────────────────────────────────────────────────
// Le carnet de voyage — vérifié par les agents et tenu à jour
// au fil des réservations réelles (✅ réservé · ‼️ à réserver)
// ─────────────────────────────────────────────────────────────

export const infos = {
  surtitre: "Indonésie · du 26 septembre au 18 octobre 2026",
  titre: "Notre itinéraire",
  sousTitre:
    "Sumatra, Java, Bali et Komodo en vingt nuits : les orangs-outans, Borobudur et Prambanan, la cascade de Tumpak Sewu, le mont Bromo, le lac turquoise du Kawah Ijen, les dragons et les raies mantas — et cinq vraies nuits de plage à Bali, dont trois consécutives à Canggu.",
  chiffres: [
    {
      valeur: "20",
      label: "nuits sur place",
      detail: "du 27 septembre au 16 octobre inclus",
    },
    {
      valeur: "5",
      label: "nuits de plage à Bali",
      detail: "3 consécutives à Canggu avant Komodo, 2 pour finir",
    },
    {
      valeur: "2",
      label: "réveils tôt",
      detail: "Borobudur et Bromo — l'Ijen se fait désormais en douceur",
    },
    {
      valeur: "≈ 6 450 €",
      label: "budget total à deux",
      detail: "vols internationaux compris (fourchette 5 450 à 7 750 €)",
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
    detail: "1ᵉʳ — 7 octobre",
    jours: [
      {
        date: "Jeudi 1ᵉʳ octobre",
        titre: "De la jungle de Sumatra à Yogyakarta — vol direct l'après-midi",
        resume:
          "Navette jusqu'à l'aéroport de Medan, puis vol DIRECT Lion Air vers Yogyakarta (17 h 20 → 20 h 10).",
        details:
          "Navette Bukit Lawang → aéroport de Medan à réserver (compter 3 à 4 heures de route). On prend ensuite le vol DIRECT Lion Air JT963 à 17 h 20, arrivée à Yogyakarta à 20 h 10 — deux heures cinquante, sans escale, environ 146 euros par personne. À éviter : l'autre vol Lion (numéro JT935) de 11 h 35, qui met quatre heures à cause d'une escale. Plan B si le direct ne devait plus opérer : un billet unique Garuda via Jakarta (vol GA 187 puis GA 202). À l'arrivée, 45 minutes à une heure de route jusqu'à la villa.",
        nuit: "Bohemian Jogja Villas, Yogyakarta · ✅ réservé",
        type: "vol",
      },
      {
        date: "Vendredi 2 octobre",
        titre: "Borobudur et Prambanan",
        resume:
          "Borobudur le matin (au lever du soleil ou en matinée), puis le temple de Prambanan l'après-midi.",
        details:
          "Borobudur le matin — le plus grand temple bouddhiste du monde. Deux options : la formule « Borobudur Sunrise » d'InJourney pour monter sur le temple au lever du soleil (100 places par jour, environ 55 euros par personne, réservation par WhatsApp au +62 857 2758 7800, départ ~3 h 45 de Yogyakarta), ou une visite plus tranquille en matinée à l'ouverture (la montée sur le temple se réserve sur ticket.borobudurpark.com). L'après-midi, cap sur Prambanan, le grand ensemble de temples hindous aux flèches élancées et aux reliefs du Ramayana (à une trentaine de minutes à l'est). Vendredi est un jour de semaine sans vacances scolaires : affluence faible.",
        nuit: "Bohemian Jogja Villas, Yogyakarta · ✅ réservé",
        type: "aventure",
      },
      {
        date: "Samedi 3 octobre",
        titre: "Traversée de Java en train jusqu'à Malang",
        resume:
          "Train direct de 10 h 45 à environ 17 h, à travers les rizières et les volcans.",
        details:
          "Matinée tranquille, puis train au départ de Yogyakarta vers 10 h 45, arrivée à Malang vers 17 h. Train de jour confortable en classe exécutive, avec des paysages superbes. Billets à acheter dès l'ouverture des ventes (45 jours avant, soit vers la mi-août, sur l'application Access by KAI). Installation au Shalimar Boutique Hotel, beau bâtiment colonial restauré, et dîner dans le quartier.",
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
        nuit: "Bromo B&B, Cemoro Lawang · ‼️ à réserver",
        type: "route",
      },
      {
        date: "Mardi 6 octobre",
        titre: "Lever de soleil sur le mont Bromo, puis route vers l'est",
        resume:
          "Marche de nuit jusqu'au point de vue pour l'aube, puis six à sept heures de route vers Banyuwangi.",
        details:
          "Réveil à 3 h. Deux options pour le point de vue : partir à pied depuis l'hôtel (environ 1 h 45 de marche — on part tôt pour arriver les premiers et sécuriser son spot), ou prendre une moto-taxi qui dépose au départ officiel (puis ~1 h de marche). Point GPS du belvédère donné par les amis. Lever du soleil sur le Bromo, le Batok et le Semeru émergeant de la mer de nuages. Pour monter aussi sur le cratère : le patron de l'hôtel indique un chemin gratuit, ou une moto-taxi mène au pied du cratère (prévoir l'entrée village + parc, ~12-15 euros par personne, en liquide). Retour à l'hôtel, petit déjeuner, puis longue route (taxi à réserver) vers Banyuwangi, à la pointe orientale de Java : six à sept heures avec des pauses. Dîner et vraie nuit complète : pas de réveil nocturne, l'Ijen se fera en douceur demain matin.",
        nuit: "Hôtel à Banyuwangi · ‼️ à réserver",
        type: "aventure",
      },
      {
        date: "Mercredi 7 octobre",
        titre: "Le lac turquoise du Kawah Ijen, en douceur",
        resume:
          "Montée tranquille en matinée pour le plus grand lac acide du monde — sans le feu bleu, sans réveil nocturne. Après-midi de repos.",
        details:
          "Choix assumé : on saute le feu bleu et sa descente nocturne dans les fumées de soufre — instable en 2026 (fermé par intermittence pour travaux), polarisant, et qui imposerait un réveil à minuit et demie. On garde le vrai joyau : le lac turquoise, le plus grand lac acide du monde (pH 0,13, couleur irréelle), accessible depuis la crête. Après une nuit complète, départ vers 6-7 heures pour le parking de Paltuding (environ une heure de route), puis montée régulière de 3 kilomètres (environ deux heures) dans la fraîcheur du matin. Arrivée sur la crête en milieu de matinée : vue plongeante sur le lac fumant et ses mineurs de soufre, panorama sur les volcans alentour. Redescente vers midi, retour à l'hôtel, après-midi de récupération au bord de la piscine. Dernière étape de Java : demain, Bali.",
        nuit: "Hôtel à Banyuwangi · ‼️ à réserver",
        type: "aventure",
      },
    ],
  },
  {
    titre: "Bali — trois nuits à Canggu",
    detail: "8 — 10 octobre",
    jours: [
      {
        date: "Jeudi 8 octobre",
        titre: "Ferry vers Bali et route jusqu'à Canggu",
        resume:
          "Traversée en ferry public, puis route jusqu'à Canggu. Arrivée à l'hôtel en milieu/fin d'après-midi.",
        details:
          "Départ de l'hôtel vers 8 heures (heure de Java). Le ferry public de Ketapang vers Gilimanuk fonctionne vingt-quatre heures sur vingt-quatre, départ toutes les vingt à trente minutes, traversée de trente à quarante-cinq minutes. Important depuis décembre 2025 : le billet s'achète en ligne sur l'application Ferizy AVANT d'approcher du port — un blocage par géolocalisation empêche l'achat à moins de 2,6 kilomètres du port. À acheter la veille au soir, ou via le chauffeur. À l'arrivée, on avance les montres d'une heure (Bali vit à l'heure de l'Indonésie centrale). Puis route vers Canggu avec un chauffeur privé : trois heures et demie à quatre heures et demie en conditions réelles (Canggu est au sud-ouest, un peu plus loin que Sanur — prévoir large), avec une pause déjeuner. Arrivée à l'hôtel vers 15-16 heures : premier plongeon, et trois nuits posées commencent.",
        nuit: "Hôtel à Canggu · ‼️ à réserver",
        type: "route",
      },
      {
        date: "Vendredi 9 octobre",
        titre: "Canggu — repos, plage et bonnes adresses",
        resume:
          "Journée détente : plage, piscine, boutiques, massage, et un bon restaurant le soir.",
        details:
          "Première vraie journée sans obligation, dans le quartier le plus animé de Bali pour les cafés, les boutiques et les beach clubs. Au programme à la carte : grasse matinée, plage de Berawa ou Echo Beach, massage, balade dans les concept-stores, coucher de soleil au beach club et dîner dans un des nombreux restaurants. Le marathon est derrière, on recharge.",
        nuit: "Hôtel à Canggu · ‼️ à réserver",
        type: "repos",
      },
      {
        date: "Samedi 10 octobre",
        titre: "Canggu — deuxième jour de repos + préparatifs Komodo",
        resume:
          "Encore une journée détente, et le soir on prépare le petit sac pour la croisière.",
        details:
          "Deuxième journée tranquille à Canggu. Le soir, on prépare un petit sac pour la croisière (maillots, crème solaire, lampe, médicament contre le mal de mer) — l'idéal est de laisser les grosses valises en garde quelque part (à voir avec Jasmine si possible de les déposer à Canggu, sinon en garde à l'hôtel de Labuan Bajo pendant les deux nuits à bord). Retrait d'espèces avant Labuan Bajo (les distributeurs s'y vident le week-end : solde de croisière, frais de parc et pourboires sont souvent en liquide). Coucher tôt : départ très matinal demain.",
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
        titre: "Vol vers Labuan Bajo — nuit tampon pré-croisière",
        resume:
          "Vol du matin vers Labuan Bajo, puis journée douce sur place, la veille de l'embarquement.",
        details:
          "Départ de l'hôtel vers 5 h 15 - 5 h 30 : depuis Canggu, compter environ une heure jusqu'à l'aéroport de Denpasar (un peu plus loin que depuis Sanur, prévoir la marge). Vol du matin pour Labuan Bajo, sur l'île de Florès : AirAsia à 7 h 10 ou Batik Air à 7 h 55 (les deux seules compagnies sur cette ligne, ~1 h 15 de vol) ; billet modifiable obligatoire à cause du volcan Lewotobi. Arrivée en milieu de matinée, installation à l'Airbnb « Hotel Komodo » (déjà réservé), journée tranquille : front de mer, rencontre avec l'opérateur de croisière pour régler le solde et confirmer l'heure d'embarquement, coucher de soleil sur la baie. Arriver la veille est exigé par les opérateurs — c'est la première nuit tampon du plan.",
        nuit: "Airbnb « Hotel Komodo », Labuan Bajo · ✅ réservé",
        type: "vol",
      },
      {
        date: "Lundi 12 octobre",
        titre: "Croisière Komodo — jour 1 : embarquement",
        resume:
          "Embarquement à 11 h sur le voilier en bois, en cabine privée climatisée. Première après-midi de navigation.",
        details:
          "Embarquement à 11 h sur le phinisi (voilier traditionnel en bois), en cabine privée climatisée avec salle de bain. Croisière partagée de trois jours et deux nuits. Première après-midi de navigation et de snorkeling, mouillage au coucher du soleil. Le bateau est à réserver (voir le classement des cinq opérateurs comparés plus bas — le Lanakila en tête, avec départ du lundi confirmé). Les frais du parc national (~32 euros par personne, permis nominatif obligatoire) sont à régler en plus.",
        nuit: "À bord du phinisi, cabine privée · ‼️ croisière à réserver",
        type: "bateau",
      },
      {
        date: "Mardi 13 octobre",
        titre: "Croisière — jour 2 : Padar, les dragons et les mantas",
        resume:
          "Lever de soleil sur l'île de Padar, Pink Beach, les dragons de Komodo, puis la nage avec les raies mantas.",
        details:
          "La grande journée. Lever de soleil sur l'île de Padar et son panorama sur les trois baies, l'un des plus célèbres d'Indonésie. Puis Pink Beach et son sable rosé, marche sur l'île de Komodo à la rencontre des dragons (accompagnés d'un garde du parc), nage avec les raies mantas à Manta Point, et banc de sable de Taka Makassar. Soirée et nuit à bord au mouillage.",
        nuit: "À bord du phinisi, cabine privée",
        type: "bateau",
      },
      {
        date: "Mercredi 14 octobre",
        titre: "Croisière — jour 3 : retour au port, nuit tampon",
        resume:
          "Dernière baignade, retour à Labuan Bajo entre 10 h 30 et 15 h, et nuit sur la terre ferme.",
        details:
          "Dernière matinée en mer (snorkeling, tortues selon le bateau), puis retour au port de Labuan Bajo entre 10 h 30 et 15 heures selon l'opérateur. Après-midi tranquille à terre : longue douche, dîner de fruits de mer sur le front de mer. Cette nuit sur la terre ferme est la deuxième nuit tampon : aucun vol n'est programmé le jour du débarquement, par précaution face au volcan Lewotobi et aux heures de retour variables.",
        nuit: "Hôtel à Labuan Bajo · ‼️ à réserver",
        type: "bateau",
      },
    ],
  },
  {
    titre: "Bali — le final à Canggu",
    detail: "15 — 16 octobre",
    jours: [
      {
        date: "Jeudi 15 octobre",
        titre: "Retour à Canggu pour les deux dernières nuits",
        resume:
          "Vol de Labuan Bajo vers Denpasar, puis retour à Canggu pour finir le voyage dans le quartier que vous aimez.",
        details:
          "Vol du matin ou de la mi-journée de Labuan Bajo vers Denpasar (~1 h 15, billet modifiable). Puis route vers Canggu (~1 h depuis l'aéroport) pour les deux dernières nuits, là où le voyage a fait sa pause avant Komodo. Après-midi détente : plage de Berawa ou Echo Beach, piscine, et le soir un beach club au coucher du soleil ou un bon restaurant. Envie d'un dîner de poissons grillés les pieds dans le sable ? La baie de Jimbaran est à ~40 minutes si l'occasion se présente.",
        nuit: "Hôtel à Canggu · ‼️ à réserver",
        type: "vol",
      },
      {
        date: "Vendredi 16 octobre",
        titre: "Dernière journée complète à Bali",
        resume:
          "Plage, piscine, dernier massage, derniers achats — et valises tranquilles en fin de journée.",
        details:
          "Dernière journée entière, zéro obligation : plage, piscine, dernier massage en duo, derniers achats dans les boutiques de Canggu. En fin de journée, boucler les valises et caler le transfert vers l'aéroport pour demain matin (compter ~1 h de route depuis Canggu, donc départ assez tôt). Demander un petit déjeuner servi tôt. Dernier coucher de soleil sur la côte.",
        nuit: "Hôtel à Canggu · ‼️ à réserver",
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
          "Départ de Canggu vers 9 h, envol de Denpasar à 13 h 15 vers Singapour puis Munich.",
        details:
          "Départ de l'hôtel vers 9 h direction l'aéroport : depuis Canggu, compter environ une heure de route (un peu plus avec le trafic), pour être à l'aéroport vers 10 h 15 — les trois heures d'avance recommandées pour le vol international. Décollage à 13 h 15 vers Singapour (vol opéré par Singapore Airlines). L'escale à Changi dure 6 h 45 : le temps de dîner et d'aller voir la grande cascade intérieure du Jewel. Puis vol de nuit Lufthansa vers Munich.",
        nuit: "En vol, entre Singapour et Munich",
        type: "vol",
      },
      {
        date: "Dimanche 18 octobre",
        titre: "Retour à Luxembourg",
        resume:
          "Correspondance au petit matin à Munich, atterrissage à Luxembourg à 8 h 55.",
        details:
          "Correspondance au petit matin à Munich (vol LH 2316) puis atterrissage à Luxembourg à 8 h 55 — à la maison pour le petit déjeuner du dimanche, avec la journée entière pour récupérer. Bilan : vingt nuits sur place, les orangs-outans de Sumatra, Borobudur et Prambanan, la cascade de Tumpak Sewu, l'aube sur le mont Bromo, le lac turquoise du Kawah Ijen, les dragons et les raies mantas de Komodo, et cinq vraies nuits de plage à Bali. Une journée de canapé est officiellement prescrite.",
        nuit: "À la maison",
        type: "vol",
      },
    ],
  },
];

export const croisiere = {
  cadre:
    "Croisière partagée de trois jours et deux nuits au départ de Labuan Bajo, dans une cabine privée climatisée avec salle de bain à bord d'un phinisi (voilier traditionnel en bois). Embarquement le lundi 12 octobre vers 11 heures, retour le mercredi 14 octobre. Tous les bateaux sérieux couvrent les quatre incontournables : l'île de Padar, la Pink Beach, les dragons sur l'île de Komodo et la nage avec les raies mantas à Manta Point. Ce classement est le fruit de deux équipes de recherche indépendantes, et les prix ci-dessous ont été relevés directement sur les sites des opérateurs.",
  recommande:
    "Notre n°1 pour ce départ du lundi : le Lanakila Cruise — le seul dont le lundi est confirmé d'office (départs chaque lundi et jeudi, vérifié sur leur site), avec d'excellents avis et le meilleur prix. Le Naturalia (Komodo Luxury) est l'alternative idéale si vous préférez un bateau flambant neuf. En pratique : écrivez à deux ou trois d'entre eux, comparez les réponses (lundi confirmé + photos de la cabine + prix net), et prenez le premier qui répond proprement à tout.",
  operateurs: [
    {
      rang: 1,
      nom: "Lanakila Cruise",
      bateau:
        "Phinisi en bois de 29 mètres · 8 cabines, toutes climatisées avec salle de bain privée · 16 invités maximum",
      prix: "Superior ≈ 270 € · Deluxe (vue mer) ≈ 315 € · Master (balcon) ≈ 375 € par personne",
      departLundi: "Confirmé sur leur site — départs chaque lundi et jeudi",
      avis: "5,0 / 5 sur des avis indépendants récents (octobre 2025 à juin 2026), petit volume (~9 avis)",
      pour:
        "Le seul candidat fiable qui verrouille le départ du lundi, votre critère décisif. Itinéraire complet vérifié sur leur site (Padar au lever du soleil, Pink Beach, dragons sur l'île de Komodo, Manta Point), bon équipement de sécurité, et le meilleur prix du podium.",
      contre:
        "Bateau récent, donc peu de recul (~9 avis). Heure de retour le jour 3 à préciser. Réservation en direct par WhatsApp, sans protection de plateforme.",
      reserver:
        "WhatsApp +62 813-6749-5700 ou hello@lanakilacruise.com. Faire confirmer par écrit : départ du lundi 12 octobre, photos datées de la cabine privée exacte, heure de retour le jour 3.",
    },
    {
      rang: 2,
      nom: "Naturalia Cruise (via Komodo Luxury)",
      bateau:
        "Phinisi NEUF de 2026, 33 mètres · cabines climatisées avec salle de bain privée et eau chaude",
      prix: "Lagoon (pont inférieur) ≈ 370 € · Tide ≈ 400-445 € · cabines supérieures avec balcon jusqu'à ~660 € par personne",
      departLundi: "Possible : Komodo Luxury propose des départs « semaine » (lundi à mercredi) — confirmer la date fixe d'octobre",
      avis: "L'agence Komodo Luxury est notée 4,9 / 5 sur 469 avis — mais le bateau étant tout neuf, il n'a encore aucun avis indépendant à lui",
      pour:
        "Bateau flambant neuf, donc moderne et impeccable. Agence très solide qui possède sa propre flotte : pas de risque de se retrouver sur un autre bateau le matin du départ. Itinéraire complet.",
      contre:
        "Aucun avis indépendant pour l'instant : on se fie aux photos de l'agence. Acompte de 50 % non remboursable. Bien faire confirmer la date exacte du lundi 12.",
      reserver:
        "WhatsApp Komodo Luxury +62 811-381-08110. Exiger par écrit : la confirmation que le bateau embarqué sera bien le Naturalia (nom + photos datées), le départ du lundi 12 octobre, et des photos de la cabine privée exacte.",
    },
    {
      rang: 3,
      nom: "Vinca Voyages (via Komodo Luxury)",
      bateau:
        "Phinisi de 31 mètres (construit en 2020) · cabines avec salle de bain privée et climatisation · 12 à 18 personnes",
      prix: "Cabine Balinese ≈ 400 € · cabine Western/Japanese ≈ 480 € par personne",
      departLundi: "À confirmer (donné comme lundi et vendredi selon les sources)",
      avis: "4,9 / 5 sur sa PROPRE page TripAdvisor indépendante (15 avis, dont des récents 2025-2026)",
      pour:
        "Même agence sérieuse que le Naturalia, mais avec de vrais avis indépendants et plus d'historique (bateau de 2020). Petit bateau = ambiance plus intime.",
      contre:
        "Petit échantillon d'avis (15). Quelques plaintes du type « cabines plus petites qu'annoncé » sur le groupe. Lundi à confirmer. Le plus cher du podium.",
      reserver:
        "Via Komodo Luxury — confirmer le départ du lundi, le nom Vinca Voyages sur le reçu, et des photos récentes de la cabine.",
    },
    {
      rang: 4,
      nom: "IndonesiaJuara Trip",
      bateau:
        "Phinisi en bois avec cabines privées climatisées et salle de bain (nom du bateau à confirmer à la réservation)",
      prix: "≈ 240 à 300 € par personne (cabine privée climatisée)",
      departLundi: "Probable (opère en semaine), à confirmer par écrit",
      avis: "Agence du même groupe sérieux que Komodo Luxury (Juara Holding), 4,9 / 5 sur de nombreux avis",
      pour:
        "Excellent rapport qualité-prix, retour au port tôt (vers 10 h 30 le jour 3), itinéraire complet vérifié, agence très fiable avec de vrais avis. Un solide filet de sécurité si les trois premiers sont complets.",
      contre:
        "Confirmer le jour de départ (lundi) et le nom exact du bateau et de la cabine ; exiger des photos datées de la cabine privée.",
      reserver:
        "WhatsApp +62 811-994-1919 ou sales@indonesiajuara.asia ; ou via GetYourGuide / Viator pour la protection de paiement.",
    },
    {
      rang: 5,
      nom: "Captain Komodo (bateau Alcira)",
      bateau:
        "Alcira Phinisi — chambre privée (lit double) ; climatisation et salle de bain non précisées sur leur site (à vérifier)",
      prix: "Chambre privée ≈ 315 € pour deux (5 500 000 roupies) · programme le plus riche (+ tortues de Siaba Besar)",
      departLundi: "⚠️ NON — leurs départs d'octobre tombent les 10 et 13, pas le 12. Ne convient pas à un embarquement lundi 12 (sauf à décaler).",
      avis: "Bonne réputation, mais vérifier le volume d'avis récents",
      pour:
        "Le programme le plus riche du lot (tortues, Kanawa) et le prix le plus bas. Bateau avec sa propre billetterie.",
      contre:
        "Départs d'octobre les 10 et 13 octobre : incompatible avec votre lundi 12. Climatisation et salle de bain privée non confirmées sur leur site — à vérifier impérativement avant de réserver.",
      reserver:
        "WhatsApp +62 813-3871-5746 — seulement si vous acceptez de décaler au 13 octobre, et après confirmation écrite de la climatisation et de la salle de bain privée.",
    },
  ],
  aRetenir: [
    "Verrouiller le départ du lundi 12 octobre PAR ÉCRIT avant tout paiement : c'est le critère décisif, et il n'est confirmé d'office que sur le Lanakila.",
    "Exiger le nom exact du bateau, le numéro de la cabine privée et des photos datées de cette cabine précise (climatisée + salle de bain). Le nom du bateau doit figurer sur le reçu — c'est la preuve clé en cas de litige.",
    "Bien préciser « cabine privée fermée, base 2 personnes », et non un simple lit dans une cabine partagée : c'est le piège classique des tarifs bas en open trip.",
    "Demander le prix net tout compris : les frais d'entrée du parc national (~32 € par personne) sont souvent exclus, et vérifier qu'aucun supplément carburant ne sera annoncé à la dernière minute.",
    "Acompte de 30 à 50 % maximum, jamais 100 % d'avance, et toujours sur un compte au nom de la société. De préférence par carte ou lien de paiement officiel pour garder un recours.",
    "Depuis avril 2026, le parc impose un permis nominatif (application SiORA) et l'île de Padar est limitée à 60 visiteurs par jour : transmettre les passeports à l'opérateur dès la réservation.",
    "Confirmer l'heure de retour le jour 3 (elle varie de 9 h 30 à 15 heures), et que les dragons soient bien vus sur l'île de Komodo et non sur Rinca.",
  ],
  aEviter: [
    "Komodo Boat Charter / « Evan » (opère aussi sous KLM Tunggadewi) : remboursements promis jamais versés, départs retardés volontairement.",
    "Molas Lino Trip : arnaque à l'acompte documentée — cesse de répondre au moment du second paiement.",
    "Komodo Sailing Tour / « Adrian » et « Berto boat tour » : vendent une image très éloignée de la réalité.",
    "Le bateau Gandiva en open trip : il ne part que le vendredi (départ lundi impossible) ; et ne jamais réserver sa cabine premium « Arjuna » (avis récents accablants : cafards, salle de bain insalubre, bruit).",
    "Tout prix nettement sous le marché (une cabine privée crédible coûte ~270 à 480 € par personne) avec paiement à 100 % d'avance par virement : appât classique avant disparition.",
    "Les vieux phinisi mal entretenus : naufrages documentés en 2024-2025 (KM Putri Sakinah, KM Budi Utama, Putri Papua). Vérifier gilets et radeaux, ne jamais naviguer par grosse houle.",
  ],
};

export const baliBase = {
  avant: {
    zone: "Canggu — 3 nuits, du 8 au 11 octobre",
    pourquoi:
      "Votre choix pour décompresser après le marathon de Java : le quartier le plus vivant de Bali, plein de cafés, boutiques, beach clubs et bons restaurants (et un ami sur place, Jasmine). À savoir honnêtement : Canggu est plus loin de Gilimanuk (3 h 30 à 4 h 30 de route depuis le ferry) et de l'aéroport (~1 heure) qu'un Sanur — d'où un transfert un peu plus long le dimanche matin pour le vol vers Komodo. Rien de bloquant, juste à anticiper.",
    hotels: [
      "À choisir selon le budget et l'ambiance recherchée (boutique, beach club, villa avec piscine) — Canggu regorge d'adresses ; réservez tôt car octobre reste prisé.",
      "Repères : la zone de Berawa (beach clubs, restaurants) ou Echo Beach (plus surf/tranquille) sont les plus agréables pour 3 nuits.",
    ],
  },
  apres: {
    zone: "Canggu — 2 nuits, du 15 au 17 octobre",
    pourquoi:
      "Votre choix : finir le voyage là où il a fait sa pause, dans le quartier que vous aimez. À anticiper pour le départ du samedi : l'aéroport est à ~1 heure de Canggu, donc on part assez tôt le matin (vers 9 h) pour le vol de 13 h 15. Et si l'envie d'un dîner de poissons grillés à Jimbaran se présente un soir, c'est à ~40 minutes.",
    hotels: [
      "Même quartier que le premier séjour : vous pouvez reprendre le même hôtel, ou en changer pour varier (Berawa pour les beach clubs, Echo Beach pour le calme).",
      "Réservez tôt : octobre reste prisé à Canggu.",
    ],
  },
};

export const checklist = [
  {
    quand: "✅ Déjà réservé",
    quoi: "Vols internationaux (Air Dolomiti + Lufthansa/Singapore Airlines) · JW Marriott Medan (27/9) · Trek + lodge Sumatra Orangutan Explore : New SOE Lodge (28 et 30/9) + trek 2J/1N (29-30/9), acompte versé · Bohemian Jogja Villas (1er et 2/10) · Shalimar Boutique Hotel, Malang (3 et 4/10) · Airbnb « Hotel Komodo », Labuan Bajo (nuit tampon du 11/10, avant la croisière).",
  },
  {
    quand: "Le plus urgent",
    quoi: "Réserver la croisière Komodo du lundi 12 octobre (Lanakila en tête — départ lundi confirmé), avec confirmation écrite du bateau, de la cabine et de la date, et transmettre les passeports pour le permis du parc (île de Padar limitée à 60 visiteurs par jour).",
  },
  {
    quand: "Dès que possible",
    quoi: "Réserver le vol direct Lion Air JT963 Medan → Yogyakarta du jeudi 1er octobre (17 h 20), et la navette Bukit Lawang → aéroport de Medan le même jour.",
  },
  {
    quand: "Dès que possible",
    quoi: "Réserver les hôtels encore ouverts : Bromo B&B (5/10), Banyuwangi ×2 nuits (6 et 7/10), Canggu (les deux séjours : 8-10/10 puis 15-16/10), et l'hôtel post-croisière à Labuan Bajo (nuit tampon du 14/10).",
  },
  {
    quand: "Dès que possible",
    quoi: "Réserver les vols intérieurs Bali → Labuan Bajo (dimanche 11/10) et Labuan Bajo → Bali (jeudi 15/10) en billets MODIFIABLES (risque volcan Lewotobi).",
  },
  {
    quand: "Mi-août (ouverture des ventes)",
    quoi: "Acheter les billets du train Yogyakarta → Malang du samedi 3 octobre sur l'application Access by KAI (le train est quotidien, il faut juste être au rendez-vous de l'ouverture des ventes).",
  },
  {
    quand: "Dès l'ouverture, au plus tard début septembre",
    quoi: "Réserver le « Borobudur Sunrise » du 2 octobre par WhatsApp au +62 857 2758 7800 (si vous voulez le lever de soleil sur le temple), et le billet électronique nominatif du mont Bromo du 6 octobre sur bromotenggersemeru.id.",
  },
  {
    quand: "Début septembre",
    quoi: "Faire les demandes de visa électronique en ligne, et réserver les chauffeurs privés (Tumpak Sewu le 4/10, transfert vers Cemoro Lawang le 5/10, taxi Bromo → Banyuwangi le 6/10, et le chauffeur du ferry vers Canggu le 8/10).",
  },
  {
    quand: "La semaine du départ",
    quoi: "Consulter Magma Indonesia pour l'état des volcans (Bromo, Kawah Ijen, Lewotobi), et acheter les billets du ferry sur l'application Ferizy la veille (impossible près du port).",
  },
];

export const vigilance = [
  "Croisière Komodo : verrouiller le départ du lundi 12 octobre par écrit avant tout paiement (confirmé d'office seulement sur le Lanakila), et transmettre les passeports tôt pour le permis (Padar limité à 60 personnes par jour).",
  "Le ferry Java-Bali du 8 octobre : billets uniquement sur l'application Ferizy, à acheter la veille au soir — un blocage par géolocalisation empêche l'achat à moins de 2,6 kilomètres du port.",
  "Le volcan Lewotobi peut perturber les vols de Labuan Bajo : billets intérieurs MODIFIABLES obligatoires, et les deux nuits tampons à Labuan Bajo (le 11 et le 14) ne doivent surtout pas être supprimées.",
  "Vol du jeudi 1er octobre : réserver le direct Lion Air JT963 de 17 h 20 (2 h 50, sans escale), et non l'autre Lion, le JT935 de 11 h 35, qui met quatre heures à cause d'une escale. Plan B si le direct n'opère plus : un billet unique Garuda via Jakarta (GA 187 puis GA 202) — en transitant par l'aéroport international Soekarno-Hatta (CGK), jamais par Halim.",
  "Depuis Canggu, l'aéroport et Gilimanuk sont plus loin que depuis Sanur : prévoir ~1 h pour l'aéroport le dimanche 11, et 3 h 30 à 4 h 30 de route depuis le ferry le jeudi 8. À anticiper, sans plus.",
  "Mont Bromo en autonomie : avoir du liquide (pas de distributeur à Cemoro Lawang), partir tôt pour le point de vue, et prévoir l'entrée du parc (~12-15 € par personne) si vous montez au cratère.",
  "Le Kawah Ijen se fait en version « lac depuis la crête » (pas de feu bleu) : plus fiable et bien plus reposant. Vérifier les conditions d'accès la semaine du départ.",
  "Début octobre marque la transition vers la saison des pluies : averses possibles en fin d'après-midi sur Java et Bali.",
];

export const budget = {
  bas: 5450,
  moyen: 6450,
  haut: 7750,
};

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
  { de: "ijen", vers: "canggu", mode: "bateau" },
  { de: "canggu", vers: "labuan-bajo", mode: "avion" },
  { de: "labuan-bajo", vers: "komodo", mode: "bateau" },
  { de: "labuan-bajo", vers: "canggu", mode: "avion" },
];
