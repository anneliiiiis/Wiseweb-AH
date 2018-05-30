import React, { Component } from "react";
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import i18n from'../components/i18n';

const styles = {
  header: {
    position: "fixed",
    zIndex: "1",
    width: "100%",
    height: "40px",
    '& a':{
      color: '#fff',
    }
  }
}

const StyledHeader = injectSheet(styles)(({ classes, children }) => (
  <header className={classes.header}>
    { children }
  </header>
))

const StyledLink = injectSheet(styles)(({ classes, children }) => (
  <div className={classes.link}>
    { children }
  </div>
))

export class Header extends Component {

  render() {
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <StyledHeader>
        {this.props.children}
        <Link to={this.props.link}>{this.props.linkName}</Link>
      </StyledHeader>
    )
  }
}

