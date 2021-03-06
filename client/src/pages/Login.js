import React, { useRef, useEffect } from "react";
import { Container } from "../components/Grid";
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API";


function Login(props) {

  useEffect(() => {
    const status = props.loggedIn;
    console.log(status);
  }, [])

  const usernameRef = useRef();
  const passwordRef = useRef();


  const handleSubmit = event => {
    event.preventDefault();

    if (!usernameRef.current.value || !passwordRef.current.value) {
        console.log("Missing a required field.");
        passwordRef.current.value = "";
        return;
    }

    API.login(usernameRef.current.value, passwordRef.current.value)
        .then(response => {
            console.log(response.data.isLoggedIn);
            let currentUser = {
              firstname: response.data.user.firstname,
              lastname: response.data.user.lastname,
              username: response.data.user.username,
              email: response.data.user.email
            }
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('isLoggedIn', JSON.stringify(response.data.isLoggedIn));
            props.handleLogin(response.data.isLoggedIn);
        })
        .catch(err => {
            // show error message depending on error type
            if (!err.response) {
                console.log("Unable to connect to the server.");
            } else if (err.response.status === 401) {
                console.log("Invalid email or password.");
            } else {
                console.log("An unknown error occurred.");
            }
            passwordRef.current.value = "";
            console.log(err);
        })
  }
  if (props.loggedIn === true) {
    return (
      <Redirect to={ {pathname: "/profile"} } />
    )
  } else {
    return (
      <div className="margin-pages">
        <Container fluid>
          <div className="card col-6" style={{margin: "0 auto"}} >
            <h2>Login</h2>

            <form className="form login-form">
              <div className="form-group">
                <label htmlFor="email-login">Username:</label>
                <input className="form-input" type="text" id="email-login" ref={usernameRef} />
              </div>
              <div className="form-group">
                <label htmlFor="password-login">Password:</label>
                <input className="form-input" type="password" id="password-login" ref={passwordRef} />
              </div>
              <div className="form-group">
                <button className="btn btn-secondary" onClick={event => handleSubmit(event)}>Login</button>
                <Link className="btn btn-secondary" to="/signup">Signup</Link>
              </div>
            </form>
          </div>
        </Container>
      </div>

    )
  }
}

export default Login;