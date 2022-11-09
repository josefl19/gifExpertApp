import { useState } from 'react'
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Fujarte')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        // setCategories( cat => [...cat, inputValue]) 
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar GIF"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
