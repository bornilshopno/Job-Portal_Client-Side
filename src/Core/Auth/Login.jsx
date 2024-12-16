import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json"
import { useContext } from "react";
import AuthContext from "./AuthContext";

const Login = () => {
  const {setloading, createUser, loginUser}=useContext(AuthContext)
  const handleSignIn=(e)=>{
    e.preventDefault();
    const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        loginUser(email,password)
        .then(result=>{
          console.log(result.user);
          setloading(false)
        })
        .catch(error=>{console.log(error)})
  }



    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            
           <Lottie animationData={loginAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignIn}>
            <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;