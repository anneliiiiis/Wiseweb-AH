import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBenefits } from '../actions/index';

class Benefits extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBenefits(this.props.locale);
  }
  componentWillUpdate() {
    this.props.fetchBenefits(this.props.locale);
  }
  renderBenefits() {
    return this.props.benefits.map((benefit, index) => {
      return (
        <li key={benefit.sys.id}>
          {benefit.fields.name}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderBenefits()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { benefits: state.benefits.all };
}
export default connect(mapStateToProps, { fetchBenefits })(Benefits);