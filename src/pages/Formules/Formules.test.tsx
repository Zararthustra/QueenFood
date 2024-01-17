import { expect, test, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Formules } from "./Formules";

describe("Page Formules", () => {
  const setup = () => {
    const utils = render(<Formules />);

    const main = screen.queryByTestId("formules");
    const form = screen.getByTestId("formules-form");
    const submitButton = screen.getByRole("button", { name: "Calculer" });

    return {
      main,
      form,
      submitButton,
      ...utils,
    };
  };

  test("Is present in DOM", () => {
    const { main } = setup();
    expect(main).toBeInTheDocument();
  });

  test("Form OK", () => {
    const {
      form,
      submitButton,
      getByLabelText,
      getByTestId,
      queryAllByTestId,
    } = setup();

    const genderButton = getByTestId("formules-form-gender-male");
    const inputAge = getByLabelText("Âge");
    const inputWeight = getByLabelText("Poids (kg)");
    const inputHeight = getByLabelText("Taille (cm)");

    fireEvent.click(genderButton);
    fireEvent.change(inputAge, { target: { value: 55 } });
    fireEvent.change(inputWeight, { target: { value: 72 } });
    fireEvent.change(inputHeight, { target: { value: 175 } });

    fireEvent.click(submitButton);
    const pErrorsQuery = queryAllByTestId("formules-form-error");

    expect(form).toHaveFormValues({
      gender: "male",
      age: 55,
      weight: 72,
      height: 175,
    });
    expect(pErrorsQuery).toHaveLength(0);
  });

  test("Form partially filled with a wrong value", async () => {
    const { form, submitButton, getByLabelText, getByTestId, findAllByTestId } =
      setup();

    const genderButton = getByTestId("formules-form-gender-male");
    const inputAge = getByLabelText("Âge");
    const inputHeight = getByLabelText("Taille (cm)");

    fireEvent.click(genderButton);
    fireEvent.change(inputAge, { target: { value: 55 } });
    fireEvent.change(inputHeight, { target: { value: "string" } });

    fireEvent.click(submitButton);

    const pErrors = await findAllByTestId("formules-form-error");

    expect(form).toHaveFormValues({
      gender: "male",
      age: 55,
      weight: null, // Not filled
      height: null, // String instead of number
    });

    expect(pErrors).toHaveLength(2);
  });

  test("Form KO", async () => {
    const { submitButton, findAllByTestId } = setup();
    fireEvent.click(submitButton);
    const pErrors = await findAllByTestId("formules-form-error");
    expect(pErrors).toHaveLength(4);
  });

  test("Results", async () => {
    const {
      submitButton,
      getByLabelText,
      getByTestId,
      findByTestId,
      findAllByRole,
    } = setup();

    const genderButton = getByTestId("formules-form-gender-male");
    const inputAge = getByLabelText("Âge");
    const inputWeight = getByLabelText("Poids (kg)");
    const inputHeight = getByLabelText("Taille (cm)");

    fireEvent.click(genderButton);
    fireEvent.change(inputAge, { target: { value: 55 } });
    fireEvent.change(inputWeight, { target: { value: 72 } });
    fireEvent.change(inputHeight, { target: { value: 175 } });

    fireEvent.click(submitButton);

    // IMC
    const trs = await findAllByRole("row");
    const resultIMC = await findByTestId("formules-result-imc");
    expect(resultIMC.textContent).toBe("Résultat: 23.5");
    expect(trs).toHaveLength(8);
    expect(trs[3].getAttribute("class")).toBe("font-bold text-primary-500");

    // MB
    const resultMB = await findByTestId("formules-result-mb");
    expect(resultMB.textContent).toBe("Résultat: 1559.0");
  });
});
