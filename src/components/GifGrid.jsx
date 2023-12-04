import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  /* Es mala practica usar funciones directamente en un componente, por eso se usa el hook 'useEffect'
    se le indica al componente 
  */
  useEffect(() => {
    getGifs(category);
  }, []); //si el arreglo está vació, el componente ejecuta el callback solo la primera vez que se renderiza

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
