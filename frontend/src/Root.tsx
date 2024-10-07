import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const Root = () => {
  return (
    <div className='w-[100vw] min-h-[100vh]   bg-custom-gradient bg-cover bg-center'>
        <Navbar/>
        <Outlet/>

    </div>
  )
}

export default Root