import TodoListItem from "../common/TodoListItem";

export default function TodoList() {
  return (
    <ul className="todo-list">
        <TodoListItem 
        todoText="Complete online JavaScript Course" 
        id={1}/>

        <TodoListItem 
        todoText="Job around the park 3x" 
        id={2}/>

        <TodoListItem 
        todoText="10 minutes meditation" 
        id={3}/>

        <TodoListItem 
        todoText="Read for 1 hour" 
        id={4}/>

        <TodoListItem 
        todoText="Pick up groceries" 
        id={5}/>

        <TodoListItem 
        todoText="Complete Todo App on Frontend Mentor" 
        id={6}/>
    </ul>
  );
};
