import React, { useState, useEffect } from "react";

export const MyContext = React.createContext({});
import { getStorage } from "../../typescript/add_read_localStorage";

export default function ItemsLeft({children}:any): JSX.Element{
    const completed = getStorage().filter((c:any) => c.complete == false);

    const [com, setCom] = useState(completed.length);

    return (
        <MyContext.Provider value={{com, setCom}}>
            {children}
        </MyContext.Provider>
    );
};