import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import ModalMensaje from "../components/ModalMensaje";
import { iniciarSesion } from "../api/usuarios/usuarios";
import Spinner from "../components/Spinner";

const Login = () => {
    const [spinner,setSpinner] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [modalMensaje,setModalMensaje] = useState(false);
    const [alerta,setAlerta] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if([email,password].includes('')){
            setModalMensaje(true);
            return setAlerta('Todos los campos son obligatorios');
        }

        setSpinner(true);
        const data = await iniciarSesion({email,password});
        setSpinner(false);

        if(!data.status){
            setModalMensaje(true);
            return setAlerta(data.msg);
        }
        
        localStorage.setItem('token',data.jwt)
        navigate('/home')
    }

  return (
    <>  
        <div className="flex max-md:flex-col max-md:justify-between items-center w-full md:px-20 2xl:px-80 mx-auto">
            <div className="md:w-1/2 px-3 space-y-3">
                <h1 className="font-black text-6xl">Dev X <span className="text-base font-semibold">By Lino</span></h1>
                <p className="text-xl max-md:text-lg">¿Qué quieres publicar hoy?</p>
            </div>
            <div className="w-full px-3">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg  rounded-lg px-7 md:px-20 py-10 space-y-10 p-3 md:w-5/6 mx-auto">
                    <div className="space-y-3">
                    <label className="block" htmlFor="email">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="bg-slate-200 rounded-2xl w-full p-3" type="text" id='email'/>
                    <label className="block" htmlFor="password">Contraseña</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className="bg-slate-200 rounded-2xl w-full p-3" type="password" id='password'/>
                    </div>
                    <input className="bg-black text-white w-full rounded-2xl p-3 cursor-pointer" type="submit" value="Iniciar sesión"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-center">No tienes una cuenta? <Link className="text-blue-400" to={'/register'}>Registrate</Link></p>
                        <p className="text-center">Olvidaste tu contraseña? <Link className="text-blue-400" to={'/reset-password'}>Recuperar cuenta</Link></p>
                    </div>

                </form>
            </div>
        </div>

        <ModalMensaje modalMensaje={modalMensaje} setModalMensaje={setModalMensaje} alerta={alerta}/>
        {spinner && <Spinner></Spinner>}
    </>
  )
}

export default Login