import { useNavigate, useParams } from "react-router-dom";
import useAuth from "./UseAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const{user}=useAuth()
    const navigate=useNavigate()
      const id=useParams();
    const submitJobApplication=e=>{
        e.preventDefault();
        const form=e.target;
        const linkedin=form.linkedin.value;
        const github=form.github.value;
        const resume=form.resume.value;
        const application= {job_id:id, applicant_email:user.email,linkedin,github,resume}

        fetch("http://localhost:5000/job-applications", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(application)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){ Swal.fire({
                title:"application submitted",
                text: "thanks for being with us",
                icon:"success"
            })

            navigate("/myApplications")

            }
        })
    }


    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">    
    <div className="card bg-base-100 w-full shadow-2xl py-10 my-5">
      <form className="card-body" onSubmit={submitJobApplication}>
      <h1 className="text-3xl font-bold text-center underline">JOB Application</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin Profile</span>
          </label>
          <input type="url" name="linkedin" placeholder="url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Git Hub Profile</span>
          </label>
          <input type="url" name="github" placeholder="url" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input type="url" name="resume" placeholder="url" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  </div>
</div>
        
    );
};

export default JobApply;