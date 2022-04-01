import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/style/custom.css';

function LoginForm() {
  return (
    // <div className="LoginForm">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='login-main-con'>
    <main className="form-signin">
  <form>
    <img className="mb-4" src={logo} alt="Palansoft" width="298" height="72" />
    <h1 className="h3 mb-3 fw-normal white">Sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label className='white'>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary btn-red" type="submit">Sign in</button>
    <p className="mt-5 mb-3 white">© 2022–2023</p>
  </form>
      </main>
      </div>
  );
}

export default LoginForm;
