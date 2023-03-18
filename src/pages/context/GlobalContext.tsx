import React, { useState, useEffect } from "react";
export const Context = React.createContext({});

// Array de objectos que usaré para almacenar los datos del To Do
let   storageArray: {id: number, do: string, complete: boolean}[] = []; 

// Crear - obtener localStorage <inicio>
const setStorageArray = (store:any):void => { localStorage.setItem("todo list", JSON.stringify(store)); }

const getStorage = ():string =>{
    const storage:string = localStorage.getItem("todo list")!;
    return JSON.parse(storage);
}
// Crear - obtener localStorage <fin>

// Crear - obtener contador ID del localStorage <inicio>
const setCountStorage = (id:number):void =>{ localStorage.setItem("countID", `${id}`); }

const getCountStorage = ():string =>{
    const countStorage = JSON.parse(localStorage.getItem("countID")!);
    return countStorage;
}
// <fin>

// Función para crear un Todo de la lista <inicio>
export function createItem(id:number, todoText:string, complete?:boolean):string{
    return `
    <li class="todo-item ${complete ? "todo-completed" : ""}">
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

export default function GlobalContext({children}:any): JSX.Element{
    return (
        <Context.Provider value={{
            storageArray,
            setStorageArray,
            getStorage,
            setCountStorage,
            getCountStorage,
            createItem
        }}>
            {children}
        </Context.Provider>
    );
};