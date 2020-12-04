import React from 'react';
import { GifGridItem } from '../../components/GifGridItem'
import { shallow } from 'enzyme'

describe('Pruebas para el componente GifGridItem', () => {

    const title = 'Un título';
    const url = 'https://i0.wp.com/fincasbaleares.com/wpfb/wp-content/uploads/2016/11/dummy-image.jpg?ssl=1';
    let wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    });

    test('Prueba de snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un párrafo con el título', () => {
        const p = wrapper.find('div').children('p');
        expect(p.text()).toBe(title);
    })

    test('Debe tener el src y alt de los props', () => {
        const img = wrapper.find('div').children('img');
        const alt = img.prop('alt');
        expect(alt).toBe(title);
        const src = img.prop('src');
        expect(src).toBe(url);
    })

    test('Debe tener las clases de CSS animate__animated y animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__animated')).toBe(true);
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    })

})