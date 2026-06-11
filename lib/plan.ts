// ─────────────────────────────────────────────────────────────
// Le plan final du voyage — données vérifiées par les agents
// (5 rapports de vérification + arbitrage + contrôle de cohérence)
// ─────────────────────────────────────────────────────────────

export const infos = {
  surtitre: "Indonésie · du 26 septembre au 18 octobre 2026",
  titre: "Notre itinéraire",
  sousTitre:
    "Sumatra, Java, Bali et Komodo en vingt nuits : les orangs-outans, le lever de soleil au sommet de Borobudur, la cascade de Tumpak Sewu, le mont Bromo, le lac turquoise du Kawah Ijen, les dragons et les raies mantas — et cinq vraies nuits de plage à Bali, dont trois consécutives.",
  chiffres: [
    {
      valeur: "20",
      label: "nuits sur place",
      detail: "du 27 septembre au 16 octobre inclus",
    },
    {
      valeur: "5",
      label: "nuits de plage à Bali",
      detail: "dont 3 consécutives à Sanur avant la croisière",
    },
    {
      valeur: "2",
      label: "réveils avant l'aube",
      detail: "Borobudur et Bromo seulement — chacun suivi de vrai repos",
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
    compagnie: "Air Dolomiti (vol EN 8755)",
  },
  {
    trajet: "Francfort → Singapour",
    horaire: "samedi 26 · 21 h 50 → dimanche 16 h 30",
    compagnie: "Lufthansa (vol LH 780, Boeing 747, vol de nuit d'environ 12 h 40)",
  },
  {
    trajet: "Singapour → Medan",
    horaire: "dimanche 27 · 19 h 00 → 19 h 35",
    compagnie: "Singapore Airlines (vol SQ 994, 1 h 35 de vol)",
  },
];

export const volsRetour = [
  {
    trajet: "Bali (Denpasar) → Singapour",
    horaire: "samedi 17 · 13 h 15 → 16 h 00",
    compagnie: "Singapore Airlines (vol SQ 939, Boeing 787)",
  },
  {
    trajet: "Singapour → Munich",
    horaire: "samedi 17 · 22 h 45 → dimanche 5 h 15",
    compagnie:
      "Lufthansa (vol LH 769, Airbus A350) — escale de 6 h 45 à Singapour : le temps de dîner et de voir la cascade du Jewel",
  },
  {
    trajet: "Munich → Luxembourg",
    horaire: "dimanche 18 · 7 h 50 → 8 h 55",
    compagnie: "Lufthansa (1 h 05 de vol)",
  },
];

export const decision = {
  intro:
    "Trois façons d'organiser les mêmes envies ont été comparées puis vérifiées point par point : vols réels du jeudi, jours d'ouverture des volcans, horaires de ferry et de train. Voici le résultat.",
  pourquoi:
    "Le scénario retenu décale la traversée de Java d'un jour. Il laisse une vraie nuit de repos à Bukit Lawang après le trek avant le vol du jeudi 1er octobre. Il place le Kawah Ijen le mercredi 7 octobre, loin de sa fermeture mensuelle du vendredi 2 octobre, et le mont Bromo le mardi 6 octobre, un jour de semaine calme. La traversée vers Bali tombe un jeudi : seul le ferry public navigue ce jour-là, et il fonctionne vingt-quatre heures sur vingt-quatre. Surtout, ce scénario offre cinq nuits de plage à Bali, dont trois consécutives à Sanur avant la croisière, et deux nuits tampons à Labuan Bajo protègent la croisière et le vol du retour contre les caprices du volcan Lewotobi.",
  comparaison: [
    {
      scenario: "A — Tout enchaîné sans décalage",
      bali: "3 nuits possibles, mais en comprimant tout le reste",
      fatigue:
        "Très élevée : il faudrait enchaîner la fin du trek et le vol le même jour — physiquement impossible",
      verdict: "Éliminé",
    },
    {
      scenario: "B — Le décalage d'un jour (retenu)",
      bali: "5 nuits, dont 3 consécutives à Sanur",
      fatigue:
        "Maîtrisée : aucune journée n'enchaîne deux gros efforts, vraie récupération après chaque nuit courte",
      verdict: "✓ Gagnant — validé par les 5 rapports",
    },
    {
      scenario: "C — La croisière en toute fin de séjour",
      bali: "Jusqu'à 6 nuits d'affilée avant la croisière",
      fatigue: "Faible pendant le séjour, mais finale très stressante",
      verdict:
        "Éliminé : si le volcan Lewotobi ferme l'aéroport de Labuan Bajo un jour ou deux, l'avion du retour est raté",
    },
  ],
};

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
          "Départ de l'aéroport de Luxembourg à 18 h 30, correspondance à Francfort, puis long vol de nuit vers Singapour. Conseil pratique : réservez vos sièges côte à côte dès maintenant, le tronçon Francfort–Singapour dure environ douze heures. Glissez dans le bagage cabine une tenue de rechange et l'essentiel du trek (chaussures de marche, lampe frontale, chaussettes hautes) au cas où une valise prendrait du retard : le trek commence le surlendemain matin de l'arrivée.",
        nuit: "En vol, entre Francfort et Singapour",
        type: "vol",
      },
      {
        date: "Dimanche 27 septembre",
        titre: "Arrivée à Medan, première nuit en Indonésie",
        resume:
          "Atterrissage à l'aéroport de Medan à 19 h 35, puis transfert et nuit au centre de Medan.",
        details:
          "Correspondance à Singapour puis atterrissage à l'aéroport de Kualanamu, l'aéroport de Medan, à 19 h 35. Passage de l'immigration (visa électronique préparé en ligne avant le départ, environ 33 euros par personne), retrait d'espèces au distributeur et achat d'une carte SIM Telkomsel dans le hall — il n'y a aucun distributeur de billets à Bukit Lawang. On rejoint ensuite un hôtel au centre de Medan (environ une heure de route ou de train depuis l'aéroport) plutôt qu'un hôtel d'aéroport : c'est mieux placé pour la petite matinée de visites de demain, et tout aussi bien pour la route vers la jungle ensuite. Coucher tranquille après une vingtaine d'heures de voyage.",
        nuit: "Hôtel au centre de Medan, environ 40 à 60 € la chambre",
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
        titre: "Une matinée à Medan, puis route vers la jungle",
        resume:
          "Petit tour culturel de Medan le matin, déjeuner local, puis trois heures de route jusqu'à Bukit Lawang. Soirée de repos au bord de la rivière.",
        details:
          "Medan n'est pas une destination, mais elle a un joli petit circuit en centre-ville, tout regroupé : le manoir Tjong A Fie (une demeure de marchand sino-malais du 19e siècle magnifiquement restaurée, visite guidée d'environ une heure — le clou), la Grande Mosquée Masjid Raya Al-Mashun (superbe architecture mauresque, entrée libre) et le palais Maimun du sultan de Deli. Le tout se fait tranquillement en une matinée avec le chauffeur, sans se presser. Déjeuner local — Medan est réputée pour sa cuisine — puis route vers Bukit Lawang dans l'après-midi (environ trois heures, voiture privée réservée via le lodge). Arrivée au lodge au bord de la rivière Bohorok vers 17 heures : installation, baignade, briefing du trek avec le guide, dîner et coucher tôt. Demain, on part reposés à la rencontre des orangs-outans.",
        nuit: "EcoTravel Cottages à Bukit Lawang, environ 25 à 30 € — cinq chambres seulement, à réserver très tôt",
        type: "repos",
      },
      {
        date: "Mardi 29 septembre",
        titre: "Le trek commence : cap sur la jungle de Gunung Leuser",
        resume:
          "Reposés du voyage, on entre dans la jungle de Gunung Leuser à la rencontre des orangs-outans. Première nuit au campement, au bord de la rivière.",
        details:
          "Départ du trek dans la matinée, en petit groupe de six personnes maximum, avec un guide certifié de la région. Une courte traversée de plantations d'hévéas, on franchit la porte du parc national classé à l'UNESCO, et souvent moins d'une heure de marche suffit pour les premiers orangs-outans. C'est ce premier jour que se font presque toutes les observations — cinq à neuf orangs-outans en général, plus des semnopithèques, des macaques à longue queue, des calaos et des varans. Tout est compris dans l'excursion : guide anglophone, porteur, cuisinier, tous les repas et l'eau, le matériel de camping et les frais d'entrée du parc. Déjeuner en forêt, arrivée au campement au bord de la rivière en milieu d'après-midi : baignade, coucher de soleil sur la jungle, dîner préparé par l'équipe — et même une petite marche nocturne pour découvrir la forêt de nuit.",
        nuit: "Campement en jungle au bord de la rivière, inclus dans le trek",
        type: "aventure",
      },
      {
        date: "Mercredi 30 septembre",
        titre: "Deuxième jour de jungle et retour en bouée",
        resume:
          "Matinée de marche dans la forêt profonde, puis descente de la rivière en bouée jusqu'au village, entre 14 et 15 heures.",
        details:
          "Réveil au son de la jungle — l'heure qui suit l'aube au campement est le meilleur moment pour la faune. Matinée de marche dans une forêt plus dense, baignade en rivière, puis retour spectaculaire au village en bouée sur la rivière Bohorok, le « taxi de la jungle » : c'est la fin emblématique du trek. L'excursion se termine entre 14 et 15 heures au village ; installation au lodge, douche bien méritée et soirée tranquille au bord de l'eau. Chaussettes hautes et pantalon rentré dedans contre les sangsues, surtout après une averse — fin septembre reste la basse saison, peu de monde sur les sentiers. Le soir, confirmer auprès du lodge la voiture de demain à 6 h 30 pour l'aéroport, et préparer les sacs : la grosse journée de transfert vers Java commence tôt.",
        nuit: "EcoTravel Cottages à Bukit Lawang, environ 25 à 30 €",
        type: "aventure",
      },
    ],
  },
  {
    titre: "Java — Borobudur et les volcans",
    detail: "1ᵉʳ — 7 octobre",
    jours: [
      {
        date: "Jeudi 1ᵉʳ octobre",
        titre: "De la jungle de Sumatra à Yogyakarta — vol direct l'après-midi",
        resume:
          "Dernière matinée tranquille au bord de la rivière, puis vol DIRECT Lion Air de Medan à Yogyakarta (17 h 20 → 20 h 10). Hôtel vers 21 h 30.",
        details:
          "Plus besoin de partir à l'aube : dernière matinée tranquille au lodge, au bord de la rivière, puis route vers l'aéroport de Kualanamu vers midi (trois à trois heures trente). On prend le vol DIRECT Lion Air JT963 à 17 h 20, arrivée à Yogyakarta à 20 h 10 — deux heures cinquante, sans escale, environ 146 € par personne. À éviter : l'autre vol Lion (numéro JT935, opéré par Super Air Jet) de 11 h 35, qui met quatre heures parce qu'il fait une escale intermédiaire. Plan B si le direct ne devait plus opérer à ces dates : un billet unique Garuda via Jakarta (vol GA 187 puis GA 202, arrivée vers 18 h 15) — éviter au passage le vol Citilink de 9 h 30 qui atterrit au mauvais aéroport de Jakarta (Halim). À l'arrivée, 45 minutes à une heure de route jusqu'au centre de Yogyakarta, hôtel vers 21 h 30. Coucher direct : demain, réveil à 3 h 45 pour Borobudur.",
        nuit: "Hôtel au centre de Yogyakarta, près de la rue Malioboro, environ 50 à 70 €",
        type: "vol",
      },
      {
        date: "Vendredi 2 octobre",
        titre: "Lever de soleil au sommet de Borobudur",
        resume:
          "Montée sur le temple de Borobudur au lever du soleil, puis après-midi entièrement libre à Yogyakarta.",
        details:
          "Réveil vers 3 h 45, départ en voiture privée vers 4 h 15 pour environ une heure et quart de route. Le vrai lever de soleil depuis le temple est un produit spécifique appelé « Borobudur Sunrise », géré par InJourney : 100 places par jour seulement, environ 1 000 000 de roupies par personne (≈ 55 euros), réservation directe par WhatsApp au +62 857 2758 7800 — sandales spéciales fournies et guide obligatoire. (La montée standard en journée, elle, se réserve sur ticket.borobudurpark.com : 455 000 roupies, créneaux à partir de 8 h 30, quota de 4 000 personnes par jour.) C'est un jour de semaine sans vacances scolaires indonésiennes : affluence faible. C'est le seul temple du voyage, comme convenu. Retour à Yogyakarta en fin de matinée, puis après-midi totalement libre : sieste, piscine, flânerie, massage.",
        nuit: "Hôtel au centre de Yogyakarta, environ 50 à 70 €",
        type: "aventure",
      },
      {
        date: "Samedi 3 octobre",
        titre: "Traversée de Java en train jusqu'à Malang",
        resume:
          "Train direct de 10 h 45 à environ 17 h 30, à travers les rizières et les volcans.",
        details:
          "Matinée tranquille avec un vrai petit déjeuner, puis train Malioboro Ekspres au départ de Yogyakarta à 10 h 50, arrivée à Malang vers 17 h 30. C'est le seul train direct de jour sur ce trajet, en classe exécutive confortable, avec des paysages superbes de rizières et de volcans. Bonne nouvelle vérifiée : ce train est devenu quotidien (il ne l'était pas avant mai 2024) — il suffit d'acheter les billets dès l'ouverture des ventes, 45 jours avant, soit vers la mi-août, sur l'application Access by KAI. Plan de secours quand même sous le coude : train Sancaka vers Surabaya puis correspondance vers Malang. Installation à l'hôtel et dîner dans le quartier colonial.",
        nuit: "Hôtel à Malang, environ 40 à 60 €",
        type: "route",
      },
      {
        date: "Dimanche 4 octobre",
        titre: "La cascade de Tumpak Sewu",
        resume:
          "Excursion à la journée : panorama sur la cascade, puis descente au pied du rideau d'eau.",
        details:
          "Départ vers 5 h 30 avec un chauffeur privé, environ deux heures et demie de route vers le sud. D'abord la vue depuis le panorama supérieur sur Tumpak Sewu, un rideau d'eau de 120 mètres en fer à cheval surnommé « les mille cascades », puis descente au pied de la cascade par des escaliers et des échelles de bambou raides et glissants : chaussures à bonne adhérence indispensables, sac étanche pour le téléphone, et il faut accepter d'être trempés. Possibilité d'ajouter la grotte voisine de Goa Tetes si l'énergie est là. Retour à Malang en milieu d'après-midi : repos, massage éventuel, dîner tranquille.",
        nuit: "Hôtel à Malang, environ 40 à 60 €",
        type: "aventure",
      },
      {
        date: "Lundi 5 octobre",
        titre: "Pause à Malang, puis montée vers le mont Bromo",
        resume:
          "Matinée libre, puis transfert l'après-midi vers le village de Cemoro Lawang, au bord de la caldeira.",
        details:
          "Matinée de vraie pause à Malang : grasse matinée, café, rien d'obligatoire. En début d'après-midi, transfert privé vers Cemoro Lawang, le village perché à environ 2 200 mètres au bord de la caldeira du mont Bromo (environ trois heures de route). Installation dans une maison d'hôtes simple, dîner chaud tôt, préparation des vêtements chauds — il fait 5 à 10 degrés à l'aube là-haut : bonnet, polaire, coupe-vent. Coucher vers 20 heures, le réveil sonne à 3 heures. Vérifier une dernière fois que le billet électronique du parc est bien sur les téléphones : il est nominatif (numéros de passeport), obligatoire, acheté à l'avance sur le site officiel bromotenggersemeru.id — 255 000 roupies par personne, même tarif tous les jours.",
        nuit: "Maison d'hôtes à Cemoro Lawang, environ 30 à 50 €",
        type: "route",
      },
      {
        date: "Mardi 6 octobre",
        titre: "Lever de soleil sur le mont Bromo, puis longue route vers l'est",
        resume:
          "Aube au point de vue, traversée de la mer de sable, puis six à sept heures de route vers Banyuwangi.",
        details:
          "Réveil à 3 heures, jeep vers le point de vue du mont Penanjakan pour le lever du soleil sur le Bromo, le Batok et le Semeru émergeant de la mer de nuages, puis traversée de la mer de sable. Le billet électronique nominatif est contrôlé à l'entrée. Le volcan est en vigilance de niveau 2 : les points de vue et la mer de sable sont entièrement ouverts, seule l'approche du cratère à moins d'un kilomètre est interdite. Ce mardi est un jour de semaine calme. Retour à la maison d'hôtes vers 8 h 30, petit déjeuner, puis longue route vers Banyuwangi, à la pointe orientale de Java : six à sept heures avec des pauses. Dîner et coucher tranquille — et cette fois, vraie nuit complète : pas de réveil nocturne, l'Ijen se fera en douceur demain matin.",
        nuit: "Hôtel à Banyuwangi, environ 40 à 60 € — vraie nuit complète",
        type: "aventure",
      },
      {
        date: "Mercredi 7 octobre",
        titre: "Le lac turquoise du Kawah Ijen, en douceur",
        resume:
          "Montée tranquille en matinée pour le plus grand lac acide du monde — sans le feu bleu, sans réveil nocturne. Après-midi de repos.",
        details:
          "Choix assumé : on saute le feu bleu et sa descente nocturne dans les fumées de soufre — instable en 2026 (fermé par intermittence pour travaux), polarisant, et qui imposerait un réveil à minuit et demie. On garde en revanche le vrai joyau : le lac turquoise, le plus grand lac acide du monde (pH 0,13, couleur irréelle), accessible depuis la crête. Après une nuit complète, départ vers 6 à 7 heures pour le parking de Paltuding (environ une heure de route), puis montée régulière de 3 kilomètres (environ deux heures) dans la fraîcheur du matin, avant la grosse chaleur. Arrivée sur la crête en milieu de matinée : vue plongeante sur le lac fumant et ses mineurs de soufre, panorama sur les volcans alentour. Redescente vers midi, retour à l'hôtel, après-midi de récupération totale au bord de la piscine. C'est la dernière étape de Java : demain, Bali.",
        nuit: "Hôtel à Banyuwangi, environ 40 à 60 € — vraie nuit complète de récupération",
        type: "aventure",
      },
    ],
  },
  {
    titre: "Bali — trois nuits de chill",
    detail: "8 — 10 octobre",
    jours: [
      {
        date: "Jeudi 8 octobre",
        titre: "Ferry vers Bali et route jusqu'à Sanur",
        resume:
          "Traversée en ferry public puis trois heures et demie à quatre heures et demie de route. Arrivée à l'hôtel vers 15 h - 16 h.",
        details:
          "Départ de l'hôtel vers 8 heures, heure de Java. Le ferry public de Ketapang vers Gilimanuk fonctionne vingt-quatre heures sur vingt-quatre, départ toutes les vingt à trente minutes, traversée de trente à quarante-cinq minutes. Important depuis décembre 2025 : le billet s'achète en ligne sur l'application Ferizy AVANT d'approcher du port — un blocage par géolocalisation empêche l'achat à moins de 2,6 kilomètres du port et il n'y a plus de guichet. À acheter la veille au soir, ou demander au chauffeur de s'en charger. À l'arrivée, on avance les montres d'une heure : Bali vit à l'heure de l'Indonésie centrale. Puis route vers Sanur avec un chauffeur privé : trois heures et demie à quatre heures et demie en conditions réelles, avec une pause déjeuner. Arrivée à l'hôtel entre 15 et 16 heures, premier plongeon dans la piscine face à la mer et cocktail au coucher du soleil. Le marathon est terminé : trois nuits consécutives sans bouger commencent.",
        nuit: "Puri Santrian Beach Resort and Spa à Sanur, environ 100 à 125 € la nuit — première des trois nuits",
        type: "route",
      },
      {
        date: "Vendredi 9 octobre",
        titre: "Sanur, premier jour de pur repos",
        resume:
          "Rien au programme : lagon, promenade en bord de mer, massage et dîner romantique sur la plage.",
        details:
          "Programme officiel : rien. Pour les volontaires, lever de soleil sur la promenade de Sanur vers 6 h 15, café à la main — sinon grasse matinée. Baignade dans le lagon calme à marée haute (consulter la table des marées, le récif découvre à marée basse), déjeuner les pieds dans le sable, puis massage en fin d'après-midi : The Nest Beachside Spa en bord de plage (massage balinais d'une heure pour environ 14 euros) ou Glo Day Spa, le plus réputé de Sanur (à partir d'environ 18 euros) — réserver la veille. Dîner romantique au Kayumanis Seaside, sur la plage de Sindhu.",
        nuit: "Puri Santrian Beach Resort and Spa à Sanur",
        type: "repos",
      },
      {
        date: "Samedi 10 octobre",
        titre: "Sanur, deuxième jour de pur repos",
        resume:
          "Vélo plat sur la promenade, beach club, deuxième massage, et préparation du petit sac de croisière.",
        details:
          "Deuxième journée sans obligation : trente minutes de vélo plat sur la promenade pavée de cinq kilomètres, transats au Byrdhouse Beach Club ou au Genius Cafe, glace chez Massimo, nasi goreng à 3 euros dans un warung local. Deuxième massage de l'après-midi — c'est le rythme local. Dîner au Three Monkeys, la valeur sûre du quartier. Le soir, préparer un petit sac pour la croisière (maillots, crème solaire, lampe, médicament contre le mal de mer) : les grosses valises resteront en garde à l'hôtel de Labuan Bajo pendant les deux nuits à bord. Coucher tôt, la voiture passe à 5 h 45.",
        nuit: "Puri Santrian Beach Resort and Spa à Sanur",
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
        titre: "Vol vers Labuan Bajo, la porte du parc de Komodo",
        resume:
          "Vol du matin vers Labuan Bajo, puis journée douce sur place, la veille de l'embarquement.",
        details:
          "Départ de l'hôtel vers 5 h 15 - 5 h 30 : par la route à péage, l'aéroport de Denpasar n'est qu'à quinze à trente minutes à cette heure-là. Vol du matin pour Labuan Bajo, sur l'île de Florès : AirAsia à 7 h 10 ou Batik Air à 7 h 55 (les deux seules compagnies sur cette ligne — environ une heure et quart de vol) ; billet modifiable obligatoire à cause du volcan Lewotobi qui perturbe ponctuellement les vols de la région. Arrivée en milieu de matinée, installation à l'hôtel, puis journée tranquille : front de mer, rencontre avec l'opérateur de croisière pour régler le solde et confirmer l'heure d'embarquement, coucher de soleil sur la baie. Arriver la veille de l'embarquement est exigé par les opérateurs — et c'est la première nuit tampon du plan.",
        nuit: "Hôtel à Labuan Bajo, environ 50 à 70 €",
        type: "vol",
      },
      {
        date: "Lundi 12 octobre",
        titre: "Croisière, jour 1 : embarquement sur le voilier",
        resume:
          "Embarquement à 11 heures : île de Kelor, baignade à Manjarite, et l'envol des chauves-souris au coucher du soleil.",
        details:
          "Embarquement à 11 heures sur le voilier traditionnel en bois (croisière partagée de trois jours et deux nuits, cabine privée climatisée). Première après-midi de navigation : l'île de Kelor et sa courte montée panoramique, baignade avec masque et tuba à Manjarite, puis mouillage devant l'île de Kalong au coucher du soleil, quand des milliers de renards volants s'envolent au-dessus de la mer. Dîner à bord sous les étoiles. Les frais du parc national (environ 31 euros par personne) auront été réglés d'avance avec le permis nominatif obligatoire.",
        nuit: "À bord, cabine privée climatisée, au mouillage dans le parc",
        type: "bateau",
      },
      {
        date: "Mardi 13 octobre",
        titre: "Croisière, jour 2 : Padar, les dragons et les raies mantas",
        resume:
          "Lever de soleil sur l'île de Padar, Pink Beach, les dragons de Komodo, puis la nage avec les raies mantas.",
        details:
          "La grande journée. Réveil avant l'aube et montée sur l'île de Padar pour le lever du soleil sur les trois baies — l'un des panoramas les plus célèbres d'Indonésie. Puis baignade à Pink Beach et son sable rosé, marche sur l'île de Komodo à la rencontre des dragons, obligatoirement accompagnés d'un garde du parc (si le bateau prévoit l'île de Rinca à la place, exiger l'île de Komodo avant la réservation), nage avec les raies mantas à Manta Point, et arrêt sur le banc de sable immaculé de Taka Makassar. Soirée et nuit à bord au mouillage.",
        nuit: "À bord, cabine privée climatisée, au mouillage dans le parc",
        type: "bateau",
      },
      {
        date: "Mercredi 14 octobre",
        titre: "Croisière, jour 3 : les tortues, puis retour au port",
        resume:
          "Dernière baignade avec les tortues, retour à Labuan Bajo, et nuit tampon sur la terre ferme.",
        details:
          "Dernière matinée en mer : nage avec masque et tuba au milieu des tortues à Siaba Besar ou autour de l'île de Kanawa selon le bateau, puis retour au port de Labuan Bajo entre 10 h 30 et 15 heures selon l'opérateur. Après-midi tranquille à terre : longue douche, dîner de fruits de mer sur le front de mer. Cette nuit sur la terre ferme est la deuxième nuit tampon du plan : aucun vol n'est programmé le jour même du débarquement, par précaution face au volcan Lewotobi et aux heures de retour variables des bateaux.",
        nuit: "Hôtel à Labuan Bajo, environ 50 à 70 €",
        type: "bateau",
      },
    ],
  },
  {
    titre: "Bali — le final",
    detail: "15 — 16 octobre",
    jours: [
      {
        date: "Jeudi 15 octobre",
        titre: "Retour à Bali, installation à Jimbaran",
        resume:
          "Vol vers Denpasar, puis début des deux dernières nuits de plage, à un quart d'heure de l'aéroport.",
        details:
          "Vol du matin ou de la mi-journée de Labuan Bajo vers Denpasar (environ une heure et quart, billet modifiable là aussi), puis quinze à vingt minutes de route seulement jusqu'à Jimbaran — la zone idéale pour finir : vraie plage de sable doré baignable, couchers de soleil face à la mer, et l'aéroport tout proche pour le départ. Installation à l'hôtel et après-midi entre la piscine et la plage. Le soir, l'expérience emblématique de la baie : dîner de poissons grillés directement sur le sable face au coucher du soleil, dans l'un des restaurants de plage, environ 15 à 25 euros par personne.",
        nuit: "Le Méridien Bali Jimbaran, environ 100 à 135 € la nuit",
        type: "vol",
      },
      {
        date: "Vendredi 16 octobre",
        titre: "Dernière journée complète : cent pour cent farniente",
        resume:
          "Plage, piscine, dernier massage, et valises tranquilles en fin de journée.",
        details:
          "Dernière journée entière, zéro obligation : plage baignable, piscine, dernier massage en duo, derniers achats éventuels. En fin de journée, boucler les valises et réserver auprès de la réception le transfert vers l'aéroport pour demain vers 10 h 15 (environ 9 à 15 euros — les hôtels organisent cela la veille sans difficulté). Demander aussi un petit déjeuner servi tôt. Dernier coucher de soleil les pieds dans le sable.",
        nuit: "Le Méridien Bali Jimbaran — vingtième et dernière nuit sur place",
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
          "Départ de l'hôtel vers 10 h 15, envol de Denpasar à 13 h 15 vers Singapour puis Munich.",
        details:
          "Petit déjeuner tranquille servi tôt, départ de l'hôtel vers 10 h 15 : l'aéroport n'est qu'à quinze à vingt minutes de Jimbaran, on y est vers 10 h 35 — largement les trois heures d'avance recommandées. Décollage à 13 h 15 vers Singapour. L'escale y dure 6 h 45 : le temps de dîner et d'aller voir la grande cascade intérieure du Jewel. Puis vol de nuit vers Munich. Garder un gilet chaud dans le bagage cabine pour le retour en Europe.",
        nuit: "En vol, entre Singapour et Munich",
        type: "vol",
      },
      {
        date: "Dimanche 18 octobre",
        titre: "Retour à Luxembourg",
        resume:
          "Correspondance au petit matin à Munich, atterrissage à Luxembourg à 8 h 55.",
        details:
          "Correspondance au petit matin à Munich puis dernier saut vers Luxembourg, atterrissage à 8 h 55 — à la maison pour le petit déjeuner du dimanche, avec la journée entière pour récupérer avant le lundi. Bilan : vingt nuits sur place, les orangs-outans de Sumatra, le lever de soleil au sommet de Borobudur, la cascade de Tumpak Sewu, l'aube sur le mont Bromo, le lac turquoise du Kawah Ijen, les dragons et les raies mantas de Komodo, et cinq vraies nuits de plage à Bali. Une journée de canapé est officiellement prescrite.",
        nuit: "À la maison",
        type: "vol",
      },
    ],
  },
];

