import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import { DefaultButton } from "../components/Button";

export default class Purple extends Component {
  render() {
    return (
      <div>
        <Header>
          <DefaultButton>
            <Link to='/'>Go to Home</Link>
          </DefaultButton>
        </Header>
        <p className="py-5">This is purple squirrel test</p>
      </div>
    )
  }
}
