import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const FormuleMB = ({ MB }: { MB: number }) => {
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
    <div className="flex w-[500px] flex-col">
      <h2 className="mb-5 dark:text-slate-100">Métabolisme Basal</h2>
      <Bar
        data={chartData}
        options={{
          indexAxis: "y" as const,
          elements: {
            bar: {
              borderWidth: 1,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: "right" as const,
            },
          },
        }}
      />
      <p className="mt-2 self-end text-xs text-slate-400">
        * Harris et Benedict (1994)
      </p>
    </div>
  );
};
