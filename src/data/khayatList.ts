import { IKhayat } from "@interfaces/index";

export const khayatList: IKhayat[] = [
  {}
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
    catégorie: "Petit déjeuner",
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
  {
    catégorie: "Petit déjeuner",
    titre: "Brioche Tranchée (Boulangerie)",
    nutriSanté: 5,
    portions: {
      seniors: "2 Tranches ",
      adultes: "2 Tranches ",
      enfants: "1 Tranche",
    },
    énergie: {
      "100g": "375kcal",
      portion: "225kcal ",
    },
    dépenses: ["30min de jogging léger", "15min d'abdos fessiers"],
    nutriScore: "c",
    nova: 3,
    avantages: "Agréable à déguster, sensation d'avoir fait le plein d'énergie",
    inconvénients: "Riche en matières grasses et en sucre",
    astuces:
      "Attention, l'ajout de garniture grasses ou sucrées peut dégrader le score Nuri-Santé de la brioche. Pensez à les varier ",
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
  {
    catégorie: "Petit déjeuner",
    titre: "Pain au chocolat ",
    nutriSanté: 4,
    portions: {
      seniors: "1 Pain",
      adultes: "1 Pain ",
      enfants: "1 Mini-Pain",
    },
    énergie: {
      "100g": "400kcal",
      portion: "300kcal ",
    },
    dépenses: ["1h de skate", "30min de natation", "45min de footing"],
    nutriScore: "d",
    nova: 3,
    avantages: "Pure gourmandise, le plaisir de notre enfance",
    inconvénients:
      "Apport énorme en calories, surtout dans sa version double chocolat. A réserver pour des petits déjeuners festifs ",
    astuces:
      "Attention le pain au chocolat est bien plus calorique que le croissant ou la brioche! A consommer avec du lait pour faire baisser l'index glycémique ",
    macronutriments: [
      {
        nutriments: "Glucide",
        valeur: 48,
      },
      {
        nutriments: "Autres",
        valeur: 24,
      },
      {
        nutriments: "Protéines",
        valeur: 7,
      },
      {
        nutriments: "Lipides",
        valeur: 21,
      },
    ],
    micronutriments: "faible",
  },
  {
    catégorie: "Petit déjeuner",
    titre: "Confiture",
    nutriSanté: 7,
    portions: {
      seniors: "30g",
      adultes: "30g",
      enfants: "20g",
    },
    énergie: {
      "100g": "262kcal",
      portion: "80kcal ",
    },
    dépenses: ["25min de marche", "10min de natation"],
    nutriScore: "c",
    nova: 3,
    avantages:
      "Réduit les risques cardiovasculaires. Source de nutriments. Energie facilement disponible",
    inconvénients: "Produit très sucré",
    astuces:
      "Le Nutri-Score C est lié au calcul sur 100g. Notre score est plus raisonnable : il autorise une conssomation régulière. A associer au pain ou au yaourt : des duos parfaits!",
    macronutriments: [
      {
        nutriments: "Glucide",
        valeur: 60,
      },
      {
        nutriments: "Autres",
        valeur: 39.2,
      },
      {
        nutriments: "Protéines",
        valeur: 0.6,
      },
      {
        nutriments: "Lipides",
        valeur: 0.2,
      },
    ],
    micronutriments: "moyen",
  },
];
