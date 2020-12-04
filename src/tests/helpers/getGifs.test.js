const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas con getGifs Fetch',  () => {
    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch Man');
        expect(gifs.length).toBe(10);
    })

    test('debe devolver un array vacío al enviar una categoría vacía', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})