import { khayatList } from "@data/index";
import { KhayatItem } from "@components/index";

export const Khayat = () => {
  return (
    <>
      <main className="mb-[50px] flex h-[500px] flex-col items-center gap-10 px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Fiches Khayat</h1>

        <div>
          {khayatList.map((fiche, index) => (
            <KhayatItem key={index} fiche={fiche} />
          ))}
        </div>
      </main>
    </>
  );
};
