import React, { Component } from "react";
import Content from "../components/Content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { MainSection, InfoSection, Benefits } from "../components/Sections";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';

jss.setup(preset());

const styles = {
  fullHeight:{
    height: "100%"
  },
  headerButton: {
   backgroundColor: '#1c1b50',
   '& a':{
    color: '#fff',
   }
  }
}

export const StyledButton = injectSheet(styles)(({classes, children}) => (
  <Button className={classes.headerButton}>
    { children }
  </Button>
))
export const FullHeightDiv = injectSheet(styles)(({classes, children}) => (
  <div className={classes.fullHeight}>
    { children }
  </div>
))

export default class Home extends Component {
  render() {
    const benefits = ["working with innovative technologies", "being part of a really wise team", "gaining experience from the best"];
    const infoText = "We are a Software House developing solutions for banking and credit industry. Our technology enables our customers to serve end-users around the world, from Georgia to Argentina. Our portfolio contains Ruby on Rails based solutions for workflow management, credit scoring, payment gateways and many others."
    const joinUsText = "Like it? You can join our team!"
    const copyright = `${(new Date().getFullYear())} Wisemedia`

    return (
      <FullHeightDiv>
        <Header>
          <StyledButton>
            <Link to='/purple'>Go to Purple</Link>
          </StyledButton>
        </Header>
        <MainSection>
            <Logo/>
        </MainSection>
        <Content>
          <Benefits  joinUs={joinUsText} benefits={benefits}/>
          <InfoSection info={infoText}/>
        </Content>
        <Footer copyright={copyright} email="STAR@WISEMEDIA.EE" phone="+37256707015" address="SOOLA 3, TARTU" addressLink="https://goo.gl/maps/T8qBq2pKq252"/>
      </FullHeightDiv>
    )
  }
}
