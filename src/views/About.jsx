import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbouts } from '../actions/index';
class Abouts extends Component {
  componentWillMount() {
    this.props.fetchAbouts(this.props.locale);
  }
  componentWillUpdate() {
    this.props.fetchAbouts(this.props.locale);
  }
  renderAbouts() {
    return this.props.abouts.map((about, index) => {
      return (
        <article key={about.sys.id}>
          <p>{about.fields.text}</p>
        </article>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderAbouts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { abouts: state.abouts.all };
}
export default connect(mapStateToProps, { fetchAbouts })(Abouts);