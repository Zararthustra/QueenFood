import { IOFFSearch } from "@interfaces/index";

export const categoriesMock: {
  count: number;
  tags: {
    id: string;
    name: string;
    products: number;
  }[];
} = {
  count: 57566,
  tags: [
    {
      id: "en:plant-based-foods-and-beverages",
      name: "Plant-based foods and beverages",
      products: 419948,
    },
    {
      id: "en:plant-based-foods",
      name: "Plant-based foods",
      products: 364316,
    },
    {
      id: "en:snacks",
      name: "Snacks",
      products: 255489,
    },
    {
      id: "en:sweet-snacks",
      name: "Sweet snacks",
      products: 186651,
    },
    {
      id: "en:beverages",
      name: "Beverages",
      products: 160553,
    },
  ],
};

export const alimentsMock: IOFFSearch = {
  count: 1,
  page: 1,
  page_count: 1,
  page_size: 24,
  products: [
    {
      nutriments: {
        carbohydrates_100g: 12,
        carbohydrates_serving: 12,
        carbohydrates_unit: "g",
        "energy-kcal_100g": 629,
        "energy-kcal_serving": 629,
        "energy-kcal_unit": "kcal",
        "energy-kj_100g": 2607,
        "energy-kj_serving": 2607,
        "energy-kj_unit": "kJ",
        fat_100g: 52,
        fat_serving: 52,
        fat_unit: "g",
        fiber_100g: 6.7,
        fiber_serving: 6.7,
        fiber_unit: "g",
        proteins_100g: 25,
        proteins_serving: 25,
        proteins_unit: "g",
        salt_100g: 0.86,
        salt_serving: 0.86,
        salt_unit: "g",
        "saturated-fat_100g": 9.5,
        "saturated-fat_serving": 9.5,
        "saturated-fat_unit": "g",
        sodium_100g: 0.344,
        sodium_serving: 0.344,
        sodium_unit: "g",
        sugars_100g: 8.7,
        sugars_serving: 8.7,
        sugars_unit: "g",
        alcohol_100g: 8.7,
        alcohol_serving: 8.7,
        alcohol_unit: "g",
      },
      serving_quantity: 1,
      serving_size: "string",
      nova_group: 2,
      nutrient_levels: {
        fat: "low",
        salt: "moderate",
        "saturated-fat": "moderate",
        sugars: "high",
      },
      nutrition_data_per: "string",
      nutriscore: {
        2021: {
          grade: "c",
        },
        2023: {
          grade: "b",
        },
      },
      product_name: "Beurre de cacahuètes creamy",
      product_name_fr: "Beurre de cacahuètes creamy",
      // Images
      selected_images: {
        front: {
          display: {
            fr: "string",
          },
          small: {
            fr: "string",
          },
          thumb: {
            fr: "string",
          },
        },
      },
      image_front_small_url: "string",
      image_front_thumb_url: "string",
      image_front_url: "string",
      image_nutrition_small_url: "string",
      image_nutrition_thumb_url: "string",
      image_nutrition_url: "string",
      image_small_url: "string",
      image_thumb_url: "string",
      image_url: "string",
      traces: "string",
      allergens: "string",
      allergens_from_ingredients: "string",
      allergens_imported: "string",
      allergens_hierarchy: ["string"],
      allergens_tags: ["string"],
      brands: "string",
      countries: "string",
      completeness: 1,
      ecoscore_grade: "string",
      ingredients: [
        {
          percent_estimate: 86,
          text: "CACAHUETES des Amériques grillées",
        },
        {
          percent_estimate: 9.33333333333333,
          text: "beurre",
        },
        {
          percent_estimate: 2.33333333333334,
          text: "sucre",
        },
        {
          percent_estimate: 2.33333333333334,
          text: "sel",
        },
      ],
      ingredients_text_fr: "string",
      ingredients_text_en: "string",
      ingredients_text: "string",
      quantity: "string",
    },
  ],
};
