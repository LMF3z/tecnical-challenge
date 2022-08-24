import { ReactNode } from 'react'

type Buttons = "submit" | "button" | "reset"

interface Props {
    type?: Buttons
    children: ReactNode | string
    handleClick?: () => void
    classes?: string
}

const Button = ({ type = "button", classes, children, handleClick }: Props) => {
    return (
        <button className={`violet-bg ${classes}`} type={type} onClick={handleClick} >
            {children}
        </button>
    )
}

export default Button