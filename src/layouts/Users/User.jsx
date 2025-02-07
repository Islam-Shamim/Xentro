import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const User = ({ user }) => {
    console.log(user)
    const navigate = useNavigate();
    const {id, username, email } = user;

    const handleDetails = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div className='m-4'>
            <div className='text-center bg-base-200 p-4 rounded-lg shadow-lg mx-auto'>
                <h2>Username : <span className='font-semibold'>{username}</span></h2>
                <p>Email : {email}</p>
                <Link to={`/user/${id}`}><button className='btn btn-primary mt-2' onClick={handleDetails}>Show details</button></Link>
            </div>
        </div>

    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;