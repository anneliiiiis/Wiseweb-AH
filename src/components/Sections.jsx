import React, { Component } from "react";
import { Container } from "./Wrapper";
import Zoom from 'react-reveal/Zoom';
import TabelImage from  "../images/table.png";
import BannerImage from  "../images/banner_text_image.png";

export class InfoSection extends Component {
  render() {
    return(
      <section>
        <div className="infoSection py-5">
          <Container>
            <div className="col-md-12">
              <Zoom>
                <img alt="table" className="img-fluid py-2" src={TabelImage} />
              </Zoom>
            </div>
            <div className="col-md-12">
              <Zoom>
                {this.props.info}
              </Zoom>
            </div>
          </Container>
        </div>
      </section>
    )
  }
}

export class Benefits extends Component {
  render() {
    const listItems = this.props.benefits.map((benefit) =>
      <Zoom key={benefit}>
        <li className="benefit pt-1" key={benefit}><b>{benefit}</b></li>
      </Zoom>
    );
    return(
      <section>
        <div className="benefits py-5">
          <Container>
            <div className="col-md-12">
              <Zoom>
                <img alt ="Imagine you are here" className="img-fluid pt-1" src={BannerImage} />
              </Zoom>
            </div>
            <div className="col-md-12">
              <ul>
                {listItems}
              </ul>
            </div>
            <div className="col-md-12">
              <Zoom>
                <h3>{this.props.joinUs}</h3>
              </Zoom>
            </div>
          </Container>
        </div>
      </section>
    )
  }
}
