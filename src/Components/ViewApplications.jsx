import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {

    const applications = useLoaderData()
    console.log(applications)
    const handleStatus = (e, id) => {
        const data = {
            status: e.target.value,
        }
        fetch(`https://server-side-job-portal.vercel.app/job-applications/${id}`,
            {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: "Status Updated",
                        text: "Team gonna work according to the status",
                        icon: "success",
                        position:"top-end",
                    })
                }
            })

    }



    return (
        <div className="min-h-80">
            <h2 className="text-3xl text-center bg-blue-300">Applications for this job: {applications.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-lime-200">
                            <th></th>
                            <th>App ID</th>
                            <th>Applicant Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {applications?.map((app, idx) =>
                            <tr key={idx} className="bg-sky-200">
                                <th>{idx + 1}</th>
                                <td>{app._id}</td>
                                <td>{app.applicant_email}</td>
                                <td>
                                    <select className="select select-bordered w-full max-w-xs"
                                        defaultValue={app.status || "Update Status?"}
                                        onChange={(e) => handleStatus(e, app._id)}>
                                        {/* <option disabled >Update Status?</option> */}
                                        <option>Under Review</option>
                                        <option>Interviewing</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;