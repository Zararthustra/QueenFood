import { FormuleIMC, FormuleMB } from "@components/index";

export const Formules = () => {
  return (
    <>
      <main className="flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Formules</h1>
        <div className="flex flex-col gap-10">
          <FormuleIMC />
          {/* <FormuleMB /> */}
        </div>
      </main>
    </>
  );
};
