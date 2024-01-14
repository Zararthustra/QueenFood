import { useState } from "react";
import { Input, Empty, Pagination } from "antd";

import { foodCategories } from "@data/index";
import { labelShortener } from "@utils/formatters";
import { useQuerySearchFood } from "@queries/index";
import { IconCrown, IconInfo } from "@assets/index";
import { Button, FoodItem } from "@components/index";

export const Food = () => {
  const { Search } = Input;
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [typing, setTyping] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const filteredCategories = foodCategories.filter((cat) =>
    cat.name.toLowerCase().includes(typing.toLowerCase()),
  );
  // const { data: getBarcode } = useQueryRetrieveFoodByBarcode();
  const {
    data: searchFood,
    isSuccess: successSearch,
    isError: errorSearch,
    fetchStatus: searchStatus,
    refetch,
  } = useQuerySearchFood({
    category,
    page: currentPage,
  });

  return (
    <>
      <main className="mb-[50px] flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">
          Aliments {successSearch ? `(${searchFood.count})` : ""}
        </h1>

        <Search
          id="search"
          placeholder="Rechercher une catégorie"
          allowClear
          onChange={(e) => {
            setTyping(e.target.value);
            if (!!!e.target.value) setCategory("");
          }}
          onSearch={(value) => {
            if (value === category) {
              setCurrentPage(1);
              refetch();
            } else setCategory(value);
          }}
          value={typing}
          className="mb-10 mt-5"
          style={{ width: 240 }}
        />

        {/* ========================================= Loading ========================================= */}
        {searchStatus === "fetching" && (
          <IconCrown width={100} height={100} className="animate-pulse" />
        )}

        {/* ========================================== Error ========================================== */}
        {errorSearch && (
          <div className="dark:text-slate-100">Une erreur est survenue.</div>
        )}

        {/* ===================================== Category filter ===================================== */}
        {!successSearch &&
          searchStatus !== "fetching" &&
          !!filteredCategories.length && (
            <>
              <Button
                className="mb-5"
                onClick={() => setShowCategories(!showCategories)}
                primary
              >
                {showCategories ? "Masquer" : "Afficher"} les catégories
              </Button>

              {showCategories && (
                <>
                  <div className="bubble--info flex items-center gap-2 rounded p-2">
                    <IconInfo size={20} className="text-blue-700" />
                    <p>Cliquez sur une catégorie pour voir les produits</p>
                  </div>
                  <table className="border-collapse border-spacing-x-5 dark:text-slate-100">
                    <thead>
                      <tr>
                        <th className="py-5">Produits</th>
                        <th className="py-5">
                          Catégorie ({filteredCategories.length})
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCategories.map((cat) => (
                        <tr
                          key={cat.id}
                          onClick={() => {
                            setCategory(cat.name);
                            setTyping(cat.name);
                            setCurrentPage(1);
                          }}
                          className="hover cursor-pointer transition-all hover:bg-slate-200  hover:text-primary-500"
                        >
                          <td className="pb-1 pl-1 pr-1">{cat.products}</td>
                          <td className="pb-1 pl-2 pr-1">
                            {labelShortener(cat.name, 35)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </>
          )}
        {!!!filteredCategories.length && (
          <Empty description={`Aucune catégorie contenant "${typing}"`} />
        )}

        {/* ========================================= Success ========================================= */}
        {successSearch &&
          (!!searchFood.products.length ? (
            <>
              <Pagination
                className="mb-5"
                total={searchFood.count}
                onChange={(page) => setCurrentPage(page)}
                // showTotal={(total, range) => `${range[0]}-${range[1]} sur ${total}`}
                defaultPageSize={searchFood.page_size}
                showSizeChanger={false}
                current={currentPage}
                hideOnSinglePage
                responsive
              />

              <div className="mt-2 flex flex-col gap-3 dark:text-slate-100">
                {searchFood.products.map((product, index) => (
                  <FoodItem key={index} product={product} />
                ))}
              </div>

              <Pagination
                className="mt-5"
                total={searchFood.count}
                onChange={(page) => setCurrentPage(page)}
                // showTotal={(total, range) => `${range[0]}-${range[1]} sur ${total}`}
                defaultPageSize={searchFood.page_size}
                showSizeChanger={false}
                current={currentPage}
                hideOnSinglePage
                responsive
              />
            </>
          ) : (
            <Empty description="Aucun produit trouvé" />
          ))}
      </main>
    </>
  );
};
