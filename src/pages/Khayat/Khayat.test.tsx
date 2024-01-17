import { expect, test, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Khayat } from "./Khayat";
import { khayatList } from "@data/index";

describe("Page Khayat", () => {
  const setup = () => {
    const utils = render(<Khayat />);

    const main = screen.queryByTestId("khayat");
    const input = screen.getByTestId("khayat-input");
    const fichesH3 = screen.queryAllByTestId("khayat-fiche-name");
    const categoriesH2 = screen.queryAllByTestId("khayat-category-name");

    const { fichesTitleData, fichesCategoryData } = {
      fichesCategoryData: [
        ...new Set(khayatList.map((fiche) => fiche.catégorie)),
      ],
      fichesTitleData: khayatList.map((fiche) => fiche.titre),
    };

    return {
      main,
      input,
      fichesH3,
      categoriesH2,
      fichesTitleData,
      fichesCategoryData,
      ...utils,
    };
  };

  test("Is present in DOM", () => {
    const { main } = setup();
    expect(main).toBeInTheDocument();
  });

  test("Categories", () => {
    const { categoriesH2, fichesCategoryData } = setup();

    // Length
    expect(categoriesH2).toHaveLength(fichesCategoryData.length);
    // Values
    const H2Values = categoriesH2.map((category) => category.textContent);
    expect(H2Values).toStrictEqual(fichesCategoryData);
  });

  test("Fiches", () => {
    const { fichesTitleData, fichesH3 } = setup();

    // Length
    expect(fichesH3).toHaveLength(fichesTitleData.length);

    // Values
    const H3Values = fichesH3.map((fiche) => fiche.textContent);
    expect(H3Values).toStrictEqual(fichesTitleData);
  });

  test("Filter", async () => {
    const { fichesTitleData, input } = setup();

    // Filter
    fireEvent.change(input, { target: { value: fichesTitleData[0] } });
    const fichesH3Awaited = await screen.findAllByTestId("khayat-fiche-name");
    expect(fichesH3Awaited).toHaveLength(1);
    expect(fichesH3Awaited[0].textContent).toStrictEqual(fichesTitleData[0]);
  });
});
