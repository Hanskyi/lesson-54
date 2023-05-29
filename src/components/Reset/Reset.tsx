import React from 'react';

interface IProps {
    buttonReset: React.MouseEventHandler,
}
const Reset: React.FC<IProps> = ({buttonReset}) => {
    return (
        <button onClick={buttonReset}>Reset</button>
    );
};

export default Reset;