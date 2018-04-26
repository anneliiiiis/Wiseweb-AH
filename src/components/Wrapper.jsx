import React, { Component } from "react";

export class Container extends Component {
  render() {
    return(
      <div className="container">
        { this.props.children }
      </div>
    )
  }
}

export class Row extends Component {
  render() {
    return(
      <div className="row">
        { this.props.children }
      </div>
    )
  }
}

export class Slope extends Component {
  render() {
    return(
      <div className="slope">
        { this.props.children }
      </div>
    )
  }
}

export class ColumnPaddingY extends Component {
  render() {
    const columnClass= `col-${this.props.breakpoint}-${this.props.colNumber} py-${this.props.paddingNumber}`;
    return(
      <div className={columnClass}>
        { this.props.children }
      </div>
    )
  }
}
