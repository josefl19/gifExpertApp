import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
    // getGifs(category);         // Nunca hacer esto directamente por optimización.
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading
                // ? ( <h2>Cargando...</h2> )
                // : null                          // null porque en React no se renderiza.

                // Otra forma sin incluir el null es con un if corto
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={ image.id }
                            { ...image } />
                    ))
                }
            </div>

            <p>Hola Mundo</p>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
