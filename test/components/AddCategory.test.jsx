import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox"); //traigo el input desde el componente
    fireEvent.input(input, { target: { value: "Dragon Ball" } }); //activo el evento onChange del input, lo que activa la función del componente
    expect(input.value).toBe("Dragon Ball");
  });
});
