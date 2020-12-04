import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas para el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', () => {
        const category = 'Dragon Ball';
        const { result } = renderHook( () => useFetchGifs(category) );
        const { data, loading } = result.current;
        
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })
    
})
