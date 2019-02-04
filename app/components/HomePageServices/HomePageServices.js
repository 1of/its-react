import React from 'react';

import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import './HomePageServices.scss';

// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class HomePageServices extends React.Component {
  render() {
    return (
      <div className="services-all wrapper">
        <div className="single-service-block">
          <h3>Technology expertise</h3>
          <hr />
          <p>Industry</p>
          <ul>
            <li>Cyber Security</li>
            <li>Big Data</li>
            <li>Financial Technology</li>
            <li>Health and Medical Technology</li>
            <li>Robotics</li>
            <li>Media and Film</li>
            <li>E-Commerce</li>
          </ul>
          <p>Custom Development</p>
          <ul>
            <li>Mockups and Redesign</li>
            <li>Magento Extensions</li>
            <li>Magento Migrations</li>
            <li>Custom modules and plugins</li>
          </ul>
          <p>Website Maintenance</p>
          <ul>
            <li>24/7 support and audit</li>
          </ul>
          <p>Expertise</p>
          <ul>
            <li>Online Shopping Store</li>
            <li>CRM &amp; EPR system</li>
            <li>Social Network</li>
            <li>Crowd funding platform</li>
            <li>p2p landing platdorm</li>
          </ul>
          <Link to="/services" className="link-orange">
            Case study
          </Link>
        </div>
        <div className="single-service-block">
          <h3>Web Development</h3>
          <hr />
          <p>Backend Technologies</p>
          <ul>
            <li>Java</li>
            <li>.Net</li>
            <li>PHP</li>
          </ul>
          <p>Platforms</p>
          <ul>
            <li>Magento 2/1</li>
            <li>Wordpress</li>
            <li>October CMS</li>
          </ul>
          <p>PHP Frameworks</p>
          <ul>
            <li>Laravel</li>
            <li>Symfony</li>
            <li>Yii</li>
          </ul>
          <p>Frontend Technologies</p>
          <ul>
            <li>HTML5/CSS3</li>
            <li>Javascript</li>
            <li>Angular</li>
            <li>React.js</li>
            <li>Vue.js</li>
          </ul>
          <p>UI/UX/Design</p>
          <Link to="/portfolio" className="link-orange">
            View portfolio
          </Link>
        </div>
        <div className="single-service-block">
          <h3>Outsourcing/outstaffing</h3>
          <hr />
          <p>Dedicated Team for Startups</p>
          <ul>
            <li>Business analysis</li>
            <li>Tech Consult</li>
            <li>Engineering team</li>
            <li>Quality assurance</li>
          </ul>
          <p>Technologies</p>
          <ul>
            <li>Java Developers</li>
            <li>.NET Developers</li>
            <li>PHP Developers</li>
            <li>Magento Developers</li>
            <li>Wordpress Developers</li>
            <li>Laravel Developers</li>
            <li>Angular Developers</li>
            <li>React.js Developers</li>
            <li>Vue.js Developers</li>
            <li>Web Design</li>
          </ul>
          <Link to="/outstaffing" className="link-orange">
            Know more
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePageServices;