export const choixTrek = {
  explication:
    "Les orangs-outans se voient presque tous dès le premier jour, dans la zone proche de l'ancien centre de réhabilitation : on en observe couramment cinq à neuf sur le trek de deux jours, en petit groupe de six personnes maximum. La troisième journée d'un trek de trois jours n'ajoute pas de singes, seulement une immersion plus profonde en forêt. Un choix de rythme assumé : plutôt que d'enchaîner le trek dès le lendemain de l'arrivée — avec le décalage horaire et 24 heures de voyage dans les jambes — on s'offre d'abord une demi-journée tranquille à Bukit Lawang le lundi, et on attaque la jungle le mardi, frais. Le trek se termine entre 14 et 15 heures le deuxième jour ; on a ensuite une nuit complète au lodge avant la grande journée de transfert vers Java.",
  recommandation:
    "Notre choix : le trek de deux jours et une nuit, tout compris (guide certifié, porteur, cuisinier, repas, matériel de camping, frais de parc, tubing). En réservant en direct auprès de Sumatra Orangutan Explore ou Sumatra Cheeky Monkeys, comptez environ 120 à 130 € par personne ; via une plateforme comme GetYourGuide, c'est un peu plus cher, mais avec l'annulation gratuite jusqu'à 24 heures avant et le paiement différé. Dans les deux cas, le transfert depuis Medan ou l'aéroport est inclus.",
};

