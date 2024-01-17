import { HttpResponse, http } from "msw";

import { baseURL } from "@queries/axios";
import { userMock, loginResponseMock } from "@mocks/index";

export const endpoint = (endpoint: string): string => baseURL + endpoint;

export const handlers = [
  // TEMPLATE
  http.post(endpoint("/endpoint"), () => {
    return HttpResponse.json({ message: "User created successfully" });
  }),
  http.get(endpoint("/endpoint"), () => {
    return HttpResponse.json([{ key: "value" }]);
  }),
  http.get(endpoint("/endpoint/:id"), () => {
    return HttpResponse.json({ key: "value" });
  }),
  http.patch(endpoint("/endpoint/:id"), () => {
    return HttpResponse.json({ message: "User updated successfully" });
  }),
  http.delete(endpoint("/endpoint/:id"), () => {
    return HttpResponse.json(undefined);
  }),
  // FOOD
  http.get("https://world.openfoodfacts.org/categories.json", () => {
    return HttpResponse.json({
      count: 57566,
      tags: [
        {
          id: "en:plant-based-foods-and-beverages",
          known: 1,
          name: "Plant-based foods and beverages",
          products: 419948,
          url: "https://world.openfoodfacts.org/category/plant-based-foods-and-beverages",
        },
      ],
    });
  }),
];
