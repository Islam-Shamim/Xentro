import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
    const details = useLoaderData();
    const { name, email, phone, website } = details;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="mx-auto my-4 w-1/2">
            <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg text-center">
                <h2>Name : {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <div className="my-4 px-2">
                    <button className="btn btn-primary mt-4" onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;