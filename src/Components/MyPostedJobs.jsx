import { useEffect, useState } from "react";
import useAuth from "./UseAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const[myjobs,setMyjobs]=useState([])
    const{user}=useAuth()
    useEffect(()=>{
        fetch( `https://server-side-job-portal.vercel.app/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyjobs(data)
        })
    },[user])
    return (
        <div>
            <h2 className="text-3xl text-center bg-blue-400">My Posted Jobs: {myjobs.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Job Type</th>
        <th>Applicants</th>
        <th>View Application</th>
      </tr>
    </thead>
    <tbody>
    
  {myjobs?.map((myJob,index)=>     <tr key={index}>
        <th>{index+1}</th>
        <td>{myJob.title}</td>
        <td>{myJob.jobType}</td>
        <td>{myJob.applicationCount}</td>
        <td>
         <Link to={`/view_application/${myJob._id}`}>  <button className="btn btn-link"> View </button></Link>
        </td>
      </tr> )}
      {/* //"/view_application/:job_id" */}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;