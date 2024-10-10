import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const Root = () => {
  return (
    <div className='w-full  min-h-screen overflow-hidden  bg-custom-gradient bg-cover bg-center'>
        <Navbar/>
        <Outlet/>

    </div>
  )
}

export default Root