import React, { Component } from 'react';
import Home from "./views/Home";
import Purple from "./views/Purple";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    const copyright = `${(new Date().getFullYear())} Wisemedia`
    return (
      <div className="app">
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
        <Footer copyright={copyright} email="STAR@WISEMEDIA.EE" phone="+37256707015" address="SOOLA 3, TARTU" addressLink="https://goo.gl/maps/T8qBq2pKq252"/>
      </div>
    );
  }
}

export default App;
