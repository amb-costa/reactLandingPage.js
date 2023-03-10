import React from "react";

const Navbar = () => {
  //creating Navbar structure
  return (
    <div className="row container-fluid mx-0 px-0">
      <nav className="col-12 navbar py-3 navbar-expand-sm bg-secondary">
        <div className="container-fluid ms-4">
          <a className="navbar-brand text-white" style={{fontSize:23}} href="#">
            Start Bootstrap
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
          <div className="collapse navbar-collapse justify-content-end mx-3" id="navbarSupportedContent">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
