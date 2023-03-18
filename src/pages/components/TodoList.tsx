// Tools

import { useEffect } from "react";
import { markerItem } from "../../typescript/add_read_localStorage";
import { useContext } from "react";
import { MyContext } from "../context/ItemsLeft";


export default function TodoList() {
  const soi = useContext(MyContext) as any;
  useEffect(()=>{

    markerItem(soi);
  })
  return (
    <ul className="todo-list"></ul>
  );
};
