import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cats']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // Opcion 1
        setCategories([ newCategory, ...categories])

        // Opcion 2
        // setCategories( cat => [...cat, 'Valorant'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
