import { IconLogo, logo } from "@assets/index";
import { useMediaQuery } from "react-responsive";

export const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <main className="flex h-[500px] flex-col items-center justify-center gap-10 px-2">
        <IconLogo width={isMobile ? 200 : 300} height={isMobile ? 200 : 300} />
        <h1 className="text-center dark:text-slate-100">
          L'assistant des nutritionnistes
        </h1>
      </main>
    </>
  );
};
