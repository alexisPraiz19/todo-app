// Contexts
import { useContext, useEffect } from "react";
import { Global } from "../context/GlobalContext";
import { ItemsLeftContext } from "../context/ItemsLeft";

// TS logic
import { switchTheme } from "../../typescript/switchTheme";
import { addItem } from "../../typescript/add_item_list";


export default function Header() {
  const functionsOfContext = useContext(Global) as {};
  const itemsLeftContext   = useContext(ItemsLeftContext);
  
  function addTodo():void{
    const inputTodo = document.getElementById('input-add_todo')! as HTMLInputElement;
    const inputText = inputTodo.value;

    if(inputText != "") addItem(inputText, functionsOfContext, itemsLeftContext); inputTodo.value = "";
  }

  useEffect(()=> switchTheme());

  return (
    <header className="header">
      {/* light-dark */}
      <div className="top-content">
        <h1 className="title">todo</h1>
        <div className="switch-theme" title="light-dark_theme"></div>
      </div>

      {/* add todo */}
      <div className="container-add">
        <label htmlFor="input-add_todo" className="label-input_add"></label>
        <input type="text" name="add todo" id="input-add_todo" className="input-add_todo" placeholder="Create a new todo..."/>
        <button className="btn-add_todo" onClick={() => addTodo()}>Add</button>
      </div>
    </header>
  );
};
