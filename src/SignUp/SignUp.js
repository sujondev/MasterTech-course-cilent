import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handlesubmit = event => {
        event.preventDefault();
    }
    return (
        <div className="Auth-form-container mx-auto">
            <form onSubmit={handlesubmit} className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>FullName</label>
                        <input
                            type="text"
                            name='name'
                            className="form-control mt-1"
                            placeholder="Enter fullName"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Photo URL</label>
                        <input
                            type="text"
                            name='photoURL'
                            className="form-control mt-1"
                            placeholder="Enter photo URL"
                        />
                    </div>
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
                            SignUp
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Already hava a account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;