import { useEffect, useState } from "react";
import useAuth from "./UseAuth";


const MyApplications = () => {
    const { user } = useAuth()
    const [myApplications, setMyApplications] = useState([])
    useEffect(() => { 
        fetch(`http://localhost:5000/job-application?email=${user.email}`) 
        .then(res=>res.json())
        .then(data=>{
            setMyApplications(data)
        })
        
        }, [user])

        const jobApplicationDeleter=(id)=>{
            fetch(`http://localhost:5000/job-applications/${id}`, {method:"DELETE"})
            .then(res=>res.json())
            .then(data=>{
              if (data.deletedCount>0){
                alert("deleted successfully");
                const remainingJobs= myApplications.filter(job=>job._id!==id);
                setMyApplications(remainingJobs)
              }
            })
        }
    return (
        <div>
            <h2 className="text-3xl text-center"> Total Application = {myApplications.length} </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   { myApplications?.map(job=> <tr key={job._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt="logo" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.company}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
         {job.title}
          <br />
          <span className="badge badge-ghost badge-sm">{job.jobType}</span>
        </td>
        <td>{job.description}</td>
        <th>
          <button className="btn btn-ghost btn-xs" onClick={()=>jobApplicationDeleter(`${job._id}`)}>X</button>
        </th>
       
      </tr>)}
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyApplications;