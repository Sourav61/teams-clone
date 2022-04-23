import logo from './logo.svg';
import './App.css';
import './css/index.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Teams Clone</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Profile </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Instant Meeting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Requests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Connections</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Groups</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Themes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Ocean Blue</a>
                <div className="dropdown-divider divider"></div>
                <a className="dropdown-item" href="#">Forest Green</a>
                <div className="dropdown-divider divider"></div>
                <a className="dropdown-item" href="#">Space Black</a>
                <div className="dropdown-divider divider"></div>
                <a className="dropdown-item" href="#">Fire Red</a>
                <div className="dropdown-divider divider"></div>
                <a className="dropdown-item" href="#">Sunny Yellow</a>
                <div className="dropdown-divider divider"></div>
                <a className="dropdown-item" href="#">Thunder Grey</a>
              </div>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <header className="App-header">

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
      </header>
    </div>
  );
}

export default App;