export const croisiere = {
  cadre:
    "Croisière partagée de trois jours et deux nuits au départ de Labuan Bajo, en cabine privée climatisée à bord d'un voilier traditionnel. Embarquement le lundi 12 octobre vers 11 heures, retour au port le mercredi 14 octobre entre 10 h 30 et 15 heures selon l'opérateur. Tous les bateaux sérieux couvrent les quatre incontournables : l'île de Padar au lever du soleil, la Pink Beach, les dragons de Komodo et la nage avec les raies mantas à Manta Point. Le programme détaillé dépend du bateau choisi — il sera fixé à la réservation.",
  operateurs: [
    {
      nom: "IndonesiaJuara Trip",
      prix: "environ 240 à 300 € par personne en cabine privée climatisée",
      note: "Meilleur rapport qualité-prix global, itinéraire complet vérifié, retour au port tôt (10 h 30 le troisième jour). Faire confirmer par écrit la date du lundi 12 octobre.",
    },
    {
      nom: "Phinisi Labuan Bajo",
      prix: "à partir d'environ 155 € par personne selon le bateau",
      note: "Départs 6 jours sur 7 (tous sauf le jeudi) : le lundi 12 octobre est couvert — l'option la plus économique. Vigilance : leur programme montre les dragons sur l'île de Rinca — demander expressément l'île de Komodo avant de réserver, et tout faire confirmer par écrit.",
    },
    {
      nom: "Captain Komodo (bateau Alcira)",
      prix: "environ 263 € par personne",
      note: "Le programme le plus riche, avec les tortues de Siaba Besar en plus — mais le retour au port le plus tardif (14 à 15 heures le troisième jour). Compatible avec notre plan puisque aucun vol n'est prévu ce jour-là.",
    },
    {
      nom: "Komodo Luxury",
      prix: "environ 255 à 605 € par personne selon la cabine",
      note: "Large flotte, du standard à la suite avec balcon, retour au port très tôt. Leurs départs tombent plutôt le mardi : c'est le plan de secours idéal si le départ devait glisser au mardi 13 octobre.",
    },
  ],
  aRetenir: [
    "Réserver avant fin juillet : octobre est la haute saison et les cabines privées partent en premier.",
    "Depuis avril 2026, le parc de Komodo impose un quota de 1 000 visiteurs par jour avec permis nominatif — et l'île de Padar est limitée à 60 visiteurs par jour : transmettre les passeports à l'opérateur dès la réservation, des mois à l'avance, pas une semaine avant. Les permis sont non remboursables.",
    "Exiger une confirmation écrite (bateau, cabine, date, heure d'embarquement) avant de verser l'acompte de 50 %. Réservation par WhatsApp en direct pour le meilleur prix, ou via GetYourGuide, Viator ou Seek Sophie pour la sécurité de paiement (10 à 20 % plus cher).",
    "Prévoir 30 à 45 € par personne de frais de parc en plus du prix de la croisière, plus les pourboires d'équipage en espèces.",
    "Le volcan Lewotobi (à l'autre bout de l'île de Florès) ne touche pas la croisière elle-même, mais peut fermer l'aéroport de Labuan Bajo un jour ou deux : c'est pour cela qu'on arrive la veille de l'embarquement, qu'on dort sur place après le débarquement, et que les billets d'avion intérieurs sont modifiables.",
    "Ne jamais réserver de vol au départ de Labuan Bajo le jour même du retour de croisière : les heures de débarquement varient de 9 h 30 à 15 heures selon les bateaux.",
  ],
};

