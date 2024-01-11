import { App } from "antd";
import axios, { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { IOFFBarcode } from "@interfaces/index";
import { toastObject, messageObject } from "@utils/formatters";

// =====
// Axios
// =====

export const retrieveByBarCode = async (
  barcode?: number,
): Promise<IOFFBarcode> => {
  const { data } = await axios.get(
    `https://world.openfoodfacts.net/api/v3/product/${barcode}`,
  );
  return data;
};

// ==========
// ReactQuery
// ==========

export const useQueryRetrieveFoodByBarcode = (barcode?: number) => {
  const { notification } = App.useApp();

  return useQuery(
    ["openfoodfacts", "v3", barcode],
    () => retrieveByBarCode(barcode),
    {
      // Stale 5min
      staleTime: 60_000 * 5,
      enabled: !!barcode,
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
