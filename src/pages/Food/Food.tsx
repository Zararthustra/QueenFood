import { useQueryRetrieveFoodByBarcode } from "@queries/openFoodFacts.query";

export const Food = () => {
  const { data } = useQueryRetrieveFoodByBarcode();
  return (
    <>
      <main className="flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Aliments</h1>
      </main>
    </>
  );
};
