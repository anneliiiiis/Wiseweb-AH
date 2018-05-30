import React, { Component } from "react";
import { Container } from "./Wrapper";
import Zoom from 'react-reveal/Zoom';
import TabelImage from  "../images/table.png";
import BannerImage from  "../images/banner_text_image.png";
import { Image, Col } from 'react-bootstrap';
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';
import BackImage from  '../images/lights.jpg';
import Benefits from './Benefits'
import Images from './Image'

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
    paddingLeft: "10px",
    paddingRight: "10px",
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
  },
  testContainer: {
    display: "flex",
    '& li': {
      paddingTop: "15px",
      fontSize: "13px"
    },
    '& ul':{
      listStyleType: "none",
      paddingLeft: "0"
    }
  },
  mainPath: {

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
  <section className={ classes.Sections }>{ children }</section>
))

InfoSectionDiv.defaultProps = {
  sectionBackground: "#fef4f4",
  sectionFontSize: "18px",
  sectionPosition: "relative"
}


export const BenefitsSectionDiv = injectSheet(styles)(({classes, children}) => (
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
const TestContainer = injectSheet(styles)(({classes, children}) => (
  <Container>
    <div className={classes.testContainer}>{ children }</div>
  </Container>
));

export class MainSection extends Component {
  render() {
    return(
      <FrontSectionDiv>
        { this.props.children }
      </FrontSectionDiv>
    );
  }
}
export class InfoSection extends Component {
  render() {
    return(
      <InfoSectionDiv>
        <SectionContainer>
          <Zoom>
            <Image alt="table" className="img-fluid" src={TabelImage} />
          </Zoom>
          <Zoom>
            { this.props.children }
          </Zoom>
        </SectionContainer>
      </InfoSectionDiv>
    );
  }
}


export class BenefitsSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <BenefitsSectionDiv>
        <SectionContainer>
          <Zoom>
            <Images/>
          </Zoom>
          <ul>
            <Benefits locale={this.props.locale}/>
          </ul>
          <Zoom>
            <h3>{this.props.joinUs}</h3>
          </Zoom>
        </SectionContainer>
      </BenefitsSectionDiv>
    );
  }
}

export class TestSection extends Component {
  render() {
    return(
      <InfoSectionDiv>
        <Container>
          { this.props.children }
        </Container>
      </InfoSectionDiv>
    );
  }
}

export class TestPath extends Component {
  render() {
    const listItems = this.props.paths.map((path) =>
      <li key={path}>{path}</li>
    );
    return(
      <Col md={this.props.col}>
        <ul>
          {listItems}
        </ul>
      </Col>
    );
  }
}

export class TestPaths extends Component {
  render() {
    return(
      <BenefitsSectionDiv>
        <TestContainer>
          <TestPath paths={this.props.mainPaths} col="4"/>
          <TestPath paths={this.props.easyPaths} col="4"/>
          <TestPath paths={this.props.adPaths} col="4"/>
        </TestContainer>
      </BenefitsSectionDiv>
    );
  }
}

