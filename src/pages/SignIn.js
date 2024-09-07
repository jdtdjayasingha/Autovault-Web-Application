import { useNavigate } from 'react-router-dom';
import React from 'react'
import './SignIn.css';
import loginLogo from '../assets/images/loginLogo.png'

export default function SignIn() {
  const navigate = useNavigate();
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
        <button className='SignIn-button' onClick={() => navigate('/user')}>Log in</button>
        <p className='SignUp-account'>Don't have an account</p>
        <a href='#' className='SignUp-link'>Sign Up</a>
      </header>
    </div>
  )
}
