import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import HeaderTop from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <HeaderTop />

    <BrowserRouter>
      <Routes>
        <Route path="/Login">
          <LoginForm />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
