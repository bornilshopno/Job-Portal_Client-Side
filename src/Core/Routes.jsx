
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Home/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import JobDetails from "../Components/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Components/JobApply";
import MyApplications from "../Components/MyApplications";


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
      },
      {path:"/myApplications",
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {path:"/jobs/:id",
        element:<PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:"/apply/:id",
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
      }
    ]
    },
  ]);


export default router;