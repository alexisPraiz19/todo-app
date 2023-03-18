// Tools 
import { useEffect, useState, useContext } from "react";
import { ItemsLeftContext } from "../context/ItemsLeft";
import { Global } from "../context/GlobalContext";

// TS logic
import { selectBtn } from "../../typescript/button_of_select";

function ButtonsOfSelect() {
  const {left} = useContext(ItemsLeftContext) as any;
  const functionsOfContext = useContext(Global);
  
  return (
    <div className="buttons-container" onClick={e=> selectBtn(e, functionsOfContext)}>
      <p className="items-left">
        <span className="number-items_left">{left} </span> 
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