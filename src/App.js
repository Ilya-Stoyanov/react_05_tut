import React, { useState, useEffect} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoloist')) || []);
  const [newItems, setNewItems] = useState("");
  const [serchItem, setSerchItem] = useState("")

  // console.log("before loading");
  useEffect(() => {
    localStorage.setItem("todoloist", JSON.stringify(items))
  }, [items])
  // console.log("after loading");

  const handleCheck = (id) =>{
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
  }

  // const setAndSaveItems = newItems => {
  //   setItems(newItems)
  //   localStorage.setItem("todoloist", JSON.stringify(newItems))
  // }

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems)
  }

  const HeandlSubmit = e => {
    e.preventDefault();
    if(!newItems) return;
    addItem(newItems);
    console.log(newItems);
    setNewItems("");
  }

  return (
    <div className="App">
      <Header />
      <SearchItem
        serchItem={serchItem}
        setSerchItem={setSerchItem}
      />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        HeandlSubmit={HeandlSubmit}
      />
      <Content 
        items={items.filter( item => (item.item).toLowerCase().includes(serchItem.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
