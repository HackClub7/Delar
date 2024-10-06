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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/buyerspage' element={<BuyersPage/>}/>
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
