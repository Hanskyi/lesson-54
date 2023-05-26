import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Card from "./components/Card/Card";
import './App.css';

function App() {

    const createItems = () => {
        const items: { hasItem: boolean, clicked: boolean, id: string, class: string}[] = []
        for (let i = 0; i < 36; i++) {
            items.push({hasItem: false, clicked: false, id: nanoid(7), class: 'card'})
        }

        const index = Math.floor(Math.random() * items.length);
        items[index].hasItem = true;
        return items;
    }

    const [items, setItems] = useState(createItems());


    console.log(items);


    const onClickItem = (id: string) => {
        const index = items.findIndex(item => item.id === id);
        const itemsCopy = [...items];
        const itemCopy = {...items[index]};
        itemCopy.clicked = true;
        itemCopy.class = 'card card-open';
        itemsCopy[index] = itemCopy;
        setItems(itemsCopy);


        console.log(items[index])
    }

    return (
        <div className="App">
            {items.map(item => (
                <Card
                    key={item.id}
                    onClickItem={() => onClickItem(item.id)}
                    class = {item.class}
                />
            ))
            }

        </div>
    );
}

export default App;
