import { GifItem } from "./GifItem";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  /* Todo este código se puede resumir como un hook personalizado */
  /* const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  //Es mala practica usar funciones directamente en un componente, por eso se usa el hook 'useEffect'
  //se le indica al componente 
  useEffect(() => {
    getImages();
  }, []); //si el arreglo está vació, el componente ejecuta el callback solo la primera vez que se renderiza */

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      {/* Para agregar clases se usa la palabra 'className' */}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
