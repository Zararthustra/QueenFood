import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { useContext, useState } from "react";

import {
  FormuleIMA,
  FormuleIMC,
  FormuleIMG,
  FormuleMB,
  FormuleMN,
  FormulesForm,
  PDFForm,
} from "@components/index";
import { IFormulesForm } from "@interfaces/index";
import { backgroundFormules } from "@assets/index";
import { getLS, setLS } from "@services/localStorageService";
import AppContext, { IAppContext } from "@services/AppContext";

export const Formules = () => {
  const LSValues: IFormulesForm & {
    imc: number;
    img: number;
    ima: number;
    mb: number;
  } = JSON.parse(getLS("FormulesForm") || "{}");

  const [ageState, setAgeState] = useState<number>(LSValues.age || 0);
  const [genderState, setGenderState] = useState<"male" | "female" | undefined>(
    LSValues.gender || undefined,
  );

  const [MB, setMB] = useState<number>(LSValues.mb || 0);
  const MBs: { value: number; name: string }[] = [
    {
      value: MB,
      name: "Basal",
    },
    {
      value: MB * 1.2,
      name: "Sédentaire",
    },
    {
      value: MB * 1.375,
      name: "Légèrement actif",
    },
    {
      value: MB * 1.55,
      name: "Actif",
    },
    {
      value: MB * 1.725,
      name: "Très actif",
    },
    {
      value: MB * 1.9,
      name: "Extrêmement actif",
    },
  ];
  const [IMA, setIMA] = useState<number>(LSValues.ima || 0);
  const [IMC, setIMC] = useState<number>(LSValues.imc || 0);
  const [IMG, setIMG] = useState<number>(LSValues.img || 0);

  const { darkMode } = useContext<IAppContext>(AppContext);
  ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend);
  const chartData = {
    labels: ["IMG", "IMA", "IMC"],
    datasets: [
      {
        data: [IMC, IMG, IMA],
        backgroundColor: ["#ffd80079", "#21b1ff79", "#ff218c79"],
        hoverOffset: 10,
        borderWidth: 0.5,
      },
    ],
  };
  const chartOptions = {
    scales: {
      r: {
        ticks: {
          backdropColor: darkMode ? "#0F172A" : "#F8FAFC",
          color: darkMode ? "white" : "black",
        },
        grid: {
          lineWidth: 0.5,
          color: darkMode ? "#F3F4F6" : "#C1C1C1",
        },
        pointLabels: {
          display: true,
          centerPointLabels: true,
          color: darkMode ? "#F3F4F6" : "#334155",
          font: {
            size: 15,
          },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as "top",
      },
    },
  };

  const onSubmitHandler = async (values: IFormulesForm) => {
    const { gender, age, weight, height, hip } = {
      gender: values.gender,
      age: values.age,
      weight: values.weight,
      height: values.height ? values.height / 100 : 0,
      hip: values.hip,
    };

    if (!!!weight || !!!height || !!!age || !!!gender || !!!hip) return;

    // Set states
    setGenderState(gender);
    setAgeState(age);

    // Formules
    const imc = weight / height ** 2;
    const img =
      1.2 * imc + 0.23 * age - 10.8 * (gender === "male" ? 1 : 0) - 5.4;
    const ima = hip / (height * Math.sqrt(height)) - 18;
    let mb;
    if (gender === "female") {
      // Black & al.
      if (age > 60 && imc > 25)
        mb =
          0.963 *
          weight ** 0.48 *
          height ** 0.5 *
          age ** -0.13 *
          (1000 / 4.1855);
      // Roza & Shizgal
      else mb = 9.74 * weight + 172.9 * height - 4.737 * age + 667.051;
    }
    if (gender === "male") {
      // Black & al.
      if (age > 60 && imc > 25)
        mb =
          1.083 *
          weight ** 0.48 *
          height ** 0.5 *
          age ** -0.13 *
          (1000 / 4.1855);
      // Roza & Shizgal
      else mb = 13.707 * weight + 492.3 * height - 6.673 * age + 77.607;
    }

    // Set states
    if (mb) setMB(mb);
    setIMC(imc);
    setIMG(img);
    setIMA(ima);
    setLS(
      "FormulesForm",
      JSON.stringify({
        gender: values.gender,
        age: values.age,
        weight: values.weight,
        height: values.height,
        hip: values.hip,
        imc: imc,
        img: img,
        ima: ima,
        mb: mb,
      }),
    );
  };

  return (
    <>
      <main
        data-testid="formules"
        className="mb-[50px] flex flex-col items-center gap-10 px-2 dark:text-slate-100"
      >
        <h1 className="mt-5 text-center dark:flg:text-zinc-900">Formules</h1>

        <div className="flex gap-5">
          <div className="flex flex-col gap-10">
            <FormulesForm onSubmitHandler={onSubmitHandler} />
            <PDFForm MBs={MBs} IMA={IMA} IMC={IMC} IMG={IMG} age={ageState} />
          </div>
          <img
            className="absolute left-0 top-0 z-[-1] h-[620px] w-full object-cover tlg:hidden"
            src={backgroundFormules}
            alt="fruits"
          />
        </div>

        <div className="flex w-full max-w-[950px] flex-wrap justify-evenly gap-7">
          <div className="flex w-full items-center gap-3">
            <h1 className="text-zinc-600 dark:text-zinc-300">Métabolisme</h1>
            <div className="mt-3 h-[3px] w-full bg-primary-200 dark:bg-primary-900" />
          </div>
          <div className="flex w-full flex-wrap justify-between gap-7 tlg:justify-center">
            <FormuleMB MBs={MBs} darkmode={darkMode} />
            <FormuleMN MBs={MBs} darkmode={darkMode} />
          </div>

          <div className="flex w-full items-center gap-3">
            <h1 className="text-zinc-600 dark:text-zinc-300">Indices</h1>
            <div className="mt-3 h-[3px] w-full bg-primary-200 dark:bg-primary-900" />
          </div>
          <div className="flex w-full flex-wrap justify-between gap-7 tlg:justify-center">
            <div className="flex flex-col gap-7">
              <FormuleIMA IMA={IMA} gender={genderState} age={ageState} />
              <FormuleIMG IMG={IMG} gender={genderState} />
            </div>

            <div className="flex w-full max-w-[450px] flex-col gap-7">
              <FormuleIMC IMC={IMC} />
              <div className="flex max-w-[450px] justify-center">
                <PolarArea data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
