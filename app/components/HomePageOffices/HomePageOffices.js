import React from 'react';

import './HomePageOffices.scss';

/* eslint-disable react/prefer-stateless-function */
class HomePageOffices extends React.Component {
  render() {
    return (
      <div className="offices-wrap">
        <div className="tabs-wrap tab1-bg">
          <div className="commonStyle wrapper">
            <div>
              <span className="tab-link">Ukraine</span>
              <div className="tab-content default-target">
                <h3>kharkiv</h3>
                <p>Ukraine, 61000</p>
                <p>Koneva Street, 4</p>
              </div>
            </div>

            <div>
              <span className="tab-link czech">Czech Republic</span>
              <div className="tab-content">
                <h3>Prague</h3>
                <p>
                  Praha 8, Czech Republic, <br />
                  18000, NA ZERTVACH 2230/44
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageOffices;
