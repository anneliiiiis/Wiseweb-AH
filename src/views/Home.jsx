import React, { Component } from "react";
import Content from "../components/Content";
import { Logo } from "../components/Logo";
import { MainSection, InfoSection, Benefits } from "../components/Sections";
import i18n from'../components/i18n';

export default class Home extends Component {
  render() {
    const benefits = [i18n.t('benefit.innovative_technologies'),  i18n.t('benefit.wise_team'), i18n.t('benefit.gain_exp')];
    const infoText = "We are a Software House developing solutions for banking and credit industry. Our technology enables our customers to serve end-users around the world, from Georgia to Argentina. Our portfolio contains Ruby on Rails based solutions for workflow management, credit scoring, payment gateways and many others."
    const joinUsText = "Like it? You can join our team!"
    return (
      <div>
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
