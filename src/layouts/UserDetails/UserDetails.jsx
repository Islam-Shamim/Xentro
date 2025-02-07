import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
    const details = useLoaderData();
    const { name, email, phone,website } = details;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="card bg-gray-500 text-white w-96">
                <div className="card-body">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                </div>
                <div className="m-4 px-2">
                        <button className="btn btn-primary" onClick={handleGoBack}>Go back</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;