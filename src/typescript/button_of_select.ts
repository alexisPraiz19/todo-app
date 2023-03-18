    // Funciones para ocultar y mostrar Items de la lista según el botón clickeado
    function all(items:NodeListOf<HTMLLIElement>):void { items.forEach(item => item["style"].display = "flex")}

    function active(items:NodeListOf<HTMLLIElement>):void { items.forEach(item => {
        if(item.classList.contains("todo-completed")) item["style"].display = "none";
        else item["style"].display = "flex";
    })}

    function completed(items:NodeListOf<HTMLLIElement>):void{ items.forEach(item => {
        if(!item.classList.contains("todo-completed")) item["style"].display = "none";
        else item["style"].display = "flex";
    })}

    
    // Función para cambiar el color al botón clickeado
    function changeColorOfButton(btns:NodeListOf<HTMLButtonElement>, target:HTMLElement): void{
        target.classList.add("selected");
        btns.forEach(btn =>{ if(btn.classList.contains("selected") && btn.id != target.id) btn.classList.remove("selected"); });
    }

    // Función para eliminar Item tanto del DOM como del LocalStorage
    function clearCompleted(functionsOfContext:any): void{
        const todoList              = document.querySelector(".todo-list")! as HTMLUListElement;
        const itemsCompletedDOM     = [... document.querySelectorAll(".todo-completed")] as Element[];
        const setStorageArray       = functionsOfContext.setStorageArray;
        let   itemsCompletedStorage = functionsOfContext.getStorage().filter((index:any) => index.complete == true);
        let   arrayStorage          = functionsOfContext.getStorage();
            
        for(let i in itemsCompletedStorage){
            const index = arrayStorage.findIndex((index:any) => index.id == itemsCompletedStorage[i].id);
            arrayStorage.splice(index, 1);
        }
        setStorageArray(arrayStorage);
        
        for(let i in itemsCompletedDOM) todoList.removeChild(itemsCompletedDOM[i])
    }

// Función principal de exportación
export function selectBtn(e:any, functionsOfContext:any):void {
    const target = e.target as HTMLElement;
    const items  = document.querySelectorAll(".todo-item") as NodeListOf<HTMLLIElement>;
    const btn = document.querySelectorAll(".select-btn") as NodeListOf<HTMLButtonElement>;

    if(target.nodeName == "BUTTON" && target.id == "active") active(items); changeColorOfButton(btn, target);  
    if(target.nodeName == "BUTTON" && target.id == "completed") completed(items);  changeColorOfButton(btn, target);
    if(target.nodeName == "BUTTON" && target.id == "all") all(items);  changeColorOfButton(btn, target);
    if(target.nodeName == "BUTTON" && target.id == "clear-completed") clearCompleted(functionsOfContext); changeColorOfButton(btn, target);
}