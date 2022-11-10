const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe('Test para el componente GifItem', () => {
    const title = 'Titulo del item';
    const category = 'Dogsu'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FtiAvZc9zt3N8G5MwZkwoJBFdJizTyEY&q=${category}&limit=10`;

    test('Hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el ATL indicado', () => {
        render(<GifItem title={title} url={url} />)

        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();
    });
});