export const baliBase = {
  avant: {
    zone: "Sanur — 3 nuits, du 8 au 11 octobre",
    pourquoi:
      "C'est la première zone de plage que l'on atteint en arrivant de Java par la route (4 heures à 4 heures 30 réelles, contre 5 heures et plus pour Nusa Dua ou Uluwatu). Tout s'y fait à pied le long d'une promenade pavée de cinq kilomètres en bord de mer : lagon calme et baignable, massages à 14-18 €, excellents restaurants. Et l'aéroport n'est qu'à 15-30 minutes pour le vol du dimanche matin vers Komodo.",
    hotels: [
      "Puri Santrian Beach Resort and Spa — notre premier choix : pieds dans l'eau, institution familiale balinaise, environ 100 à 125 € la nuit",
      "Maya Sanur Resort and Spa — cinq étoiles design avec piscine de 180 mètres jusqu'à la plage, environ 130 à 160 € la nuit",
      "Peneeda View Beach Hotel — l'option économique face à la promenade, accès plage direct, environ 55 à 80 € la nuit",
    ],
  },
  apres: {
    zone: "Jimbaran — 2 nuits, du 15 au 17 octobre",
    pourquoi:
      "À quinze à vingt minutes seulement de l'aéroport, avec une vraie plage de sable doré baignable, des couchers de soleil face à la mer et les célèbres dîners de poissons grillés sur le sable. Infiniment plus reposant que Kuta à distance équivalente de l'aéroport. Le départ du samedi matin se fait sans aucun stress.",
    hotels: [
      "Le Méridien Bali Jimbaran — le meilleur équilibre : cinq étoiles moderne avec grande piscine-lagon, environ 100 à 135 € la nuit",
      "Keraton Jimbaran Resort — l'option charme : bungalows dans un jardin de cocotiers directement sur la plage, environ 70 à 90 € la nuit",
      "Mövenpick Resort and Spa Jimbaran — l'option grand confort, à cinq minutes à pied de la plage, environ 130 à 160 € la nuit",
    ],
  },
};

