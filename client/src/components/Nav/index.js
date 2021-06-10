import React from "react";
import { Link } from "react-router-dom";


function Nav(props) {
  const loginStatus = props.loggedIn;
  console.log(loginStatus)
  if (loginStatus === false) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h2 className="navbar-brand">
          Mountain Carpool
        </h2>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h2 className="navbar-brand">
          Mountain Carpool
        </h2>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/logout" >Logout</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }


}

export default Nav;
