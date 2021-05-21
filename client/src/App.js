import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Mountain from "./pages/Mountain";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import DeveloperContext from "./utils/DeveloperContext";

function App() {
  const [developerState, setDeveloperState] = useState({
    city: "",
    user: ""
  });

  function handleCity(event) {
    event.preventDefault();
    const query = event.target.value;
    setDeveloperState({
      ...developerState,
      city: query
    });
    console.log(developerState.city)
    document.location.replace("/mountain");
  }

  return (
    <DeveloperContext.Provider value={developerState}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home
                handleCity={handleCity}
              />
            </Route>
            <Route exact path="/mountain">
              <Mountain developerState={developerState}/>
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </DeveloperContext.Provider>

  );
}

export default App;
