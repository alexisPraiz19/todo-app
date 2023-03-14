// Tools

import { useEffect } from "react";
import { markerItem } from "../../typescript/add_read_localStorage";

export default function TodoList() {
  useEffect(()=>{
    markerItem();
  })
  return (
    <ul className="todo-list"></ul>
  );
};
