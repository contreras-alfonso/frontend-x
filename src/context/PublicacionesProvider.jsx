import { createContext, useState } from "react";

const PublicacionesContext = createContext();

const PublicacionesProvider = ({children}) => {

    const [publicaciones,setPublicaciones] = useState([]);
    const [publicacionEdit,setPublicacionEdit] = useState({});

    return (
        <PublicacionesContext.Provider value={{publicaciones,setPublicaciones,publicacionEdit,setPublicacionEdit}}>{children}</PublicacionesContext.Provider>
    )
}

export{
    PublicacionesContext,
    PublicacionesProvider,
}