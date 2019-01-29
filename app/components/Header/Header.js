import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
// import NavLink from './NavLink';
import messages from './messages';
import Logo from './logo.svg';
import './Header.scss';

/* eslint-disable react/prefer-stateless-function */

const servicesMenuItems = [
  'magento_design',
  'magento_development',
  'magento_extension',
  'magento_hosting',
  'magento_migration'
];
const mainMenuItems = [
  'portfolio',
  'career',
  'outstaffing',
  'contacts'
];

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }


  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
        <NavLink to="/" className="logo">
          <img src={Logo} alt="Intechsoft" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>

            <NavDropdown
              title={<FormattedMessage {...messages.services} />}
              id="collasible-nav-dropdown"
            >
              {/*Dropdown menu items*/}
              {
                servicesMenuItems.map((item, index) =>
                <NavLink key={index} to={'/'+item} className="dropdown-item">
                  <FormattedMessage id={`boilerplate.components.Header.`+item} />
                </NavLink>)
              }

            </NavDropdown>

            {
              mainMenuItems.map((item, index) =>
                <NavLink
                  key={index}
                  to={'/'+item}
                  className="nav-link"
                  activeStyle={{
                    color: "#ff3100"
                  }}>
                  <FormattedMessage id={`boilerplate.components.Header.`+item} />
                </NavLink>)
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
