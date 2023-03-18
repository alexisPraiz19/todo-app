// Tools
import { useEffect } from "react";
import GlobalContext from "../pages/context/ItemsLeft";

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
    <GlobalContext>
      <BgImage/>
      <TodoContainer/>
    </GlobalContext>
  )
}

export default App;
