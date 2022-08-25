import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import HeaderSearch from '../Components/HeaderSearch';
import { Provider } from 'react-redux'
import { store } from '../Store/redux/Provider';

const isRender = (component: ReactNode) => {
    const result = render(
        <Provider store={store}>
            {component}
        </Provider>
    )

    return result
}

test('renders headerSearch component', () => {
    isRender(<HeaderSearch />).getByText("Listado de Pokemons")
});

test('Input type text exit', () => {
    isRender(<HeaderSearch />).container.querySelector("input")
});

test('Button with text buscar exit', () => {
    isRender(<HeaderSearch />).container.querySelector("button")?.value
    screen.findByText(/buscar/i)

});