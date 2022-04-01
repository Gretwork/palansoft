import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/style/custom.css';
import React, { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



function LoginForm() {
  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  
  
  async function SubmitLogin() {

    const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/index");
    }
  }, []);


    console.warn("data", username, password);
    let item = { username, password };
    let result = await fetch("http://192.168.0.114:5000/api/v1/palansoftInteractive/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/index");
  }
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
      <input type="email" name="username" className="form-control" id="floatingInput" placeholder="Email or phone number" onChange={(e)=>setUserName(e.target.value)} />
      <label htmlFor="floatingInput">Email or phone number</label>
    </div>
    <div className="form-floating">
      <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}  />
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label className='white'>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button onClick={SubmitLogin} className="w-100 btn btn-lg btn-primary btn-red" type="submit">Sign in</button>
    <p className="mt-5 mb-3 white">© 2022–2023</p>
  </form>
      </main>
      </div>
  );
};
export default LoginForm;
