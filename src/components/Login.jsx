import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>  
        <div className="flex max-md:flex-col max-md:justify-between items-center w-full md:px-20 2xl:px-80 mx-auto">
            <div className="w-1/2 space-y-3">
                <h1 className="font-black text-6xl">Dev X</h1>
                <p className="text-xl">¿Qué deseas publicar hoy?</p>
            </div>
            <div className="w-full">
                <form action="" className="bg-white shadow-lg  rounded-lg px-7 md:px-20 py-10 space-y-10 p-3 w-5/6 mx-auto">
                    <div className="space-y-3">
                    <label className="block" htmlFor="email">Email</label>
                    <input className="bg-slate-200 rounded-2xl w-full p-3" type="text" id='email'/>
                    <label className="block" htmlFor="password">Contraseña</label>
                    <input className="bg-slate-200 rounded-2xl w-full p-3" type="text" id='password'/>
                    </div>
                    <input className="bg-black text-white w-full rounded-2xl p-3 cursor-pointer" type="submit" value="Iniciar sesión"/>
                    <p className="text-center">No tienes una cuenta? <Link className="text-blue-400" to={'/'}>Registrate</Link></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login