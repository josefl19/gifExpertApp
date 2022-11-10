import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en el componente GifGrid', () => { 
    const category = 'Friends';

    test('Debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category} /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Alexby',
                url: 'https://localhost/alexby.jpg'
            },
            {
                id: '123',
                title: 'Rubius',
                url: 'https://localhost/rubius.jpg'
            },
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render( <GifGrid category={category} /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});