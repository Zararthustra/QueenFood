export const FormuleIMC = ({ IMC }: { IMC: number }) => {
  const highlightOnThreshold = (low: number, high: number) => {
    if (!!!IMC) return;
    if (IMC >= low && IMC < high) return "font-extrabold text-primary-500";
    return;
  };

  return (
    <div className="flex w-full max-w-[500px] flex-col">
      <h3 className="dark:text-slate-100">Indice de Masse Corporelle (IMC)</h3>
      <div className="flex flex-col gap-2">
        <p
          data-testid="formules-result-imc"
          className="text-xl font-bold text-primary-500"
        >
          Résultat: {IMC ? IMC.toFixed(1) : "x"}
        </p>
        <table className="border-separate border-spacing-x-0 dark:text-slate-100">
          <thead>
            <tr>
              <th></th>
              <th>IMC</th>
              <th>Risque</th>
            </tr>
          </thead>
          <tbody>
            <tr className={highlightOnThreshold(0, 16.5)}>
              <td>Maigreur extrême</td>
              <td className="px-4 text-center">x {"<"} 16.5</td>
              <td>Elevé</td>
            </tr>
            <tr className={highlightOnThreshold(16.5, 18.5)}>
              <td>Maigreur</td>
              <td className="px-4 text-center">16.5 {"=> x <"} 18.5</td>
              <td>Accru</td>
            </tr>
            <tr className={highlightOnThreshold(18.5, 25)}>
              <td>Corpulence normale</td>
              <td className="px-4 text-center">18.5 {"=> x <"} 25</td>
              <td>Faible</td>
            </tr>
            <tr className={highlightOnThreshold(25, 30)}>
              <td>Surpoids</td>
              <td className="px-4 text-center">25 {"=> x <"} 30</td>
              <td>Accru</td>
            </tr>
            <tr className={highlightOnThreshold(30, 35)}>
              <td>Obésité modérée</td>
              <td className="px-4 text-center">30 {"=> x <"} 35</td>
              <td>Elevé</td>
            </tr>
            <tr className={highlightOnThreshold(35, 40)}>
              <td>Obésité sévère</td>
              <td className="px-4 text-center">35 {"=> x <"} 40</td>
              <td>Très élevé</td>
            </tr>
            <tr className={highlightOnThreshold(40, 999)}>
              <td>Obésité morbide</td>
              <td className="px-4 text-center">40 {"<"} x</td>
              <td>
                <p>Extrêmement élevé</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs text-slate-400">
          * Classification selon l’OMS et l’International Obesity Task Force
          (1998)
        </p>
      </div>
    </div>
  );
};
