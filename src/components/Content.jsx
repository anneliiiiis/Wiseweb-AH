import React, { Component } from "react";
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';

jss.setup(preset());

const styles = {
  content:{
    paddingTop: "100%"
  }
}
const StyledContent = injectSheet(styles)(({classes, children}) => (
  <div className={classes.content}>
    { children }
  </div>
))
export default class Content extends Component {
  render() {
    return(
      <StyledContent>
        { this.props.children }
      </StyledContent>
    )
  }
}
