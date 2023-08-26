import { Link,useParams,useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import ModalMensaje from "../components/ModalMensaje";
import { confirmarTokenCambiarPassword,cambiarPasswordPorOlvido } from "../api/usuarios/usuarios";
import Spinner from "../components/Spinner";

const ActualizarPassword = () => {

    const [password,setPassword] = useState('');
    const [repeatPassword,setRepeatPassword] = useState('');
    const [modalMensaje,setModalMensaje] = useState(false);
    const [alerta,setAlerta] = useState('');
    const [spinner,setSpinner] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const confirmarTokenUsuario = async () => {
            setSpinner(true);
            const data = await confirmarTokenCambiarPassword(params.token);
            setSpinner(false);
            if(!data.status){
                navigate('/')
            }
        }
        confirmarTokenUsuario();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if([password,repeatPassword].includes('')){
            setModalMensaje(true);
            return setAlerta('Todos los campos son obligatorios.')
        }
        if(password!==repeatPassword){
            setModalMensaje(true);
            return setAlerta('Las contraseñas no coinciden.')
        }

        setSpinner(true);
        const data = await cambiarPasswordPorOlvido({password},params.token);
        setSpinner(false);
        if(!data.status){
            setModalMensaje(true);
            return setAlerta(data.msg)
        }
        setModalMensaje(true);
        setAlerta(data.msg)
        setPassword('');
        setRepeatPassword('')
        setTimeout(() => {
            navigate('/')
        }, 3000);

    }
    

  return (
    <>  
        <div className="flex max-md:flex-col max-md:justify-between items-center w-full md:px-20 2xl:px-80 mx-auto">
            <div className="md:w-1/2 px-3 space-y-3">
                <h1 className="font-black text-6xl">Dev X</h1>
                <p className="text-xl max-md:text-lg">Actualiza tu contraseña y recupera tu acceso a dev X.</p>
            </div>
            <div className="w-full px-3">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg  rounded-lg px-7 md:px-20 py-10 space-y-10 md:w-5/6  mx-auto">
                    <div className="space-y-3">
                    <label className="block" htmlFor="password">Nueva contraseña</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className="bg-slate-200 rounded-2xl w-full p-3" type="password" id='password'/>
                    <label className="block" htmlFor="repeatPassword">Confirmar contraseña</label>
                    <input onChange={(e)=>{setRepeatPassword(e.target.value)}} value={repeatPassword} className="bg-slate-200 rounded-2xl w-full p-3" type="password" id='repeatPassword'/>
                    </div>
                    <input className="bg-black text-white w-full rounded-2xl p-3 cursor-pointer" type="submit" value="Actualizar contraseña"/>
                    <p className="text-center">Ya tienes una cuenta? <Link className="text-blue-400" to={'/'}>Iniciar sesión</Link></p>
                </form>
            </div>
        </div>
        <ModalMensaje modalMensaje={modalMensaje} setModalMensaje={setModalMensaje} alerta={alerta}/>
        {spinner && <Spinner/>}
    
    </>
  )
}

export default ActualizarPassword