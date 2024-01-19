import { expect, test, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Formules } from "./Formules";
import { BrowserRouter } from "react-router-dom";

describe("Page Formules", () => {
  const setup = () => {
    const utils = render(
      <BrowserRouter>
        <Formules />
      </BrowserRouter>,
    );

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

  test("Form KO", async () => {
    const { submitButton, findAllByTestId } = setup();
    fireEvent.click(submitButton);
    const pErrors = await findAllByTestId("formules-form-error");
    expect(pErrors).toHaveLength(5);
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
      hip: null, // Not filled
    });

    expect(pErrors).toHaveLength(3);
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
    const inputHip = getByLabelText("Tour de taille (cm)");

    fireEvent.click(genderButton);
    fireEvent.change(inputAge, { target: { value: 55 } });
    fireEvent.change(inputWeight, { target: { value: 72 } });
    fireEvent.change(inputHeight, { target: { value: 175 } });
    fireEvent.change(inputHip, { target: { value: 85 } });

    fireEvent.click(submitButton);
    const pErrorsQuery = queryAllByTestId("formules-form-error");

    expect(form).toHaveFormValues({
      gender: "male",
      age: 55,
      weight: 72,
      height: 175,
      hip: 85,
    });
    expect(pErrorsQuery).toHaveLength(0);
  });

  test("Results", async () => {
    const { submitButton, getByLabelText, getByTestId, findByTestId } = setup();

    const genderButton = getByTestId("formules-form-gender-male");
    const inputAge = getByLabelText("Âge");
    const inputWeight = getByLabelText("Poids (kg)");
    const inputHeight = getByLabelText("Taille (cm)");
    const inputHip = getByLabelText("Tour de taille (cm)");

    fireEvent.click(genderButton);
    fireEvent.change(inputAge, { target: { value: 55 } });
    fireEvent.change(inputWeight, { target: { value: 72 } });
    fireEvent.change(inputHeight, { target: { value: 175 } });
    fireEvent.change(inputHip, { target: { value: 85 } });

    fireEvent.click(submitButton);

    // IMC
    const resultIMC = await findByTestId("formules-result-imc");
    expect(resultIMC.textContent).toBe("Résultat: 23.5");

    // IMG
    const resultIMG = await findByTestId("formules-result-img");
    expect(resultIMG.textContent).toBe("Résultat: 24.7");

    // IMA
    const resultIMA = await findByTestId("formules-result-ima");
    expect(resultIMA.textContent).toBe("Résultat: 18.7");

    // MB
    const resultMB = await findByTestId("formules-result-mb");
    expect(resultMB.textContent).toBe("Résultat: 1559.0");
  });
});
