import React, { Component } from "react";
import { Container } from "../components/Wrapper";
import jss from 'jss';
import { TestSection } from "../components/Sections";
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';
import i18n from'../components/i18n';

jss.setup(preset());

const styles = {
  purpleText: {
    fontStyle: 'italic',
    paddingTop: "100px",
    fontSize: "30px"
  }
}

const StyledContentText = injectSheet(styles)(({ classes, children }) => (
  <p className={classes.purpleText}>
    { children }
  </p>
))

export default class Purple extends Component {
  render() {
    return (
      <div>
        <Container>
          <StyledContentText>
            {i18n.t('purpleSquirrelTest')}
          </StyledContentText>
          <TestSection>
          </TestSection>
        </Container>
      </div>
    )
  }
}
