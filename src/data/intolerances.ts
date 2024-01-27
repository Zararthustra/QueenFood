export const intolerances: {
  name: string;
  description: string;
  examples: string;
}[] = [
  {
    name: 'Avoine',
    description:
      "Sensibilité à l'avoine, souvent liée à la contamination croisée avec le gluten, pouvant causer des symptômes chez les personnes atteintes de la maladie cœliaque.",
    examples: "Flocons d'avoine, granola à l'avoine, biscuits à l'avoine"
  },
  {
    name: 'Benzaldéhyde',
    description:
      'Sensibilité au benzaldéhyde, composé aromatique présent dans certains fruits et noix, pouvant provoquer des réactions.',
    examples: 'Amandes, cerises, abricots'
  },
  {
    name: 'Caféine',
    description:
      "Sensibilité à la caféine, présente dans le café, le thé, le chocolat, etc., pouvant provoquer des symptômes tels que l'insomnie et l'anxiété.",
    examples: 'Café, thé, chocolat, boissons énergisantes'
  },
  {
    name: 'Cobalt',
    description:
      'Sensibilité au cobalt, présent dans certains fruits de mer et légumes, pouvant provoquer des réactions.',
    examples: 'Huîtres, crabe, épinards'
  },
  {
    name: 'Composés organosulfurés',
    description:
      "Sensibilité aux composés organosulfurés, présents dans l'ail, l'oignon et d'autres légumes de la famille des alliacées, pouvant causer des problèmes chez certaines personnes.",
    examples: 'Ail, oignon, poireau'
  },
  {
    name: 'Ergotamine',
    description:
      "Sensibilité à l'ergotamine, présente dans certains céréales contaminées, pouvant provoquer des symptômes.",
    examples: 'Seigle, avoine contaminée, blé infecté par des champignons'
  },
  {
    name: 'Ergothionéine',
    description:
      "Sensibilité à l'ergothionéine, présente dans certains champignons et aliments d'origine animale, pouvant causer des réactions chez certaines personnes.",
    examples: 'Champignons, viande, poisson'
  },
  {
    name: 'FODMAPs',
    description:
      'Sensibilité aux glucides fermentescibles présents dans certains aliments, tels que les oignons et les légumineuses, pouvant causer des troubles gastro-intestinaux.',
    examples: 'Oignons, poireaux, haricots, pommes'
  },
  {
    name: 'Fructose',
    description:
      'Difficulté à métaboliser le sucre présent dans les fruits et certains légumes, entraînant des symptômes gastro-intestinaux.',
    examples:
      'Fruits à haute teneur en fructose comme les pommes, les poires, les raisins'
  },
  {
    name: 'Glycosaminoglycanes',
    description:
      'Sensibilité aux glycosaminoglycanes, composés présents dans les tissus conjonctifs des animaux, pouvant provoquer des réactions.',
    examples: 'Cartilage de bœuf, peau de poulet, ailerons de requin'
  },
  {
    name: 'Glycosides cyanogéniques',
    description:
      'Sensibilité aux glycosides cyanogéniques, présents dans certains fruits à noyau, pouvant provoquer des réactions.',
    examples: 'Amandes, cerises, abricots'
  },
  {
    name: 'Gluten',
    description:
      "Sensibilité à la protéine présente dans le blé, l'orge et le seigle, pouvant entraîner des troubles digestifs et d'autres symptômes chez les personnes atteintes de la maladie cœliaque.",
    examples: 'Pain de blé, pâtes, bière'
  },
  {
    name: 'Graines de chia',
    description:
      'Sensibilité aux graines de chia, pouvant causer des réactions chez certaines personnes.',
    examples: 'Graines de chia, produits contenant des graines de chia'
  },
  {
    name: 'Histamines',
    description:
      "Réaction à des niveaux élevés d'histamines, présentes dans certains aliments fermentés et vieillis, provoquant des symptômes variés tels que des maux de tête et des démangeaisons.",
    examples: 'Vin rouge, fromages affinés, saucisses fermentées'
  },
  {
    name: 'Lactose',
    description:
      'Difficulté à digérer le sucre du lait, provoquant des symptômes gastro-intestinaux chez les personnes intolérantes.',
    examples: 'Lait de vache, yaourt, crème glacée'
  },
  {
    name: 'Lectines',
    description:
      'Sensibilité aux lectines, présentes dans des aliments comme les haricots et les céréales, pouvant causer des problèmes gastro-intestinaux.',
    examples: 'Haricots rouges, lentilles, blé'
  },
  {
    name: 'Lectines spécifiques',
    description:
      'Sensibilité à des lectines spécifiques présentes dans des aliments tels que les haricots, pouvant causer des problèmes gastro-intestinaux.',
    examples: 'Haricots rouges, lentilles, blé'
  },
  {
    name: 'Maïs',
    description:
      'Difficulté à digérer le maïs, provoquant des symptômes gastro-intestinaux chez certaines personnes sensibles.',
    examples: 'Maïs en épi, tortillas, céréales de maïs'
  },
  {
    name: 'Manioc',
    description:
      'Difficulté à digérer le manioc, pouvant provoquer des symptômes gastro-intestinaux.',
    examples: 'Farine de manioc, tapioca, manioc cuit'
  },
  {
    name: 'Molybdène',
    description:
      'Sensibilité au molybdène, présent dans des aliments comme les légumineuses, pouvant causer des problèmes chez certaines personnes.',
    examples: 'Haricots, lentilles, pois chiches'
  },
  {
    name: 'Nickel',
    description:
      'Sensibilité au nickel, présent dans certains aliments, pouvant provoquer des symptômes tels que des démangeaisons et des éruptions cutanées.',
    examples: 'Chocolat, noix, céréales complètes'
  },
  {
    name: 'Nitrites et nitrates',
    description:
      'Sensibilité aux nitrites et nitrates, utilisés comme additifs alimentaires, pouvant provoquer des réactions chez certaines personnes.',
    examples: 'Viandes transformées, charcuterie, bacon'
  },
  {
    name: 'Noix ou arachides',
    description:
      'Sensibilité aux protéines présentes dans les noix ou les arachides, provoquant des réactions allergiques potentiellement graves.',
    examples: 'Noix, amandes, cacahuètes'
  },
  {
    name: 'Oxalates',
    description:
      'Sensibilité aux oxalates, présents dans des aliments tels que les épinards et les noix, pouvant provoquer des problèmes rénaux chez certaines personnes.',
    examples: 'Épinards, betteraves, noix'
  },
  {
    name: 'Oxylipines',
    description:
      'Sensibilité aux oxylipines, présentes dans des aliments tels que le chocolat et les noix, pouvant causer des réactions chez certaines personnes.',
    examples: 'Chocolat noir, noix, graines de tournesol'
  },
  {
    name: 'Poisson ou fruits de mer',
    description:
      'Réaction aux protéines spécifiques présentes dans le poisson ou les fruits de mer, pouvant entraîner des symptômes graves tels que des difficultés respiratoires.',
    examples: 'Saumon, crevettes, moules'
  },
  {
    name: 'Polyphosphates',
    description:
      'Sensibilité aux polyphosphates, additifs alimentaires pouvant provoquer des réactions chez certaines personnes.',
    examples: 'Viandes transformées, produits de charcuterie, certains fromages'
  },
  {
    name: 'Protéines de lait de chèvre',
    description:
      'Sensibilité aux protéines spécifiques présentes dans le lait de chèvre, pouvant provoquer des symptômes gastro-intestinaux.',
    examples: 'Lait de chèvre, fromage de chèvre, yaourt de chèvre'
  },
  {
    name: 'Protéines de lait de vache',
    description:
      'Réaction aux protéines spécifiques présentes dans le lait de vache, provoquant des symptômes gastro-intestinaux et cutanés.',
    examples: 'Lait de vache, fromage, yaourt'
  },
  {
    name: 'Salicylates',
    description:
      'Sensibilité aux salicylates, présents dans certains fruits, légumes et épices, pouvant entraîner des symptômes tels que des maux de tête.',
    examples: 'Fraises, tomates, menthe'
  },
  {
    name: 'Sélénium',
    description:
      'Sensibilité au sélénium, présent dans certains fruits de mer et noix, pouvant provoquer des réactions chez certaines personnes.',
    examples: 'Thon, noix du Brésil, graines de tournesol'
  },
  {
    name: 'Soja',
    description:
      'Sensibilité aux protéines du soja, provoquant des symptômes divers tels que des troubles gastro-intestinaux et des réactions cutanées. Le soja est présent dans de nombreux produits transformés, tels que le tofu, le tempeh, le lait de soja, les edamames, les protéines de soja, et peut être utilisé comme ingrédient dans de nombreux plats et sauces.',
    examples: 'tofu, tempeh, lait de soja, edamames, protéines de soja'
  },
  {
    name: 'Sorbitol et polyols',
    description:
      "Sensibilité au sorbitol et à d'autres polyols, utilisés comme édulcorants, pouvant provoquer des problèmes gastro-intestinaux. Ces composés sont présents dans une variété d'aliments, y compris les chewing-gums sans sucre, les bonbons sans sucre, les boissons light, les fruits à noyau (comme les prunes, les pêches), certains édulcorants artificiels et certains produits de boulangerie.",
    examples:
      'chewing-gums sans sucre, bonbons sans sucre, boissons light, fruits à noyau, édulcorants artificiels'
  },
  {
    name: 'Sucre',
    description:
      "Sensibilité au sucre, pouvant entraîner des symptômes tels que des fluctuations de la glycémie et des problèmes gastro-intestinaux. Le sucre se trouve naturellement dans de nombreux aliments, tels que les fruits, le miel, le sirop d'érable, mais il est également ajouté à de nombreux produits transformés, y compris les sodas, les bonbons, les pâtisseries et les produits sucrés en général.",
    examples: "sodas, bonbons, pâtisseries, miel, sirop d'érable"
  },
  {
    name: 'Sulfites',
    description:
      'Réaction allergique aux sulfites, souvent utilisés comme conservateurs dans les aliments et les boissons, pouvant causer des problèmes respiratoires et cutanés. Les sulfites sont couramment présents dans le vin, la bière, les fruits secs, les fruits en conserve, les sauces, les fruits de mer et certains plats préparés.',
    examples:
      'vin, bière, fruits secs, fruits en conserve, sauces, fruits de mer'
  },
  {
    name: 'Tyramine',
    description:
      "Sensibilité à la tyramine, présente dans certains aliments fermentés et vieillis, pouvant provoquer des maux de tête et d'autres symptômes. La tyramine est présente dans des aliments tels que le fromage vieilli, les charcuteries, les poissons fumés, le vin rouge, les bananes mûres, les avocats et certains aliments fermentés comme la choucroute.",
    examples:
      'fromage vieilli, charcuteries, poissons fumés, vin rouge, bananes mûres, avocats, choucroute'
  }
];
