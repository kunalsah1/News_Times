import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const toggleBurger = () => {
    const nav = document.querySelector('.navbar')
    nav.classList.toggle('nav-open')
  }

  return (
    <>
      <div className="burger" onClick={toggleBurger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="navbar nav-container fixed-top">
        <div className="logo">
          <h2 >
            <Link to="/">News Times</Link>
          </h2>
        </div>

        <div className="nav-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="general">General</Link>
            </li>
            <li>
              <Link to="health">Health</Link>
            </li>
            <li>
              <Link to="science">Science</Link>
            </li>

            <li>
              <Link to="sports">Sports</Link>
            </li>
            <li>
              <Link to="technology">Technology</Link>
            </li>
          </ul>
        </div>
        <div className="btn-group custom-us dropstart" style={{ position: "absolute", right: "50px" }}>
          <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: "1px" }}>
            US News
          </button>
          <ul className="dropdown-menu " >
            <li><Link className="dropdown-item custom-li" to="/us-general">General</Link></li>
            <li><Link className="dropdown-item custom-li" to="/us-business">Business</Link></li>
            <li><Link className="dropdown-item custom-li" to="/us-Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item custom-li" to="/us-Health">Health</Link></li>
            <li><Link className="dropdown-item custom-li" to="/us-Science">Science</Link></li>
            <li><Link className="dropdown-item custom-li" to="/us-Sports">Sports</Link></li>
            <li><Link className="dropdown-item custom-li" to="/us-Technology">Technology</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}


export default Navbar;
