import { Link } from "react-router-dom"
import { useState } from "react"
import ModalMensaje from "../components/ModalMensaje";
import { validarEmail } from "../helpers/helpers";
import { recuperarCuenta } from "../api/usuarios/usuarios";

const ResetPassword = () => {

    const [email,setEmail] = useState('');
    const [modalMensaje,setModalMensaje] = useState(false);
    const [alerta,setAlerta] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(!email){
            setModalMensaje(true);
            return setAlerta('Primero ingresa un email.');
        }
        if(!validarEmail(email)){
            setModalMensaje(true);
            return setAlerta('Ingrese un email válido.')
        }

        const data = await recuperarCuenta({email});

        if(!data.status){
            setModalMensaje(true);
            return setAlerta(data.msg)
        }

        setModalMensaje(true);
        setAlerta(data.msg)
        setEmail('');

    }

  return (
    <>  
        <div className="flex max-md:flex-col max-md:justify-between items-center w-full md:px-20 2xl:px-80 mx-auto">
            <div className="md:w-1/2 px-3 space-y-3">
                <h1 className="font-black text-6xl">Dev X <span className="text-base font-semibold">By Lino</span></h1>
                <p className="text-xl max-md:text-lg">Recupera tu acceso y no pierdas tus publicaciones.</p>
            </div>
            <div className="w-full px-3">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg  rounded-lg px-7 md:px-20 py-10 space-y-10 p-3 md:w-5/6 mx-auto">
                    <div className="space-y-3">
                    <p className="font-bold text-3xl text-center">Encuentra tu cuenta</p>
                    <p className="text-slate-700">Introduce el correo electrónico asociado a tu cuenta para cambiar tu contraseña.</p>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="bg-slate-200 rounded-2xl w-full p-3" type="text" id='email' placeholder="Ingresa tu email"/>
                    </div>
                    <input className="bg-black text-white w-full rounded-2xl p-3 cursor-pointer" type="submit" value="Siguiente"/>
                    <p className="text-center">Ya tienes una cuenta? <Link className="text-blue-400" to={'/'}>Iniciar sesión</Link></p>
                </form>
            </div>
        </div>

        {modalMensaje && <ModalMensaje modalMensaje={modalMensaje} setModalMensaje={setModalMensaje} alerta={alerta}/>}
    </>
  )
}

export default ResetPassword