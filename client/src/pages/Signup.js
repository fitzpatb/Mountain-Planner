import React, { useRef } from "react";
import { Container } from "../components/Grid";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

function Signup(props) {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();



  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    if (!usernameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
        passwordRef.current.value = "";
        return;
    }

    API.signup(firstnameRef.current.value, lastnameRef.current.value, usernameRef.current.value, emailRef.current.value, passwordRef.current.value)
        .then(response => {
            console.log(response.data)
            let currentUser = {
              firstname: response.data.user.firstname,
              lastname: response.data.user.lastname,
              username: response.data.user.username,
              email: response.data.user.email
            }
            console.log(currentUser);

            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            props.handleLogin(response.data.isLoggedIn);
            history.push("/car");
        })
        .catch(err => {
            passwordRef.current.value = "";
            console.log(err);
        })
}

  return (
    <div className="margin-pages">
      <Container fluid>
        <div className="card col-6" style={{margin: "0 auto"}}>
          <h2>Signup</h2>

          <form className="form signup-form">
            <div className="form-group">
              <label htmlFor="firstname-signup">First Name:</label>
              <input className="form-input" type="text" id="firstname-signup"  ref={firstnameRef} />
            </div>
            <div className="form-group">
              <label htmlFor="lastname-signup">Last Name:</label>
              <input className="form-input" type="text" id="lastname-signup" ref={lastnameRef} />
            </div>
            <div className="form-group">
              <label htmlFor="username-signup">Username:</label>
              <input className="form-input" type="text" id="username-signup" ref={usernameRef} />
            </div>
            <div className="form-group">
              <label htmlFor="email-signup">Email:</label>
              <input className="form-input" type="text" id="email-signup" ref={emailRef} />
            </div>
            <div className="form-group">
              <label htmlFor="password-signup">Password:</label>
              <input className="form-input" type="password" id="password-signup" ref={passwordRef} />
            </div>
            <div className="form-group">
              <button className="btn btn-secondary" type="submit" onClick={event => handleSubmit(event)} >Signup</button>
            </div>
          </form>
        </div>
      </Container>
    </div>

  )
}

export default Signup;