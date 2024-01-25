import { useFormik } from "formik";
import { InputNumber, Radio } from "antd";
import { number, object, string } from "yup";
import { useNavigate } from "react-router-dom";

import { Button } from "@components/index";
import { IFormulesForm } from "@interfaces/index";
import { getLS, setLS } from "@services/localStorageService";
import { IconCalcul, IconFemale, IconMale, IconReset } from "@assets/index";

export const FormulesForm = ({
  onSubmitHandler,
}: {
  onSubmitHandler: (values: IFormulesForm) => void;
}) => {
  const navigate = useNavigate();
  const labelStyle = "font-bold";
  const errorStyle = "font-bold text-red-500 text-xs";
  const fieldStyle =
    "flex gap-3 justify-between items-center dark:text-slate-100";

  const LSValues: IFormulesForm & {
    imc: number;
    img: number;
    ima: number;
    mb: number;
  } = JSON.parse(getLS("FormulesForm") || "{}");

  const { errors, handleSubmit, setFieldValue, getFieldProps } = useFormik({
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
    <form
      data-testid="formules-form"
      className="mt-3 flex w-full max-w-[300px] flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
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
                        className="flex h-full flex-col justify-center"
                      >
                        <IconMale width={21} height={21} className="shrink-0" />
                      </div>
                    ),
                    value: "male",
                  },
                  {
                    label: (
                      <div className="flex h-full flex-col justify-center">
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
                value={getFieldProps("gender").value}
                optionType="button"
                buttonStyle="solid"
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
              placeholder="an"
              status={errors?.age ? "error" : ""}
              min={0}
              onChange={(value: number | null) => {
                if (!!!value || value < 0) return;
                setFieldValue("age", value);
              }}
              value={getFieldProps("age").value}
            />
          </div>
          {errors?.age && (
            <p data-testid="formules-form-error" className={errorStyle}>
              {errors.age}
            </p>
          )}
        </div>

        {/* Weight */}
        <div>
          <div className={fieldStyle}>
            <label className={labelStyle} htmlFor="weight">
              Poids
            </label>
            <InputNumber
              id="weight"
              name="weight"
              type="number"
              placeholder="cm"
              status={errors?.weight ? "error" : ""}
              min={0}
              onChange={(value: number | null) => {
                if (!!!value || value < 0) return;
                setFieldValue("weight", value);
              }}
              value={getFieldProps("weight").value}
            />
          </div>
          {errors?.weight && (
            <p data-testid="formules-form-error" className={errorStyle}>
              {errors.weight}
            </p>
          )}
        </div>

        {/* Height */}
        <div>
          <div className={fieldStyle}>
            <label className={labelStyle} htmlFor="height">
              Taille
            </label>
            <InputNumber
              id="height"
              name="height"
              type="number"
              placeholder="cm"
              status={errors?.height ? "error" : ""}
              min={0}
              onChange={(value: number | null) => {
                if (!!!value || value < 0) return;
                setFieldValue("height", value);
              }}
              value={getFieldProps("height").value}
            />
          </div>
          {errors?.height && (
            <p data-testid="formules-form-error" className={errorStyle}>
              {errors.height}
            </p>
          )}
        </div>

        {/* Hip */}
        <div>
          <div className={fieldStyle}>
            <label className={labelStyle} htmlFor="hip">
              Tour de taille
            </label>
            <InputNumber
              id="hip"
              name="hip"
              type="number"
              placeholder="cm"
              status={errors?.hip ? "error" : ""}
              min={0}
              onChange={(value: number | null) => {
                if (!!!value || value < 0) return;
                setFieldValue("hip", value);
              }}
              value={getFieldProps("hip").value}
            />
          </div>
          {errors?.hip && (
            <p data-testid="formules-form-error" className={errorStyle}>
              {errors.hip}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <Button primary type="submit">
          <IconCalcul width={20} height={20} />
          Calculer
        </Button>
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
      </div>
    </form>
  );
};
