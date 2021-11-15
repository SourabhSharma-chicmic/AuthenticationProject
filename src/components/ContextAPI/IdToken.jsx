import { createContext, useState } from "react";


export const IdTokenn = createContext();

export const IdTokenProvider = ({children})=>{
    const [idToken,setIdToken] = useState({
        id:'',
        bool :false
    })
    return <IdTokenn.Provider value={[idToken,setIdToken]}>
        {children}
    </IdTokenn.Provider>
}