//Tools 
import { useEffect, useState } from "react";

function ButtonsOfSelect() {
  return (
    <div className="buttons-container">
        <p className="items-left">
            <span className="number-items_left">5 </span> 
            items left
        </p>

        <div className="select-btns">
            <button className="select-btn selected">All</button>
            <button className="select-btn">Active</button>
            <button className="select-btn">Completed</button>
        </div>

        <button className="select-btn">Clear Completed</button>
    </div>
  )
}

export default ButtonsOfSelect;