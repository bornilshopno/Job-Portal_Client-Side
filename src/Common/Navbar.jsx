import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Core/Auth/AuthContext";
import icon from "../assets/job-64.png"


const Navbar = () => {
  const{user,handleSignOut}=useContext(AuthContext)
  
    const links=
    <>
<li><NavLink to={"/"}>Home</NavLink></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  <a className="btn">
    <img src={icon} alt="" className="h-10" />
    <h3 className="text-3xl">JOB Portal</h3>
  </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
 {user ? <>  <p>{user.email}</p> <button className="btn btn-secondary" onClick={()=>handleSignOut()}>SignOut</button>
 </> : <>   <Link className="btn btn-primary" to={"/register"}>Register</Link>
 <Link className="btn btn-secondary" to={"/login"}>Login</Link></> }
  </div>
</div>
        </div>
    );
};

export default Navbar;