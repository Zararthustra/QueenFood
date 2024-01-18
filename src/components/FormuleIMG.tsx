export const FormuleIMG = ({
  IMG,
  gender,
}: {
  IMG: number;
  gender?: "male" | "female";
}) => {
  const tdStyle = "px-1 text-center text-[11px]/4 ";
  const highlightOnThreshold = (low: number, high: number) => {
    if (!!!IMG) return;
    if (IMG >= low && IMG < high) return "font-extrabold text-primary-500";
    return;
  };

  return (
    <div className="flex w-full max-w-[500px] flex-col">
      <h3 className="dark:text-slate-100">Indice de Masse Graisseuse (IMG)</h3>
      <div className="flex flex-col gap-2">
        <p
          data-testid="formules-result-img"
          className="text-xl font-bold text-primary-500"
        >
          Résultat: {IMG ? IMG.toFixed(1) : "𝑥"}
        </p>

        <table className="border-separate border-spacing-x-0 dark:text-slate-100">
          <thead>
            <tr>
              <th></th>
              <th>Hommes</th>
              <th>Femmes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className={highlightOnThreshold(0, gender === "male" ? 15 : 25)}
              >
                Trop maigre
              </td>
              <td
                className={
                  tdStyle +
                  (gender === "male" ? highlightOnThreshold(0, 15) : "")
                }
              >
                𝑥 {"<"} 15%
              </td>
              <td
                className={
                  tdStyle +
                  (gender === "female" ? highlightOnThreshold(0, 25) : "")
                }
              >
                𝑥 {"<"} 25%
              </td>
            </tr>
            <tr>
              <td
                className={highlightOnThreshold(
                  gender === "male" ? 15 : 25,
                  gender === "male" ? 20 : 30,
                )}
              >
                Pourcentage normal
              </td>
              <td
                className={
                  tdStyle +
                  (gender === "male" ? highlightOnThreshold(15, 20) : "")
                }
              >
                15% {"≥ 𝑥 ≤"} 20%
              </td>
              <td
                className={
                  tdStyle +
                  (gender === "female" ? highlightOnThreshold(25, 30) : "")
                }
              >
                25% {"≥ 𝑥 ≤"} 30%
              </td>
            </tr>
            <tr>
              <td
                className={highlightOnThreshold(
                  gender === "male" ? 20 : 30,
                  999,
                )}
              >
                Trop de graisse
              </td>
              <td
                className={
                  tdStyle +
                  (gender === "male" ? highlightOnThreshold(20, 999) : "")
                }
              >
                20 {"<"} 𝑥
              </td>
              <td
                className={
                  tdStyle +
                  (gender === "female" ? highlightOnThreshold(30, 999) : "")
                }
              >
                30 {"<"} 𝑥
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-[10px]/4 text-slate-400">
          * Body mass index as a measure of body fatness: age- and sex-specific
          prediction formulas. Deurenberg P1, Weststrate JA, Seidell JC. Br J
          Nutr. 1991 Mar;65(2):105-14. PMID 2043597
        </p>
      </div>
    </div>
  );
};
