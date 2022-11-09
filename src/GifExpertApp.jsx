import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hora de aventura', 'Chivas']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // Opcion 1
        setCategories([...categories, newCategory])

        // Opcion 2
        // setCategories( cat => [...cat, 'Valorant'])
    }

    return (
        <>
            {/*  Titulo */}
            <h1>GifExpertApp</h1>

            {/*  Input */}
            <AddCategory onNewCategory={onAddCategory} />
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/*  Listado de Gifs */}
            <ol>
                {categories.map(category => {
                    // Se debe incluir una key a cada elemento
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/*  Gif Item */}
        </>
    )
}
