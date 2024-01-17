import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  IconFood,
  IconFormula,
  IconIntolerance,
  IconKhayat,
  IconLogo,
} from "@assets/index";

export const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const linkStyle =
    "flex flex-col items-center gap-4 border-[1px] border-slate-50 dark:border-slate-900 transition px-5 py-5 rounded" +
    (isMobile
      ? " border-primary-200 dark:border-slate-700"
      : " hover:border-primary-200 dark:hover:border-slate-700");

  return (
    <>
      <main
        data-testid="home"
        className="flex h-[80vh] flex-col items-center justify-evenly px-2 dark:text-slate-100"
      >
        <IconLogo
          className="shrink-0"
          width={isMobile ? 200 : 300}
          height={isMobile ? 200 : 300}
        />
        <h1 className="text-center">L'assistant des nutritionnistes</h1>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <div className="flex flex-col gap-3">
            <Link to="/formules" className={linkStyle}>
              <IconFormula
                width={50}
                height={50}
                className="text-primary-500 dark:text-primary-400"
              />
              <div className="text-center text-xs font-bold">
                <p>Formules</p>
                <p>et indices</p>
              </div>
            </Link>
            <Link to="/intolerances" className={linkStyle}>
              <IconIntolerance
                width={50}
                height={50}
                className="text-primary-500 dark:text-primary-400"
              />
              <div className="text-center text-xs font-bold">
                <p>Liste des</p>
                <p>intolérances</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/aliments" className={linkStyle}>
              <IconFood
                width={50}
                height={50}
                className="text-primary-500 dark:text-primary-400"
              />
              <div className="text-center text-xs font-bold">
                <p>Informations</p>
                <p>alimentaires</p>
              </div>
            </Link>
            <Link to="/fiches" className={linkStyle}>
              <IconKhayat
                width={50}
                height={50}
                className="text-primary-500 dark:text-primary-400"
              />
              <div className="text-center text-xs font-bold">
                <p>Fiches du</p>
                <p>Pr Khayat</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
