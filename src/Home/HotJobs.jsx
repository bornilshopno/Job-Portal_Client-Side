import { useContext, useEffect } from "react";
import AuthContext from "../Core/Auth/AuthContext";
import HotJobCard from "./HotJobCard";


const HotJobs = () => {
    const{jobs,setJobs}=useContext(AuthContext);
    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[])

    return (
        <div>
            <h2 className="text-4xl text-center py-10">Available Hot Jobs in Market</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mx-auto w-11/12 md:w-10/12 py-4"> { jobs?.map(job=><HotJobCard job={job} key={job._id}></HotJobCard>)}</div>
        </div>
    );
};

export default HotJobs;