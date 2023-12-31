import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${isSticky ? "sticky" : ""}`}
        id="navbar"
      >
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse"
            id="navcomponents"
          >
            <ul className="navbar-nav">
              <li className="navbar-brand">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Home"
                >
                  Home
                </Link>
              </li>
              <li className="navbar-brand">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="About"
                >
                  About
                </Link>
              </li>
              <li className="navbar-brand">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Contactus"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="container1"
          className="d-grid gap-2 d-md-flex justify-content-md-end"
        >
          <button className="btn btn-primary me-md-2" type="button">
            <Link id="btn" to="/LogIn">
              LogIn
            </Link>
          </button>
          <button className="btn btn-primary" type="button">
            <Link id="btn" to="/Signup">
              Sign Up
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
