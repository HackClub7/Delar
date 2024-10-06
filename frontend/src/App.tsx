import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import Root from './Root'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>

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
