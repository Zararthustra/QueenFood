import { useState } from 'react';
import { Empty, Input, Pagination } from 'antd';

import { IconCrown, IconError, IconInfo } from '@assets/index';
import { Button, FoodItem } from '@components/index';
import { useQueryRetrieveCategories, useQuerySearchFood } from '@queries/index';
import { labelShortener } from '@utils/formatters';

export const Food = () => {
  const [category, setCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const {
    data: categories,
    isError: errorCategories,
    refetch: refetchCategories,
    isLoading: loadingCategories
  } = useQueryRetrieveCategories();
  const {
    refetch,
    data: searchFood,
    isError: errorSearch,
    isSuccess: successSearch,
    fetchStatus: searchStatus
  } = useQuerySearchFood({
    category,
    page: currentPage
  });

  return (
    <>
      <main
        data-testid="aliments"
        className="mb-[50px] flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">
          Aliments {successSearch ? `(${searchFood.count})` : ''}
        </h1>

        <Input
          id="search"
          placeholder="Rechercher une catégorie"
          allowClear
          onChange={(e) => {
            setSearchValue(e.target.value);
            setCategory('');
          }}
          value={searchValue}
          className="mb-10 mt-5"
          style={{ width: 220 }}
          data-testid="aliments-input"
        />

        {/* ========================================= Loading ========================================= */}
        {searchStatus === 'fetching' && (
          <div className="flex flex-col items-center">
            <IconCrown
              width={100}
              height={100}
              className="animate-pulse"
              loader
            />
            <p className="text-center text-slate-400">
              <i>Chargement des aliments...</i>
            </p>
          </div>
        )}
        {loadingCategories && (
          <div className="flex flex-col items-center">
            <IconCrown
              width={100}
              height={100}
              className="animate-pulse"
              loader
            />
            <p className="text-center text-slate-400">
              <i>Chargement des catégories...</i>
            </p>
          </div>
        )}

        {/* ========================================== Error ========================================== */}
        {errorSearch && (
          <div className="flex flex-col gap-2 dark:text-slate-100">
            <div className="bubble--error flex items-center justify-between gap-4 rounded p-2">
              <IconError size={20} className="shrink-0 text-red-700" />
              <p className="w-[190px]">
                Une erreur est survenue lors du chargement des aliments.
              </p>
            </div>
            <Button className="mb-5" onClick={() => refetch()} primary>
              Réessayer
            </Button>
          </div>
        )}
        {errorCategories && (
          <div className="flex flex-col gap-2 dark:text-slate-100">
            <div className="bubble--error flex items-center justify-between gap-4 rounded p-2">
              <IconError size={20} className="shrink-0 text-red-700" />
              <p className="w-[190px]">
                Une erreur est survenue lors du chargement des catégories.
              </p>
            </div>
            <Button
              className="mb-5"
              onClick={() => refetchCategories()}
              primary>
              Réessayer
            </Button>
          </div>
        )}

        {/* ===================================== Category filter ===================================== */}
        {!successSearch && searchStatus !== 'fetching' && !!categories && (
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
                    Catégorie (
                    {
                      categories.filter((cat) =>
                        cat.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      ).length
                    }
                    )
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories
                  .filter((cat) =>
                    cat.name.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((cat) => (
                    <tr
                      key={cat.id}
                      onClick={() => {
                        setCategory(cat.name);
                        setSearchValue(cat.name);
                        setCurrentPage(1);
                      }}
                      className="hover cursor-pointer transition-all hover:bg-slate-200  hover:text-primary-500">
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
        {categories &&
          !categories.filter((cat) =>
            cat.name.toLowerCase().includes(searchValue.toLowerCase())
          ).length && (
            <Empty
              data-testid="aliments-categories-empty"
              description={`Aucune catégorie contenant "${searchValue}"`}
            />
          )}

        {/* ========================================= Success ========================================= */}
        {successSearch &&
          (searchFood.products.length ? (
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

              <div
                data-testid="aliments-aliments"
                className="mt-2 flex flex-col gap-3 dark:text-slate-100">
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
