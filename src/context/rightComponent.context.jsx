import { createContext } from "react";

export const RightComponentContext = createContext({});

export const RightComponentContextProvider = ({children}) => {




    



    const value = {};
    return <RightComponentContext.Provider value={value}>{children}</RightComponentContext.Provider>
}

