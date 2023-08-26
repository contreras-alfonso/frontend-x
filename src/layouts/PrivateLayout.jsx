import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivateLayout = () => {

  return (
    <>
        <Header></Header>
        <main className="bg-white mt-5 mb-96">
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </>
  )
}

export default PrivateLayout