import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h2 className="navbar-brand">
        Mountain Carpool
      </h2>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/login">Login</a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="/profile">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
