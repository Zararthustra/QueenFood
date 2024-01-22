import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const FormuleMN = ({
  MB,
  darkmode,
}: {
  MB: number;
  darkmode: boolean;
}) => {
  const MBPercentage = (percent: number) => (percent * MB) / 100;

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const chartData = {
    labels: [
      "Prise de poids",
      "Maintien",
      "Perte de poids",
      "Sèche",
      //   "Cétogène",
    ],
    datasets: [
      {
        label: "Glucides",
        data: [
          MBPercentage(60),
          MBPercentage(55),
          MBPercentage(50),
          MBPercentage(40),
          //   MBPercentage(45),
        ],
        borderColor: "#F3BE00",
        backgroundColor: "#F3BE0077",
      },
      {
        label: "Protéines",
        data: [
          MBPercentage(25),
          MBPercentage(30),
          MBPercentage(30),
          MBPercentage(40),
          //   MBPercentage(25),
        ],
        borderColor: "#FF5E07",
        backgroundColor: "#FF5E0777",
      },
      {
        label: "Lipides",
        data: [
          MBPercentage(15),
          MBPercentage(15),
          MBPercentage(20),
          MBPercentage(20),
          //   MBPercentage(30),
        ],
        borderColor: "#FC003B",
        backgroundColor: "#FC003B77",
      },
    ],
  };

  return (
    <div className="flex w-full max-w-[450px] flex-col">
      <h3 className="dark:text-slate-100">Ratios macro-nutritionnels</h3>
      <div className="flex flex-col gap-2">
        {/* <p
          data-testid="formules-result-mb"
          className="text-xl font-bold text-primary-500"
        >
          Résultat: {MB ? MB.toFixed(1) : "𝑥"}
        </p> */}
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                stacked: true,
                grid: {
                  color: darkmode ? "#F3F4F619" : "#33415519",
                },
                ticks: {
                  color: darkmode ? "#F3F4F6" : "#334155",
                },
              },
              x: {
                stacked: true,
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
              //   tooltip: {
              //     mode: "index",
              //     intersect: false,
              //     callbacks: {
              //       label: function (tooltipItems: TooltipItem<"bar">) {
              //         console.log(tooltipItems);
              //         return tooltipItems.dataset.data + " %";
              //       },
              //     },
              //   },
            },
          }}
        />
        <p className="mt-2 self-end text-[10px]/4 text-slate-400">
          * Pas de source
        </p>
      </div>
    </div>
  );
};
