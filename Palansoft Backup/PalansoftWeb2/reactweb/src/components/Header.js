import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Header,
  Link,
  Route,
  Routes,
  Footer,
  useNavigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "../pages/Login";

function HeaderTop() {
  return (
    <div>
      <BrowserRouter>
        <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
          {/* <Routes>
            <Route path="/LoginForm" element={<LoginForm />} />
            <Link>Home</Link>
          </Routes> */}
          <Routes>
            <Route path="/LoginForm" element={<LoginForm />} />
          </Routes>
          <Link to="/LoginForm">Home</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default HeaderTop;
