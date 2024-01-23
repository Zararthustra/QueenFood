import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useFormik } from "formik";
import { InputNumber, Radio } from "antd";
import { PolarArea } from "react-chartjs-2";
import { useContext, useState } from "react";
import { number, object, string } from "yup";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormuleIMA,
  FormuleIMC,
  FormuleIMG,
  FormuleMB,
  FormuleMN,
} from "@components/index";
import { IFormulesForm } from "@interfaces/index";
import { getLS, setLS } from "@services/localStorageService";
import AppContext, { IAppContext } from "@services/AppContext";
import { IconCalcul, IconFemale, IconMale, IconReset } from "@assets/index";

export const Formules = () => {
  const navigate = useNavigate();
  const labelStyle = "font-bold";
  const errorStyle = "font-bold text-red-500";
  const fieldStyle =
    "flex gap-3 justify-between items-center dark:text-slate-100";

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
      name: "Métabolisme basal",
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
    labels: ["IMC", "IMG", "IMA"],
    datasets: [
      {
        data: [IMC, IMG, IMA],
        backgroundColor: ["#ff218c79", "#ffd80079", "#21b1ff79"],
        hoverOffset: 10,
        borderWidth: 0.5,
      },
    ],
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
    if (gender === "female")
      mb = 9.74 * weight + 172.9 * height - 4.737 * age + 667.051;
    if (gender === "male")
      mb = 13.707 * weight + 492.3 * height - 6.673 * age + 77.607;

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

  const {
    touched,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    getFieldProps,
  } = useFormik({
    initialValues: {
      age: LSValues.age,
      gender: LSValues.gender,
      weight: LSValues.weight,
      height: LSValues.height,
      hip: LSValues.hip,
    },
    onSubmit: onSubmitHandler,
    validationSchema: object({
      age: number().required("Indiquez l'âge"),
      gender: string().required("Indiquez le genre"),
      weight: number().required("Indiquez le poids"),
      height: number().required("Indiquez la taille"),
      hip: number().required("Indiquez le tour de taille"),
    }),
  });
  return (
    <>
      <main
        data-testid="formules"
        className="mb-[50px] flex flex-col items-center gap-10 px-2 dark:text-slate-100"
      >
        <h1 className="mt-5 text-center">Formules</h1>

        <div className="flex flex-wrap justify-center gap-10">
          <form
            data-testid="formules-form"
            className="mt-3 flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center gap-2">
              {/* Gender */}
              <div>
                <div className={fieldStyle}>
                  <label
                    className={labelStyle + " flex w-full justify-between"}
                  >
                    Genre
                    <Radio.Group
                      id="gender"
                      name="gender"
                      options={[
                        {
                          label: (
                            <div
                              data-testid="formules-form-gender-male"
                              className="flex h-full flex-col justify-center px-[4px] pl-[5px]"
                            >
                              <IconMale
                                width={21}
                                height={21}
                                className="shrink-0"
                              />
                            </div>
                          ),
                          value: "male",
                        },
                        {
                          label: (
                            <div className="flex h-full flex-col justify-center px-[4px]">
                              <IconFemale
                                width={21}
                                height={21}
                                className="shrink-0"
                              />
                            </div>
                          ),
                          value: "female",
                        },
                      ]}
                      onChange={({ target: { value } }) => {
                        setFieldValue("gender", value);
                      }}
                      onBlur={handleBlur}
                      value={getFieldProps("gender").value}
                      optionType="button"
                      buttonStyle="solid"
                      size="small"
                    />
                  </label>
                </div>
                {errors?.gender && (
                  <p data-testid="formules-form-error" className={errorStyle}>
                    {errors.gender}
                  </p>
                )}
              </div>

              {/* Age */}
              <div>
                <div className={fieldStyle}>
                  <label className={labelStyle} htmlFor="age">
                    Âge
                  </label>
                  <InputNumber
                    id="age"
                    name="age"
                    type="number"
                    status={touched?.age && errors?.age ? "error" : ""}
                    min={0}
                    onBlur={handleBlur}
                    onChange={(value: number | null) => {
                      if (!!!value || value < 0) return;
                      setFieldValue("age", value);
                    }}
                    value={getFieldProps("age").value}
                  />
                </div>
                {touched?.age && errors?.age && (
                  <p data-testid="formules-form-error" className={errorStyle}>
                    {errors.age}
                  </p>
                )}
              </div>

              {/* Weight */}
              <div>
                <div className={fieldStyle}>
                  <label className={labelStyle} htmlFor="weight">
                    Poids (kg)
                  </label>
                  <InputNumber
                    id="weight"
                    name="weight"
                    type="number"
                    status={touched?.weight && errors?.weight ? "error" : ""}
                    min={0}
                    onBlur={handleBlur}
                    onChange={(value: number | null) => {
                      if (!!!value || value < 0) return;
                      setFieldValue("weight", value);
                    }}
                    value={getFieldProps("weight").value}
                  />
                </div>
                {touched?.weight && errors?.weight && (
                  <p data-testid="formules-form-error" className={errorStyle}>
                    {errors.weight}
                  </p>
                )}
              </div>

              {/* Height */}
              <div>
                <div className={fieldStyle}>
                  <label className={labelStyle} htmlFor="height">
                    Taille (cm)
                  </label>
                  <InputNumber
                    id="height"
                    name="height"
                    type="number"
                    status={touched?.height && errors?.height ? "error" : ""}
                    min={0}
                    onBlur={handleBlur}
                    onChange={(value: number | null) => {
                      if (!!!value || value < 0) return;
                      setFieldValue("height", value);
                    }}
                    value={getFieldProps("height").value}
                  />
                </div>
                {touched?.height && errors?.height && (
                  <p data-testid="formules-form-error" className={errorStyle}>
                    {errors.height}
                  </p>
                )}
              </div>

              {/* Hip */}
              <div>
                <div className={fieldStyle}>
                  <label className={labelStyle} htmlFor="hip">
                    Tour de taille (cm)
                  </label>
                  <InputNumber
                    id="hip"
                    name="hip"
                    type="number"
                    status={touched?.hip && errors?.hip ? "error" : ""}
                    min={0}
                    onBlur={handleBlur}
                    onChange={(value: number | null) => {
                      if (!!!value || value < 0) return;
                      setFieldValue("hip", value);
                    }}
                    value={getFieldProps("hip").value}
                  />
                </div>
                {touched?.hip && errors?.hip && (
                  <p data-testid="formules-form-error" className={errorStyle}>
                    {errors.hip}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              {!!Object.values(LSValues).length && (
                <Button
                  variant="ko"
                  onClick={() => {
                    setLS("FormulesForm", "{}");
                    navigate(0);
                  }}
                >
                  <IconReset width={18} height={18} />
                  Reset
                </Button>
              )}
              <Button primary type="submit">
                <IconCalcul width={20} height={20} />
                Calculer
              </Button>
            </div>
          </form>

          <div className="w-[300px]">
            <PolarArea
              data={chartData}
              options={{
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
                    position: "top",
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-evenly gap-2">
          <FormuleMB MBs={MBs} darkmode={darkMode} />
          <FormuleMN MBs={MBs} darkmode={darkMode} />
          <FormuleIMC IMC={IMC} />
          <FormuleIMG IMG={IMG} gender={genderState} />
          <FormuleIMA IMA={IMA} gender={genderState} age={ageState} />
        </div>
      </main>
    </>
  );
};
