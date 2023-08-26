import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleCerrarSesion = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

  return (
    <header className='bg-black flex justify-between p-5'>
        <p className='font-black text-white text-2xl'>Dev <i className="fa-brands fa-x-twitter"></i></p>
        <button onClick={handleCerrarSesion} className='px-4 py-2 bg-white rounded-2xl hover:bg-slate-200'><i className="fa-brands fa-x-twitter"></i> Cerrar sesión</button>
    </header>
  )
}

export default Header