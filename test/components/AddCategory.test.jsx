import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox"); //traigo el input desde el componente
    fireEvent.input(input, { target: { value: "Dragon Ball" } }); //activo el evento onChange del input, lo que activa la función del componente
    expect(input.value).toBe("Dragon Ball");
  });

  test("debe llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Dragon Ball";
    const onNewCategory = jest.fn(); //esto es un Mock

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe(""); //se espera que al pasar el método, el valor del input regrese a string vacio

    expect(onNewCategory).toHaveBeenCalled(); //que la función halla sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1); //que sea llamada una vez
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); //que sea llamada con el valor que se espera
  });

  test("no debe de llamar el onNewCategory con el input vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0); //que sea llamada cero veces
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
