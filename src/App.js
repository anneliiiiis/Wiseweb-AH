import React, { Component } from 'react';
import Home from "./views/Home";
import Purple from "./views/Purple";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    const copyright = `${(new Date().getFullYear())} Wisemedia`
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/" exact
                  render={() => (
                    <div>
                      <Header link="/purple" linkName="Go to purple"></Header>
                      <Home/>
                    </div>
                  )} />
            <Route
              path="/purple"
                  render={() => (
                    <div>
                      <Header link="/" linkName="Go to home"></Header>
                      <Purple/>
                    </div>
                  )} />

          </Switch>
          <Footer copyright={copyright} email="STAR@WISEMEDIA.EE" phone="+37256707015" address="SOOLA 3, TARTU" addressLink="https://goo.gl/maps/T8qBq2pKq252"/>
        </div>
      </Router>
    );
  }
}

export default App;
