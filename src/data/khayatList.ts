import { IKhayat } from "@interfaces/index";

export const khayatList: IKhayat[] = [
  {
    catégorie: "Petit déjeuner",
    titre: "Tartine au beurre",
    nutriSanté: 8,
    portions: {
      seniors: "2 Tartines",
      adultes: "2 Tartines",
      enfants: "1 Tartine",
    },
    énergie: {
      "100g": "à partir de 250kcal, 100g beurre : 700kcal",
      portion: [
        "Tartine blanc de 30g (80kcal) + 5g de beurre (40kcal) = 120kcal",
        "Tartine céréales de 30g (90kcal) + 5g de beurre (40kcal) = 130kcal",
      ],
    },
    dépenses: ["30min de marche", "15min de natation", "15min de footing"],
    nutriScore: "b",
    nova: 3,
    avantages:
      "Les pains au blé complet ou aux céréales apportent des fibres (4 à 8g  selon les farine)",
    inconvénients:
      "Le pain est un féculent, donc une source de glucides (à alterner avec le riz, les pâtes et les pommes de terre)",
    astuces:
      "Beurre (Nutri-Score E) + tartine = Nutri-Score B. A consommer au quotidien (bien mieux que toutes les barres chocolatées ou gâteaux ultra-transformés)",
    macronutriments: [
      { nutriments: "Lipides", valeur: 11 },
      { nutriments: "Glucides", valeur: 48 },
      { nutriments: "Protéines", valeur: 2 },
      { nutriments: "Autres", valeur: 39 },
    ],
    micronutriments: "moyen",
  },
];
