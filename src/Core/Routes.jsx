
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Home/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route Not Found</h2>,
      children:[{
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
    },
  ]);


export default router;