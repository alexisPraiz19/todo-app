// Contexts
import { useContext } from "react";
import { ItemsLeftContext } from "../context/ItemsLeft";
import { Global } from "../context/GlobalContext";

// TS logic
import { markItem } from "../../typescript/mark_item";

export default function TodoList() {
  const itemsLeftContext   = useContext(ItemsLeftContext) as any;
  const functionsOfContext = useContext(Global) as any;
  
  return (
    <ul className="todo-list" onClick={(e)=> markItem(e, itemsLeftContext, functionsOfContext)}></ul>
  );
};
