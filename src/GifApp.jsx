import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = () => {
    /* En React hay que evitar la mutación de objetos */
    //categories.push("Nueva categoria");
    setCategories(["Nueva categoria", ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

      {/* Listado de Gif */}
      <ol>
        {categories.map((c) => {
          return <li key={c}>{c}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
