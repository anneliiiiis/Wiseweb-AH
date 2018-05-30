import React, { Component } from 'react';
import Home from "./views/Home";
import Purple from "./views/Purple";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MyMapComponent } from "./components/Map";
import { translate } from 'react-i18next';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en-US',
    };
  }
  render() {
    const copyright = `${(new Date().getFullYear())} Wisemedia`
    const  i18n = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/" exact
                  render={() => (
                    <div>
                      <Header link="/purple" linkName={i18n.t('button.purpleBtn')}>
                        <Button onClick={() => this.setState({locale: 'en-US'})}> en </Button>
                        <Button onClick={() => this.setState({locale: 'et-EE'})}> ee </Button>
                      </Header>
                      <Home locale={this.state.locale}/>
                    </div>
                  )} />
            <Route
              path="/purple"
                  render={() => (
                    <div>
                      <Header link="/" linkName={i18n.t('button.homeBtn')}>
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
          <Footer
            copyright={copyright}
            email="STAR@WISEMEDIA.EE"
            phone="+37256707015"
            address="SOOLA 3, TARTU"
            addressLink="https://goo.gl/maps/T8qBq2pKq252"/>
        </div>
      </Router>
    );
  }
}

export default translate('translations')(App);

