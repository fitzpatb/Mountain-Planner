import React from "react";
import { Container } from "../components/Grid";
import { Redirect } from "react-router-dom";

function Logout(props) {
  if (props.loggedIn === false) {
    return (
      <Redirect to={ {pathname: "/"} } />
    )
  } else {
    return (
      <Container fluid >
        <h5>Are you sure you want to Logout?</h5>
        <button className="btn btn-secondary" onClick={event => props.handleLogout(event)}>Logout</button>
      </Container>
    )
  }
}

export default Logout;