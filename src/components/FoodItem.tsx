import {
  getNovaGroupImg,
  getNutriScoreSvg,
  getNutrientLevelColor,
  labelShortener,
} from "@utils/formatters";
import { Button } from "@components/index";
import { IProduct } from "@interfaces/index";
import { IconDetails, IconNutriScoreNull, default_img } from "@assets/index";

interface IFoodItemProps {
  product: IProduct;
}

export const FoodItem = ({ product }: IFoodItemProps) => {
  return (
    <div className="flex w-full max-w-[500px] items-center gap-4 overflow-hidden">
      <div className="h-[110px] w-[130px]">
        <img
          className="h-full w-full object-cover object-center"
          src={
            product.image_url ||
            product.image_front_url ||
            product.selected_images?.front?.display.fr ||
            default_img
          }
          alt={
            product.product_name ||
            product.product_name_fr ||
            "produit alimentaire"
          }
        />
      </div>
      <div className="w-full">
        <h2 className="text-xl/6">
          {labelShortener(
            product.product_name_fr || product.product_name || "N/A",
            28,
          )}
        </h2>

        <p className="text-base/4 font-bold text-slate-500 dark:text-slate-400">
          {labelShortener(product.brands || "N/A", 23)}
        </p>

        {/* Nutrient Levels */}
        <div className="my-1 flex gap-4">
          <div>
            <div className="flex items-center gap-2">
              {getNutrientLevelColor(product.nutrient_levels.fat)}
              <p className="text-xs">Graisses</p>
            </div>
            <div className="flex items-center gap-2">
              {getNutrientLevelColor(product.nutrient_levels["saturated-fat"])}
              <p className="text-xs">Graisses saturées</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              {getNutrientLevelColor(product.nutrient_levels.sugars)}
              <p className="text-xs">Sucres</p>
            </div>
            <div className="flex items-center gap-2">
              {getNutrientLevelColor(product.nutrient_levels.salt)}
              <p className="text-xs">Sel</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {getNovaGroupImg(product.nova_group)}
          {product.nutriscore ? (
            (!["not-applicable", "unknown"].includes(
              product.nutriscore["2023"].grade,
            ) && (
              <>
                {getNutriScoreSvg(
                  product.nutriscore["2023"].grade.toLowerCase(),
                )}
                {/* <p className="text-xs font-bold text-slate-400">2023</p> */}
              </>
            )) ||
            getNutriScoreSvg(product.nutriscore["2021"].grade.toLowerCase())
          ) : (
            <IconNutriScoreNull />
          )}
          <Button className="py-1 text-xs" primary>
            <IconDetails width={15} height={15} />
            Détails
          </Button>
        </div>

        {/* <div className="flex gap-1 pl-2">
          <p className="">Allergènes:</p>
          <p className="">
            {(!!product.allergens && product.allergens.replaceAll("en:", "")) ||
              (!!product.allergens_from_ingredients &&
                product.allergens_from_ingredients.replaceAll("en:", "")) ||
              (!!product.allergens_imported &&
                product.allergens_imported.replaceAll("en:", "")) ||
              (!!product.allergens_hierarchy.length &&
                product.allergens_hierarchy.map(
                  (allergen, index) =>
                    allergen.replaceAll("en:", "") +
                    (index + 1 !== product.allergens_hierarchy.length
                      ? ", "
                      : ""),
                )) ||
              (!!product.allergens_tags.length &&
                product.allergens_tags.map(
                  (allergen, index) =>
                    allergen.replaceAll("en:", "") +
                    (index + 1 !== product.allergens_tags.length ? ", " : ""),
                )) ||
              "N/A"}
          </p>
        </div> */}

        {/* <div className="flex gap-1 pl-2">
          <p className="">Quantité:</p>
          <p className="">{product.quantity || "N/A"}</p>
        </div> */}

        {/* <div className="flex gap-1 pl-2">
          <p className="">Traces:</p>
          <p className="">{product.traces.replaceAll("en:", "") || "N/A"}</p>
        </div> */}

        {/* <div className="flex gap-1 pl-2">
          <p className="">Provenance:</p>
          <p className="">{product.countries.replaceAll("en:", "") || "N/A"}</p>
        </div> */}

        {/* <div className="flex gap-1 pl-2">
          <p className="">Ingrédients:</p>
          <p className="max-w-prose">
            {(!!product.ingredients?.length &&
              product.ingredients.map(
                (ingredient, index) =>
                  ingredient.text +
                  (index + 1 !== product.ingredients.length ? ", " : ""),
              )) ||
              "N/A"}
          </p>
        </div> */}
      </div>
    </div>
  );
};
