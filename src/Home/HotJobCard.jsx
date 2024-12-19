import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({job}) => {

    const{_id,title,location,jobType,category,applicationDeadline,salaryRange,description,company,requirements,responsibilities,status,hr_email,hr_name,company_logo}=job;

    return (
        <div>
            <div className="card card-compact bg-sky-100  shadow-xl">
 <div className="flex items-center">
 <figure>
    <img
    className="w-16"
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div className="h-16">
    <h4 className="text-xl">{company}</h4>
    <div className="flex items-center">
    <FaMapMarkerAlt></FaMapMarkerAlt> 
    <p>{location}</p>
    </div>
  </div>
 </div>
  <div className="card-body">
    <h2 className="card-title">{title}
         <div className="badge badge-secondary">NEW</div>    
    </h2>
    <p className="h-24">{description}</p>
    <div className="flex gap-2 flex-wrap h-12">
        {requirements.map((skill,index)=><p className="border-2 h-9 rounded-md text-center p-1 hover:text-blue-500" key={index} >{skill}</p>)}
    </div>
    <div className="card-actions justify-end mt-4 items-center h-24">
        <p>Salary Range: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
      <Link to={`/jobs/${_id}`}>
      <button className="btn btn-primary">Apply Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HotJobCard;