import React from "react";
import "../components/NavBar.css";
import Login from "./LogoinAndSignUP/Login";

const NavBar = () => {
  return (
    <div>
      <div className="top_color">fsfsdfds</div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container">
          <a className="navbar-brand" href="#q">
            <img src="images/logo.png" className="Logo_img"></img> Green Panther
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#a">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#a">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#1"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#a">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#a">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#a">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#a">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#a">
                  ResourceHub
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#a">
                  Contact
                </a>
              </li>
              
            </ul>
            
            <Login/>
          
          





            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
