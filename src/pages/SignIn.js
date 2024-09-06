import React from 'react'
import './SignIn.css';
import loginLogo from '../assets/images/loginLogo.png'

export default function SignIn() {
  return (
    <div className="SignIn">
      <header className="SignIn-header">
        <h1 className='SignIn-title'>AUTOVAULT</h1>
        <div>
          <img className='SignIn-logo' src={loginLogo} alt="Login Logo" />
        </div>
        <p className='SignIn-sub-title'>Welcome Back</p>
        <input className='SignIn-input' placeholder='User Name' />
        <input className='SignIn-input' placeholder='Password' />
        <button className='SignIn-button'>Log in</button>
        <p className='SignUp-account'>Don't have an account</p>
        <a href='#' className='SignUp-link'>Sign Up</a>
      </header>
    </div>
  )
}
