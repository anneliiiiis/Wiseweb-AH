import React, { Component } from "react";
import { Container } from "./Wrapper";
import PhoneNumber from 'react-phone-number';
import FontAwesome from 'react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  footer: {
    backgroundColor: "#1c1b50",
    color: "#fff",
    position: "relative",
    '& div': {
      textAlign: "center",
      paddingTop: "5px",
      paddingBottom: "5px",
    },
    '& a': {
      color: "#fff",
      '&:hover': {
        color: "#fff"
      }
    },
    '& span': {
      paddingRight: "5px"
    }
  }
}

const FooterDiv = injectSheet(styles)(({ classes, children }) => (
  <footer className={classes.footer}>
    <Container>
      <Row>
        { children }
      </Row>
    </Container>
  </footer>
))

class FooterPart extends Component {
  render() {
    return(
      <Col md={3}>
        <FontAwesome name={this.props.fontName}/>
        {this.props.children}
      </Col>
    );
  }
}

export class Footer extends Component {
  render() {
    return(
      <FooterDiv>
        <FooterPart fontName="copyright">
          {this.props.copyright}
        </FooterPart>
        <FooterPart fontName="map-marker">
          <a href={this.props.addressLink} target="_blank">
            {this.props.address}
          </a>
        </FooterPart>
        <FooterPart fontName="envelope">
          <a href={"mailto:" + this.props.email}>
            {this.props.email}
          </a>
        </FooterPart>
        <FooterPart fontName="phone">
          <PhoneNumber number={this.props.phone} isLinked={true}/>
        </FooterPart>
      </FooterDiv>
    )
  }
}
