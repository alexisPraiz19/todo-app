// Context
import { useEffect, useContext } from "react";
import { Global } from "../pages/context/GlobalContext";

// TS logic
import { addDefaultTodo, readStorage } from "../typescript/add_read_default";

//Components
import BgImage from "../pages/common/BgImage";
import TodoContainer from "../pages/components/TodoContainer";

function App() {
  const functionsOfContext = useContext(Global) as any;

  useEffect(()=>{
    if(functionsOfContext.getStorage() == null) addDefaultTodo(functionsOfContext);
    else readStorage(functionsOfContext);

    if(functionsOfContext.getCountStorage() == null)  localStorage.setItem("countID", "6");
  });

  return (
    <>
      <BgImage/>
      <TodoContainer/>
    </>
  )
}

export default App;
