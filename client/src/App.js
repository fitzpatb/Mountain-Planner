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


  return (
    <DeveloperContext.Provider value={developerState}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home
                //handleCity={handleCity}
              />
            </Route>
            <Route exact path="/mountain">
              <Mountain />
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
