import { useEffect, useState } from "react";
import useAuth from "./UseAuth";
import axios from "axios";


const MyApplications = () => {
    const { user } = useAuth()
    const [myApplications, setMyApplications] = useState([])
    useEffect(() => { 
        // fetch(`http://localhost:5000/job-application?email=${user.email}`) 
        // .then(res=>res.json())
        // .then(data=>{
        //     setMyApplications(data)
        // })

        axios.get(`http://localhost:5000/job-application?email=${user.email}`,{withCredentials:true})
        .then(res=>setMyApplications(res.data))
        
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
        <div className="bg-gradient-to-b from-gray-500 to-gray-700 min-h-96">
            <h2 className="text-3xl text-center  py-10"> Total Application = {myApplications.length} </h2>
            <div className="overflow-x-auto">
  <table className="table w-11/12 lg:w-10/12 mx-auto">
    {/* head */}
    <thead className="bg-blue-800 text-white">
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
   { myApplications?.map(job=> <tr key={job._id} className="bg-gray-200">
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