import { createContext, useState, useEffect } from "react";
import { verificarSesionValida } from "../api/usuarios/usuarios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState({});
    const [cargando,setCargando] = useState(true);

    useEffect(()=>{

        const obtenerDatosSesion = async () => { 
          
            setCargando(true);
            const data = await verificarSesionValida();
            setCargando(false);
            
            if(data?._id){
                setUser(data);
            }else{
                setUser({})
                
            }
    
        }

        obtenerDatosSesion();
        
    
    },[])

    return (
        <AuthContext.Provider value={{user,setUser,cargando,setCargando}}>{children}</AuthContext.Provider>
    )
}

export{
    AuthContext,
    AuthProvider,
}