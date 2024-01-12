import { useState } from "react";
import { Input, Empty, Pagination } from "antd";

import { FoodItem } from "@components/index";
import { foodCategories } from "@data/index";
import { labelShortener } from "@utils/formatters";
import { useQuerySearchFood } from "@queries/index";

export const Food = () => {
  const { Search } = Input;
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
          placeholder="Rechercher par catégorie"
          allowClear
          onChange={(value) => {
            setTyping(value.target.value);
            if (!!!typing) setCurrentPage(1);
          }}
          onSearch={(value) => {
            if (value === category) {
              setCurrentPage(1);
              refetch();
            } else setCategory(value);
          }}
          value={typing}
          className="mb-10 mt-5"
          style={{ width: 270 }}
        />

        {/* ===================================== Category filter ===================================== */}
        {!successSearch &&
          searchStatus !== "fetching" &&
          (!!typing ? (
            !!filteredCategories.length ? (
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
            ) : (
              <Empty description={`Aucune catégorie contenant "${typing}"`} />
            )
          ) : (
            <Empty description="Entrez le nom d'une catégorie (e.g. céréales)." />
          ))}

        {/* ========================================= Loading ========================================= */}
        {searchStatus === "fetching" && (
          <div className="dark:text-slate-100">Chargement ...</div>
        )}

        {/* ========================================== Error ========================================== */}
        {errorSearch && (
          <div className="dark:text-slate-100">Une erreur est survenue.</div>
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
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ))}
      </main>
    </>
  );
};
