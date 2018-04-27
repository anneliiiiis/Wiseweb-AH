import React, { Component } from "react";
import Content from "../components/Content";
import { Logo } from "../components/Logo";
import { MainSection, InfoSection, Benefits } from "../components/Sections";
import i18n from'../components/i18n';

export default class Home extends Component {
  render() {
    const benefits = [i18n.t('benefit.innovative_technologies'),  i18n.t('benefit.wise_team'), i18n.t('benefit.gain_exp')];
    const infoText = i18n.t('about_us');
    const joinUsText = i18n.t('join_team');
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
