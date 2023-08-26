import { activarServer } from "../api/usuarios/usuarios"
import { useEffect,useState } from "react"

const Server = () => {
    const [msg,setMsg] = useState({})
    useEffect(()=>{
        const activarServidor = async () => {
            const data = await activarServer();
            setMsg(data);
        }
        activarServidor();
    },[])
  return (
    <div>{JSON.stringify(msg)}</div>
  )
}

export default Server