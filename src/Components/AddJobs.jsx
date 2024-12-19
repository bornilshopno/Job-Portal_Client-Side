import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../Core/Auth/AuthContext";


const AddJobs = () => {
    const{user}=useContext(AuthContext)

    const navigate=useNavigate()

    const jobPostHandler = e => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        // console.log(formdata.entries())
        const initialData = Object.fromEntries(formdata.entries())
        // console.log(initialData);//all data as given/received
        const {min, max, currency, ...newJob} = initialData;///newJob excludes min, max, currency
        // console.log(newJob);
        newJob.salaryRange={min,max,currency};//setting min,max,currency to salaryRange element of newJob
        newJob.requirements=newJob.requirements.split("\n")//splitting string to an array by separator ("\n")
        newJob.responsibilities=newJob.responsibilities.split("\n")//splitting string to an array by separator ("\n")
        console.log(newJob)//in exact format required

        fetch('http://localhost:5000/jobs', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newJob)
        })
        .then(res=>res.json())
        .then(data=>{
             if(data.insertedId){ Swal.fire({
                            title:"Job Posted",
                            text: "Check My Posted Job for further Update",
                            icon:"success"
                        })
            
                        navigate("/")
            
                        }
        })

}
return (
    <div>
        <h2 className="text-3xl text-center bg-blue-400">Post a New Job</h2>
        <form className="card-body" onSubmit={jobPostHandler}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Title</span>
                </label>
                <input type="text" placeholder="title" name="title" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Location</span>
                </label>
                <input type="text" placeholder="location" name="location" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Type</span>
                </label>
                <select className="select select-bordered w-full " name="jobType" required>
                    <option disabled value="">Job Type?</option>
                    <option>Onsite</option>
                    <option>Hybrid</option>
                    <option>Remote</option>
                    <option>Fulltime</option>
                </select>

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category:</span>
                </label>
                <select className="select select-bordered w-full " name="category" required>
                    <option disabled value="">Job Category?</option>
                    <option>Engineering</option>
                    <option>Teaching</option>
                    <option>Programming</option>
                    <option>Human Resource</option>
                </select>

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Application Deadline:</span>
                </label>
                <input type="date" placeholder="Deadling" name="application-deadlne" className="input input-bordered" required />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-end">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Salary Range:</span>
                    </label>
                    <input type="text" placeholder="min" name="min" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="max" name="max" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <select className="select select-bordered w-full " name="currency" required>
                        <option disabled value="">Currency?</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>GBP</option>
                    </select>
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Description</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="pls add in new line" name="description"></textarea>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Name:</span>
                </label>
                <input type="text" placeholder="Company Name" name="company" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Requirements</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="pls add in new line" name="requirements"></textarea>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Responsibilities</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="pls add in new line" name="responsibilities"></textarea>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Name:</span>
                </label>
                <input type="text" placeholder="Hr Name" name="hr_name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Email:</span>
                </label>
                <input type="email" placeholder="Hr Email" defaultValue={user?.email} name="hr_email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Logo:</span>
                </label>
                <input type="url" placeholder="logo url" name="company-logo" className="input input-bordered" required />
            </div>



            <div className="form-control mt-6">
                <button className="btn btn-primary">POST</button>
            </div>
        </form>

    </div>
);
};

export default AddJobs;