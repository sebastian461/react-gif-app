import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (event) => {
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
      <ol>
        {categories.map((c) => {
          return <li key={c}>{c}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
