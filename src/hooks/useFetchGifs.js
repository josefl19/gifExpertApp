/**
 * Custom hook
 */

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /* 
        useEffect -> Hook que permite disparar efectos secundarios, es decir, procesos a ejecutar cuando un proceso cambie
        como por ejemplo cuando un valor cambie, cuando un parametro cambie, cuando se renderiza el componente por primera o n veces

        No puede declarse una función async como parametro pero si puede llamar a una funcion que lo sea.
    */
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading: isLoading
    }
}