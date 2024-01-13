import { khayat } from "@data/index";

export const Khayat = () => {
  return (
    <>
      <main className="flex h-[500px] flex-col items-center gap-10 px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Fiches Khayat</h1>

        <div>
          {khayat.map((fiche, index) => (
            <div key={index}>
              <h2>{fiche.name}</h2>
              <img src={fiche.img} alt={fiche.name} className="w-[200px]" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
