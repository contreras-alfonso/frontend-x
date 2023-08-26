import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

const AuthLayout = () => {
  return (
    <>
        <main className="h-screen w-full flex flex-col justify-center items-center bg-slate-50">
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </main>
        <Footer></Footer>
    </>

  )
}

export default AuthLayout