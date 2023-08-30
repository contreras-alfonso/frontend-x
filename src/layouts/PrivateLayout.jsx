import { Outlet, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";

const PrivateLayout = () => {

  const {user,setUser,cargando,setCargando} = useAuth(); 

  if(cargando){

    return (
      <>
          <Spinner/>
      </>
    )
  }

  return (
    <>
        {user?._id ? (
          <>
            <Header></Header>
            <main className="bg-white mt-5 mb-96">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
          </>
          ) : <Navigate to={'/'}></Navigate>}

  </> 
  )
}

export default PrivateLayout