import {
  IconDepense,
  IconEnergie,
  IconIdea,
  IconPortion,
  IconThumbKO,
  IconThumbOK,
} from "@assets/index";
import { IKhayat } from "@interfaces/index";
import { getNovaGroupImg, getNutriScoreSvg } from "@utils/formatters";

interface IKhayatItemProps {
  fiche: IKhayat;
}
export const KhayatItem = ({ fiche }: IKhayatItemProps) => {
  const tierStyle = "w-full px-4 bg-white rounded-sm py-10 relative mt-7";
  const iconStyle =
    "h-[70px] w-[70px] bg-white flex shadow items-center text-primary-500 justify-center rounded-full top-[-35px] left-[50%] translate-x-[-50%] absolute";
  return (
    <div className="max-w-[700px] rounded border-[1px] bg-slate-50 px-5 py-10 shadow">
      <h2 className="text-center">{fiche.titre}</h2>

      <div className="my-2 bg-slate-200">{fiche.nutriSanté}</div>

      <div className="my-4 flex justify-center gap-4 tsm:flex-wrap">
        {/* Portions */}
        <div className={tierStyle}>
          <div className={iconStyle}>
            <IconPortion width={40} height={40} />
          </div>
          <h3 className="mb-5 text-center">Portions</h3>
          <div className="flex h-full flex-col items-center gap-2">
            <div className="flex flex-wrap gap-2">
              <p className="font-bold">Seniors:</p>
              <p>{fiche.portions.seniors}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <p className="font-bold">Adultes:</p>
              <p>{fiche.portions.adultes}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <p className="font-bold">Enfants:</p>
              <p>{fiche.portions.enfants}</p>
            </div>
          </div>
        </div>

        {/* Énergie */}
        <div className={tierStyle}>
          <div className={iconStyle}>
            <IconEnergie width={40} height={40} />
          </div>
          <h3 className="mb-5 text-center">Énergie</h3>
          <div className="gap-2">
            <p className="font-bold">Pour 100g</p>
            <p>{fiche.énergie["100g"]}</p>
          </div>
          <div className="mt-2 gap-2">
            <p className="font-bold">Par portion</p>
            <div>
              {fiche.énergie.portion.map((portion, index) => (
                <p key={index}>{portion}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Dépenses */}
        <div className={tierStyle}>
          <div className={iconStyle}>
            <IconDepense width={40} height={40} />
          </div>
          <h3 className="mb-5 text-center">Dépense</h3>
          <div className="flex flex-col items-center gap-1">
            {fiche.dépenses.map((dépense, index) => (
              <div key={index}>
                <p>{dépense}</p>
                {index + 1 !== fiche.dépenses.length && (
                  <p className="text-center text-xs">ou</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avantages/Inconvénients */}
      <div className="flex justify-between fsm:gap-5 tsm:flex-wrap">
        <div className="my-2 flex w-full items-center gap-4 rounded bg-green-50 p-2 text-green-800">
          <IconThumbOK className="shrink-0" />
          <p>{fiche.avantages}</p>
        </div>
        <div className="my-2 flex w-full items-center gap-4 rounded bg-red-50 p-2 text-red-800">
          <IconThumbKO className="shrink-0" />
          <p>{fiche.inconvénients}</p>
        </div>
      </div>

      {/* Scores */}
      <div className="flex flex-wrap justify-between gap-5">
        {getNutriScoreSvg(fiche.nutriScore, 100)}
        {getNovaGroupImg(fiche.nova, 35)}
        {/* Astuces*/}
        <div className="my-2 flex w-full max-w-[380px] items-center gap-4 rounded bg-yellow-50 p-2 text-yellow-800">
          <IconIdea className="shrink-0" />
          <p>{fiche.astuces}</p>
        </div>
      </div>

      {/* Nutriments*/}
      <div className="my-2 w-full max-w-[300px]">
        <h3>Nutriments</h3>
        <div className="flex gap-2">
          <p>Micronutriments:</p>
          <p>{fiche.micronutriments}</p>
        </div>
        <div>
          <p>Macronutriments</p>
          <div>GRAPH</div>
        </div>
      </div>
    </div>
  );
};
