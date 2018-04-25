import React, { Component } from 'react';
import Home from "./views/Home";
import Purple from "./views/Purple";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/" exact
                render={() => (
                  <Home/>
                )} />
          <Route
            path="/purple"
                render={() => (
                  <Purple/>
                )} />

        </Switch>
      </Router>
    );
  }
}

export default App;
