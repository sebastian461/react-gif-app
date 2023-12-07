import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const titleTest = "Titulo de prueba";
  const urlTest = "http://urltest.com/dragonball.jpg";

  test("snapshot debe regresar un error al no enviar titulo y url", () => {
    const { container } = render(<GifItem title={titleTest} url={urlTest} />);
    //const { container } = render(<GifItem />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={titleTest} url={urlTest} />);
    //expect(screen.getByRole("img").src).toBe(urlTest);
    //expect(screen.getByRole("img").alt).toBe(titleTest);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(urlTest);
    expect(alt).toBe(titleTest);
  });

  test("debe mostrar el titulo en el componente", () => {
    render(<GifItem title={titleTest} url={urlTest} />);
    expect(screen.getByText(titleTest)).toBeTruthy();
  });
});
