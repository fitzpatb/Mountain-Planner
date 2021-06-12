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
              <Link className="nav-link" to="/" onClick={props.resetCity}>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login" onClick={props.resetCity}>Login</Link>
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
              <Link className="nav-link" to="/" onClick={props.resetCity}>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/logout" onClick={props.resetCity}>Logout</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/profile" onClick={props.resetCity}>Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }


}

export default Nav;
