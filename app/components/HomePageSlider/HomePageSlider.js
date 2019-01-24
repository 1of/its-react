import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePageSlider.scss';

import Slide1 from './img/team_slide.jpg';
import Slide2 from './img/slide_1.jpg';
import Certification from './img/certs.png';
import Projection from './img/projection.png';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class HomePageSlider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      interval: 7000,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    const backgroundImg = {
      slide1: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 0%,rgba(0,0,0,0.43) 0%,rgba(0,0,0,0.43) 0%), url(${Slide1})`,
      },
      slide2: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 0%,rgba(0,0,0,0.43) 0%,rgba(0,0,0,0.43) 0%), url(${Slide2})`,
      },
    };

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        interval={this.state.interval}
        fade
      >
        <Carousel.Item>
          <div style={backgroundImg.slide1} className="slide-block">
            <Carousel.Caption>
              <p className="bolder-txt">
                <FormattedMessage {...messages.yearsdev} />
                <br />
              </p>
              <span>
                Certified Magento Developers <br />
                with 7 years experience{' '}
              </span>
              <img
                src={Certification}
                className="caption-img"
                alt="magento-certification-logo"
              />
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={backgroundImg.slide2} className="slide-block">
            <Carousel.Caption>
              <p className="bolder-txt">
                More than 100 Magento projects
                <br /> finished!
              </p>
              <img
                src={Projection}
                className="caption-proj-img"
                alt="magento-projects-logo"
              />
              <span>
                Low operating costs <br />
                company{' '}
              </span>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomePageSlider;
