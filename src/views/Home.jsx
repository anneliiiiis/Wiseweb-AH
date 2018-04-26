import React, { Component } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import { Logo } from "../components/Logo";
import { MainSection, InfoSection, Benefits } from "../components/Sections";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    const benefits = ["working with innovative technologies", "being part of a really wise team", "gaining experience from the best"];
    const infoText = "We are a Software House developing solutions for banking and credit industry. Our technology enables our customers to serve end-users around the world, from Georgia to Argentina. Our portfolio contains Ruby on Rails based solutions for workflow management, credit scoring, payment gateways and many others."
    const joinUsText = "Like it? You can join our team!"

    return (
      <div className="home">
        <Header>
          <Link to='/purple'>Go to Purple</Link>
        </Header>
        <MainSection>
            <Logo/>
        </MainSection>
        <Content>
          <Benefits  joinUs={joinUsText} benefits={benefits}/>
          <InfoSection info={infoText}/>
        </Content>
      </div>
    )
  }
}
