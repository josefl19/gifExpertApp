const { getGifs } = require("../../src/helpers/getGifs");

describe('Pruebas en el helper getGifs', () => { 
    test('Debe retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs('Soccer');

        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    });
});