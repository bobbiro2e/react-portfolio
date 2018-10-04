import React, { Component } from 'react';
import Home from "./components/pages/Home/Home";
import Bio from "./components/pages/Bio/Bio";
import Work from "./components/pages/Work/Work";
import Four from "./components/pages/FourOhFour/FourOhFour";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/work" component={Work} />
            <Route component={Four} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
