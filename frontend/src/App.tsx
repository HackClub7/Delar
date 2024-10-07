import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import Root from './Root'
import BuyersPage from './pages/BuyersPage';
import Register from './pages/Register';
import MyLands from './pages/MyLands';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/buyerspage' element={<BuyersPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/MyLands' element={<MyLands/>}/>


      </Route>

    )
  )
 

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
