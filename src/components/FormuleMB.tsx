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
  MBs,
  darkmode,
}: {
  MBs: { value: number; name: string }[];
  darkmode: boolean;
}) => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const chartData = {
    labels: MBs.map((mb) => mb.name),
    datasets: [
      {
        label: "Kcal/jour",
        data: MBs.map((mb) => mb.value),
        borderColor: "#17919A",
        backgroundColor: "#ace1e577",
      },
    ],
  };
  const chartOptions = {
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
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    color: darkmode ? "#F3F4F6" : "#334155",
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="flex w-full max-w-[450px] flex-col">
      <h3 className="dark:text-slate-100">Métabolisme Basal</h3>
      <div className="flex flex-col gap-2">
        <p
          data-testid="formules-result-mb"
          className="text-xl font-bold text-primary-500"
        >
          Résultat: {MBs[0].value ? MBs[0].value.toFixed(1) : "𝑥"}
        </p>
        <Bar data={chartData} options={chartOptions} />
        <p className="mt-2 self-end text-[10px]/4 text-slate-400">
          * A M Roza, H M Shizgal, The Harris Benedict equation reevaluated:
          resting energy requirements and the body cell mass, The American
          Journal of Clinical Nutrition, Volume 40, Issue 1, 1984.
          <br />* + de 60ans & surpoids: Black, A.E., Coward, W.A., Cole, T.J.
          and Prentice, A.M. (1996) Human energy expenditure in affluent
          societies: An analysis of 574 doubly-labeled water measurements.
          European Journal of Clinical Nutrition, 50, 72-92
        </p>
      </div>
    </div>
  );
};
