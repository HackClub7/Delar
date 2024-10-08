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
import "../connection";
import useContract from './hooks/useContract';
import { useCallback, useEffect, useState } from 'react';
// import "../connection";

// import { createAppKit } from "@reown/appkit/react";
// import { EthersAdapter } from "@reown/appkit-adapter-ethers";
// import { sepolia, baseSepolia } from "@reown/appkit/networks";


// // 1. Get projectId
// const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;

// // 2. Set the networks
// const networks = [baseSepolia, sepolia];

// // 3. Create a metadata object - optional
// const metadata = {
//     name: "My Website",
//     description: "My Website description",
//     url: "https://mywebsite.com", // origin must match your domain & subdomain
//     icons: ["https://avatars.mywebsite.com/"],
// };

// // 4. Create a AppKit instance
// export const appkit = createAppKit({
//     adapters: [new EthersAdapter()],
//     networks,
//     metadata,
//     projectId,
//     allowUnsupportedChain: false,
//     allWallets: "SHOW",
//     defaultNetwork: baseSepolia,
//     enableEIP6963: true,

//     features: {
//         analytics: true,
//         allWallets: true,
//         email: false,
//         socials: [],
//     },
// });




function App() {
  const readOnlyDelarContract = useContract(true);
  const [lands, setLands] = useState([]);

  const fetchOwnerlands = useCallback(async () => {
    if(!readOnlyDelarContract) return;

    try {
        const ownerLands = await readOnlyDelarContract.veiwOwnerLands("0xE859ac304020Dd3039082827d2Cbd25979297BDD")
        const ownerLandData = { ...ownerLands };
        console.log(ownerLandData);
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
