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
    backgroundColor: '#1c1b50',
    height: "40px",
    '& .btn': {
      backgroundColor: '#1c1b50',
      color: '#fff',
      '& a':{
        color: '#fff',
      }
    }
  }
}

const StyledHeader = injectSheet(styles)(({ classes, children }) => (
  <header className={classes.header}>
    { children }
  </header>
))

export class Header extends Component {
  render() {
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <StyledHeader>
        {this.props.children}
        <Button onClick={() => changeLanguage('est')}>EST</Button>
        <Button onClick={() => changeLanguage('en')}>EN</Button>
        <Button>
          <Link to={this.props.link}>{this.props.linkName}</Link>
        </Button>
      </StyledHeader>
    )
  }
}

