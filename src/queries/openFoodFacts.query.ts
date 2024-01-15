import { App } from "antd";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { toastObject } from "@utils/formatters";
import { IOFFBarcode, IOFFSearch } from "@interfaces/index";

// =====
// Axios
// =====

export const retrieveCategories = async (): Promise<
  {
    id: string;
    name: string;
    products: number;
  }[]
> => {
  const { data } = await axios.get(
    `https://world.openfoodfacts.org/categories.json`,
  );
  if (!!data) return data.tags;
  return data;
};

export const retrieveByBarCode = async (
  barcode?: number,
): Promise<IOFFBarcode> => {
  const { data } = await axios.get(
    `https://world.openfoodfacts.net/api/v3/product/${barcode}`,
  );
  return data;
};

export const search = async (
  page: number,
  category?: string,
): Promise<IOFFSearch> => {
  const { data } = await axios.get(
    "https://world.openfoodfacts.org/api/v2/search",
    {
      params: {
        categories_tags: category,
        sort_by: "popularity_key ",
        page: page,
        countries_tags_en: "france",
        // brands_tags: brand,
        // fields: "nutriments,selected_images",
      },
    },
  );
  return data;
};

// ==========
// ReactQuery
// ==========

export const useQueryRetrieveCategories = () => {
  const { notification } = App.useApp();

  return useQuery(["openfoodfacts", "categories"], () => retrieveCategories(), {
    // Stale 5min
    staleTime: 60_000 * 5,
    retry: false,
    onError: (error: AxiosError) =>
      notification.error(
        toastObject(
          "error",
          "Impossible de récupérer les données",
          `Une erreur est survenue : ${
            error.response ? error.response.status : error.message
          }`,
        ),
      ),
  });
};

export const useQueryRetrieveFoodByBarcode = (barcode?: number) => {
  const { notification } = App.useApp();

  return useQuery(
    ["openfoodfacts", "barcode", "v3", barcode],
    () => retrieveByBarCode(barcode),
    {
      // Stale 5min
      staleTime: 60_000 * 5,
      enabled: !!barcode,
      retry: false,
      onError: (error: AxiosError) =>
        notification.error(
          toastObject(
            "error",
            "Impossible de récupérer les données",
            `Une erreur est survenue : ${
              error.response ? error.response.status : error.message
            }`,
          ),
        ),
    },
  );
};

export const useQuerySearchFood = ({
  page,
  category,
}: {
  page: number;
  category?: string;
}) => {
  const { notification } = App.useApp();

  return useQuery(
    ["openfoodfacts", "search", "v2", category, page],
    () => search(page, category),
    {
      // Stale 5min
      staleTime: 60_000 * 5,
      enabled: !!category,
      onError: (error: AxiosError) =>
        notification.error(
          toastObject(
            "error",
            "Impossible de récupérer les données",
            `Une erreur est survenue : ${
              error.response ? error.response.status : error.message
            }`,
          ),
        ),
    },
  );
};
