import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Components/Table';
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

test("Component <Table /> is render", () => {
    isRender(<Table />).container.querySelector("table")
})