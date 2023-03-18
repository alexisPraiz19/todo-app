// Tools 
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../context/ItemsLeft";

// TS logic
import { selectBtn, getStorage } from "../../typescript/add_read_localStorage";

function ButtonsOfSelect() {
  const [left, setLeft] = useState(5);

  const example = useContext(MyContext) as any;

  
  return (
    <div className="buttons-container" onClick={e=> selectBtn(e)}>
      <p className="items-left">
        <span className="number-items_left">{example.com} </span> 
        items left
      </p>

      <div className="select-btns">
        <button className="select-btn selected" id="all">All</button>
        <button className="select-btn" id="active">Active</button>
        <button className="select-btn" id="completed">Completed</button>
      </div>

      <button className="select-btn" id="clear-completed">Clear Completed</button>
    </div>
  )
}

export default ButtonsOfSelect;