import { IKhayat } from "@interfaces/index";

export const khayatList: IKhayat[] = [
  {
  "catégorie": "Petit dejeuner",
  "titre": "Nectar D'Abricot",
  "boisson": true,
  "nutriSanté": 1,
  "portions": {
    "seniors": "150ml",
    "adultes": "200ml",
    "enfants": "125ml"
  },
  "énergie": {
    "100g": "58kcal",
    "portion": "116kcal"
  },
  "dépenses": [
    "30min de musculation",
    "15min de jogging"
  ],
  "nutriScore": "d",
  "nova": 2,
  "avantages": "Souvent plus onctueux pour les enfants afin de les aider à découvrir les fruits ",
  "inconvénients": "Perte d'anti-oxydant par rapport à un fruit frais",
  "astuces": "Le nectar paraît souvent meilleur que le jus de fruits! Or, il n'en est rien : ce produit est fabriqué à partir de purée de fruits à laquelle de l'eau et du sucre sont ajoutés.",
  "macronutriments": [
    {
      "nutriments": "Glucides",
      "valeur": 14
    },
    {
      "nutriments": "Autres",
      "valeur": 86
    }
  ],
  "micronutriments": "moyen"
},
  {
  "catégorie": "Petit dejeuner",
  "titre": "Poudre 100% Pur Cacao",
  "boisson" : false,
  "nutriSanté": 4,
  "portions": {
    "seniors": "1 ou 2càc",
    "adultes": "1 ou 2càc",
    "enfants": "1 ou 2càc"
  },
  "énergie": {
    "100g": "387kcal",
    "portion": "1 càc = 40kcal"
  },
  "dépenses": [
    "4min de corde à sauter",
    "15min de vélo",
    "15min de marche"
  ],
  "nutriScore": "c",
  "nova": 1,
  "avantages": "Riche en magnésium, en anti-oxydants, en minéraux et vitamine E. Apport élevé en protéines.",
  "inconvénients": "Riche en acides gras saturés. Produit à valeur énergétique élevée.",
  "astuces": "Le réconfort d'un bon chocolat chaud d'hiver est indéniable! Par ailleurs, le goût prononcé de la poudre évite les surdosages ",
  "macronutriments": [
    {
      "nutriments": "Glucides",
      "valeur": 11
    },
    {
      "nutriments": "Lipides",
      "valeur": 21
    },
    {
      "nutriments": "Autres",
      "valeur": 48
    },
    {
      "nutriments": "Protéines",
      "valeur": 20
    }
  ],
  "micronutriments": "moyen"
},  
  {
  "catégorie": "Petit dejeuner",
  "titre": "Granola Fruits Rouges (Avoine Complète)",
  "boisson": false,  
  "nutriSanté": 6,
  "portions": {
    "seniors": "40g",
    "adultes": "55g",
    "enfants": "45g"
  },
  "énergie": {
    "100g": "410kcal",
    "portion": "225kcal"
  },
  "dépenses": [
    "1h de yoga",
    "1h de marche",
    "1h de vélo"
  ],
  "nutriScore": "a",
  "nova": 3,
  "avantages": "Contient des acides gras essentiels, des oligo-éléments (calcium, magnésium, zinc) ainsi que des protéines végétales",
  "inconvénients": "Attention à la quantité de sucre ",
  "astuces": "Un produit qui n'est pas néfaste pour la santé mais reste très calorique malgré la présence de fruits rouges (410 calories pour 100g)! A alterner avec le muesli ",
  "macronutriments": [
    {
      "nutriments": "Glucides",
      "valeur": 61
    },
    {
      "nutriments": "Lipides",
      "valeur": 12
    },
    {
      "nutriments": "Autres",
      "valeur": 17
    },
    {
      "nutriments": "Protéines",
      "valeur": 10
    }
  ],
  "micronutriments": "moyen"
},  
{
    catégorie: "Petit déjeuner",
    titre: "Céréales Fourrées Au Chocolat",
    boisson: false,
    nutriSanté: 1,
    portions: {
      seniors: "40g",
      adultes: "55g",
      enfants: "45g",
    },
    énergie: {
      "100g": "450kcal",
      portion: "250kcal",
    },
    dépenses: ["25min de natation", "1h15 de marche", "25min de vélo"],
    nutriScore: "b",
    nova: 4,
    avantages: "Pure gourmandise ",
    inconvénients:
      "Produit très sucré, très gras, ultra-transformé et très calorique. très faible apport en micronutriments",
    astuces:
      "Le pire choix que vous pouvre faire pour votre petit déjeuner. Avec ce type de produit, les recommandations quotidiennes de 35 à 50g de sucres simples sont souvent dépassées",
    macronutriments: [
      {
        nutriments: "Glucides",
        valeur: 71,
      },
      {
        nutriments: "Lipides",
        valeur: 15,
      },
      {
        nutriments: "Autres",
        valeur: 7,
      },
      {
        nutriments: "Protéines",
        valeur: 7,
      },
    ],
    micronutriments: "élevé",
  },
  {
    catégorie: "Petit déjeuner",
    titre: "Corn Flakes",
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: "40g",
      adultes: "55g",
      enfants: "45g",
    },
    énergie: {
      "100g": "378kcal",
      portion: "200kcal",
    },
    dépenses: ["20min de natation", "1h de marche"],
    nutriScore: "b",
    nova: 4,
    avantages: "Sans gluten",
    inconvénients:
      "N'apporte pas d'énergie à long terme (attention à la fringale!). Produit ultra-transformé. Faible intérêt nutritionnel.",
    astuces:
      "Attention, l'astuce marketing de ces produits est dans les recommandations de portion (30g). C'est très sous-estimé par rapport à la réalité ",
    macronutriments: [
      {
        nutriments: "Glucides",
        valeur: 84,
      },
      {
        nutriments: "Lipides",
        valeur: 0.9,
      },
      {
        nutriments: "Autres",
        valeur: 8.1,
      },
      {
        nutriments: "Protéines",
        valeur: 7,
      },
    ],
    micronutriments: "moyen",
  },
  {
    catégorie: "Petit déjeuner",
    titre: "Céréales, Blé Complet Pétales De Chocolat",
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: "40g",
      adultes: "55g",
      enfants: "45g",
    },
    énergie: {
      "100g": "388kcal",
      portion: "213kcal",
    },
    dépenses: ["45min de curling ", "1h de marche", "20min de natation"],
    nutriScore: "a",
    nova: 4,
    avantages:
      "Gustativement exquis. Les céréales au blé complet sont plus riches en fibres",
    inconvénients:
      "Produit très sucré. Risque de fringale car apport en énergie à court terme",
    astuces:
      "Là aussi, attention au portion réelles mises dans nos bols! Avec 388 calories pour 100g, ces céréales sont plus calorique que le pain!",
    macronutriments: [
      {
        nutriments: "Glucides",
        valeur: 73.6,
      },
      {
        nutriments: "Lipides",
        valeur: 4.8,
      },
      {
        nutriments: "Autres",
        valeur: 12.8,
      },
      {
        nutriments: "Protéines",
        valeur: 8.8,
      },
    ],
    micronutriments: "moyen",
  },
  {
    catégorie: "Petit déjeuner",
    titre: "Pâte à Tartiner Végétale",
    boisson: false,
    nutriSanté: 6,
    portions: {
      seniors: "10g",
      adultes: "10g",
      enfants: "10g",
    },
    énergie: {
      "100g": "300kcal",
      portion: "1càc = 30kcal",
    },
    dépenses: ["10min de natation", "5min de tennis", "10min de vélo"],
    nutriScore: "a",
    nova: 2,
    avantages:
      "Goût nouveau. Sans additifs et sans huile de palme. 100% vétégale!",
    inconvénients: "Valeur calorique élevée.",
    astuces:
      "Cette alternative à base de féveroles ou d'autres légumineuses est bonne pour votre corps et pour la planète. Attention aux portions",
    macronutriments: [
      {
        nutriments: "Glucides",
        valeur: 40,
      },
      {
        nutriments: "Lipides",
        valeur: 10,
      },
      {
        nutriments: "Autres",
        valeur: 40,
      },
      {
        nutriments: "Protéines",
        valeur: 10,
      },
    ],
    micronutriments: "élevé",
  },
  {
    catégorie: "Petit déjeuner",
    titre: "Pâte à Tartiner",
    boisson: false,
    nutriSanté: 1,
    portions: {
      seniors: "10g",
      adultes: "10g",
      enfants: "10g",
    },
    énergie: {
      "100g": "539kcal",
      portion: "1càc = 54kcal",
    },
    dépenses: ["10min de natation", "15min de marche", "15min de vélo"],
    nutriScore: "d",
    nova: 4,
    avantages: "Pure gourmandise",
    inconvénients:
      "Très calorique et très pauvre en micronutriments. Fabrication à base d'huile de palme",
    astuces:
      "Une cuillière à café n'équivaut \"qu'à\" 54 calories mais on en consomme souvent beacoup plus! Préfèrez d'autres garnitures sur vos tartines (confiture, miel, pâtes à tartiner végétal)",
    macronutriments: [
      {
        nutriments: "Glucides",
        valeur: 57.5,
      },
      {
        nutriments: "Lipides",
        valeur: 31,
      },
      {
        nutriments: "Autres",
        valeur: 5.2,
      },
      {
        nutriments: "Protéines",
        valeur: 6.3,
      },
    ],
    micronutriments: "faible",
  },
  {
    catégorie: "Petit déjeuner",
    titre: "Miel",
    boisson: false,
    nutriSanté: 8,
    portions: {
      seniors: "1 ou 2 càc",
      adultes: "1 ou 2 càc",
      enfants: "1 càc",
    },
    énergie: {
      "100g": "320kcal",
      portion: "1càc = 32kcal",
    },
    dépenses: ["10min de danse", "10min de marche", "10min de vélo"],
    nutriScore: "d",
    nova: 2,
    avantages:
      "Produit de fabrication naturelle aux nuances gustatives variées. Apport des micronutriments ",
    inconvénients:
      "Bien vérifier la provenance car il y a beaucoup de fraudes d'origine étrangère et donc de transformation des produits ",
    astuces:
      "Le Nutri-Score donne une moins bonne note au miel qu'à la confiture! Or les bienfaits du miel ne sont plus à rappeler. A associer au pain!",
    macronutriments: [
      {
        nutriments: "Glucides",
        valeur: 81,
      },
      {
        nutriments: "Autres",
        valeur: 18.6,
      },
      {
        nutriments: "Protéines",
        valeur: 0.4,
      },
    ],
    micronutriments: "moyen",
  },
  {
    catégorie: "Petit déjeuner",
    titre: "Tartine au beurre",
    boisson: false,
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
    boisson: false,
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
        nutriments: "Glucides",
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
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: "2 Tranches",
      adultes: "2 Tranches",
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
        nutriments: "Glucides",
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
    boisson: false,
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
        nutriments: "Glucides",
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
    boisson: false,
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
        nutriments: "Glucides",
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
