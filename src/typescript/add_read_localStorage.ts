// Variable para interactuar con localStorage 
export let storageArray: {id: number, do: string, complete: boolean}[] = []; // Array de objectos que usaré para almacenar los datos del To Do


// Crear - obtener localStorage <inicio>
export function createStorage(store:any):void{ localStorage.setItem("todo list", JSON.stringify(store)); }

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
export function createItem(id:number, todoText:string, complete?:boolean):string{
    return `
    <li class="todo-item ${complete ? "todo-complete" : ""}">
        <span class="border-hover">
            <label for=${id} class="label-check"></label>
            <input type="checkbox" name="check todo" id=${id} class="check-todo" ${complete ? "checked": ""}/>
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

    createStorage(storageArray);
}
// <fin>

// Función para leer y crear items almacenados en localStorage
export function readStorage():any{
    const todoList:HTMLUListElement = document.querySelector(".todo-list")!;
    const storage = getStorage();

    for(let i in storage){ todoList.innerHTML += createItem(storage[i].id, storage[i].do, storage[i].complete); }
}


// Función para agrega nuevo To Do tanto al DOM como al localStorage
export function addTodo(inputValue:string):void{
    // Agregar To Do al DOM
    const storageId = getCountStorage() + 1;
    const todoList:HTMLUListElement = document.querySelector(".todo-list")!;
    setCountStorage(storageId);
    todoList.innerHTML += createItem(storageId, inputValue);

    // Agregar To Do al localStorage
    interface WatchNewTodo {
        id: number;
        do: string;
        complete: false
    }

    const newTodoLocal:WatchNewTodo = {
        id: storageId,
        do: inputValue,
        complete: false
    }
    storageArray = getStorage();
    storageArray.push(newTodoLocal);
    createStorage(storageArray);
}
// <fin>


//
interface WatchMarkerItem {
    check:boolean;
    generic: HTMLElement[],
    id: number
}

function markerItemExtend({check, generic, id}:WatchMarkerItem):void{
    let storageValues = getStorage();
    let idMatch = storageValues.find((i:any) => i.id == id);

    if(check){
        generic[0].classList.add("todo-complete");

        idMatch.complete = true;
        createStorage(storageValues);
    }else{
        generic[0].classList.remove("todo-complete");

        idMatch.complete = false;
        createStorage(storageValues);
    }
}
// 
export function markerItem():void{
    const todoList:HTMLUListElement = document.querySelector(".todo-list")!;

    todoList.addEventListener("click",e=>{
        // Marcar/Desmarcar tarea tarea completa tanto en el DOM como localStorage
        const inputCheck = e.target as HTMLInputElement;
        let itemList  = inputCheck.parentElement!.parentElement! as HTMLLIElement;
        let iconCheck = itemList.firstElementChild!.lastElementChild! as HTMLImageElement;
        let todoText  = itemList.lastElementChild!.firstElementChild! as HTMLLabelElement;
        let id:number = parseInt(inputCheck.id);
        
        if(inputCheck.nodeName == "INPUT" && inputCheck.checked){
            let params = {
                check: true,
                generic: [itemList, iconCheck, todoText],
                id
            }
            markerItemExtend(params);
        }
        else if(inputCheck.nodeName == "INPUT" && !inputCheck.checked){
            let params = {
                check: false,
                generic: [itemList, iconCheck, todoText],
                id
            }
            markerItemExtend(params);
        }

        // Eliminar tarea con el icono Cruz
        const iconCross = e.target as HTMLElement;
        const childID   = itemList.firstElementChild!.children[1].id;
        const removeID  = getStorage().findIndex((i:any) => i.id == childID);

        if(iconCross.nodeName == "IMG" && iconCross.classList.contains("icon-cross")){
            todoList.removeChild(itemList);
            let storageValues = getStorage();
            storageValues.splice(removeID, 1);
            createStorage(storageValues);
        }
    });
}