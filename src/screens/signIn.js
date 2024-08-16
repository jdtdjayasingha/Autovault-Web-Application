import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='login-title'>AUTOVAULT</h1>
        <p className='login-sub-title'>Create account</p>
        <input className='login-input' placeholder='User Name' />
        <input className='login-input' placeholder='Password' />
        <input className='login-input' placeholder='Password' />
        <button className='login-button'>Sign UP</button>
        <p className='up-in-account'>Already have an account</p>
        <a href='#' className='up-in-link'>Sign In</a>
      </header>
    </div>
  );
}

export default App;
