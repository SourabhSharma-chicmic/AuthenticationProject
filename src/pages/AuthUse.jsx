
import { useContext } from "react";
import { AuthContext } from "./ContextApi";

const AuthUse=()=>{

    const [state,setState]= useContext(AuthContext);
        console.log(state.val);
    const changeHandler=()=>{
        setState({ val : !state.val})
    }

    return <>
        <h3 style={{marginTop:'150px' ,color:'black'}}>{state.val}</h3>
        <button onClick={changeHandler}>{!state.val ?"SetState" :"ChangeState"}</button>
    </>

    
}

export default AuthUse;