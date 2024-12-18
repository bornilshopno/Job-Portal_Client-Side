
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
import AddJobs from "../Components/AddJobs";
import MyPostedJobs from "../Components/MyPostedJobs";
import ViewApplications from "../Components/ViewApplications";


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
      {
        path:"/addJobs",
        element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path:"/myPostedJobs",
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {path:"/jobs/:id",
        element:<PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://server-side-job-portal.vercel.app/jobs/${params.id}`)
      },
      {path:"/view_application/:job_id",
        element:<PrivateRoute> <ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({params})=> fetch(`https://server-side-job-portal.vercel.app/job-applications/jobs/${params.job_id}`)
        // loader: ({params})=>fetch(`https://server-side-job-portal.vercel.app/jobs/${params.id}`)
      },
      {
        path:"/apply/:id",
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
      }
    ]
    },
  ]);


export default router;