import logo from "./logo.svg";
import "./App.css";
import HeaderTop from "./components/Header";
import RegisterUser from "./pages/AddUser";
import LoginForm from "./pages/Login";

function App() {
  return (
    <div className="App">
      <LoginForm />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>Demo</button>
      </header> */}
    </div>
  );
}

export default App;
