import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test en componente AppCategory', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole('textbox');

        // Act
        fireEvent.input( input, { target: { value: 'Testing' } });

        // Assert
        expect( input.value ).toBe('Testing');
        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'testing';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });     // Evento que cambia el valor del input
        fireEvent.submit( form );                                       // Evento que envia en formulario

        // Se comprueba que el form se envia comprobando que el input regresa a tener una cadena vacia
        expect( input.value ).toBe('');

        // Verificar si la funcion fue llamada
        expect( onNewCategory ).toHaveBeenCalled();

        // Verificar si la funcion fue llamada una vez (o n cantidad de veces)
        expect( onNewCategory ).toHaveBeenCalledTimes(1);

        // Verificar que la funcion fue llamada con un valor determinado (con un parametro)
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe llamar a la funcion onNewCategory si el input es vacio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
    });
});