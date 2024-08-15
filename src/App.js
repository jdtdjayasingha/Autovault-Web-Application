import './App.css';
import loginLogo from './assets/images/loginLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='login-title'>AUTOVAULT</h1>
        <div>
          <img className='login-logo' src={loginLogo} alt="Login Logo" />
        </div>
        <p className='login-sub-title'>Welcome Back</p>
        <input className='login-input' placeholder='Email' />
        <input className='login-input' placeholder='Password' />
        <button className='login-button'>Log in</button>
      </header>
    </div>
  );
}

export default App;
