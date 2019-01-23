import React from 'react';
import './HomePageSlider.scss';

/* eslint-disable react/prefer-stateless-function */
class HomePageSlider extends React.Component {
  render() {
    return (
      <div className="slider-container">
        <div className="slider-wrap">
          <div className="slide">
            <div className="slide_1">
              <div className="slider-text-box">
                <div>
                  <p className="bolder-txt">
                    7 Years of Development
                    <br />
                  </p>
                  <p>
                    Certified Magento Developers <br />
                    with 7 years experience{' '}
                  </p>
                </div>
                <div className="slider-logos_2" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide_2">
              <div className="slider-text-box">
                <div>
                  <p className="bolder-txt">
                    More than 100 Magento projects <br /> finished!
                  </p>
                  <p>
                    Low operating costs <br />
                    company
                  </p>
                </div>
                <div className="slider-logos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageSlider;
