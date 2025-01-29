import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';

const router = createBrowserRouter([
  
      {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/login",
            element:<Login></Login>
          },{
            path:"/registration",
            element:<Registration></Registration>
          }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
