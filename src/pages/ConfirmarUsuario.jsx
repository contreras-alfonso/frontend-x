import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { confirmarUsuario } from "../api/usuarios/usuarios"
import Spinner from "../components/Spinner"

const ConfirmarUsuario = () => {

    const [spinner,setSpinner] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        const verificarTokenUsuario = async () => {
            setSpinner(true);
            const data = await confirmarUsuario(params.token);
            setSpinner(false);
            if(!data.status){
                navigate('/')
            }
        }
        verificarTokenUsuario();
    },[])


  return (
    <>
        <div className="flex max-md:flex-col max-md:justify-between items-center w-full md:px-20 2xl:px-80 mx-auto gap-5">
                <div className="md:w-1/2 px-3 space-y-3">
                    <h1 className="font-black text-6xl">Dev X</h1>
                    <p className="text-xl max-md:text-lg">Confirma tu cuenta y publica lo que piensas.</p>
                </div>
                <div className="w-full p-3 flex flex-col gap-3">
                    {spinner ? (
                        <>
                            <p className="text-center text-white bg-red-500 p-3  rounded-2xl"><i class="fa-regular fa-key fa-flip"></i> Verificando token</p>
                        </>
                    ) :
                    (
                        <>
                            <p className="text-center text-white bg-emerald-500 p-3  rounded-2xl">Tu cuenta ha sido confirmada correctamente.</p>
                            <Link to={'/'} className="bg-black text-white border border-black text-center  hover:bg-white hover:text-black w-1/2 mx-auto rounded-2xl p-3 cursor-pointer"><i className="fa-solid fa-arrow-pointer"></i> Comienza la aventura</Link>
                        </>
                    )
                    }

                </div>
        </div>
        {spinner && <Spinner/>}
    </>
  )
}

export default ConfirmarUsuario