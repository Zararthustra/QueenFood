import { useState } from "react";
import { useFormik } from "formik";
import { InputNumber, Radio } from "antd";
import { number, object, string } from "yup";

import { IFormulesForm } from "@interfaces/index";
import { IconFemale, IconMale } from "@assets/index";
import {
  Button,
  FormuleIMA,
  FormuleIMC,
  FormuleIMG,
  FormuleMB,
} from "@components/index";

export const Formules = () => {
  const labelStyle = "font-bold";
  const errorStyle = "font-bold text-red-500";
  const fieldStyle =
    "flex gap-3 justify-between items-center dark:text-slate-100";

  const [ageState, setAgeState] = useState<number>(0);
  const [genderState, setGenderState] = useState<
    "male" | "female" | undefined
  >();

  const [MB, setMB] = useState<number>(0);
  const [IMA, setIMA] = useState<number>(0);
  const [IMC, setIMC] = useState<number>(0);
  const [IMG, setIMG] = useState<number>(0);

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

    // MB
    if (gender === "female")
      setMB(9.74 * weight + 172.9 * height - 4.737 * age + 667.051);
    if (gender === "male")
      setMB(13.707 * weight + 492.3 * height - 6.673 * age + 77.607);

    // IMC
    const imc = weight / height ** 2;
    setIMC(imc);

    // IMG
    setIMG(1.2 * imc + 0.23 * age - 10.8 * (gender === "male" ? 1 : 0) - 5.4);

    // IMA
    setIMA(hip / (height * Math.sqrt(height)) - 18);
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
      age: undefined,
      gender: undefined,
      weight: undefined,
      height: undefined,
      hip: undefined,
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
        className="mb-[50px] flex flex-col items-center px-2 dark:text-slate-100"
      >
        <h1 className="my-5 text-center">Formules</h1>

        <form
          data-testid="formules-form"
          className="my-5 flex flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <div className="flex h-full flex-col justify-center gap-2">
            {/* Gender */}
            <div>
              <div className={fieldStyle}>
                <label className={labelStyle + " flex w-full justify-between"}>
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

          <Button primary type="submit" className="mt-2">
            Calculer
          </Button>
        </form>

        <div className="flex w-full flex-wrap justify-evenly gap-5">
          <FormuleIMC IMC={IMC} />
          <FormuleIMG IMG={IMG} gender={genderState} />
          <FormuleIMA IMA={IMA} gender={genderState} age={ageState} />
          <FormuleMB MB={MB} />
        </div>
      </main>
    </>
  );
};
