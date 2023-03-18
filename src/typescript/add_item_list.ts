// Función para agrega nuevo To Do tanto al DOM como al localStorage
export function addItem(inputText:string, functionsOfContext:any, itemsLeftContext:any):void{
    // Agregar To Do al DOM
    const todoList = document.querySelector(".todo-list")! as HTMLUListElement;
    const storageId = functionsOfContext.getCountStorage() + 1;
    const setCountStorage = functionsOfContext.setCountStorage;
    const createItem      = functionsOfContext.createItem;
    setCountStorage(storageId);
    todoList.innerHTML += createItem(storageId, inputText);

    // Agregar To Do al localStorage
    let   storageArray    = functionsOfContext.getStorage();
    const setStorageArray = functionsOfContext.setStorageArray;

    interface WatchNewTodo{
        id: number;
        do: string;
        complete: boolean;
    }

    const addNewTodoLocalStorage:WatchNewTodo = {
        id: storageId,
        do: inputText,
        complete: false
    }

    storageArray.push(addNewTodoLocalStorage);
    setStorageArray(storageArray);
    itemsLeftContext.setLeft(+1);
}
// <fin>