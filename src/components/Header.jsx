import React, { Component } from "react";
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';

const styles = {
  header: {
    position: "absolute",
  }
}

export const Header = injectSheet(styles)(({ classes, children }) => (
  <header className={classes.header}>
    { children }
  </header>
))


