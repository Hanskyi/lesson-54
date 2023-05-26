import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './App.css';

function App() {

  const createItems = () => {
    const items: { hasItem: boolean, clicked: boolean, id: string }[] = []
    for (let i = 0; i < 36; i++) {
      items.push({hasItem: false, clicked: false, id: nanoid(7)})
    }

    const index = Math.floor(Math.random() * items.length)
    items[index].hasItem = true;
    return items;
  }


  const [items, setItems] = useState(createItems());
  console.log(items);
  return (
    <div className="App">

    </div>
  );
}

export default App;
