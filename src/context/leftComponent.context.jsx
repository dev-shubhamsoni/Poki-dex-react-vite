import { createContext, useContext } from 'react'
import { PokiApiContext } from './pokiApi';

export const LeftComponentContext = createContext({});

export const LeftComponentContextProvider = ({ children }) => {

    const { pokemonData } = useContext(PokiApiContext);



    const value = {};

    return <LeftComponentContext.Provider value={value}>{children}</LeftComponentContext.Provider>
}
