import { useState } from "react";
import { useFormik } from "formik";
import { InputNumber, Radio } from "antd";
import { number, object, string } from "yup";

import { IFormulesForm } from "@interfaces/index";
import { IconFemale, IconMale } from "@assets/index";
import { Button, FormuleIMC, FormuleMB } from "@components/index";

export const Formules = () => {
  const labelStyle = "font-bold";
  const errorStyle = "font-bold text-red-500";
  const fieldStyle =
    "flex gap-3 justify-between items-center dark:text-slate-100";

  const [MB, setMB] = useState<number>(0);
  const [IMC, setIMC] = useState<number>(0);
  const onSubmitHandler = async (values: IFormulesForm) => {
    if (!values.weight || !values.height || !values.age || !values.gender)
      return;

    // MB
    if (values.gender === "female")
      setMB(
        9.74 * values.weight +
          172.9 * (values.height / 100) -
          4.737 * values.age +
          667.051,
      );
    if (values.gender === "male")
      setMB(
        13.707 * values.weight +
          492.3 * (values.height / 100) -
          6.673 * values.age +
          77.607,
      );

    // IMC
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
      age: undefined,
      gender: undefined,
      weight: undefined,
      height: undefined,
    },
    onSubmit: onSubmitHandler,
    validationSchema: object({
      age: number().required("Indiquez l'âge"),
      gender: string().required("Indiquez le genre"),
      weight: number().required("Indiquez le poids"),
      height: number().required("Indiquez la taille"),
    }),
  });
  return (
    <>
      <main className="mb-[50px] flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Formules</h1>

        <form
          className="my-5 flex flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <div className="flex h-full flex-col justify-center gap-2">
            {/* Gender */}
            <div>
              <div className={fieldStyle}>
                <label className={labelStyle} htmlFor="gender">
                  Genre
                </label>
                <Radio.Group
                  id="gender"
                  name="gender"
                  options={[
                    {
                      label: (
                        <div className="flex h-full flex-col justify-center px-[4px]">
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
              </div>
              {errors?.gender && <p className={errorStyle}>{errors.gender}</p>}
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
                <p className={errorStyle}>{errors.age}</p>
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

        <div className="flex w-full flex-wrap justify-center gap-10">
          <FormuleIMC IMC={IMC} />
          <FormuleMB MB={MB} />
        </div>
      </main>
    </>
  );
};
