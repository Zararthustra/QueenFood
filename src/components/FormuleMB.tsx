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
    <div className="flex w-full max-w-[500px] flex-col">
      <h3 className="dark:text-slate-100">Métabolisme Basal</h3>
      <div className="flex flex-col gap-2">
        <p
          data-testid="formules-result-mb"
          className="text-xl font-bold text-primary-500"
        >
          Résultat: {MB ? MB.toFixed(1) : "x"}
        </p>
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
                position: "top" as const,
              },
            },
          }}
        />
        <p className="mt-2 self-end text-xs text-slate-400">
          * Harris et Benedict (1994)
        </p>
      </div>
    </div>
  );
};
