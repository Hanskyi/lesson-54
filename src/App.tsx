import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Cards from "./components/Card/Cards";
import {IItemType} from "./types.d";
import Counter from "./components/Counter/Counter";
import Reset from "./components/Reset/Reset";
import './App.css';
import Modal from "./components/Modal/modal";

const createItems = () => {
    const items: IItemType[] = [];
    for (let i = 0; i < 36; i++) {
        items.push({hasItem: false, clicked: false, id: nanoid(7), class: 'card', classSpan: 'span'});
    }
    const index = Math.floor(Math.random() * items.length);
    items[index].hasItem = true;
    return items;
};


function App() {
    const [items, setItems] = useState(createItems());
    const [number, setNumber] = useState({number: 0});
    const [modalActive, setModalActive]= useState(false)

    const onClickItem = (id: string) => {
        const index = items.findIndex(item => item.id === id);
        const itemsCopy = [...items];
        const itemCopy = {...items[index]};

        if (items[index].hasItem){
            itemCopy.classSpan = 'span span-true';
        }

        itemCopy.clicked = true;
        itemCopy.class = 'card card-open';
        itemsCopy[index] = itemCopy;
        setItems(itemsCopy);

        if (!items[index].clicked){
            const numberCopy = {...number};
            numberCopy.number = numberCopy.number + 1;
            setNumber(numberCopy);
        }

        if (items[index].hasItem) {
            setModalActive(true)
            const itemsCopy2 = itemsCopy.map(item => ({
                ...item,
                disabled: true
            }));
            if (itemsCopy2.every(item=> item.disabled)) {
               itemsCopy2.forEach(item => {
                   item.class = 'card card-disabled';
               });
            }
            setItems(itemsCopy2);
        }

    };

    const buttonReset = () => {
        setItems(createItems())
        setNumber({number: 0})
    };

    return (
        <div className="App">
            <Cards
                items = {items}
                onClickItem ={onClickItem}
            />
            <Counter number={number}/>
            <Reset buttonReset={() => buttonReset()}/>
            <Modal active={modalActive} setActive={setModalActive} number={number.number}/>
        </div>
    );
}

export default App;
