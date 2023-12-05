import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Dragon Ball");
    expect(gifs.length).toBeGreaterThan(0); //evalua que sea mayor a 0
    //evalua que sea parecido a un objeto gif
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
