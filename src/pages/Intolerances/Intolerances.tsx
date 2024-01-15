import { Input } from "antd";
import { useRef, useState } from "react";

import { intolerances } from "@data/index";
import { IconArrowRight } from "@assets/index";

export const Intolerances = () => {
  const searchRef = useRef<any>();
  const [searchValue, setSearchValue] = useState<string>("");

  const getHighlightedText = (text: string, highlight: string) => {
    const tokens = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {tokens.map((token, index) =>
          token.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={index}>{token}</mark>
          ) : (
            token
          ),
        )}
      </span>
    );
  };

  return (
    <>
      <main className="mb-[50px] flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Intolérances</h1>
        <Input
          id="search"
          placeholder="Rechercher une intolérance"
          allowClear
          onChange={(event) => setSearchValue(event.target.value)}
          className="my-5"
          style={{ width: 220 }}
          ref={searchRef}
        />

        <div className="mt-2 flex max-w-prose flex-col gap-3 dark:text-slate-100">
          {intolerances
            .filter(
              (item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.description
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()),
            )
            .map((intolerance, index) => (
              <div key={index}>
                <h2>{getHighlightedText(intolerance.name, searchValue)}</h2>
                <p className="text-justify indent-4">
                  {getHighlightedText(intolerance.description, searchValue)}
                </p>
                <div className="flex gap-2">
                  <IconArrowRight
                    width={15}
                    className="text-slate-500 dark:text-slate-400"
                  />
                  <p className="text-slate-500 dark:text-slate-400">
                    {getHighlightedText(intolerance.examples, searchValue)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};
