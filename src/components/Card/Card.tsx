import React from 'react';

interface IProps {
    onClickItem?: React.MouseEventHandler<HTMLDivElement>
    class?: string
}
const Card:React.FC<IProps> = (props) => {

    return (
        <div className={props.class} onClick={props.onClickItem}>
        </div>

    );
};

export default Card;