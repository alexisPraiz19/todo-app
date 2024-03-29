// Components
import ButtonsOfSelect from "./ButtonsOfSelect";
import Header from "./Header";
import TodoList from "./TodoList";

export default function TodoContainer(): JSX.Element {
  return (
    <main className="main">
        <Header/>
        <TodoList/>
        <ButtonsOfSelect/>
    </main>
  )
}
