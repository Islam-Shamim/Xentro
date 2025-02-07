import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
    const details = useLoaderData();
    const {name,email} = details;

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;