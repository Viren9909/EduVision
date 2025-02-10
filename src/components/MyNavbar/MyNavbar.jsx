import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">EduVision</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    <div className='mx-2'>
                        <Link to="/login" className='btn nav-btn mx-1'><i className="bi me-2 bi-arrow-right-circle"></i>Sign In</Link>
                        <Link to="/register" className='btn nav-btn mx-1'><i className="bi bi-person-add me-2"></i>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MyNavbar
