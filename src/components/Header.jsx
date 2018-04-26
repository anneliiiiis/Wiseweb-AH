import React, { Component } from "react";
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const styles = {
  header: {
    position: "fixed",
    zIndex: "1",
    '& .btn': {
      backgroundColor: '#1c1b50',
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
    return (
      <StyledHeader>
        {this.props.children}
        <Button>
          <Link to={this.props.link}>{this.props.linkName}</Link>
        </Button>
      </StyledHeader>
    )
  }
}

