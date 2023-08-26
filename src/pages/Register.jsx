import { Link } from "react-router-dom"
import { useState } from "react"
import { validarEmail } from "../helpers/helpers";
import ModalMensaje from "../components/ModalMensaje";
import { registrarUsuario } from "../api/usuarios/usuarios";

const Register = () => {

    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repeatPassword,setRepeatPassword] = useState('');
    const [modalMensaje,setModalMensaje] = useState(false);
    const [alerta,setAlerta] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if([nombre,email,password,repeatPassword].includes('')){
            setModalMensaje(true);
            setAlerta('Todos los campos son obligatorios.');
            return;
        }
        if(!validarEmail(email)){
            setModalMensaje(true);
            setAlerta('Ingrese un email válido.')
            return;
        }
        if(password!==repeatPassword){
            setModalMensaje(true);
            setAlerta('Los contraseñas no coinciden.')
            return;
        }

        const data = await registrarUsuario({nombre,email,password});

        if(!data.status){
            setModalMensaje(true);
            return setAlerta(data.msg)
        }

        setModalMensaje(true);
        setAlerta(data.msg)
        setNombre('');
        setEmail('');
        setPassword('');
        setRepeatPassword('')

    }

  return (
    <>  
        <div className="flex max-md:flex-col max-md:justify-between items-center w-full md:px-20 2xl:px-80 mx-auto">
            <div className="md:w-1/2 px-3 space-y-3">
                <h1 className="font-black text-6xl">Dev X <span className="text-base font-semibold">By Lino</span></h1>
                <p className="text-xl max-md:text-lg">Registrate y publica lo que piensas.</p>
            </div>
            <div className="w-full px-3">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg  rounded-lg px-7 md:px-20 py-10 space-y-10 md:w-5/6  mx-auto">
                    <div className="space-y-3">
                    <label className="block" htmlFor="nombre">Nombre</label>
                    <input onChange={(e)=>{setNombre(e.target.value)}} value={nombre} className="bg-slate-200 rounded-2xl w-full p-3" type="text" id='nombre'/>
                    <label className="block" htmlFor="email">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="bg-slate-200 rounded-2xl w-full p-3" type="text" id='email'/>
                    <label className="block" htmlFor="password">Contraseña</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className="bg-slate-200 rounded-2xl w-full p-3" type="password" id='password'/>
                    <label className="block" htmlFor="repeatPassword">Confirmar contraseña</label>
                    <input onChange={(e)=>{setRepeatPassword(e.target.value)}} value={repeatPassword} className="bg-slate-200 rounded-2xl w-full p-3" type="password" id='repeatPassword'/>
                    </div>
                    <input className="bg-black text-white w-full rounded-2xl p-3 cursor-pointer" type="submit" value="Registrarme"/>
                    <p className="text-center">Ya tienes una cuenta? <Link className="text-blue-400" to={'/'}>Iniciar sesión</Link></p>
                </form>
            </div>
        </div>
        {modalMensaje && <ModalMensaje modalMensaje={modalMensaje} setModalMensaje={setModalMensaje} alerta={alerta}/> }
       
    </>
  )
}

export default Register