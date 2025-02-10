import React from 'react'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import './style.css'
import { Link } from 'react-router-dom'

const LadingPage = () => {
    return (
        <div>
            <MyNavbar />
            <div className='landing-page'>
                <div>
                    <h1>Welcome to the EduVision</h1>
                </div>
                <div>
                    <h3>Create Note and make group to study in digital way</h3>
                </div>
                <div className='landing-login-btn'>
                    <Link to='/login' className='landing-btn btn'>
                        <i className="bi me-2 bi-arrow-right-circle"></i><span>Sign In</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LadingPage
