interface WatchMarkerItem {
    check:boolean;
    arrayElement: HTMLElement[],
    id: number,
    itemsLeftContext: any;
    functionsOfContext: any;
}
  // Función para ahorrar código en <markItem>
    function markItemExtend({check, arrayElement, id, itemsLeftContext, functionsOfContext}:WatchMarkerItem):void {
        let   storageLeft;
        let   storageArray    = functionsOfContext.getStorage();
        const itemIdMatch     = storageArray.find((index:any) => index.id == id) as any;
        const setStorageArray = functionsOfContext.setStorageArray;
        
        if(check){
            arrayElement[0].classList.add("todo-completed");
    
            itemIdMatch.complete = true;
            setStorageArray(storageArray);
            storageLeft = storageArray.filter((index:any) => index.complete == false);
            itemsLeftContext.setLeft(storageLeft.length);
        }else{
            arrayElement[0].classList.remove("todo-completed");
    
            itemIdMatch.complete = false;
            setStorageArray(storageArray);
            storageLeft = storageArray.filter((index:any) => index.complete == false);
            itemsLeftContext.setLeft(storageLeft.length);
        }
    }
  // <fin>

// Función principal de exportación
export function markItem(e:any, itemsLeftContext:any, functionsOfContext:any):void{
    // Marcar/Desmarcar tarea tarea completa tanto en el DOM como localStorage
    const itemCheckBox = e.target as HTMLInputElement;
    let   itemList     = itemCheckBox.parentElement!.parentElement! as HTMLLIElement;
    let   iconCheck    = itemList.firstElementChild!.lastElementChild! as HTMLImageElement;
    let   todoText     = itemList.lastElementChild!.firstElementChild! as HTMLLabelElement;
    let   id           = parseInt(itemCheckBox.id) as number;
    let params:WatchMarkerItem;
    
    if(itemCheckBox.nodeName == "INPUT" && itemCheckBox.checked){
        params = {
            check: true,
            arrayElement: [itemList, iconCheck, todoText],
            id,
            itemsLeftContext,
            functionsOfContext
        }
        markItemExtend(params);
    }else if(itemCheckBox.nodeName == "INPUT" && !itemCheckBox.checked){
        params = {
            check: false,
            arrayElement: [itemList, iconCheck, todoText],
            id,
            itemsLeftContext,
            functionsOfContext
        }
        markItemExtend(params);
    }
    // <fin>

    // Eliminar tarea con el icono Cruz
    const todoList        = itemList.parentElement!;
    const iconCross       = e.target as HTMLElement;
    const childID         = itemList.firstElementChild!.children[1].id;
    const removeID        = functionsOfContext.getStorage().findIndex((index:any) => index.id == childID);
    const setStorageArray = functionsOfContext.setStorageArray;
    let storageArray = functionsOfContext.getStorage();

    if(iconCross.nodeName == "IMG" && iconCross.classList.contains("icon-cross")){
        todoList.removeChild(itemList);
        
        storageArray.splice(removeID, 1);
        setStorageArray(storageArray);
        itemsLeftContext.setLeft(-1);
    }
    // <fin>
}