import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';


const SignUp = () => {
    const { creatUser } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const handlesubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('password must be 6 character')
        }

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => {
                setError(error.error.message)
            })


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
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </div>
                <div className='d-grid gap-2 mx-auto w-75'>
                    <button className="btn btn-light">
                        Continue with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;