import { HttpResponse, http } from "msw";

import { baseURL } from "@queries/axios";
import { categoriesMock, alimentsMock } from "@mocks/index";

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
    return HttpResponse.json(categoriesMock);
  }),
  http.get("https://world.openfoodfacts.org/api/v2/search", () => {
    return HttpResponse.json(alimentsMock);
  }),
];
