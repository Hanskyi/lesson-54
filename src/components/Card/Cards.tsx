import React from 'react';
import {IItemType} from "../../types.d";
import Card from "./Card";

interface IProps {
    items:  IItemType[],
    onClickItem:(id:string) => void,
}

const Cards: React.FC<IProps> = ({items, onClickItem}) => {
    return (
        <div className="container">
            {items.map((item) => (
                    <Card
                        key={item.id}
                        onClickItem={() => onClickItem(item.id)}
                        class={item.class}
                        spanClass={item.classSpan}
                    />
                )
            )}
        </div>
    );
};

export default Cards;