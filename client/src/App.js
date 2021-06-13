import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Mountain from "./pages/Mountain";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Day from "./pages/Day";
import Car from "./pages/Car";
//import Wrapper from "./components/Wrapper";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("")
  const [loggedIn, setLoggedIn] = useState();
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("currentUser"));
    console.log(userProfile)
    if (userProfile) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  function handleCity(event) {
    event.preventDefault();
    const cityLon = event.target.getAttribute("data-lon");
    const cityLat = event.target.getAttribute("data-lat");
    setCity(event.target.textContent);
    setLat(cityLat);
    setLon(cityLon);

    //document.location.replace("/mountain/" + query);
  }
  function resetCity() {
    if (lat.length > 0 || lon.length > 0) {
      setLat("")
      setLon("")
    } else {
      return
    }
  }

  function handleLogin(boolean) {
    console.log(boolean)
    if (boolean === true) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
      alert("try again login failed")
    }
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
  }

  return (
    <Router>
    {(lat.length > 0 && lon.length > 0) ?  <Redirect to="/mountain" />: ""}
      <div>
        <Nav
          resetCity={resetCity}
          loggedIn={loggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Home
              handleCity={handleCity}
            />
          </Route>
          <Route exact path="/mountain">
            <Mountain
              lat={lat}
              lon={lon}
              city={city}
              resetCity={resetCity}
            />
          </Route>
          <Route exact path="/login">
            <Login
              loggedIn={loggedIn}
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="/signup">
            <Signup
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="/logout">
            <Logout
              loggedIn={loggedIn}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/profile">
            <Profile
              handleCity={handleCity}
            />
          </Route>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/day">
            <Day />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
