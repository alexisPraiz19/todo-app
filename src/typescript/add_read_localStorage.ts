// Variable para interactuar con localStorage 
export let storageArray: {id: number, do: string, complete: boolean}[] = []; // Array de objectos que usaré para almacenar los datos del To Do


// Crear - obtener localStorage <inicio>
export function createStorage():void{ localStorage.setItem("todo list", JSON.stringify(storageArray)); }

export function getStorage():any{
    const storage:string = localStorage.getItem("todo list")!;
    return JSON.parse(storage);
}
// <fin>

// Crear - obtener contador ID del localStorage <inicio>
export function setCountStorage(id:number):void{ localStorage.setItem("countID", `${id}`); }

export function getCountStorage():any{
    const countStorage = JSON.parse(localStorage.getItem("countID")!);
    return countStorage;
}
// <fin>


// Función para crear un Todo de la lista <inicio>
export function createItem(id:number, todoText:string):string{
    return `
    <li class="todo-item">
        <span class="border-hover">
            <label for=${id} class="label-check"></label>
            <input type="checkbox" name="check todo" id=${id} class="check-todo"/>
            <img src="./assets/images/icon-check.svg" alt="icon check" class="icon-check"/>
        </span>

        <span class="container-text">
           <label for=${id} class="todo-text">${todoText}</label>
           <img src="./assets/images/icon-cross.svg" alt="icon cross" class="icon-cross"/>
        </span>
    </li>
    `;
}
// <fin>


// To Do por defecto que cargarán al iniciar la página por primera vez <inicio>
export async function addDefaultTodo():Promise<void>{
    const todoList:HTMLUListElement = document.querySelector(".todo-list")!;

    const defaultJson: Response  = await fetch("./defaultTodo.json");
    const parseDefaultJson: any  = await defaultJson.json();
    const detaultTodos: any = parseDefaultJson.todos;

    for(let i in detaultTodos){
        storageArray.push(detaultTodos[i]);
        todoList.innerHTML += createItem(detaultTodos[i].id, detaultTodos[i].do);
    }

    createStorage();
}
// <fin>

// Función para leer y crear items almacenados en localStorage
export function readStorage():any{
    const todoList:HTMLUListElement = document.querySelector(".todo-list")!;
    const storage = getStorage();

    for(let i in storage){ todoList.innerHTML += createItem(storage[i].id, storage[i].do); }
}


// Función para agrega nuevo To Do tanto al DOM como al localStorage
export function addTodo(inputValue:string):void{
    // Agregar To Do al DOM
    const storageId = getCountStorage() + 1;
    const todoList:HTMLUListElement = document.querySelector(".todo-list")!;
    setCountStorage(storageId);
    todoList.innerHTML += createItem(storageId, inputValue);

    // Agregar To Do al localStorage
    interface watchNewTodo {
        id: number;
        do: string;
        complete: false
    }

    const newTodoLocal:watchNewTodo = {
        id: storageId,
        do: inputValue,
        complete: false
    }
    storageArray = getStorage();
    storageArray.push(newTodoLocal);
    createStorage();
}
// <fin>