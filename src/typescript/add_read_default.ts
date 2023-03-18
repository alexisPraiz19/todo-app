// To Do por defecto que cargarán al iniciar la página por primera vez <inicio>
export async function addDefaultTodo(functionsOfContext:any):Promise<void>{
    const todoList     = document.querySelector(".todo-list")! as HTMLUListElement;
    let   storageArray = functionsOfContext.storageArray;
    const createItem   = functionsOfContext.createItem;
    const setStorageArray = functionsOfContext.setStorageArray; 

    const defaultJson:Response  = await fetch("./defaultTodo.json");
    const parseDefaultJson:any  = await defaultJson.json();
    const detaultTodos:any = parseDefaultJson.todos;

    for(let i in detaultTodos){
        storageArray.push(detaultTodos[i]);
        todoList.innerHTML += createItem(detaultTodos[i].id, detaultTodos[i].do, detaultTodos[i].complete);
    }
    setStorageArray(storageArray);
}
// <fin>

// Función para leer y crear items almacenados en localStorage
export function readStorage(functionsOfContext:any):void {
    const todoList   = document.querySelector(".todo-list")! as HTMLUListElement;
    const storage    = functionsOfContext.getStorage();
    const createItem = functionsOfContext.createItem;

    for(let i in storage){ todoList.innerHTML += createItem(storage[i].id, storage[i].do, storage[i].complete); }
}
// <fin>