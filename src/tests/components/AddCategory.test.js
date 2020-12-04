import React from 'react';
import '@testing-library/jest-dom'; //---> Para que aparezcan las ayudas de la librearía jest

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    const preventDefault = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('debe renderizar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        
        expect(wrapper.find('input').prop('value')).toBe(value);
    })

    test('no debe postear la información on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toHaveBeenCalled();
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Texto válido';
        wrapper.find('input').simulate('change', { target: { value } });
        expect(wrapper.find('input').prop('value')).toBe(value);
        wrapper.find('form').simulate('submit', { preventDefault });
        expect(wrapper.find('input').prop('value')).toBe('');
        expect(preventDefault).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
    })
    
})