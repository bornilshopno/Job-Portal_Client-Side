import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const jobData= useLoaderData();
    const{_id,title,location,jobType,category,applicationDeadline,salaryRange,description,company,requirements,responsibilities,status,hr_email,hr_name,company_logo}=jobData;
    return (
        <div>
          <h2>{title}</h2>
          <p>{company}</p>
          <p> DeadLine: {applicationDeadline}</p>
          <Link to={`/apply/${_id}`}><button className="btn btn-secondary">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;