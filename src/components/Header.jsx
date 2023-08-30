import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {

    const navigate = useNavigate();
    const {setUser} = useAuth();

    const handleCerrarSesion = () => {
        localStorage.removeItem('token');
        setUser({})
        navigate('/');
    }

  return (
    <header className='bg-black flex justify-between p-5'>
        <p className='font-black text-white text-2xl'>Dev X</p>
        <button onClick={handleCerrarSesion} className='px-4 py-2 bg-white rounded-2xl hover:bg-slate-200'>Cerrar sesión</button>
    </header>
  )
}

export default Header