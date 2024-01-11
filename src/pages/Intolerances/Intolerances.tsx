import { Input } from "antd";
import { useRef, useState } from "react";

import { intolerances } from "@data/index";

export const Intolerances = () => {
  const { Search } = Input;
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
        <Search
          id="search"
          placeholder="Rechercher"
          allowClear
          onChange={(event) => setSearchValue(event.target.value)}
          onSearch={() => searchRef.current.blur()}
          className="my-5"
          style={{ width: 200 }}
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
              </div>
            ))}
        </div>
      </main>
    </>
  );
};
