import { IconCrown } from "@assets/index";
import { KhayatItem } from "@components/KhayatItem";
import { khayatList } from "@data/index";
import { labelShortener } from "@utils/formatters";
import { Collapse } from "antd";

export const Khayat = () => {
  // Set categories
  let categoryTmp: string;
  const categories = khayatList
    .filter((fiche) => {
      if (fiche.catégorie !== categoryTmp) {
        categoryTmp = fiche.catégorie;
        return categoryTmp;
      }
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
                // defaultActiveKey={["1"]}
                ghost
                items={
                  // List fiches
                  khayatList
                    .filter((item) => item.catégorie === categorie)
                    .map((fiche, indexx) => ({
                      key: indexx + 1,
                      label: (
                        <h3 className="">{labelShortener(fiche.titre, 32)}</h3>
                      ),
                      children: (
                        <div className="flex justify-center">
                          <KhayatItem fiche={fiche} />
                        </div>
                      ),
                      extra: fiche.nutriSanté,
                    }))
                }
                expandIcon={({ isActive }) => <IconCrown />}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
