import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el Hook useFetchGifs", () => {
  test("debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Dragon Ball")); //esto simula el ciclo de vida de un componente
    // * console.log(result);
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Dragon Ball"));
    /* 'waitFor' regresa una promesa y por eso se usa el await
        le dice que "espere a que se cumpla la condición"
        practicamente le dice al hook que se ejecute */
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
