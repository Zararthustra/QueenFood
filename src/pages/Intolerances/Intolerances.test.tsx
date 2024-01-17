import { expect, test, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { intolerances } from "@data/index";
import { Intolerances } from "./Intolerances";

describe("Page Intolérances", () => {
  const setup = () => {
    const utils = render(<Intolerances />);

    const main = screen.queryByTestId("intolerance");
    const input = screen.getByTestId("intolerance-input");
    const intolerancesH3 = screen.queryAllByTestId("intolerance-name");

    const { intoleranceNames, intoleranceDescription, intoleranceExample } = {
      intoleranceNames: intolerances.map((item) => item.name),
      intoleranceDescription: intolerances[0].description,
      intoleranceExample: intolerances[0].examples,
    };

    return {
      main,
      input,
      intolerancesH3,
      intoleranceNames,
      intoleranceExample,
      intoleranceDescription,
      ...utils,
    };
  };

  test("Is present in DOM", () => {
    const { main } = setup();
    expect(main).toBeInTheDocument();
  });

  test("Intolérances", () => {
    const { intoleranceNames, intolerancesH3 } = setup();

    // Length
    expect(intolerancesH3).toHaveLength(intoleranceNames.length);

    // Values
    const H3Values = intolerancesH3.map((item) => item.textContent);
    expect(H3Values).toStrictEqual(intoleranceNames);
  });

  test("Filter Name", async () => {
    const { intoleranceNames, input } = setup();

    fireEvent.change(input, { target: { value: intoleranceNames[0] } });
    const intolerancesH3Awaited =
      await screen.findAllByTestId("intolerance-name");

    expect(intolerancesH3Awaited.length).toBeGreaterThanOrEqual(1);
    expect(intolerancesH3Awaited.length).toBeLessThan(intoleranceNames.length);
    expect(intolerancesH3Awaited[0].textContent).toStrictEqual(
      intoleranceNames[0],
    );
  });

  test("Filter Description", async () => {
    const { intoleranceNames, intoleranceDescription, input } = setup();

    fireEvent.change(input, { target: { value: intoleranceDescription } });
    const intolerancesH3Awaited =
      await screen.findAllByTestId("intolerance-name");

    expect(intolerancesH3Awaited.length).toBeGreaterThanOrEqual(1);
    expect(intolerancesH3Awaited.length).toBeLessThan(intoleranceNames.length);
  });

  test("Filter Examples", async () => {
    const { intoleranceNames, intoleranceExample, input } = setup();

    fireEvent.change(input, { target: { value: intoleranceExample } });
    const intolerancesH3Awaited =
      await screen.findAllByTestId("intolerance-name");

    expect(intolerancesH3Awaited.length).toBeGreaterThanOrEqual(1);
    expect(intolerancesH3Awaited.length).toBeLessThan(intoleranceNames.length);
  });

  test("Highlight text", async () => {
    const { intoleranceNames, input } = setup();

    fireEvent.change(input, { target: { value: intoleranceNames[0] } });
    const intolerancesH3Awaited =
      await screen.findAllByTestId("intolerance-name");

    const mark = intolerancesH3Awaited[0].parentNode?.querySelector("mark");

    expect(mark).toBeTruthy();
    expect(mark?.textContent).toStrictEqual(intoleranceNames[0]);
  });
});
