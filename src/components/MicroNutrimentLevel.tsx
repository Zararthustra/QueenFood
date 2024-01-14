interface IMicroNutrimentLevelProps {
  level: "élevé" | "moyen" | "faible";
}
export const MicroNutrimentLevel = ({ level }: IMicroNutrimentLevelProps) => (
  <div className="relative mt-5 h-[10px] w-[200px] rounded-full bg-gradient-to-r from-orange-400 to-amber-950">
    <div className="absolute left-[32%] top-[0px] h-[10px] w-[3px] bg-white dark:bg-slate-900" />
    <div className="absolute left-[66%] top-[0px] h-[10px] w-[3px] bg-white dark:bg-slate-900" />
    <p
      className={
        "absolute left-[8%] top-[-20px] text-slate-300 dark:text-slate-500 " +
        (level === "faible" && "font-bold text-slate-800 dark:text-slate-200")
      }
    >
      Faible
    </p>
    <p
      className={
        "absolute left-[38%] top-[-20px] text-slate-300 dark:text-slate-500 " +
        (level === "moyen" && "font-bold text-slate-800 dark:text-slate-200")
      }
    >
      Moyen
    </p>
    <p
      className={
        "absolute left-[73%] top-[-20px] text-slate-300 dark:text-slate-500 " +
        (level === "élevé" && "font-bold text-slate-800 dark:text-slate-200")
      }
    >
      Élevé
    </p>
  </div>
);
