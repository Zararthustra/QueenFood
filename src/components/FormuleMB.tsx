import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const FormuleMB = ({
  MB,
  darkmode,
}: {
  MB: number;
  darkmode: boolean;
}) => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const chartData = {
    labels: [
      "Métabolisme basal",
      "Sédentaire",
      "Légèrement actif",
      "Actif",
      "Très actif",
      "Extrêmement actif",
    ],
    datasets: [
      {
        label: "Kcal/jour",
        data: [MB, MB * 1.2, MB * 1.375, MB * 1.55, MB * 1.725, MB * 1.9],
        borderColor: "#17919A",
        backgroundColor: "#ace1e577",
      },
    ],
  };

  return (
    <div className="flex w-full max-w-[450px] flex-col">
      <h3 className="dark:text-slate-100">Métabolisme Basal</h3>
      <div className="flex flex-col gap-2">
        <p
          data-testid="formules-result-mb"
          className="text-xl font-bold text-primary-500"
        >
          Résultat: {MB ? MB.toFixed(1) : "𝑥"}
        </p>
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                grid: {
                  color: darkmode ? "#F3F4F619" : "#33415519",
                },
                ticks: {
                  color: darkmode ? "#F3F4F6" : "#334155",
                },
              },
              x: {
                grid: {
                  color: darkmode ? "#F3F4F619" : "#33415519",
                },
                ticks: {
                  color: darkmode ? "#F3F4F6" : "#334155",
                },
              },
            },
            indexAxis: "y",
            elements: {
              bar: {
                borderWidth: 1,
              },
            },
            color: darkmode ? "#F3F4F6" : "#334155",
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          }}
        />
        <p className="mt-2 self-end text-[10px]/4 text-slate-400">
          * A M Roza, H M Shizgal, The Harris Benedict equation reevaluated:
          resting energy requirements and the body cell mass, The American
          Journal of Clinical Nutrition, Volume 40, Issue 1, 1984
        </p>
      </div>
    </div>
  );
};
