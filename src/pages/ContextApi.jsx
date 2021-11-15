import { createContext ,useState} from 'react'

export const AuthContext = createContext();

export const AuthContextProvide = (props)=>{

    const [state,setState] =  useState({
        val : true
    })
    return <AuthContext.Provider value={[state,setState]}>
        {props.children}
    </AuthContext.Provider>
}