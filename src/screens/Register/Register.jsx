import React, { useState } from 'react'
import './style.css'

const Register = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    phone: "",
    username: ""
  })

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className='d-flex justify-content-center align-item-center vh-100'>
      <form className='w-25 h-50 my-auto'>

        <div className="mb-4">
          <h2 className='sign-up-heading'>Sign Up</h2>
        </div>
        <div className="input-group form-div mb-4 flex-nowrap">
          <span className="input-group-text icon" id="addon-wrapping">
            <i className="bi bi-person-circle"></i>
          </span>
          <input type="text" onChange={handleOnChange} className="w-100 input-field" name='username' placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>

        <div className="input-group form-div mb-4 flex-nowrap">
          <span className="input-group-text icon" id="addon-wrapping">
            <i className="bi bi-telephone"></i>
          </span>
          <input type="tel" onChange={handleOnChange} className="w-100 input-field" name='phone' placeholder="Phone Number" aria-label="number" aria-describedby="addon-wrapping" />
        </div>

        <div className="input-group form-div mb-4 flex-nowrap">
          <span className="input-group-text icon" id="addon-wrapping">
            <i className="bi bi-envelope-at"></i>
          </span>
          <input type="email" onChange={handleOnChange} className="w-100 input-field" name='email' placeholder="Email Address" aria-label="email" aria-describedby="addon-wrapping" />
        </div>

        <div className="input-group form-div mb-4 flex-nowrap">
          <span className="input-group-text icon" id="addon-wrapping">
            <i className="bi bi-key"></i>
          </span>
          <input type="password" onChange={handleOnChange} className="w-100 input-field" name='password' placeholder="Create Password" aria-label="password" aria-describedby="addon-wrapping" />
        </div>

        <div className="mb-3">
          <button className='btn signup-btn' onClick={handleSubmit}><i className="bi bi-person-add me-2"></i>Signup</button>
        </div>

      </form>
    </div>
  )
}

export default Register
