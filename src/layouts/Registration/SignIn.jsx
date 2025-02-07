import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

export default function SignIn() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email, password };
        console.log(user);

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        //reset error and success message and status
        setError('');
        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
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
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-12">{
                                    showPassword ? <FaEyeSlash /> : <FaRegEye />
                                }</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            error && <p className="text-red-500 text-center p-2">{error}</p>
                        }
                        {
                            success && <p className="text-green-500 text-center p-2">User successfully login.</p>
                        }
                    </form>
                    <div className="card-footer text-center mb-4 px-2">
                        <p>If you do not have an account. Please <Link to='/register' className="text-red-500">register</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
