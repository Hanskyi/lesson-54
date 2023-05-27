import React from 'react';
import './Cards'

interface IProps {
    onClickItem?: React.MouseEventHandler<HTMLDivElement>
    class?: string
    spanClass?: string
    disabled?: boolean
}
const Card:React.FC<IProps> = (props) => {

    return (
        <div className={props.class}  onClick={props.onClickItem} aria-disabled = {props.disabled}>
            <span className={props.spanClass}></span>
        </div>
    );
};

export default Card;