import "./App.css";
import "../src/assets/css/reset.css";
import "../src/assets/css/sheet.css";

import Comics from "../src/containers/Comics.js";
import Home from "../src/containers/Home.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "../src/containers/Home.js";
// import Comics from "../src/containers/Comics.js";
//
//
//

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Comics/:id">
            <Comics />
          </Route>
          <Route path="/Comics/">
            <Comics />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
