import logo from "../assets/images/logo.png";

const RegisterUser = () => {
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
        <input
          className="w-100 btn btn-lg btn-primary btn-red"
          type="submit"
          value="Save User"
        />

        <p className="mt-5 mb-3 white">© 2022–2023</p>
      </main>
    </div>
  );
};

export default RegisterUser;
