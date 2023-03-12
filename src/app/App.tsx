// Tools
import { useEffect } from "react";

// TS logic
import { addDefaultTodo, getStorage , readStorage} from "../typescript/add_read_localStorage";
import { getCountStorage } from "../typescript/add_read_localStorage";

//Components
import BgImage from "../pages/common/BgImage";
import TodoContainer from "../pages/components/TodoContainer";

function App() {
  useEffect(()=>{
    if(getStorage() == null) addDefaultTodo();
    else readStorage();

    if(getCountStorage() == null)  localStorage.setItem("countID", "6");
  });

  return (
    <>
      <BgImage/>
      <TodoContainer/>
    </>
  )
}

export default App;
