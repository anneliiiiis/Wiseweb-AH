import React, { Component } from "react";
import { Container } from "../components/Wrapper";
import jss from 'jss';
import { TestSection, TestPaths } from "../components/Sections";
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
    const mainPaths = [i18n.t('test_path.web_ui'),  i18n.t('test_path.api_integration'), i18n.t('test_path.inserting_data'),  i18n.t('test_path.querying_API'),  i18n.t('test_path.test_coverage'), i18n.t('test_path.user_authentication'), i18n.t('test_path.verify_permissions') ];
    const easyPaths = [i18n.t('easy_path.web_ui'), i18n.t('easy_path.optional'), i18n.t('test_path.web_ui'), i18n.t('easy_path.na'), i18n.t('easy_path.optional'), i18n.t('easy_path.optional'), i18n.t('easy_path.optional')];
    const adPaths = [i18n.t('ad_path.web_ui'), i18n.t('easy_path.optional'), i18n.t('test_path.web_ui'), i18n.t('easy_path.na'), i18n.t('easy_path.optional'), i18n.t('easy_path.optional'), i18n.t('easy_path.optional')];
    return (
      <div>
        <Container>
          <StyledContentText>
            {i18n.t('purpleSquirrelTest')}
          </StyledContentText>
        </Container>
        <TestSection text={i18n.t('test_text')}/>
        <TestPaths mainPaths={mainPaths} easyPaths={easyPaths} adPaths={adPaths}/>
        <TestSection text={i18n.t('test_text2')}/>
      </div>
    )
  }
}
