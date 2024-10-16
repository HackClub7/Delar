import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Root = () => {
  return (
    <div className='w-full  min-h-screen overflow-hidden bg-custom-svg bg-cover bg-center'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
export default Root