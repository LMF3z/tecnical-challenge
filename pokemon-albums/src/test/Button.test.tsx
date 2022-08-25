import { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Components/Button';
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


test("Button is render", () => {
    isRender(<Button type='submit'>Save</Button>).container.querySelector("button")
})

const mockHandler = jest.fn()

test("Button is functionally", () => {
    const btn = isRender(<Button type='submit' handleClick={mockHandler}>Save</Button>).getByText("Save")
    fireEvent.click(btn)
    expect(mockHandler.mock.calls).toHaveLength(1)
})