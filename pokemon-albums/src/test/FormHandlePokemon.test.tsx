import { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormHandlePokemon from '../Components/FormHandlePokemon';
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

test("Component <FormHandlePokemon /> is render", () => {
    isRender(<FormHandlePokemon />).getByText("Nuevo Pokemon")
    isRender(<FormHandlePokemon />).container.querySelectorAll("input").length
    console.log(isRender(<FormHandlePokemon />).container.querySelectorAll("input").length === 5)

    isRender(<FormHandlePokemon />).container.querySelector("button")
})