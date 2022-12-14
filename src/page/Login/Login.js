import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const { login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                toast.success('Login successfull')
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })

    }
    return (
        <div className="Auth-form-container mx-auto">
            <form onSubmit={handlesubmit} className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            name='email'
                            className="form-control mt-1"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name='password'
                            className="form-control mt-1"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Not SignUp yet? <Link to="/signup">signup</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;