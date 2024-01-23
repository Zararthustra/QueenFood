import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Select } from "antd";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

export const FormuleMN = ({
  MBs,
  darkmode,
}: {
  MBs: { value: number; name: string }[];
  darkmode: boolean;
}) => {
  const [selectedMB, setSelectedMB] = useState<number>(MBs[0].value);
  const MBPercentage = (percent: number) => (percent * selectedMB) / 100;

  // Rerender if MB has changed
  useEffect(() => {
    setSelectedMB(MBs[0].value);
  }, [MBs[0].value]);

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
        <Select
          size="small"
          className="my-2"
          disabled={!!!selectedMB}
          // defaultValue={selectedMB}
          value={selectedMB}
          style={{ width: 230 }}
          onChange={(value) => setSelectedMB(value)}
          options={MBs.map((mb, index) => ({
            value: mb.value,
            label: (
              <div key={index} className="flex items-center justify-between">
                <p className="">{mb.name}</p>
                <p className="text-xs font-bold text-primary-500">
                  {mb.value.toFixed(1)}
                </p>
              </div>
            ),
          }))}
        />

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
              tooltip: {
                mode: "index",
                callbacks: {
                  label: (tooltipItem: TooltipItem<"bar">) => {
                    const value = tooltipItem.formattedValue;
                    const percent = Math.round(
                      ((tooltipItem.raw as number) * 100) / selectedMB,
                    );
                    const label = tooltipItem.dataset.label;

                    return percent + "% de " + label + ": " + value + " Kcal";
                  },
                },
              },
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
