import React, { Component } from "react";
import { Container } from "./Wrapper";
import Zoom from 'react-reveal/Zoom';
import TabelImage from  "../images/table.png";
import BannerImage from  "../images/banner_text_image.png";
import { Image } from 'react-bootstrap';
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';
import BackImage from  "../images/lights.jpg";

jss.setup(preset());

const styles = {
  Sections: (props) => ({
    background: props.sectionBackground,
    height: props.sectionHeight,
    backgroundSize: props.sectionBackgroundSize,
    fontSize: props.sectionFontSize,
    color: props.sectionColor,
    textTransform: props.sectiontextTransform,
    paddingTop: "30px",
    paddingBottom: "30px",
    textAlign: "center",
    width: "100%",
    position: props.sectionPosition
  }),
  sectionContainer: {
    '& img': {
      maxHeight: "200px",
      maxWidth: "100%",
      height: "auto"
    },
    '& h3': {
      color: "#ed2024",
    },
    '& li': {
      paddingTop: "15px"
    },
    '& ul':{
      listStyleType: "none",
      paddingLeft: "0"
    }
  }
}

const FrontSectionDiv = injectSheet(styles)(({classes, children}) => (
  <section className={classes.Sections}>{ children }</section>
));


FrontSectionDiv.defaultProps = {
  sectionBackground: `url(${BackImage}) no-repeat center center fixed`,
  sectionHeight: "100%",
  sectionBackgroundSize: "cover",
  sectionPosition: "fixed"
}

const InfoSectionDiv = injectSheet(styles)(({classes, children}) => (
  <section className={classes.Sections}>{ children }</section>
))

InfoSectionDiv.defaultProps = {
  sectionBackground: "#fef4f4",
  sectionFontSize: "18px",
  sectionPosition: "relative"
}


const BenefitsSectionDiv = injectSheet(styles)(({classes, children}) => (
  <section className={classes.Sections}>{ children }</section>
))

BenefitsSectionDiv.defaultProps = {
  sectionBackground: "#fff",
  sectionFontSize: "20px",
  sectionColor: "#163962",
  sectiontextTransform: "uppercase",
  sectionPosition: "relative"
}

const SectionContainer = injectSheet(styles)(({classes, children}) => (
  <Container>
    <div className={classes.sectionContainer}>{ children }</div>
  </Container>
));

export class MainSection extends Component {
  render() {
    return(
      <FrontSectionDiv>
        { this.props.children }
      </FrontSectionDiv>
    )
  }
}
export class InfoSection extends Component {
  render() {
    return(
      <InfoSectionDiv>
        <SectionContainer>
          <div>
            <Zoom>
              <Image alt="table" className="img-fluid" src={TabelImage} />
            </Zoom>
          </div>
          <div>
            <Zoom>
              {this.props.info}
            </Zoom>
          </div>
        </SectionContainer>
      </InfoSectionDiv>
    )
  }
}

export class Benefits extends Component {
  render() {
    const listItems = this.props.benefits.map((benefit) =>
      <Zoom key={benefit}>
        <li key={benefit}><b>{benefit}</b></li>
      </Zoom>
    );
    return(
      <BenefitsSectionDiv>
        <SectionContainer>
          <div>
            <Zoom>
              <Image alt ="Imagine you are here" src={BannerImage} />
            </Zoom>
          </div>
          <div>
            <ul>
              {listItems}
            </ul>
          </div>
          <div>
            <Zoom>
              <h3>{this.props.joinUs}</h3>
            </Zoom>
          </div>
        </SectionContainer>
      </BenefitsSectionDiv>
    )
  }
}
