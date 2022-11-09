import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    // getGifs(category);         // Nunca hacer esto directamente por optimización.
    const [images, setImages] = useState([]);

    /* 
        useEffect -> Hook que permite disparar efectos secundarios, es decir, procesos a ejecutar cuando un proceso cambie
        como por ejemplo cuando un valor cambie, cuando un parametro cambie, cuando se renderiza el componente por primera o n veces

        No puede declarse una función async como parametro pero si puede llamar a una funcion que lo sea.
    */
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{category}</h3>
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
