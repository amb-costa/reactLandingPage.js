import React from "react";

const Navbar = () => {
  //creating Navbar structure
  return (
      <nav className="navbar col-12 py-3 px-5 navbar-expand-sm container-fluid bg-dark">
          <a className="navbar-brand text-white" style={{fontSize:23}} href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

      </nav>
  );
};

export default Navbar;
