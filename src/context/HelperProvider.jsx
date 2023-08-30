import { createContext, useState } from "react";

const HelperContext = createContext();

const HelperProvider = ({children}) => {
    const [modalMensaje,setModalMensaje] = useState(false);
    const [modalEditarPublicacion,setModalEditarPublicacion] = useState(false);
    const [alerta,setAlerta] = useState('');
    return (
    <HelperContext.Provider value={{
        modalMensaje,
        setModalMensaje,
        setAlerta,
        alerta,
        modalEditarPublicacion,
        setModalEditarPublicacion
    }}>{children}</HelperContext.Provider>
    )
}

export{
    HelperContext,
    HelperProvider,
}