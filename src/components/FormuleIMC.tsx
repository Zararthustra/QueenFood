import { useState } from "react";
import { useFormik } from "formik";
import { InputNumber } from "antd";
import { number, object } from "yup";

import { IIMC } from "@interfaces/index";
import { Button } from "@components/index";

export const FormuleIMC = () => {
  const labelStyle = "font-bold";
  const errorStyle = "font-bold text-red-500";
  const fieldStyle =
    "flex gap-3 justify-between items-center dark:text-slate-100";
  const [IMC, setIMC] = useState<number>();
  const onSubmitHandler = async (values: IIMC) => {
    if (!!values.weight && !!values.height)
      setIMC(values.weight / (values.height / 100) ** 2);
  };

  const {
    touched,
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    getFieldProps,
  } = useFormik({
    initialValues: {
      weight: undefined,
      height: undefined,
    },
    onSubmit: onSubmitHandler,
    validationSchema: object({
      weight: number().required("Indiquez le poids"),
      height: number().required("Indiquez la taille"),
    }),
  });

  const highlightOnThreshold = (low: number, high: number) => {
    if (!!!IMC) return;
    if (IMC >= low && IMC < high) return "font-bold text-primary-500";
    return;
  };

  return (
    <div className="flex flex-col">
      <h2 className="mb-5 dark:text-slate-100">
        Indice de Masse Corporelle (IMC)
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
          <div className="flex h-full flex-col justify-center gap-2">
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
                <p className={errorStyle}>{errors.weight}</p>
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
                <p className={errorStyle}>{errors.height}</p>
              )}
            </div>
          </div>

          <Button primary type="submit" className="mt-2">
            Calculer
          </Button>
        </form>

        <div className="bg-slate-200 dark:bg-slate-800  fmd:w-[1px]" />

        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold text-primary-500">
            Résultat: {IMC ? IMC.toFixed(1) : "x"}
          </p>
          <table className="border-separate border-spacing-x-0 dark:text-slate-100">
            <thead>
              <tr>
                <th></th>
                <th>IMC</th>
                <th>Risque</th>
              </tr>
            </thead>
            <tbody>
              <tr className={highlightOnThreshold(0, 16.5)}>
                <td>Maigreur extrême</td>
                <td className="px-4 text-center">x {"<"} 16.5</td>
                <td>Elevé</td>
              </tr>
              <tr className={highlightOnThreshold(16.5, 18.5)}>
                <td>Maigreur</td>
                <td className="px-4 text-center">16.5 {"=> x <"} 18.5</td>
                <td>Accru</td>
              </tr>
              <tr className={highlightOnThreshold(18.5, 25)}>
                <td>Corpulence normale</td>
                <td className="px-4 text-center">18.5 {"=> x <"} 25</td>
                <td>Faible</td>
              </tr>
              <tr className={highlightOnThreshold(25, 30)}>
                <td>Surpoids</td>
                <td className="px-4 text-center">25 {"=> x <"} 30</td>
                <td>Accru</td>
              </tr>
              <tr className={highlightOnThreshold(30, 35)}>
                <td>Obésité modérée</td>
                <td className="px-4 text-center">30 {"=> x <"} 35</td>
                <td>Elevé</td>
              </tr>
              <tr className={highlightOnThreshold(35, 40)}>
                <td>Obésité sévère</td>
                <td className="px-4 text-center">35 {"=> x <"} 40</td>
                <td>Très élevé</td>
              </tr>
              <tr className={highlightOnThreshold(40, 999)}>
                <td>Obésité morbide</td>
                <td className="px-4 text-center">40 {"<"} x</td>
                <td>
                  <p>Extrêmement élevé</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-slate-400">
            * Classification selon l’OMS et l’International Obesity Task Force
            (1998)
          </p>
        </div>
      </div>
    </div>
  );
};
