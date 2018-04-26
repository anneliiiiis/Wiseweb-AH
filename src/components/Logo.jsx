import React, { Component } from "react";
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';
import LogoImage from  "../images/wisemedia_logo.svg";

jss.setup(preset());

const styles = {
  logo:{
    background: `url(${LogoImage}) no-repeat center center fixed`,
    height: "100%",
    '@media (min-width: 600px)': {
      backgroundSize: "600px 175px"
    }
  }
}

const LogoDiv = injectSheet(styles)(({classes, children}) => (
  <div className={classes.logo}></div>
))

export class Logo extends Component {
  render() {
    return(
      <LogoDiv/>
    )
  }
}
