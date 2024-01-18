export const FormuleIMA = ({
  IMA,
  age,
  gender,
}: {
  IMA: number;
  age: number;
  gender?: "male" | "female";
}) => {
  const tdStyle = "px-1 text-center text-[11px]/4 ";
  const highlightOnThreshold = (
    low: number,
    high: number,
    ageMin: number,
    ageMax: number,
  ) => {
    if (!!!IMA) return "";
    if (IMA >= low && IMA < high && ageMin <= age && age <= ageMax)
      return "font-extrabold text-primary-500";
    return "";
  };

  return (
    <div className="flex w-full max-w-[500px] flex-col">
      <h3 className="dark:text-slate-100">Indice de Masse Adipeuse (IMA)</h3>
      <div className="flex flex-col gap-2">
        <p
          data-testid="formules-result-ima"
          className="text-xl font-bold text-primary-500"
        >
          Résultat: {IMA ? IMA.toFixed(1) : "𝑥"}
        </p>

        <table className="border-separate border-spacing-x-0 dark:text-slate-100">
          <thead>
            <tr>
              <th></th>
              <th>Âge</th>
              <th>Hommes</th>
              <th>Femmes</th>
            </tr>
          </thead>
          <tbody>
            {/* Maigre */}
            <tr>
              <td
                className={
                  highlightOnThreshold(0, gender === "male" ? 8 : 21, 20, 40) ||
                  highlightOnThreshold(
                    0,
                    gender === "male" ? 11 : 23,
                    41,
                    60,
                  ) ||
                  highlightOnThreshold(0, gender === "male" ? 13 : 24, 61, 79)
                }
              >
                Maigre
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "male" ? 8 : 21, 20, 40)
                }
              >
                20 {"≥ 𝑥 ≤"} 40
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "male" ? 8 : 0, 20, 40)
                }
              >
                𝑥 {"<"} 8%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "female" ? 21 : 0, 20, 40)
                }
              >
                𝑥 {"<"} 21%
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "male" ? 11 : 23, 41, 60)
                }
              >
                41 {"≥ 𝑥 ≤"} 60
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "male" ? 11 : 0, 41, 60)
                }
              >
                𝑥 {"<"} 11%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "female" ? 23 : 0, 41, 60)
                }
              >
                𝑥 {"<"} 23%
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "male" ? 13 : 24, 61, 79)
                }
              >
                61 {"≥ 𝑥 ≤"} 79
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "male" ? 13 : 0, 61, 79)
                }
              >
                𝑥 {"<"} 13%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(0, gender === "female" ? 24 : 0, 61, 79)
                }
              >
                𝑥 {"<"} 24%
              </td>
            </tr>

            {/* En bonne santé */}
            <tr>
              <td
                className={
                  highlightOnThreshold(
                    gender === "male" ? 8 : 21,
                    gender === "male" ? 19 : 33,
                    20,
                    40,
                  ) ||
                  highlightOnThreshold(
                    gender === "male" ? 11 : 23,
                    gender === "male" ? 22 : 35,
                    41,
                    60,
                  ) ||
                  highlightOnThreshold(
                    gender === "male" ? 13 : 24,
                    gender === "male" ? 25 : 36,
                    61,
                    79,
                  )
                }
              >
                En bonne santé
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 8 : 21,
                    gender === "male" ? 19 : 33,
                    20,
                    40,
                  )
                }
              >
                20 {"≥ 𝑥 ≤"} 40
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 8 : 0,
                    gender === "male" ? 19 : 0,
                    20,
                    40,
                  )
                }
              >
                8% {"≥ 𝑥 <"} 19%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 21 : 0,
                    gender === "female" ? 33 : 0,
                    20,
                    40,
                  )
                }
              >
                21% {"≥ 𝑥 <"} 33%
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 11 : 23,
                    gender === "male" ? 22 : 35,
                    41,
                    60,
                  )
                }
              >
                41 {"≥ 𝑥 ≤"} 60
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 11 : 0,
                    gender === "male" ? 22 : 0,
                    41,
                    60,
                  )
                }
              >
                11% {"≥ 𝑥 <"} 22%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 23 : 0,
                    gender === "female" ? 35 : 0,
                    41,
                    60,
                  )
                }
              >
                23% {"≥ 𝑥 <"} 35%
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 13 : 24,
                    gender === "male" ? 25 : 36,
                    61,
                    79,
                  )
                }
              >
                61 {"≥ 𝑥 ≤"} 79
              </td>
              <td className={tdStyle}>13% {"≥ 𝑥 <"} 25%</td>
              <td className={tdStyle}>24% {"≥ 𝑥 <"} 36%</td>
            </tr>

            {/* En surpoids */}
            <tr>
              <td
                className={
                  highlightOnThreshold(
                    gender === "male" ? 19 : 33,
                    gender === "male" ? 25 : 39,
                    20,
                    40,
                  ) ||
                  highlightOnThreshold(
                    gender === "male" ? 22 : 35,
                    gender === "male" ? 27 : 40,
                    41,
                    60,
                  ) ||
                  highlightOnThreshold(
                    gender === "male" ? 25 : 36,
                    gender === "male" ? 30 : 42,
                    61,
                    79,
                  )
                }
              >
                En surpoids
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 19 : 33,
                    gender === "male" ? 25 : 39,
                    20,
                    40,
                  )
                }
              >
                20 {"≥ 𝑥 ≤"} 40
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 19 : 0,
                    gender === "male" ? 25 : 0,
                    20,
                    40,
                  )
                }
              >
                19% {"≥ 𝑥 ≤"} 25%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 33 : 0,
                    gender === "female" ? 39 : 0,
                    20,
                    40,
                  )
                }
              >
                33% {"≥ 𝑥 ≤"} 39%
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 22 : 35,
                    gender === "male" ? 27 : 40,
                    41,
                    60,
                  )
                }
              >
                41 {"≥ 𝑥 ≤"} 60
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 22 : 0,
                    gender === "male" ? 27 : 0,
                    41,
                    60,
                  )
                }
              >
                22% {"≥ 𝑥 ≤"} 27%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 35 : 0,
                    gender === "female" ? 40 : 0,
                    41,
                    60,
                  )
                }
              >
                35% {"≥ 𝑥 ≤"} 40%
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 25 : 36,
                    gender === "male" ? 30 : 42,
                    61,
                    79,
                  )
                }
              >
                61 {"≥ 𝑥 ≤"} 79
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 25 : 0,
                    gender === "male" ? 30 : 0,
                    61,
                    79,
                  )
                }
              >
                25% {"≥ 𝑥 ≤"} 30%
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 36 : 0,
                    gender === "female" ? 42 : 0,
                    61,
                    79,
                  )
                }
              >
                36% {"≥ 𝑥 ≤"} 42%
              </td>
            </tr>

            {/* Obèse */}
            <tr>
              <td
                className={
                  highlightOnThreshold(
                    gender === "male" ? 25 : 39,
                    999,
                    20,
                    40,
                  ) ||
                  highlightOnThreshold(
                    gender === "male" ? 27 : 40,
                    999,
                    41,
                    60,
                  ) ||
                  highlightOnThreshold(gender === "male" ? 30 : 42, 999, 61, 79)
                }
              >
                Obèse
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(gender === "male" ? 25 : 39, 999, 20, 40)
                }
              >
                20 {"≥ 𝑥 ≤"} 40
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 25 : 999,
                    999,
                    20,
                    40,
                  )
                }
              >
                25 {"<"} 𝑥
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 39 : 999,
                    999,
                    20,
                    40,
                  )
                }
              >
                39 {"<"} 𝑥
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(gender === "male" ? 27 : 40, 999, 41, 60)
                }
              >
                41 {"≥ 𝑥 ≤"} 60
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 27 : 999,
                    999,
                    41,
                    60,
                  )
                }
              >
                27 {"<"} 𝑥
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 40 : 999,
                    999,
                    41,
                    60,
                  )
                }
              >
                40 {"<"} 𝑥
              </td>
            </tr>
            <tr>
              <td></td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(gender === "male" ? 30 : 42, 999, 61, 79)
                }
              >
                61 {"≥ 𝑥 ≤"} 79
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "male" ? 30 : 999,
                    999,
                    61,
                    79,
                  )
                }
              >
                30 {"<"} 𝑥
              </td>
              <td
                className={
                  tdStyle +
                  highlightOnThreshold(
                    gender === "female" ? 42 : 999,
                    999,
                    61,
                    79,
                  )
                }
              >
                42 {"<"} 𝑥
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 max-w-prose text-xs text-slate-400">
          * A better index of body adiposity. Bergman RN1, Stefanovski D,
          Buchanan TA, Sumner AE, Reynolds JC, Sebring NG, Xiang AH, Watanabe
          RM. Obesity (Silver Spring). 2011 May;19(5):1083-9. doi:
          10.1038/oby.2011.38. Epub 2011 Mar 3 - PMID 21372804
        </p>
      </div>
    </div>
  );
};
