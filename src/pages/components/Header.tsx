// Tools
import { useEffect } from "react";

// TS logic
import { switchTheme } from "../../typescript/switchTheme";
import { addTodo } from "../../typescript/add_read_localStorage";

export default function Header() {
  useEffect(()=>{
    switchTheme();
    const inputTodo = (document.getElementById('input-add_todo') as HTMLInputElement)!;
    const btnAddTodo:HTMLButtonElement = document.querySelector(".btn-add_todo")!;

    btnAddTodo.addEventListener("click",()=>{ if(inputTodo.value != "") addTodo(inputTodo.value); inputTodo.value = ""})
  });

  return (
    <header className="header">
      {/* light-dark */}
      <div className="top-content">
        <h1 className="title">todo</h1>
        <div className="switch-theme" title="light-dark"></div>
      </div>

      {/* add todo */}
      <div className="container-add">
        <label htmlFor="input-add_todo" className="label-input_add"></label>
        <input type="text" name="add todo" id="input-add_todo" className="input-add_todo" placeholder="Create a new todo..."/>
        <button className="btn-add_todo">Add</button>
      </div>
    </header>
  );
};
