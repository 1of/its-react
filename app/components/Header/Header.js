import React from 'react';
import styled from 'styled-components';
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
  'magento_migration',
];
const mainMenuItems = ['portfolio', 'career', 'outstaffing', 'contacts'];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1170px;
  margin: auto;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // do something
    };
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
        <Wrapper>
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
                id="collasible-nav-dropdown"
                title={
                  <NavLink
                    to="/services"
                    className="nav-link"
                    activeStyle={{
                      color: '#ff3100',
                    }}
                    style={{ padding: '0 5px 0 0' }}
                  >
                    <FormattedMessage {...messages.services} />
                  </NavLink>
                }
              >
                {/* Dropdown menu items */}
                {servicesMenuItems.map((item, index) => (
                  <NavLink
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    to={`/${item}`}
                    className="dropdown-item"
                  >
                    <FormattedMessage
                      id={`boilerplate.components.Header.${item}`}
                    />
                  </NavLink>
                ))}
              </NavDropdown>

              {mainMenuItems.map((item, index) => (
                <NavLink
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  to={`/${item}`}
                  className="nav-link"
                  activeStyle={{
                    color: '#ff3100',
                  }}
                >
                  <FormattedMessage
                    id={`boilerplate.components.Header.${item}`}
                  />
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Wrapper>
      </Navbar>
    );
  }
}

export default Header;
