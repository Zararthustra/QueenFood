export type { IOFFBarcode };

interface IOFFBarcode {
  product: {
    nutriments: {
      carbohydrates: number;
      carbohydrates_100g: number;
      carbohydrates_unit: string;
      carbohydrates_value: number;
      energy: number;
      "energy-kcal": number;
      "energy-kcal_100g": number;
      "energy-kcal_unit": string;
      "energy-kcal_value": number;
      "energy-kcal_value_computed": number;
      energy_100g: number;
      energy_unit: string;
      energy_value: number;
      fat: number;
      fat_100g: number;
      fat_unit: string;
      fat_value: number;
      proteins: number;
      proteins_100g: number;
      proteins_unit: string;
      proteins_value: number;
      salt: number;
      salt_100g: number;
      salt_unit: string;
      salt_value: number;
      "saturated-fat": number;
      "saturated-fat_100g": number;
      "saturated-fat_unit": string;
      "saturated-fat_value": number;
      sodium: number;
      sodium_100g: number;
      sodium_unit: string;
      sodium_value: number;
      sugars: number;
      sugars_100g: number;
      sugars_unit: string;
      sugars_value: number;
    };
    nutrition_data_per: string;
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
    allergens: string;
    allergens_from_ingredients: string;
    allergens_hierarchy: string;
    allergens_imported: string;
    allergens_tags: string;
  };
}
