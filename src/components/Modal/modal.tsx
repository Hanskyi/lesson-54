import React from 'react';
import './modal.css'

interface IProps {
    active?: boolean,
    setActive?: React.Dispatch<React.SetStateAction<boolean>>
    number?: number
}

const Modal: React.FC<IProps> = ({active, setActive, number}) => {
    return (
        <div className={ active ? 'modal active': 'modal'} onClick={() => setActive && setActive(false)}>
            <div className={active ? 'modal-content active': 'modal-content'} onClick={e => e.stopPropagation()}>
                <h3>You win!</h3>
                <p>Tries: {number}</p>
            </div>
        </div>
    );
};

export default Modal;