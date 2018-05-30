import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';
class Image extends Component {
  componentWillMount() {
    this.props.fetchImages(this.props.locale);
  }
  componentWillUpdate() {
    this.props.fetchImages(this.props.locale);
  }
  renderImages() {
    return this.props.images.map((image, index) => {
      const img = `https://${image.fields.file.url}`;
      return (
        <article key={image.sys.id}>
          <img src={img} alt={image.fields.title} ></img>

        </article>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderImages()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { images: state.images.all };
}
export default connect(mapStateToProps, { fetchImages })(Image);