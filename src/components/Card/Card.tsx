import React from 'react';
import './Cards'

interface IProps {
    onClickItem?: React.MouseEventHandler<HTMLDivElement>
    class?: string
    spanClass?: string
}
const Card:React.FC<IProps> = (props) => {

    return (
        <div className={props.class} onClick={props.onClickItem}>
            <span className={props.spanClass}></span>
        </div>
    );
};

export default Card;