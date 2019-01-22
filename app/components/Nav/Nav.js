import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavLink from './NavLink';
import messages from './messages';
import Logo from './logo.svg';
import './Nav.scss';
/* eslint-disable react/prefer-stateless-function */
class Nav extends React.Component {
  render() {
    return (
      <div className="head-outer">
        <div className="header-block" id="heading" />
        <div className="logo">
          <a href="index.html">
            <img src={Logo} alt="Intechsoft" />
          </a>
          <a href="#menu" className="menu-link active">
            <span>
              <i className="fa fa-bars" />
            </span>
          </a>
        </div>
        <nav id="menu" className="menu">
          <ul className="level-1">
            <li>
              <NavLink to="/services">
                <FormattedMessage {...messages.services} />
              </NavLink>
              <span className="has-subnav">
                <i className="fa fa-sort-down"> </i>
              </span>
              <ul className="wide level-2">
                <li className="sub-lvl-2">
                  <NavLink to="/">
                    <FormattedMessage {...messages.design} />
                  </NavLink>
                </li>
                <li className="sub-lvl-2">
                  <a href="magento_development.html">Magento development</a>
                </li>
                <li className="sub-lvl-2">
                  <a href="magento_extension_dev.html">extension development</a>
                </li>
                <li className="sub-lvl-2">
                  <a href="magento_hosting.html">Magento hosting</a>
                </li>
                <li className="sub-lvl-2">
                  <a href="magento-migration.html">Magento migration</a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/portfolio">
                <FormattedMessage {...messages.portfolio} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/career">
                <FormattedMessage {...messages.career} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/outstaffing">
                <FormattedMessage {...messages.outstaffing} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FormattedMessage {...messages.contact} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
