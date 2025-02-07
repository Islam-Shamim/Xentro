import PropTypes from 'prop-types';
import './User.css';
import { Link, useNavigate } from 'react-router-dom';
const User = ({ user }) => {
    console.log(user)
    const navigate = useNavigate();
    const { id, phone, website } = user;

    const handleDetails = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div>
            <div className='user'>
                <h2>ID : {id}</h2>
                <p>Phone No : {phone}</p>
                <p>Website : <span>{website}</span></p>
                <Link to={`/user/${id}`}><button className='btn btn-primary' onClick={handleDetails}>Show details</button></Link>
            </div>
        </div>

    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;