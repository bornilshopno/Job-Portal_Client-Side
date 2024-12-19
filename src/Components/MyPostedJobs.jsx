import { useEffect, useState } from "react";
import useAuth from "./UseAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const[myjobs,setMyjobs]=useState([])
    const{user}=useAuth()
    useEffect(()=>{
        fetch( `http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyjobs(data)
        })
    },[user])
    return (
        <div className="min-h-96 bg-gradient-to-b from-gray-300 to-gray-700">
            <h2 className="text-3xl text-center py-10">My Posted Jobs: {myjobs.length}</h2>

            <div className="overflow-x-auto">
  <table className="table w-11/12 lg:w-10/12 mx-auto">
    {/* head */}
    <thead className="bg-blue-800 text-white">
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Job Type</th>
        <th>Applicants</th>
        <th>View Application</th>
      </tr>
    </thead>
    <tbody>
    
  {myjobs?.map((myJob,index)=>     <tr key={index} className="bg-gray-200">
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