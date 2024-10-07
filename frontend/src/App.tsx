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
import TransactionHistory from './pages/TransactionHistory';
import LandDetails from './pages/LandDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/buyerspage' element={<BuyersPage/>}/>
        <Route path='/land-details' element={<LandDetails/>}/>
        <Route path='/transactionhistory' element={<TransactionHistory/>}/>
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
