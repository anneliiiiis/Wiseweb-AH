import React, { Component } from "react";
import Content from "../components/Content";
import { Logo } from "../components/Logo";
import { MainSection, InfoSection, BenefitsSection } from "../components/Sections";
import i18n from'../components/i18n';
import About from './About';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const benefits = [i18n.t('benefit.innovative_technologies'),  i18n.t('benefit.wise_team'), i18n.t('benefit.gain_exp')];
    const joinUsText = i18n.t('join_team');
    return (
      <div>
        <MainSection>
            <Logo/>
        </MainSection>
        <Content>
          <BenefitsSection locale={this.props.locale} joinUs={joinUsText}/>
          <InfoSection>
            <About/>
          </InfoSection>
        </Content>
      </div>
    )
  }
}
