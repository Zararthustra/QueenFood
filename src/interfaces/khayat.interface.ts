export type { IKhayat };

interface IKhayat {
  catégorie: string;
  titre: string;
  nutriSanté: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  portions: {
    seniors: string;
    adultes: string;
    enfants: string;
  };
  énergie: {
    "100g": string;
    portion: string;
  };
  dépenses: string[];
  nutriScore: "a" | "b" | "c" | "d" | "e";
  nova: 1 | 2 | 3 | 4;
  avantages: string;
  inconvénients: string;
  astuces: string;
  macronutriments: {
    nutriments: string;
    valeur: number;
  }[];
  micronutriments: "élevé" | "moyen" | "faible";
}
