import React from "react";
import './Button.scss';

interface Props {
    children: React.ReactNode;
}

const Button = ({children}: Props) => {
    return (
        <button className='button-shell'>
            {children}
        </button>
    )
};

export default Button;
