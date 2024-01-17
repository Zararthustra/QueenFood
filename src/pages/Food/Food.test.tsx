import { expect, test, describe, vi } from "vitest";
import { App as AntApp } from "antd";
import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Food } from "./Food";
import { categoriesMock } from "@mocks/index";
import { BrowserRouter } from "react-router-dom";

describe("Page Aliments", () => {
  // Mock computedStyle for jsdom (Antd Modal needs)
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
  // Mock matchMedia for jsdom (Antd Pagination needs)
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  const setup = () => {
    const queryClient = new QueryClient();
    const utils = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AntApp>
            <Food />
          </AntApp>
        </BrowserRouter>
      </QueryClientProvider>,
    );

    const main = screen.queryByTestId("aliments");
    const input = screen.getByTestId("aliments-input");

    return {
      main,
      input,
      ...utils,
    };
  };

  test("Is present in DOM", () => {
    const { main } = setup();
    expect(main).toBeInTheDocument();
  });

  test("Filter returns one", async () => {
    const { input, findAllByRole } = setup();
    fireEvent.change(input, { target: { value: categoriesMock.tags[0].name } });
    const trs = await findAllByRole("row");
    expect(trs).toHaveLength(2);
  });

  test("Filter returns several", async () => {
    const { input, findAllByRole } = setup();
    fireEvent.change(input, { target: { value: "plant" } });
    const trs = await findAllByRole("row");
    expect(trs).toHaveLength(3);
  });

  test("Filter returns none", async () => {
    const { input, findAllByRole, findByTestId } = setup();

    fireEvent.change(input, { target: { value: "qdsfqdfc" } });

    const trs = await findAllByRole("row");
    const empty = await findByTestId("aliments-categories-empty");

    expect(trs).toHaveLength(1);
    expect(empty).toBeInTheDocument();
  });

  test("Categories", async () => {
    const { findAllByRole } = setup();
    const trs = await findAllByRole("row");
    expect(trs).toHaveLength(categoriesMock.tags.length + 1);
  });

  test("Aliments", async () => {
    const { findAllByRole, findByTestId } = setup();

    const rowButton = await findAllByRole("row");
    fireEvent.click(rowButton[1]);
    const aliments = await findByTestId("aliments-aliments");

    expect(aliments).toBeInTheDocument();
  });

  test("Aliments details", async () => {
    const { findAllByRole, findByTestId } = setup();
    // Get categories
    const rowButton = await findAllByRole("row");
    // Get aliments
    fireEvent.click(rowButton[1]);
    const aliments = await findByTestId("aliments-aliments");
    // Get details
    const detailButton = aliments.getElementsByTagName("button")[0];
    fireEvent.click(detailButton);
    const details = await findByTestId("aliments-aliments-details");

    expect(details).toBeInTheDocument();
  });
});
