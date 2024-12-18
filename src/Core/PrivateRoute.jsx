import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./Auth/AuthContext";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const location=useLocation()
    const{user,loading}=useContext(AuthContext)
    if(loading){
        return <progress className="progress w-full"></progress>
    }
    if(user){
        return children
    }

    return (
       <Navigate to={"/login"} state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;