import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifExpertApp } from '../../GifExpertApp';

describe('Pruebas para el componente GifExpertApp', () => {
    test('Debe coincidir con el snapshot', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar una lista de categorías', () => {
        const categories = ['One Punch Man', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories = { categories }/> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
})

