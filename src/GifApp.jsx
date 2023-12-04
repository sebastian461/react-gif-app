import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (event) => {
    if (categories.includes(event)) return;

    /* En React hay que evitar la mutación de objetos */
    //categories.push("Nueva categoria");
    setCategories([event, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      {/* Padre-Hijo 
        <AddCategory setCategories={setCategories} />
      */}
      {/* Hijo-Padre */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* Listado de Gif */}
      {categories.map((c) => (
        <GifGrid key={c} category={c} />
      ))}

      {/* Gif Item */}
    </>
  );
};
