export const FormuleIMC = ({ IMC }: { IMC: number }) => {
  const tdStyle = "px-1 text-center text-[11px]/4 ";
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
          Résultat: {IMC ? IMC.toFixed(1) : "𝑥"}
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
              <td className={tdStyle}>𝑥 {"<"} 16.5</td>
              <td>Elevé</td>
            </tr>
            <tr className={highlightOnThreshold(16.5, 18.5)}>
              <td>Maigreur</td>
              <td className={tdStyle}>16.5 {"≥ 𝑥 <"} 18.5</td>
              <td>Accru</td>
            </tr>
            <tr className={highlightOnThreshold(18.5, 25)}>
              <td>Corpulence normale</td>
              <td className={tdStyle}>18.5 {"≥ 𝑥 <"} 25</td>
              <td>Faible</td>
            </tr>
            <tr className={highlightOnThreshold(25, 30)}>
              <td>Surpoids</td>
              <td className={tdStyle}>25 {"≥ 𝑥 <"} 30</td>
              <td>Accru</td>
            </tr>
            <tr className={highlightOnThreshold(30, 35)}>
              <td>Obésité modérée</td>
              <td className={tdStyle}>30 {"≥ 𝑥 <"} 35</td>
              <td>Elevé</td>
            </tr>
            <tr className={highlightOnThreshold(35, 40)}>
              <td>Obésité sévère</td>
              <td className={tdStyle}>35 {"≥ 𝑥 <"} 40</td>
              <td>Très élevé</td>
            </tr>
            <tr className={highlightOnThreshold(40, 999)}>
              <td>Obésité morbide</td>
              <td className={tdStyle}>40 {"<"} 𝑥</td>
              <td>Extrêmement élevé</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-[10px]/4 text-slate-400">
          * Classification selon l’OMS et l’International Obesity Task Force
          (1998)
        </p>
      </div>
    </div>
  );
};
