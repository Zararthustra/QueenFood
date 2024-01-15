import { Collapse } from "antd";
import { useMediaQuery } from "react-responsive";

import { khayatList } from "@data/index";
import { KhayatItem } from "@components/index";
import { labelShortener } from "@utils/formatters";
import { IconCrown, IconCrownOutlined } from "@assets/index";

export const Khayat = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const nutriSantéColors = [
    "bg-[#df1c0d]",
    "bg-[#EF454A]",
    "bg-[#EC687A]",
    "bg-[#D38CA5]",
    "bg-[#C2A8C6]",
    "bg-[#7BA6DB]",
    "bg-[#81A9DC]",
    "bg-[#7BA6DB]",
    "bg-[#5F8AC5]",
    "bg-[#352B64]",
  ];
  // Set categories
  let categoryTmp: string;
  const categories = khayatList
    .filter((fiche) => {
      if (fiche.catégorie !== categoryTmp) {
        categoryTmp = fiche.catégorie;
        return true;
      }
      return false;
    })
    .map((fiche) => fiche.catégorie);

  return (
    <>
      <main className="mb-[50px] flex flex-col items-center gap-10 px-2 dark:text-slate-100">
        <h1 className="my-5 text-center ">Fiches du Pr Khayat</h1>

        <div className="flex w-full max-w-[650px] flex-col flex-wrap justify-center gap-5">
          {/* List categories */}
          {categories.map((categorie, index) => (
            <div key={index}>
              <h2 className="mb-2">{categorie}</h2>
              <Collapse
                ghost
                items={
                  // List fiches
                  khayatList
                    .filter((item) => item.catégorie === categorie)
                    .map((fiche, indexx) => ({
                      key: indexx + 1,
                      label: (
                        <h3 className="mb-[3px]">
                          {isMobile
                            ? labelShortener(fiche.titre, 32)
                            : fiche.titre}
                        </h3>
                      ),
                      children: (
                        <div className="flex justify-center">
                          <KhayatItem fiche={fiche} />
                        </div>
                      ),
                      extra: (
                        <p
                          className={
                            "mb-[3px] rounded-full border-2 border-white px-[3px] py-[5px] text-xs font-bold text-white " +
                            nutriSantéColors[fiche.nutriSanté - 1]
                          }
                        >
                          {fiche.nutriSanté}
                        </p>
                      ),
                    }))
                }
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <IconCrownOutlined className="mb-[3px]" />
                  ) : (
                    <IconCrown className="mb-[3px]" />
                  )
                }
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
