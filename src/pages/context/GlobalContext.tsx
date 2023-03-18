import React, { useState, useEffect } from "react";
export const Global = React.createContext({});

import { storageArray, setStorageArray, getStorage, setCountStorage, getCountStorage, createItem } from "../../typescript/functionsOfContext";

export default function GlobalContext({children}:any): JSX.Element{
    return (
        <Global.Provider value={{
            storageArray,
            setStorageArray,
            getStorage,
            setCountStorage,
            getCountStorage,
            createItem
        }}>
            {children}
        </Global.Provider>
    );
};