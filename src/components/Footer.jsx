import React, { Component } from "react";
import { Container, ColumnPaddingY } from "./Wrapper";
import PhoneNumber from 'react-phone-number';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <Container>
          <div className="row py-3">
            <ColumnPaddingY breakpoint="md" colNumber="3" paddingNumber="2">
              <FontAwesome name="copyright" className="pr-2"/>
              {this.props.copyright}
            </ColumnPaddingY>
            <ColumnPaddingY breakpoint="md" colNumber="3" paddingNumber="2">
              <FontAwesome name="map-marker" className="pr-2"/>
              <a href={this.props.addressLink} target="_blank">
                {this.props.address}
              </a>
            </ColumnPaddingY>
            <ColumnPaddingY breakpoint="md" colNumber="3" paddingNumber="2">
              <FontAwesome name="envelope" className="pr-2"/>
              <a href={"mailto:" + this.props.email}>
                {this.props.email}
              </a>
            </ColumnPaddingY>
            <ColumnPaddingY breakpoint="md" colNumber="3" paddingNumber="2">
              <FontAwesome name="phone" className="pr-2"/>
              <PhoneNumber number={this.props.phone} isLinked={true}/>
            </ColumnPaddingY>
          </div>
        </Container>
      </footer>
    )
  }
}
