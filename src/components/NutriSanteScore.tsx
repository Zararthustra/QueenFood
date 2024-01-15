interface INutriSanteScoreProps {
  score: number;
  isDrink: boolean;
}
export const NutriSanteScore = ({ score, isDrink }: INutriSanteScoreProps) => {
  return (
    <div className="khayat-gradient mb-5 rounded-xl p-[2px]">
      <div className="rounded-lg bg-white dark:bg-slate-800">
        <div className="flex items-center justify-evenly px-2 py-3">
          <p className="text-center text-base font-bold text-[#df1c0d] tsm:text-sm">
            À Limiter
          </p>
          <p className="w-[8ch] text-center text-base font-bold text-[#f65867] tsm:text-sm">
            Gourmand à calibrer
          </p>
          <p className="w-[8ch] text-center text-base font-bold text-[#679bd6] tsm:text-sm">
            Quotidien à calibrer
          </p>
          <p className="text-center text-base font-bold text-[#2d1a52] dark:text-[#47538C] tsm:text-sm">
            À volonté
          </p>
        </div>

        <div className="khayat-gradient relative flex items-center justify-evenly rounded-lg py-5">
          <div className="absolute flex w-full items-center justify-evenly">
            <p
              className={
                score === 1
                  ? "rounded-full border-2 border-white px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl " +
                    (isDrink ? "bg-[#F0484F]" : "bg-[#df1c0d]")
                  : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
              }
            >
              1
            </p>
            <p
              className={
                score === 2
                  ? "rounded-full border-2 border-white px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl " +
                    (isDrink ? "bg-[#D18AA3]" : "bg-[#EF454A]")
                  : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
              }
            >
              2
            </p>
            <p
              className={
                score === 3
                  ? "rounded-full border-2 border-white px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl " +
                    (isDrink ? "bg-[#8EB0DF]" : "bg-[#EC687A]")
                  : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
              }
            >
              3
            </p>
            <p
              className={
                score === 4
                  ? "rounded-full border-2 border-white px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl " +
                    (isDrink ? "bg-[#5574AE]" : "bg-[#D38CA5]")
                  : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
              }
            >
              4
            </p>
            {!isDrink && (
              <>
                <p
                  className={
                    score === 5
                      ? "rounded-full border-2 border-white bg-[#C2A8C6] px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl"
                      : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
                  }
                >
                  5
                </p>
                <p
                  className={
                    score === 6
                      ? "rounded-full border-2 border-white bg-[#7BA6DB] px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl"
                      : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
                  }
                >
                  6
                </p>
                <p
                  className={
                    score === 7
                      ? "rounded-full border-2 border-white bg-[#81A9DC] px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl"
                      : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
                  }
                >
                  7
                </p>
                <p
                  className={
                    score === 8
                      ? "rounded-full border-2 border-white bg-[#7BA6DB] px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl"
                      : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
                  }
                >
                  8
                </p>
                <p
                  className={
                    score === 9
                      ? "rounded-full border-2 border-white bg-[#5F8AC5] px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl"
                      : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
                  }
                >
                  9
                </p>
                <p
                  className={
                    score === 10
                      ? "rounded-full border-2 border-white bg-[#352B64] px-[5px] py-[12px] font-title text-3xl font-bold text-white shadow tsm:text-2xl"
                      : "font-title text-lg font-bold text-slate-300 tsm:text-sm"
                  }
                >
                  10
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