export const checklist = [
  {
    quand: "Dès maintenant",
    quoi: "Réserver la croisière Komodo du lundi 12 octobre avec confirmation écrite du bateau, de la cabine privée et de l'heure d'embarquement (IndonesiaJuara Trip ou Phinisi Labuan Bajo en premier choix), verser l'acompte — et transmettre TOUT DE SUITE les passeports pour les permis nominatifs du parc : l'île de Padar est limitée à 60 visiteurs par jour.",
  },
  {
    quand: "Dès maintenant",
    quoi: "Acheter le vol direct Lion Air JT963 du jeudi 1ᵉʳ octobre, Medan → Yogyakarta à 17 h 20 (arrivée 20 h 10, environ 146 € par personne) — c'est le plus simple et le moins cher. Garder en plan B le billet Garuda via Jakarta (GA 187 puis GA 202) au cas où Lion ne volerait plus à ces dates.",
  },
  {
    quand: "Dès maintenant",
    quoi: "Réserver le trek de deux jours (transfert depuis Medan ou l'aéroport inclus). Il démarre le mardi 29 — le lundi 28 reste une demi-journée de récupération à Bukit Lawang. Puis réserver EcoTravel Cottages pour les nuits du 28 et du 30 septembre (le 29, on dort au campement dans la jungle — cinq chambres au lodge seulement, à réserver très tôt).",
  },
  {
    quand: "Dès maintenant",
    quoi: "Réserver les hôtels : Puri Santrian à Sanur (3 nuits du 8 au 11), Le Méridien Jimbaran (2 nuits du 15 au 17), Labuan Bajo (nuits du 11 et du 14) — et les vols intérieurs MODIFIABLES Denpasar → Labuan Bajo le 11 et retour le 15.",
  },
  {
    quand: "Avec le rendez-vous santé voyage",
    quoi: "Vérifier les conditions d'accès à la crête du Kawah Ijen pour la semaine du départ (on monte voir le lac, pas le feu bleu) : un certificat médical peut être demandé selon les règles en vigueur — à anticiper avec le rendez-vous santé voyage par précaution.",
  },
  {
    quand: "Mi-août (ouverture des ventes, 45 jours avant)",
    quoi: "Acheter les billets du train Malioboro Ekspres du samedi 3 octobre sur l'application Access by KAI (le train est désormais quotidien — il faut juste être au rendez-vous de l'ouverture des ventes).",
  },
  {
    quand: "Dès l'ouverture, au plus tard début septembre",
    quoi: "Réserver le « Borobudur Sunrise » du vendredi 2 octobre par WhatsApp au +62 857 2758 7800 (100 places par jour, environ 55 € par personne) et le billet électronique nominatif du mont Bromo du mardi 6 octobre sur bromotenggersemeru.id (passeports requis, quotas ouverts par vagues toutes les deux semaines).",
  },
  {
    quand: "Début septembre",
    quoi: "Faire les demandes de visa électronique en ligne, et réserver les chauffeurs privés des grandes étapes de Java (Yogyakarta, Malang, route vers Banyuwangi, Gilimanuk vers Sanur).",
  },
  {
    quand: "La semaine du départ",
    quoi: "Consulter le site Magma Indonesia pour l'état des volcans : mont Bromo (niveau 2), Kawah Ijen (accès à la crête), et Lewotobi (vols de Labuan Bajo).",
  },
  {
    quand: "La veille de chaque transfert clé",
    quoi: "Confirmer la voiture de 6 h 30 à Bukit Lawang le 30 septembre ; acheter les billets du ferry sur l'application Ferizy le 7 octobre au soir (impossible de les acheter près du port — blocage par géolocalisation) ; et confirmer le transfert aéroport à Jimbaran le 16 octobre.",
  },
];

