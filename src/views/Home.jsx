import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { InfoSection, Benefits } from "../components/Sections";

export default class Home extends Component {
  render() {
    const benefits = ["working with innovative technologies", "being part of a really wise team", "gaining experience from the best"];
    const infoText = "We are a Software House developing solutions for banking and credit industry. Our technology enables our customers to serve end-users around the world, from Georgia to Argentina. Our portfolio contains Ruby on Rails based solutions for workflow management, credit scoring, payment gateways and many others."
    const joinUsText = "Like it? You can join our team!"
    const copyright = `${(new Date().getFullYear())} Wisemedia`

    return (
      <div className="home">
        <Header/>
        <Benefits  joinUs={joinUsText} benefits={benefits}/>
        <InfoSection info={infoText}/>
        <Footer copyright={copyright} email="STAR@WISEMEDIA.EE" phone="+37256707015" address="SOOLA 3, TARTU" addressLink="https://goo.gl/maps/T8qBq2pKq252"/>
      </div>
    )
  }
}
