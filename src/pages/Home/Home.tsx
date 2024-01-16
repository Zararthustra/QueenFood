import {
  IconFood,
  IconFormula,
  IconIntolerance,
  IconKhayat,
  IconLogo,
} from "@assets/index";
import { Button } from "@components/index";
import { useMediaQuery } from "react-responsive";

export const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <main className="flex h-[80vh] flex-col items-center justify-evenly gap-5 px-2">
        <IconLogo
          className="shrink-0 dark:text-slate-100"
          width={isMobile ? 200 : 300}
          height={isMobile ? 200 : 300}
        />
        <h1 className="text-center dark:text-slate-100">
          L'assistant des nutritionnistes
        </h1>

        <div className="mt-5 flex flex-col gap-2">
          <Button primary className="justify-between">
            <IconFormula />
            Formules et indices
          </Button>
          <Button primary className="justify-between">
            <IconIntolerance />
            Liste des intolérances
          </Button>
          <Button primary className="justify-between">
            <IconFood />
            Informations sur les aliments
          </Button>
          <Button primary className="justify-between">
            <IconKhayat />
            Fiches du Pr Khayat
          </Button>
        </div>
      </main>
    </>
  );
};
