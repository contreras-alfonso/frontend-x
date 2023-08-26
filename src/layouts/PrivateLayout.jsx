import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { verificarSesionValida } from "../api/usuarios/usuarios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateLayout = () => {

    const [user,setUser] = useState({});
    const [spinner,setSpinner] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        const obtenerDatosSesion = async () => { 
            setSpinner(true);
            const data = await verificarSesionValida();
            setSpinner(false);
            
            if(data?._id){
               return setUser(data);
            }else{
                navigate('/')
            }

        }
        obtenerDatosSesion();
    },[])

    if(spinner){
        return (<Spinner/>)
    }

  return (
    <>
        <Header></Header>
        <main className="bg-white h-screen mt-5">
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </>
  )
}

export default PrivateLayout