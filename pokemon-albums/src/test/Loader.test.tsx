import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../Components/Loader';
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

test("Component <Loader /> is render", () => {
    isRender(<Loader />).container.querySelector(".spinner")
})