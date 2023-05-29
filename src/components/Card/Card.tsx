import React from 'react';
import './Cards';
import './card.css';

interface IProps {
    onClickItem?: React.MouseEventHandler<HTMLDivElement>,
    class?: string,
    spanClass?: string,
    disabled?: boolean,
    hasItem?: boolean
}
const Card:React.FC<IProps> = (props) => {

    return (
        <div className={props.class}  onClick={props.onClickItem} aria-disabled = {props.disabled}>
            {props.hasItem ? <span className={props.spanClass}></span> : null}
        </div>
    );
};

export default Card;