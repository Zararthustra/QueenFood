import { useState } from "react";

import {
  getNovaGroupImg,
  getNutriScoreSvg,
  getNutrientLevelColor,
  labelShortener,
} from "@utils/formatters";
import { IProduct } from "@interfaces/index";
import { Button, ModalFoodItem } from "@components/index";
import { IconDetails, IconNutriScoreNull, default_img } from "@assets/index";

interface IFoodItemProps {
  product: IProduct;
}

export const FoodItem = ({ product }: IFoodItemProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <ModalFoodItem
        product={product}
        showModal={showModal}
        setShowModal={setShowModal}
      />

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
                {getNutrientLevelColor(
                  product.nutrient_levels["saturated-fat"],
                )}
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
            {getNovaGroupImg(product.nova_group, true)}
            {product.nutriscore ? (
              (!["not-applicable", "unknown"].includes(
                product.nutriscore["2023"].grade,
              ) && (
                <>
                  {getNutriScoreSvg(
                    product.nutriscore["2023"].grade.toLowerCase(),
                    50,
                  )}
                  {/* <p className="text-xs font-bold text-slate-400">2023</p> */}
                </>
              )) ||
              getNutriScoreSvg(
                product.nutriscore["2021"].grade.toLowerCase(),
                50,
              )
            ) : (
              <IconNutriScoreNull />
            )}
            <Button
              className="py-1 text-xs"
              primary
              onClick={() => setShowModal(true)}
            >
              <IconDetails width={15} height={15} />
              Détails
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
