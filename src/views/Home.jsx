import React, { Component } from "react";
import { PrimaryButton } from "../components/Button";
import { Container, Row } from "../components/Wrapper";

export default class Home extends Component {
  render() {
    return (
      <header>
        <Container>
          <PrimaryButton >
            Hello
          </PrimaryButton>
        </Container>
      </header>
    )
  }
}
