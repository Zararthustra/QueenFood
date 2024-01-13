export type { IOFFBarcode, IOFFSearch, IProduct };

interface IProduct {
  nutriments: {
    carbohydrates_100g: number;
    carbohydrates_serving: number;
    carbohydrates_unit: string;

    "energy-kcal_100g": number;
    "energy-kcal_serving": number;
    "energy-kcal_unit": string;

    "energy-kj_100g": number;
    "energy-kj_serving": number;
    "energy-kj_unit": string;

    fat_100g: number;
    fat_serving: number;
    fat_unit: string;

    proteins_100g: number;
    proteins_serving: number;
    proteins_unit: string;

    salt_100g: number;
    salt_serving: number;
    salt_unit: string;

    "saturated-fat_100g": number;
    "saturated-fat_serving": number;
    "saturated-fat_unit": string;

    sodium_100g: number;
    sodium_serving: number;
    sodium_unit: string;

    sugars_100g: number;
    sugars_serving: number;
    sugars_unit: string;

    fiber_100g: number;
    fiber_serving: number;
    fiber_unit: string;

    alcohol_100g: number;
    alcohol_serving: number;
    alcohol_unit: string;
  };
  serving_quantity: number;
  serving_size: string;
  nova_group: number;
  nutrient_levels: {
    fat: "low" | "moderate" | "high";
    salt: "low" | "moderate" | "high";
    "saturated-fat": "low" | "moderate" | "high";
    sugars: "low" | "moderate" | "high";
  };
  nutrition_data_per: string;
  nutriscore: {
    2021: {
      grade: string;
    };
    2023: {
      grade: string;
    };
  };
  product_name: string;
  product_name_fr: string;
  // Images
  selected_images: {
    front: {
      display: {
        fr: string;
      };
      small: {
        fr: string;
      };
      thumb: {
        fr: string;
      };
    };
  };
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  traces: string;
  allergens: string;
  allergens_from_ingredients: string;
  allergens_imported: string;
  allergens_hierarchy: string[];
  allergens_tags: string[];
  brands: string;
  countries: string;
  completeness: number;
  ecoscore_grade: string;
  ingredients: {
    text: string;
    percent_estimate: number;
  }[];
  ingredients_text_fr: string;
  ingredients_text_en: string;
  ingredients_text: string;
  quantity: string;
}

interface IOFFBarcode {
  product: IProduct;
}

interface IOFFSearch {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: IProduct[];
}
