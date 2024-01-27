import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import {
  IconDepense,
  IconEnergie,
  IconIdea,
  IconPortion,
  IconThumbKO,
  IconThumbOK
} from '@assets/index';
import { MicroNutrimentLevel, NutriSanteScore } from '@components/index';
import { IKhayat } from '@interfaces/index';
import AppContext, { IAppContext } from '@services/AppContext';
import { getNovaGroupImg, getNutriScoreSvg } from '@utils/formatters';

interface IKhayatItemProps {
  fiche: IKhayat;
}
export const KhayatItem = ({ fiche }: IKhayatItemProps) => {
  const { darkMode } = useContext<IAppContext>(AppContext);
  const tierStyle =
    'w-full shadow-md px-4 bg-white dark:bg-slate-800 rounded-sm py-10 relative mt-7';
  const iconStyle =
    'h-[70px] w-[70px] bg-white flex dark:bg-slate-800 items-center text-primary-500 dark:text-primary-300 justify-center rounded-full top-[-35px] left-[50%] translate-x-[-50%] absolute';
  ChartJS.register(ArcElement, Tooltip, Legend);
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
  const chartData = {
    labels: fiche.macronutriments.map((macro) => macro.nutriments),
    datasets: [
      {
        data: fiche.macronutriments.map((macro) => macro.valeur),
        backgroundColor: fiche.macronutriments.map((_, index) => colors[index]),
        hoverOffset: 10
      }
    ]
  };

  return (
    <div className="h-fit max-w-[600px] rounded bg-slate-50 pb-2 dark:bg-slate-900 dark:text-slate-100">
      {/* <h1 className="text-center">{fiche.titre}</h1> */}

      <NutriSanteScore score={fiche.nutriSanté} isDrink={fiche.boisson} />

      <div className="my-4 flex justify-center gap-4 tsm:flex-wrap">
        {/* Portions */}
        <div className={tierStyle}>
          <div className={iconStyle}>
            <IconPortion width={40} height={40} />
          </div>
          <h3 className="mb-5 text-center">Portions</h3>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-bold text-slate-600 dark:text-slate-400">
                Seniors
              </p>
              <p className="text-center">{fiche.portions.seniors}</p>
            </div>
            <div>
              <p className="font-bold text-slate-600 dark:text-slate-400">
                Adultes
              </p>
              <p className="text-center">{fiche.portions.adultes}</p>
            </div>
            <div>
              <p className="font-bold text-slate-600 dark:text-slate-400">
                Enfants
              </p>
              <p className="text-center">{fiche.portions.enfants}</p>
            </div>
          </div>
        </div>

        {/* Énergie */}
        <div className={tierStyle}>
          <div className={iconStyle}>
            <IconEnergie width={40} height={40} />
          </div>
          <h3 className="mb-5 text-center">Énergie</h3>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-bold text-slate-600 dark:text-slate-400">
                Pour 100g
              </p>
              <p className="text-center">{fiche.énergie['100g']}</p>
            </div>
            <div>
              <p className="font-bold text-slate-600 dark:text-slate-400">
                Par portion
              </p>
              <p className="text-center">{fiche.énergie.portion}</p>
            </div>
          </div>
        </div>

        {/* Dépenses */}
        <div className={tierStyle}>
          <div className={iconStyle}>
            <IconDepense width={40} height={40} />
          </div>
          <h3 className="mb-5 text-center">Dépense</h3>
          <div className="flex flex-col items-center gap-1">
            {fiche.dépenses.map((dépense, index) => (
              <div key={index}>
                <p className="text-center">{dépense}</p>
                {index + 1 !== fiche.dépenses.length && (
                  <p className="text-center text-xs">ou</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avantages/Inconvénients */}
      <div className="flex justify-between fsm:gap-5 tsm:flex-wrap">
        <div className="my-2 flex w-full items-center gap-4 rounded bg-green-50 p-2 text-green-800 dark:bg-green-800 dark:text-green-300">
          <IconThumbOK className="shrink-0" />
          <p>{fiche.avantages}</p>
        </div>
        <div className="my-2 flex w-full items-center gap-4 rounded bg-red-50 p-2 text-red-800 dark:bg-red-800 dark:text-red-300">
          <IconThumbKO className="shrink-0" />
          <p>{fiche.inconvénients}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-5"></div>

      {/* Nutriments*/}
      <div className="mb-2 mt-5 flex fsm:justify-evenly tsm:flex-wrap">
        <div>
          <h4>Macronutriments</h4>
          <Doughnut
            data={chartData}
            options={{
              plugins: {
                legend: {
                  title: {
                    display: true,
                    text: 'Pour 100 grammes',
                    color: darkMode ? '#F3F4F6' : '#334155'
                  },
                  labels: {
                    generateLabels: function (chart) {
                      const labels = chart.config.data.labels as string[];
                      const colors = chart.config.data.datasets[0]
                        .backgroundColor as string[];
                      const values = chart.config.data.datasets[0]
                        .data as number[];

                      if (!!labels.length && !!colors.length && !!values.length)
                        return labels.map((label, index: number) => ({
                          text: `${label}: ${values[index]}g`,
                          fillStyle: colors[index],
                          borderRadius: 1,
                          lineWidth: 0
                        }));
                      return [{ text: 'error' }];
                    }
                  }
                }
              }
            }}
          />
        </div>
        <div className="flex flex-wrap justify-between gap-10 fsm:w-[280px]">
          <div className="h-fit">
            <h4>Micronutriments</h4>
            <MicroNutrimentLevel level={fiche.micronutriments} />
          </div>

          {/* Scores */}
          {getNutriScoreSvg(fiche.nutriScore, 100)}
          {getNovaGroupImg(fiche.nova)}

          {/* Astuces*/}
          <div className="my-2 flex w-full  items-center gap-4 rounded bg-yellow-50 p-2 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200">
            <IconIdea className="shrink-0" />
            <p>{fiche.astuces}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
