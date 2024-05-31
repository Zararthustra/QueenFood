import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Empty } from 'antd';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import { default_img, IconNutriScoreNull } from '@assets/index';
import { IOFFBarcode } from '@interfaces/index';
import AppContext, { IAppContext } from '@services/AppContext';
import {
  getNovaGroupImg,
  getNutrientLevelColor,
  getNutriScoreSvg,
  labelShortener
} from '@utils/formatters';

export const ScannedProduct = (scan: IOFFBarcode) => {
  const { darkMode } = useContext<IAppContext>(AppContext);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const product = scan.product;
  const rowStyle = 'odd:bg-slate-100 dark:odd:bg-slate-800';
  const cellStyle = 'px-1';
  const colors = [
    '#FFCB0F',
    '#FF7024',
    '#FF194F',
    '#C02668',
    '#381546',
    '#95C92C',
    '#26A699',
    '#D60000'
  ];

  const allergens = [
    ...new Set([
      ...product.allergens_tags,
      ...product.allergens_hierarchy,
      ...(product.allergens?.split(',') || ''),
      ...(product.allergens_imported?.split(',') || ''),
      ...(product.allergens_from_ingredients?.split(',') || '')
    ])
  ];

  const data100g = [
    product.nutriments.carbohydrates_100g && {
      nutriment: 'Glucides',
      value: product.nutriments.carbohydrates_100g
    },
    product.nutriments.fat_100g && {
      nutriment: 'Graisses',
      value: product.nutriments.fat_100g
    },
    product.nutriments.proteins_100g && {
      nutriment: 'Protéines',
      value: product.nutriments.proteins_100g
    },
    product.nutriments.salt_100g && {
      nutriment: 'Sel',
      value: product.nutriments.salt_100g
    },
    product.nutriments.sodium_100g && {
      nutriment: 'Sodium',
      value: product.nutriments.sodium_100g
    },
    product.nutriments.fiber_100g && {
      nutriment: 'Fibres',
      value: product.nutriments.fiber_100g
    },
    product.nutriments.alcohol_100g && {
      nutriment: 'Alcool',
      value: product.nutriments.alcohol_100g
    }
  ].filter(Boolean);

  const chartData100g = {
    labels: data100g.map((item) => !!item && item.nutriment),
    datasets: [
      {
        data: data100g.map((item) => !!item && item.value),
        backgroundColor: colors,
        hoverOffset: 10
      }
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        title: {
          display: true,
          text: 'Pour 100 grammes',
          color: darkMode ? '#F3F4F6' : '#334155'
        },
        labels: {
          generateLabels: function (chart: any) {
            const labels = chart.config.data.labels as string[];
            const colors = chart.config.data.datasets[0]
              .backgroundColor as string[];
            const values = chart.config.data.datasets[0].data as number[];

            if (!!labels.length && !!colors.length && !!values.length)
              return labels
                .map((label, index: number) => ({
                  text: `${label}: ${values[index]}g`,
                  fillStyle: colors[index],
                  borderRadius: 3,
                  lineWidth: 0,
                  value: values[index]
                }))
                .sort(function (a, b) {
                  return b.value - a.value;
                });
            return [{ text: 'error' }];
          }
        }
      }
    }
  };

  return (
    <div className="">
      {/* Resume */}
      <div className="bubble bubble--info my-5 flex w-full max-w-[500px] items-center gap-4 overflow-hidden">
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
              'produit alimentaire'
            }
          />
        </div>
        <div className="w-full">
          <h2 className="text-xl/6">
            {labelShortener(
              product.product_name_fr || product.product_name || 'N/A',
              28
            )}
          </h2>

          <p className="text-base/4 font-bold text-slate-500 dark:text-slate-400">
            {labelShortener(product.brands || 'N/A', 23)}
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
                  product.nutrient_levels['saturated-fat']
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
              (!['not-applicable', 'unknown'].includes(
                product.nutriscore['2023'].grade
              ) && (
                <>
                  {getNutriScoreSvg(
                    product.nutriscore['2023'].grade.toLowerCase(),
                    50
                  )}
                  {/* <p className="text-xs font-bold text-slate-400">2023</p> */}
                </>
              )) ||
              getNutriScoreSvg(
                product.nutriscore['2021'].grade.toLowerCase(),
                50
              )
            ) : (
              <IconNutriScoreNull />
            )}
          </div>
        </div>
      </div>

      {/* Infos Nutritionnelles */}
      <h3>Nutriments</h3>

      <Doughnut data={chartData100g} options={chartOptions} className="mb-5" />

      {Object.keys(product.nutriments).length ? (
        <table className="w-full max-w-[500px] border-separate border-spacing-x-0 dark:text-slate-100">
          <thead>
            <tr>
              <th className="p-1 text-start"></th>
              <th className="p-1 text-start">Unité</th>
              <th className="p-1 text-start">Pour 100g</th>
              {product.serving_quantity && (
                <th className="p-1 text-start">
                  Par portion ({product.serving_quantity || 'no'}g)
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {(product.nutriments['energy-kcal_100g'] ||
              product.nutriments['energy-kcal_unit']) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Énergie</td>
                <td className={cellStyle}>
                  {product.nutriments['energy-kcal_unit']}
                </td>
                <td className={cellStyle}>
                  {product.nutriments['energy-kcal_100g']}
                </td>
                <td className={cellStyle}>
                  {product.nutriments['energy-kcal_serving']}
                </td>
              </tr>
            )}

            {(product.nutriments['energy-kj_100g'] ||
              product.nutriments['energy-kj_unit']) && (
              <tr className={rowStyle}>
                <td className={cellStyle}></td>
                <td className={cellStyle}>
                  {product.nutriments['energy-kj_unit']}
                </td>
                <td className={cellStyle}>
                  {product.nutriments['energy-kj_100g']}
                </td>
                <td className={cellStyle}>
                  {product.nutriments['energy-kj_serving']}
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

            {(product.nutriments['saturated-fat_100g'] ||
              product.nutriments['saturated-fat_unit']) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>
                  <i className="text-xs">dont saturées</i>
                </td>
                <td className={cellStyle}>
                  {product.nutriments['saturated-fat_unit']}
                </td>
                <td className={cellStyle}>
                  {product.nutriments['saturated-fat_100g']}
                </td>
                <td className={cellStyle}>
                  {product.nutriments['saturated-fat_serving']}
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

            {(product.nutriments.carbohydrates_100g ||
              product.nutriments.carbohydrates_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>Glucides</td>
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

            {(product.nutriments.sugars_100g ||
              product.nutriments.sugars_unit) && (
              <tr className={rowStyle}>
                <td className={cellStyle}>
                  <i className="text-xs">dont sucres</i>
                </td>
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
      <div className="flex w-full max-w-[500px] flex-wrap gap-1">
        {!!product.ingredients && !!product.ingredients.length ? (
          product.ingredients.map((ingredient, index) => (
            <p className="tag" key={index}>
              {ingredient.text
                .replaceAll(/\w\w:/gi, '')
                .replaceAll('\u001f', '')
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
      <div className="flex w-full max-w-[500px] flex-wrap gap-1">
        {!!allergens.length && !!allergens[0] ? (
          allergens.map(
            (allergen, index) =>
              !!allergen && (
                <p className="tag" key={index}>
                  {allergen.replaceAll(/\w\w:/gi, '').toLowerCase()}
                </p>
              )
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
      <div className="flex w-full max-w-[500px] flex-wrap gap-1">
        {!!product.traces && !!product.traces.length ? (
          product.traces.split(',').map((trace, index) => (
            <p className="tag" key={index}>
              {trace
                .replaceAll(/\w\w:/gi, '')
                .replaceAll('\u001f', '')
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
    </div>
  );
};
