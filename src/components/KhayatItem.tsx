import { IKhayat } from "@interfaces/index";
import { getNovaGroupImg, getNutriScoreSvg } from "@utils/formatters";

interface IKhayatItemProps {
  fiche: IKhayat;
}
export const KhayatItem = ({ fiche }: IKhayatItemProps) => {
  const tierStyle = "w-full shadow px-2 py-5";
  return (
    <main className="mb-[50px] border-2 px-5 py-10">
      <h2 className="text-center">{fiche.titre}</h2>

      <div className="my-2 bg-slate-200">{fiche.nutriSanté}</div>

      <div className="my-4 flex justify-center gap-4 tmd:flex-wrap">
        {/* Portions */}
        <div className={tierStyle}>
          <h3 className="mb-2 text-center">Portions</h3>
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
          <h3 className="mb-2 text-center">Énergie</h3>
          <div className="gap-2">
            <p className="font-bold">Pour 100g</p>
            <p>{fiche.énergie["100g"]}</p>
          </div>
          <div className="gap-2">
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
          <h3 className="mb-2 text-center">Dépense</h3>
          <div className="flex flex-col items-center gap-2">
            {fiche.dépenses.map((dépense, index) => (
              <>
                <p key={index}>{dépense}</p>
                {index + 1 !== fiche.dépenses.length && <p>ou</p>}
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Scores */}
      <div className="flex gap-5">
        {getNutriScoreSvg(fiche.nutriScore)}
        {getNovaGroupImg(fiche.nova)}
      </div>

      {/* Avantages/Inconvénients */}
      <div className="flex flex-wrap justify-between">
        <div className="my-2 w-full max-w-[350px]">
          <h3>Avantages</h3>
          <p>{fiche.avantages}</p>
        </div>
        <div className="my-2 w-full max-w-[350px]">
          <h3>Inconvénients</h3>
          <p>{fiche.inconvénients}</p>
        </div>
      </div>

      {/* Astuces & Nutriments*/}
      <div className="flex flex-wrap justify-between">
        <div className="my-2 w-full max-w-[350px]">
          <h3>Astuces</h3>
          <p>{fiche.astuces}</p>
        </div>

        <div className="my-2 w-full max-w-[350px]">
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
    </main>
  );
};
