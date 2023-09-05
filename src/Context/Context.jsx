import { createContext, useContext, useState } from "react";

const GlobalStates = createContext()

const Context = ({children}) => {
    const [personaje, setPersonaje] = useState({})
    const [numero, setNumero] = useState(1)
    

    return (
        <GlobalStates.Provider value={{personaje, setPersonaje, numero, setNumero }}>
        {children}
        </GlobalStates.Provider>
    )
}

export default Context;

export const useGlobalStates = () => useContext(GlobalStates)