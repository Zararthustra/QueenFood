import { IKhayat } from '@interfaces/index';

export const khayatList: IKhayat[] = [
  {
  "catégorie": "Goûter",
  "titre": "Thé",
  "boisson": true,
  "nutriSanté": 3,
  "portions": {
    "seniors": "1 à 3 Tasses",
    "adultes": "1 à 3 Tasses",
    "enfants": "A éviter  "
  },
  "énergie": {
    "100g": "0kcal",
    "portion": "0kcal"
  },
  "dépenses": [
    "Pas de calories donc pas d'équivalent dépenses."
  ],
  "nutriScore": "a",
  "nova": 3,
  "avantages": "Hydratation. Présence d'antioxydants.",
  "inconvénients": "Attention à ne pas consommer trop de théine.",
  "astuces": "Variez les provenances de vos thés pour bénéficier de toute la variété des antioxydants.",
  "macronutriments": [
    {
      "nutriments": "Autres",
      "valeur": 100
    }
  ],
  "micronutriments": "faible"
},
  {
  "catégorie": "Goûter",
  "titre": "Cappuccino",
  "boisson": true,
  "nutriSanté": 3,
  "portions": {
    "seniors": "1 à 2 Tasses",
    "adultes": "1 à 2 Tasses",
    "enfants": "A éviter  "
  },
  "énergie": {
    "100g": "20kcal",
    "portion": "40kcal"
  },
  "dépenses": [
    "10min de marche"
  ],
  "nutriScore": "a",
  "nova": 3,
  "avantages": "Plaisir du caféet du lait. Apports diversifiés : calcium, protéines, vitamine D",
  "inconvénients": "Attention à ne pas consommer trop de caféine.",
  "astuces": "Une gourmandise bien italienne que l'on peut accompagner, là aussi, de quelques biscuits. Le lait vous apporte de la douceur au moment du goûter.",
  "macronutriments": [
    {
      "nutriments": "Autres",
      "valeur": 95
    },
    {
      "nutriments": "Glucides",
      "valeur": 3
    },
    {
      "nutriments": "Protéines",
      "valeur": 2
    }
  ],
  "micronutriments": "faible"
},
  {
  "catégorie": "Goûter",
  "titre": "Café (Sans Sucre)",
  "boisson": true,
  "nutriSanté": 3,
  "portions": {
    "seniors": "1 à 3 Tasses",
    "adultes": "1 à 3 Tasses",
    "enfants": "A éviter  "
  },
  "énergie": {
    "100g": "0kcal",
    "portion": "0kcal"
  },
  "dépenses": [
    "Pas de calories donc pas d'équivalent dépenses"
  ],
  "nutriScore": "a",
  "nova": 3,
  "avantages": "Antifatigue et antimigraineux.",
  "inconvénients": "Attention à ne pas consommer trop de caféine.",
  "astuces": "Un petit coup de fouet bien utile! Accompagné de quelques biscuits sur le bord de la soucoupe d'un morceau de chocolat ou d'un spéculoos, le café n'en sera que plus agréable à déguster. ",
  "macronutriments": [
    {
      "nutriments": "Autres",
      "valeur": 100
    }
  ],
  "micronutriments": "faible"
},
  {
  "catégorie": "Goûter",
  "titre": "Compote De Pommes (Sans Sucres Ajoutés)",
  "boisson": false,
  "nutriSanté": 8,
  "portions": {
    "seniors": "150g",
    "adultes": "150g",
    "enfants": "100g "
  },
  "énergie": {
    "100g": "90kcal",
    "portion": "135kcal"
  },
  "dépenses": [
    "40min de marche",
    "20min  de skate"
  ],
  "nutriScore": "a",
  "nova": 1,
  "avantages": "Tous les bénéfices des fruits (micronutriments,fibres). Facile à déguster pour les enfants.",
  "inconvénients": "Ajout de sucres dans les versions industrielles. Satiété moins importante.",
  "astuces": "Pour les compotes individuelles, vérifiez que la mention (sans sucres ajoutés) est présente. Attention à l'impact des emballages en gourde sur la planète! ",
  "macronutriments": [
    {
      "nutriments": "Glucides",
      "valeur": 22
    },
    {
      "nutriments": "Autres",
      "valeur": 78
    }
  ],
  "micronutriments": "élevé"
},
  {
    catégorie: 'Goûter',
    titre: 'Fruits Mixés',
    boisson: false,
    nutriSanté: 10,
    portions: {
      seniors: '150g',
      adultes: '150g',
      enfants: '100g '
    },
    énergie: {
      '100g': '40kcal',
      portion: '60kcal'
    },
    dépenses: ['10min de roller', '20min de marche'],
    nutriScore: 'a',
    nova: 1,
    avantages: 'Tous les bénéfices des fruits (micronutriments, fibres).',
    inconvénients: 'Satiété moins importante (absence de mastication).',
    astuces:
      "Vérifiez la provenance de vos fruits afin d'éviter les pesticides. Excellent score Nutri-Santé mais, en raison de la mastication, préférez les fruits entiers.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 12
      },
      {
        nutriments: 'Autres',
        valeur: 88
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Goûter',
    titre: 'Barres De Céréales Complètes',
    boisson: false,
    nutriSanté: 7,
    portions: {
      seniors: '1 Barre',
      adultes: '2 Barres ',
      enfants: '1 Barre '
    },
    énergie: {
      '100g': '391kcal',
      portion: '200kcal'
    },
    dépenses: ['1h35 de ménage', '1h de marche'],
    nutriScore: 'a',
    nova: 4,
    avantages: "Plus rassasiante qu'une barre classique. Présence de fibres.",
    inconvénients: 'Contient des additifs. Beaucoup de sucres',
    astuces:
      'En version céréales complètes, ces barres sont meilleures pour votre santé mais restent quand même caloriques et ultra-transformés.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 62
      },
      {
        nutriments: 'Protéines',
        valeur: 7
      },
      {
        nutriments: 'Lipides',
        valeur: 10
      },
      {
        nutriments: 'Autres',
        valeur: 21
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Goûter',
    titre: 'Barres De Céréales Au Chocolat',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 Barre',
      adultes: '2 Barres ',
      enfants: '1 Barre '
    },
    énergie: {
      '100g': '530kcal',
      portion: '340kcal'
    },
    dépenses: ['30min de squash', '1h40 de marche'],
    nutriScore: 'd',
    nova: 4,
    avantages: 'Energie facilement disponible',
    inconvénients: "Contient beaucoup de sucres. Présence d'additifs.",
    astuces:
      "Un  en-cas très concentré en calories, souvent trop sucré voire ultra-transformé. Vérifiez la composition et ne le consommez qu'en cas de réelle fringale!",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 42
      },
      {
        nutriments: 'Protéines',
        valeur: 13
      },
      {
        nutriments: 'Lipides',
        valeur: 33
      },
      {
        nutriments: 'Autres',
        valeur: 12
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Goûter',
    titre: 'Cookies Start-Up',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '2 Parts',
      adultes: '1 Part',
      enfants: '1 Part'
    },
    énergie: {
      '100g': '450kcal',
      portion: '280kcal'
    },
    dépenses: [
      '15min de volley',
      'monter-descendre 5 fois les escaliers sur 2 étages'
    ],
    nutriScore: 'b',
    nova: 4,
    avantages:
      'Contiennent moins de matières grasses que les biscuits classiques.',
    inconvénients: 'Attention à ne pas dépasser la portion indiquée.',
    astuces:
      'Ils ne sont pas moins caloriques en revanche ces cookies contiennent des ingrédients plus vertueux en particulier des légumineuses intéréssantes ',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 50
      },
      {
        nutriments: 'Protéines',
        valeur: 7
      },
      {
        nutriments: 'Lipides',
        valeur: 20
      },
      {
        nutriments: 'Autres',
        valeur: 23
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Goûter',
    titre: 'Biscuits Diététiques',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 ou 2 Biscuits',
      adultes: '2 ou 3 Biscuits',
      enfants: '1 ou 2 Biscuits'
    },
    énergie: {
      '100g': '450kcal',
      portion: '300kcal'
    },
    dépenses: ['25min de judo', '30min de rameur'],
    nutriScore: 'b',
    nova: 4,
    avantages:
      'Contiennent moins de matières grasses et/ou de sucre que son équivalent non allégé.',
    inconvénients: "Présence d'additifs.",
    astuces:
      "Il n'y a pas de différence calorique par rapport à des biscuits classiques mais ils sont souvent ultra-transformés pour obtenir une composition plus équilibrée. Evitez si vous n'avez pas d'allergies, de diabète ou d'intolérances.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 66
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      },
      {
        nutriments: 'Lipides',
        valeur: 14
      },
      {
        nutriments: 'Autres',
        valeur: 10
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Goûter',
    titre: 'Petit Cake Fourré (Fruits)',
    boisson: false,
    nutriSanté: 6,
    portions: {
      seniors: '1 Cake',
      adultes: '1 ou 2 Cakes',
      enfants: '1 Cake'
    },
    énergie: {
      '100g': '400kcal',
      portion: '240kcal'
    },
    dépenses: ['1h de jardinage', '25min de tennis', '1h15 de marche'],
    nutriScore: 'd',
    nova: 4,
    avantages: 'Facile à transporter dans son sac.',
    inconvénients: 'Calorique et ultra-transformé. Apporte peu de nutriments.',
    astuces:
      'Il vaut mieux les faire à la maison car les versions industrielles sont souvent ulta-transformées.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 66
      },
      {
        nutriments: 'Protéines',
        valeur: 5
      },
      {
        nutriments: 'Lipides',
        valeur: 12
      },
      {
        nutriments: 'Autres',
        valeur: 17
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Goûter',
    titre: 'Madeleine',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '1 ou 2 Madeleines',
      adultes: '1 ou 2 Madeleines',
      enfants: '1 Madeleine'
    },
    énergie: {
      '100g': '459kcal',
      portion: '225kcal'
    },
    dépenses: ['40min de jardinage', '1h de basket', '1h10 de marche'],
    nutriScore: 'd',
    nova: 3,
    avantages:
      "Fournit de l'énergie à l'organisme. Apporte du plaisir gustatif.",
    inconvénients: 'Produit sucré. Contient des acides gras saturés.',
    astuces:
      "Comme pour Marcel Proust, une gourmandise au parfum d'enfance. A associer avec une crème dessert, un fruit ou un verre de lait pour un trio parfaitement équilibré!",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 54
      },
      {
        nutriments: 'Protéines',
        valeur: 7
      },
      {
        nutriments: 'Lipides',
        valeur: 22
      },
      {
        nutriments: 'Autres',
        valeur: 17
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Goûter',
    titre: 'Galettes Pur Beurre',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '2-3 Galettes',
      adultes: '3-4 Galettes',
      enfants: '2-3 Galettes '
    },
    énergie: {
      '100g': '470kcal',
      portion: '124kcal'
    },
    dépenses: ['40min de marche', '40min de vélo', '4min de corde à sauter'],
    nutriScore: 'e',
    nova: 3,
    avantages: 'Energie facilement disponible.',
    inconvénients: "Contiennent beaucoup d'acides gras saturés.",
    astuces:
      'Comme tous les biscuits, les galettes sont très caloriques, mais à préférer pour leur composition simple! Attention à la quantité. A associer avec une crème dessert ou une salade de fruits.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 74
      },
      {
        nutriments: 'Protéines',
        valeur: 3
      },
      {
        nutriments: 'Lipides',
        valeur: 16
      },
      {
        nutriments: 'Autres',
        valeur: 7
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Île Flottante',
    boisson: false,
    nutriSanté: 7,
    portions: {
      seniors: '125g',
      adultes: '125g',
      enfants: '100g'
    },
    énergie: {
      '100g': '140kcal',
      portion: '175kcal'
    },
    dépenses: ['45min de marche'],
    nutriScore: 'c',
    nova: 3,
    avantages:
      'Contient des protéines de bonne qualité. Dessert gourmand non calorique.',
    inconvénients: 'Produit sucré. Peu rassasiant.',
    astuces:
      'Très bon dessert grâce à une composition équilibrée en sucres et en protéines, finalement assez léger.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 21
      },
      {
        nutriments: 'Protéines',
        valeur: 5
      },
      {
        nutriments: 'Lipides',
        valeur: 4
      },
      {
        nutriments: 'Autres',
        valeur: 70
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Flan',
    boisson: false,
    nutriSanté: 6,
    portions: {
      seniors: '125g',
      adultes: '125g',
      enfants: '90g'
    },
    énergie: {
      '100g': '200kcal',
      portion: '250kcal'
    },
    dépenses: ['1h de volley-ball', '1h de yoga'],
    nutriScore: 'c',
    nova: 3,
    avantages: 'Riche en calcium et en protéines de bonne qualité.',
    inconvénients: 'Produit riche en sucre et en graisse.',
    astuces:
      'Le flan est un dessert consensuel! A vous de trouver la meilleure recette maison ou de boulangerie (moi, celle de Mamiche!). Attention, les portions proposées sont souvent plus importantes que celles qui sont recommandées.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 30
      },
      {
        nutriments: 'Protéines',
        valeur: 4
      },
      {
        nutriments: 'Lipides',
        valeur: 7
      },
      {
        nutriments: 'Autres',
        valeur: 59
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Mousse au Chocolat',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '80g',
      adultes: '80g',
      enfants: '50g'
    },
    énergie: {
      '100g': '160kcal',
      portion: '130kcal'
    },
    dépenses: ['40min de marche'],
    nutriScore: 'd',
    nova: 3,
    avantages: 'Plaisir gustatif avec un bon apport en magnésium.',
    inconvénients:
      'Riche en matières grasses. Produit sucré. Impact négatif sur la planète à cause du cacao.',
    astuces:
      "Un dessert incontournable à la maison ou au restaurant, mais attention à limiter les portions. A associer à des fruits, par exemple des suprêmes d'agrumes.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 16
      },
      {
        nutriments: 'Protéines',
        valeur: 5
      },
      {
        nutriments: 'Lipides',
        valeur: 8
      },
      {
        nutriments: 'Autres',
        valeur: 69
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Crème Brûlée',
    boisson: false,
    nutriSanté: 3,
    portions: {
      seniors: '180g',
      adultes: '180g',
      enfants: '125g'
    },
    énergie: {
      '100g': '300kcal',
      portion: '500kcal'
    },
    dépenses: ['2h30 de musculation', '1h15 de jogging'],
    nutriScore: 'd',
    nova: 3,
    avantages:
      "C'est un produit plaisir qui comprend des protéines de bonne qualité.",
    inconvénients: 'Riche en matières grasses et en sucre.',
    astuces:
      "Une meilleure option gourmande de fin de repas à choisir à la place d'une patisserie.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 16
      },
      {
        nutriments: 'Protéines',
        valeur: 4
      },
      {
        nutriments: 'Lipides',
        valeur: 25
      },
      {
        nutriments: 'Autres',
        valeur: 55
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Thé Glacé Sans Sucre',
    boisson: true,
    nutriSanté: 3,
    portions: {
      seniors: '250ml',
      adultes: '250ml',
      enfants: '150ml'
    },
    énergie: {
      '100g': '2kcal',
      portion: '5kcal'
    },
    dépenses: ['5min de marche', '15min de danse aérobique '],
    nutriScore: 'd',
    nova: 4,
    avantages:
      'Contient des pigments antioxydants, du potassium et du magnésium (qui réduisent les risques cardiovasculaires).',
    inconvénients: 'Produit contenant de ma théine.',
    astuces:
      'Attention à la consommation de théine et aux versions industrielles très sucrées. A reéliser plutôt soi-même!',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 0.5
      },
      {
        nutriments: 'Autres',
        valeur: 99.5
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Soda Aux Fruits',
    boisson: true,
    nutriSanté: 1,
    portions: {
      seniors: '200ml',
      adultes: '200ml',
      enfants: '200ml'
    },
    énergie: {
      '100g': '41kcal',
      portion: '80kcal'
    },
    dépenses: ['25min de marche', '15min de natation'],
    nutriScore: 'e',
    nova: 4,
    avantages: 'Hydratation.',
    inconvénients:
      'Contient énormément de sucre (un verre = 20g de sucre, soit 4 morceaux)!',
    astuces: "A consommer occasionnellement pour l'apéritif!",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 11
      },
      {
        nutriments: 'Autres',
        valeur: 89
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Cola',
    boisson: true,
    nutriSanté: 1,
    portions: {
      seniors: '250ml',
      adultes: '250ml',
      enfants: '250g'
    },
    énergie: {
      '100g': '42kcal',
      portion: '100kcal'
    },
    dépenses: ['1h de ménage '],
    nutriScore: 'e',
    nova: 4,
    avantages:
      'Energisant (présence de caféine) à limiter pour les enfantes et les femmes enceintes.',
    inconvénients:
      "Produit sucré (une canette de 33cl contient 34g de sucre).\nPrésence d'additifs.",
    astuces:
      'A consommer avec une très grande modération, en apéritif par exemple, car cette boisson est dangereuse pour la santé.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 10
      },
      {
        nutriments: 'Autres',
        valeur: 90
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Escalope De Volaille A La Crème + Riz',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '300g',
      adultes: '300g',
      enfants: '200g'
    },
    énergie: {
      '100g': '130kcal',
      portion: '390kcal'
    },
    dépenses: ['1h50 de vélo', '1h50 de marche'],
    nutriScore: 'a',
    nova: 2,
    avantages:
      'Un plat que vous pouvez manger toutes les semaines (en variant la viande).',
    inconvénients:
      'Ne pas mettre trop de crème. Préférez les versions complètes du riz (blanc, basmati ou thaï).',
    astuces:
      'Attention à la consommation excessive de riz. Vous pouvez équilibrer avec des légumes et des fruits en dessert aux repas suivants!',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 20
      },
      {
        nutriments: 'Lipides',
        valeur: 3
      },
      {
        nutriments: 'Protéines',
        valeur: 6
      },
      {
        nutriments: 'Autres',
        valeur: 71
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Chili con carne',
    boisson: false,
    nutriSanté: 7,
    portions: {
      seniors: '400g',
      adultes: '300-400g',
      enfants: '300g'
    },
    énergie: {
      '100g': '110kcal',
      portion: '440kcal'
    },
    dépenses: ['1h de football', '2h25 de marche'],
    nutriScore: 'a',
    nova: 2,
    avantages:
      'Plat bien équilibré composé de haricots, légumineuses riches en protéines.',
    inconvénients: "Impact sur la planète lié à l'élevage du boeuf.",
    astuces:
      'A tester en version végétarienne de temps en temps! Avec des légumes (des carottes, des courgettes, des tomates pelées) à la place de la viande.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 11
      },
      {
        nutriments: 'Lipides',
        valeur: 3
      },
      {
        nutriments: 'Protéines',
        valeur: 9
      },
      {
        nutriments: 'Autres',
        valeur: 71
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Paëlla',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '400g',
      adultes: '400g',
      enfants: '300g'
    },
    énergie: {
      '100g': '160kcal',
      portion: '640kcal'
    },
    dépenses: ['1h15 de natation', '3h10 de marche'],
    nutriScore: 'c',
    nova: 2,
    avantages:
      'Plat complet qui permet de faire découvrir les fruits de mer aux enfants. Très riche en micronutriments!',
    inconvénients: "Ne pas avoir la main trop lourde sur l'huile d'olive.",
    astuces:
      'Facile à cuisiner et saine, la paëlla est un plat convivial comme le coucous ou le pot au feu, à déguster entre amis. A alterner avec des choucroutes de la mer et des bouillabaisses!',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 22
      },
      {
        nutriments: 'Lipides',
        valeur: 4
      },
      {
        nutriments: 'Protéines',
        valeur: 9
      },
      {
        nutriments: 'Autres',
        valeur: 65
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Fish and Chips',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '300g',
      adultes: '300g',
      enfants: '200g'
    },
    énergie: {
      '100g': '255cal',
      portion: '765kcal'
    },
    dépenses: ['1h30 de jogging', '1h10 de corde à sauter', '3h40 de marche'],
    nutriScore: 'e',
    nova: 2,
    avantages:
      'Un bon moyen de faire aimer le poisson aux enfants ou aux adolescents!',
    inconvénients: "Cuisson à l'huile pour le poisson et les frites.",
    astuces:
      "Attention à bien vérifier l'origine des ingrédients, à calibrer les portions et à éviter de consommer trop de mayonnaise ou de frites!",
    macronutriments: [
      {
        nutriments: 'Lipides',
        valeur: 14
      },
      {
        nutriments: 'Glucides',
        valeur: 21
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      },
      {
        nutriments: 'Autres',
        valeur: 55
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Tartare De Boeuf',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '150g',
      adultes: '150g',
      enfants: '100g'
    },
    énergie: {
      '100g': '170cal',
      portion: '255kcal'
    },
    dépenses: ['30min de rameur ', '1h30 de marche'],
    nutriScore: 'a',
    nova: 1,
    avantages:
      'Le mélange viande-oeuf est une source de protéines de bonne qualité et de fer assimilable.',
    inconvénients:
      'Vigilance pour les femmes enceintes et les personnes à immunité affaiblie. Faites attention à la conversation de votre viande crue.',
    astuces:
      'Attention à la préparation (oeuf, épices mais aussi quantité d\'huile à modérer) et à l\'accompagnement "frites". Préférez un mix salade ou des légumes.',
    macronutriments: [
      {
        nutriments: 'Lipides',
        valeur: 12
      },
      {
        nutriments: 'Glucides',
        valeur: 1.5
      },
      {
        nutriments: 'Protéines',
        valeur: 14
      },
      {
        nutriments: 'Autres',
        valeur: 72.5
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Risotto Végétarien',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '300g',
      adultes: '300g',
      enfants: '200g'
    },
    énergie: {
      '100g': '190cal',
      portion: '570kcal'
    },
    dépenses: ['1h15 de jogging', '2h40 de marche'],
    nutriScore: 'a',
    nova: 2,
    avantages:
      'Plat végétarien ou accompagnement assez rassasiant. Riche en fibres.',
    inconvénients: 'Attention à la crème fraîche et aux glucides.',
    astuces:
      "Il faut rester vigilant sur votre portion, en particulier lorsqu'il est utilisé en accompagnement car malgré les apparences, ce plat est très riche. Ne lésinez pas sur les légumes.",
    macronutriments: [
      {
        nutriments: 'Lipides',
        valeur: 4
      },
      {
        nutriments: 'Glucides',
        valeur: 19
      },
      {
        nutriments: 'Protéines',
        valeur: 2.8
      },
      {
        nutriments: 'Autres',
        valeur: 74.2
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Poulet Rôti',
    boisson: false,
    nutriSanté: 7,
    portions: {
      seniors: '100g',
      adultes: '100g',
      enfants: '60g'
    },
    énergie: {
      '100g': '200cal',
      portion: '200kcal'
    },
    dépenses: ['20min de natation', '1h de marche'],
    nutriScore: 'c',
    nova: 2,
    avantages:
      'Riches en protéines. Présence de potassium et de magnésium qui réduisent les risques cardiovasculaires.',
    inconvénients:
      "Acides gras saturés, surtout si l'on mange la peau du poulet.",
    astuces:
      'Choisissez bien votre volaille (grâce aux labels) et privilégiez des légumes en accompagnement. De temps en temps, un poulet frites dominical est le bienvenu!',
    macronutriments: [
      {
        nutriments: 'Lipides',
        valeur: 9
      },
      {
        nutriments: 'Protéines',
        valeur: 30
      },
      {
        nutriments: 'Autres',
        valeur: 61
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Croque Monsieur',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '1 Croque + 1/2',
      adultes: '1 Croque + 1/2',
      enfants: '1 Croque'
    },
    énergie: {
      '100g': '290cal',
      portion: '435kcal'
    },
    dépenses: ['40min de tennis', '2h15 de marche'],
    nutriScore: 'd',
    nova: 4,
    avantages:
      'Un classique assez équilibré qui constitue un bon repas rapide.',
    inconvénients:
      'Sa version classique (pain de mie, beurre, jambon, fromage) est assez riche, surtout sion y ajoute de la béchamel.',
    astuces:
      "Variez les pains de mie, testez les semi-complets ou les multi-céréales. A accompagner d'une salade et de fruits.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 25.5
      },
      {
        nutriments: 'Lipides',
        valeur: 15
      },
      {
        nutriments: 'Protéines',
        valeur: 14.5
      },
      {
        nutriments: 'Autres',
        valeur: 45
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Bowls Hawaï (Saumon, Avocat, Mangue, Riz)',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 Bowl',
      adultes: '1 Bowl',
      enfants: '1/2 Bowl'
    },
    énergie: {
      '100g': '200cal',
      portion: '600kcal'
    },
    dépenses: ['1h30 de jogging', '3h de marche'],
    nutriScore: 'b',
    nova: 3,
    avantages:
      'Bon apport en fibres, en vitamines et en minéraux. Acides gras et protéines de bonne qualité. Aliments variés',
    inconvénients:
      'Attention aux composants, en particulier produits frits et/ou riches en graisse',
    astuces:
      "Malgré son image healthy et moderne, le poké bowls est un piège! Attention en particulier à certains ingrédients (avocat), très riches et à l'impact négatif sur la planète.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 50
      },
      {
        nutriments: 'Lipides',
        valeur: 15
      },
      {
        nutriments: 'Protéines',
        valeur: 12
      },
      {
        nutriments: 'Autres',
        valeur: 23
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Salade Chèvre-Lardon',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '300g',
      adultes: '300g',
      enfants: '200g'
    },
    énergie: {
      '100g': '200cal',
      portion: '600kcal'
    },
    dépenses: ['1h de natation', '3h de ménage'],
    nutriScore: 'b',
    nova: 4,
    avantages: 'Apport en calcium, fibres, vitamines et minéraux',
    inconvénients:
      "Faible apport en protéines. Présence d'acides gras saturés (lardons, fromage).",
    astuces:
      'Une salade équilibrée mais qui peut se révéler très calorique! A consommer de manière modérée. Préférez la salade César, plus légère.',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 12
      },
      {
        nutriments: 'Lipides',
        valeur: 8
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      },
      {
        nutriments: 'Autres',
        valeur: 70
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Salade Parisienne',
    boisson: false,
    nutriSanté: 6,
    portions: {
      seniors: '300g',
      adultes: '300g',
      enfants: '200g'
    },
    énergie: {
      '100g': '130cal',
      portion: '390kcal'
    },
    dépenses: [
      '2h15 de ménage ',
      '1h15 de basket-ball récréatif ',
      '1h50 de marche '
    ],
    nutriScore: 'b',
    nova: 4,
    avantages:
      'Riche en fibres et en minéraux. Apport en protéines de bonne qualité.',
    inconvénients:
      "Ne fournit pas d'énergie au long terme (car il n'y a pas assez de glucides complexes). La sauce peut contenir des additifs.",
    astuces: 'Excellente offre. Attention à la dose de sauce!',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 5
      },
      {
        nutriments: 'Lipides',
        valeur: 9
      },
      {
        nutriments: 'Protéines',
        valeur: 6
      },
      {
        nutriments: 'Autres',
        valeur: 80
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Salade César',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '300g',
      adultes: '300g',
      enfants: '200g'
    },
    énergie: {
      '100g': '150cal',
      portion: '450kcal'
    },
    dépenses: ['1h30 de golf', '2h15 de marche'],
    nutriScore: 'b',
    nova: 4,
    avantages: 'Bon apport en fibres. Protéines de bonne qualité.',
    inconvénients:
      "Ne fournit pas d'énergie sur le long terme, car pas assez de gluides complexes. Additifs dans les salades industrielles (surtout dans la sauce).",
    astuces:
      "Salade bien équilibrée! Vigilance sur l'origine et la quantité de la sauce.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 12
      },
      {
        nutriments: 'Lipides',
        valeur: 8
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      },
      {
        nutriments: 'Autres',
        valeur: 70
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Cheese-Burger',
    boisson: false,
    nutriSanté: 1,
    portions: {
      seniors: '1 Cheese',
      adultes: '1 Cheese',
      enfants: '1/2 Cheese'
    },
    énergie: {
      '100g': '250cal',
      portion: '300kcal'
    },
    dépenses: ['1h de roller', '1h30 de marche'],
    nutriScore: 'd',
    nova: 4,
    avantages: 'Donne une sensation de satiété. Protéines de bonne qualité.',
    inconvénients:
      "Sauces trop sucrées. Présence d'additifs en grande quantité.",
    astuces:
      'Calorique, ultra-transformé, fort impact sur la planète : le cheeseburger concentre tous les défauts. Mais, suivant la qualité des ingrédients, il peut rester un plaisir occasionnel, surtout fait maison',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 26
      },
      {
        nutriments: 'Lipides',
        valeur: 10
      },
      {
        nutriments: 'Protéines',
        valeur: 13
      },
      {
        nutriments: 'Autres',
        valeur: 51
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Kebab',
    boisson: false,
    nutriSanté: 2,
    portions: {
      seniors: '1 Kebab',
      adultes: '1 Kebab',
      enfants: '1/3 Kebab'
    },
    énergie: {
      '100g': '400cal',
      portion: '800kcal'
    },
    dépenses: ['2h de basket', "1h10 d'escalade", '4h de marche rapide'],
    nutriScore: 'd',
    nova: 4,
    avantages: 'Nourrissant. Protéines de bonne qualité. Produit plaisir.',
    inconvénients:
      "Taille des portions de pain, de viande et de sauce trop importantes. Sauces trop sucrées, comportant beaucoup d'additifs et d'acides gras saturés",
    astuces:
      "Bon avec des ingrédients de qualité! Reste un produit riche et ultra-transformé, à ne consommer qu'à de rares occasions.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 25
      },
      {
        nutriments: 'Lipides',
        valeur: 30
      },
      {
        nutriments: 'Protéines',
        valeur: 20
      },
      {
        nutriments: 'Autres',
        valeur: 25
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Pasta Box Jambon Et Parmesan',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '1 Pasta Box',
      adultes: '1 Pasta Box',
      enfants: '0'
    },
    énergie: {
      '100g': '149cal',
      portion: '417kcal'
    },
    dépenses: ['40min de tennis', '2h de marche rapide'],
    nutriScore: 'b',
    nova: 4,
    avantages: 'Rassasiant. Variété des recettes.',
    inconvénients:
      "Présence d'additifs et de matières grasses ajoutées. Pauvre en vitamines et en minéraux",
    astuces:
      "Attention aux portions de 300g rassasiantes mais potentiellement caloriques (vérifier sur l'emballage)! Elles doivent rester un plat de dépannage!",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 16
      },
      {
        nutriments: 'Lipides',
        valeur: 6
      },
      {
        nutriments: 'Protéines',
        valeur: 8
      },
      {
        nutriments: 'Autres',
        valeur: 70
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Wrap Poulet',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '1 Wrap',
      adultes: '1 Wrap',
      enfants: '1/2 Wrap'
    },
    énergie: {
      '100g': '200cal',
      portion: '500kcal'
    },
    dépenses: ['1h de squash', '2h30 de marche'],
    nutriScore: 'b',
    nova: 4,
    avantages: 'Protéines de bonne qualité. Apport en fibres et en vitamines.',
    inconvénients:
      "Présence d'additifs dans les sauces et les galettes de blé industrielles.",
    astuces:
      "Malgré l'image healthy et le Nutri-Score B du wrap, celui-ci est très ultra-transformé et ses portions sont caloriques (environ 500 calories par portion!). Attention au poids de votre wrap! Je vous suggère de le réaliser vous-même",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 26
      },
      {
        nutriments: 'Lipides',
        valeur: 10
      },
      {
        nutriments: 'Protéines',
        valeur: 13
      },
      {
        nutriments: 'Autres',
        valeur: 51
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Panini Boeuf-Fromage',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 Sandwich',
      adultes: '1 Sandwich',
      enfants: '1/2 Sandwich'
    },
    énergie: {
      '100g': '260kcal',
      portion: '520kcal'
    },
    dépenses: ['50min de tennis', '2h30 de marche'],
    nutriScore: 'd',
    nova: 3,
    avantages: 'Apport en calcium et en protéines.',
    inconvénients:
      "Plus d'acides gras saturés que dans le panini jambon-cheddar. Absence de fibres et de vitamines.",
    astuces:
      "En raison de l'apport calorique élevé et de son impact environnemental, nous ne recommandons pas ce panini. A associer à de la salade et/ou des fruits.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 23
      },
      {
        nutriments: 'Lipides',
        valeur: 18
      },
      {
        nutriments: 'Protéines',
        valeur: 19
      },
      {
        nutriments: 'Autres',
        valeur: 40
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Panini Jambon-Cheddar',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '1 Sandwich',
      adultes: '1 Sandwich',
      enfants: '1/2 Sandwich'
    },
    énergie: {
      '100g': '243kcal',
      portion: '466kcal'
    },
    dépenses: ['1h de badminton', '2h15 de marche'],
    nutriScore: 'd',
    nova: 4,
    avantages:
      'Rasassiant. Apport en protéines de bonne qualité et en calcium.',
    inconvénients:
      "Présence élevée d'acides gras saturés. Pas d'apport en fibres et en vitamines",
    astuces:
      'Attention, souvent proposé en portion de 200g! A associer sans modération à de la salade ou des fruits!',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 30
      },
      {
        nutriments: 'Lipides',
        valeur: 9
      },
      {
        nutriments: 'Protéines',
        valeur: 11
      },
      {
        nutriments: 'Autres',
        valeur: 50
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Sandwich Jambon-Fromage',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 Sandwich',
      adultes: '1 Sandwich',
      enfants: '1/2 Sandwich'
    },
    énergie: {
      '100g': '309kcal',
      portion: '610kcal'
    },
    dépenses: ['1h de natation', '3h de marche'],
    nutriScore: 'c',
    nova: 4,
    avantages: 'Apport en calcium et en protéines de bonne qualité.',
    inconvénients: "Pas d'apport en légumes, donc peu de fibres.",
    astuces:
      "Pour accompagner, votre tanche de jambonn, choisissez plutôt de l'emmental ou du camembert. Pensez à varier la garniture de vos sandwichs.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 30
      },
      {
        nutriments: 'Lipides',
        valeur: 14
      },
      {
        nutriments: 'Protéines',
        valeur: 14
      },
      {
        nutriments: 'Autres',
        valeur: 42
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Déjeuner',
    titre: 'Sandwich Jambon-Beurre',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 Sandwich',
      adultes: '1 Sandwich',
      enfants: '1/2 Sandwich'
    },
    énergie: {
      '100g': '280kcal',
      portion: '560kcal'
    },
    dépenses: ['1h de tennis', '50min de judo', '2h40 de marche'],
    nutriScore: 'b',
    nova: 4,
    avantages:
      "Bon apport en protéines de bonne qualité. Fournit de l'énergie sur le long terme",
    inconvénients:
      'Risque de consommation excessive de pain. Absence de légumes et de fruits',
    astuces:
      'Il ne doit pas devenir votre menu quotidien. Il est souvent avalé trop vite. Méfiez-vous de la quantité de beurre et de la taille du morceau de pain',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 35
      },
      {
        nutriments: 'Lipides',
        valeur: 10
      },
      {
        nutriments: 'Protéines',
        valeur: 12
      },
      {
        nutriments: 'Autres',
        valeur: 43
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Pur Jus de Pamplemousse',
    boisson: true,
    nutriSanté: 2,
    portions: {
      seniors: '150ml',
      adultes: '200ml',
      enfants: '125ml'
    },
    énergie: {
      '100g': '35kcal',
      portion: '70kcal'
    },
    dépenses: ['25min de ménage ', '10min de jogging', '20min de marche '],
    nutriScore: 'b',
    nova: 1,
    avantages: 'Source de vitamine C. Propriétés diurétiques',
    inconvénients:
      'Perte en vitamines, minéraux et fibres présents dans le fruit',
    astuces: "Comme le jus de citron, l'un des moins caloriques ",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 8
      },
      {
        nutriments: 'Autres',
        valeur: 92
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Pur Jus de Citron',
    boisson: true,
    nutriSanté: 2,
    portions: {
      seniors: '150ml',
      adultes: '200ml',
      enfants: '125ml'
    },
    énergie: {
      '100g': '27kcal',
      portion: '54kcal'
    },
    dépenses: ['15min de vélo', '15min de yoga', '6min de tennis'],
    nutriScore: 'b',
    nova: 1,
    avantages: 'Source de vitamine C : antioxydant',
    inconvénients:
      'Perte en vitamines, minéraux et fibres présents dans le fruit',
    astuces:
      'Le jus de citron est le moins calorique de tous (avec celui de pamplemousse)',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 2.8
      },
      {
        nutriments: 'Autres',
        valeur: 97.2
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: "Jus D'Orange Haute Pression A Froid",
    boisson: true,
    nutriSanté: 2,
    portions: {
      seniors: '150ml',
      adultes: '200ml',
      enfants: '125ml'
    },
    énergie: {
      '100g': '35kcal',
      portion: '106kcal'
    },
    dépenses: ['10min de natation', '30min de marche'],
    nutriScore: 'c',
    nova: 1,
    avantages:
      'Il conserve les vitamines et les minéraux grâce à la pression à froid ',
    inconvénients: 'Source de sucre non négligeable ',
    astuces:
      'A privilégier pour les moments festifs. Cette technique de fabrication permet une meilleur densité nutritionnelle, mais ce jus reste riche en sucres ',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 10
      },
      {
        nutriments: 'Autres',
        valeur: 90
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: "Jus D'Orange A Base De Concentré",
    boisson: true,
    nutriSanté: 1,
    portions: {
      seniors: '150ml',
      adultes: '200ml',
      enfants: '125ml'
    },
    énergie: {
      '100g': '38kcal',
      portion: '76kcal'
    },
    dépenses: ['10min de badminton', '20min de marche'],
    nutriScore: 'c',
    nova: 2,
    avantages: "Présence de vitamine C. Sentiment de reprise d'énergie.",
    inconvénients:
      'Produit sucré (sucres simples uniquement). Faible teneur en micro-nutriments',
    astuces:
      "Attention, comme le jus perd les vitamines, les minéreaux et les fibres présents dans le fruit au mieux et en préserver l'essentiel!",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 9
      },
      {
        nutriments: 'Autres',
        valeur: 91
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: "Pur Jus D'Orange Pressé",
    boisson: true,
    nutriSanté: 2,
    portions: {
      seniors: '200ml',
      adultes: '200ml',
      enfants: '150ml'
    },
    énergie: {
      '100g': '42kcal',
      portion: '80kcal'
    },
    dépenses: ['10min de natation', '25min de marche'],
    nutriScore: 'c',
    nova: 1,
    avantages:
      "Stimule l'appétit (positif pour les personnes en risque de dénutrition)",
    inconvénients:
      'Nutritionnellement pauvre comparé aux fruits entiers (la conservation et la pasteurisation détruisent la plupart des vitamines)',
    astuces:
      "Qu'il soit fait maison ou industriel, son ordonnance alimentaire reste la même. Toutes les calories apportées par les boissons sucrées sont mal intégrées par notre organisme. Pas de sentiment de satiété",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 10
      },
      {
        nutriments: 'Protéines',
        valeur: 0.6
      },
      {
        nutriments: 'Autres',
        valeur: 89.4
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: "Nectar D'Abricot",
    boisson: true,
    nutriSanté: 1,
    portions: {
      seniors: '150ml',
      adultes: '200ml',
      enfants: '125ml'
    },
    énergie: {
      '100g': '58kcal',
      portion: '116kcal'
    },
    dépenses: ['30min de musculation', '15min de jogging'],
    nutriScore: 'd',
    nova: 2,
    avantages:
      'Souvent plus onctueux pour les enfants afin de les aider à découvrir les fruits ',
    inconvénients: "Perte d'anti-oxydant par rapport à un fruit frais",
    astuces:
      "Le nectar paraît souvent meilleur que le jus de fruits! Or, il n'en est rien : ce produit est fabriqué à partir de purée de fruits à laquelle de l'eau et du sucre sont ajoutés.",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 14
      },
      {
        nutriments: 'Autres',
        valeur: 86
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Poudre 100% Pur Cacao',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 ou 2càc',
      adultes: '1 ou 2càc',
      enfants: '1 ou 2càc'
    },
    énergie: {
      '100g': '387kcal',
      portion: '1 càc = 40kcal'
    },
    dépenses: ['4min de corde à sauter', '15min de vélo', '15min de marche'],
    nutriScore: 'c',
    nova: 1,
    avantages:
      'Riche en magnésium, en anti-oxydants, en minéraux et vitamine E. Apport élevé en protéines.',
    inconvénients:
      'Riche en acides gras saturés. Produit à valeur énergétique élevée.',
    astuces:
      "Le réconfort d'un bon chocolat chaud d'hiver est indéniable! Par ailleurs, le goût prononcé de la poudre évite les surdosages ",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 11
      },
      {
        nutriments: 'Lipides',
        valeur: 21
      },
      {
        nutriments: 'Autres',
        valeur: 48
      },
      {
        nutriments: 'Protéines',
        valeur: 20
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Granola Fruits Rouges (Avoine Complète)',
    boisson: false,
    nutriSanté: 6,
    portions: {
      seniors: '40g',
      adultes: '55g',
      enfants: '45g'
    },
    énergie: {
      '100g': '410kcal',
      portion: '225kcal'
    },
    dépenses: ['1h de yoga', '1h de marche', '1h de vélo'],
    nutriScore: 'a',
    nova: 3,
    avantages:
      'Contient des acides gras essentiels, des oligo-éléments (calcium, magnésium, zinc) ainsi que des protéines végétales',
    inconvénients: 'Attention à la quantité de sucre ',
    astuces:
      "Un produit qui n'est pas néfaste pour la santé mais reste très calorique malgré la présence de fruits rouges (410 calories pour 100g)! A alterner avec le muesli ",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 61
      },
      {
        nutriments: 'Lipides',
        valeur: 12
      },
      {
        nutriments: 'Autres',
        valeur: 17
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Céréales Fourrées Au Chocolat',
    boisson: false,
    nutriSanté: 1,
    portions: {
      seniors: '40g',
      adultes: '55g',
      enfants: '45g'
    },
    énergie: {
      '100g': '450kcal',
      portion: '250kcal'
    },
    dépenses: ['25min de natation', '1h15 de marche', '25min de vélo'],
    nutriScore: 'b',
    nova: 4,
    avantages: 'Pure gourmandise ',
    inconvénients:
      'Produit très sucré, très gras, ultra-transformé et très calorique. très faible apport en micronutriments',
    astuces:
      'Le pire choix que vous pouvre faire pour votre petit déjeuner. Avec ce type de produit, les recommandations quotidiennes de 35 à 50g de sucres simples sont souvent dépassées',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 71
      },
      {
        nutriments: 'Lipides',
        valeur: 15
      },
      {
        nutriments: 'Autres',
        valeur: 7
      },
      {
        nutriments: 'Protéines',
        valeur: 7
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Corn Flakes',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '40g',
      adultes: '55g',
      enfants: '45g'
    },
    énergie: {
      '100g': '378kcal',
      portion: '200kcal'
    },
    dépenses: ['20min de natation', '1h de marche'],
    nutriScore: 'b',
    nova: 4,
    avantages: 'Sans gluten',
    inconvénients:
      "N'apporte pas d'énergie à long terme (attention à la fringale!). Produit ultra-transformé. Faible intérêt nutritionnel.",
    astuces:
      "Attention, l'astuce marketing de ces produits est dans les recommandations de portion (30g). C'est très sous-estimé par rapport à la réalité ",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 84
      },
      {
        nutriments: 'Lipides',
        valeur: 0.9
      },
      {
        nutriments: 'Autres',
        valeur: 8.1
      },
      {
        nutriments: 'Protéines',
        valeur: 7
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Céréales, Blé Complet Pétales De Chocolat',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '40g',
      adultes: '55g',
      enfants: '45g'
    },
    énergie: {
      '100g': '388kcal',
      portion: '213kcal'
    },
    dépenses: ['45min de curling ', '1h de marche', '20min de natation'],
    nutriScore: 'a',
    nova: 4,
    avantages:
      'Gustativement exquis. Les céréales au blé complet sont plus riches en fibres',
    inconvénients:
      'Produit très sucré. Risque de fringale car apport en énergie à court terme',
    astuces:
      'Là aussi, attention au portion réelles mises dans nos bols! Avec 388 calories pour 100g, ces céréales sont plus calorique que le pain!',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 73.6
      },
      {
        nutriments: 'Lipides',
        valeur: 4.8
      },
      {
        nutriments: 'Autres',
        valeur: 12.8
      },
      {
        nutriments: 'Protéines',
        valeur: 8.8
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Pâte à Tartiner Végétale',
    boisson: false,
    nutriSanté: 6,
    portions: {
      seniors: '10g',
      adultes: '10g',
      enfants: '10g'
    },
    énergie: {
      '100g': '300kcal',
      portion: '1càc = 30kcal'
    },
    dépenses: ['10min de natation', '5min de tennis', '10min de vélo'],
    nutriScore: 'a',
    nova: 2,
    avantages:
      'Goût nouveau. Sans additifs et sans huile de palme. 100% vétégale!',
    inconvénients: 'Valeur calorique élevée.',
    astuces:
      "Cette alternative à base de féveroles ou d'autres légumineuses est bonne pour votre corps et pour la planète. Attention aux portions",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 40
      },
      {
        nutriments: 'Lipides',
        valeur: 10
      },
      {
        nutriments: 'Autres',
        valeur: 40
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      }
    ],
    micronutriments: 'élevé'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Pâte à Tartiner',
    boisson: false,
    nutriSanté: 1,
    portions: {
      seniors: '10g',
      adultes: '10g',
      enfants: '10g'
    },
    énergie: {
      '100g': '539kcal',
      portion: '1càc = 54kcal'
    },
    dépenses: ['10min de natation', '15min de marche', '15min de vélo'],
    nutriScore: 'd',
    nova: 4,
    avantages: 'Pure gourmandise',
    inconvénients:
      "Très calorique et très pauvre en micronutriments. Fabrication à base d'huile de palme",
    astuces:
      "Une cuillière à café n'équivaut \"qu'à\" 54 calories mais on en consomme souvent beacoup plus! Préfèrez d'autres garnitures sur vos tartines (confiture, miel, pâtes à tartiner végétal)",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 57.5
      },
      {
        nutriments: 'Lipides',
        valeur: 31
      },
      {
        nutriments: 'Autres',
        valeur: 5.2
      },
      {
        nutriments: 'Protéines',
        valeur: 6.3
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Miel',
    boisson: false,
    nutriSanté: 8,
    portions: {
      seniors: '1 ou 2 càc',
      adultes: '1 ou 2 càc',
      enfants: '1 càc'
    },
    énergie: {
      '100g': '320kcal',
      portion: '1càc = 32kcal'
    },
    dépenses: ['10min de danse', '10min de marche', '10min de vélo'],
    nutriScore: 'd',
    nova: 2,
    avantages:
      'Produit de fabrication naturelle aux nuances gustatives variées. Apport des micronutriments ',
    inconvénients:
      "Bien vérifier la provenance car il y a beaucoup de fraudes d'origine étrangère et donc de transformation des produits ",
    astuces:
      "Le Nutri-Score donne une moins bonne note au miel qu'à la confiture! Or les bienfaits du miel ne sont plus à rappeler. A associer au pain!",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 81
      },
      {
        nutriments: 'Autres',
        valeur: 18.6
      },
      {
        nutriments: 'Protéines',
        valeur: 0.4
      }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Tartine au beurre',
    boisson: false,
    nutriSanté: 8,
    portions: {
      seniors: '2 Tartines',
      adultes: '2 Tartines',
      enfants: '1 Tartine'
    },
    énergie: {
      '100g': 'À partir de 250kcal, 100g beurre : 700kcal',
      portion:
        'Tartine blanc de 30g (80kcal) + 5g de beurre (40kcal) = 120kcal. Tartine céréales de 30g (90kcal) + 5g de beurre (40kcal) = 130kcal'
    },
    dépenses: ['30min de marche', '15min de natation', '15min de footing'],
    nutriScore: 'b',
    nova: 3,
    avantages:
      'Les pains au blé complet ou aux céréales apportent des fibres (4 à 8g  selon les farine)',
    inconvénients:
      'Le pain est un féculent, donc une source de glucides (à alterner avec le riz, les pâtes et les pommes de terre)',
    astuces:
      'Beurre (Nutri-Score E) + tartine = Nutri-Score B. A consommer au quotidien (bien mieux que toutes les barres chocolatées ou gâteaux ultra-transformés)',
    macronutriments: [
      { nutriments: 'Lipides', valeur: 11 },
      { nutriments: 'Glucides', valeur: 48 },
      { nutriments: 'Protéines', valeur: 2 },
      { nutriments: 'Autres', valeur: 39 }
    ],
    micronutriments: 'moyen'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Croissant au beurre ',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '1 Croissant',
      adultes: '1 Croissant',
      enfants: '1 Mini-Croissant'
    },
    énergie: {
      '100g': '440kcal',
      portion: '200kcal '
    },
    dépenses: ['1h de marche ', '20min de natation', '30min de footing'],
    nutriScore: 'd',
    nova: 3,
    avantages: 'Succulent, un bonheur pour vos papilles ',
    inconvénients: 'Apport en calories ',
    astuces: 'Le croissant ne mérire pas le classement D du Nutri-Score ',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 48
      },
      {
        nutriments: 'Autres',
        valeur: 26
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      },
      {
        nutriments: 'Lipides',
        valeur: 16
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Brioche Tranchée (Boulangerie)',
    boisson: false,
    nutriSanté: 5,
    portions: {
      seniors: '2 Tranches',
      adultes: '2 Tranches',
      enfants: '1 Tranche'
    },
    énergie: {
      '100g': '375kcal',
      portion: '225kcal '
    },
    dépenses: ['30min de jogging léger', "15min d'abdos fessiers"],
    nutriScore: 'c',
    nova: 3,
    avantages: "Agréable à déguster, sensation d'avoir fait le plein d'énergie",
    inconvénients: 'Riche en matières grasses et en sucre',
    astuces:
      "Attention, l'ajout de garniture grasses ou sucrées peut dégrader le score Nuri-Santé de la brioche. Pensez à les varier ",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 48
      },
      {
        nutriments: 'Autres',
        valeur: 26
      },
      {
        nutriments: 'Protéines',
        valeur: 10
      },
      {
        nutriments: 'Lipides',
        valeur: 16
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Pain au chocolat ',
    boisson: false,
    nutriSanté: 4,
    portions: {
      seniors: '1 Pain',
      adultes: '1 Pain ',
      enfants: '1 Mini-Pain'
    },
    énergie: {
      '100g': '400kcal',
      portion: '300kcal '
    },
    dépenses: ['1h de skate', '30min de natation', '45min de footing'],
    nutriScore: 'd',
    nova: 3,
    avantages: 'Pure gourmandise, le plaisir de notre enfance',
    inconvénients:
      'Apport énorme en calories, surtout dans sa version double chocolat. A réserver pour des petits déjeuners festifs ',
    astuces:
      "Attention le pain au chocolat est bien plus calorique que le croissant ou la brioche! A consommer avec du lait pour faire baisser l'index glycémique ",
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 48
      },
      {
        nutriments: 'Autres',
        valeur: 24
      },
      {
        nutriments: 'Protéines',
        valeur: 7
      },
      {
        nutriments: 'Lipides',
        valeur: 21
      }
    ],
    micronutriments: 'faible'
  },
  {
    catégorie: 'Petit déjeuner',
    titre: 'Confiture',
    boisson: false,
    nutriSanté: 7,
    portions: {
      seniors: '30g',
      adultes: '30g',
      enfants: '20g'
    },
    énergie: {
      '100g': '262kcal',
      portion: '80kcal '
    },
    dépenses: ['25min de marche', '10min de natation'],
    nutriScore: 'c',
    nova: 3,
    avantages:
      'Réduit les risques cardiovasculaires. Source de nutriments. Energie facilement disponible',
    inconvénients: 'Produit très sucré',
    astuces:
      'Le Nutri-Score C est lié au calcul sur 100g. Notre score est plus raisonnable : il autorise une consomation régulière. A associer au pain ou au yaourt : des duos parfaits!',
    macronutriments: [
      {
        nutriments: 'Glucides',
        valeur: 60
      },
      {
        nutriments: 'Autres',
        valeur: 39.2
      },
      {
        nutriments: 'Protéines',
        valeur: 0.6
      },
      {
        nutriments: 'Lipides',
        valeur: 0.2
      }
    ],
    micronutriments: 'moyen'
  }
];
