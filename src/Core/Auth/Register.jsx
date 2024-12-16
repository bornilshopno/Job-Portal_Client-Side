import Lottie from "lottie-react";
import regAnimation from "../../assets/register.json"
import { useContext } from "react";
import AuthContext from "./AuthContext";


const Register = () => {
    const{createUser,setloading}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        //password validation
        //regEz ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$

        createUser(email,password)
        .then(res=>{
          setloading(false)
            console.log(res.user)
        })
        .catch(error=>{console.log(error)})
        


        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
           
            <Lottie animationData={regAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-4 mt-4 text-5xl font-bold">Register!</h1>
            <form className="card-body" onSubmit={handleRegister}>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;