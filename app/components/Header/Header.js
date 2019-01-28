import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import messages from './messages';
import Logo from './logo.svg';
import './Header.scss';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
        <NavLink to="/">
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
              <Link to="/magento-design" className="dropdown-item">
                <FormattedMessage {...messages.magento_design} />
              </Link>
              <Link to="/magento-development" className="dropdown-item">
                <FormattedMessage {...messages.magento_development} />
              </Link>
              <Link to="/magento-extension" className="dropdown-item">
                <FormattedMessage {...messages.magento_extension} />
              </Link>
              <NavDropdown.Divider />
              <Link to="/magento-hosting" className="dropdown-item">
                <FormattedMessage {...messages.magento_hosting} />
              </Link>
              <Link to="/magento-migration" className="dropdown-item">
                <FormattedMessage {...messages.magento_migration} />
              </Link>
            </NavDropdown>
            <Link to="/portfolio" className="nav-link">
              <FormattedMessage {...messages.portfolio} />
            </Link>
            <Link to="/career" className="nav-link">
              <FormattedMessage {...messages.career} />
            </Link>
            <Link to="/outstaffing" className="nav-link">
              <FormattedMessage {...messages.outstaffing} />
            </Link>
            <Link to="/contacts" className="nav-link">
              <FormattedMessage {...messages.contacts} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
