import React from 'react';

interface IProps {
    number: {number: number}
}
const Counter: React.FC<IProps> = ({number}) => {
    return (
        <p>Tries:  {number.number}</p>
    );
};

export default Counter;