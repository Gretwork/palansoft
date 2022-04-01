import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Header,
  Routes,
  Route,
  Footer,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "../pages/Login";

function HeaderTop() {
  return (
    <div>
      <ul>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Register</a>
        </li>
        <li>
          <a href="">User Profile</a>
        </li>
      </ul>
      <BrowserRouter>
        <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
          <Routes>
            <Route path="/LoginForm" element={<LoginForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default HeaderTop;
