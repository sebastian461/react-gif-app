import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  /* Este es el caso cuando la comunicación es del Padre al hijo, se debe enviar la prop 'setCategories' */
  /* const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    if (inputValue.trim().length < 1) return;

    //Para evitar enviar las categorías como una prop
    //al usar el método generado con el 'useState' se pueden usar las categorias por un callback
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  }; */

  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();

    if (newCategory.length < 1) return;

    onNewCategory(newCategory);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
