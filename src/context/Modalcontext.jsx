"use client"
import { createContext ,useState } from "react";
export const ModalContext = createContext()

 const ModalProvider = ({children})=> {
    const[open, setOpen] = useState(false)
    const[carts, setCartsOpen] =useState(false)


    return(
        <ModalContext.Provider value={{open, setOpen , carts,setCartsOpen}} >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider