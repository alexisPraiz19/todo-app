import React, { useState, useEffect, useContext } from "react";

export const ItemsLeftContext = React.createContext({});
import { Global } from "./GlobalContext";


export default function ItemsLeft({children}:any): JSX.Element{
    const getStorage = ():[] => { return JSON.parse(localStorage.getItem("todo list")!); }
    let   itemsIncomplete:any;
    const [left, setLeft] = useState(6);
    
    useEffect(()=>{
        if(getStorage() != null) { itemsIncomplete = getStorage().filter((i:any)=> i.complete == false); setLeft(itemsIncomplete.length) }
    });
    
    return (
        <ItemsLeftContext.Provider value={{left, setLeft}}>
            {children}
        </ItemsLeftContext.Provider>
    );
};