export const vigilance = [
  "Les permis du parc de Komodo sont nominatifs et l'île de Padar est limitée à 60 visiteurs par jour : transmettre les passeports à l'opérateur de croisière dès la réservation — c'est le point le plus urgent de tout le plan.",
  "Le ferry Java-Bali du 8 octobre : billets uniquement sur l'application Ferizy, à acheter la veille au soir — un blocage par géolocalisation empêche l'achat à moins de 2,6 kilomètres du port, et il n'y a plus de guichet.",
  "Au Kawah Ijen, on a fait le choix de ne PAS faire le feu bleu : il est instable en 2026 (fermé par intermittence pour travaux sur les conduites de soufre) et impose une descente nocturne pénible dans les fumées. On monte voir le lac turquoise depuis la crête, plus fiable et bien plus reposant. Vérifier tout de même les conditions d'accès la semaine du départ.",
  "Le volcan Lewotobi, à l'est de l'île de Florès, peut perturber les vols de Labuan Bajo (éruptions en mars et avril 2026, alerte relevée en mai) : billets intérieurs modifiables obligatoires, et les deux nuits tampons à Labuan Bajo (le 11 et le 14) ne doivent surtout pas être supprimées.",
  "Pour le jeudi 1ᵉʳ octobre, le vol direct Lion Air JT963 de 17 h 20 est le bon choix (2 h 50, sans escale). Éviter l'autre vol Lion de 11 h 35 (numéro JT935) qui met 4 heures à cause d'une escale. Et si on bascule sur le plan B Garuda via Jakarta, éviter le vol Citilink de 9 h 30 qui atterrit au mauvais aéroport de Jakarta (Halim).",
  "La route de Gilimanuk à Sanur prend 3 h 30 à 4 h 30 en réalité — pas les 2 heures annoncées par les applications. Le jeudi 8 octobre est une journée entière de transfert, à ne charger d'aucune autre activité.",
  "Le lever de soleil sur Borobudur est limité à 100 places par jour (réservation par WhatsApp InJourney) : réserver tôt, et tester le calendrier de réservation dès début septembre.",
  "À Sanur, éviter le Segara Village Hotel souvent recommandé en ligne : il reste ouvert mais il est en travaux d'avril 2026 à début 2027 — bruit de chantier garanti.",
  "Début octobre marque la transition vers la saison des pluies : averses possibles en fin d'après-midi sur Java et Bali, et baignade à Sanur à prévoir à marée haute.",
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
  { id: "sanur", nom: "Sanur (Bali)", coords: [-8.6783, 115.2622], couleur: "#b45309" },
  { id: "labuan-bajo", nom: "Labuan Bajo", coords: [-8.4885, 119.877] },
  { id: "komodo", nom: "Parc de Komodo", coords: [-8.6536, 119.5734], couleur: "#0e7490" },
  { id: "jimbaran", nom: "Jimbaran (Bali)", coords: [-8.7905, 115.1612], couleur: "#b45309" },
];

export const trajetsCarte: { de: string; vers: string; mode: "avion" | "route" | "train" | "bateau" }[] = [
  { de: "medan", vers: "bukit-lawang", mode: "route" },
  { de: "medan", vers: "yogyakarta", mode: "avion" },
  { de: "yogyakarta", vers: "borobudur", mode: "route" },
  { de: "yogyakarta", vers: "malang", mode: "train" },
  { de: "malang", vers: "tumpak", mode: "route" },
  { de: "malang", vers: "bromo", mode: "route" },
  { de: "bromo", vers: "ijen", mode: "route" },
  { de: "ijen", vers: "sanur", mode: "bateau" },
  { de: "sanur", vers: "labuan-bajo", mode: "avion" },
  { de: "labuan-bajo", vers: "komodo", mode: "bateau" },
  { de: "labuan-bajo", vers: "jimbaran", mode: "avion" },
];
