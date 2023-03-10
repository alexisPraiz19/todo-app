interface Todo {
    todoText: string;
    id: number;
}

export default function TodoListItem({todoText, id}:Todo): JSX.Element {
  return (
    <li className="todo-item">
        <span className="border-hover">
            <label htmlFor={`${id}`} className="label-check"></label>
            <input type="checkbox" name="check todo" id={`${id}`} className="check-todo"/>
            <img src="./assets/images/icon-check.svg" alt="icon check" className="icon-check"/>
        </span>

        <span className="container-text">
           <label htmlFor={`${id}`} className="todo-text">{todoText}</label>
           <img src="./assets/images/icon-cross.svg" alt="icon cross" className="icon-cross"/>
        </span>
    </li>
  )
}
