import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs"); //esto crea un Mock sobre el custom hook

describe("Pruebas en GifGrid", () => {
  const category = "Dragon Ball";

  test("debe mostrar el loding inicialmente", () => {
    //sino se usa de esta manera la prueba va a fallar porque el mock está creado
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuando cargan las imágenes desde el custom hook", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "ABCD",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
