import NoteContext from "./noteContext";
import { useContext, useState } from "react";

const NoteState = (props)=>{
    
    const [state,setState] = useState()
    const update = ()=>{
   
    }
   return(
    <NoteContext.Provider value={{}}>
        {props.children}
    </NoteContext.Provider>
   )  
}
export default NoteState