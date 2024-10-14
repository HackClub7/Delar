/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import Root from './Root'
import BuyersPage from './pages/AllLands';

import TransactionHistory from './pages/TransactionHistory';
import LandDetails from './pages/LandDetails';
import Register from './pages/Register';
import MyLands from './pages/MyLands';
import "../connection";
import useContract from './hooks/useContract';
import { useCallback, useEffect, useState } from 'react';
import LandListing from './pages/LandListing';

function App() {
  const readOnlyDelarContract = useContract(true);
  const [lands, setLands] = useState([]);

  const fetchOwnerlands = useCallback(async () => {
    if(!readOnlyDelarContract) return;

    try {
        const ownerLands = await readOnlyDelarContract.veiwOwnerLands()
        const ownerLandData = { ...ownerLands };
        // console.log(ownerLandData);
    } catch (error) {
      console.log("error fetching owner lands:", error);
    }
  }, [readOnlyDelarContract]);

  useEffect(() => {
    fetchOwnerlands();
  }, [fetchOwnerlands]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/buyerspage' element={<BuyersPage/>}/>
        <Route path='/land-details' element={<LandDetails/>}/>
        <Route path='/transactionhistory' element={<TransactionHistory/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/MyLands' element={<MyLands/>}/>
        <Route path='/landListing' element={<LandListing/>}/>

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
