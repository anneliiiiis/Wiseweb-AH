import React, { Component } from "react";

export class PrimaryButton extends Component {
  render() {
    return(
      <div className="btn btn-primary">
        { this.props.children }
      </div>
    )
  }
}
