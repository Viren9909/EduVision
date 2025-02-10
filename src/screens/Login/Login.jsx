import React, { use, useState } from 'react'
import './style.css'

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <>
            <div className='container w-25 vh-100 d-flex justify-content-center align-items-center'>
                <form className='w-100'>
                    <div className="mb-3">
                        <h2 className='login-heading'>Sign In</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={handleOnChange} type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={handleOnChange} type="password" name='password' className="form-control" id="password" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-sm login-btn">
                        <i className="bi me-2 bi-arrow-right-circle"></i>
                        <span>Sign In</span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
