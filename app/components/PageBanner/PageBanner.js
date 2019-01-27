import React from 'react';
import PropTypes from 'prop-types';
import './PageBanner.scss';

const PageBanner = props => (
  <div
    className="header-banner"
    style={{ backgroundImage: `url(${props.bannerImage})` }}
  >
    <div className="transparent-block">
      <h1>{props.bannerText}</h1>
    </div>
  </div>
);

PageBanner.propTypes = {
  bannerImage: PropTypes.string,
  bannerText: PropTypes.string,
};

export default PageBanner;

PageBanner.defaultProps = {
  bannerText: 'Banner text',
  bannerImage: 'image/path',
};
