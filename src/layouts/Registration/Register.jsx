import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useState } from "react";

export default function Register() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { name, email, password };
        console.log(user);

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        //reset error message
        setError('');
        setSuccess(false);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 mx-auto">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6" >
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        {
                            error && <p className="text-red-500 text-center p-2">{error}</p>
                        }
                        {
                            success && <p className="text-green-500 text-center p-2">User successfully registered.</p>
                        }
                    </form>
                    <div className="card-footer text-center mb-4 px-2">
                        <p>If you have an account. Please <Link to='/signin' className="text-red-500">Sign in</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
