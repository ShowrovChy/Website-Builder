import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className=" bg-light">
        <nav className="navbar navbar-expand-lg navbar-light w-75 m-auto  ">
          <div className="container-fluid">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" href="/about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="/contact"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="nav-desc">
        <h1>
          Find the best <span className="text-success">Web Developer</span>
        </h1>
        <p>
          It takes just one job to develop a successful relationship that can
          propel your career forward.
        </p>
        <h2>
          Total Budget for Developer{" "}
          <span className="text-success">12000$</span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Header;
