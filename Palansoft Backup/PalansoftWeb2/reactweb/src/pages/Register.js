import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/style/custom.css";
import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  return (
    <div className="login-main-con form-register">
      <main className="form-signin">
        <img
          className="mb-4"
          src={logo}
          alt="Palansoft"
          width="298"
          height="72"
        />
        <h1 className="h3 mb-3 fw-normal white">Register Now</h1>
        <div className="form-floating">
          <input
            type="email"
            name="username"
            className="form-control"
            id="floatingInput"
            placeholder="Email or phone number"
          />
          <label for="floatingInput">Email or phone number</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label className="white">
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary btn-red" type="submit">
          Signup
        </button>
        <p className="mt-5 mb-3 white">© 2022–2023</p>
      </main>
    </div>
  );
}

export default Register;
