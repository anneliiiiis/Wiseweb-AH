import React, { Component } from 'react';
import Home from "./views/Home";
import Purple from "./views/Purple";
import { Header , StyledHeader} from "./components/Header";
import { Footer } from "./components/Footer";
import { MyMapComponent } from "./components/Map";
import { translate, Trans } from 'react-i18next';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  render() {
    const copyright = `${(new Date().getFullYear())} Wisemedia`
    const { t, i18n } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <Router>
        <div>
          <div>
          </div>
          <Switch>
            <Route
              path="/" exact
                  render={() => (
                    <div>
                      <Header link="/purple" linkName={i18n.t('button.purpleBtn')}>
                        <button onClick={() => changeLanguage('est')}>EST</button>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                      </Header>
                      <Home/>
                    </div>
                  )} />
            <Route
              path="/purple"
                  render={() => (
                    <div>
                      <Header link="/" linkName={i18n.t('button.homeBtn')}>
                        <button onClick={() => changeLanguage('est')}>EST</button>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                      </Header>
                      <Purple/>
                    </div>
                  )} />

          </Switch>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAo1c40gBaxpgM9gGdJv6BHmFl7pPNLZiw"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <Footer copyright={copyright} email="STAR@WISEMEDIA.EE" phone="+37256707015" address="SOOLA 3, TARTU" addressLink="https://goo.gl/maps/T8qBq2pKq252"/>
        </div>
      </Router>
    );
  }
}

export default translate('translations')(App);

