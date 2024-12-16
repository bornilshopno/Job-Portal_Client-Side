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
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4"> { jobs?.map(job=><HotJobCard job={job} key={job._id}></HotJobCard>)}</div>
        </div>
    );
};

export default HotJobs;