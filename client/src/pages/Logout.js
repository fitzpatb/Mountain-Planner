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
      <div className="margin-pages">
        <Container fluid >
          <div className="card col-6" style={{margin: "0 auto"}}>
            <h5 className="justify-content-center">Are you sure you want to Logout?</h5>
            <button className="btn btn-secondary" onClick={event => props.handleLogout(event)}>Logout</button>
          </div>
        </Container>
      </div>

    )
  }
}

export default Logout;