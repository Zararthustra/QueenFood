import { Empty, Modal } from "antd";

import { IProduct } from "@interfaces/index";

interface IModalFoodItemProps {
  product: IProduct;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
export const ModalFoodItem = ({
  product,
  showModal,
  setShowModal,
}: IModalFoodItemProps) => {
  const rowStyle = "odd:bg-slate-100 dark:odd:bg-slate-800";
  const cellStyle = "px-1";
  const allergens = [
    ...new Set([
      ...product.allergens_tags,
      ...product.allergens_hierarchy,
      ...product.allergens?.split(","),
      ...(product.allergens_imported?.split(",") || ""),
      ...product.allergens_from_ingredients?.split(","),
    ]),
  ];

  return (
    <Modal
      title={product.product_name_fr || product.product_name || "N/A"}
      styles={{ body: { maxHeight: "60vh", overflowY: "auto" } }}
      footer={false}
      open={showModal}
      onCancel={() => setShowModal(false)}
      data-testid="aliments-aliments-details"
    >
      {/* Infos Nutritionnelles */}
      <h3>Nutriments</h3>
      {!!Object.keys(product.nutriments).length ? (
        <table className="border-separate border-spacing-x-0 dark:text-slate-100">
          <thead>
            <tr>
              <th className="p-1"></th>
              <th className="p-1">Unité</th>
              <th className="p-1">Pour 100g</th>
              {product.serving_quantity && (
                <th className="p-1">
                  Par portion ({product.serving_quantity || "no"}g)
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {(product.nutriments["energy-kcal_100g"] ||
              product.nutriments["energy-kcal_unit"]) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Énergie</td>
                <td className={cellStyle}>
                  {product.nutriments["energy-kcal_unit"]}
                </td>
                <td className={cellStyle}>
                  {product.nutriments["energy-kcal_100g"]}
                </td>
                <td className={cellStyle}>
                  {product.nutriments["energy-kcal_serving"]}
                </td>
              </tr>
            )}

            {(product.nutriments["energy-kj_100g"] ||
              product.nutriments["energy-kj_unit"]) && (
              <tr className={rowStyle}>
                <td className={cellStyle}></td>
                <td className={cellStyle}>
                  {product.nutriments["energy-kj_unit"]}
                </td>
                <td className={cellStyle}>
                  {product.nutriments["energy-kj_100g"]}
                </td>
                <td className={cellStyle}>
                  {product.nutriments["energy-kj_serving"]}
                </td>
              </tr>
            )}

            {(product.nutriments.fat_100g || product.nutriments.fat_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Graisses</td>
                <td className={cellStyle}>{product.nutriments.fat_unit}</td>
                <td className={cellStyle}>{product.nutriments.fat_100g}</td>
                <td className={cellStyle}>{product.nutriments.fat_serving}</td>
              </tr>
            )}

            {(product.nutriments["saturated-fat_100g"] ||
              product.nutriments["saturated-fat_unit"]) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Graisses Saturées</td>
                <td className={cellStyle}>
                  {product.nutriments["saturated-fat_unit"]}
                </td>
                <td className={cellStyle}>
                  {product.nutriments["saturated-fat_100g"]}
                </td>
                <td className={cellStyle}>
                  {product.nutriments["saturated-fat_serving"]}
                </td>
              </tr>
            )}

            {(product.nutriments.proteins_100g ||
              product.nutriments.proteins_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Protéines</td>
                <td className={cellStyle}>
                  {product.nutriments.proteins_unit}
                </td>
                <td className={cellStyle}>
                  {product.nutriments.proteins_100g}
                </td>
                <td className={cellStyle}>
                  {product.nutriments.proteins_serving}
                </td>
              </tr>
            )}

            {(product.nutriments.salt_100g || product.nutriments.salt_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Sel</td>
                <td className={cellStyle}>{product.nutriments.salt_unit}</td>
                <td className={cellStyle}>{product.nutriments.salt_100g}</td>
                <td className={cellStyle}>{product.nutriments.salt_serving}</td>
              </tr>
            )}

            {(product.nutriments.sodium_100g ||
              product.nutriments.sodium_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Sodium</td>
                <td className={cellStyle}>{product.nutriments.sodium_unit}</td>
                <td className={cellStyle}>{product.nutriments.sodium_100g}</td>
                <td className={cellStyle}>
                  {product.nutriments.sodium_serving}
                </td>
              </tr>
            )}

            {(product.nutriments.sugars_100g ||
              product.nutriments.sugars_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Sucres</td>
                <td className={cellStyle}>{product.nutriments.sugars_unit}</td>
                <td className={cellStyle}>{product.nutriments.sugars_100g}</td>
                <td className={cellStyle}>
                  {product.nutriments.sugars_serving}
                </td>
              </tr>
            )}

            {(product.nutriments.fiber_100g ||
              product.nutriments.fiber_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Fibres</td>
                <td className={cellStyle}>{product.nutriments.fiber_unit}</td>
                <td className={cellStyle}>{product.nutriments.fiber_100g}</td>
                <td className={cellStyle}>
                  {product.nutriments.fiber_serving}
                </td>
              </tr>
            )}

            {(product.nutriments.alcohol_100g ||
              product.nutriments.alcohol_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Alcool</td>
                <td className={cellStyle}>{product.nutriments.alcohol_unit}</td>
                <td className={cellStyle}>{product.nutriments.alcohol_100g}</td>
                <td className={cellStyle}>
                  {product.nutriments.alcohol_serving}
                </td>
              </tr>
            )}

            {(product.nutriments.carbohydrates_100g ||
              product.nutriments.carbohydrates_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Carbohydrates</td>
                <td className={cellStyle}>
                  {product.nutriments.carbohydrates_unit}
                </td>
                <td className={cellStyle}>
                  {product.nutriments.carbohydrates_100g}
                </td>
                <td className={cellStyle}>
                  {product.nutriments.carbohydrates_serving}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Pas d'information nutritionnelle"
        />
      )}

      {/* Ingrédients */}
      <h3 className="mb-2 mt-5">Ingrédients</h3>
      <div className="flex flex-wrap gap-1">
        {!!product.ingredients && !!product.ingredients.length ? (
          product.ingredients.map((ingredient, index) => (
            <p className="tag" key={index}>
              {ingredient.text
                .replaceAll(/\w\w:/gi, "")
                .replaceAll("\u001f", "")
                .toLowerCase()}
            </p>
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Pas d'information sur les ingrédients"
          />
        )}
      </div>

      {/* Allergènes */}
      <h3 className="mb-2 mt-5">Allergènes</h3>
      <div className="flex flex-wrap gap-1">
        {!!allergens.length && !!allergens[0] ? (
          allergens.map(
            (allergen, index) =>
              !!allergen && (
                <p className="tag" key={index}>
                  {allergen.replaceAll(/\w\w:/gi, "").toLowerCase()}
                </p>
              ),
          )
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Pas d'information sur les allergènes"
          />
        )}
      </div>

      {/* Traces */}
      <h3 className="mb-2 mt-5">Traces</h3>
      <div className="flex flex-wrap gap-1">
        {!!product.traces && !!product.traces.length ? (
          product.traces.split(",").map((trace, index) => (
            <p className="tag" key={index}>
              {trace
                .replaceAll(/\w\w:/gi, "")
                .replaceAll("\u001f", "")
                .toLowerCase()}
            </p>
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Pas d'information sur les traces"
          />
        )}
      </div>
    </Modal>
  );
};
