import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas para el hook useFetchGifs', () => {

    

    test('Debe retornar el estado inicial', async () => {
        const category = 'Dragon Ball';
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })
    
    test('debe retornar un arreglo de imgs y el loading en false', async () => {
        const category = 'Ergo Proxy';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    
})
