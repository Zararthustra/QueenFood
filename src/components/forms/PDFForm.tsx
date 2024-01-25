import { useState } from "react";
import { Input, Select } from "antd";

import { IconPDF } from "@assets/index";
import { IFormulesForm } from "@interfaces/index";
import { getLS } from "@services/localStorageService";
import { Button, FormulesToPDF } from "@components/index";

interface IPDFFormProps {
  MBs: { value: number; name: string }[];
  IMA: number;
  IMC: number;
  IMG: number;
}

export const PDFForm = ({ MBs, IMA, IMC, IMG }: IPDFFormProps) => {
  const labelStyle = "font-bold";

  const [PDFForm, setPDFForm] = useState<{
    firstname: string;
    lastname: string;
    objective: string;
    metabolism: {
      value: number | undefined;
      name: string;
    };
  }>({
    firstname: "",
    lastname: "",
    objective: "",
    metabolism: {
      value: undefined,
      name: "",
    },
  });
  const LSValues: IFormulesForm & {
    imc: number;
    img: number;
    ima: number;
    mb: number;
  } = JSON.parse(getLS("FormulesForm") || "{}");

  return (
    <form className="w-full max-w-[300px]">
      <div className="flex gap-2">
        {/* Firstname */}
        <div className="w-full">
          <label className={labelStyle} htmlFor="firstname">
            Prénom
          </label>
          <Input
            disabled={!!!Object.values(LSValues).length}
            id="firstname"
            name="firstname"
            onChange={(e) =>
              setPDFForm({ ...PDFForm, firstname: e.target.value })
            }
            value={PDFForm.firstname}
          />
        </div>
        {/* Lastname */}
        <div className="w-full">
          <label className={labelStyle} htmlFor="lastname">
            Nom
          </label>
          <Input
            disabled={!!!Object.values(LSValues).length}
            id="lastname"
            name="lastname"
            onChange={(e) =>
              setPDFForm({ ...PDFForm, lastname: e.target.value })
            }
            value={PDFForm.lastname}
          />
        </div>
      </div>
      <div className="flex gap-2">
        {/* Objective */}
        <div className="flex-basis-1/2 flex w-full flex-col">
          <label className={labelStyle} htmlFor="objective">
            Objectif
          </label>
          <Select
            disabled={!!!Object.values(LSValues).length}
            id="objective"
            className="w-full"
            value={PDFForm.objective}
            onChange={(value: string) =>
              setPDFForm({ ...PDFForm, objective: value })
            }
            options={[
              {
                label: "Prise de poids",
                value: "Prise de poids",
              },
              {
                label: "Maintien",
                value: "Maintien",
              },
              {
                label: "Perte de poids",
                value: "Perte de poids",
              },
              {
                label: "Sèche",
                value: "Sèche",
              },
            ]}
          />
        </div>

        {/* Metabolism */}
        <div className="flex-basis-1/2 flex w-full flex-col">
          <label className={labelStyle} htmlFor="metabolism">
            Métabolisme
          </label>
          <Select
            disabled={!!!Object.values(LSValues).length}
            id="metabolism"
            className="w-full"
            value={PDFForm.metabolism.value}
            onChange={(_, option: any) =>
              setPDFForm({
                ...PDFForm,
                metabolism: {
                  value: option.value,
                  name: option.label,
                },
              })
            }
            options={MBs.map((mb) => ({
              value: mb.value,
              label: mb.name,
            }))}
          />
        </div>
      </div>

      {/* Prevent huge amount of expensive renders when typing */}
      {!!PDFForm.firstname &&
      !!PDFForm.lastname &&
      !!PDFForm.objective &&
      !!PDFForm.metabolism.value ? (
        <FormulesToPDF
          form={LSValues}
          patient={{
            firstname: PDFForm.firstname,
            lastname: PDFForm.lastname,
          }}
          data={{
            IMC,
            IMG,
            IMA,
            MBs,
            selectedMB: {
              name: PDFForm.metabolism.name,
              value: PDFForm.metabolism.value as number,
            },
            selectedObjective: PDFForm.objective,
          }}
        />
      ) : (
        <Button primary className="mt-2 w-full" disabled>
          <IconPDF />
          <p>Télécharger le Rapport</p>
        </Button>
      )}
    </form>
  );
};
