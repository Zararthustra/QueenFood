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
      "100g": "À partir de 250kcal, 100g beurre : 700kcal",
      portion:
        "Tartine blanc de 30g (80kcal) + 5g de beurre (40kcal) = 120kcal. Tartine céréales de 30g (90kcal) + 5g de beurre (40kcal) = 130kcal",
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
  {
    catégorie: "Petit dejeuner",
    titre: "Croissant au beurre ",
    nutriSanté: 5,
    portions: {
      seniors: "1 Croissant",
      adultes: "1 Croissant",
      enfants: "1 Mini-Croissant",
    },
    énergie: {
      "100g": "440kcal",
      portion: "200kcal ",
    },
    dépenses: ["1h de marche ", "20min de natation", "30min de footing"],
    nutriScore: "d",
    nova: 3,
    avantages: "Succulent, un bonheur pour vos papilles ",
    inconvénients: "Apport en calories ",
    astuces: "Le croissant ne mérire pas le classement D du Nutri-Score ",
    macronutriments: [
      {
        nutriments: "Glucide",
        valeur: 48,
      },
      {
        nutriments: "Autres",
        valeur: 26,
      },
      {
        nutriments: "Protéines",
        valeur: 10,
      },
      {
        nutriments: "Lipides",
        valeur: 16,
      },
    ],
    micronutriments: "faible",
  },
];
